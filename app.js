const readline = require('readline-sync');
const kb = require('./data/hardware.js');

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    preto: "\x1b[30m",
    vermelho: "\x1b[31m",
    verde: "\x1b[32m",
    amarelo: "\x1b[33m",
    azul: "\x1b[34m",
    magenta: "\x1b[35m",
    ciano: "\x1b[36m",
    branco: "\x1b[37m",
  },
  bg: {
    preto: "\x1b[40m",
    vermelho: "\x1b[41m",
    verde: "\x1b[42m",
    amarelo: "\x1b[43m",
    azul: "\x1b[44m",
    magenta: "\x1b[45m",
    ciano: "\x1b[46m",
    branco: "\x1b[47m",
  }
};

const forwardChain = function(assertions) {
  let ruleIndex = 0;
  let rule = kb[ruleIndex];

  while (ruleIndex < kb.length) {
    const allPremisesExist = rule.premises.every(premise =>
      assertions.some(assertion => assertion.attribute === premise.attribute && assertion.value === premise.value)
    );

    if (allPremisesExist && !assertions.some(assertion => assertion.attribute === rule.conclusion.attribute && assertion.value === rule.conclusion.value)) {
      console.log(`${colors.fg.azul}Aplicando Regra:${colors.reset} Se ${rule.premises.map(p => `${colors.fg.verde}${p.attribute} = ${p.value}${colors.reset}`).join(' e ')}, então ${colors.fg.magenta}${rule.conclusion.attribute} = ${rule.conclusion.value}${colors.reset}`);

      assertions.push(rule.conclusion);
      ruleIndex = 0;
    }
    else {
      rule = kb[++ruleIndex];
    }
  }

  return assertions;
};

const backChain = function(goal, assertions, depth = 0) {
  const indent = '  '.repeat(depth);

  assertions = assertions || [];

  let assertion = assertions.find(assertion => assertion.attribute === goal.attribute && assertion.value);

  if (assertion) {
    console.log(`${indent}${colors.fg.verde}Já sabemos que ${goal.attribute} = ${assertion.value}${colors.reset}`);
    return assertion;
  }

  for (let rule of kb) {
    if (rule.conclusion.attribute === goal.attribute) {
      console.log(`${indent}${colors.fg.azul}Considerando a regra:${colors.reset} Se ${rule.premises.map(p => `${colors.fg.amarelo}${p.attribute} = ${p.value}${colors.reset}`).join(' e ')}, então ${colors.fg.magenta}${rule.conclusion.attribute} = ${rule.conclusion.value}${colors.reset}`);

      let allPremisesTrue = true;

      for (let premise of rule.premises) {
        let premiseAssertion = backChain(premise, assertions, depth + 1);
        if (!premiseAssertion || premiseAssertion.value !== premise.value) {
          allPremisesTrue = false;
          console.log(`${indent}${colors.fg.vermelho}Não foi possível satisfazer a premissa: ${premise.attribute} = ${premise.value}${colors.reset}`);
          break;
        } else {
          console.log(`${indent}${colors.fg.verde}Premissa satisfeita: ${premise.attribute} = ${premise.value}${colors.reset}`);
        }
      }

      if (allPremisesTrue) {
        console.log(`${indent}${colors.fg.verde}Todas as premissas satisfeitas para a regra concluindo ${rule.conclusion.attribute} = ${rule.conclusion.value}${colors.reset}`);
        assertions.push(rule.conclusion);
        return rule.conclusion;
      } else {
        console.log(`${indent}${colors.fg.vermelho}Não foi possível satisfazer todas as premissas para esta regra.${colors.reset}`);
      }
    }
  }

  const value = readline.question(`${indent}${colors.fg.ciano}Qual é o valor de ${goal.attribute}? ${colors.reset}`);
  assertion = { attribute: goal.attribute, value };
  assertions.push(assertion);
  return assertion;
};

const method = readline.question(`${colors.fg.ciano}Digite 'P' para Encadeamento Progressivo ou 'R' para Encadeamento Regressivo: ${colors.reset}`).toUpperCase();

if (method === 'P') {
  let assertions = [];
  console.log(`${colors.fg.ciano}\nInsira seus atributos e valores conhecidos (pressione enter sem digitar nada para finalizar):${colors.reset}`);
  let attribute = readline.question(`${colors.fg.ciano}Insira um atributo? ${colors.reset}`);
  while (attribute) {
    let value = readline.question(`${colors.fg.ciano}Insira um valor? ${colors.reset}`);
    if (value) {
      assertions.push({ attribute, value });
    }
    attribute = readline.question(`${colors.fg.ciano}Insira um atributo? ${colors.reset}`);
  }

  if (assertions.length > 0) {
    console.log(`\n${colors.fg.magenta}Iniciando Encadeamento Progressivo...${colors.reset}\n`);
    assertions = forwardChain(assertions);
    console.log(`\n${colors.fg.magenta}Conclusões Finais:${colors.reset}`);
    console.log(assertions);
  } else {
    console.log(`${colors.fg.vermelho}Nenhum dado fornecido para o Encadeamento Progressivo.${colors.reset}`);
  }

} else if (method === 'R') {
  let goal = { attribute: "problema" };

  console.log(`\n${colors.fg.magenta}Iniciando Encadeamento Regressivo...${colors.reset}\n`);
  let assertion = backChain(goal);

  if (assertion && assertion.value) {
    console.log(`\n${colors.fg.magenta}Conclusão: ${colors.reset}${goal.attribute} = ${assertion.value}`);
  } else {
    console.log(`\n${colors.fg.vermelho}Você não forneceu informações suficientes para determinar ${goal.attribute}.${colors.reset}`);
  }

} else {
  console.log(`${colors.fg.vermelho}Opção inválida. Por favor, execute o programa novamente e escolha 'P' ou 'R'.${colors.reset}`);
}

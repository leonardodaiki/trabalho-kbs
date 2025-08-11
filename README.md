# Sistema Baseado em Conhecimento para Diagnóstico de Hardware

Alunos: Ana Paula Barbosa Pereira e Leonardo Daiki Fuzikawa

Este projeto implementa um Sistema Baseado em Conhecimento (SBC) para diagnosticar problemas de hardware de computadores. O usuário insere informações sobre o comportamento do computador, e o sistema utiliza técnicas de **Encadeamento Progressivo** ou **Encadeamento Regressivo** para chegar a uma conclusão sobre a causa do problema.

## 2. Explicação dos Conceitos

- **Sistemas Baseados em Conhecimento (SBC)**: São sistemas que utilizam uma base de conhecimento específica para resolver problemas em um domínio especializado, simulando o raciocínio de um especialista humano.
  
- **Encadeamento Progressivo**: Inicia a partir de um conjunto de fatos e aplica regras para derivar novas conclusões. Ideal quando temos muitos fatos e queremos descobrir novas informações.

- **Encadeamento Regressivo**: Parte de uma hipótese (objetivo) e trabalha retroativamente, tentando verificar quais fatos são necessários para confirmar essa hipótese. É útil quando já temos uma ideia do problema e queremos validar.

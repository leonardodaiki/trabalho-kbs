# Sistema Baseado em Conhecimento para Diagnóstico de Hardware

Alunos: Ana Paula Barbosa Pereira e Leonardo Daiki Fuzikawa

Este projeto implementa um Sistema Baseado em Conhecimento (SBC) para diagnosticar problemas de hardware de computadores. O usuário insere informações sobre o comportamento do computador, e o sistema utiliza técnicas de **Encadeamento Progressivo** ou **Encadeamento Regressivo** para chegar a uma conclusão sobre a causa do problema.

## 2. Explicação dos Conceitos

- **Sistemas Baseados em Conhecimento (SBC)**: São sistemas que utilizam uma base de conhecimento específica para resolver problemas em um domínio especializado, simulando o raciocínio de um especialista humano.
  
- **Encadeamento Progressivo**: Inicia a partir de um conjunto de fatos e aplica regras para derivar novas conclusões. Ideal quando temos muitos fatos e queremos descobrir novas informações.

- **Encadeamento Regressivo**: Parte de uma hipótese (objetivo) e trabalha retroativamente, tentando verificar quais fatos são necessários para confirmar essa hipótese. É útil quando já temos uma ideia do problema e queremos validar.

## 3. Explicação da Implementação

O projeto contém dois arquivos principais:
- **app.js**: Responsável pela lógica do sistema. Permite ao usuário escolher entre encadeamento progressivo ou regressivo e interage com a Base de Conhecimento para inferir conclusões a partir dos fatos fornecidos.
- **hardware.js**: Contém a Base de Conhecimento, ou seja, as regras que descrevem possíveis problemas de hardware com base em premissas observáveis (ex.: "computador não liga", "tela não exibe imagem", etc.).

O usuário escolhe o método de inferência e insere informações sobre o comportamento do sistema. O SBC então utiliza as regras para diagnosticar o problema.

## 4. Building

### Requisitos
- **Node.js** instalado no sistema.

### Como executar o projeto:
1. Clone o repositório e navegue até a pasta do projeto.
2. Instale as dependências (se houver). 
```bash
   npm install
```
3. Execute o arquivo `app.js` com o comando:
```bash
   node app.js
```

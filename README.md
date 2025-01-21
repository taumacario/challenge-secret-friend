# Projeto: Challenge do Amigo Secreto

## Descrição
Este é um projeto de desafio do programa ONE G8 - Curso Iniciante em Programação  
Seu objetivo é gerenciar uma lista de amigos e realizar sorteios de amigo secreto. 
Ele permite:

- Adicionar nomes de amigos à lista.
- Sortear aleatoriamente um nome da lista.

## Screenshot da tela
<img width="1440" alt="tela do projeto Secret Freind" src="https://github.com/user-attachments/assets/a69900ed-1777-4773-8dd7-8a88f07ec104" />


## Funcionalidades

### 1. Adicionar Amigos
- Permite ao usuário inserir o nome de um amigo em um campo de input.
- Verifica se o nome é válido (não vazio).
- Impede a inclusão de nomes duplicados.
- Adiciona o nome na lista exibida no DOM.

### 2. Sortear um Amigo
- Escolhe um amigo da lista de forma aleatória.
- Exibe o resultado no DOM.
- Impede o sorteio se a lista estiver vazia.

### 3. Mensagens de Alerta
- Exibe mensagens ao usuário para:
  - Indicar erros (campo vazio, nome duplicado, lista vazia).
  - Confirmar ações bem-sucedidas (nome adicionado, sorteio realizado).

## Tecnologias Utilizadas
- **HTML**: Estrutura do DOM.
- **CSS**: Para estilização.
- **JavaScript**: Lógica do projeto, manipulação do DOM e interatividade.

## Estrutura do Projeto

```
.
├── index.html
├── style.css
├── app.js
├── assets
└── README.md
```

## Como Utilizar

1. Clone o repositório ou copie os arquivos para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador.
3. No campo de input, digite o nome de um amigo e clique no botão "Adicionar Amigo".
4. Repita o processo até adicionar todos os amigos desejados.
5. Clique no botão "Sortear Amigo" para realizar o sorteio.
6. Veja o resultado exibido na tela.

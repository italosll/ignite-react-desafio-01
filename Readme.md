# TODO

Aplicação permite adicionar tarefas, concluir e deletar. Durante o desenvolvimento dessa aplicação
foi destacada a importância de não se utilizar `index` como `key` de elementos de uma listagem.

Quando se utiliza `index` como `key` de uma propriedade o React tem dificuldade de entender o que está
acontecendo após a manipulação da lista. Quando isso ocorre, ele força uma nova renderização da lista
completa.

Documentação: https://beta.reactjs.org/learn/rendering-lists

## Screenshots

![App Screenshot](https://github.com/italosll/ignite-react-desafio-01/blob/main/.github/todo-print.png?raw=true)

## Stack utilizada

**Front-end:** React (Vite), CSS Modules.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/italosll/ignite-react-desafio-01
```

Entre no diretório do projeto

```bash
  cd ignite-react-desafio-01
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

# 📚 Livros de Front-end

Uma página web moderna e elegante para exibir os melhores livros de desenvolvimento front-end, desenvolvida com HTML, Tailwind CSS e JavaScript vanilla.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Usar](#como-usar)
- [Design e Paleta de Cores](#design-e-paleta-de-cores)
- [Funcionalidades](#funcionalidades)
- [API Utilizada](#api-utilizada)
- [Desenvolvimento](#desenvolvimento)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este projeto é uma biblioteca digital de livros focada em desenvolvimento front-end. A página exibe uma coleção curada dos melhores livros sobre HTML, CSS, JavaScript, React e outras tecnologias web modernas.

O objetivo é fornecer uma interface limpa e intuitiva para que desenvolvedores possam descobrir e acessar os melhores recursos de aprendizado disponíveis.

## ✨ Características

- **Design Limpo e Moderno**: Interface minimalista com foco na experiência do usuário
- **Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Paleta de Cores Vibrante**: Esquema de cores vermelho, amarelo e branco
- **Carregamento Dinâmico**: Livros carregados dinamicamente através de API
- **Lazy Loading**: Otimização de carregamento de imagens
- **Tratamento de Erros**: Mensagens amigáveis em caso de falhas
- **Navegação Suave**: Scroll suave entre seções
- **Acessibilidade**: Estrutura semântica e navegação por teclado

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica da página
- **Tailwind CSS**: Framework CSS utilitário via CDN
- **JavaScript ES6+**: Lógica da aplicação com async/await
- **Fetch API**: Requisições HTTP para consumo da API

### Ferramentas
- **Git**: Controle de versão
- **VS Code / Cursor**: Editor de código

## 📁 Estrutura de Arquivos

```
Front/
├── index.html          # Página principal HTML
├── app.js              # Lógica JavaScript da aplicação
└── README.md           # Documentação do projeto
```

### Descrição dos Arquivos

- **index.html**: Contém a estrutura HTML semântica da página, incluindo:
  - Header com navegação
  - Seção "Sobre"
  - Seção "Livros" (onde os cards são renderizados dinamicamente)
  - Seção "Contato"
  - Estilos CSS personalizados

- **app.js**: Contém toda a lógica JavaScript:
  - Requisição à API de livros
  - Renderização dinâmica dos cards
  - Tratamento de erros
  - Manipulação do DOM

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para carregar a API e Tailwind CSS)

### Instalação

1. Clone ou baixe este repositório:
```bash
git clone <url-do-repositorio>
cd Front
```

2. Abra o arquivo `index.html` em um navegador web moderno

### Uso Local

Simplesmente abra o arquivo `index.html` no seu navegador. Não é necessário servidor local, pois:
- O Tailwind CSS é carregado via CDN
- A API é acessada diretamente via HTTPS

### Uso com Servidor Local (Opcional)

Para desenvolvimento ou testar localmente:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (com http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 🎨 Design e Paleta de Cores

### Paleta de Cores

O projeto utiliza um esquema de cores vibrante baseado em:

- **Vermelho** (`#DC2626` / `red-600`): Cor principal para títulos, links e elementos de destaque
- **Amarelo** (`#FBBF24` / `amber-400`): Cor de destaque para bordas e elementos secundários
- **Branco** (`#FFFFFF`): Fundo principal e cards
- **Cinza** (`#6B7280`): Texto secundário e elementos neutros

### Componentes de Design

- **Cards**: Fundo branco com borda amarela e sombra sutil
- **Botões**: Fundo vermelho com hover vermelho mais escuro
- **Links**: Cor vermelha com underline e transição suave
- **Bordas**: Amarelo para destacar seções importantes

### Ícones

O projeto utiliza ícones mínimos e necessários:
- 📚 Ícone de livros (apenas na seção "Sobre" e placeholder de imagens)

## 🔧 Funcionalidades

### 1. Carregamento de Livros
- Busca automática dos livros na API ao carregar a página
- Suporta estrutura `data.livros` ou array direto
- Exibe mensagem de erro amigável em caso de falha

### 2. Cards de Livros
Cada card exibe:
- **Imagem da capa**: Com tratamento de erro e placeholder
- **Título do livro**: Em negrito e destacado
- **Descrição/Resumo**: Limitado a 4 linhas com `line-clamp-4`
- **Botão "Ver mais"**: Link para Casa do Código

### 3. Efeitos Visuais
- **Hover nos cards**: Elevação e sombra aumentada
- **Hover nas imagens**: Zoom sutil
- **Transições suaves**: Em todos os elementos interativos

### 4. Responsividade
- **Mobile**: 1 coluna de cards
- **Tablet**: 2 colunas de cards
- **Desktop**: 3 colunas de cards
- **Layout adaptativo**: Header e navegação se ajustam ao tamanho da tela

## 🌐 API Utilizada

### Endpoint
```
https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json
```

### Estrutura dos Dados

A API retorna um objeto JSON com a seguinte estrutura:

```json
{
  "livros": [
    {
      "id": 1,
      "titulo": "Nome do Livro",
      "imagem": "URL da imagem",
      "resumo": "Descrição do livro",
      "autor": "Nome do autor",
      "editora": "Nome da editora"
    }
  ]
}
```

**Nota**: O código também suporta retorno direto de array `[]`.

### Campos Utilizados
- `titulo` / `titulo`: Título do livro
- `imagem` / `capa`: URL da imagem da capa
- `resumo` / `descricao` / `desc`: Descrição do livro
- `id`: Identificador único (opcional)

## 💻 Desenvolvimento

### Estrutura do Código

#### HTML (index.html)
```html
- Header com título e navegação
- Seção About com descrição
- Seção Books com grid para cards
- Seção Contact com informações
```

#### JavaScript (app.js)
```javascript
1. DOMContentLoaded listener
2. Fetch da API
3. Processamento dos dados
4. Criação dinâmica dos cards
5. Tratamento de erros
```

### Personalização

#### Alterar Cores
Edite as classes Tailwind no `index.html`:
- `text-red-600` → Cor vermelha principal
- `border-yellow-400` → Borda amarela
- `bg-red-600` → Fundo vermelho dos botões

#### Alterar API
Modifique a constante `booksEndpoint` em `app.js`:
```javascript
const booksEndpoint = 'sua-api-aqui';
```

#### Adicionar Funcionalidades
- **Busca**: Adicione input de busca e função de filtro
- **Filtros**: Implemente filtros por categoria ou autor
- **Detalhes**: Adicione modal ou página de detalhes do livro

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use nomes descritivos para variáveis
- Mantenha o código limpo e comentado
- Siga a estrutura existente
- Teste em diferentes navegadores

## 📝 Licença

Este projeto é livre para uso educacional e pessoal.

## 👨‍💻 Autor

Desenvolvido como parte de um projeto acadêmico sobre desenvolvimento front-end.

## 📞 Contato

Para dúvidas, sugestões ou problemas:
- Email: frontbooks@example.com
- Site: [Casa do Código](https://www.casadocodigo.com.br/collections/livros-de-front-end)

## 🙏 Agradecimentos

- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Casa do Código](https://www.casadocodigo.com.br/) pelos recursos e descrições dos livros
- Professores e comunidade de desenvolvimento front-end

---

**Última atualização**: 2024

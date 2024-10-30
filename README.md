Aqui está a documentação completa do **RentRoom**, incluindo as imagens e detalhes adicionais sobre a versão mobile e a responsividade da plataforma.

---

![Logo do RentRoom](https://media.graphassets.com/WVw5ct3LStuRqZSaIlN8)

**RentRoom** é uma plataforma web projetada para facilitar a locação de imóveis, oferecendo uma experiência completa para proprietários e locatários. A plataforma conta com diversos recursos para tornar o processo de aluguel simples e seguro.

![WebContent](https://media.graphassets.com/svpS4HAbRTeRV2DQKmQ0)

---

## Índice

1. [Introdução](#introdução)
2. [Tecnologias Usadas](#tecnologias-usadas)
3. [Iniciando o Projeto](#iniciando-o-projeto)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Funcionalidades](#funcionalidades)
6. [Scripts](#scripts)
7. [Configuração do Ambiente](#configuração-do-ambiente)
8. [Deploy na Vercel](#deploy-na-vercel)
9. [Responsividade e Versão Mobile](#responsividade-e-versao-mobile)
10. [Aprenda Mais](#aprenda-mais)

---

## Introdução

O RentRoom permite aos usuários buscar, listar e alugar imóveis com facilidade e segurança. Desenvolvida com um conjunto poderoso de ferramentas modernas, a plataforma busca melhorar a experiência de locação, fornecendo funcionalidades como:

- Busca e filtro de imóveis
- Login e autenticação segura
- Gerenciamento de perfil de usuário
- Exibição de imóveis no mapa
- Notificações e avisos em tempo real

---

## Tecnologias Usadas

O RentRoom foi construído com as seguintes tecnologias:

- **[Next.js 13.5.7](https://nextjs.org/)**: Framework React para aplicações web modernas, com otimização de performance e renderização de página no lado do servidor.
- **[Prisma](https://www.prisma.io/)**: ORM (Object-Relational Mapping) para fácil manipulação e consulta de dados.
- **[NextAuth.js](https://next-auth.js.org/)**: Gerenciamento de autenticação simplificado, usando um adaptador para Prisma.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces interativas e reutilizáveis.
- **[Zustand](https://zustand.surge.sh/)**: Gerenciamento de estado leve e de fácil integração com React.
- **[Leaflet](https://leafletjs.com/) e [React-Leaflet](https://react-leaflet.js.org/)**: Exibição de mapas interativos para visualização de imóveis por localização.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS para estilização rápida e responsiva.
- **[Cloudinary](https://cloudinary.com/)**: Manipulação e armazenamento de imagens em nuvem.

Outras bibliotecas incluem axios para requisições HTTP, date-fns para manipulação de datas, react-hook-form para controle de formulários e react-hot-toast para notificações.

---

## Iniciando o Projeto

Para começar a usar o RentRoom em seu ambiente local, siga as instruções abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js instalado.

### Executando o Servidor de Desenvolvimento

1. Clone o repositório:

   ```bash
   git clone https://github.com/EdLoth/RentRoomAPP.git
   cd RentRoomAPP
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (consulte [Configuração do Ambiente](#configuração-do-ambiente)).

4. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação no navegador.

---

## Estrutura de Pastas

A estrutura principal do RentRoom inclui:

- **/app**: Páginas e rotas da aplicação.
- **/components**: Componentes React reutilizáveis.
- **/prisma**: Configuração do Prisma, incluindo o arquivo schema.prisma.
- **/styles**: Arquivos de estilos globais.
- **/public**: Recursos estáticos como imagens e ícones.

---

## Funcionalidades

1. **Autenticação de Usuário**: Proteção e gerenciamento de contas de usuário.
2. **Mapeamento e Localização de Imóveis**: Exibição dos imóveis em mapas, possibilitando visualização de localização.
3. **Favoritos**: Permite que o usuário salve imóveis para fácil acesso posterior.
4. **Notificações**: Avisos e notificações em tempo real para atualizações relevantes.
5. **Gerenciamento de Imagens**: Upload, manipulação e exibição de imagens de imóveis.
6. **Filtragem e Busca Avançada**: Ferramentas de busca e filtros para encontrar imóveis específicos.

---

## Scripts

Os scripts mais importantes do projeto são:

- `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o linting para verificar o código.

---

## Configuração do Ambiente

Para configurar o ambiente, crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```plaintext
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

Essas variáveis incluem a conexão com o banco de dados, configurações de autenticação e detalhes da API de imagem.

---

## Deploy na Vercel

A maneira mais fácil de fazer deploy do RentRoom é com a plataforma [Vercel](https://vercel.com/), que oferece integração com Next.js. Para fazer o deploy:

1. Crie uma conta na Vercel.
2. Importe o repositório do GitHub para a Vercel.
3. Configure as variáveis de ambiente na Vercel.
4. Clique em "Deploy".

Acesse a [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais informações.

---

## Responsividade e Versão Mobile

O RentRoom foi projetado para ser **100% responsivo**, garantindo uma experiência otimizada para dispositivos móveis e desktops. A plataforma ajusta automaticamente os elementos e o layout para proporcionar uma navegação agradável e funcional em telas menores. Veja abaixo algumas capturas de tela que mostram como a plataforma se adapta a dispositivos móveis:

<p align="center">
   <img src="https://media.graphassets.com/9i0m0ozhTeOuW7J60guU" alt="Página inicial" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/1OBodPT5ySzQRqDn19PQ" alt="Página de login" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/k60KaxalT02mxZnNT8QK" alt="Página de registro" width="30%">
</p>
<p align="center">
   <img src="https://media.graphassets.com/eAFoIv4TcyxzYG9N4SnA" alt="Listagem de imóveis 1" width="30%" style="margin-right: 5px;">
   <img src="https://media.graphassets.com/jIXkpSN1RvuFe0dQIM5K" alt="Listagem de imóveis 2" width="30%">
</p>


---

## Aprenda Mais

Para explorar mais sobre as tecnologias usadas, confira os links abaixo:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs/)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [Leaflet e React-Leaflet](https://react-leaflet.js.org/)

---

O **RentRoom** está em constante aprimoramento para oferecer uma experiência de locação de imóveis otimizada e segura para todos os usuários.

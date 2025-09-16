# 🍔 Cardápio Zero - SaaS de Cardápio Digital

_Um SaaS completo para hamburguerias e restaurantes gerenciarem seus cardápios e receberem pedidos online de forma simples e eficiente._

---

## 📸 Preview do Projeto

_(Dica: Depois que o projeto estiver mais avançado, grave um GIF rápido da tela funcionando e coloque aqui. Use ferramentas como ScreenToGif ou GIPHY Capture. Por enquanto, pode ser uma captura de tela estática)_

![Preview do Cardápio Zero](link-para-sua-imagem-ou-gif-aqui.png)

---

## 🚀 Sobre o Projeto

O **Cardápio Zero** foi desenvolvido como um projeto de portfólio para demonstrar habilidades em desenvolvimento full-stack com as tecnologias mais modernas do ecossistema JavaScript/TypeScript. A aplicação permite que donos de restaurantes se cadastrem, criem e personalizem seus cardápios, e recebam pedidos diretamente dos clientes através de uma página web exclusiva para o seu estabelecimento.

Este projeto resolve o problema de pequenos estabelecimentos que precisam de uma presença online para pedidos sem depender das altas taxas de aplicativos de delivery.

---

## ✨ Funcionalidades Principais

- **Painel Administrativo:** Gerenciamento completo (CRUD) de produtos e categorias do cardápio.
- **Cardápio Público:** Página web customizável para cada restaurante exibir seus produtos.
- **Carrinho de Compras:** Interface intuitiva para clientes selecionarem seus itens.
- **Recebimento de Pedidos:** Fluxo de checkout simplificado para envio de pedidos.
- _(Futuro) Autenticação de usuários (donos de restaurantes)._
- _(Futuro) Integração com gateways de pagamento._

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **UI:** Shadcn/ui (Componentes Radix UI)
- **Backend:** Next.js (API Routes / Server Actions)
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Ambiente de Dev:** WSL2 (Ubuntu), Node.js
- **Deploy:** Vercel (Frontend) e Neon (Banco de Dados)

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

**1. Clone o repositório:**

```bash
git clone [https://github.com/alexandreramosdev/cardapio_online.git](https://github.com/alexandreramosdev/cardapio_online.git)
cd cardapio_online
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Configure as Variáveis de Ambiente:**

- Crie um arquivo `.env` na raiz do projeto.
- Adicione a sua variável `DATABASE_URL` para se conectar a um banco de dados PostgreSQL.
  ```
  DATABASE_URL="sua-url-de-conexao-com-o-banco"
  ```

**4. Sincronize o Banco de Dados com o Prisma:**

```bash
npx prisma db push
```

**5. Rode a aplicação em modo de desenvolvimento:**

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado!

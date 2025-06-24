FROM node:20

# Instala o pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

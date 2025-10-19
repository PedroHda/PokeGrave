# 🪦 Um Túmulo para Pokémons — Nuzlocke Memorial

> Um site para registrar e homenagear os pokémons que caíram em sua jornada Nuzlocke. Cada queda vira memória, cada memória vira história.

## ✨ Por que existe?
No desafio **Nuzlocke**, quando um Pokémon chega a **0 HP** ele é considerado **morto** e deve ser liberado/boxado. A ideia deste projeto é **guardar para sempre** quem fez parte da sua aventura: onde caiu, contra quem lutou, qual foi a causa, e o que vocês conquistaram juntos.

## 🎯 Objetivos do projeto
- **Memorial online** dos pokémons perdidos em runs Nuzlocke.
- **Linha do tempo** da aventura por rotas, ginásios e marcos.
- **Histórias e epitáfios** para cada companheiro.
- **Compartilhável** com amigos/stream/twitch chat.
- **Dados pesquisáveis** (por jogo, geração, causa da morte, rota, etc.).

## 🧰 Recursos (MVP)
- Cadastro de “túmulos” com:
  - Nome, espécie, apelido
  - Jogo/versão e geração
  - Rotas de captura e de falecimento
  - Nível de captura e de morte
  - Causa da morte (ex.: crítico, envenenamento, overlevel, wipe, etc.)
  - Treinador/OT e equipe no momento
  - Print/Screenshot opcional
  - Epitáfio/descrição
- Filtros (jogo, causa, tipo, geração, rota)
- Visualização em **grade** (cemitério) e **linha do tempo**
- Exportar/Importar JSON da run
- Tema claro/escuro

## 🧠 Conceitos-chave
- **Run**: uma aventura específica (ex.: *Pokémon Emerald Nuzlocke 2025*).
- **Túmulo**: registro de um Pokémon falecido dentro de uma run.
- **Causa**: motivo do KO (padronizado para facilitar busca).
- **Marco**: eventos relevantes (ginásios, rivais, Elite, lendários).

## 🗂️ Estrutura de dados (exemplo JSON)

```json
{
  "run": {
    "id": "emerald-2025-gc",
    "title": "Pokémon Emerald — Nuzlocke (2025)",
    "trainer": "Guilherme",
    "rules": ["capturar apenas o primeiro por rota", "faint = morte definitiva"],
    "game": "Emerald",
    "startedAt": "2025-10-01",
    "endedAt": null,
    "notes": "Run sem itens em batalha; duplicatas liberadas."
  },
  "graves": [
    {
      "id": "grave-001",
      "species": "Mudkip",
      "nickname": "Nautilus",
      "types": ["Water"],
      "caught": { "route": "Littleroot Town (starter)", "level": 5 },
      "died": {
        "route": "Roxanne Gym",
        "level": 16,
        "cause": "Crítico inesperado de Rock Tomb",
        "opponent": "Geodude (Roxanne)"
      },
      "screenshotUrl": "https://…/screens/nautilus.png",
      "epitaph": "Nunca recuou de uma pedra no caminho. Obrigado por tudo.",
      "tags": ["starter", "gym1", "critical-hit"]
    }
  ],
  "milestones": [
    { "order": 1, "title": "Badge 1 — Stone Badge", "at": "2025-10-03" }
  ]
}
```

> **Sugestão de enum para `cause`**: `critical-hit`, `status-poison`, `status-burn`, `confusion`, `self-destruct`, `overlevel`, `missplay`, `sweep`, `stall`, `trap`, `weather`, `arena`, `other`.

## 🛠️ Stack sugerida (adaptável)
- Frontend: **React/Next.js** (App Router)  
- Banco: **SQLite** (Prisma) ou **PostgreSQL**  
- Armazenamento de imagens: **S3/Cloud** (ou local em `/public/screens`)  
- Estilo: **Tailwind CSS** + **Radix UI**  
- Deploy: **Vercel**, **Netlify** ou **Docker**

> Você pode começar **sem backend**, salvando em `data/memorial.json`, e evoluir depois para uma API.

## 🚀 Comece agora (exemplo com Node/Next.js)
```bash
# 1) Criar projeto
npx create-next-app@latest nuzlocke-memorial
cd nuzlocke-memorial

# 2) Instalar Tailwind (opcional)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3) Crie uma pasta de dados
mkdir -p data && echo '{}' > data/memorial.json

# 4) Rodar
npm run dev
```

## 📦 Scripts úteis (idéia)
- `npm run dev` — ambiente de desenvolvimento  
- `npm run lint` — qualidade  
- `npm run build && npm start` — produção  
- `npm run export` — exporta estático (para GitHub Pages)

## 🗺️ Roadmap
- [ ] Autenticação simples (para runs privadas)  
- [ ] Importar de planilha `.csv` (PokéTracker/Excel)  
- [ ] Compartilhamento público (URL única da run)  
- [ ] “Hall da Fama” para os sobreviventes  
- [ ] Estatísticas (tipos mais comuns de morte, ginásios mais letais, etc.)  
- [ ] Multi-idioma (pt-BR/en)  

## 🤝 Contribuindo
1. Faça um **fork**
2. Crie uma branch: `feat/nome-da-feature`
3. **Commits** claros (Conventional Commits são bem-vindos)
4. **PR** com descrição e screenshots/gifs

## 🔒 Licença
Sugestão: **MIT**.  
> Projeto de fã, **sem afiliação** com Nintendo/Game Freak/The Pokémon Company. Marcas registradas pertencem aos seus respectivos donos.

## 📝 FAQ
**O que é Nuzlocke?**  
Conjunto de regras auto-impostas que aumenta a dificuldade (ex.: primeiro encontro por rota; faint = morte).

**Posso usar imagens do jogo?**  
Use prints próprios. Respeite direitos autorais.

**Sem backend, dá pra usar?**  
Sim. Comece com um arquivo `data/memorial.json` e evolua quando quiser.

---

Se você usar este template, compartilhe um print do seu “cemitério” no PR de **Showcase**! 🌑🕯️

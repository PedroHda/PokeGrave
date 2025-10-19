# 🪦 Um Túmulo para Pokémons — Nuzlocke Memorial

> Um site para registrar e homenagear os pokémons que caíram em sua jornada Nuzlocke. Cada queda vira memória, cada memória vira história.

## ✨ Por que existe?
No desafio **Nuzlocke**, quando um Pokémon chega a **0 HP** ele é considerado **morto** e deve ser liberado. A ideia deste projeto é **guardar para sempre** quem fez parte da sua aventura: onde caiu, contra quem lutou, qual foi a causa, e o que vocês conquistaram juntos.

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
## 📝 FAQ
**O que é Nuzlocke?**  
Conjunto de regras auto-impostas que aumenta a dificuldade (ex.: primeiro encontro por rota; faint = morte).


---
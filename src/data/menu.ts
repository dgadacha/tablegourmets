// Carte réelle du restaurant (relevée sur les menus officiels). Prix en CFP.
// `cat` = clé interne ; `label` = titre éditorial affiché ; `short` = libellé de la barre de nav.
// Descriptions gardées seulement pour les plats composés / signatures / suggestions.
export const feature = {
  name: 'Jambonneau braisé à la bière',
  desc: 'Un jarret de porc longuement braisé, fondant à cœur, lentilles vertes et pommes sautées à la graisse de canard.',
  price: '3 450',
  img: 'jambonneau-braise-a-la.jpg',
};

export const menu = [
  {
    cat: 'Les entrées',
    id: 'entrees',
    label: 'Les entrées',
    short: 'Entrées',
    items: [
      { name: 'Velouté de lentilles', desc: '', price: '1 550' },
      { name: "Escargots de Bourgogne à l'ancienne", desc: 'Les 6 ou les 12.', price: '1 800 / 3 600' },
      { name: 'Salade de croûtons de chèvre chauds', desc: '', price: '1 850' },
      { name: 'Moules de Nouvelle-Zélande gratinées', desc: '', price: '1 950' },
      { name: 'Rillettes de porc à la graisse de canard', desc: '', price: '1 750' },
    ],
  },
  {
    cat: 'Le foie gras',
    id: 'foie-gras',
    label: 'Les foies gras',
    short: 'Foie gras',
    items: [
      { name: 'Foie gras de canard au Gewürztraminer', desc: '', price: '2 950' },
      { name: 'Escalopes de foie de canard poêlées', desc: 'Poire cuite au vin rouge et épices.', price: '2 950' },
      { name: 'Salade du gourmet', desc: 'Gésiers confits, magret fumé et foie gras.', price: '2 950' },
    ],
  },
  {
    cat: 'Côté mer',
    id: 'cote-mer',
    label: 'La mer',
    short: 'La mer',
    items: [
      { name: "Filet de poisson du jour à l'huile d'olive", desc: 'Légumes locaux cuisinés comme un bougna, riz pilaf.', price: '2 950' },
      { name: 'Sole meunière', desc: '', price: '3 150' },
    ],
  },
  {
    cat: 'Le coin du boucher',
    id: 'coin-boucher',
    label: 'Les viandes',
    short: 'Les viandes',
    items: [
      { name: 'Cuisse de canard confite', desc: 'Pommes de terre et lardons gratinés au fromage à raclette.', price: '3 450' },
      { name: "Entrecôte grillée, beurre maître d'hôtel", desc: 'Pommes de terre farcies au brie, salade mêlée.', price: '3 600' },
      { name: 'Jambonneau braisé à la bière', desc: 'Lentilles vertes et pommes sautées à la graisse de canard.', price: '3 450' },
    ],
  },
  {
    cat: 'La cuisine de nos régions',
    id: 'regions',
    label: 'Les spécialités régionales',
    short: 'Spécialités',
    items: [
      { name: 'Cassoulet du Sud-Ouest', desc: "Confit de canard, poitrine salée et fumée, saucisse à l'ail fumée, saucisse de Toulouse.", price: '3 750' },
      { name: 'Jarret de porc aux lentilles', desc: '', price: '2 950' },
      { name: 'Petit salé aux lentilles', desc: 'Jambonneau, poitrine salée et fumée, saucisses, Montbéliard.', price: '3 750' },
      { name: "Choucroute d'Obernai", desc: 'Montbéliard, saucisse de Francfort, échine de porc fumée.', price: '2 950' },
      { name: 'Choucroute du Sundgau', desc: "Assortiment de saucisses : Francfort, Montbéliard, saucisse à l'ail fumée grillée.", price: '2 950' },
      { name: 'Choucroute Royale', desc: 'Jambonneau, saucisse fumée, saucisse de Francfort, poitrine salée et fumée, échine fumée.', price: '3 850' },
    ],
  },
  {
    cat: 'Les desserts',
    id: 'desserts',
    label: 'Les desserts',
    short: 'Desserts',
    note: "Tous nos sorbets et glaces sont réalisés par « l'Atelier Glacier ».",
    items: [
      { name: 'La tarte du jour', desc: 'Demandez conseil.', price: '1 000' },
      { name: 'Moelleux au chocolat mi-cuit', desc: 'Glace cacahuètes.', price: '1 200' },
      { name: 'Pot de crème au chocolat', desc: '', price: '1 000' },
      { name: 'Salade de fruits frais', desc: '', price: '1 000' },
      { name: 'Coupe de glaces ou sorbets artisanaux', desc: '2 boules au choix : vanille, café, chocolat, fraise, cacahuètes, pomme, cerise, citron, goyave.', price: '750' },
      { name: 'Café gourmand', desc: 'Riz au lait, tarte fine du jour et salade de fruits frais.', price: '1 200' },
    ],
  },
  {
    cat: 'Les coupes arrosées',
    id: 'coupes',
    label: 'Les coupes glacées',
    short: 'Coupes glacées',
    items: [
      { name: 'Coupe Normande', desc: 'Sorbet pomme arrosé de Calvados Morin.', price: '1 850' },
      { name: 'Coupe Colonel', desc: 'Sorbet citron arrosé de vodka Zubrowka « Bison Grass ».', price: '1 850' },
      { name: 'Coupe Gloss', desc: 'Sorbet cerise griottes arrosé au Gloss.', price: '1 750' },
      { name: 'Coupe du Connaisseur', desc: 'Glace rhum-raisins arrosée de rhum Zacapa 23 ans.', price: '2 150' },
    ],
  },
];

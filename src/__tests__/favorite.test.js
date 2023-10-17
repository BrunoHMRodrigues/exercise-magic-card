const { saveFavoriteMagicCard } = require('../magic');
let favoriteCards = require('../data/favoriteCards');

const initialFavoriteCards = [...favoriteCards];
const restoreFavoriteCards = () => {
  favoriteCards = initialFavoriteCards;
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);
  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    restoreFavoriteCards();
    expect(favoriteCards.length).toBe(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    restoreFavoriteCards();
    expect(favoriteCards.map((card) => card.name))
    .toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);
  });
});
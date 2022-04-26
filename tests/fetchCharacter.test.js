require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Testando se a api retorna o nome correto', async () => {
    const { name } = await fetchCharacter('720');
    expect(name).toBe('Wonder Woman');
  });

  it('verifica o erro da caso não seja passado nenhum parâmetro', async ()=> {
    expect(fetchCharacter()).resolves.toEqual(new Error('You must provide an url'));
  });
  
  it('verifica o erro de caso seja passado um parâmetro qualquer', async () => {
    await expect(fetchCharacter('qualquer cosia')).resolves.toBe('Invalid id');
  });
  
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});

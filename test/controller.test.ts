describe('root test ', () => {
  it('1 + 1 = 2', async () => {
    const { body, status } = await global.testRequest.get('/api');
    const objApi = {
      data: {
        name: 'Joao',
        id: 32,
        age: 37,
        code: '3256-64893-4563',
      },
    };
    expect(status).toEqual(200);
    expect(body).toEqual(objApi);
  });
});

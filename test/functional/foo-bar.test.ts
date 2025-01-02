describe('Foo bar', () => {
  it('SHould return foo bar controller', async () => {
    const { status, body } = await global.testRequest.get('/api');
    const bodyObj = {
      data: {
        name: 'Joao',
        id: 32,
        age: 37,
        code: '3256-64893-4563',
      },
    };

    expect(status).toBe(200);
    expect(body).toEqual(bodyObj);
  });
});

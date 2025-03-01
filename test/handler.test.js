const { handler } = require('../src/handler');

test('Lambda function returns correct response', async () => {
    const response = await handler({});
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).message).toBe("Hello from Lambda Code test! test fail");
});
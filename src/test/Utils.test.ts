import { Utils } from '../app/Utils';

describe('Utils test suit', () => {
  beforeAll(() => {
    console.log('before all');
  });

  beforeEach(() => {
    console.log('before each');
  });

  test('first test', () => {
    const result = Utils.toUpperCase('abc');
    expect(result).toBe('ABC');
    console.log('tests work');
  });

  test('parse simple url', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
    expect(parsedUrl.href).toBe('http://localhost:8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http:');
    expect(parsedUrl.query).toEqual({});
  });

  test('parse URL with query', () => {
    const parsedUrl = Utils.parseUrl(
      'http://localhost:8080/login?user=user&password=pass'
    );
    const expectedQuery = {
      user: 'user',
      password: 'pass',
    };

    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  });

  test.only('test invalid url', () => {
    function expectError() {
      Utils.parseUrl('');
    }

    expect(expectError).toThrowError('empty url');
  });

  test('test invalid url with arrow function', () => {
    expect(() => {
      Utils.parseUrl('');
    }).toThrowError('empty url');
  });

  test.only('test invalid url with try catch', () => {
    try {
      Utils.parseUrl('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'empty url');
    }
  });
});

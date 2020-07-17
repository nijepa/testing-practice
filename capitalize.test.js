import capitalize from './capitalize';

test('Change hello world to Hello world', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('Change hEllO bUDdy to Hello buddy', () => {
  expect(capitalize('hEllO bUDdy')).toBe('Hello buddy');
});
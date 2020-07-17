import caesarCipher from './caesar-cipher';

test('Change hello to ifmmp', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('Change (same case) WorLd to YqtNf', () => {
  expect(caesarCipher('WorLd', 2)).toBe('YqtNf');
});

test('Change (remove punctuation) Bu!;y to Dwa', () => {
  expect(caesarCipher('Bu!;y', 2)).toBe('Dwa');
});
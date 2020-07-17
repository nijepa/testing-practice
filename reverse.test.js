import reverse from './reverse';

test('Change hello world to dlrow olleH', () => {
  expect(reverse('Hello world')).toBe('dlrow olleH');
});

import { add, substract, devide, multiply } from './calculator';

test('Addition two numbers', () => {
  expect(add(3, 4)).toBe(7);
});

test('Addition without both numbers', () => {
  expect(add(3)).toBe('Must be 2 numbers');
});

test('Addition with string', () => {
  expect(add(3, 'u')).toBe('Cant use strings');
});

test('Substraction two numbers', () => {
  expect(substract(4, 3)).toBe(1);
});

test('Substraction without both numbers', () => {
  expect(substract(3)).toBe('Must be 2 numbers');
});

test('Substraction with string', () => {
  expect(substract(3, 'u')).toBe('Cant use strings');
});

test('Deviding two numbers', () => {
  expect(devide(9, 3)).toBe(3);
});

test('Deviding without both numbers', () => {
  expect(devide(3)).toBe('Must be 2 numbers');
});

test('Deviding with string', () => {
  expect(devide(3, 'u')).toBe('Cant use strings');
});

test('Deviding with 0', () => {
  expect(devide(3, 0)).toBe('Must be 2 numbers');
});

test('Multiplying two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('Multiplying without both numbers', () => {
  expect(multiply(3)).toBe('Must be 2 numbers');
});

test('Multiplying with string', () => {
  expect(multiply(3, 'u')).toBe('Cant use strings');
});
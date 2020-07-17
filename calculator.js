const add = (a, b) => { 
  if (!a || !b) { return 'Must be 2 numbers' };
  if (isNaN(a) || isNaN(b)) { return 'Cant use strings' };
  return  a + b;
}

const substract = (a, b) => { 
  if (!a || !b) { return 'Must be 2 numbers' };
  if (isNaN(a) || isNaN(b)) { return 'Cant use strings' };
  return  a - b;
}

const devide = (a, b) => { 
  if (!a || !b) { return 'Must be 2 numbers' };
  if (isNaN(a) || isNaN(b)) { return 'Cant use strings' };
  return  a / b;
}

const multiply = (a, b) => { 
  if (!a || !b) { return 'Must be 2 numbers' };
  if (isNaN(a) || isNaN(b)) { return 'Cant use strings' };
  return  a * b;
}

export { add, substract, devide, multiply }
const arrayAnalysis = (array) => { 
  const length = array.length;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / length;

  const min = Math.min(...array);
  const max = Math.max(...array);

  let obj = {};
  obj = { average,  min,  max,  length};
  return obj
} 

export default arrayAnalysis
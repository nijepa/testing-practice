const capitalize = (string) => { 
  return string.toLowerCase()
    .replace(/^./, string[0].toUpperCase()); 
} 

export default capitalize
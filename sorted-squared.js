function squaredArray(object) {
  let squaredArray = [];
  squaredArray = object.array.map(value => {
  	return value * value;
  });
  
  return squaredArray.sort((a, b) => {return a - b});
}

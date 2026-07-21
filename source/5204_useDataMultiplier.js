// Module ID: 5204
// Function ID: 44100
// Name: useDataMultiplier
// Dependencies: []

// Module 5204 (useDataMultiplier)
arg5.useDataMultiplier = function useDataMultiplier(arg0, arg1) {
  const array = new Array(arg1);
  let flag = false;
  if ("object" === typeof arg0[0]) {
    flag = true;
  }
  for (let num = 0; num < arg1; num = num + 1) {
    if (flag) {
      let _Object = Object;
      let merged = Object.assign({}, arg0[num % length]);
    } else {
      merged = arg0[num % length];
    }
    array[num] = merged;
  }
  const items = [array];
  return items;
};

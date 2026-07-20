// Module ID: 584
// Function ID: 6973
// Name: baseTrim
// Dependencies: []

// Module 584 (baseTrim)
let closure_2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, require(dependencyMap[0])(arr) + 1).replace(closure_2, "");
    const str = arr.slice(0, require(dependencyMap[0])(arr) + 1);
  }
  return replaced;
};

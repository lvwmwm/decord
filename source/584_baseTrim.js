// Module ID: 584
// Function ID: 6973
// Name: baseTrim
// Dependencies: [585]

// Module 584 (baseTrim)
const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, require(585) /* trimmedEndIndex */(arr) + 1).replace(closure_2, "");
    const str = arr.slice(0, require(585) /* trimmedEndIndex */(arr) + 1);
  }
  return replaced;
};

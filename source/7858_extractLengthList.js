// Module ID: 7858
// Function ID: 7859
// Name: extractLengthList
// Dependencies: []

// Module 7858 (extractLengthList)
const re0 = /\s+/;
const re1 = /,/g;
arg5.default = function extractLengthList(num) {
  if (Array.isArray(num)) {
    return num;
  } else if (typeof num === "number") {
    const items = [num];
    let parts = items;
  } else if (typeof num === "string") {
    const str = num.trim();
    parts = num.trim().replace(closure_1, " ").split(closure_0);
    const str3 = num.trim().replace(closure_1, " ");
  } else {
    parts = [];
  }
};

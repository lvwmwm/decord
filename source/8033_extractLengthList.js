// Module ID: 8033
// Function ID: 63768
// Name: extractLengthList
// Dependencies: []

// Module 8033 (extractLengthList)
let closure_0 = /\s+/;
let closure_1 = /,/g;
arg5.default = function extractLengthList(str) {
  if (Array.isArray(str)) {
    return str;
  } else if ("number" === typeof str) {
    const items = [str];
    let parts = items;
  } else if ("string" === tmp) {
    const str3 = str.trim();
    parts = str.trim().replace(closure_1, " ").split(closure_0);
    const str5 = str.trim().replace(closure_1, " ");
  } else {
    parts = [];
  }
};

// Module ID: 1805
// Function ID: 1806
// Name: convertStringToNumber
// Dependencies: []
// Exports: convertStringToNumber, processNumberArray

// Module 1805 (convertStringToNumber)
const re0 = /\s*,\s*/g;
const re1 = /\s+/;

export const convertStringToNumber = (arg0) => {
  let closure_0 = arg0;
  return (arg0) => closure_0[arg0];
};
export const processNumberArray = (num) => {
  let tmp = num;
  if (!Array.isArray(num)) {
    let parts;
    if (typeof num === "number") {
      const items = [num];
      parts = items;
    } else if (typeof num === "string") {
      const str2 = num.replace(re0, " ");
      parts = str2.split(re1);
    } else {
      parts = [];
    }
    tmp = parts;
  }
  return tmp;
};

// Module ID: 18137
// Function ID: 18138
// Name: castSlice
// Dependencies: [10524]

// Module 18137 (castSlice)
import baseSlice from "baseSlice" /* 10524 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  if (arg1) {
    let tmp2 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp2 = arg0;
  }
  return tmp2;
};

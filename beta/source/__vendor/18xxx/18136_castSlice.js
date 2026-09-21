// Module ID: 18136
// Function ID: 18137
// Name: castSlice
// Dependencies: [10524]

// Module 18136 (castSlice)
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

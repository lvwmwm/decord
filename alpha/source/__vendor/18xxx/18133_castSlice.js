// Module ID: 18133
// Function ID: 18134
// Name: castSlice
// Dependencies: [10604]

// Module 18133 (castSlice)
import baseSlice from "baseSlice" /* 10604 */;


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

// Module ID: 17498
// Function ID: 17499
// Name: castSlice
// Dependencies: [9806]

// Module 17498 (castSlice)
import baseSlice from "baseSlice" /* 9806 */;


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

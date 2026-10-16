// Module ID: 18832
// Function ID: 18833
// Name: castSlice
// Dependencies: [9794]

// Module 18832 (castSlice)
import baseSlice from "baseSlice" /* 9794 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp3;
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  const tmp2 = arg1;
  if (tmp2) {
    tmp3 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp3 = arg0;
  }
  return tmp3;
};

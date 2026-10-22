// Module ID: 19100
// Function ID: 19101
// Name: castSlice
// Dependencies: [9926]

// Module 19100 (castSlice)
import baseSlice from "baseSlice" /* 9926 */;


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

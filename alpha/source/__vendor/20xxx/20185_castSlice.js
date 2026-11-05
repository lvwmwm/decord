// Module ID: 20185
// Function ID: 20186
// Name: castSlice
// Dependencies: [10256]

// Module 20185 (castSlice)
import baseSlice from "baseSlice" /* 10256 */;


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

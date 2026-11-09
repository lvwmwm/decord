// Module ID: 20274
// Function ID: 20275
// Name: castSlice
// Dependencies: [10191]

// Module 20274 (castSlice)
import baseSlice from "baseSlice" /* 10191 */;


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

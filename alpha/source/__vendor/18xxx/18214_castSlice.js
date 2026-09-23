// Module ID: 18214
// Function ID: 18215
// Name: castSlice
// Dependencies: [10686]

// Module 18214 (castSlice)
import baseSlice from "baseSlice" /* 10686 */;


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

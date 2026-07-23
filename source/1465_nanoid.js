// Module ID: 1465
// Function ID: 17010
// Name: nanoid
// Dependencies: []

// Module 1465 (nanoid)
arg5.nanoid = function nanoid() {
  let tmp3;
  let num = 21;
  if (arguments.length > 0) {
    num = 21;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  let diff = tmp - 1;
  let str = "";
  let str2 = "";
  if (num | 0) {
    do {
      let _Math = Math;
      str = `${"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random(Math) | 0]}`;
      tmp3 = +diff;
      diff = tmp3 - 1;
      str2 = str;
    } while (tmp3);
  }
  return str2;
};
arg5.customAlphabet = function customAlphabet(arg0) {
  let closure_0 = arg0;
  let num = 21;
  if (arguments.length > 1) {
    num = 21;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  return () => {
    let tmp6;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      let diff = tmp2 - 1;
      let str = "";
      let str2 = "";
      if (first | 0) {
        do {
          let tmp5 = length;
          let _Math = Math;
          str = `${closure_0[Math.random(Math) * closure_0.length | 0]}`;
          tmp6 = +diff;
          diff = tmp6 - 1;
          str2 = str;
        } while (tmp6);
      }
      return str2;
    }
    first = num;
  };
};

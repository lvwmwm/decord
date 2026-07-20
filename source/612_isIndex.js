// Module ID: 612
// Function ID: 7052
// Name: isIndex
// Dependencies: []

// Module 612 (isIndex)
let closure_0 = /^(?:0|[1-9]\d*)$/;

export default function isIndex(arg0, arg1) {
  let num = 9007199254740991;
  if (null != arg1) {
    num = arg1;
  }
  let tmp3 = !tmp2;
  if (!!num) {
    let tmp4 = "number" === tmp;
    if (!tmp4) {
      let isMatch = "symbol" !== tmp;
      if (isMatch) {
        isMatch = regex.test(arg0);
      }
      tmp4 = isMatch;
    }
    tmp3 = tmp4;
  }
  if (tmp3) {
    tmp3 = arg0 > -1;
  }
  if (tmp3) {
    tmp3 = arg0 % 1 === 0;
  }
  if (tmp3) {
    tmp3 = arg0 < num;
  }
  return tmp3;
};

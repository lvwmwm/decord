// Module ID: 4399
// Function ID: 38816
// Name: isArguments
// Dependencies: []

// Module 4399 (isArguments)

export default function isArguments(callee) {
  const callResult = toString.call(callee);
  let tmp2 = "[object Arguments]" === callResult;
  if (!tmp2) {
    let tmp3 = "[object Array]" !== callResult;
    if (tmp3) {
      tmp3 = null !== callee;
    }
    if (tmp3) {
      tmp3 = "object" === typeof callee;
    }
    if (tmp3) {
      tmp3 = "number" === typeof callee.length;
    }
    if (tmp3) {
      tmp3 = callee.length >= 0;
    }
    if (tmp3) {
      tmp3 = "[object Function]" === toString.call(callee.callee);
    }
    tmp2 = tmp3;
  }
  return tmp2;
};

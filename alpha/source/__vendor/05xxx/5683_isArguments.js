// Module ID: 5683
// Function ID: 5684
// Name: isArguments
// Dependencies: []

// Module 5683 (isArguments)

export default function isArguments(callee) {
  const callResult = toString.call(callee);
  let tmp2 = "[object Arguments]" === callResult;
  const obj = toString;
  if (!tmp2) {
    tmp2 = "[object Array]" !== callResult && null !== callee && typeof callee === "object" && typeof callee.length === "number" && callee.length >= 0 && "[object Function]" === obj.call(callee.callee);
    const tmp3 = "[object Array]" !== callResult && null !== callee && typeof callee === "object" && typeof callee.length === "number" && callee.length >= 0 && "[object Function]" === obj.call(callee.callee);
  }
  return tmp2;
};

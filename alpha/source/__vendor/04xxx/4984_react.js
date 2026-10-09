// Module ID: 4984
// Function ID: 4985
// Name: react
// Dependencies: [19, 4985]

// Module 4984 (react)
import react from "react" /* 19 */;
import shallowEqual_mod from "shallowEqual" /* 4985 */;

let shallowEqual = shallowEqual_mod;
if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (arg0, arg1) => {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = shallowEqual;
  }
  const ref = react.useRef(closure_2);
  let current = ref.current;
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const tmp4 = ref.current !== closure_2 && tmp(arg0, ref.current);
  if (!tmp4) {
    current = arg0;
  }
  return current;
};

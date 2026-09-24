// Module ID: 4751
// Function ID: 4752
// Name: ref
// Dependencies: [19, 4752]

// Module 4751 (ref)
import noop from "module_19" /* 19 */;
import shallowEqual_mod from "shallowEqual" /* 4752 */;

let shallowEqual = shallowEqual_mod;
if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (current, arg1) => {
  const ref = noop.useRef(closure_2);
  current = ref.current;
  const effect = noop.useEffect(() => {
    ref.current = current;
  });
  return current;
};

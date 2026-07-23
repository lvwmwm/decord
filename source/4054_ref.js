// Module ID: 4054
// Function ID: 33814
// Name: ref
// Dependencies: [31, 4055]

// Module 4054 (ref)
import result from "result";
import shallowEqual from "shallowEqual";

if (shallowEqual) {
  if ("object" === typeof shallowEqual) {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (arg0, arg1) => {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = closure_1;
  }
  ref = ref.useRef(closure_2);
  let current = ref.current;
  closure_1 = current;
  const effect = ref.useEffect(() => {
    ref.current = closure_1;
  });
  if (!tmp4) {
    closure_1 = arg0;
    current = arg0;
  }
  return current;
};

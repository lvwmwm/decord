// Module ID: 597
// Function ID: 598
// Name: baseMatchesProperty
// Dependencies: [598, 599, 600, 601, 602, 641, 644]

// Module 597 (baseMatchesProperty)
import get from "get" /* 602 */;

const require = globalThis.__r;
let _require, dependencyMap;


export default function baseMatchesProperty(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  if (require("isKey")(arg0)) {
    let fn;
    if (tmp(599)(arg1)) {
      const tmpResult = tmp(600);
      fn = tmpResult(tmp(601)(arg0), arg1);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = get(arg0, closure_0);
    const tmp3 = closure_0;
    if (undefined === tmp4) {
      let tmp6;
      if (tmp4 === closure_1) {
        tmp6 = tmp(641)(arg0, tmp3);
      }
      return tmp6;
    }
    tmp6 = tmp(644)(closure_1, tmp4, 3);
  };
};

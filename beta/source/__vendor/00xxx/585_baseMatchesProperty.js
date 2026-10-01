// Module ID: 585
// Function ID: 586
// Name: baseMatchesProperty
// Dependencies: [586, 587, 588, 589, 590, 629, 632]

// Module 585 (baseMatchesProperty)
import get from "get" /* 590 */;

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
    if (tmp(587)(arg1)) {
      const tmpResult = tmp(588);
      fn = tmpResult(tmp(589)(arg0), arg1);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = get(arg0, closure_0);
    const tmp3 = closure_0;
    if (undefined === tmp4) {
      let tmp6;
      if (tmp4 === closure_1) {
        tmp6 = tmp(629)(arg0, tmp3);
      }
      return tmp6;
    }
    tmp6 = tmp(632)(closure_1, tmp4, 3);
  };
};

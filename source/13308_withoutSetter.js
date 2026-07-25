// Module ID: 13308
// Function ID: 102139
// Name: withoutSetter
// Dependencies: [13309, 13312, 13294, 13316, 13317, 13313]

// Module 13308 (withoutSetter)
import module_13312 from "module_13312";
import { Symbol as _Symbol } from "check";

let closure_2 = require("__core-js_shared__")("wks");
if (module_13312) {
  let withoutSetter = _Symbol.for || require("check").Symbol;
  const tmp2 = _Symbol.for || require("check").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("check").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  if (require(13317) /* call */(table, arg0)) {
    return table[arg0];
  } else {
    let num = dependencyMap;
    if (!require(13313)) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(13317) /* call */;
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    tmp = table;
  }
};

// Module ID: 13244
// Function ID: 101685
// Name: withoutSetter
// Dependencies: [13245, 13248, 13230, 13252, 13253, 13249]

// Module 13244 (withoutSetter)
import module_13248 from "module_13248";
import { Symbol as _Symbol } from "check";

let closure_2 = require("__core-js_shared__")("wks");
if (module_13248) {
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
  if (require(13253) /* call */(table, arg0)) {
    return table[arg0];
  } else {
    let num = dependencyMap;
    if (!require(13249)) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(13253) /* call */;
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    tmp = table;
  }
};

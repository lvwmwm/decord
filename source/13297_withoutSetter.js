// Module ID: 13297
// Function ID: 102012
// Name: withoutSetter
// Dependencies: [13298, 13301, 13283, 13305, 13306, 13302]

// Module 13297 (withoutSetter)
import module_13301 from "module_13301";
import { Symbol as _Symbol } from "check";

let closure_2 = require("__core-js_shared__")("wks");
if (module_13301) {
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
  if (require(13306) /* call */(table, arg0)) {
    return table[arg0];
  } else {
    let num = dependencyMap;
    if (!require(13302)) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(13306) /* call */;
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    tmp = table;
  }
};

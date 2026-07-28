// Module ID: 13353
// Function ID: 102317
// Name: withoutSetter
// Dependencies: [13354, 13357, 13339, 13361, 13362, 13358]

// Module 13353 (withoutSetter)
import module_13357 from "module_13357";
import { Symbol as _Symbol } from "check";

let closure_2 = require("__core-js_shared__")("wks");
if (module_13357) {
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
  if (require(13362) /* call */(table, arg0)) {
    return table[arg0];
  } else {
    let num = dependencyMap;
    if (!require(13358)) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(13362) /* call */;
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    tmp = table;
  }
};

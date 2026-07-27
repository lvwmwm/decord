// Module ID: 13309
// Function ID: 102144
// Name: withoutSetter
// Dependencies: [13310, 13313, 13295, 13317, 13318, 13314]

// Module 13309 (withoutSetter)
import module_13313 from "module_13313";
import { Symbol as _Symbol } from "check";

let closure_2 = require("__core-js_shared__")("wks");
if (module_13313) {
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
  if (require(13318) /* call */(table, arg0)) {
    return table[arg0];
  } else {
    let num = dependencyMap;
    if (!require(13314)) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(13318) /* call */;
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    tmp = table;
  }
};

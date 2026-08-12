// Module ID: 13651
// Function ID: 13652
// Name: withoutSetter
// Dependencies: [13652, 13655, 13637, 13659, 13660, 13656]

// Module 13651 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13637";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13637").Symbol;
  const tmp2 = _Symbol.for || require("module_13637").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13637").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13660) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13656)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13660);
    }
    _Symbol = tmp(13637).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

// Module ID: 13371
// Function ID: 13372
// Name: withoutSetter
// Dependencies: [13372, 13375, 13357, 13379, 13380, 13376]

// Module 13371 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13357";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13357").Symbol;
  const tmp2 = _Symbol.for || require("module_13357").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13357").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13380) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13376)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13380);
    }
    _Symbol = tmp(13357).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

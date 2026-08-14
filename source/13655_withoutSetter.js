// Module ID: 13655
// Function ID: 13656
// Name: withoutSetter
// Dependencies: [13656, 13659, 13641, 13663, 13664, 13660]

// Module 13655 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13641";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13641").Symbol;
  const tmp2 = _Symbol.for || require("module_13641").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13641").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13664) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13660)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13664);
    }
    _Symbol = tmp(13641).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

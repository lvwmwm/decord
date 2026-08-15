// Module ID: 13687
// Function ID: 13688
// Name: withoutSetter
// Dependencies: [13688, 13691, 13673, 13695, 13696, 13692]

// Module 13687 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13673";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13673").Symbol;
  const tmp2 = _Symbol.for || require("module_13673").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13673").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13696) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13692)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13696);
    }
    _Symbol = tmp(13673).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

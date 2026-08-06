// Module ID: 13500
// Function ID: 13501
// Name: withoutSetter
// Dependencies: [13501, 13504, 13486, 13508, 13509, 13505]

// Module 13500 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13486";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13486").Symbol;
  const tmp2 = _Symbol.for || require("module_13486").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13486").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13509) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13505)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13509);
    }
    _Symbol = tmp(13486).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

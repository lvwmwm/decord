// Module ID: 13586
// Function ID: 13587
// Name: withoutSetter
// Dependencies: [13587, 13590, 13572, 13594, 13595, 13591]

// Module 13586 (withoutSetter)
import prop from "prop";
import { Symbol as _Symbol } from "module_13572";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13572").Symbol;
  const tmp2 = _Symbol.for || require("module_13572").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13572").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (require(13595) /* call */(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13591)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13595);
    }
    _Symbol = tmp(13572).Symbol;
    tmp5 = _Symbol[arg0];
  }
};

// Module ID: 8491
// Function ID: 8492
// Name: Syntax
// Dependencies: [8492, 8493, 8494]
// Exports: parse, parseLossless, unparse

// Module 8491 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8492 */;
import react_nativeDefault from "react-native" /* 8493 */;
import _mod8494 from "module_8494" /* 8494 */;


export const Syntax = _mod8494.Syntax;
export const parse = function parse(arg0, arg1, arg2) {
  const decodeAstJson = decodeAstJson2.decodeAstJson;
  decodeAstJson2;
  const parseToAstString = react_nativeDefault.parseToAstString;
  react_nativeDefault;
  return decodeAstJson(parseToAstString(arg0, arg1, arg2));
};
export const parseLossless = function parseLossless(arg0, arg1, arg2) {
  const decodeAstJson = decodeAstJson2.decodeAstJson;
  decodeAstJson2;
  const parseLosslessToAstString = react_nativeDefault.parseLosslessToAstString;
  react_nativeDefault;
  return decodeAstJson(parseLosslessToAstString(arg0, arg1, arg2));
};
export const unparse = function unparse(arg0) {
  const unparseFromAstString = react_nativeDefault.unparseFromAstString;
  react_nativeDefault;
  const obj = decodeAstJson2;
  return unparseFromAstString(obj.encodeAstJson(arg0));
};

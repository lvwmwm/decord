// Module ID: 8528
// Function ID: 8529
// Name: Syntax
// Dependencies: [8529, 8530, 8531]
// Exports: parse, parseLossless, unparse

// Module 8528 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8529 */;
import react_nativeDefault from "react-native" /* 8530 */;
import _mod8531 from "module_8531" /* 8531 */;


export const Syntax = _mod8531.Syntax;
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

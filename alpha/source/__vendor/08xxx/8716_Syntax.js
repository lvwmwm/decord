// Module ID: 8716
// Function ID: 8717
// Name: Syntax
// Dependencies: [8717, 8718, 8719]
// Exports: parse, parseLossless, unparse

// Module 8716 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8717 */;
import react_nativeDefault from "react-native" /* 8718 */;
import _mod8719 from "module_8719" /* 8719 */;


export const Syntax = _mod8719.Syntax;
export function parse(arg0, arg1, arg2) {
  const decodeAstJson = decodeAstJson2.decodeAstJson;
  decodeAstJson2;
  const parseToAstString = react_nativeDefault.parseToAstString;
  react_nativeDefault;
  return decodeAstJson(parseToAstString(arg0, arg1, arg2));
}
export function parseLossless(arg0, arg1, arg2) {
  const decodeAstJson = decodeAstJson2.decodeAstJson;
  decodeAstJson2;
  const parseLosslessToAstString = react_nativeDefault.parseLosslessToAstString;
  react_nativeDefault;
  return decodeAstJson(parseLosslessToAstString(arg0, arg1, arg2));
}
export function unparse(arg0) {
  const unparseFromAstString = react_nativeDefault.unparseFromAstString;
  react_nativeDefault;
  const obj = decodeAstJson2;
  return unparseFromAstString(obj.encodeAstJson(arg0));
}

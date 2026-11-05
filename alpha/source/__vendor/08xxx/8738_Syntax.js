// Module ID: 8738
// Function ID: 8739
// Name: Syntax
// Dependencies: [8739, 8740, 8741]
// Exports: parse, parseLossless, unparse

// Module 8738 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8739 */;
import react_nativeDefault from "react-native" /* 8740 */;
import _mod8741 from "module_8741" /* 8741 */;


export const Syntax = _mod8741.Syntax;
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

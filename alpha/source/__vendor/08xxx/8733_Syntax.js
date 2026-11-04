// Module ID: 8733
// Function ID: 8734
// Name: Syntax
// Dependencies: [8734, 8735, 8736]
// Exports: parse, parseLossless, unparse

// Module 8733 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8734 */;
import react_nativeDefault from "react-native" /* 8735 */;
import _mod8736 from "module_8736" /* 8736 */;


export const Syntax = _mod8736.Syntax;
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

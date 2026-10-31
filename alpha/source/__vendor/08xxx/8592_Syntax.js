// Module ID: 8592
// Function ID: 8593
// Name: Syntax
// Dependencies: [8593, 8594, 8595]
// Exports: parse, parseLossless, unparse

// Module 8592 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8593 */;
import react_nativeDefault from "react-native" /* 8594 */;
import _mod8595 from "module_8595" /* 8595 */;


export const Syntax = _mod8595.Syntax;
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

// Module ID: 8550
// Function ID: 8551
// Name: Syntax
// Dependencies: [8551, 8552, 8553]
// Exports: parse, parseLossless, unparse

// Module 8550 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8551 */;
import react_nativeDefault from "react-native" /* 8552 */;
import _mod8553 from "module_8553" /* 8553 */;


export const Syntax = _mod8553.Syntax;
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

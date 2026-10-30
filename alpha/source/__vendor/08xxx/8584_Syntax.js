// Module ID: 8584
// Function ID: 8585
// Name: Syntax
// Dependencies: [8585, 8586, 8587]
// Exports: parse, parseLossless, unparse

// Module 8584 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8585 */;
import react_nativeDefault from "react-native" /* 8586 */;
import _mod8587 from "module_8587" /* 8587 */;


export const Syntax = _mod8587.Syntax;
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

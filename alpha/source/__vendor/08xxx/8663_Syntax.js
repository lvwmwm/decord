// Module ID: 8663
// Function ID: 8664
// Name: Syntax
// Dependencies: [8664, 8665, 8666]
// Exports: parse, parseLossless

// Module 8663 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8664 */;
import react_nativeDefault from "react-native" /* 8665 */;
import _mod8666 from "module_8666" /* 8666 */;


export const Syntax = _mod8666.Syntax;
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

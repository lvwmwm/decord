// Module ID: 8813
// Function ID: 8814
// Name: Syntax
// Dependencies: [8814, 8815, 8816]
// Exports: parse, parseLossless

// Module 8813 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8814 */;
import react_nativeDefault from "react-native" /* 8815 */;
import _mod8816 from "module_8816" /* 8816 */;


export const Syntax = _mod8816.Syntax;
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

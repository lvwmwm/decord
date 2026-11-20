// Module ID: 8693
// Function ID: 8694
// Name: Syntax
// Dependencies: [8694, 8695, 8696]
// Exports: parse, parseLossless

// Module 8693 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8694 */;
import react_nativeDefault from "react-native" /* 8695 */;
import _mod8696 from "module_8696" /* 8696 */;


export const Syntax = _mod8696.Syntax;
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

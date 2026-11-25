// Module ID: 14152
// Function ID: 14153
// Name: Syntax
// Dependencies: [14153, 14154, 14155]
// Exports: parse, parseLossless

// Module 14152 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 14153 */;
import react_nativeDefault from "react-native" /* 14154 */;
import _mod14155 from "module_14155" /* 14155 */;


export const Syntax = _mod14155.Syntax;
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

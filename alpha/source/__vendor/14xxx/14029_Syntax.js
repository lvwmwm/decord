// Module ID: 14029
// Function ID: 14030
// Name: Syntax
// Dependencies: [14030, 14031, 14032]
// Exports: parse, parseLossless

// Module 14029 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 14030 */;
import react_nativeDefault from "react-native" /* 14031 */;
import _mod14032 from "module_14032" /* 14032 */;


export const Syntax = _mod14032.Syntax;
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

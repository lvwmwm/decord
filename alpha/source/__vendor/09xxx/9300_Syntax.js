// Module ID: 9300
// Function ID: 9301
// Name: Syntax
// Dependencies: [9301, 9302, 9303]
// Exports: parse, parseLossless

// Module 9300 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 9301 */;
import react_nativeDefault from "react-native" /* 9302 */;
import _mod9303 from "module_9303" /* 9303 */;


export const Syntax = _mod9303.Syntax;
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

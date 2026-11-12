// Module ID: 9299
// Function ID: 9300
// Name: Syntax
// Dependencies: [9300, 9301, 9302]
// Exports: parse, parseLossless

// Module 9299 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 9300 */;
import react_nativeDefault from "react-native" /* 9301 */;
import _mod9302 from "module_9302" /* 9302 */;


export const Syntax = _mod9302.Syntax;
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

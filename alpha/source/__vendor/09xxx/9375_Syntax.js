// Module ID: 9375
// Function ID: 9376
// Name: Syntax
// Dependencies: [9376, 9377, 9378]
// Exports: parse, parseLossless

// Module 9375 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 9376 */;
import react_nativeDefault from "react-native" /* 9377 */;
import _mod9378 from "module_9378" /* 9378 */;


export const Syntax = _mod9378.Syntax;
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

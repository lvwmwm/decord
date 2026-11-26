// Module ID: 14204
// Function ID: 14205
// Name: Syntax
// Dependencies: [14205, 14206, 14207]
// Exports: parse, parseLossless

// Module 14204 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 14205 */;
import react_nativeDefault from "react-native" /* 14206 */;
import _mod14207 from "module_14207" /* 14207 */;


export const Syntax = _mod14207.Syntax;
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

// Module ID: 14211
// Function ID: 14212
// Name: Syntax
// Dependencies: [14212, 14213, 14214]
// Exports: parse, parseLossless

// Module 14211 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 14212 */;
import react_nativeDefault from "react-native" /* 14213 */;
import _mod14214 from "module_14214" /* 14214 */;


export const Syntax = _mod14214.Syntax;
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

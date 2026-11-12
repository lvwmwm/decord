// Module ID: 8696
// Function ID: 8697
// Name: Syntax
// Dependencies: [8697, 8698, 8699]
// Exports: parse, parseLossless

// Module 8696 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8697 */;
import react_nativeDefault from "react-native" /* 8698 */;
import _mod8699 from "module_8699" /* 8699 */;


export const Syntax = _mod8699.Syntax;
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

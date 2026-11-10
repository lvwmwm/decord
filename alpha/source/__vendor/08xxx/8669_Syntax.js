// Module ID: 8669
// Function ID: 8670
// Name: Syntax
// Dependencies: [8670, 8671, 8672]
// Exports: parse, parseLossless

// Module 8669 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8670 */;
import react_nativeDefault from "react-native" /* 8671 */;
import _mod8672 from "module_8672" /* 8672 */;


export const Syntax = _mod8672.Syntax;
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

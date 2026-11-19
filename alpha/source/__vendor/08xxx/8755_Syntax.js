// Module ID: 8755
// Function ID: 8756
// Name: Syntax
// Dependencies: [8756, 8757, 8758]
// Exports: parse, parseLossless

// Module 8755 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8756 */;
import react_nativeDefault from "react-native" /* 8757 */;
import _mod8758 from "module_8758" /* 8758 */;


export const Syntax = _mod8758.Syntax;
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

// Module ID: 8786
// Function ID: 8787
// Name: Syntax
// Dependencies: [8787, 8788, 8789]
// Exports: parse, parseLossless

// Module 8786 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8787 */;
import react_nativeDefault from "react-native" /* 8788 */;
import _mod8789 from "module_8789" /* 8789 */;


export const Syntax = _mod8789.Syntax;
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

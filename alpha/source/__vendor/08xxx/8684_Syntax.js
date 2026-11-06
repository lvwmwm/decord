// Module ID: 8684
// Function ID: 8685
// Name: Syntax
// Dependencies: [8685, 8686, 8687]
// Exports: parse, parseLossless

// Module 8684 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 8685 */;
import react_nativeDefault from "react-native" /* 8686 */;
import _mod8687 from "module_8687" /* 8687 */;


export const Syntax = _mod8687.Syntax;
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

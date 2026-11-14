// Module ID: 9366
// Function ID: 9367
// Name: Syntax
// Dependencies: [9367, 9368, 9369]
// Exports: parse, parseLossless

// Module 9366 (Syntax)
import decodeAstJson2 from "decodeAstJson" /* 9367 */;
import react_nativeDefault from "react-native" /* 9368 */;
import _mod9369 from "module_9369" /* 9369 */;


export const Syntax = _mod9369.Syntax;
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

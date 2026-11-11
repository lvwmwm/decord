// Module ID: 13855
// Function ID: 13856
// Name: nthCheck
// Dependencies: [13856, 13857]
// Exports: default, sequence

// Module 13855 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13856").parse;
export const compile = require("module_13857").compile;
export const generate = require("module_13857").generate;
export default function nthCheck(arg0) {
  return require("module_13857").compile(require("module_13856").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13857").generate(require("module_13856").parse(arg0));
}

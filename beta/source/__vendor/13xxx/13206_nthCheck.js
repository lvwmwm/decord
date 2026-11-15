// Module ID: 13206
// Function ID: 13207
// Name: nthCheck
// Dependencies: [13207, 13208]
// Exports: default, sequence

// Module 13206 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13207").parse;
export const compile = require("module_13208").compile;
export const generate = require("module_13208").generate;
export default function nthCheck(arg0) {
  return require("module_13208").compile(require("module_13207").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13208").generate(require("module_13207").parse(arg0));
}

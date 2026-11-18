// Module ID: 16369
// Function ID: 16370
// Name: nthCheck
// Dependencies: [16370, 16371]
// Exports: default, sequence

// Module 16369 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_16370").parse;
export const compile = require("module_16371").compile;
export const generate = require("module_16371").generate;
export default function nthCheck(arg0) {
  return require("module_16371").compile(require("module_16370").parse(arg0));
};
export function sequence(arg0) {
  return require("module_16371").generate(require("module_16370").parse(arg0));
}

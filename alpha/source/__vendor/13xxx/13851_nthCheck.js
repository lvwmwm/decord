// Module ID: 13851
// Function ID: 13852
// Name: nthCheck
// Dependencies: [13852, 13853]
// Exports: default, sequence

// Module 13851 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13852").parse;
export const compile = require("module_13853").compile;
export const generate = require("module_13853").generate;
export default function nthCheck(arg0) {
  return require("module_13853").compile(require("module_13852").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13853").generate(require("module_13852").parse(arg0));
}

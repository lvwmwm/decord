// Module ID: 13956
// Function ID: 13957
// Name: nthCheck
// Dependencies: [13957, 13958]
// Exports: default, sequence

// Module 13956 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13957").parse;
export const compile = require("module_13958").compile;
export const generate = require("module_13958").generate;
export default function nthCheck(arg0) {
  return require("module_13958").compile(require("module_13957").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13958").generate(require("module_13957").parse(arg0));
}

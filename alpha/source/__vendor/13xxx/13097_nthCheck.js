// Module ID: 13097
// Function ID: 13098
// Name: nthCheck
// Dependencies: [13098, 13099]
// Exports: default, sequence

// Module 13097 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13098").parse;
export const compile = require("module_13099").compile;
export const generate = require("module_13099").generate;
export default function nthCheck(arg0) {
  return require("module_13099").compile(require("module_13098").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13099").generate(require("module_13098").parse(arg0));
}

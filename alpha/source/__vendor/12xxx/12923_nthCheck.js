// Module ID: 12923
// Function ID: 12924
// Name: nthCheck
// Dependencies: [12924, 12925]
// Exports: default, sequence

// Module 12923 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_12924").parse;
export const compile = require("module_12925").compile;
export const generate = require("module_12925").generate;
export default function nthCheck(arg0) {
  return require("module_12925").compile(require("module_12924").parse(arg0));
};
export function sequence(arg0) {
  return require("module_12925").generate(require("module_12924").parse(arg0));
}

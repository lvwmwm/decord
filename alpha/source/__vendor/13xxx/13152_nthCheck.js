// Module ID: 13152
// Function ID: 13153
// Name: nthCheck
// Dependencies: [13153, 13154]
// Exports: default, sequence

// Module 13152 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13153").parse;
export const compile = require("module_13154").compile;
export const generate = require("module_13154").generate;
export default function nthCheck(arg0) {
  return require("module_13154").compile(require("module_13153").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13154").generate(require("module_13153").parse(arg0));
}

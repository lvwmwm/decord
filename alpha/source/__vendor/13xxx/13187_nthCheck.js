// Module ID: 13187
// Function ID: 13188
// Name: nthCheck
// Dependencies: [13188, 13189]
// Exports: default, sequence

// Module 13187 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13188").parse;
export const compile = require("module_13189").compile;
export const generate = require("module_13189").generate;
export default function nthCheck(arg0) {
  return require("module_13189").compile(require("module_13188").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13189").generate(require("module_13188").parse(arg0));
}

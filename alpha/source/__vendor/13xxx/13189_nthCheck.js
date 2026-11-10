// Module ID: 13189
// Function ID: 13190
// Name: nthCheck
// Dependencies: [13190, 13191]
// Exports: default, sequence

// Module 13189 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13190").parse;
export const compile = require("module_13191").compile;
export const generate = require("module_13191").generate;
export default function nthCheck(arg0) {
  return require("module_13191").compile(require("module_13190").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13191").generate(require("module_13190").parse(arg0));
}

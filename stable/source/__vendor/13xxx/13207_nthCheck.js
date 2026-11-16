// Module ID: 13207
// Function ID: 13208
// Name: nthCheck
// Dependencies: [13208, 13209]
// Exports: default, sequence

// Module 13207 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13208").parse;
export const compile = require("module_13209").compile;
export const generate = require("module_13209").generate;
export default function nthCheck(arg0) {
  return require("module_13209").compile(require("module_13208").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13209").generate(require("module_13208").parse(arg0));
}

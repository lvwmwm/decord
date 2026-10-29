// Module ID: 12782
// Function ID: 12783
// Name: nthCheck
// Dependencies: [12783, 12784]
// Exports: default, sequence

// Module 12782 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_12783").parse;
export const compile = require("module_12784").compile;
export const generate = require("module_12784").generate;
export default function nthCheck(arg0) {
  return require("module_12784").compile(require("module_12783").parse(arg0));
};
export function sequence(arg0) {
  return require("module_12784").generate(require("module_12783").parse(arg0));
}

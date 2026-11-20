// Module ID: 13958
// Function ID: 13959
// Name: nthCheck
// Dependencies: [13959, 13960]
// Exports: default, sequence

// Module 13958 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13959").parse;
export const compile = require("module_13960").compile;
export const generate = require("module_13960").generate;
export default function nthCheck(arg0) {
  return require("module_13960").compile(require("module_13959").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13960").generate(require("module_13959").parse(arg0));
}

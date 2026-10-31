// Module ID: 12958
// Function ID: 12959
// Name: nthCheck
// Dependencies: [12959, 12960]
// Exports: default, sequence

// Module 12958 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_12959").parse;
export const compile = require("module_12960").compile;
export const generate = require("module_12960").generate;
export default function nthCheck(arg0) {
  return require("module_12960").compile(require("module_12959").parse(arg0));
};
export function sequence(arg0) {
  return require("module_12960").generate(require("module_12959").parse(arg0));
}

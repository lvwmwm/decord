// Module ID: 16360
// Function ID: 16361
// Name: nthCheck
// Dependencies: [16361, 16362]
// Exports: default, sequence

// Module 16360 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_16361").parse;
export const compile = require("module_16362").compile;
export const generate = require("module_16362").generate;
export default function nthCheck(arg0) {
  return require("module_16362").compile(require("module_16361").parse(arg0));
};
export function sequence(arg0) {
  return require("module_16362").generate(require("module_16361").parse(arg0));
}

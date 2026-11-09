// Module ID: 13175
// Function ID: 13176
// Name: nthCheck
// Dependencies: [13176, 13177]
// Exports: default, sequence

// Module 13175 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13176").parse;
export const compile = require("module_13177").compile;
export const generate = require("module_13177").generate;
export default function nthCheck(arg0) {
  return require("module_13177").compile(require("module_13176").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13177").generate(require("module_13176").parse(arg0));
}

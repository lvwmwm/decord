// Module ID: 12961
// Function ID: 12962
// Name: nthCheck
// Dependencies: [12962, 12963]
// Exports: default, sequence

// Module 12961 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_12962").parse;
export const compile = require("module_12963").compile;
export const generate = require("module_12963").generate;
export default function nthCheck(arg0) {
  return require("module_12963").compile(require("module_12962").parse(arg0));
};
export function sequence(arg0) {
  return require("module_12963").generate(require("module_12962").parse(arg0));
}

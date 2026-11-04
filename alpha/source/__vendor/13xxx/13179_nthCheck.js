// Module ID: 13179
// Function ID: 13180
// Name: nthCheck
// Dependencies: [13180, 13181]
// Exports: default, sequence

// Module 13179 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13180").parse;
export const compile = require("module_13181").compile;
export const generate = require("module_13181").generate;
export default function nthCheck(arg0) {
  return require("module_13181").compile(require("module_13180").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13181").generate(require("module_13180").parse(arg0));
}

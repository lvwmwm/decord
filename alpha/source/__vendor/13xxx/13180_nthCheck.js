// Module ID: 13180
// Function ID: 13181
// Name: nthCheck
// Dependencies: [13181, 13182]
// Exports: default, sequence

// Module 13180 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_13181").parse;
export const compile = require("module_13182").compile;
export const generate = require("module_13182").generate;
export default function nthCheck(arg0) {
  return require("module_13182").compile(require("module_13181").parse(arg0));
};
export function sequence(arg0) {
  return require("module_13182").generate(require("module_13181").parse(arg0));
}

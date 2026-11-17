// Module ID: 14977
// Function ID: 14978
// Name: nthCheck
// Dependencies: [14978, 14979]
// Exports: default, sequence

// Module 14977 (nthCheck)
const require = globalThis.__r;


export const parse = require("module_14978").parse;
export const compile = require("module_14979").compile;
export const generate = require("module_14979").generate;
export default function nthCheck(arg0) {
  return require("module_14979").compile(require("module_14978").parse(arg0));
};
export function sequence(arg0) {
  return require("module_14979").generate(require("module_14978").parse(arg0));
}

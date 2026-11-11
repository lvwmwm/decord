// Module ID: 11404
// Function ID: 11405
// Name: includeCommonConfiguration
// Dependencies: [11405, 11406, 11401, 11407, 11408, 11409, 11410]
// Exports: includeCommonConfiguration

// Module 11404 (includeCommonConfiguration)
import _mod11401 from "module_11401" /* 11401 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import _mod11408 from "module_11408" /* 11408 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11410 from "module_11410" /* 11410 */;

const fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const module_11405 = fn(_mod11405);
const module_11406 = fn(_mod11406);
const module_11401 = fn(_mod11401);
const module_11407 = fn(_mod11407);
const module_11408 = fn(_mod11408);
const module_11409 = fn(_mod11409);
const module_11410 = fn(_mod11410);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11409.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11410.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11406.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11401.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11405.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11401.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11407.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11408.default(flag);
  push4(_default7);
  return parsers;
}

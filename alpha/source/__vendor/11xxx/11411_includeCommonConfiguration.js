// Module ID: 11411
// Function ID: 11412
// Name: includeCommonConfiguration
// Dependencies: [11412, 11413, 11408, 11414, 11415, 11416, 11417]
// Exports: includeCommonConfiguration

// Module 11411 (includeCommonConfiguration)
import _mod11408 from "module_11408" /* 11408 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11414 from "module_11414" /* 11414 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;
import _mod11417 from "module_11417" /* 11417 */;

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
const module_11412 = fn(_mod11412);
const module_11413 = fn(_mod11413);
const module_11408 = fn(_mod11408);
const module_11414 = fn(_mod11414);
const module_11415 = fn(_mod11415);
const module_11416 = fn(_mod11416);
const module_11417 = fn(_mod11417);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11416.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11417.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11413.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11408.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11412.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11408.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11414.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11415.default(flag);
  push4(_default7);
  return parsers;
}

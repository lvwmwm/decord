// Module ID: 11398
// Function ID: 11399
// Name: includeCommonConfiguration
// Dependencies: [11399, 11400, 11395, 11401, 11402, 11403, 11404]
// Exports: includeCommonConfiguration

// Module 11398 (includeCommonConfiguration)
import _mod11395 from "module_11395" /* 11395 */;
import _mod11399 from "module_11399" /* 11399 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11404 from "module_11404" /* 11404 */;

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
const module_11399 = fn(_mod11399);
const module_11400 = fn(_mod11400);
const module_11395 = fn(_mod11395);
const module_11401 = fn(_mod11401);
const module_11402 = fn(_mod11402);
const module_11403 = fn(_mod11403);
const module_11404 = fn(_mod11404);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11403.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11404.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11400.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11395.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11399.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11395.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11401.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11402.default(flag);
  push4(_default7);
  return parsers;
}

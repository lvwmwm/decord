// Module ID: 10343
// Function ID: 10344
// Name: includeCommonConfiguration
// Dependencies: [10344, 10345, 10340, 10346, 10347, 10348, 10349]
// Exports: includeCommonConfiguration

// Module 10343 (includeCommonConfiguration)
import _mod10340 from "module_10340" /* 10340 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;

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
const module_10344 = fn(_mod10344);
const module_10345 = fn(_mod10345);
const module_10340 = fn(_mod10340);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10348.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10349.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10345.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10340.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10344.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10340.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10346.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10347.default(flag);
  push4(_default7);
  return parsers;
}

// Module ID: 11456
// Function ID: 11457
// Name: includeCommonConfiguration
// Dependencies: [11457, 11458, 11453, 11459, 11460, 11461, 11462]
// Exports: includeCommonConfiguration

// Module 11456 (includeCommonConfiguration)
import _mod11453 from "module_11453" /* 11453 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11462 from "module_11462" /* 11462 */;

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
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11453 = fn(_mod11453);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11461 = fn(_mod11461);
const module_11462 = fn(_mod11462);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11461.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11462.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11458.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11453.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11457.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11453.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11459.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11460.default(flag);
  push4(_default7);
  return parsers;
}

// Module ID: 11451
// Function ID: 11452
// Name: includeCommonConfiguration
// Dependencies: [11452, 11453, 11448, 11454, 11455, 11456, 11457]
// Exports: includeCommonConfiguration

// Module 11451 (includeCommonConfiguration)
import _mod11448 from "module_11448" /* 11448 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11457 from "module_11457" /* 11457 */;

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
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11448 = fn(_mod11448);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
const module_11456 = fn(_mod11456);
const module_11457 = fn(_mod11457);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11456.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11457.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11453.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11448.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11452.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11448.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11454.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11455.default(flag);
  push4(_default7);
  return parsers;
}

// Module ID: 10482
// Function ID: 10483
// Name: includeCommonConfiguration
// Dependencies: [10483, 10484, 10479, 10485, 10486, 10487, 10488]
// Exports: includeCommonConfiguration

// Module 10482 (includeCommonConfiguration)
import _mod10479 from "module_10479" /* 10479 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10484 from "module_10484" /* 10484 */;
import _mod10485 from "module_10485" /* 10485 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;

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
const module_10483 = fn(_mod10483);
const module_10484 = fn(_mod10484);
const module_10479 = fn(_mod10479);
const module_10485 = fn(_mod10485);
const module_10486 = fn(_mod10486);
const module_10487 = fn(_mod10487);
const module_10488 = fn(_mod10488);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10487.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10488.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10484.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10479.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10483.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10479.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10485.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10486.default(flag);
  push4(_default7);
  return parsers;
}

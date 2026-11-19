// Module ID: 11389
// Function ID: 11390
// Name: includeCommonConfiguration
// Dependencies: [11390, 11391, 11386, 11392, 11393, 11394, 11395]
// Exports: includeCommonConfiguration

// Module 11389 (includeCommonConfiguration)
import _mod11386 from "module_11386" /* 11386 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11395 from "module_11395" /* 11395 */;

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
const module_11390 = fn(_mod11390);
const module_11391 = fn(_mod11391);
const module_11386 = fn(_mod11386);
const module_11392 = fn(_mod11392);
const module_11393 = fn(_mod11393);
const module_11394 = fn(_mod11394);
const module_11395 = fn(_mod11395);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11394.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11395.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11391.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11386.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11390.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11386.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11392.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11393.default(flag);
  push4(_default7);
  return parsers;
}

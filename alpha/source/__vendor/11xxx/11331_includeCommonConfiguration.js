// Module ID: 11331
// Function ID: 11332
// Name: includeCommonConfiguration
// Dependencies: [11332, 11333, 11328, 11334, 11335, 11336, 11337]
// Exports: includeCommonConfiguration

// Module 11331 (includeCommonConfiguration)
import _mod11328 from "module_11328" /* 11328 */;
import _mod11332 from "module_11332" /* 11332 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11334 from "module_11334" /* 11334 */;
import _mod11335 from "module_11335" /* 11335 */;
import _mod11336 from "module_11336" /* 11336 */;
import _mod11337 from "module_11337" /* 11337 */;

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
const module_11332 = fn(_mod11332);
const module_11333 = fn(_mod11333);
const module_11328 = fn(_mod11328);
const module_11334 = fn(_mod11334);
const module_11335 = fn(_mod11335);
const module_11336 = fn(_mod11336);
const module_11337 = fn(_mod11337);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11336.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_11337.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_11333.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_11328.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_11332.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_11328.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_11334.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_11335.default(flag);
  push4(_default7);
  return parsers;
}

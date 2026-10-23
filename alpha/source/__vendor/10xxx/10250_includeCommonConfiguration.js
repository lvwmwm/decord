// Module ID: 10250
// Function ID: 10251
// Name: includeCommonConfiguration
// Dependencies: [10251, 10252, 10247, 10253, 10254, 10255, 10256]
// Exports: includeCommonConfiguration

// Module 10250 (includeCommonConfiguration)
import _mod10247 from "module_10247" /* 10247 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;

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
const module_10251 = fn(_mod10251);
const module_10252 = fn(_mod10252);
const module_10247 = fn(_mod10247);
const module_10253 = fn(_mod10253);
const module_10254 = fn(_mod10254);
const module_10255 = fn(_mod10255);
const module_10256 = fn(_mod10256);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10255.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10256.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10252.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10247.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10251.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10247.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10253.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10254.default(flag);
  push4(_default7);
  return parsers;
};

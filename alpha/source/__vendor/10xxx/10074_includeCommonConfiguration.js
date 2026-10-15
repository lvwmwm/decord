// Module ID: 10074
// Function ID: 10075
// Name: includeCommonConfiguration
// Dependencies: [10075, 10076, 10071, 10077, 10078, 10079, 10080]
// Exports: includeCommonConfiguration

// Module 10074 (includeCommonConfiguration)
import _mod10071 from "module_10071" /* 10071 */;
import _mod10075 from "module_10075" /* 10075 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10077 from "module_10077" /* 10077 */;
import _mod10078 from "module_10078" /* 10078 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10080 from "module_10080" /* 10080 */;

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
const module_10075 = fn(_mod10075);
const module_10076 = fn(_mod10076);
const module_10071 = fn(_mod10071);
const module_10077 = fn(_mod10077);
const module_10078 = fn(_mod10078);
const module_10079 = fn(_mod10079);
const module_10080 = fn(_mod10080);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10079.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10080.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10076.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10071.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10075.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10071.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10077.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10078.default(flag);
  push4(_default7);
  return parsers;
};

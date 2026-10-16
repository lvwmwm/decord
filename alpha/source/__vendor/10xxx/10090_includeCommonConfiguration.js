// Module ID: 10090
// Function ID: 10091
// Name: includeCommonConfiguration
// Dependencies: [10091, 10092, 10087, 10093, 10094, 10095, 10096]
// Exports: includeCommonConfiguration

// Module 10090 (includeCommonConfiguration)
import _mod10087 from "module_10087" /* 10087 */;
import _mod10091 from "module_10091" /* 10091 */;
import _mod10092 from "module_10092" /* 10092 */;
import _mod10093 from "module_10093" /* 10093 */;
import _mod10094 from "module_10094" /* 10094 */;
import _mod10095 from "module_10095" /* 10095 */;
import _mod10096 from "module_10096" /* 10096 */;

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
const module_10091 = fn(_mod10091);
const module_10092 = fn(_mod10092);
const module_10087 = fn(_mod10087);
const module_10093 = fn(_mod10093);
const module_10094 = fn(_mod10094);
const module_10095 = fn(_mod10095);
const module_10096 = fn(_mod10096);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10095.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10096.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10092.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10087.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10091.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10087.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10093.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10094.default(flag);
  push4(_default7);
  return parsers;
};

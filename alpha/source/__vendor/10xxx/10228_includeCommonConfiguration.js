// Module ID: 10228
// Function ID: 10229
// Name: includeCommonConfiguration
// Dependencies: [10229, 10230, 10225, 10231, 10232, 10233, 10234]
// Exports: includeCommonConfiguration

// Module 10228 (includeCommonConfiguration)
import _mod10225 from "module_10225" /* 10225 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10234 from "module_10234" /* 10234 */;

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
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10225 = fn(_mod10225);
const module_10231 = fn(_mod10231);
const module_10232 = fn(_mod10232);
const module_10233 = fn(_mod10233);
const module_10234 = fn(_mod10234);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10233.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10234.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10230.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10225.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10229.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10225.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10231.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10232.default(flag);
  push4(_default7);
  return parsers;
};

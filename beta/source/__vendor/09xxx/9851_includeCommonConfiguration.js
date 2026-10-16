// Module ID: 9851
// Function ID: 9852
// Name: includeCommonConfiguration
// Dependencies: [9852, 9853, 9848, 9854, 9855, 9856, 9857]
// Exports: includeCommonConfiguration

// Module 9851 (includeCommonConfiguration)
import _mod9848 from "module_9848" /* 9848 */;
import _mod9852 from "module_9852" /* 9852 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9855 from "module_9855" /* 9855 */;
import _mod9856 from "module_9856" /* 9856 */;
import _mod9857 from "module_9857" /* 9857 */;

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
const module_9852 = fn(_mod9852);
const module_9853 = fn(_mod9853);
const module_9848 = fn(_mod9848);
const module_9854 = fn(_mod9854);
const module_9855 = fn(_mod9855);
const module_9856 = fn(_mod9856);
const module_9857 = fn(_mod9857);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9856.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9857.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9853.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9848.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9852.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9848.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9854.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9855.default(flag);
  push4(_default7);
  return parsers;
};

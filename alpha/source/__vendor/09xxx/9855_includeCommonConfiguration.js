// Module ID: 9855
// Function ID: 9856
// Name: includeCommonConfiguration
// Dependencies: [9856, 9857, 9852, 9858, 9859, 9860, 9861]
// Exports: includeCommonConfiguration

// Module 9855 (includeCommonConfiguration)
import _mod9852 from "module_9852" /* 9852 */;
import _mod9856 from "module_9856" /* 9856 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9858 from "module_9858" /* 9858 */;
import _mod9859 from "module_9859" /* 9859 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod9861 from "module_9861" /* 9861 */;

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
const module_9856 = fn(_mod9856);
const module_9857 = fn(_mod9857);
const module_9852 = fn(_mod9852);
const module_9858 = fn(_mod9858);
const module_9859 = fn(_mod9859);
const module_9860 = fn(_mod9860);
const module_9861 = fn(_mod9861);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9860.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9861.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9857.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9852.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9856.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9852.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9858.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9859.default(flag);
  push4(_default7);
  return parsers;
};

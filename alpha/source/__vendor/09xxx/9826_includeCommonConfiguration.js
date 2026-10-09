// Module ID: 9826
// Function ID: 9827
// Name: includeCommonConfiguration
// Dependencies: [9827, 9828, 9823, 9829, 9830, 9831, 9832]
// Exports: includeCommonConfiguration

// Module 9826 (includeCommonConfiguration)
import _mod9823 from "module_9823" /* 9823 */;
import _mod9827 from "module_9827" /* 9827 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9829 from "module_9829" /* 9829 */;
import _mod9830 from "module_9830" /* 9830 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9832 from "module_9832" /* 9832 */;

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
const module_9827 = fn(_mod9827);
const module_9828 = fn(_mod9828);
const module_9823 = fn(_mod9823);
const module_9829 = fn(_mod9829);
const module_9830 = fn(_mod9830);
const module_9831 = fn(_mod9831);
const module_9832 = fn(_mod9832);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9831.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9832.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9828.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9823.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9827.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9823.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9829.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9830.default(flag);
  push4(_default7);
  return parsers;
};

// Module ID: 9807
// Function ID: 9808
// Name: includeCommonConfiguration
// Dependencies: [9808, 9809, 9804, 9810, 9811, 9812, 9813]
// Exports: includeCommonConfiguration

// Module 9807 (includeCommonConfiguration)
import _mod9804 from "module_9804" /* 9804 */;
import _mod9808 from "module_9808" /* 9808 */;
import _mod9809 from "module_9809" /* 9809 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9811 from "module_9811" /* 9811 */;
import _mod9812 from "module_9812" /* 9812 */;
import _mod9813 from "module_9813" /* 9813 */;

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
const module_9808 = fn(_mod9808);
const module_9809 = fn(_mod9809);
const module_9804 = fn(_mod9804);
const module_9810 = fn(_mod9810);
const module_9811 = fn(_mod9811);
const module_9812 = fn(_mod9812);
const module_9813 = fn(_mod9813);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9812.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9813.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9809.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9804.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9808.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9804.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9810.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9811.default(flag);
  push4(_default7);
  return parsers;
};

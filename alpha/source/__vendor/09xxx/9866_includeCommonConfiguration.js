// Module ID: 9866
// Function ID: 9867
// Name: includeCommonConfiguration
// Dependencies: [9867, 9868, 9863, 9869, 9870, 9871, 9872]
// Exports: includeCommonConfiguration

// Module 9866 (includeCommonConfiguration)
import _mod9863 from "module_9863" /* 9863 */;
import _mod9867 from "module_9867" /* 9867 */;
import _mod9868 from "module_9868" /* 9868 */;
import _mod9869 from "module_9869" /* 9869 */;
import _mod9870 from "module_9870" /* 9870 */;
import _mod9871 from "module_9871" /* 9871 */;
import _mod9872 from "module_9872" /* 9872 */;

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
const module_9867 = fn(_mod9867);
const module_9868 = fn(_mod9868);
const module_9863 = fn(_mod9863);
const module_9869 = fn(_mod9869);
const module_9870 = fn(_mod9870);
const module_9871 = fn(_mod9871);
const module_9872 = fn(_mod9872);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9871.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9872.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9868.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9863.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9867.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9863.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9869.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9870.default(flag);
  push4(_default7);
  return parsers;
};

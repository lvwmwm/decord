// Module ID: 9968
// Function ID: 9969
// Name: includeCommonConfiguration
// Dependencies: [9969, 9970, 9965, 9971, 9972, 9973, 9974]
// Exports: includeCommonConfiguration

// Module 9968 (includeCommonConfiguration)
import _mod9965 from "module_9965" /* 9965 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod9971 from "module_9971" /* 9971 */;
import _mod9972 from "module_9972" /* 9972 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod9974 from "module_9974" /* 9974 */;

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
const module_9969 = fn(_mod9969);
const module_9970 = fn(_mod9970);
const module_9965 = fn(_mod9965);
const module_9971 = fn(_mod9971);
const module_9972 = fn(_mod9972);
const module_9973 = fn(_mod9973);
const module_9974 = fn(_mod9974);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9973.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_9974.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_9970.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_9965.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_9969.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_9965.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_9971.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_9972.default(flag);
  push4(_default7);
  return parsers;
};

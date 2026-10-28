// Module ID: 10285
// Function ID: 10286
// Name: includeCommonConfiguration
// Dependencies: [10286, 10287, 10282, 10288, 10289, 10290, 10291]
// Exports: includeCommonConfiguration

// Module 10285 (includeCommonConfiguration)
import _mod10282 from "module_10282" /* 10282 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;

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
const module_10286 = fn(_mod10286);
const module_10287 = fn(_mod10287);
const module_10282 = fn(_mod10282);
const module_10288 = fn(_mod10288);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10290.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10291.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10287.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10282.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10286.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10282.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10288.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10289.default(flag);
  push4(_default7);
  return parsers;
};

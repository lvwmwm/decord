// Module ID: 10514
// Function ID: 10515
// Name: includeCommonConfiguration
// Dependencies: [10515, 10516, 10511, 10517, 10518, 10519, 10520]
// Exports: includeCommonConfiguration

// Module 10514 (includeCommonConfiguration)
import _mod10511 from "module_10511" /* 10511 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10520 from "module_10520" /* 10520 */;

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
const module_10515 = fn(_mod10515);
const module_10516 = fn(_mod10516);
const module_10511 = fn(_mod10511);
const module_10517 = fn(_mod10517);
const module_10518 = fn(_mod10518);
const module_10519 = fn(_mod10519);
const module_10520 = fn(_mod10520);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10519.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10520.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10516.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10511.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10515.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10511.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10517.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10518.default(flag);
  push4(_default7);
  return parsers;
}

// Module ID: 10499
// Function ID: 10500
// Name: includeCommonConfiguration
// Dependencies: [10500, 10501, 10496, 10502, 10503, 10504, 10505]
// Exports: includeCommonConfiguration

// Module 10499 (includeCommonConfiguration)
import _mod10496 from "module_10496" /* 10496 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;

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
const module_10500 = fn(_mod10500);
const module_10501 = fn(_mod10501);
const module_10496 = fn(_mod10496);
const module_10502 = fn(_mod10502);
const module_10503 = fn(_mod10503);
const module_10504 = fn(_mod10504);
const module_10505 = fn(_mod10505);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10504.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10505.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10501.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10496.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10500.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10496.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10502.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10503.default(flag);
  push4(_default7);
  return parsers;
}

// Module ID: 10541
// Function ID: 10542
// Name: includeCommonConfiguration
// Dependencies: [10542, 10543, 10538, 10544, 10545, 10546, 10547]
// Exports: includeCommonConfiguration

// Module 10541 (includeCommonConfiguration)
import _mod10538 from "module_10538" /* 10538 */;
import _mod10542 from "module_10542" /* 10542 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10544 from "module_10544" /* 10544 */;
import _mod10545 from "module_10545" /* 10545 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10547 from "module_10547" /* 10547 */;

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
const module_10542 = fn(_mod10542);
const module_10543 = fn(_mod10543);
const module_10538 = fn(_mod10538);
const module_10544 = fn(_mod10544);
const module_10545 = fn(_mod10545);
const module_10546 = fn(_mod10546);
const module_10547 = fn(_mod10547);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10546.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10547.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10543.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10538.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10542.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10538.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10544.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10545.default(flag);
  push4(_default7);
  return parsers;
}

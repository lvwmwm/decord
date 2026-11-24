// Module ID: 10770
// Function ID: 10771
// Name: includeCommonConfiguration
// Dependencies: [10771, 10772, 10767, 10773, 10774, 10775, 10776]
// Exports: includeCommonConfiguration

// Module 10770 (includeCommonConfiguration)
import _mod10767 from "module_10767" /* 10767 */;
import _mod10771 from "module_10771" /* 10771 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10773 from "module_10773" /* 10773 */;
import _mod10774 from "module_10774" /* 10774 */;
import _mod10775 from "module_10775" /* 10775 */;
import _mod10776 from "module_10776" /* 10776 */;

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
const module_10771 = fn(_mod10771);
const module_10772 = fn(_mod10772);
const module_10767 = fn(_mod10767);
const module_10773 = fn(_mod10773);
const module_10774 = fn(_mod10774);
const module_10775 = fn(_mod10775);
const module_10776 = fn(_mod10776);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10775.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10776.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10772.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10767.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10771.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10767.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10773.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10774.default(flag);
  push4(_default7);
  return parsers;
}

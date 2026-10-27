// Module ID: 10155
// Function ID: 10156
// Name: includeCommonConfiguration
// Dependencies: [10156, 10157, 10152, 10158, 10159, 10160, 10161]
// Exports: includeCommonConfiguration

// Module 10155 (includeCommonConfiguration)
import _mod10152 from "module_10152" /* 10152 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10161 from "module_10161" /* 10161 */;

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
const module_10156 = fn(_mod10156);
const module_10157 = fn(_mod10157);
const module_10152 = fn(_mod10152);
const module_10158 = fn(_mod10158);
const module_10159 = fn(_mod10159);
const module_10160 = fn(_mod10160);
const module_10161 = fn(_mod10161);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10160.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10161.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10157.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10152.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10156.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10152.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10158.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10159.default(flag);
  push4(_default7);
  return parsers;
};

// Module ID: 10547
// Function ID: 10548
// Name: includeCommonConfiguration
// Dependencies: [10548, 10549, 10544, 10550, 10551, 10552, 10553]
// Exports: includeCommonConfiguration

// Module 10547 (includeCommonConfiguration)
import _mod10544 from "module_10544" /* 10544 */;
import _mod10548 from "module_10548" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10551 from "module_10551" /* 10551 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;

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
const module_10548 = fn(_mod10548);
const module_10549 = fn(_mod10549);
const module_10544 = fn(_mod10544);
const module_10550 = fn(_mod10550);
const module_10551 = fn(_mod10551);
const module_10552 = fn(_mod10552);
const module_10553 = fn(_mod10553);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10552.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10553.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10549.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10544.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10548.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10544.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10550.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10551.default(flag);
  push4(_default7);
  return parsers;
}

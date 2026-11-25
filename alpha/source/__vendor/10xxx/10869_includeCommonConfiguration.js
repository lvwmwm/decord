// Module ID: 10869
// Function ID: 10870
// Name: includeCommonConfiguration
// Dependencies: [10870, 10871, 10866, 10872, 10873, 10874, 10875]
// Exports: includeCommonConfiguration

// Module 10869 (includeCommonConfiguration)
import _mod10866 from "module_10866" /* 10866 */;
import _mod10870 from "module_10870" /* 10870 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10872 from "module_10872" /* 10872 */;
import _mod10873 from "module_10873" /* 10873 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10875 from "module_10875" /* 10875 */;

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
const module_10870 = fn(_mod10870);
const module_10871 = fn(_mod10871);
const module_10866 = fn(_mod10866);
const module_10872 = fn(_mod10872);
const module_10873 = fn(_mod10873);
const module_10874 = fn(_mod10874);
const module_10875 = fn(_mod10875);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10874.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10875.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10871.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10866.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10870.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10866.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10872.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10873.default(flag);
  push4(_default7);
  return parsers;
}

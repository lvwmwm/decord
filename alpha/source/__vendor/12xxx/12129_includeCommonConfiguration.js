// Module ID: 12129
// Function ID: 12130
// Name: includeCommonConfiguration
// Dependencies: [12130, 12131, 12126, 12132, 12133, 12134, 12135]
// Exports: includeCommonConfiguration

// Module 12129 (includeCommonConfiguration)
import _mod12126 from "module_12126" /* 12126 */;
import _mod12130 from "module_12130" /* 12130 */;
import _mod12131 from "module_12131" /* 12131 */;
import _mod12132 from "module_12132" /* 12132 */;
import _mod12133 from "module_12133" /* 12133 */;
import _mod12134 from "module_12134" /* 12134 */;
import _mod12135 from "module_12135" /* 12135 */;

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
const module_12130 = fn(_mod12130);
const module_12131 = fn(_mod12131);
const module_12126 = fn(_mod12126);
const module_12132 = fn(_mod12132);
const module_12133 = fn(_mod12133);
const module_12134 = fn(_mod12134);
const module_12135 = fn(_mod12135);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_12134.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_12135.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_12131.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_12126.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_12130.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_12126.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_12132.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_12133.default(flag);
  push4(_default7);
  return parsers;
}

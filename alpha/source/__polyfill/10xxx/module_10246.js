// Module ID: 10246
// Function ID: 10247
// Dependencies: [41, 42, 10247, 10257, 10258, 10259, 10260, 10261, 10262, 10264, 10265, 10266, 10269, 10272, 10274, 10275, 10277, 10278, 10279, 10280, 10281, 10282, 10283, 10284, 10285]

// Module 10246
import _mod10247 from "module_10247" /* 10247 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10272 from "module_10272" /* 10272 */;
import _mod10274 from "module_10274" /* 10274 */;
import _mod10275 from "module_10275" /* 10275 */;
import _mod10277 from "module_10277" /* 10277 */;
import _mod10278 from "module_10278" /* 10278 */;
import _mod10279 from "module_10279" /* 10279 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10281 from "module_10281" /* 10281 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  };
}
const module_10247 = fn(_mod10247);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const module_10260 = fn(_mod10260);
const module_10261 = fn(_mod10261);
const module_10262 = fn(_mod10262);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10269 = fn(_mod10269);
const module_10272 = fn(_mod10272);
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const module_10280 = fn(_mod10280);
const module_10281 = fn(_mod10281);
const module_10282 = fn(_mod10282);
const module_10283 = fn(_mod10283);
const module_10284 = fn(_mod10284);
class ENDefaultConfiguration {
  constructor() {
    _classCallCheck(this, ENDefaultConfiguration);
  }
}
const entry = {
  key: "createCasualConfiguration",
  value: function createCasualConfiguration() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const configuration = this.createConfiguration(false, flag);
    const parsers = configuration.parsers;
    const push = parsers.push;
    const _default = new module_10272.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10274.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10259.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10277.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10279.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10284.default();
    push6(_default5);
    return configuration;
  }
};
let items = [
  entry,
  {
    key: "createConfiguration",
    value: function createConfiguration(flag) {
      let items;
      let items1;
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = arg1;
      if (arg1 === undefined) {
        flag2 = false;
      }
      const obj = { parsers: items, refiners: items1 };
      const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
      items = [new module_10278.default(flag2), , , , , , , , ];
      new module_10278.default(flag2);
      items[1] = new module_10247.default(flag);
      new module_10247.default(flag);
      items[2] = new module_10257.default();
      new module_10257.default();
      items[3] = new module_10258.default(flag2);
      new module_10258.default(flag2);
      items[4] = new module_10275.default();
      new module_10275.default();
      items[5] = new module_10261.default();
      new module_10261.default();
      items[6] = new module_10262.default(flag);
      new module_10262.default(flag);
      items[7] = new module_10264.default(flag);
      new module_10264.default(flag);
      items[8] = new module_10265.default(flag);
      new module_10265.default(flag);
      items1 = [new module_10269.default()];
      new module_10269.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10260.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10281.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10280.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10282.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10269.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10283.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10266.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

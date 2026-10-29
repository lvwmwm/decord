// Module ID: 10279
// Function ID: 10280
// Dependencies: [41, 42, 10280, 10290, 10291, 10292, 10293, 10294, 10295, 10297, 10298, 10299, 10302, 10305, 10307, 10308, 10310, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318]

// Module 10279
import _mod10280 from "module_10280" /* 10280 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10307 from "module_10307" /* 10307 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import _mod10314 from "module_10314" /* 10314 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10316 from "module_10316" /* 10316 */;
import _mod10317 from "module_10317" /* 10317 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
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
const module_10280 = fn(_mod10280);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10293 = fn(_mod10293);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const module_10297 = fn(_mod10297);
const module_10298 = fn(_mod10298);
const module_10299 = fn(_mod10299);
const module_10302 = fn(_mod10302);
const module_10305 = fn(_mod10305);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const module_10314 = fn(_mod10314);
const module_10315 = fn(_mod10315);
const module_10316 = fn(_mod10316);
const module_10317 = fn(_mod10317);
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
    const _default = new module_10305.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10307.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10292.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10310.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10312.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10317.default();
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
      items = [new module_10311.default(flag2), , , , , , , , ];
      new module_10311.default(flag2);
      items[1] = new module_10280.default(flag);
      new module_10280.default(flag);
      items[2] = new module_10290.default();
      new module_10290.default();
      items[3] = new module_10291.default(flag2);
      new module_10291.default(flag2);
      items[4] = new module_10308.default();
      new module_10308.default();
      items[5] = new module_10294.default();
      new module_10294.default();
      items[6] = new module_10295.default(flag);
      new module_10295.default(flag);
      items[7] = new module_10297.default(flag);
      new module_10297.default(flag);
      items[8] = new module_10298.default(flag);
      new module_10298.default(flag);
      items1 = [new module_10302.default()];
      new module_10302.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10293.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10314.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10313.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10315.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10302.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10316.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10299.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

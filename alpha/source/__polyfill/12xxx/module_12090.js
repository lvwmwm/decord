// Module ID: 12090
// Function ID: 12091
// Dependencies: [41, 42, 12091, 12101, 12102, 12103, 12104, 12105, 12106, 12108, 12109, 12110, 12113, 12116, 12118, 12119, 12121, 12122, 12123, 12124, 12125, 12126, 12127, 12128, 12129]

// Module 12090
import _mod12091 from "module_12091" /* 12091 */;
import _mod12101 from "module_12101" /* 12101 */;
import _mod12102 from "module_12102" /* 12102 */;
import _mod12103 from "module_12103" /* 12103 */;
import _mod12104 from "module_12104" /* 12104 */;
import _mod12105 from "module_12105" /* 12105 */;
import _mod12106 from "module_12106" /* 12106 */;
import _mod12108 from "module_12108" /* 12108 */;
import _mod12109 from "module_12109" /* 12109 */;
import _mod12110 from "module_12110" /* 12110 */;
import _mod12113 from "module_12113" /* 12113 */;
import _mod12116 from "module_12116" /* 12116 */;
import _mod12118 from "module_12118" /* 12118 */;
import _mod12119 from "module_12119" /* 12119 */;
import _mod12121 from "module_12121" /* 12121 */;
import _mod12122 from "module_12122" /* 12122 */;
import _mod12123 from "module_12123" /* 12123 */;
import _mod12124 from "module_12124" /* 12124 */;
import _mod12125 from "module_12125" /* 12125 */;
import _mod12126 from "module_12126" /* 12126 */;
import _mod12127 from "module_12127" /* 12127 */;
import _mod12128 from "module_12128" /* 12128 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
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
const module_12091 = fn(_mod12091);
const module_12101 = fn(_mod12101);
const module_12102 = fn(_mod12102);
const module_12103 = fn(_mod12103);
const module_12104 = fn(_mod12104);
const module_12105 = fn(_mod12105);
const module_12106 = fn(_mod12106);
const module_12108 = fn(_mod12108);
const module_12109 = fn(_mod12109);
const module_12110 = fn(_mod12110);
const module_12113 = fn(_mod12113);
const module_12116 = fn(_mod12116);
const module_12118 = fn(_mod12118);
const module_12119 = fn(_mod12119);
const module_12121 = fn(_mod12121);
const module_12122 = fn(_mod12122);
const module_12123 = fn(_mod12123);
const module_12124 = fn(_mod12124);
const module_12125 = fn(_mod12125);
const module_12126 = fn(_mod12126);
const module_12127 = fn(_mod12127);
const module_12128 = fn(_mod12128);
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
    const _default = new module_12116.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_12118.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_12103.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_12121.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_12123.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_12128.default();
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
      items = [new module_12122.default(flag2), , , , , , , , ];
      new module_12122.default(flag2);
      items[1] = new module_12091.default(flag);
      new module_12091.default(flag);
      items[2] = new module_12101.default();
      new module_12101.default();
      items[3] = new module_12102.default(flag2);
      new module_12102.default(flag2);
      items[4] = new module_12119.default();
      new module_12119.default();
      items[5] = new module_12105.default();
      new module_12105.default();
      items[6] = new module_12106.default(flag);
      new module_12106.default(flag);
      items[7] = new module_12108.default(flag);
      new module_12108.default(flag);
      items[8] = new module_12109.default(flag);
      new module_12109.default(flag);
      items1 = [new module_12113.default()];
      new module_12113.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_12104.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_12125.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_12124.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_12126.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_12113.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_12127.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_12110.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

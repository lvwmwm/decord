// Module ID: 10189
// Function ID: 10190
// Dependencies: [41, 42, 10190, 10200, 10201, 10202, 10203, 10204, 10205, 10207, 10208, 10209, 10212, 10215, 10217, 10218, 10220, 10221, 10222, 10223, 10224, 10225, 10226, 10227, 10228]

// Module 10189
import _mod10190 from "module_10190" /* 10190 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10220 from "module_10220" /* 10220 */;
import _mod10221 from "module_10221" /* 10221 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10227 from "module_10227" /* 10227 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
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
const module_10190 = fn(_mod10190);
const module_10200 = fn(_mod10200);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10207 = fn(_mod10207);
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
const module_10212 = fn(_mod10212);
const module_10215 = fn(_mod10215);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10220 = fn(_mod10220);
const module_10221 = fn(_mod10221);
const module_10222 = fn(_mod10222);
const module_10223 = fn(_mod10223);
const module_10224 = fn(_mod10224);
const module_10225 = fn(_mod10225);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
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
    const _default = new module_10215.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10217.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10202.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10220.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10222.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10227.default();
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
      items = [new module_10221.default(flag2), , , , , , , , ];
      new module_10221.default(flag2);
      items[1] = new module_10190.default(flag);
      new module_10190.default(flag);
      items[2] = new module_10200.default();
      new module_10200.default();
      items[3] = new module_10201.default(flag2);
      new module_10201.default(flag2);
      items[4] = new module_10218.default();
      new module_10218.default();
      items[5] = new module_10204.default();
      new module_10204.default();
      items[6] = new module_10205.default(flag);
      new module_10205.default(flag);
      items[7] = new module_10207.default(flag);
      new module_10207.default(flag);
      items[8] = new module_10208.default(flag);
      new module_10208.default(flag);
      items1 = [new module_10212.default()];
      new module_10212.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10203.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10224.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10223.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10225.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10212.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10226.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10209.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

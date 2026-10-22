// Module ID: 10182
// Function ID: 10183
// Dependencies: [41, 42, 10183, 10193, 10194, 10195, 10196, 10197, 10198, 10200, 10201, 10202, 10205, 10208, 10210, 10211, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221]

// Module 10182
import _mod10183 from "module_10183" /* 10183 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;
import _mod10198 from "module_10198" /* 10198 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
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
const module_10183 = fn(_mod10183);
const module_10193 = fn(_mod10193);
const module_10194 = fn(_mod10194);
const module_10195 = fn(_mod10195);
const module_10196 = fn(_mod10196);
const module_10197 = fn(_mod10197);
const module_10198 = fn(_mod10198);
const module_10200 = fn(_mod10200);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10205 = fn(_mod10205);
const module_10208 = fn(_mod10208);
const module_10210 = fn(_mod10210);
const module_10211 = fn(_mod10211);
const module_10213 = fn(_mod10213);
const module_10214 = fn(_mod10214);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10220 = fn(_mod10220);
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
    const _default = new module_10208.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10210.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10195.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10213.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10215.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10220.default();
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
      items = [new module_10214.default(flag2), , , , , , , , ];
      new module_10214.default(flag2);
      items[1] = new module_10183.default(flag);
      new module_10183.default(flag);
      items[2] = new module_10193.default();
      new module_10193.default();
      items[3] = new module_10194.default(flag2);
      new module_10194.default(flag2);
      items[4] = new module_10211.default();
      new module_10211.default();
      items[5] = new module_10197.default();
      new module_10197.default();
      items[6] = new module_10198.default(flag);
      new module_10198.default(flag);
      items[7] = new module_10200.default(flag);
      new module_10200.default(flag);
      items[8] = new module_10201.default(flag);
      new module_10201.default(flag);
      items1 = [new module_10205.default()];
      new module_10205.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10196.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10217.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10216.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10218.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10205.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10219.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10202.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

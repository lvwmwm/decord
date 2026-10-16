// Module ID: 10051
// Function ID: 10052
// Dependencies: [41, 42, 10052, 10062, 10063, 10064, 10065, 10066, 10067, 10069, 10070, 10071, 10074, 10077, 10079, 10080, 10082, 10083, 10084, 10085, 10086, 10087, 10088, 10089, 10090]

// Module 10051
import _mod10052 from "module_10052" /* 10052 */;
import _mod10062 from "module_10062" /* 10062 */;
import _mod10063 from "module_10063" /* 10063 */;
import _mod10064 from "module_10064" /* 10064 */;
import _mod10065 from "module_10065" /* 10065 */;
import _mod10066 from "module_10066" /* 10066 */;
import _mod10067 from "module_10067" /* 10067 */;
import _mod10069 from "module_10069" /* 10069 */;
import _mod10070 from "module_10070" /* 10070 */;
import _mod10071 from "module_10071" /* 10071 */;
import _mod10074 from "module_10074" /* 10074 */;
import _mod10077 from "module_10077" /* 10077 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10080 from "module_10080" /* 10080 */;
import _mod10082 from "module_10082" /* 10082 */;
import _mod10083 from "module_10083" /* 10083 */;
import _mod10084 from "module_10084" /* 10084 */;
import _mod10085 from "module_10085" /* 10085 */;
import _mod10086 from "module_10086" /* 10086 */;
import _mod10087 from "module_10087" /* 10087 */;
import _mod10088 from "module_10088" /* 10088 */;
import _mod10089 from "module_10089" /* 10089 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
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
const module_10052 = fn(_mod10052);
const module_10062 = fn(_mod10062);
const module_10063 = fn(_mod10063);
const module_10064 = fn(_mod10064);
const module_10065 = fn(_mod10065);
const module_10066 = fn(_mod10066);
const module_10067 = fn(_mod10067);
const module_10069 = fn(_mod10069);
const module_10070 = fn(_mod10070);
const module_10071 = fn(_mod10071);
const module_10074 = fn(_mod10074);
const module_10077 = fn(_mod10077);
const module_10079 = fn(_mod10079);
const module_10080 = fn(_mod10080);
const module_10082 = fn(_mod10082);
const module_10083 = fn(_mod10083);
const module_10084 = fn(_mod10084);
const module_10085 = fn(_mod10085);
const module_10086 = fn(_mod10086);
const module_10087 = fn(_mod10087);
const module_10088 = fn(_mod10088);
const module_10089 = fn(_mod10089);
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
    const _default = new module_10077.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10079.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10064.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10082.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10084.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10089.default();
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
      items = [new module_10083.default(flag2), , , , , , , , ];
      new module_10083.default(flag2);
      items[1] = new module_10052.default(flag);
      new module_10052.default(flag);
      items[2] = new module_10062.default();
      new module_10062.default();
      items[3] = new module_10063.default(flag2);
      new module_10063.default(flag2);
      items[4] = new module_10080.default();
      new module_10080.default();
      items[5] = new module_10066.default();
      new module_10066.default();
      items[6] = new module_10067.default(flag);
      new module_10067.default(flag);
      items[7] = new module_10069.default(flag);
      new module_10069.default(flag);
      items[8] = new module_10070.default(flag);
      new module_10070.default(flag);
      items1 = [new module_10074.default()];
      new module_10074.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10065.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10086.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10085.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10087.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10074.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10088.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10071.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

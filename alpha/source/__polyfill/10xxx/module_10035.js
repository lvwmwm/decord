// Module ID: 10035
// Function ID: 10036
// Dependencies: [41, 42, 10036, 10046, 10047, 10048, 10049, 10050, 10051, 10053, 10054, 10055, 10058, 10061, 10063, 10064, 10066, 10067, 10068, 10069, 10070, 10071, 10072, 10073, 10074]

// Module 10035
import _mod10036 from "module_10036" /* 10036 */;
import _mod10046 from "module_10046" /* 10046 */;
import _mod10047 from "module_10047" /* 10047 */;
import _mod10048 from "module_10048" /* 10048 */;
import _mod10049 from "module_10049" /* 10049 */;
import _mod10050 from "module_10050" /* 10050 */;
import _mod10051 from "module_10051" /* 10051 */;
import _mod10053 from "module_10053" /* 10053 */;
import _mod10054 from "module_10054" /* 10054 */;
import _mod10055 from "module_10055" /* 10055 */;
import _mod10058 from "module_10058" /* 10058 */;
import _mod10061 from "module_10061" /* 10061 */;
import _mod10063 from "module_10063" /* 10063 */;
import _mod10064 from "module_10064" /* 10064 */;
import _mod10066 from "module_10066" /* 10066 */;
import _mod10067 from "module_10067" /* 10067 */;
import _mod10068 from "module_10068" /* 10068 */;
import _mod10069 from "module_10069" /* 10069 */;
import _mod10070 from "module_10070" /* 10070 */;
import _mod10071 from "module_10071" /* 10071 */;
import _mod10072 from "module_10072" /* 10072 */;
import _mod10073 from "module_10073" /* 10073 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
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
const module_10036 = fn(_mod10036);
const module_10046 = fn(_mod10046);
const module_10047 = fn(_mod10047);
const module_10048 = fn(_mod10048);
const module_10049 = fn(_mod10049);
const module_10050 = fn(_mod10050);
const module_10051 = fn(_mod10051);
const module_10053 = fn(_mod10053);
const module_10054 = fn(_mod10054);
const module_10055 = fn(_mod10055);
const module_10058 = fn(_mod10058);
const module_10061 = fn(_mod10061);
const module_10063 = fn(_mod10063);
const module_10064 = fn(_mod10064);
const module_10066 = fn(_mod10066);
const module_10067 = fn(_mod10067);
const module_10068 = fn(_mod10068);
const module_10069 = fn(_mod10069);
const module_10070 = fn(_mod10070);
const module_10071 = fn(_mod10071);
const module_10072 = fn(_mod10072);
const module_10073 = fn(_mod10073);
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
    const _default = new module_10061.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10063.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10048.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10066.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10068.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10073.default();
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
      items = [new module_10067.default(flag2), , , , , , , , ];
      new module_10067.default(flag2);
      items[1] = new module_10036.default(flag);
      new module_10036.default(flag);
      items[2] = new module_10046.default();
      new module_10046.default();
      items[3] = new module_10047.default(flag2);
      new module_10047.default(flag2);
      items[4] = new module_10064.default();
      new module_10064.default();
      items[5] = new module_10050.default();
      new module_10050.default();
      items[6] = new module_10051.default(flag);
      new module_10051.default(flag);
      items[7] = new module_10053.default(flag);
      new module_10053.default(flag);
      items[8] = new module_10054.default(flag);
      new module_10054.default(flag);
      items1 = [new module_10058.default()];
      new module_10058.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10049.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10070.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10069.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10071.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10058.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10072.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10055.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

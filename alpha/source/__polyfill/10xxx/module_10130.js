// Module ID: 10130
// Function ID: 10131
// Dependencies: [41, 42, 10131, 10141, 10142, 10143, 10144, 10145, 10146, 10148, 10149, 10150, 10153, 10156, 10158, 10159, 10161, 10162, 10163, 10164, 10165, 10166, 10167, 10168, 10169]

// Module 10130
import _mod10131 from "module_10131" /* 10131 */;
import _mod10141 from "module_10141" /* 10141 */;
import _mod10142 from "module_10142" /* 10142 */;
import _mod10143 from "module_10143" /* 10143 */;
import _mod10144 from "module_10144" /* 10144 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10146 from "module_10146" /* 10146 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10149 from "module_10149" /* 10149 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10153 from "module_10153" /* 10153 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10162 from "module_10162" /* 10162 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
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
const module_10131 = fn(_mod10131);
const module_10141 = fn(_mod10141);
const module_10142 = fn(_mod10142);
const module_10143 = fn(_mod10143);
const module_10144 = fn(_mod10144);
const module_10145 = fn(_mod10145);
const module_10146 = fn(_mod10146);
const module_10148 = fn(_mod10148);
const module_10149 = fn(_mod10149);
const module_10150 = fn(_mod10150);
const module_10153 = fn(_mod10153);
const module_10156 = fn(_mod10156);
const module_10158 = fn(_mod10158);
const module_10159 = fn(_mod10159);
const module_10161 = fn(_mod10161);
const module_10162 = fn(_mod10162);
const module_10163 = fn(_mod10163);
const module_10164 = fn(_mod10164);
const module_10165 = fn(_mod10165);
const module_10166 = fn(_mod10166);
const module_10167 = fn(_mod10167);
const module_10168 = fn(_mod10168);
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
    const _default = new module_10156.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10158.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10143.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10161.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10163.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10168.default();
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
      items = [new module_10162.default(flag2), , , , , , , , ];
      new module_10162.default(flag2);
      items[1] = new module_10131.default(flag);
      new module_10131.default(flag);
      items[2] = new module_10141.default();
      new module_10141.default();
      items[3] = new module_10142.default(flag2);
      new module_10142.default(flag2);
      items[4] = new module_10159.default();
      new module_10159.default();
      items[5] = new module_10145.default();
      new module_10145.default();
      items[6] = new module_10146.default(flag);
      new module_10146.default(flag);
      items[7] = new module_10148.default(flag);
      new module_10148.default(flag);
      items[8] = new module_10149.default(flag);
      new module_10149.default(flag);
      items1 = [new module_10153.default()];
      new module_10153.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10144.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10165.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10164.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10166.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10153.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10167.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10150.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

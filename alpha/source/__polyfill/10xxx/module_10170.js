// Module ID: 10170
// Function ID: 10171
// Dependencies: [41, 42, 10171, 10181, 10182, 10183, 10184, 10185, 10186, 10188, 10189, 10190, 10193, 10196, 10198, 10199, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209]

// Module 10170
import _mod10171 from "module_10171" /* 10171 */;
import _mod10181 from "module_10181" /* 10181 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10198 from "module_10198" /* 10198 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
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
const module_10171 = fn(_mod10171);
const module_10181 = fn(_mod10181);
const module_10182 = fn(_mod10182);
const module_10183 = fn(_mod10183);
const module_10184 = fn(_mod10184);
const module_10185 = fn(_mod10185);
const module_10186 = fn(_mod10186);
const module_10188 = fn(_mod10188);
const module_10189 = fn(_mod10189);
const module_10190 = fn(_mod10190);
const module_10193 = fn(_mod10193);
const module_10196 = fn(_mod10196);
const module_10198 = fn(_mod10198);
const module_10199 = fn(_mod10199);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10206 = fn(_mod10206);
const module_10207 = fn(_mod10207);
const module_10208 = fn(_mod10208);
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
    const _default = new module_10196.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10198.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10183.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10201.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10203.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10208.default();
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
      items = [new module_10202.default(flag2), , , , , , , , ];
      new module_10202.default(flag2);
      items[1] = new module_10171.default(flag);
      new module_10171.default(flag);
      items[2] = new module_10181.default();
      new module_10181.default();
      items[3] = new module_10182.default(flag2);
      new module_10182.default(flag2);
      items[4] = new module_10199.default();
      new module_10199.default();
      items[5] = new module_10185.default();
      new module_10185.default();
      items[6] = new module_10186.default(flag);
      new module_10186.default(flag);
      items[7] = new module_10188.default(flag);
      new module_10188.default(flag);
      items[8] = new module_10189.default(flag);
      new module_10189.default(flag);
      items1 = [new module_10193.default()];
      new module_10193.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10184.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10205.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10204.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10206.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10193.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10207.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10190.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

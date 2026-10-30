// Module ID: 10304
// Function ID: 10305
// Dependencies: [41, 42, 10305, 10315, 10316, 10317, 10318, 10319, 10320, 10322, 10323, 10324, 10327, 10330, 10332, 10333, 10335, 10336, 10337, 10338, 10339, 10340, 10341, 10342, 10343]

// Module 10304
import _mod10305 from "module_10305" /* 10305 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10316 from "module_10316" /* 10316 */;
import _mod10317 from "module_10317" /* 10317 */;
import _mod10318 from "module_10318" /* 10318 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import _mod10337 from "module_10337" /* 10337 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10341 from "module_10341" /* 10341 */;
import _mod10342 from "module_10342" /* 10342 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
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
const module_10305 = fn(_mod10305);
const module_10315 = fn(_mod10315);
const module_10316 = fn(_mod10316);
const module_10317 = fn(_mod10317);
const module_10318 = fn(_mod10318);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10327 = fn(_mod10327);
const module_10330 = fn(_mod10330);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const module_10337 = fn(_mod10337);
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const module_10342 = fn(_mod10342);
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
    const _default = new module_10330.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10332.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10317.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10335.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10337.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10342.default();
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
      items = [new module_10336.default(flag2), , , , , , , , ];
      new module_10336.default(flag2);
      items[1] = new module_10305.default(flag);
      new module_10305.default(flag);
      items[2] = new module_10315.default();
      new module_10315.default();
      items[3] = new module_10316.default(flag2);
      new module_10316.default(flag2);
      items[4] = new module_10333.default();
      new module_10333.default();
      items[5] = new module_10319.default();
      new module_10319.default();
      items[6] = new module_10320.default(flag);
      new module_10320.default(flag);
      items[7] = new module_10322.default(flag);
      new module_10322.default(flag);
      items[8] = new module_10323.default(flag);
      new module_10323.default(flag);
      items1 = [new module_10327.default()];
      new module_10327.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10318.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10339.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10338.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10340.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10327.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10341.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10324.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

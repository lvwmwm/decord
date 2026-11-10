// Module ID: 10324
// Function ID: 10325
// Dependencies: [41, 42, 10325, 10335, 10336, 10337, 10338, 10339, 10340, 10342, 10343, 10344, 10347, 10350, 10352, 10353, 10355, 10356, 10357, 10358, 10359, 10360, 10361, 10362, 10363]

// Module 10324
import _mod10325 from "module_10325" /* 10325 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import _mod10337 from "module_10337" /* 10337 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10343 from "module_10343" /* 10343 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10352 from "module_10352" /* 10352 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10355 from "module_10355" /* 10355 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10362 from "module_10362" /* 10362 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
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
const module_10325 = fn(_mod10325);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const module_10337 = fn(_mod10337);
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const module_10342 = fn(_mod10342);
const module_10343 = fn(_mod10343);
const module_10344 = fn(_mod10344);
const module_10347 = fn(_mod10347);
const module_10350 = fn(_mod10350);
const module_10352 = fn(_mod10352);
const module_10353 = fn(_mod10353);
const module_10355 = fn(_mod10355);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10360 = fn(_mod10360);
const module_10361 = fn(_mod10361);
const module_10362 = fn(_mod10362);
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
    const _default = new module_10350.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10352.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10337.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10355.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10357.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10362.default();
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
      items = [new module_10356.default(flag2), , , , , , , , ];
      new module_10356.default(flag2);
      items[1] = new module_10325.default(flag);
      new module_10325.default(flag);
      items[2] = new module_10335.default();
      new module_10335.default();
      items[3] = new module_10336.default(flag2);
      new module_10336.default(flag2);
      items[4] = new module_10353.default();
      new module_10353.default();
      items[5] = new module_10339.default();
      new module_10339.default();
      items[6] = new module_10340.default(flag);
      new module_10340.default(flag);
      items[7] = new module_10342.default(flag);
      new module_10342.default(flag);
      items[8] = new module_10343.default(flag);
      new module_10343.default(flag);
      items1 = [new module_10347.default()];
      new module_10347.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10338.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10359.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10358.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10360.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10347.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10361.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10344.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

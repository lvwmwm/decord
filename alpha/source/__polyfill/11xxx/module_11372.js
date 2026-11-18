// Module ID: 11372
// Function ID: 11373
// Dependencies: [41, 42, 11373, 11383, 11384, 11385, 11386, 11387, 11388, 11390, 11391, 11392, 11395, 11398, 11400, 11401, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411]

// Module 11372
import _mod11373 from "module_11373" /* 11373 */;
import _mod11383 from "module_11383" /* 11383 */;
import _mod11384 from "module_11384" /* 11384 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11386 from "module_11386" /* 11386 */;
import _mod11387 from "module_11387" /* 11387 */;
import _mod11388 from "module_11388" /* 11388 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11395 from "module_11395" /* 11395 */;
import _mod11398 from "module_11398" /* 11398 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11404 from "module_11404" /* 11404 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import _mod11408 from "module_11408" /* 11408 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11410 from "module_11410" /* 11410 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
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
const module_11373 = fn(_mod11373);
const module_11383 = fn(_mod11383);
const module_11384 = fn(_mod11384);
const module_11385 = fn(_mod11385);
const module_11386 = fn(_mod11386);
const module_11387 = fn(_mod11387);
const module_11388 = fn(_mod11388);
const module_11390 = fn(_mod11390);
const module_11391 = fn(_mod11391);
const module_11392 = fn(_mod11392);
const module_11395 = fn(_mod11395);
const module_11398 = fn(_mod11398);
const module_11400 = fn(_mod11400);
const module_11401 = fn(_mod11401);
const module_11403 = fn(_mod11403);
const module_11404 = fn(_mod11404);
const module_11405 = fn(_mod11405);
const module_11406 = fn(_mod11406);
const module_11407 = fn(_mod11407);
const module_11408 = fn(_mod11408);
const module_11409 = fn(_mod11409);
const module_11410 = fn(_mod11410);
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
    const _default = new module_11398.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11400.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11385.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11403.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11405.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11410.default();
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
      items = [new module_11404.default(flag2), , , , , , , , ];
      new module_11404.default(flag2);
      items[1] = new module_11373.default(flag);
      new module_11373.default(flag);
      items[2] = new module_11383.default();
      new module_11383.default();
      items[3] = new module_11384.default(flag2);
      new module_11384.default(flag2);
      items[4] = new module_11401.default();
      new module_11401.default();
      items[5] = new module_11387.default();
      new module_11387.default();
      items[6] = new module_11388.default(flag);
      new module_11388.default(flag);
      items[7] = new module_11390.default(flag);
      new module_11390.default(flag);
      items[8] = new module_11391.default(flag);
      new module_11391.default(flag);
      items1 = [new module_11395.default()];
      new module_11395.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11386.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11407.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11406.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11408.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11395.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11409.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11392.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

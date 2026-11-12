// Module ID: 11359
// Function ID: 11360
// Dependencies: [41, 42, 11360, 11370, 11371, 11372, 11373, 11374, 11375, 11377, 11378, 11379, 11382, 11385, 11387, 11388, 11390, 11391, 11392, 11393, 11394, 11395, 11396, 11397, 11398]

// Module 11359
import _mod11360 from "module_11360" /* 11360 */;
import _mod11370 from "module_11370" /* 11370 */;
import _mod11371 from "module_11371" /* 11371 */;
import _mod11372 from "module_11372" /* 11372 */;
import _mod11373 from "module_11373" /* 11373 */;
import _mod11374 from "module_11374" /* 11374 */;
import _mod11375 from "module_11375" /* 11375 */;
import _mod11377 from "module_11377" /* 11377 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11382 from "module_11382" /* 11382 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11387 from "module_11387" /* 11387 */;
import _mod11388 from "module_11388" /* 11388 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11395 from "module_11395" /* 11395 */;
import _mod11396 from "module_11396" /* 11396 */;
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
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
const module_11360 = fn(_mod11360);
const module_11370 = fn(_mod11370);
const module_11371 = fn(_mod11371);
const module_11372 = fn(_mod11372);
const module_11373 = fn(_mod11373);
const module_11374 = fn(_mod11374);
const module_11375 = fn(_mod11375);
const module_11377 = fn(_mod11377);
const module_11378 = fn(_mod11378);
const module_11379 = fn(_mod11379);
const module_11382 = fn(_mod11382);
const module_11385 = fn(_mod11385);
const module_11387 = fn(_mod11387);
const module_11388 = fn(_mod11388);
const module_11390 = fn(_mod11390);
const module_11391 = fn(_mod11391);
const module_11392 = fn(_mod11392);
const module_11393 = fn(_mod11393);
const module_11394 = fn(_mod11394);
const module_11395 = fn(_mod11395);
const module_11396 = fn(_mod11396);
const module_11397 = fn(_mod11397);
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
    const _default = new module_11385.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11387.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11372.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11390.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11392.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11397.default();
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
      items = [new module_11391.default(flag2), , , , , , , , ];
      new module_11391.default(flag2);
      items[1] = new module_11360.default(flag);
      new module_11360.default(flag);
      items[2] = new module_11370.default();
      new module_11370.default();
      items[3] = new module_11371.default(flag2);
      new module_11371.default(flag2);
      items[4] = new module_11388.default();
      new module_11388.default();
      items[5] = new module_11374.default();
      new module_11374.default();
      items[6] = new module_11375.default(flag);
      new module_11375.default(flag);
      items[7] = new module_11377.default(flag);
      new module_11377.default(flag);
      items[8] = new module_11378.default(flag);
      new module_11378.default(flag);
      items1 = [new module_11382.default()];
      new module_11382.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11373.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11394.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11393.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11395.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11382.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11396.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11379.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

// Module ID: 11350
// Function ID: 11351
// Dependencies: [41, 42, 11351, 11361, 11362, 11363, 11364, 11365, 11366, 11368, 11369, 11370, 11373, 11376, 11378, 11379, 11381, 11382, 11383, 11384, 11385, 11386, 11387, 11388, 11389]

// Module 11350
import _mod11351 from "module_11351" /* 11351 */;
import _mod11361 from "module_11361" /* 11361 */;
import _mod11362 from "module_11362" /* 11362 */;
import _mod11363 from "module_11363" /* 11363 */;
import _mod11364 from "module_11364" /* 11364 */;
import _mod11365 from "module_11365" /* 11365 */;
import _mod11366 from "module_11366" /* 11366 */;
import _mod11368 from "module_11368" /* 11368 */;
import _mod11369 from "module_11369" /* 11369 */;
import _mod11370 from "module_11370" /* 11370 */;
import _mod11373 from "module_11373" /* 11373 */;
import _mod11376 from "module_11376" /* 11376 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11381 from "module_11381" /* 11381 */;
import _mod11382 from "module_11382" /* 11382 */;
import _mod11383 from "module_11383" /* 11383 */;
import _mod11384 from "module_11384" /* 11384 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11386 from "module_11386" /* 11386 */;
import _mod11387 from "module_11387" /* 11387 */;
import _mod11388 from "module_11388" /* 11388 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
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
const module_11351 = fn(_mod11351);
const module_11361 = fn(_mod11361);
const module_11362 = fn(_mod11362);
const module_11363 = fn(_mod11363);
const module_11364 = fn(_mod11364);
const module_11365 = fn(_mod11365);
const module_11366 = fn(_mod11366);
const module_11368 = fn(_mod11368);
const module_11369 = fn(_mod11369);
const module_11370 = fn(_mod11370);
const module_11373 = fn(_mod11373);
const module_11376 = fn(_mod11376);
const module_11378 = fn(_mod11378);
const module_11379 = fn(_mod11379);
const module_11381 = fn(_mod11381);
const module_11382 = fn(_mod11382);
const module_11383 = fn(_mod11383);
const module_11384 = fn(_mod11384);
const module_11385 = fn(_mod11385);
const module_11386 = fn(_mod11386);
const module_11387 = fn(_mod11387);
const module_11388 = fn(_mod11388);
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
    const _default = new module_11376.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11378.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11363.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11381.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11383.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11388.default();
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
      items = [new module_11382.default(flag2), , , , , , , , ];
      new module_11382.default(flag2);
      items[1] = new module_11351.default(flag);
      new module_11351.default(flag);
      items[2] = new module_11361.default();
      new module_11361.default();
      items[3] = new module_11362.default(flag2);
      new module_11362.default(flag2);
      items[4] = new module_11379.default();
      new module_11379.default();
      items[5] = new module_11365.default();
      new module_11365.default();
      items[6] = new module_11366.default(flag);
      new module_11366.default(flag);
      items[7] = new module_11368.default(flag);
      new module_11368.default(flag);
      items[8] = new module_11369.default(flag);
      new module_11369.default(flag);
      items1 = [new module_11373.default()];
      new module_11373.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11364.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11385.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11384.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11386.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11373.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11387.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11370.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

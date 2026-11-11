// Module ID: 11365
// Function ID: 11366
// Dependencies: [41, 42, 11366, 11376, 11377, 11378, 11379, 11380, 11381, 11383, 11384, 11385, 11388, 11391, 11393, 11394, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404]

// Module 11365
import _mod11366 from "module_11366" /* 11366 */;
import _mod11376 from "module_11376" /* 11376 */;
import _mod11377 from "module_11377" /* 11377 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11380 from "module_11380" /* 11380 */;
import _mod11381 from "module_11381" /* 11381 */;
import _mod11383 from "module_11383" /* 11383 */;
import _mod11384 from "module_11384" /* 11384 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11388 from "module_11388" /* 11388 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11396 from "module_11396" /* 11396 */;
import _mod11397 from "module_11397" /* 11397 */;
import _mod11398 from "module_11398" /* 11398 */;
import _mod11399 from "module_11399" /* 11399 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11403 from "module_11403" /* 11403 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
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
const module_11366 = fn(_mod11366);
const module_11376 = fn(_mod11376);
const module_11377 = fn(_mod11377);
const module_11378 = fn(_mod11378);
const module_11379 = fn(_mod11379);
const module_11380 = fn(_mod11380);
const module_11381 = fn(_mod11381);
const module_11383 = fn(_mod11383);
const module_11384 = fn(_mod11384);
const module_11385 = fn(_mod11385);
const module_11388 = fn(_mod11388);
const module_11391 = fn(_mod11391);
const module_11393 = fn(_mod11393);
const module_11394 = fn(_mod11394);
const module_11396 = fn(_mod11396);
const module_11397 = fn(_mod11397);
const module_11398 = fn(_mod11398);
const module_11399 = fn(_mod11399);
const module_11400 = fn(_mod11400);
const module_11401 = fn(_mod11401);
const module_11402 = fn(_mod11402);
const module_11403 = fn(_mod11403);
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
    const _default = new module_11391.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11393.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11378.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11396.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11398.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11403.default();
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
      items = [new module_11397.default(flag2), , , , , , , , ];
      new module_11397.default(flag2);
      items[1] = new module_11366.default(flag);
      new module_11366.default(flag);
      items[2] = new module_11376.default();
      new module_11376.default();
      items[3] = new module_11377.default(flag2);
      new module_11377.default(flag2);
      items[4] = new module_11394.default();
      new module_11394.default();
      items[5] = new module_11380.default();
      new module_11380.default();
      items[6] = new module_11381.default(flag);
      new module_11381.default(flag);
      items[7] = new module_11383.default(flag);
      new module_11383.default(flag);
      items[8] = new module_11384.default(flag);
      new module_11384.default(flag);
      items1 = [new module_11388.default()];
      new module_11388.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11379.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11400.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11399.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11401.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11388.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11402.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11385.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

// Module ID: 9787
// Function ID: 9788
// Dependencies: [41, 42, 9788, 9798, 9799, 9800, 9801, 9802, 9803, 9805, 9806, 9807, 9810, 9813, 9815, 9816, 9818, 9819, 9820, 9821, 9822, 9823, 9824, 9825, 9826]

// Module 9787
import _mod9788 from "module_9788" /* 9788 */;
import _mod9798 from "module_9798" /* 9798 */;
import _mod9799 from "module_9799" /* 9799 */;
import _mod9800 from "module_9800" /* 9800 */;
import _mod9801 from "module_9801" /* 9801 */;
import _mod9802 from "module_9802" /* 9802 */;
import _mod9803 from "module_9803" /* 9803 */;
import _mod9805 from "module_9805" /* 9805 */;
import _mod9806 from "module_9806" /* 9806 */;
import _mod9807 from "module_9807" /* 9807 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9813 from "module_9813" /* 9813 */;
import _mod9815 from "module_9815" /* 9815 */;
import _mod9816 from "module_9816" /* 9816 */;
import _mod9818 from "module_9818" /* 9818 */;
import _mod9819 from "module_9819" /* 9819 */;
import _mod9820 from "module_9820" /* 9820 */;
import _mod9821 from "module_9821" /* 9821 */;
import _mod9822 from "module_9822" /* 9822 */;
import _mod9823 from "module_9823" /* 9823 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9825 from "module_9825" /* 9825 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
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
const module_9788 = fn(_mod9788);
const module_9798 = fn(_mod9798);
const module_9799 = fn(_mod9799);
const module_9800 = fn(_mod9800);
const module_9801 = fn(_mod9801);
const module_9802 = fn(_mod9802);
const module_9803 = fn(_mod9803);
const module_9805 = fn(_mod9805);
const module_9806 = fn(_mod9806);
const module_9807 = fn(_mod9807);
const module_9810 = fn(_mod9810);
const module_9813 = fn(_mod9813);
const module_9815 = fn(_mod9815);
const module_9816 = fn(_mod9816);
const module_9818 = fn(_mod9818);
const module_9819 = fn(_mod9819);
const module_9820 = fn(_mod9820);
const module_9821 = fn(_mod9821);
const module_9822 = fn(_mod9822);
const module_9823 = fn(_mod9823);
const module_9824 = fn(_mod9824);
const module_9825 = fn(_mod9825);
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
    const _default = new module_9813.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9815.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9800.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9818.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9820.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9825.default();
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
      items = [new module_9819.default(flag2), , , , , , , , ];
      new module_9819.default(flag2);
      items[1] = new module_9788.default(flag);
      new module_9788.default(flag);
      items[2] = new module_9798.default();
      new module_9798.default();
      items[3] = new module_9799.default(flag2);
      new module_9799.default(flag2);
      items[4] = new module_9816.default();
      new module_9816.default();
      items[5] = new module_9802.default();
      new module_9802.default();
      items[6] = new module_9803.default(flag);
      new module_9803.default(flag);
      items[7] = new module_9805.default(flag);
      new module_9805.default(flag);
      items[8] = new module_9806.default(flag);
      new module_9806.default(flag);
      items1 = [new module_9810.default()];
      new module_9810.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9801.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9822.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9821.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9823.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9810.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9824.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9807.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

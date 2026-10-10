// Module ID: 9816
// Function ID: 9817
// Dependencies: [41, 42, 9817, 9827, 9828, 9829, 9830, 9831, 9832, 9834, 9835, 9836, 9839, 9842, 9844, 9845, 9847, 9848, 9849, 9850, 9851, 9852, 9853, 9854, 9855]

// Module 9816
import _mod9817 from "module_9817" /* 9817 */;
import _mod9827 from "module_9827" /* 9827 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9829 from "module_9829" /* 9829 */;
import _mod9830 from "module_9830" /* 9830 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9832 from "module_9832" /* 9832 */;
import _mod9834 from "module_9834" /* 9834 */;
import _mod9835 from "module_9835" /* 9835 */;
import _mod9836 from "module_9836" /* 9836 */;
import _mod9839 from "module_9839" /* 9839 */;
import _mod9842 from "module_9842" /* 9842 */;
import _mod9844 from "module_9844" /* 9844 */;
import _mod9845 from "module_9845" /* 9845 */;
import _mod9847 from "module_9847" /* 9847 */;
import _mod9848 from "module_9848" /* 9848 */;
import _mod9849 from "module_9849" /* 9849 */;
import _mod9850 from "module_9850" /* 9850 */;
import _mod9851 from "module_9851" /* 9851 */;
import _mod9852 from "module_9852" /* 9852 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9854 from "module_9854" /* 9854 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
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
const module_9817 = fn(_mod9817);
const module_9827 = fn(_mod9827);
const module_9828 = fn(_mod9828);
const module_9829 = fn(_mod9829);
const module_9830 = fn(_mod9830);
const module_9831 = fn(_mod9831);
const module_9832 = fn(_mod9832);
const module_9834 = fn(_mod9834);
const module_9835 = fn(_mod9835);
const module_9836 = fn(_mod9836);
const module_9839 = fn(_mod9839);
const module_9842 = fn(_mod9842);
const module_9844 = fn(_mod9844);
const module_9845 = fn(_mod9845);
const module_9847 = fn(_mod9847);
const module_9848 = fn(_mod9848);
const module_9849 = fn(_mod9849);
const module_9850 = fn(_mod9850);
const module_9851 = fn(_mod9851);
const module_9852 = fn(_mod9852);
const module_9853 = fn(_mod9853);
const module_9854 = fn(_mod9854);
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
    const _default = new module_9842.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9844.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9829.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9847.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9849.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9854.default();
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
      items = [new module_9848.default(flag2), , , , , , , , ];
      new module_9848.default(flag2);
      items[1] = new module_9817.default(flag);
      new module_9817.default(flag);
      items[2] = new module_9827.default();
      new module_9827.default();
      items[3] = new module_9828.default(flag2);
      new module_9828.default(flag2);
      items[4] = new module_9845.default();
      new module_9845.default();
      items[5] = new module_9831.default();
      new module_9831.default();
      items[6] = new module_9832.default(flag);
      new module_9832.default(flag);
      items[7] = new module_9834.default(flag);
      new module_9834.default(flag);
      items[8] = new module_9835.default(flag);
      new module_9835.default(flag);
      items1 = [new module_9839.default()];
      new module_9839.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9830.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9851.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9850.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9852.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9839.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9853.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9836.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

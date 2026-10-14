// Module ID: 9827
// Function ID: 9828
// Dependencies: [41, 42, 9828, 9838, 9839, 9840, 9841, 9842, 9843, 9845, 9846, 9847, 9850, 9853, 9855, 9856, 9858, 9859, 9860, 9861, 9862, 9863, 9864, 9865, 9866]

// Module 9827
import _mod9828 from "module_9828" /* 9828 */;
import _mod9838 from "module_9838" /* 9838 */;
import _mod9839 from "module_9839" /* 9839 */;
import _mod9840 from "module_9840" /* 9840 */;
import _mod9841 from "module_9841" /* 9841 */;
import _mod9842 from "module_9842" /* 9842 */;
import _mod9843 from "module_9843" /* 9843 */;
import _mod9845 from "module_9845" /* 9845 */;
import _mod9846 from "module_9846" /* 9846 */;
import _mod9847 from "module_9847" /* 9847 */;
import _mod9850 from "module_9850" /* 9850 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9855 from "module_9855" /* 9855 */;
import _mod9856 from "module_9856" /* 9856 */;
import _mod9858 from "module_9858" /* 9858 */;
import _mod9859 from "module_9859" /* 9859 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod9862 from "module_9862" /* 9862 */;
import _mod9863 from "module_9863" /* 9863 */;
import _mod9864 from "module_9864" /* 9864 */;
import _mod9865 from "module_9865" /* 9865 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
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
const module_9828 = fn(_mod9828);
const module_9838 = fn(_mod9838);
const module_9839 = fn(_mod9839);
const module_9840 = fn(_mod9840);
const module_9841 = fn(_mod9841);
const module_9842 = fn(_mod9842);
const module_9843 = fn(_mod9843);
const module_9845 = fn(_mod9845);
const module_9846 = fn(_mod9846);
const module_9847 = fn(_mod9847);
const module_9850 = fn(_mod9850);
const module_9853 = fn(_mod9853);
const module_9855 = fn(_mod9855);
const module_9856 = fn(_mod9856);
const module_9858 = fn(_mod9858);
const module_9859 = fn(_mod9859);
const module_9860 = fn(_mod9860);
const module_9861 = fn(_mod9861);
const module_9862 = fn(_mod9862);
const module_9863 = fn(_mod9863);
const module_9864 = fn(_mod9864);
const module_9865 = fn(_mod9865);
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
    const _default = new module_9853.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9855.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9840.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9858.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9860.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9865.default();
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
      items = [new module_9859.default(flag2), , , , , , , , ];
      new module_9859.default(flag2);
      items[1] = new module_9828.default(flag);
      new module_9828.default(flag);
      items[2] = new module_9838.default();
      new module_9838.default();
      items[3] = new module_9839.default(flag2);
      new module_9839.default(flag2);
      items[4] = new module_9856.default();
      new module_9856.default();
      items[5] = new module_9842.default();
      new module_9842.default();
      items[6] = new module_9843.default(flag);
      new module_9843.default(flag);
      items[7] = new module_9845.default(flag);
      new module_9845.default(flag);
      items[8] = new module_9846.default(flag);
      new module_9846.default(flag);
      items1 = [new module_9850.default()];
      new module_9850.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9841.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9862.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9861.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9863.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9850.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9864.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9847.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

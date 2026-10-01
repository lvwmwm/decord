// Module ID: 9892
// Function ID: 9893
// Dependencies: [41, 42, 9893, 9903, 9904, 9905, 9906, 9907, 9908, 9910, 9911, 9912, 9915, 9918, 9920, 9921, 9923, 9924, 9925, 9926, 9927, 9928, 9929, 9930, 9931]

// Module 9892
import _mod9893 from "module_9893" /* 9893 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9905 from "module_9905" /* 9905 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import _mod9912 from "module_9912" /* 9912 */;
import _mod9915 from "module_9915" /* 9915 */;
import _mod9918 from "module_9918" /* 9918 */;
import _mod9920 from "module_9920" /* 9920 */;
import _mod9921 from "module_9921" /* 9921 */;
import _mod9923 from "module_9923" /* 9923 */;
import _mod9924 from "module_9924" /* 9924 */;
import _mod9925 from "module_9925" /* 9925 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9927 from "module_9927" /* 9927 */;
import _mod9928 from "module_9928" /* 9928 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
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
const module_9893 = fn(_mod9893);
const module_9903 = fn(_mod9903);
const module_9904 = fn(_mod9904);
const module_9905 = fn(_mod9905);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const module_9908 = fn(_mod9908);
const module_9910 = fn(_mod9910);
const module_9911 = fn(_mod9911);
const module_9912 = fn(_mod9912);
const module_9915 = fn(_mod9915);
const module_9918 = fn(_mod9918);
const module_9920 = fn(_mod9920);
const module_9921 = fn(_mod9921);
const module_9923 = fn(_mod9923);
const module_9924 = fn(_mod9924);
const module_9925 = fn(_mod9925);
const module_9926 = fn(_mod9926);
const module_9927 = fn(_mod9927);
const module_9928 = fn(_mod9928);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
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
    const _default = new module_9918.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9920.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9905.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9923.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9925.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9930.default();
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
      items = [new module_9924.default(flag2), , , , , , , , ];
      new module_9924.default(flag2);
      items[1] = new module_9893.default(flag);
      new module_9893.default(flag);
      items[2] = new module_9903.default();
      new module_9903.default();
      items[3] = new module_9904.default(flag2);
      new module_9904.default(flag2);
      items[4] = new module_9921.default();
      new module_9921.default();
      items[5] = new module_9907.default();
      new module_9907.default();
      items[6] = new module_9908.default(flag);
      new module_9908.default(flag);
      items[7] = new module_9910.default(flag);
      new module_9910.default(flag);
      items[8] = new module_9911.default(flag);
      new module_9911.default(flag);
      items1 = [new module_9915.default()];
      new module_9915.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9906.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9927.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9926.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9928.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9915.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9929.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9912.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

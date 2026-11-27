// Module ID: 10877
// Function ID: 10878
// Dependencies: [41, 42, 10878, 10888, 10889, 10890, 10891, 10892, 10893, 10895, 10896, 10897, 10900, 10903, 10905, 10906, 10908, 10909, 10910, 10911, 10912, 10913, 10914, 10915, 10916]

// Module 10877
import _mod10878 from "module_10878" /* 10878 */;
import _mod10888 from "module_10888" /* 10888 */;
import _mod10889 from "module_10889" /* 10889 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10892 from "module_10892" /* 10892 */;
import _mod10893 from "module_10893" /* 10893 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10896 from "module_10896" /* 10896 */;
import _mod10897 from "module_10897" /* 10897 */;
import _mod10900 from "module_10900" /* 10900 */;
import _mod10903 from "module_10903" /* 10903 */;
import _mod10905 from "module_10905" /* 10905 */;
import _mod10906 from "module_10906" /* 10906 */;
import _mod10908 from "module_10908" /* 10908 */;
import _mod10909 from "module_10909" /* 10909 */;
import _mod10910 from "module_10910" /* 10910 */;
import _mod10911 from "module_10911" /* 10911 */;
import _mod10912 from "module_10912" /* 10912 */;
import _mod10913 from "module_10913" /* 10913 */;
import _mod10914 from "module_10914" /* 10914 */;
import _mod10915 from "module_10915" /* 10915 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
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
const module_10878 = fn(_mod10878);
const module_10888 = fn(_mod10888);
const module_10889 = fn(_mod10889);
const module_10890 = fn(_mod10890);
const module_10891 = fn(_mod10891);
const module_10892 = fn(_mod10892);
const module_10893 = fn(_mod10893);
const module_10895 = fn(_mod10895);
const module_10896 = fn(_mod10896);
const module_10897 = fn(_mod10897);
const module_10900 = fn(_mod10900);
const module_10903 = fn(_mod10903);
const module_10905 = fn(_mod10905);
const module_10906 = fn(_mod10906);
const module_10908 = fn(_mod10908);
const module_10909 = fn(_mod10909);
const module_10910 = fn(_mod10910);
const module_10911 = fn(_mod10911);
const module_10912 = fn(_mod10912);
const module_10913 = fn(_mod10913);
const module_10914 = fn(_mod10914);
const module_10915 = fn(_mod10915);
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
    const _default = new module_10903.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10905.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10890.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10908.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10910.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10915.default();
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
      items = [new module_10909.default(flag2), , , , , , , , ];
      new module_10909.default(flag2);
      items[1] = new module_10878.default(flag);
      new module_10878.default(flag);
      items[2] = new module_10888.default();
      new module_10888.default();
      items[3] = new module_10889.default(flag2);
      new module_10889.default(flag2);
      items[4] = new module_10906.default();
      new module_10906.default();
      items[5] = new module_10892.default();
      new module_10892.default();
      items[6] = new module_10893.default(flag);
      new module_10893.default(flag);
      items[7] = new module_10895.default(flag);
      new module_10895.default(flag);
      items[8] = new module_10896.default(flag);
      new module_10896.default(flag);
      items1 = [new module_10900.default()];
      new module_10900.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10891.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10912.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10911.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10913.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10900.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10914.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10897.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

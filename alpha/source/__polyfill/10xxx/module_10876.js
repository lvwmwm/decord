// Module ID: 10876
// Function ID: 10877
// Dependencies: [41, 42, 10877, 10887, 10888, 10889, 10890, 10891, 10892, 10894, 10895, 10896, 10899, 10902, 10904, 10905, 10907, 10908, 10909, 10910, 10911, 10912, 10913, 10914, 10915]

// Module 10876
import _mod10877 from "module_10877" /* 10877 */;
import _mod10887 from "module_10887" /* 10887 */;
import _mod10888 from "module_10888" /* 10888 */;
import _mod10889 from "module_10889" /* 10889 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10892 from "module_10892" /* 10892 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10896 from "module_10896" /* 10896 */;
import _mod10899 from "module_10899" /* 10899 */;
import _mod10902 from "module_10902" /* 10902 */;
import _mod10904 from "module_10904" /* 10904 */;
import _mod10905 from "module_10905" /* 10905 */;
import _mod10907 from "module_10907" /* 10907 */;
import _mod10908 from "module_10908" /* 10908 */;
import _mod10909 from "module_10909" /* 10909 */;
import _mod10910 from "module_10910" /* 10910 */;
import _mod10911 from "module_10911" /* 10911 */;
import _mod10912 from "module_10912" /* 10912 */;
import _mod10913 from "module_10913" /* 10913 */;
import _mod10914 from "module_10914" /* 10914 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
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
const module_10877 = fn(_mod10877);
const module_10887 = fn(_mod10887);
const module_10888 = fn(_mod10888);
const module_10889 = fn(_mod10889);
const module_10890 = fn(_mod10890);
const module_10891 = fn(_mod10891);
const module_10892 = fn(_mod10892);
const module_10894 = fn(_mod10894);
const module_10895 = fn(_mod10895);
const module_10896 = fn(_mod10896);
const module_10899 = fn(_mod10899);
const module_10902 = fn(_mod10902);
const module_10904 = fn(_mod10904);
const module_10905 = fn(_mod10905);
const module_10907 = fn(_mod10907);
const module_10908 = fn(_mod10908);
const module_10909 = fn(_mod10909);
const module_10910 = fn(_mod10910);
const module_10911 = fn(_mod10911);
const module_10912 = fn(_mod10912);
const module_10913 = fn(_mod10913);
const module_10914 = fn(_mod10914);
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
    const _default = new module_10902.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10904.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10889.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10907.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10909.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10914.default();
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
      items = [new module_10908.default(flag2), , , , , , , , ];
      new module_10908.default(flag2);
      items[1] = new module_10877.default(flag);
      new module_10877.default(flag);
      items[2] = new module_10887.default();
      new module_10887.default();
      items[3] = new module_10888.default(flag2);
      new module_10888.default(flag2);
      items[4] = new module_10905.default();
      new module_10905.default();
      items[5] = new module_10891.default();
      new module_10891.default();
      items[6] = new module_10892.default(flag);
      new module_10892.default(flag);
      items[7] = new module_10894.default(flag);
      new module_10894.default(flag);
      items[8] = new module_10895.default(flag);
      new module_10895.default(flag);
      items1 = [new module_10899.default()];
      new module_10899.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10890.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10911.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10910.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10912.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10899.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10913.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10896.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

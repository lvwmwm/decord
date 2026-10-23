// Module ID: 10211
// Function ID: 10212
// Dependencies: [41, 42, 10212, 10222, 10223, 10224, 10225, 10226, 10227, 10229, 10230, 10231, 10234, 10237, 10239, 10240, 10242, 10243, 10244, 10245, 10246, 10247, 10248, 10249, 10250]

// Module 10211
import _mod10212 from "module_10212" /* 10212 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10239 from "module_10239" /* 10239 */;
import _mod10240 from "module_10240" /* 10240 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import _mod10247 from "module_10247" /* 10247 */;
import _mod10248 from "module_10248" /* 10248 */;
import _mod10249 from "module_10249" /* 10249 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
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
const module_10212 = fn(_mod10212);
const module_10222 = fn(_mod10222);
const module_10223 = fn(_mod10223);
const module_10224 = fn(_mod10224);
const module_10225 = fn(_mod10225);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10231 = fn(_mod10231);
const module_10234 = fn(_mod10234);
const module_10237 = fn(_mod10237);
const module_10239 = fn(_mod10239);
const module_10240 = fn(_mod10240);
const module_10242 = fn(_mod10242);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const module_10247 = fn(_mod10247);
const module_10248 = fn(_mod10248);
const module_10249 = fn(_mod10249);
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
    const _default = new module_10237.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10239.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10224.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10242.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10244.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10249.default();
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
      items = [new module_10243.default(flag2), , , , , , , , ];
      new module_10243.default(flag2);
      items[1] = new module_10212.default(flag);
      new module_10212.default(flag);
      items[2] = new module_10222.default();
      new module_10222.default();
      items[3] = new module_10223.default(flag2);
      new module_10223.default(flag2);
      items[4] = new module_10240.default();
      new module_10240.default();
      items[5] = new module_10226.default();
      new module_10226.default();
      items[6] = new module_10227.default(flag);
      new module_10227.default(flag);
      items[7] = new module_10229.default(flag);
      new module_10229.default(flag);
      items[8] = new module_10230.default(flag);
      new module_10230.default(flag);
      items1 = [new module_10234.default()];
      new module_10234.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10225.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10246.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10245.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10247.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10234.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10248.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10231.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

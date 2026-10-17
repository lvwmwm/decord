// Module ID: 10116
// Function ID: 10117
// Dependencies: [41, 42, 10117, 10127, 10128, 10129, 10130, 10131, 10132, 10134, 10135, 10136, 10139, 10142, 10144, 10145, 10147, 10148, 10149, 10150, 10151, 10152, 10153, 10154, 10155]

// Module 10116
import _mod10117 from "module_10117" /* 10117 */;
import _mod10127 from "module_10127" /* 10127 */;
import _mod10128 from "module_10128" /* 10128 */;
import _mod10129 from "module_10129" /* 10129 */;
import _mod10130 from "module_10130" /* 10130 */;
import _mod10131 from "module_10131" /* 10131 */;
import _mod10132 from "module_10132" /* 10132 */;
import _mod10134 from "module_10134" /* 10134 */;
import _mod10135 from "module_10135" /* 10135 */;
import _mod10136 from "module_10136" /* 10136 */;
import _mod10139 from "module_10139" /* 10139 */;
import _mod10142 from "module_10142" /* 10142 */;
import _mod10144 from "module_10144" /* 10144 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10147 from "module_10147" /* 10147 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10149 from "module_10149" /* 10149 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10151 from "module_10151" /* 10151 */;
import _mod10152 from "module_10152" /* 10152 */;
import _mod10153 from "module_10153" /* 10153 */;
import _mod10154 from "module_10154" /* 10154 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
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
const module_10117 = fn(_mod10117);
const module_10127 = fn(_mod10127);
const module_10128 = fn(_mod10128);
const module_10129 = fn(_mod10129);
const module_10130 = fn(_mod10130);
const module_10131 = fn(_mod10131);
const module_10132 = fn(_mod10132);
const module_10134 = fn(_mod10134);
const module_10135 = fn(_mod10135);
const module_10136 = fn(_mod10136);
const module_10139 = fn(_mod10139);
const module_10142 = fn(_mod10142);
const module_10144 = fn(_mod10144);
const module_10145 = fn(_mod10145);
const module_10147 = fn(_mod10147);
const module_10148 = fn(_mod10148);
const module_10149 = fn(_mod10149);
const module_10150 = fn(_mod10150);
const module_10151 = fn(_mod10151);
const module_10152 = fn(_mod10152);
const module_10153 = fn(_mod10153);
const module_10154 = fn(_mod10154);
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
    const _default = new module_10142.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10144.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10129.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10147.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10149.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10154.default();
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
      items = [new module_10148.default(flag2), , , , , , , , ];
      new module_10148.default(flag2);
      items[1] = new module_10117.default(flag);
      new module_10117.default(flag);
      items[2] = new module_10127.default();
      new module_10127.default();
      items[3] = new module_10128.default(flag2);
      new module_10128.default(flag2);
      items[4] = new module_10145.default();
      new module_10145.default();
      items[5] = new module_10131.default();
      new module_10131.default();
      items[6] = new module_10132.default(flag);
      new module_10132.default(flag);
      items[7] = new module_10134.default(flag);
      new module_10134.default(flag);
      items[8] = new module_10135.default(flag);
      new module_10135.default(flag);
      items1 = [new module_10139.default()];
      new module_10139.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10130.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10151.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10150.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10152.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10139.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10153.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10136.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

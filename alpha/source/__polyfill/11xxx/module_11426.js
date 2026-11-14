// Module ID: 11426
// Function ID: 11427
// Dependencies: [41, 42, 11427, 11437, 11438, 11439, 11440, 11441, 11442, 11444, 11445, 11446, 11449, 11452, 11454, 11455, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465]

// Module 11426
import _mod11427 from "module_11427" /* 11427 */;
import _mod11437 from "module_11437" /* 11437 */;
import _mod11438 from "module_11438" /* 11438 */;
import _mod11439 from "module_11439" /* 11439 */;
import _mod11440 from "module_11440" /* 11440 */;
import _mod11441 from "module_11441" /* 11441 */;
import _mod11442 from "module_11442" /* 11442 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import _mod11449 from "module_11449" /* 11449 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11462 from "module_11462" /* 11462 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
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
const module_11427 = fn(_mod11427);
const module_11437 = fn(_mod11437);
const module_11438 = fn(_mod11438);
const module_11439 = fn(_mod11439);
const module_11440 = fn(_mod11440);
const module_11441 = fn(_mod11441);
const module_11442 = fn(_mod11442);
const module_11444 = fn(_mod11444);
const module_11445 = fn(_mod11445);
const module_11446 = fn(_mod11446);
const module_11449 = fn(_mod11449);
const module_11452 = fn(_mod11452);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11461 = fn(_mod11461);
const module_11462 = fn(_mod11462);
const module_11463 = fn(_mod11463);
const module_11464 = fn(_mod11464);
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
    const _default = new module_11452.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11454.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11439.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11457.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11459.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11464.default();
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
      items = [new module_11458.default(flag2), , , , , , , , ];
      new module_11458.default(flag2);
      items[1] = new module_11427.default(flag);
      new module_11427.default(flag);
      items[2] = new module_11437.default();
      new module_11437.default();
      items[3] = new module_11438.default(flag2);
      new module_11438.default(flag2);
      items[4] = new module_11455.default();
      new module_11455.default();
      items[5] = new module_11441.default();
      new module_11441.default();
      items[6] = new module_11442.default(flag);
      new module_11442.default(flag);
      items[7] = new module_11444.default(flag);
      new module_11444.default(flag);
      items[8] = new module_11445.default(flag);
      new module_11445.default(flag);
      items1 = [new module_11449.default()];
      new module_11449.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11440.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11461.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11460.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11462.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11449.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11463.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11446.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

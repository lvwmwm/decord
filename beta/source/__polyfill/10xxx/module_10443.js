// Module ID: 10443
// Function ID: 10444
// Dependencies: [41, 42, 10444, 10454, 10455, 10456, 10457, 10458, 10459, 10461, 10462, 10463, 10466, 10469, 10471, 10472, 10474, 10475, 10476, 10477, 10478, 10479, 10480, 10481, 10482]

// Module 10443
import _mod10444 from "module_10444" /* 10444 */;
import _mod10454 from "module_10454" /* 10454 */;
import _mod10455 from "module_10455" /* 10455 */;
import _mod10456 from "module_10456" /* 10456 */;
import _mod10457 from "module_10457" /* 10457 */;
import _mod10458 from "module_10458" /* 10458 */;
import _mod10459 from "module_10459" /* 10459 */;
import _mod10461 from "module_10461" /* 10461 */;
import _mod10462 from "module_10462" /* 10462 */;
import _mod10463 from "module_10463" /* 10463 */;
import _mod10466 from "module_10466" /* 10466 */;
import _mod10469 from "module_10469" /* 10469 */;
import _mod10471 from "module_10471" /* 10471 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10476 from "module_10476" /* 10476 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10479 from "module_10479" /* 10479 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
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
const module_10444 = fn(_mod10444);
const module_10454 = fn(_mod10454);
const module_10455 = fn(_mod10455);
const module_10456 = fn(_mod10456);
const module_10457 = fn(_mod10457);
const module_10458 = fn(_mod10458);
const module_10459 = fn(_mod10459);
const module_10461 = fn(_mod10461);
const module_10462 = fn(_mod10462);
const module_10463 = fn(_mod10463);
const module_10466 = fn(_mod10466);
const module_10469 = fn(_mod10469);
const module_10471 = fn(_mod10471);
const module_10472 = fn(_mod10472);
const module_10474 = fn(_mod10474);
const module_10475 = fn(_mod10475);
const module_10476 = fn(_mod10476);
const module_10477 = fn(_mod10477);
const module_10478 = fn(_mod10478);
const module_10479 = fn(_mod10479);
const module_10480 = fn(_mod10480);
const module_10481 = fn(_mod10481);
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
    const _default = new module_10469.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10471.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10456.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10474.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10476.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10481.default();
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
      items = [new module_10475.default(flag2), , , , , , , , ];
      new module_10475.default(flag2);
      items[1] = new module_10444.default(flag);
      new module_10444.default(flag);
      items[2] = new module_10454.default();
      new module_10454.default();
      items[3] = new module_10455.default(flag2);
      new module_10455.default(flag2);
      items[4] = new module_10472.default();
      new module_10472.default();
      items[5] = new module_10458.default();
      new module_10458.default();
      items[6] = new module_10459.default(flag);
      new module_10459.default(flag);
      items[7] = new module_10461.default(flag);
      new module_10461.default(flag);
      items[8] = new module_10462.default(flag);
      new module_10462.default(flag);
      items1 = [new module_10466.default()];
      new module_10466.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10457.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10478.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10477.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10479.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10466.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10480.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10463.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

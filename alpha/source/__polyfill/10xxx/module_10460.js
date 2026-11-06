// Module ID: 10460
// Function ID: 10461
// Dependencies: [41, 42, 10461, 10471, 10472, 10473, 10474, 10475, 10476, 10478, 10479, 10480, 10483, 10486, 10488, 10489, 10491, 10492, 10493, 10494, 10495, 10496, 10497, 10498, 10499]

// Module 10460
import _mod10461 from "module_10461" /* 10461 */;
import _mod10471 from "module_10471" /* 10471 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10476 from "module_10476" /* 10476 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10479 from "module_10479" /* 10479 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
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
const module_10461 = fn(_mod10461);
const module_10471 = fn(_mod10471);
const module_10472 = fn(_mod10472);
const module_10473 = fn(_mod10473);
const module_10474 = fn(_mod10474);
const module_10475 = fn(_mod10475);
const module_10476 = fn(_mod10476);
const module_10478 = fn(_mod10478);
const module_10479 = fn(_mod10479);
const module_10480 = fn(_mod10480);
const module_10483 = fn(_mod10483);
const module_10486 = fn(_mod10486);
const module_10488 = fn(_mod10488);
const module_10489 = fn(_mod10489);
const module_10491 = fn(_mod10491);
const module_10492 = fn(_mod10492);
const module_10493 = fn(_mod10493);
const module_10494 = fn(_mod10494);
const module_10495 = fn(_mod10495);
const module_10496 = fn(_mod10496);
const module_10497 = fn(_mod10497);
const module_10498 = fn(_mod10498);
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
    const _default = new module_10486.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10488.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10473.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10491.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10493.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10498.default();
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
      items = [new module_10492.default(flag2), , , , , , , , ];
      new module_10492.default(flag2);
      items[1] = new module_10461.default(flag);
      new module_10461.default(flag);
      items[2] = new module_10471.default();
      new module_10471.default();
      items[3] = new module_10472.default(flag2);
      new module_10472.default(flag2);
      items[4] = new module_10489.default();
      new module_10489.default();
      items[5] = new module_10475.default();
      new module_10475.default();
      items[6] = new module_10476.default(flag);
      new module_10476.default(flag);
      items[7] = new module_10478.default(flag);
      new module_10478.default(flag);
      items[8] = new module_10479.default(flag);
      new module_10479.default(flag);
      items1 = [new module_10483.default()];
      new module_10483.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10474.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10495.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10494.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10496.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10483.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10497.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10480.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

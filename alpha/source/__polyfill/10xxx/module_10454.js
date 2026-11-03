// Module ID: 10454
// Function ID: 10455
// Dependencies: [41, 42, 10455, 10465, 10466, 10467, 10468, 10469, 10470, 10472, 10473, 10474, 10477, 10480, 10482, 10483, 10485, 10486, 10487, 10488, 10489, 10490, 10491, 10492, 10493]

// Module 10454
import _mod10455 from "module_10455" /* 10455 */;
import _mod10465 from "module_10465" /* 10465 */;
import _mod10466 from "module_10466" /* 10466 */;
import _mod10467 from "module_10467" /* 10467 */;
import _mod10468 from "module_10468" /* 10468 */;
import _mod10469 from "module_10469" /* 10469 */;
import _mod10470 from "module_10470" /* 10470 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10482 from "module_10482" /* 10482 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10485 from "module_10485" /* 10485 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
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
const module_10455 = fn(_mod10455);
const module_10465 = fn(_mod10465);
const module_10466 = fn(_mod10466);
const module_10467 = fn(_mod10467);
const module_10468 = fn(_mod10468);
const module_10469 = fn(_mod10469);
const module_10470 = fn(_mod10470);
const module_10472 = fn(_mod10472);
const module_10473 = fn(_mod10473);
const module_10474 = fn(_mod10474);
const module_10477 = fn(_mod10477);
const module_10480 = fn(_mod10480);
const module_10482 = fn(_mod10482);
const module_10483 = fn(_mod10483);
const module_10485 = fn(_mod10485);
const module_10486 = fn(_mod10486);
const module_10487 = fn(_mod10487);
const module_10488 = fn(_mod10488);
const module_10489 = fn(_mod10489);
const module_10490 = fn(_mod10490);
const module_10491 = fn(_mod10491);
const module_10492 = fn(_mod10492);
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
    const _default = new module_10480.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10482.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10467.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10485.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10487.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10492.default();
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
      items = [new module_10486.default(flag2), , , , , , , , ];
      new module_10486.default(flag2);
      items[1] = new module_10455.default(flag);
      new module_10455.default(flag);
      items[2] = new module_10465.default();
      new module_10465.default();
      items[3] = new module_10466.default(flag2);
      new module_10466.default(flag2);
      items[4] = new module_10483.default();
      new module_10483.default();
      items[5] = new module_10469.default();
      new module_10469.default();
      items[6] = new module_10470.default(flag);
      new module_10470.default(flag);
      items[7] = new module_10472.default(flag);
      new module_10472.default(flag);
      items[8] = new module_10473.default(flag);
      new module_10473.default(flag);
      items1 = [new module_10477.default()];
      new module_10477.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10468.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10489.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10488.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10490.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10477.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10491.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10474.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

// Module ID: 10475
// Function ID: 10476
// Dependencies: [41, 42, 10476, 10486, 10487, 10488, 10489, 10490, 10491, 10493, 10494, 10495, 10498, 10501, 10503, 10504, 10506, 10507, 10508, 10509, 10510, 10511, 10512, 10513, 10514]

// Module 10475
import _mod10476 from "module_10476" /* 10476 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import _mod10512 from "module_10512" /* 10512 */;
import _mod10513 from "module_10513" /* 10513 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
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
const module_10476 = fn(_mod10476);
const module_10486 = fn(_mod10486);
const module_10487 = fn(_mod10487);
const module_10488 = fn(_mod10488);
const module_10489 = fn(_mod10489);
const module_10490 = fn(_mod10490);
const module_10491 = fn(_mod10491);
const module_10493 = fn(_mod10493);
const module_10494 = fn(_mod10494);
const module_10495 = fn(_mod10495);
const module_10498 = fn(_mod10498);
const module_10501 = fn(_mod10501);
const module_10503 = fn(_mod10503);
const module_10504 = fn(_mod10504);
const module_10506 = fn(_mod10506);
const module_10507 = fn(_mod10507);
const module_10508 = fn(_mod10508);
const module_10509 = fn(_mod10509);
const module_10510 = fn(_mod10510);
const module_10511 = fn(_mod10511);
const module_10512 = fn(_mod10512);
const module_10513 = fn(_mod10513);
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
    const _default = new module_10501.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10503.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10488.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10506.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10508.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10513.default();
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
      items = [new module_10507.default(flag2), , , , , , , , ];
      new module_10507.default(flag2);
      items[1] = new module_10476.default(flag);
      new module_10476.default(flag);
      items[2] = new module_10486.default();
      new module_10486.default();
      items[3] = new module_10487.default(flag2);
      new module_10487.default(flag2);
      items[4] = new module_10504.default();
      new module_10504.default();
      items[5] = new module_10490.default();
      new module_10490.default();
      items[6] = new module_10491.default(flag);
      new module_10491.default(flag);
      items[7] = new module_10493.default(flag);
      new module_10493.default(flag);
      items[8] = new module_10494.default(flag);
      new module_10494.default(flag);
      items1 = [new module_10498.default()];
      new module_10498.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10489.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10510.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10509.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10511.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10498.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10512.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10495.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

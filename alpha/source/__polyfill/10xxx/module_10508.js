// Module ID: 10508
// Function ID: 10509
// Dependencies: [41, 42, 10509, 10519, 10520, 10521, 10522, 10523, 10524, 10526, 10527, 10528, 10531, 10534, 10536, 10537, 10539, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547]

// Module 10508
import _mod10509 from "module_10509" /* 10509 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10527 from "module_10527" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10540 from "module_10540" /* 10540 */;
import _mod10541 from "module_10541" /* 10541 */;
import _mod10542 from "module_10542" /* 10542 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10544 from "module_10544" /* 10544 */;
import _mod10545 from "module_10545" /* 10545 */;
import _mod10546 from "module_10546" /* 10546 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
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
const module_10509 = fn(_mod10509);
const module_10519 = fn(_mod10519);
const module_10520 = fn(_mod10520);
const module_10521 = fn(_mod10521);
const module_10522 = fn(_mod10522);
const module_10523 = fn(_mod10523);
const module_10524 = fn(_mod10524);
const module_10526 = fn(_mod10526);
const module_10527 = fn(_mod10527);
const module_10528 = fn(_mod10528);
const module_10531 = fn(_mod10531);
const module_10534 = fn(_mod10534);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10539 = fn(_mod10539);
const module_10540 = fn(_mod10540);
const module_10541 = fn(_mod10541);
const module_10542 = fn(_mod10542);
const module_10543 = fn(_mod10543);
const module_10544 = fn(_mod10544);
const module_10545 = fn(_mod10545);
const module_10546 = fn(_mod10546);
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
    const _default = new module_10534.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10536.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10521.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10539.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10541.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10546.default();
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
      items = [new module_10540.default(flag2), , , , , , , , ];
      new module_10540.default(flag2);
      items[1] = new module_10509.default(flag);
      new module_10509.default(flag);
      items[2] = new module_10519.default();
      new module_10519.default();
      items[3] = new module_10520.default(flag2);
      new module_10520.default(flag2);
      items[4] = new module_10537.default();
      new module_10537.default();
      items[5] = new module_10523.default();
      new module_10523.default();
      items[6] = new module_10524.default(flag);
      new module_10524.default(flag);
      items[7] = new module_10526.default(flag);
      new module_10526.default(flag);
      items[8] = new module_10527.default(flag);
      new module_10527.default(flag);
      items1 = [new module_10531.default()];
      new module_10531.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10522.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10543.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10542.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10544.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10531.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10545.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10528.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

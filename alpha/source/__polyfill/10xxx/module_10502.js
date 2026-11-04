// Module ID: 10502
// Function ID: 10503
// Dependencies: [41, 42, 10503, 10513, 10514, 10515, 10516, 10517, 10518, 10520, 10521, 10522, 10525, 10528, 10530, 10531, 10533, 10534, 10535, 10536, 10537, 10538, 10539, 10540, 10541]

// Module 10502
import _mod10503 from "module_10503" /* 10503 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10525 from "module_10525" /* 10525 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10533 from "module_10533" /* 10533 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
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
const module_10503 = fn(_mod10503);
const module_10513 = fn(_mod10513);
const module_10514 = fn(_mod10514);
const module_10515 = fn(_mod10515);
const module_10516 = fn(_mod10516);
const module_10517 = fn(_mod10517);
const module_10518 = fn(_mod10518);
const module_10520 = fn(_mod10520);
const module_10521 = fn(_mod10521);
const module_10522 = fn(_mod10522);
const module_10525 = fn(_mod10525);
const module_10528 = fn(_mod10528);
const module_10530 = fn(_mod10530);
const module_10531 = fn(_mod10531);
const module_10533 = fn(_mod10533);
const module_10534 = fn(_mod10534);
const module_10535 = fn(_mod10535);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10538 = fn(_mod10538);
const module_10539 = fn(_mod10539);
const module_10540 = fn(_mod10540);
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
    const _default = new module_10528.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10530.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10515.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10533.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10535.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10540.default();
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
      items = [new module_10534.default(flag2), , , , , , , , ];
      new module_10534.default(flag2);
      items[1] = new module_10503.default(flag);
      new module_10503.default(flag);
      items[2] = new module_10513.default();
      new module_10513.default();
      items[3] = new module_10514.default(flag2);
      new module_10514.default(flag2);
      items[4] = new module_10531.default();
      new module_10531.default();
      items[5] = new module_10517.default();
      new module_10517.default();
      items[6] = new module_10518.default(flag);
      new module_10518.default(flag);
      items[7] = new module_10520.default(flag);
      new module_10520.default(flag);
      items[8] = new module_10521.default(flag);
      new module_10521.default(flag);
      items1 = [new module_10525.default()];
      new module_10525.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10516.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10537.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10536.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10538.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10525.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10539.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10522.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

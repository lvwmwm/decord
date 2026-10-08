// Module ID: 9768
// Function ID: 9769
// Dependencies: [41, 42, 9769, 9779, 9780, 9781, 9782, 9783, 9784, 9786, 9787, 9788, 9791, 9794, 9796, 9797, 9799, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807]

// Module 9768
import _mod9769 from "module_9769" /* 9769 */;
import _mod9779 from "module_9779" /* 9779 */;
import _mod9780 from "module_9780" /* 9780 */;
import _mod9781 from "module_9781" /* 9781 */;
import _mod9782 from "module_9782" /* 9782 */;
import _mod9783 from "module_9783" /* 9783 */;
import _mod9784 from "module_9784" /* 9784 */;
import _mod9786 from "module_9786" /* 9786 */;
import _mod9787 from "module_9787" /* 9787 */;
import _mod9788 from "module_9788" /* 9788 */;
import _mod9791 from "module_9791" /* 9791 */;
import _mod9794 from "module_9794" /* 9794 */;
import _mod9796 from "module_9796" /* 9796 */;
import _mod9797 from "module_9797" /* 9797 */;
import _mod9799 from "module_9799" /* 9799 */;
import _mod9800 from "module_9800" /* 9800 */;
import _mod9801 from "module_9801" /* 9801 */;
import _mod9802 from "module_9802" /* 9802 */;
import _mod9803 from "module_9803" /* 9803 */;
import _mod9804 from "module_9804" /* 9804 */;
import _mod9805 from "module_9805" /* 9805 */;
import _mod9806 from "module_9806" /* 9806 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
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
const module_9769 = fn(_mod9769);
const module_9779 = fn(_mod9779);
const module_9780 = fn(_mod9780);
const module_9781 = fn(_mod9781);
const module_9782 = fn(_mod9782);
const module_9783 = fn(_mod9783);
const module_9784 = fn(_mod9784);
const module_9786 = fn(_mod9786);
const module_9787 = fn(_mod9787);
const module_9788 = fn(_mod9788);
const module_9791 = fn(_mod9791);
const module_9794 = fn(_mod9794);
const module_9796 = fn(_mod9796);
const module_9797 = fn(_mod9797);
const module_9799 = fn(_mod9799);
const module_9800 = fn(_mod9800);
const module_9801 = fn(_mod9801);
const module_9802 = fn(_mod9802);
const module_9803 = fn(_mod9803);
const module_9804 = fn(_mod9804);
const module_9805 = fn(_mod9805);
const module_9806 = fn(_mod9806);
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
    const _default = new module_9794.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9796.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9781.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9799.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9801.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9806.default();
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
      items = [new module_9800.default(flag2), , , , , , , , ];
      new module_9800.default(flag2);
      items[1] = new module_9769.default(flag);
      new module_9769.default(flag);
      items[2] = new module_9779.default();
      new module_9779.default();
      items[3] = new module_9780.default(flag2);
      new module_9780.default(flag2);
      items[4] = new module_9797.default();
      new module_9797.default();
      items[5] = new module_9783.default();
      new module_9783.default();
      items[6] = new module_9784.default(flag);
      new module_9784.default(flag);
      items[7] = new module_9786.default(flag);
      new module_9786.default(flag);
      items[8] = new module_9787.default(flag);
      new module_9787.default(flag);
      items1 = [new module_9791.default()];
      new module_9791.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9782.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9803.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9802.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9804.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9791.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9805.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9788.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

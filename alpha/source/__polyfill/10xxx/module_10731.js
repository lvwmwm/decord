// Module ID: 10731
// Function ID: 10732
// Dependencies: [41, 42, 10732, 10742, 10743, 10744, 10745, 10746, 10747, 10749, 10750, 10751, 10754, 10757, 10759, 10760, 10762, 10763, 10764, 10765, 10766, 10767, 10768, 10769, 10770]

// Module 10731
import _mod10732 from "module_10732" /* 10732 */;
import _mod10742 from "module_10742" /* 10742 */;
import _mod10743 from "module_10743" /* 10743 */;
import _mod10744 from "module_10744" /* 10744 */;
import _mod10745 from "module_10745" /* 10745 */;
import _mod10746 from "module_10746" /* 10746 */;
import _mod10747 from "module_10747" /* 10747 */;
import _mod10749 from "module_10749" /* 10749 */;
import _mod10750 from "module_10750" /* 10750 */;
import _mod10751 from "module_10751" /* 10751 */;
import _mod10754 from "module_10754" /* 10754 */;
import _mod10757 from "module_10757" /* 10757 */;
import _mod10759 from "module_10759" /* 10759 */;
import _mod10760 from "module_10760" /* 10760 */;
import _mod10762 from "module_10762" /* 10762 */;
import _mod10763 from "module_10763" /* 10763 */;
import _mod10764 from "module_10764" /* 10764 */;
import _mod10765 from "module_10765" /* 10765 */;
import _mod10766 from "module_10766" /* 10766 */;
import _mod10767 from "module_10767" /* 10767 */;
import _mod10768 from "module_10768" /* 10768 */;
import _mod10769 from "module_10769" /* 10769 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
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
const module_10732 = fn(_mod10732);
const module_10742 = fn(_mod10742);
const module_10743 = fn(_mod10743);
const module_10744 = fn(_mod10744);
const module_10745 = fn(_mod10745);
const module_10746 = fn(_mod10746);
const module_10747 = fn(_mod10747);
const module_10749 = fn(_mod10749);
const module_10750 = fn(_mod10750);
const module_10751 = fn(_mod10751);
const module_10754 = fn(_mod10754);
const module_10757 = fn(_mod10757);
const module_10759 = fn(_mod10759);
const module_10760 = fn(_mod10760);
const module_10762 = fn(_mod10762);
const module_10763 = fn(_mod10763);
const module_10764 = fn(_mod10764);
const module_10765 = fn(_mod10765);
const module_10766 = fn(_mod10766);
const module_10767 = fn(_mod10767);
const module_10768 = fn(_mod10768);
const module_10769 = fn(_mod10769);
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
    const _default = new module_10757.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10759.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10744.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10762.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10764.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10769.default();
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
      items = [new module_10763.default(flag2), , , , , , , , ];
      new module_10763.default(flag2);
      items[1] = new module_10732.default(flag);
      new module_10732.default(flag);
      items[2] = new module_10742.default();
      new module_10742.default();
      items[3] = new module_10743.default(flag2);
      new module_10743.default(flag2);
      items[4] = new module_10760.default();
      new module_10760.default();
      items[5] = new module_10746.default();
      new module_10746.default();
      items[6] = new module_10747.default(flag);
      new module_10747.default(flag);
      items[7] = new module_10749.default(flag);
      new module_10749.default(flag);
      items[8] = new module_10750.default(flag);
      new module_10750.default(flag);
      items1 = [new module_10754.default()];
      new module_10754.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10745.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10766.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10765.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10767.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10754.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10768.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10751.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

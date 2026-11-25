// Module ID: 10830
// Function ID: 10831
// Dependencies: [41, 42, 10831, 10841, 10842, 10843, 10844, 10845, 10846, 10848, 10849, 10850, 10853, 10856, 10858, 10859, 10861, 10862, 10863, 10864, 10865, 10866, 10867, 10868, 10869]

// Module 10830
import _mod10831 from "module_10831" /* 10831 */;
import _mod10841 from "module_10841" /* 10841 */;
import _mod10842 from "module_10842" /* 10842 */;
import _mod10843 from "module_10843" /* 10843 */;
import _mod10844 from "module_10844" /* 10844 */;
import _mod10845 from "module_10845" /* 10845 */;
import _mod10846 from "module_10846" /* 10846 */;
import _mod10848 from "module_10848" /* 10848 */;
import _mod10849 from "module_10849" /* 10849 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10856 from "module_10856" /* 10856 */;
import _mod10858 from "module_10858" /* 10858 */;
import _mod10859 from "module_10859" /* 10859 */;
import _mod10861 from "module_10861" /* 10861 */;
import _mod10862 from "module_10862" /* 10862 */;
import _mod10863 from "module_10863" /* 10863 */;
import _mod10864 from "module_10864" /* 10864 */;
import _mod10865 from "module_10865" /* 10865 */;
import _mod10866 from "module_10866" /* 10866 */;
import _mod10867 from "module_10867" /* 10867 */;
import _mod10868 from "module_10868" /* 10868 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
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
const module_10831 = fn(_mod10831);
const module_10841 = fn(_mod10841);
const module_10842 = fn(_mod10842);
const module_10843 = fn(_mod10843);
const module_10844 = fn(_mod10844);
const module_10845 = fn(_mod10845);
const module_10846 = fn(_mod10846);
const module_10848 = fn(_mod10848);
const module_10849 = fn(_mod10849);
const module_10850 = fn(_mod10850);
const module_10853 = fn(_mod10853);
const module_10856 = fn(_mod10856);
const module_10858 = fn(_mod10858);
const module_10859 = fn(_mod10859);
const module_10861 = fn(_mod10861);
const module_10862 = fn(_mod10862);
const module_10863 = fn(_mod10863);
const module_10864 = fn(_mod10864);
const module_10865 = fn(_mod10865);
const module_10866 = fn(_mod10866);
const module_10867 = fn(_mod10867);
const module_10868 = fn(_mod10868);
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
    const _default = new module_10856.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10858.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10843.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10861.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10863.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10868.default();
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
      items = [new module_10862.default(flag2), , , , , , , , ];
      new module_10862.default(flag2);
      items[1] = new module_10831.default(flag);
      new module_10831.default(flag);
      items[2] = new module_10841.default();
      new module_10841.default();
      items[3] = new module_10842.default(flag2);
      new module_10842.default(flag2);
      items[4] = new module_10859.default();
      new module_10859.default();
      items[5] = new module_10845.default();
      new module_10845.default();
      items[6] = new module_10846.default(flag);
      new module_10846.default(flag);
      items[7] = new module_10848.default(flag);
      new module_10848.default(flag);
      items[8] = new module_10849.default(flag);
      new module_10849.default(flag);
      items1 = [new module_10853.default()];
      new module_10853.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10844.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10865.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10864.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10866.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10853.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10867.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10850.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

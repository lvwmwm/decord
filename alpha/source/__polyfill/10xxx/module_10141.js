// Module ID: 10141
// Function ID: 10142
// Dependencies: [41, 42, 10142, 10152, 10153, 10154, 10155, 10156, 10157, 10159, 10160, 10161, 10164, 10167, 10169, 10170, 10172, 10173, 10174, 10175, 10176, 10177, 10178, 10179, 10180]

// Module 10141
import _mod10142 from "module_10142" /* 10142 */;
import _mod10152 from "module_10152" /* 10152 */;
import _mod10153 from "module_10153" /* 10153 */;
import _mod10154 from "module_10154" /* 10154 */;
import _mod10155 from "module_10155" /* 10155 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10169 from "module_10169" /* 10169 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
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
const module_10142 = fn(_mod10142);
const module_10152 = fn(_mod10152);
const module_10153 = fn(_mod10153);
const module_10154 = fn(_mod10154);
const module_10155 = fn(_mod10155);
const module_10156 = fn(_mod10156);
const module_10157 = fn(_mod10157);
const module_10159 = fn(_mod10159);
const module_10160 = fn(_mod10160);
const module_10161 = fn(_mod10161);
const module_10164 = fn(_mod10164);
const module_10167 = fn(_mod10167);
const module_10169 = fn(_mod10169);
const module_10170 = fn(_mod10170);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const module_10174 = fn(_mod10174);
const module_10175 = fn(_mod10175);
const module_10176 = fn(_mod10176);
const module_10177 = fn(_mod10177);
const module_10178 = fn(_mod10178);
const module_10179 = fn(_mod10179);
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
    const _default = new module_10167.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10169.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10154.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10172.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10174.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10179.default();
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
      items = [new module_10173.default(flag2), , , , , , , , ];
      new module_10173.default(flag2);
      items[1] = new module_10142.default(flag);
      new module_10142.default(flag);
      items[2] = new module_10152.default();
      new module_10152.default();
      items[3] = new module_10153.default(flag2);
      new module_10153.default(flag2);
      items[4] = new module_10170.default();
      new module_10170.default();
      items[5] = new module_10156.default();
      new module_10156.default();
      items[6] = new module_10157.default(flag);
      new module_10157.default(flag);
      items[7] = new module_10159.default(flag);
      new module_10159.default(flag);
      items[8] = new module_10160.default(flag);
      new module_10160.default(flag);
      items1 = [new module_10164.default()];
      new module_10164.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10155.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10176.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10175.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10177.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10164.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10178.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10161.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

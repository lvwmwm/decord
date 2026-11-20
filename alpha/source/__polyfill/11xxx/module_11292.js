// Module ID: 11292
// Function ID: 11293
// Dependencies: [41, 42, 11293, 11303, 11304, 11305, 11306, 11307, 11308, 11310, 11311, 11312, 11315, 11318, 11320, 11321, 11323, 11324, 11325, 11326, 11327, 11328, 11329, 11330, 11331]

// Module 11292
import _mod11293 from "module_11293" /* 11293 */;
import _mod11303 from "module_11303" /* 11303 */;
import _mod11304 from "module_11304" /* 11304 */;
import _mod11305 from "module_11305" /* 11305 */;
import _mod11306 from "module_11306" /* 11306 */;
import _mod11307 from "module_11307" /* 11307 */;
import _mod11308 from "module_11308" /* 11308 */;
import _mod11310 from "module_11310" /* 11310 */;
import _mod11311 from "module_11311" /* 11311 */;
import _mod11312 from "module_11312" /* 11312 */;
import _mod11315 from "module_11315" /* 11315 */;
import _mod11318 from "module_11318" /* 11318 */;
import _mod11320 from "module_11320" /* 11320 */;
import _mod11321 from "module_11321" /* 11321 */;
import _mod11323 from "module_11323" /* 11323 */;
import _mod11324 from "module_11324" /* 11324 */;
import _mod11325 from "module_11325" /* 11325 */;
import _mod11326 from "module_11326" /* 11326 */;
import _mod11327 from "module_11327" /* 11327 */;
import _mod11328 from "module_11328" /* 11328 */;
import _mod11329 from "module_11329" /* 11329 */;
import _mod11330 from "module_11330" /* 11330 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
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
const module_11293 = fn(_mod11293);
const module_11303 = fn(_mod11303);
const module_11304 = fn(_mod11304);
const module_11305 = fn(_mod11305);
const module_11306 = fn(_mod11306);
const module_11307 = fn(_mod11307);
const module_11308 = fn(_mod11308);
const module_11310 = fn(_mod11310);
const module_11311 = fn(_mod11311);
const module_11312 = fn(_mod11312);
const module_11315 = fn(_mod11315);
const module_11318 = fn(_mod11318);
const module_11320 = fn(_mod11320);
const module_11321 = fn(_mod11321);
const module_11323 = fn(_mod11323);
const module_11324 = fn(_mod11324);
const module_11325 = fn(_mod11325);
const module_11326 = fn(_mod11326);
const module_11327 = fn(_mod11327);
const module_11328 = fn(_mod11328);
const module_11329 = fn(_mod11329);
const module_11330 = fn(_mod11330);
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
    const _default = new module_11318.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11320.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11305.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11323.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11325.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11330.default();
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
      items = [new module_11324.default(flag2), , , , , , , , ];
      new module_11324.default(flag2);
      items[1] = new module_11293.default(flag);
      new module_11293.default(flag);
      items[2] = new module_11303.default();
      new module_11303.default();
      items[3] = new module_11304.default(flag2);
      new module_11304.default(flag2);
      items[4] = new module_11321.default();
      new module_11321.default();
      items[5] = new module_11307.default();
      new module_11307.default();
      items[6] = new module_11308.default(flag);
      new module_11308.default(flag);
      items[7] = new module_11310.default(flag);
      new module_11310.default(flag);
      items[8] = new module_11311.default(flag);
      new module_11311.default(flag);
      items1 = [new module_11315.default()];
      new module_11315.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11306.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11327.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11326.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11328.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11315.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11329.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11312.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

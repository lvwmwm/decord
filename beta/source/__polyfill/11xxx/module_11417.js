// Module ID: 11417
// Function ID: 11418
// Dependencies: [41, 42, 11418, 11428, 11429, 11430, 11431, 11432, 11433, 11435, 11436, 11437, 11440, 11443, 11445, 11446, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456]

// Module 11417
import _mod11418 from "module_11418" /* 11418 */;
import _mod11428 from "module_11428" /* 11428 */;
import _mod11429 from "module_11429" /* 11429 */;
import _mod11430 from "module_11430" /* 11430 */;
import _mod11431 from "module_11431" /* 11431 */;
import _mod11432 from "module_11432" /* 11432 */;
import _mod11433 from "module_11433" /* 11433 */;
import _mod11435 from "module_11435" /* 11435 */;
import _mod11436 from "module_11436" /* 11436 */;
import _mod11437 from "module_11437" /* 11437 */;
import _mod11440 from "module_11440" /* 11440 */;
import _mod11443 from "module_11443" /* 11443 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11449 from "module_11449" /* 11449 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11451 from "module_11451" /* 11451 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
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
const module_11418 = fn(_mod11418);
const module_11428 = fn(_mod11428);
const module_11429 = fn(_mod11429);
const module_11430 = fn(_mod11430);
const module_11431 = fn(_mod11431);
const module_11432 = fn(_mod11432);
const module_11433 = fn(_mod11433);
const module_11435 = fn(_mod11435);
const module_11436 = fn(_mod11436);
const module_11437 = fn(_mod11437);
const module_11440 = fn(_mod11440);
const module_11443 = fn(_mod11443);
const module_11445 = fn(_mod11445);
const module_11446 = fn(_mod11446);
const module_11448 = fn(_mod11448);
const module_11449 = fn(_mod11449);
const module_11450 = fn(_mod11450);
const module_11451 = fn(_mod11451);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
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
    const _default = new module_11443.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_11445.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_11430.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_11448.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_11450.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_11455.default();
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
      items = [new module_11449.default(flag2), , , , , , , , ];
      new module_11449.default(flag2);
      items[1] = new module_11418.default(flag);
      new module_11418.default(flag);
      items[2] = new module_11428.default();
      new module_11428.default();
      items[3] = new module_11429.default(flag2);
      new module_11429.default(flag2);
      items[4] = new module_11446.default();
      new module_11446.default();
      items[5] = new module_11432.default();
      new module_11432.default();
      items[6] = new module_11433.default(flag);
      new module_11433.default(flag);
      items[7] = new module_11435.default(flag);
      new module_11435.default(flag);
      items[8] = new module_11436.default(flag);
      new module_11436.default(flag);
      items1 = [new module_11440.default()];
      new module_11440.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_11431.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_11452.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_11451.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_11453.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_11440.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_11454.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_11437.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

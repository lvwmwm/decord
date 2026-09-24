// Module ID: 10761
// Function ID: 10762
// Name: ENDefaultConfiguration
// Dependencies: [41, 42, 10762, 10772, 10773, 10774, 10775, 10776, 10777, 10779, 10780, 10781, 10784, 10787, 10789, 10790, 10792, 10793, 10794, 10795, 10796, 10797, 10798, 10799, 10800]

// Module 10761 (ENDefaultConfiguration)
import _mod10762 from "module_10762" /* 10762 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10773 from "module_10773" /* 10773 */;
import _mod10774 from "module_10774" /* 10774 */;
import _mod10775 from "module_10775" /* 10775 */;
import _mod10776 from "module_10776" /* 10776 */;
import _mod10777 from "module_10777" /* 10777 */;
import _mod10779 from "module_10779" /* 10779 */;
import _mod10780 from "module_10780" /* 10780 */;
import _mod10781 from "module_10781" /* 10781 */;
import _mod10784 from "module_10784" /* 10784 */;
import _mod10787 from "module_10787" /* 10787 */;
import _mod10789 from "module_10789" /* 10789 */;
import _mod10790 from "module_10790" /* 10790 */;
import _mod10792 from "module_10792" /* 10792 */;
import _mod10793 from "module_10793" /* 10793 */;
import _mod10794 from "module_10794" /* 10794 */;
import _mod10795 from "module_10795" /* 10795 */;
import _mod10796 from "module_10796" /* 10796 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10797 */;
import _mod10798 from "module_10798" /* 10798 */;
import _mod10799 from "module_10799" /* 10799 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ENDefaultConfiguration = require;
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
fn(_mod10762);
fn(_mod10772);
fn(_mod10773);
fn(_mod10774);
fn(_mod10775);
fn(_mod10776);
fn(_mod10777);
fn(_mod10779);
fn(_mod10780);
fn(_mod10781);
fn(_mod10784);
fn(_mod10787);
fn(_mod10789);
fn(_mod10790);
fn(_mod10792);
fn(_mod10793);
fn(_mod10794);
fn(_mod10795);
fn(_mod10796);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod10798);
const _isNativeReflectConstruct = fn(_mod10799);
class ENDefaultConfiguration {
  constructor() {
    tmp = c2(this, ENDefaultConfiguration);
    return;
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
    parsers.push(new _isNativeReflectConstruct.default());
    const parsers1 = configuration.parsers;
    const _default = new _isNativeReflectConstruct.default();
    parsers1.push(new _isNativeReflectConstruct.default());
    const parsers2 = configuration.parsers;
    const _default1 = new _isNativeReflectConstruct.default();
    parsers2.push(new _isNativeReflectConstruct.default());
    const parsers3 = configuration.parsers;
    const _default2 = new _isNativeReflectConstruct.default();
    parsers3.push(new _isNativeReflectConstruct.default());
    const parsers4 = configuration.parsers;
    const _default3 = new _isNativeReflectConstruct.default();
    parsers4.push(new _isNativeReflectConstruct.default());
    const refiners = configuration.refiners;
    const _default4 = new _isNativeReflectConstruct.default();
    refiners.push(new _isNativeReflectConstruct.default());
    return configuration;
  }
};
let items = [
  entry,
  {
    key: "createConfiguration",
    value: function createConfiguration(flag) {
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = arg1;
      if (arg1 === undefined) {
        flag2 = false;
      }
      const obj = { parsers: null, refiners: null };
      const items = [new regExp.default(flag2), , , , , , , , ];
      const _default = new regExp.default(flag2);
      items[1] = new _isNativeReflectConstruct.default(flag);
      const _default1 = new _isNativeReflectConstruct.default(flag);
      items[2] = new _isNativeReflectConstruct.default();
      const _default2 = new _isNativeReflectConstruct.default();
      items[3] = new _isNativeReflectConstruct.default(flag2);
      const _default3 = new _isNativeReflectConstruct.default(flag2);
      items[4] = new _isNativeReflectConstruct.default();
      const _default4 = new _isNativeReflectConstruct.default();
      items[5] = new _isNativeReflectConstruct.default();
      const _default5 = new _isNativeReflectConstruct.default();
      items[6] = new _isNativeReflectConstruct.default(flag);
      const _default6 = new _isNativeReflectConstruct.default(flag);
      items[7] = new _isNativeReflectConstruct.default(flag);
      const _default7 = new _isNativeReflectConstruct.default(flag);
      items[8] = new _isNativeReflectConstruct.default(flag);
      obj.parsers = items;
      const _default8 = new _isNativeReflectConstruct.default(flag);
      const items1 = [new _isNativeReflectConstruct.default()];
      obj.refiners = items1;
      const result = ENDefaultConfiguration(10800).includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const _default9 = new _isNativeReflectConstruct.default();
      parsers.unshift(new _isNativeReflectConstruct.default(flag));
      const refiners = result.refiners;
      const _default10 = new _isNativeReflectConstruct.default(flag);
      refiners.unshift(new _isNativeReflectConstruct.default());
      const refiners1 = result.refiners;
      const _default11 = new _isNativeReflectConstruct.default();
      refiners1.unshift(new _isNativeReflectConstruct.default());
      const refiners2 = result.refiners;
      const _default12 = new _isNativeReflectConstruct.default();
      refiners2.unshift(new OverlapRemovalRefiner.default());
      const refiners3 = result.refiners;
      const _default13 = new OverlapRemovalRefiner.default();
      refiners3.push(new _isNativeReflectConstruct.default());
      const refiners4 = result.refiners;
      const _default14 = new _isNativeReflectConstruct.default();
      refiners4.push(new regExp.default());
      const refiners5 = result.refiners;
      const _default15 = new regExp.default();
      refiners5.push(new _isNativeReflectConstruct.default());
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

// Module ID: 10725
// Function ID: 10726
// Name: ENDefaultConfiguration
// Dependencies: [41, 42, 10726, 10736, 10737, 10738, 10739, 10740, 10741, 10743, 10744, 10745, 10748, 10751, 10753, 10754, 10756, 10757, 10758, 10759, 10760, 10761, 10762, 10763, 10764]

// Module 10725 (ENDefaultConfiguration)
import _mod10726 from "module_10726" /* 10726 */;
import _mod10736 from "module_10736" /* 10736 */;
import _mod10737 from "module_10737" /* 10737 */;
import _mod10738 from "module_10738" /* 10738 */;
import _mod10739 from "module_10739" /* 10739 */;
import _mod10740 from "module_10740" /* 10740 */;
import _mod10741 from "module_10741" /* 10741 */;
import _mod10743 from "module_10743" /* 10743 */;
import _mod10744 from "module_10744" /* 10744 */;
import _mod10745 from "module_10745" /* 10745 */;
import _mod10748 from "module_10748" /* 10748 */;
import _mod10751 from "module_10751" /* 10751 */;
import _mod10753 from "module_10753" /* 10753 */;
import _mod10754 from "module_10754" /* 10754 */;
import _mod10756 from "module_10756" /* 10756 */;
import _mod10757 from "module_10757" /* 10757 */;
import _mod10758 from "module_10758" /* 10758 */;
import _mod10759 from "module_10759" /* 10759 */;
import _mod10760 from "module_10760" /* 10760 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10761 */;
import _mod10762 from "module_10762" /* 10762 */;
import _mod10763 from "module_10763" /* 10763 */;
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
fn(_mod10726);
fn(_mod10736);
fn(_mod10737);
fn(_mod10738);
fn(_mod10739);
fn(_mod10740);
fn(_mod10741);
fn(_mod10743);
fn(_mod10744);
fn(_mod10745);
fn(_mod10748);
fn(_mod10751);
fn(_mod10753);
fn(_mod10754);
fn(_mod10756);
fn(_mod10757);
fn(_mod10758);
fn(_mod10759);
fn(_mod10760);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod10762);
const _isNativeReflectConstruct = fn(_mod10763);
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
      const result = ENDefaultConfiguration(10764).includeCommonConfiguration(obj, flag);
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

// Module ID: 9929
// Function ID: 9930
// Dependencies: [41, 42, 9930, 9940, 9941, 9942, 9943, 9944, 9945, 9947, 9948, 9949, 9952, 9955, 9957, 9958, 9960, 9961, 9962, 9963, 9964, 9965, 9966, 9967, 9968]

// Module 9929
import _mod9930 from "module_9930" /* 9930 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import _mod9942 from "module_9942" /* 9942 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9945 from "module_9945" /* 9945 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9957 from "module_9957" /* 9957 */;
import _mod9958 from "module_9958" /* 9958 */;
import _mod9960 from "module_9960" /* 9960 */;
import _mod9961 from "module_9961" /* 9961 */;
import _mod9962 from "module_9962" /* 9962 */;
import _mod9963 from "module_9963" /* 9963 */;
import _mod9964 from "module_9964" /* 9964 */;
import _mod9965 from "module_9965" /* 9965 */;
import _mod9966 from "module_9966" /* 9966 */;
import _mod9967 from "module_9967" /* 9967 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
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
const module_9930 = fn(_mod9930);
const module_9940 = fn(_mod9940);
const module_9941 = fn(_mod9941);
const module_9942 = fn(_mod9942);
const module_9943 = fn(_mod9943);
const module_9944 = fn(_mod9944);
const module_9945 = fn(_mod9945);
const module_9947 = fn(_mod9947);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const module_9952 = fn(_mod9952);
const module_9955 = fn(_mod9955);
const module_9957 = fn(_mod9957);
const module_9958 = fn(_mod9958);
const module_9960 = fn(_mod9960);
const module_9961 = fn(_mod9961);
const module_9962 = fn(_mod9962);
const module_9963 = fn(_mod9963);
const module_9964 = fn(_mod9964);
const module_9965 = fn(_mod9965);
const module_9966 = fn(_mod9966);
const module_9967 = fn(_mod9967);
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
    const _default = new module_9955.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_9957.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_9942.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_9960.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_9962.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_9967.default();
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
      items = [new module_9961.default(flag2), , , , , , , , ];
      new module_9961.default(flag2);
      items[1] = new module_9930.default(flag);
      new module_9930.default(flag);
      items[2] = new module_9940.default();
      new module_9940.default();
      items[3] = new module_9941.default(flag2);
      new module_9941.default(flag2);
      items[4] = new module_9958.default();
      new module_9958.default();
      items[5] = new module_9944.default();
      new module_9944.default();
      items[6] = new module_9945.default(flag);
      new module_9945.default(flag);
      items[7] = new module_9947.default(flag);
      new module_9947.default(flag);
      items[8] = new module_9948.default(flag);
      new module_9948.default(flag);
      items1 = [new module_9952.default()];
      new module_9952.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_9943.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_9964.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_9963.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_9965.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_9952.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_9966.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_9949.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);

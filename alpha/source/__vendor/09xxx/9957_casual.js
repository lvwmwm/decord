// Module ID: 9957
// Function ID: 9958
// Name: casual
// Dependencies: [9958, 9960, 9961, 9962, 9963, 9964, 9965, 9966, 9967, 9968, 9969, 9970, 9971, 9972, 9973, 9819, 9974, 9975, 9786, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9957 (casual)
import _mod9786 from "module_9786" /* 9786 */;
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9958 from "module_9958" /* 9958 */;
import _mod9960 from "module_9960" /* 9960 */;
import _mod9961 from "module_9961" /* 9961 */;
import _mod9962 from "module_9962" /* 9962 */;
import _mod9963 from "module_9963" /* 9963 */;
import _mod9964 from "module_9964" /* 9964 */;
import _mod9965 from "module_9965" /* 9965 */;
import _mod9966 from "module_9966" /* 9966 */;
import _mod9967 from "module_9967" /* 9967 */;
import _mod9968 from "module_9968" /* 9968 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod9971 from "module_9971" /* 9971 */;
import _mod9972 from "module_9972" /* 9972 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod9974 from "module_9974" /* 9974 */;
import _mod9975 from "module_9975" /* 9975 */;

function createConfiguration(flag, arg1) {
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
  items = [new module_9819.default(flag2), , , , , , , , , ];
  new module_9819.default(flag2);
  items[1] = new module_9958.default();
  new module_9958.default();
  items[2] = new module_9960.default();
  new module_9960.default();
  items[3] = new module_9961.default();
  new module_9961.default();
  items[4] = new module_9972.default();
  new module_9972.default();
  items[5] = new module_9963.default();
  new module_9963.default();
  items[6] = new module_9964.default();
  new module_9964.default();
  items[7] = new module_9965.default(flag);
  new module_9965.default(flag);
  items[8] = new module_9966.default(flag);
  new module_9966.default(flag);
  items[9] = new module_9967.default(flag);
  new module_9967.default(flag);
  items1 = [new module_9975.default(), , ];
  new module_9975.default();
  items1[1] = new module_9969.default();
  new module_9969.default();
  items1[2] = new module_9968.default();
  new module_9968.default();
  return includeCommonConfiguration(obj, flag);
}
const fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
function createCasualConfiguration() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9970.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9971.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9962.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9973.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9974.default();
  unshift5(_default4);
  return tmp;
}
const module_9958 = fn(_mod9958);
const module_9960 = fn(_mod9960);
const module_9961 = fn(_mod9961);
const module_9962 = fn(_mod9962);
const module_9963 = fn(_mod9963);
const module_9964 = fn(_mod9964);
const module_9965 = fn(_mod9965);
const module_9966 = fn(_mod9966);
const module_9967 = fn(_mod9967);
const module_9968 = fn(_mod9968);
const module_9969 = fn(_mod9969);
const module_9970 = fn(_mod9970);
const module_9971 = fn(_mod9971);
const module_9972 = fn(_mod9972);
const module_9973 = fn(_mod9973);
const module_9819 = fn(_mod9819);
const module_9974 = fn(_mod9974);
const module_9975 = fn(_mod9975);
const Chrono = _mod9786.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9970.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9971.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9962.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9973.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9974.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9786.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9786.Chrono(createConfiguration(false, true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;

// Module ID: 10232
// Function ID: 10233
// Dependencies: [10140, 10147, 10149, 10233, 10234, 10235, 10236, 10173, 10237, 10239, 10240, 10241, 10242, 10243, 10244, 10245, 10246, 10247, 10248, 10249, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10232
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10235 from "module_10235" /* 10235 */;
import _mod10236 from "module_10236" /* 10236 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10239 from "module_10239" /* 10239 */;
import _mod10240 from "module_10240" /* 10240 */;
import _mod10241 from "module_10241" /* 10241 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import _mod10247 from "module_10247" /* 10247 */;
import _mod10248 from "module_10248" /* 10248 */;
import _mod10249 from "module_10249" /* 10249 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10173.default(flag2), , , , , , , , , ];
  new module_10173.default(flag2);
  items[1] = new module_10237.default();
  new module_10237.default();
  items[2] = new module_10240.default();
  new module_10240.default();
  items[3] = new module_10241.default();
  new module_10241.default();
  items[4] = new module_10239.default();
  new module_10239.default();
  items[5] = new module_10244.default();
  new module_10244.default();
  items[6] = new module_10242.default();
  new module_10242.default();
  items[7] = new module_10243.default(flag);
  new module_10243.default(flag);
  items[8] = new module_10248.default(flag);
  new module_10248.default(flag);
  items[9] = new module_10249.default(flag);
  new module_10249.default(flag);
  items1 = [new module_10234.default(), ];
  new module_10234.default();
  items1[1] = new module_10233.default();
  new module_10233.default();
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
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10235.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10236.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10245.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10241.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10247.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10246.default();
  unshift6(_default5);
  return tmp;
}
const module_10233 = fn(_mod10233);
const module_10234 = fn(_mod10234);
const module_10235 = fn(_mod10235);
const module_10236 = fn(_mod10236);
const module_10173 = fn(_mod10173);
const module_10237 = fn(_mod10237);
const module_10239 = fn(_mod10239);
const module_10240 = fn(_mod10240);
const module_10241 = fn(_mod10241);
const module_10242 = fn(_mod10242);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const module_10247 = fn(_mod10247);
const module_10248 = fn(_mod10248);
const module_10249 = fn(_mod10249);
const chrono = new require("module_10140").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10140").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;

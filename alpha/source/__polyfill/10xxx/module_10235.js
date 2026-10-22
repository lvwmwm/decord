// Module ID: 10235
// Function ID: 10236
// Dependencies: [10188, 10195, 10197, 10221, 10233, 10236, 10237, 10239, 10240, 10241, 10242, 10243, 10244, 10245, 10246, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10235
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10233 from "module_10233" /* 10233 */;
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
import { Chrono } from "module_10188" /* 10188 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
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
  items = [new module_10233.default(), , , , , , ];
  new module_10233.default();
  items[1] = new module_10221.default(flag2);
  new module_10221.default(flag2);
  items[2] = new module_10236.default();
  new module_10236.default();
  items[3] = new module_10239.default();
  new module_10239.default();
  items[4] = new module_10244.default();
  new module_10244.default();
  items[5] = new module_10237.default();
  new module_10237.default();
  items[6] = new module_10246.default();
  new module_10246.default();
  items1 = [new module_10240.default(), ];
  new module_10240.default();
  items1[1] = new module_10241.default();
  new module_10241.default();
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
  const _default = new module_10243.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10242.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10245.default();
  unshift3(_default2);
  return tmp;
}
const module_10221 = fn(_mod10221);
const module_10233 = fn(_mod10233);
const module_10236 = fn(_mod10236);
const module_10237 = fn(_mod10237);
const module_10239 = fn(_mod10239);
const module_10240 = fn(_mod10240);
const module_10241 = fn(_mod10241);
const module_10242 = fn(_mod10242);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10243.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10242.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10245.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10188").Chrono(createConfiguration(true));
const Chrono_export = require("module_10188").Chrono;

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
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;

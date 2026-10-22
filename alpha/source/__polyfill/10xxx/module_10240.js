// Module ID: 10240
// Function ID: 10241
// Dependencies: [10181, 10188, 10190, 10241, 10242, 10214, 10243, 10244, 10245, 10246, 10248, 10249, 10250, 10251, 10252, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10240
import _mod10214 from "module_10214" /* 10214 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10241 from "module_10241" /* 10241 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import _mod10248 from "module_10248" /* 10248 */;
import _mod10249 from "module_10249" /* 10249 */;
import _mod10250 from "module_10250" /* 10250 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10252 from "module_10252" /* 10252 */;
import { Chrono } from "module_10181" /* 10181 */;

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
  items = [new module_10214.default(flag2), , , , , , ];
  new module_10214.default(flag2);
  items[1] = new module_10249.default();
  new module_10249.default();
  items[2] = new module_10243.default();
  new module_10243.default();
  items[3] = new module_10248.default();
  new module_10248.default();
  items[4] = new module_10250.default();
  new module_10250.default();
  items[5] = new module_10251.default();
  new module_10251.default();
  items[6] = new module_10246.default();
  new module_10246.default();
  items1 = [new module_10244.default(), ];
  new module_10244.default();
  items1[1] = new module_10245.default();
  new module_10245.default();
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
  const _default = new module_10241.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10242.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10252.default();
  unshift3(_default2);
  return tmp;
}
const module_10241 = fn(_mod10241);
const module_10242 = fn(_mod10242);
const module_10214 = fn(_mod10214);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const module_10248 = fn(_mod10248);
const module_10249 = fn(_mod10249);
const module_10250 = fn(_mod10250);
const module_10251 = fn(_mod10251);
const module_10252 = fn(_mod10252);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10241.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10242.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10252.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10181").Chrono(createConfiguration(true));
const Chrono_export = require("module_10181").Chrono;

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

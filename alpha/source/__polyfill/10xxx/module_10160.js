// Module ID: 10160
// Function ID: 10161
// Dependencies: [10076, 10034, 10041, 10043, 10151, 10152, 10154, 10155, 10156, 10157, 10158, 10159, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10160
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10151 from "module_10151" /* 10151 */;
import _mod10152 from "module_10152" /* 10152 */;
import _mod10154 from "module_10154" /* 10154 */;
import _mod10155 from "module_10155" /* 10155 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10152.default(), , , , ];
  new module_10152.default();
  items[1] = new module_10155.default();
  new module_10155.default();
  items[2] = new module_10157.default();
  new module_10157.default();
  items[3] = new module_10156.default();
  new module_10156.default();
  items[4] = new module_10154.default();
  new module_10154.default();
  items1 = [new module_10158.default(), ];
  new module_10158.default();
  items1[1] = new module_10159.default();
  new module_10159.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10076.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10151.default();
  unshift(_default);
  return tmp;
}
const module_10076 = fn(_mod10076);
const module_10151 = fn(_mod10151);
const module_10152 = fn(_mod10152);
const module_10154 = fn(_mod10154);
const module_10155 = fn(_mod10155);
const module_10156 = fn(_mod10156);
const module_10157 = fn(_mod10157);
const module_10158 = fn(_mod10158);
const module_10159 = fn(_mod10159);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10151.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10151.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10034").Chrono(createConfiguration());
const Chrono_export = require("module_10034").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;

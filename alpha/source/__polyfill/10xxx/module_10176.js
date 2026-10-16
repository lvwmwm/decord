// Module ID: 10176
// Function ID: 10177
// Dependencies: [10092, 10050, 10057, 10059, 10167, 10168, 10170, 10171, 10172, 10173, 10174, 10175, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10176
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10092 from "module_10092" /* 10092 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import { Chrono } from "module_10050" /* 10050 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10168.default(), , , , ];
  new module_10168.default();
  items[1] = new module_10171.default();
  new module_10171.default();
  items[2] = new module_10173.default();
  new module_10173.default();
  items[3] = new module_10172.default();
  new module_10172.default();
  items[4] = new module_10170.default();
  new module_10170.default();
  items1 = [new module_10174.default(), ];
  new module_10174.default();
  items1[1] = new module_10175.default();
  new module_10175.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10092.default));
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
  const _default = new module_10167.default();
  unshift(_default);
  return tmp;
}
const module_10092 = fn(_mod10092);
const module_10167 = fn(_mod10167);
const module_10168 = fn(_mod10168);
const module_10170 = fn(_mod10170);
const module_10171 = fn(_mod10171);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const module_10174 = fn(_mod10174);
const module_10175 = fn(_mod10175);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10167.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10167.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10050").Chrono(createConfiguration());
const Chrono_export = require("module_10050").Chrono;

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

// Module ID: 10449
// Function ID: 10450
// Dependencies: [10365, 10323, 10330, 10332, 10440, 10441, 10443, 10444, 10445, 10446, 10447, 10448, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10449
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10440 from "module_10440" /* 10440 */;
import _mod10441 from "module_10441" /* 10441 */;
import _mod10443 from "module_10443" /* 10443 */;
import _mod10444 from "module_10444" /* 10444 */;
import _mod10445 from "module_10445" /* 10445 */;
import _mod10446 from "module_10446" /* 10446 */;
import _mod10447 from "module_10447" /* 10447 */;
import _mod10448 from "module_10448" /* 10448 */;
import { Chrono } from "module_10323" /* 10323 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10441.default(), , , , ];
  new module_10441.default();
  items[1] = new module_10444.default();
  new module_10444.default();
  items[2] = new module_10446.default();
  new module_10446.default();
  items[3] = new module_10445.default();
  new module_10445.default();
  items[4] = new module_10443.default();
  new module_10443.default();
  items1 = [new module_10447.default(), ];
  new module_10447.default();
  items1[1] = new module_10448.default();
  new module_10448.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10365.default));
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
  const _default = new module_10440.default();
  unshift(_default);
  return tmp;
}
const module_10365 = fn(_mod10365);
const module_10440 = fn(_mod10440);
const module_10441 = fn(_mod10441);
const module_10443 = fn(_mod10443);
const module_10444 = fn(_mod10444);
const module_10445 = fn(_mod10445);
const module_10446 = fn(_mod10446);
const module_10447 = fn(_mod10447);
const module_10448 = fn(_mod10448);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10440.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10440.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10323").Chrono(createConfiguration());
const Chrono_export = require("module_10323").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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

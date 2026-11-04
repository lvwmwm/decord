// Module ID: 10628
// Function ID: 10629
// Dependencies: [10543, 10501, 10508, 10510, 10629, 10612, 10614, 10615, 10616, 10617, 10630, 10631, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10628
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10615 from "module_10615" /* 10615 */;
import _mod10616 from "module_10616" /* 10616 */;
import _mod10617 from "module_10617" /* 10617 */;
import _mod10629 from "module_10629" /* 10629 */;
import _mod10630 from "module_10630" /* 10630 */;
import _mod10631 from "module_10631" /* 10631 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10612.default(), , , , ];
  new module_10612.default();
  items[1] = new module_10615.default();
  new module_10615.default();
  items[2] = new module_10617.default();
  new module_10617.default();
  items[3] = new module_10616.default();
  new module_10616.default();
  items[4] = new module_10614.default();
  new module_10614.default();
  items1 = [new module_10630.default(), ];
  new module_10630.default();
  items1[1] = new module_10631.default();
  new module_10631.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10543.default));
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
  const _default = new module_10629.default();
  unshift(_default);
  return tmp;
}
const module_10543 = fn(_mod10543);
const module_10629 = fn(_mod10629);
const module_10612 = fn(_mod10612);
const module_10614 = fn(_mod10614);
const module_10615 = fn(_mod10615);
const module_10616 = fn(_mod10616);
const module_10617 = fn(_mod10617);
const module_10630 = fn(_mod10630);
const module_10631 = fn(_mod10631);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10629.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10629.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10501").Chrono(createConfiguration());
const Chrono_export = require("module_10501").Chrono;

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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;

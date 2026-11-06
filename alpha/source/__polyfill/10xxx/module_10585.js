// Module ID: 10585
// Function ID: 10586
// Dependencies: [10501, 10459, 10466, 10468, 10576, 10577, 10579, 10580, 10581, 10582, 10583, 10584, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10585
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import _mod10584 from "module_10584" /* 10584 */;
import { Chrono } from "module_10459" /* 10459 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10577.default(), , , , ];
  new module_10577.default();
  items[1] = new module_10580.default();
  new module_10580.default();
  items[2] = new module_10582.default();
  new module_10582.default();
  items[3] = new module_10581.default();
  new module_10581.default();
  items[4] = new module_10579.default();
  new module_10579.default();
  items1 = [new module_10583.default(), ];
  new module_10583.default();
  items1[1] = new module_10584.default();
  new module_10584.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10501.default));
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
  const _default = new module_10576.default();
  unshift(_default);
  return tmp;
}
const module_10501 = fn(_mod10501);
const module_10576 = fn(_mod10576);
const module_10577 = fn(_mod10577);
const module_10579 = fn(_mod10579);
const module_10580 = fn(_mod10580);
const module_10581 = fn(_mod10581);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const module_10584 = fn(_mod10584);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10576.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10576.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10459").Chrono(createConfiguration());
const Chrono_export = require("module_10459").Chrono;

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

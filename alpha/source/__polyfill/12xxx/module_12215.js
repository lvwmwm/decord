// Module ID: 12215
// Function ID: 12216
// Dependencies: [12131, 12089, 12096, 12098, 12206, 12207, 12209, 12210, 12211, 12212, 12213, 12214, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12215
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12131 from "module_12131" /* 12131 */;
import _mod12206 from "module_12206" /* 12206 */;
import _mod12207 from "module_12207" /* 12207 */;
import _mod12209 from "module_12209" /* 12209 */;
import _mod12210 from "module_12210" /* 12210 */;
import _mod12211 from "module_12211" /* 12211 */;
import _mod12212 from "module_12212" /* 12212 */;
import _mod12213 from "module_12213" /* 12213 */;
import _mod12214 from "module_12214" /* 12214 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12207.default(), , , , ];
  new module_12207.default();
  items[1] = new module_12210.default();
  new module_12210.default();
  items[2] = new module_12212.default();
  new module_12212.default();
  items[3] = new module_12211.default();
  new module_12211.default();
  items[4] = new module_12209.default();
  new module_12209.default();
  items1 = [new module_12213.default(), ];
  new module_12213.default();
  items1[1] = new module_12214.default();
  new module_12214.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_12131.default));
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
  const _default = new module_12206.default();
  unshift(_default);
  return tmp;
}
const module_12131 = fn(_mod12131);
const module_12206 = fn(_mod12206);
const module_12207 = fn(_mod12207);
const module_12209 = fn(_mod12209);
const module_12210 = fn(_mod12210);
const module_12211 = fn(_mod12211);
const module_12212 = fn(_mod12212);
const module_12213 = fn(_mod12213);
const module_12214 = fn(_mod12214);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12206.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_12206.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_12089").Chrono(createConfiguration());
const Chrono_export = require("module_12089").Chrono;

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

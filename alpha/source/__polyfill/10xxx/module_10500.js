// Module ID: 10500
// Function ID: 10501
// Dependencies: [10453, 10460, 10462, 10486, 10498, 10501, 10502, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10511, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10500
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import { Chrono } from "module_10453" /* 10453 */;

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
  items = [new module_10498.default(), , , , , , ];
  new module_10498.default();
  items[1] = new module_10486.default(flag2);
  new module_10486.default(flag2);
  items[2] = new module_10501.default();
  new module_10501.default();
  items[3] = new module_10504.default();
  new module_10504.default();
  items[4] = new module_10509.default();
  new module_10509.default();
  items[5] = new module_10502.default();
  new module_10502.default();
  items[6] = new module_10511.default();
  new module_10511.default();
  items1 = [new module_10505.default(), ];
  new module_10505.default();
  items1[1] = new module_10506.default();
  new module_10506.default();
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
  const _default = new module_10508.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10507.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10510.default();
  unshift3(_default2);
  return tmp;
}
const module_10486 = fn(_mod10486);
const module_10498 = fn(_mod10498);
const module_10501 = fn(_mod10501);
const module_10502 = fn(_mod10502);
const module_10504 = fn(_mod10504);
const module_10505 = fn(_mod10505);
const module_10506 = fn(_mod10506);
const module_10507 = fn(_mod10507);
const module_10508 = fn(_mod10508);
const module_10509 = fn(_mod10509);
const module_10510 = fn(_mod10510);
const module_10511 = fn(_mod10511);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10508.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10507.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10510.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
export const casual = chrono;
export const strict = chrono1;

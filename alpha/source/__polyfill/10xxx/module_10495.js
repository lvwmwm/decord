// Module ID: 10495
// Function ID: 10496
// Dependencies: [10448, 10455, 10457, 10481, 10493, 10496, 10497, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10495
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;
import { Chrono } from "module_10448" /* 10448 */;

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
  items = [new module_10493.default(), , , , , , ];
  new module_10493.default();
  items[1] = new module_10481.default(flag2);
  new module_10481.default(flag2);
  items[2] = new module_10496.default();
  new module_10496.default();
  items[3] = new module_10499.default();
  new module_10499.default();
  items[4] = new module_10504.default();
  new module_10504.default();
  items[5] = new module_10497.default();
  new module_10497.default();
  items[6] = new module_10506.default();
  new module_10506.default();
  items1 = [new module_10500.default(), ];
  new module_10500.default();
  items1[1] = new module_10501.default();
  new module_10501.default();
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
  const _default = new module_10503.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10502.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10505.default();
  unshift3(_default2);
  return tmp;
}
const module_10481 = fn(_mod10481);
const module_10493 = fn(_mod10493);
const module_10496 = fn(_mod10496);
const module_10497 = fn(_mod10497);
const module_10499 = fn(_mod10499);
const module_10500 = fn(_mod10500);
const module_10501 = fn(_mod10501);
const module_10502 = fn(_mod10502);
const module_10503 = fn(_mod10503);
const module_10504 = fn(_mod10504);
const module_10505 = fn(_mod10505);
const module_10506 = fn(_mod10506);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10503.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10502.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10505.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10448").Chrono(createConfiguration(true));
const Chrono_export = require("module_10448").Chrono;

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

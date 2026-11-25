// Module ID: 10921
// Function ID: 10922
// Dependencies: [10829, 10836, 10838, 10922, 10923, 10924, 10925, 10862, 10926, 10928, 10929, 10930, 10931, 10932, 10933, 10934, 10935, 10936, 10937, 10938, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10921
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10922 from "module_10922" /* 10922 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10925 from "module_10925" /* 10925 */;
import _mod10926 from "module_10926" /* 10926 */;
import _mod10928 from "module_10928" /* 10928 */;
import _mod10929 from "module_10929" /* 10929 */;
import _mod10930 from "module_10930" /* 10930 */;
import _mod10931 from "module_10931" /* 10931 */;
import _mod10932 from "module_10932" /* 10932 */;
import _mod10933 from "module_10933" /* 10933 */;
import _mod10934 from "module_10934" /* 10934 */;
import _mod10935 from "module_10935" /* 10935 */;
import _mod10936 from "module_10936" /* 10936 */;
import _mod10937 from "module_10937" /* 10937 */;
import _mod10938 from "module_10938" /* 10938 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_10862.default(flag2), , , , , , , , , ];
  new module_10862.default(flag2);
  items[1] = new module_10926.default();
  new module_10926.default();
  items[2] = new module_10929.default();
  new module_10929.default();
  items[3] = new module_10930.default();
  new module_10930.default();
  items[4] = new module_10928.default();
  new module_10928.default();
  items[5] = new module_10933.default();
  new module_10933.default();
  items[6] = new module_10931.default();
  new module_10931.default();
  items[7] = new module_10932.default(flag);
  new module_10932.default(flag);
  items[8] = new module_10937.default(flag);
  new module_10937.default(flag);
  items[9] = new module_10938.default(flag);
  new module_10938.default(flag);
  items1 = [new module_10923.default(), ];
  new module_10923.default();
  items1[1] = new module_10922.default();
  new module_10922.default();
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
  const _default = new module_10924.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10925.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10934.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10930.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10936.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10935.default();
  unshift6(_default5);
  return tmp;
}
const module_10922 = fn(_mod10922);
const module_10923 = fn(_mod10923);
const module_10924 = fn(_mod10924);
const module_10925 = fn(_mod10925);
const module_10862 = fn(_mod10862);
const module_10926 = fn(_mod10926);
const module_10928 = fn(_mod10928);
const module_10929 = fn(_mod10929);
const module_10930 = fn(_mod10930);
const module_10931 = fn(_mod10931);
const module_10932 = fn(_mod10932);
const module_10933 = fn(_mod10933);
const module_10934 = fn(_mod10934);
const module_10935 = fn(_mod10935);
const module_10936 = fn(_mod10936);
const module_10937 = fn(_mod10937);
const module_10938 = fn(_mod10938);
const chrono = new require("module_10829").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10829").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;

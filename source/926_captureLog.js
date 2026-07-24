// Module ID: 926
// Function ID: 10088
// Name: captureLog
// Dependencies: [856, 877]
// Exports: debug, error, fatal, info, trace, warn

// Module 926 (captureLog)
function captureLog(level, message, attributes) {
  let obj = require(856) /* setLogAttribute */;
  obj = { level, message, attributes, severityNumber: undefined };
  obj._INTERNAL_captureLog(obj, arg3);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = require("parameterize").fmt;
export const debug = function debug(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("debug", arg0, arg1, {}.scope);
  }
};
export const error = function error(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("error", arg0, arg1, {}.scope);
  }
};
export const fatal = function fatal(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("fatal", arg0, arg1, {}.scope);
  }
};
export const info = function info(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("info", arg0, arg1, {}.scope);
  }
};
export const trace = function trace(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("trace", arg0, arg1, {}.scope);
  }
};
export const warn = function warn(arg0, arg1) {
  if (arguments.length > 2) {
    tmp("warn", arg0, arg1, {}.scope);
  }
};

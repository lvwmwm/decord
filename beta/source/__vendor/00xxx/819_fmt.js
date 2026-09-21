// Module ID: 819
// Function ID: 820
// Name: fmt
// Dependencies: [749, 770]
// Exports: debug, error, fatal, info, trace, warn

// Module 819 (fmt)
import _INTERNAL_captureSerializedLog from "_INTERNAL_captureSerializedLog" /* 749 */;
import parameterize from "parameterize" /* 770 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize.fmt;
export const debug = function debug(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "debug", message, attributes, severityNumber: "applicationId" }, obj.scope);
};
export const error = function error(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "error", message, attributes, severityNumber: "IconComponent" }, obj.scope);
};
export const fatal = function fatal(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "fatal", message, attributes, severityNumber: "e" }, obj.scope);
};
export const info = function info(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "info", message, attributes, severityNumber: "applicationId" }, obj.scope);
};
export const trace = function trace(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "trace", message, attributes, severityNumber: "applicationId" }, obj.scope);
};
export const warn = function warn(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "warn", message, attributes, severityNumber: "concat" }, obj.scope);
};

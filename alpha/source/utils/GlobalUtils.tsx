// Module ID: 1385
// Function ID: 1386
// Name: GlobalUtils
// Dependencies: [2]
// Exports: assertNever, getDevTunnelHostname, isDiscordBackendDevelopment, isDiscordFrontendDevelopment, isIn, isInSet, isNotNullish, isObjectEntryNotNullish

// Module 1385 (GlobalUtils)
import size from "module_2" /* 2 */;

let closure_0 = "development" === window.GLOBAL_ENV.PROJECT_ENV;
const result = size.fileFinishedImporting("utils/GlobalUtils.tsx");

export function isDiscordFrontendDevelopment() {
  return false;
}
export function isDiscordBackendDevelopment() {
  return closure_0;
}
export function getDevTunnelHostname() {
  return null;
}
export function assertNever(arg0) {
  const error = new Error("Unhandled value: " + arg0);
  throw error;
}
export function isNotNullish(channel) {
  return null != channel;
}
export function isIn(arg0, arr) {
  return arr.includes(arg0);
}
export function isInSet(type, set) {
  return set.has(type);
}
export function isObjectEntryNotNullish(arg0) {
  return null != arg0[1];
}

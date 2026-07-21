// Module ID: 6651
// Function ID: 51062
// Name: items
// Dependencies: []
// Exports: getIsPaymentsBlocked, useBlockedPaymentsConfig, useIsPaymentsBlocked

// Module 6651 (items)
const _module = require(dependencyMap[0]);
let obj = { y: "r", createBackgroundHighlight: "usePerksCoachmarkDCF", y: "cursorSpine", defaultConfig: { paymentsBlocked: false } };
obj = { -1174339580: 0.285, -1169096700: "GREEN_NEW_65", config: { paymentsBlocked: true } };
const items = [obj];
obj.treatments = items;
let closure_2 = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const obj1 = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_3 = _module1.createApexExperiment(obj1);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = function useBlockedPaymentsConfig() {
  let enabled = closure_2.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.useConfig({ location: "c519a9_1" }).enabled;
  }
  if (!enabled) {
    enabled = "RU" === importDefault(dependencyMap[2])().defaultBillingCountryCode;
  }
  return enabled;
};
export const useIsPaymentsBlocked = function useIsPaymentsBlocked() {
  let enabled = closure_2.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.useConfig({ location: "dc120b_3" }).enabled;
  }
  return enabled;
};
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  let enabled = closure_2.getCurrentConfig({ location: "1ee357_1" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.getConfig({ location: "1ee357_1" }).enabled;
  }
  return enabled;
};

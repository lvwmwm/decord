// Module ID: 6656
// Function ID: 51121
// Name: items
// Dependencies: [4042, 1428, 6657, 2]
// Exports: getIsPaymentsBlocked, useBlockedPaymentsConfig, useIsPaymentsBlocked

// Module 6656 (items)
import createExperiment from "createExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { kind: "user", id: "2022-03_block_russian_purchases", label: "Block purchases based on country", defaultConfig: { paymentsBlocked: false } };
obj = { id: 1, label: "Payments Blocked", config: { paymentsBlocked: true } };
const items = [obj];
obj.treatments = items;
let closure_2 = createExperiment.createExperiment(obj);
const obj1 = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_3 = ApexExperiment.createApexExperiment(obj1);
const result = require("useGeoForUser").fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = function useBlockedPaymentsConfig() {
  let enabled = closure_2.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.useConfig({ location: "c519a9_1" }).enabled;
  }
  if (!enabled) {
    enabled = "RU" === importDefault(6657)().defaultBillingCountryCode;
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

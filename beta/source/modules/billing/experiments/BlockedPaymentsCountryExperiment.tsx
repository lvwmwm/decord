// Module ID: 6837
// Function ID: 6838
// Name: BlockedPaymentsCountryExperiment
// Dependencies: [1435, 6838, 2]
// Exports: getIsPaymentsBlocked, useBlockedPaymentsConfig, useIsPaymentsBlocked

// Module 6837 (BlockedPaymentsCountryExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = function useBlockedPaymentsConfig() {
  const enabled = closure_2.useConfig({ location: "c519a9_1" }).enabled || "RU" === tmp;
  return enabled;
};
export const useIsPaymentsBlocked = function useIsPaymentsBlocked() {
  return closure_2.useConfig({ location: "dc120b_3" }).enabled;
};
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  return closure_2.getConfig({ location: "1ee357_1" }).enabled;
};

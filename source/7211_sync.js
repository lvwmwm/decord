// Module ID: 7211
// Function ID: 58094
// Name: sync
// Dependencies: []
// Exports: beginRefundRequest, currentEntitlement, finishTransaction, isEligibleForIntroOffer, latestTransaction, showManageSubscriptions, subscriptionStatus, sync

// Module 7211 (sync)
const RNIapIosSk2 = require(dependencyMap[0]).NativeModules.RNIapIosSk2;

export const sync = function sync() {
  return RNIapIosSk2.sync();
};
export const isEligibleForIntroOffer = function isEligibleForIntroOffer(arg0) {
  return RNIapIosSk2.isEligibleForIntroOffer(arg0);
};
export const subscriptionStatus = function subscriptionStatus(arg0) {
  return RNIapIosSk2.subscriptionStatus(arg0);
};
export const currentEntitlement = function currentEntitlement(arg0) {
  return RNIapIosSk2.currentEntitlement(arg0);
};
export const latestTransaction = function latestTransaction(arg0) {
  return RNIapIosSk2.latestTransaction(arg0);
};
export const beginRefundRequest = function beginRefundRequest(arg0) {
  return RNIapIosSk2.beginRefundRequest(arg0);
};
export const showManageSubscriptions = function showManageSubscriptions() {
  return RNIapIosSk2.showManageSubscriptions();
};
export const finishTransaction = function finishTransaction(arg0) {
  return RNIapIosSk2.finishTransaction(arg0);
};

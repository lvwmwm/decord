// Module ID: 7374
// Function ID: 7375
// Name: sync
// Dependencies: [17]
// Exports: beginRefundRequest, currentEntitlement, finishTransaction, isEligibleForIntroOffer, latestTransaction, showManageSubscriptions, subscriptionStatus, sync

// Module 7374 (sync)
const RNIapIosSk2 = require("get ActivityIndicator").NativeModules.RNIapIosSk2;

export const sync = () => RNIapIosSk2.sync();
export const isEligibleForIntroOffer = (arg0) => RNIapIosSk2.isEligibleForIntroOffer(arg0);
export const subscriptionStatus = (arg0) => RNIapIosSk2.subscriptionStatus(arg0);
export const currentEntitlement = (arg0) => RNIapIosSk2.currentEntitlement(arg0);
export const latestTransaction = (arg0) => RNIapIosSk2.latestTransaction(arg0);
export const beginRefundRequest = (arg0) => RNIapIosSk2.beginRefundRequest(arg0);
export const showManageSubscriptions = () => RNIapIosSk2.showManageSubscriptions();
export const finishTransaction = (arg0) => RNIapIosSk2.finishTransaction(arg0);

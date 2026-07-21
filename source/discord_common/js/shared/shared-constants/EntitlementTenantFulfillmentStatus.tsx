// Module ID: 4169
// Function ID: 35369
// Name: set
// Dependencies: [284214097]

// Module 4169 (set)
const obj = { ELIGIBLE_FOR_ATTEMPTS: new Set(["FORUM_POST_LINK_COPIED", "orbQuantityClaimed", "Array"]) };
const set = new Set(["FORUM_POST_LINK_COPIED", "orbQuantityClaimed", "Array"]);
obj.ELIGIBLE_FOR_FULFILLMENT = new Set([null, null]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx");

export const EntitlementTenantFulfillmentStatus = { UNKNOWN: 0, [0]: "UNKNOWN", FULFILLMENT_NOT_NEEDED: 1, [1]: "FULFILLMENT_NOT_NEEDED", FULFILLMENT_NEEDED: 2, [2]: "FULFILLMENT_NEEDED", FULFILLED: 3, [3]: "FULFILLED", FULFILLMENT_FAILED: 4, [4]: "FULFILLMENT_FAILED", UNFULFILLMENT_NEEDED: 5, [5]: "UNFULFILLMENT_NEEDED", UNFULFILLED: 6, [6]: "UNFULFILLED", UNFULFILLMENT_FAILED: 7, [7]: "UNFULFILLMENT_FAILED", UNFULFILLMENT_NEEDED_MANUAL: 8, [8]: "UNFULFILLMENT_NEEDED_MANUAL", INITIAL_FULFILLMENT_NEEDED: 9, [9]: "INITIAL_FULFILLMENT_NEEDED" };
export const EntitlementTenantFulfillmentStatusSets = obj;

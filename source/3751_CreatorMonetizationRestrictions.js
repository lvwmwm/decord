// Module ID: 3751
// Function ID: 28651
// Name: CreatorMonetizationRestrictions
// Dependencies: []

// Module 3751 (CreatorMonetizationRestrictions)
const obj = { NEW_PURCHASES_DISABLED: "NEW_PURCHASES_DISABLED", REAPPLICATION_DISABLED: "REAPPLICATION_DISABLED", SETTINGS_READ_ONLY: "SETTINGS_READ_ONLY", SUBSCRIPTIONS_ENDED_FULL_REFUND: "SUBSCRIPTIONS_ENDED_FULL_REFUND", SUBSCRIPTIONS_ENDED_PRORATED_REFUND: "SUBSCRIPTIONS_ENDED_PRORATED_REFUND" };
const items = [, , ];
({ NEW_PURCHASES_DISABLED: arr[0], REAPPLICATION_DISABLED: arr[1], SETTINGS_READ_ONLY: arr[2] } = obj);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationReviewConstants.tsx");

export const CreatorMonetizationRestrictions = obj;
export const DefaultCreatorMonetizationRestrictions = items;

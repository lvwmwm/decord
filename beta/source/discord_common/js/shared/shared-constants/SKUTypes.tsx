// Module ID: 15761
// Function ID: 15762
// Name: SKUTypes
// Dependencies: [2]

// Module 15761 (SKUTypes)
import size from "module_2" /* 2 */;

const obj = { SKU_CREATE_CHOICES: new Set([2, 3, 5]), GIFTABLE: new Set([1, 2, 3, 4, 5]), BUNDLES: new Set([4, 6]), SUBSCRIPTIONS: new Set([5, 6]) };
new Set([2, 3, 5]);
new Set([1, 2, 3, 4, 5]);
new Set([4, 6]);
new Set([5, 6]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/SKUTypes.tsx");

export const SKUTypes = { DURABLE_PRIMARY: 1, [1]: "DURABLE_PRIMARY", DURABLE: 2, [2]: "DURABLE", CONSUMABLE: 3, [3]: "CONSUMABLE", BUNDLE: 4, [4]: "BUNDLE", SUBSCRIPTION: 5, [5]: "SUBSCRIPTION", SUBSCRIPTION_GROUP: 6, [6]: "SUBSCRIPTION_GROUP" };
export const SKUTypesSets = obj;

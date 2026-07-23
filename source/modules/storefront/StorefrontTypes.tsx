// Module ID: 5617
// Function ID: 47877
// Name: StorefrontPromotionRewardType
// Dependencies: [2]

// Module 5617 (StorefrontPromotionRewardType)
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontTypes.tsx");

export const StorefrontPromotionRewardType = { DISCOUNT: 1, [1]: "DISCOUNT", FIXED_PRICE: 2, [2]: "FIXED_PRICE", ACTION: 3, [3]: "ACTION" };
export const StorefrontDiscountTypes = { FLAT: 1, [1]: "FLAT", PERCENT: 2, [2]: "PERCENT" };
export const StorefrontPurchaseType = { SELF_PURCHASE: 0, [0]: "SELF_PURCHASE", GIFT: 1, [1]: "GIFT" };
export const StorefrontPriceVariant = { NORMAL: 0, [0]: "NORMAL", DISCOUNTED: 1, [1]: "DISCOUNTED" };

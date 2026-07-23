// Module ID: 6671
// Function ID: 51413
// Name: items
// Dependencies: [1851, 689, 2]
// Exports: getPremiumGradientColor

// Module 6671 (items)
import { PremiumTypes } from "GuildFeatures";

const obj = {};
const items = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
obj.PREMIUM_TIER_0 = items;
const items1 = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS];
obj.PREMIUM_TIER_1 = items1;
const items2 = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj.PREMIUM_TIER_2 = items2;
const items3 = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj.PREMIUM_TIER_2_TRI_COLOR = items3;
const items4 = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS];
obj.PREMIUM_GUILD = items4;
obj.PREMIUM_TIER_0_PERK_CARD = ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"];
const items5 = [require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLURPLE_50, require("_createForOfIteratorHelperLoose").unsafe_rawColors.PINK_60];
obj.PREMIUM_TIER_2_OFFER_COLOR = items5;
const result = require("set").fileFinishedImporting("modules/colors/native/ColorConstants.tsx");

export const Gradients = obj;
export const getPremiumGradientColor = function getPremiumGradientColor(premiumType) {
  if (PremiumTypes.TIER_0 === premiumType) {
    return obj.PREMIUM_TIER_0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    return obj.PREMIUM_TIER_1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    return obj.PREMIUM_TIER_2;
  }
};

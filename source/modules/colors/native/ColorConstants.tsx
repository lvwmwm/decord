// Module ID: 6666
// Function ID: 51370
// Name: items
// Dependencies: []
// Exports: getPremiumGradientColor

// Module 6666 (items)
const PremiumTypes = require(dependencyMap[0]).PremiumTypes;
const obj = {};
const items = [importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
obj.PREMIUM_TIER_0 = items;
const items1 = [importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS];
obj.PREMIUM_TIER_1 = items1;
const items2 = [importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj.PREMIUM_TIER_2 = items2;
const items3 = [importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, importDefault(dependencyMap[1]).unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj.PREMIUM_TIER_2_TRI_COLOR = items3;
const items4 = [importDefault(dependencyMap[1]).unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, importDefault(dependencyMap[1]).unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS];
obj.PREMIUM_GUILD = items4;
obj.PREMIUM_TIER_0_PERK_CARD = [];
const items5 = [importDefault(dependencyMap[1]).unsafe_rawColors.BLURPLE_50, importDefault(dependencyMap[1]).unsafe_rawColors.PINK_60];
obj.PREMIUM_TIER_2_OFFER_COLOR = items5;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/colors/native/ColorConstants.tsx");

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

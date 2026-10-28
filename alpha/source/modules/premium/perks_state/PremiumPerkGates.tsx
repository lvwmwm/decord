// Module ID: 15557
// Function ID: 15558
// Name: PremiumPerkGates
// Dependencies: [1391, 5065, 6414, 5061, 1395, 1397, 2]
// Exports: canEditDiscriminator, canInstallPremiumApplications, canRedeemPremiumPerks, canStreamQuality, canUploadLargeFiles, canUseAnimatedAvatar, canUseAnimatedEmojis, canUseBadges, canUseClientThemes, canUseCollectibles, canUseCustomBackgrounds, canUseCustomCallSounds, canUseCustomStickersEverywhere, canUseEmojisEverywhere, canUseHighVideoUploadQuality, canUseIncreasedGuildCap, canUseIncreasedMessageLength, canUseMonthlyOrbs, canUseMoreQuestOrbs, canUsePremiumAppIcons, canUsePremiumGuildMemberProfile, canUsePremiumProfileCustomization, canUseQuestOrbMultiplier, canUseShopDiscounts, canUseSoundboardEverywhere, getMaxFileSizeForPremiumType, hasBoostDiscount, hasFreeBoosts

// Module 15557 (PremiumPerkGates)
import PerksStateUtils from "PerksStateUtils" /* 1395 */;
import ProductCatalog from "ProductCatalog" /* 5061 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5065 */;
import FileSizeUtils from "FileSizeUtils" /* 6414 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp;
const user2 = tmp(1397);
({ PremiumTypes: c2, PremiumUserLimits: c3 } = PremiumConstants);
const StreamQuality = { MID: "mid", HIGH: "high" };
const result = size.fileFinishedImporting("modules/premium/perks_state/PremiumPerkGates.tsx");

export { StreamQuality };
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_2, arg1) {
  let fileSize;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  if (TIER_2 === TIER_2.TIER_2) {
    const obj2 = NitroFileUploadExperiments;
    fileSize = obj2.getNitroFileUploadLimitBytes({ location: "getMaxFileSizeForPremiumType" });
  } else {
    fileSize = _false[TIER_2].fileSize;
  }
  const obj3 = FileSizeUtils;
  const obj4 = { useKibibytes: true, useSpace: obj.useSpace };
  return obj3.formatSize(fileSize / 1024, obj4);
};
export const canUseAnimatedEmojis = function canUseAnimatedEmojis(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
};
export const canUseEmojisEverywhere = function canUseEmojisEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
};
export const canUseSoundboardEverywhere = function canUseSoundboardEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
};
export const canUseCustomCallSounds = function canUseCustomCallSounds(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, stateFromStores);
};
export const canUploadLargeFiles = function canUploadLargeFiles(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
};
export const canUseBadges = function canUseBadges(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
};
export const canUseHighVideoUploadQuality = function canUseHighVideoUploadQuality(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
};
export const canEditDiscriminator = function canEditDiscriminator(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
};
export const hasBoostDiscount = function hasBoostDiscount(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
};
export const canUseAnimatedAvatar = function canUseAnimatedAvatar(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.ANIMATED_AVATAR, user);
};
export const canInstallPremiumApplications = function canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
};
export const canUseIncreasedMessageLength = function canUseIncreasedMessageLength(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
};
export const canUseIncreasedGuildCap = function canUseIncreasedGuildCap(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
};
export const canRedeemPremiumPerks = function canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
};
export const canUsePremiumProfileCustomization = function canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
};
export const canUsePremiumAppIcons = function canUsePremiumAppIcons(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.APP_ICONS, currentUser);
};
export const canUsePremiumGuildMemberProfile = function canUsePremiumGuildMemberProfile(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
};
export const canUseClientThemes = function canUseClientThemes(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
};
export const canStreamQuality = function canStreamQuality(MID, user) {
  let canUserUseResult;
  let obj;
  if (MID === obj.HIGH) {
    const obj2 = ProductCatalog;
    canUserUseResult = obj2.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, user);
  } else {
    obj = ProductCatalog;
    canUserUseResult = obj.canUserUse(ProductCatalog.STREAM_MID_QUALITY, user);
  }
  return canUserUseResult;
};
export const canUseQuestOrbMultiplier = function canUseQuestOrbMultiplier(perks) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
};
export const hasFreeBoosts = function hasFreeBoosts(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
};
export const canUseCustomStickersEverywhere = function canUseCustomStickersEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
};
export const canUseCustomBackgrounds = function canUseCustomBackgrounds(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, currentUser);
};
export const canUseCollectibles = function canUseCollectibles(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.COLLECTIBLES, user);
};
export const canUseMonthlyOrbs = function canUseMonthlyOrbs(stateFromStores) {
  let perks;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (stateFromStores != null) {
    perks = stateFromStores.perks;
  }
  return hasPerk(perks, user2.Perk.MONTHLY_ORBS);
};
export const canUseShopDiscounts = function canUseShopDiscounts(currentUser) {
  let perks;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  let hasPerkResult = hasPerk(perks, tmp(1397).Perk.SHOP_DISCOUNTS);
  if (!hasPerkResult) {
    const tmpResult = ProductCatalog;
    hasPerkResult = tmpResult.canUserUse(tmp(5061).COLLECTIBLES, currentUser);
  }
  return hasPerkResult;
};
export const canUseMoreQuestOrbs = function canUseMoreQuestOrbs(perks) {
  perks = undefined;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (perks != null) {
    perks = perks.perks;
  }
  let hasPerkResult = hasPerk(perks, tmp(1397).Perk.MORE_QUEST_ORBS);
  if (!hasPerkResult) {
    const tmpResult = ProductCatalog;
    hasPerkResult = tmpResult.canUserUse(tmp(5061).QUEST_ORB_MULTIPLIER, perks);
  }
  return hasPerkResult;
};

// Module ID: 15831
// Function ID: 15832
// Name: PremiumPerkGates
// Dependencies: [1386, 5070, 6445, 5066, 1390, 1392, 2]
// Exports: canEditDiscriminator, canInstallPremiumApplications, canRedeemPremiumPerks, canStreamQuality, canUploadLargeFiles, canUseAnimatedAvatar, canUseAnimatedEmojis, canUseBadges, canUseClientThemes, canUseCollectibles, canUseCustomBackgrounds, canUseCustomCallSounds, canUseCustomStickersEverywhere, canUseEmojisEverywhere, canUseHighVideoUploadQuality, canUseIncreasedGuildCap, canUseIncreasedMessageLength, canUseMonthlyOrbs, canUseMoreQuestOrbs, canUsePremiumAppIcons, canUsePremiumGuildMemberProfile, canUsePremiumProfileCustomization, canUseQuestOrbMultiplier, canUseShopDiscounts, canUseSoundboardEverywhere, getMaxFileSizeForPremiumType, hasBoostDiscount, hasFreeBoosts

// Module 15831 (PremiumPerkGates)
import PerksStateUtils from "PerksStateUtils" /* 1390 */;
import ProductCatalog from "ProductCatalog" /* 5066 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5070 */;
import FileSizeUtils from "FileSizeUtils" /* 6445 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp;
const user2 = tmp(1392);
({ PremiumTypes: c2, PremiumUserLimits: c3 } = PremiumConstants);
const StreamQuality = { MID: "mid", HIGH: "high" };
const result = size.fileFinishedImporting("modules/premium/perks_state/PremiumPerkGates.tsx");

export { StreamQuality };
export function getMaxFileSizeForPremiumType(TIER_2, arg1) {
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
}
export function canUseAnimatedEmojis(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
}
export function canUseEmojisEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
}
export function canUseSoundboardEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
}
export function canUseCustomCallSounds(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, currentUser);
}
export function canUploadLargeFiles(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
}
export function canUseBadges(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
}
export function canUseHighVideoUploadQuality(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
}
export function canEditDiscriminator(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
}
export function hasBoostDiscount(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
}
export function canUseAnimatedAvatar(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.ANIMATED_AVATAR, user);
}
export function canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
}
export function canUseIncreasedMessageLength(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
}
export function canUseIncreasedGuildCap(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
}
export function canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
}
export function canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
}
export function canUsePremiumAppIcons(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.APP_ICONS, currentUser);
}
export function canUsePremiumGuildMemberProfile(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
}
export function canUseClientThemes(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
}
export function canStreamQuality(MID, currentUser) {
  let canUserUseResult;
  let obj;
  if (MID === obj.HIGH) {
    const obj2 = ProductCatalog;
    canUserUseResult = obj2.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, currentUser);
  } else {
    obj = ProductCatalog;
    canUserUseResult = obj.canUserUse(ProductCatalog.STREAM_MID_QUALITY, currentUser);
  }
  return canUserUseResult;
}
export function canUseQuestOrbMultiplier(perks) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
}
export function hasFreeBoosts(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
}
export function canUseCustomStickersEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
}
export function canUseCustomBackgrounds(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, currentUser);
}
export function canUseCollectibles(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.COLLECTIBLES, user);
}
export function canUseMonthlyOrbs(stateFromStores) {
  let perks;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (stateFromStores != null) {
    perks = stateFromStores.perks;
  }
  return hasPerk(perks, user2.Perk.MONTHLY_ORBS);
}
export function canUseShopDiscounts(currentUser) {
  let perks;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  let hasPerkResult = hasPerk(perks, tmp(1392).Perk.SHOP_DISCOUNTS);
  if (!hasPerkResult) {
    const tmpResult = ProductCatalog;
    hasPerkResult = tmpResult.canUserUse(tmp(5066).COLLECTIBLES, currentUser);
  }
  return hasPerkResult;
}
export function canUseMoreQuestOrbs(perks) {
  perks = undefined;
  const hasPerk = PerksStateUtils.hasPerk;
  PerksStateUtils;
  if (perks != null) {
    perks = perks.perks;
  }
  let hasPerkResult = hasPerk(perks, tmp(1392).Perk.MORE_QUEST_ORBS);
  if (!hasPerkResult) {
    const tmpResult = ProductCatalog;
    hasPerkResult = tmpResult.canUserUse(tmp(5066).QUEST_ORB_MULTIPLIER, perks);
  }
  return hasPerkResult;
}

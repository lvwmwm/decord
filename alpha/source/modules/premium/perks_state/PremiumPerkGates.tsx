// Module ID: 9680
// Function ID: 9681
// Name: PremiumPerkGates
// Dependencies: [1388, 7988, 5672, 9681, 1399, 2108, 1392, 2]
// Exports: canEditDiscriminator, canInstallPremiumApplications, canRedeemPremiumPerks, canStreamQuality, canUploadLargeFiles, canUseAnimatedAvatar, canUseAnimatedEmojis, canUseBadges, canUseClientThemes, canUseCollectibles, canUseCustomBackgrounds, canUseCustomCallSounds, canUseCustomStickersEverywhere, canUseEmojisEverywhere, canUseHighVideoUploadQuality, canUseIncreasedGuildCap, canUseIncreasedMessageLength, canUseMonthlyOrbs, canUseMoreQuestOrbs, canUsePremiumAppIcons, canUsePremiumGuildMemberProfile, canUsePremiumProfileCustomization, canUseQuestOrbMultiplier, canUseShopDiscounts, canUseSoundboardEverywhere, canUseTenureBadge, getMaxFileSizeForPremiumType, hasBoostDiscount, hasFreeBoosts

// Module 9680 (PremiumPerkGates)
import PerksStateUtils from "PerksStateUtils" /* 1392 */;
import user2 from "user" /* 1399 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2108 */;
import FileSizeUtils from "FileSizeUtils" /* 5672 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 7988 */;
import ProductCatalog from "ProductCatalog" /* 9681 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
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
  if (TIER_2 === React2.TIER_2) {
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
  return obj.canUserUse(user2.Perk.ANIMATED_EMOJIS, currentUser);
}
export function canUseEmojisEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.EMOJIS_EVERYWHERE, currentUser);
}
export function canUseSoundboardEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.SOUNDBOARD_EVERYWHERE, currentUser);
}
export function canUseCustomCallSounds(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.CUSTOM_CALL_SOUNDS, currentUser);
}
export function canUploadLargeFiles(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.INCREASED_FILE_UPLOAD_SIZE, currentUser);
}
export function canUseBadges(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.PROFILE_BADGES, currentUser);
}
export function canUseHighVideoUploadQuality(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
}
export function canEditDiscriminator(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.CUSTOM_DISCRIMINATOR, stateFromStores);
}
export function hasBoostDiscount(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.BOOST_DISCOUNT, stateFromStores);
}
export function canUseAnimatedAvatar(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.ANIMATED_AVATAR, user);
}
export function canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
}
export function canUseIncreasedMessageLength(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.INCREASED_MESSAGE_LENGTH, currentUser);
}
export function canUseIncreasedGuildCap(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.INCREASED_GUILD_LIMIT, currentUser);
}
export function canRedeemPremiumPerks(currentUser) {
  const obj = PremiumTypeUtils;
  return obj.isPremiumExactly(currentUser, React2.TIER_2);
}
export function canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
}
export function canUsePremiumAppIcons(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.APP_ICONS, currentUser);
}
export function canUsePremiumGuildMemberProfile(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
}
export function canUseClientThemes(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.CLIENT_THEMES, currentUser);
}
export function canStreamQuality(MID, currentUser) {
  let isPremiumAtLeast2Result;
  if (MID === obj.HIGH) {
    let premiumType;
    const isPremiumAtLeast = PremiumTypeUtils.isPremiumAtLeast;
    PremiumTypeUtils;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let isPremiumAtLeastResult = isPremiumAtLeast(premiumType, React2.TIER_2);
    if (!isPremiumAtLeastResult) {
      let hasFreePremiumResult;
      if (currentUser != null) {
        hasFreePremiumResult = currentUser.hasFreePremium();
      }
      isPremiumAtLeastResult = true === hasFreePremiumResult;
    }
    if (isPremiumAtLeastResult) {
      const tmp5Result = ProductCatalog;
      isPremiumAtLeastResult = tmp5Result.canUserUse(tmp5(1399).Perk.STREAM_HIGH_QUALITY, currentUser);
    }
    isPremiumAtLeast2Result = isPremiumAtLeastResult;
  } else {
    let premiumType1;
    const isPremiumAtLeast2 = PremiumTypeUtils.isPremiumAtLeast;
    PremiumTypeUtils;
    if (currentUser != null) {
      premiumType1 = currentUser.premiumType;
    }
    isPremiumAtLeast2Result = isPremiumAtLeast2(premiumType1, React2.TIER_1);
    if (!isPremiumAtLeast2Result) {
      let hasFreePremiumResult1;
      if (currentUser != null) {
        hasFreePremiumResult1 = currentUser.hasFreePremium();
      }
      isPremiumAtLeast2Result = true === hasFreePremiumResult1;
    }
    if (isPremiumAtLeast2Result) {
      const tmp13Result = ProductCatalog;
      isPremiumAtLeast2Result = tmp13Result.canUserUse(tmp13(1399).Perk.STREAM_MID_QUALITY, currentUser);
    }
  }
  return isPremiumAtLeast2Result;
}
export function canUseQuestOrbMultiplier(isFractionalPremiumWithNoStandardSub) {
  let isPremiumExactlyResult = null != isFractionalPremiumWithNoStandardSub && !isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
  if (isPremiumExactlyResult) {
    const obj = PremiumTypeUtils;
    isPremiumExactlyResult = obj.isPremiumExactly(isFractionalPremiumWithNoStandardSub, React2.TIER_2);
  }
  return isPremiumExactlyResult;
}
export function hasFreeBoosts(stateFromStores) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.FREE_BOOSTS, stateFromStores);
}
export function canUseCustomStickersEverywhere(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.STICKERS_EVERYWHERE, currentUser);
}
export function canUseCustomBackgrounds(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.VIDEO_FILTER_ASSETS, currentUser);
}
export function canUseCollectibles(user) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.PREMIUM_COLLECTIBLES, user);
}
export function canUseTenureBadge(currentUser) {
  const obj = ProductCatalog;
  return obj.canUserUse(user2.Perk.PREMIUM_TENURE_BADGE, currentUser);
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
  let hasPerkResult = hasPerk(perks, tmp(1399).Perk.SHOP_DISCOUNTS);
  if (!hasPerkResult) {
    const tmpResult = ProductCatalog;
    hasPerkResult = tmpResult.canUserUse(tmp(1399).Perk.PREMIUM_COLLECTIBLES, currentUser);
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
  let hasPerkResult = hasPerk(perks, tmp(1399).Perk.MORE_QUEST_ORBS);
  if (!hasPerkResult) {
    let isPremiumExactlyResult = null != perks && !perks.isFractionalPremiumWithNoStandardSub();
    if (isPremiumExactlyResult) {
      const tmpResult = PremiumTypeUtils;
      isPremiumExactlyResult = tmpResult.isPremiumExactly(perks, React2.TIER_2);
    }
    hasPerkResult = isPremiumExactlyResult;
  }
  return hasPerkResult;
}

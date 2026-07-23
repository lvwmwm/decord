// Module ID: 12520
// Function ID: 96944
// Name: TierFeatures
// Dependencies: [57, 31, 27, 653, 1851, 33, 8007, 1212, 10256, 11565, 4658, 4654, 9594, 12521, 8005, 4074, 12523, 4130, 689, 12515, 4973, 3991, 4131, 4126, 4066, 3976, 4554, 4660, 4022, 12524, 12526, 3974, 1273, 12528, 12529, 5162, 11597, 2]
// Exports: default

// Module 12520 (TierFeatures)
import _slicedToArray from "_slicedToArray";
import importAllResult from "hexToRgb";
import { View } from "PressableBase";
import ME from "ME";
import { BoostedGuildFeatures } from "GuildFeatures";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let BoostedGuildTiers;
let closure_10;
let closure_11;
let closure_6;
let closure_9;
let require = arg1;
function TierFeatures(features) {
  const tmp = callback4();
  const require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  let obj = require(isVisible[21]);
  const fn = function o() {
    let obj = {};
    let num = 0;
    if (isVisible) {
      num = 150;
    }
    const obj2 = tmp(isVisible[21]);
    let num2 = 0;
    if (isVisible) {
      num2 = 1;
    }
    obj = { duration: 150 };
    const Easing = tmp(isVisible[21]).Easing;
    obj.easing = Easing.inOut(tmp(isVisible[21]).Easing.quad);
    obj.opacity = obj2.withDelay(num, tmp(isVisible[22]).withTiming(num2, obj));
    return obj;
  };
  obj = { withDelay: require(isVisible[21]).withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS: 150, withTiming: require(isVisible[22]).withTiming, Easing: require(isVisible[21]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 13329849944491;
  fn.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { accessibilityElementsHidden: !isVisible, importantForAccessibility: "no-hide-descendants" };
  let items = [tmp.cardFeatures, !isVisible && tmp.cardFeaturesInvisible, animatedStyle];
  obj.style = items;
  obj.children = features.map((isIncluded) => {
    let obj = {};
    const items = [tmp.cardFeature, , ];
    let cardFeatureExcluded = !isIncluded.isIncluded;
    if (cardFeatureExcluded) {
      cardFeatureExcluded = tmp.cardFeatureExcluded;
    }
    items[1] = cardFeatureExcluded;
    let cardFeatureLast = arg1 === features.length - 1;
    if (cardFeatureLast) {
      cardFeatureLast = tmp.cardFeatureLast;
    }
    items[2] = cardFeatureLast;
    obj.style = items;
    obj = { size: "custom", style: outer1_10.cardFeatureIcon, color: "white" };
    const items1 = [outer1_9(isIncluded.IconComponent, obj), ];
    obj = { style: null, color: "text-overlay-light", variant: "text-md/semibold" };
    let cardFeatureExcludedCopy = !isIncluded.isIncluded;
    if (cardFeatureExcludedCopy) {
      cardFeatureExcludedCopy = tmp.cardFeatureExcludedCopy;
    }
    const items2 = [cardFeatureExcludedCopy];
    obj.style = items2;
    obj.children = isIncluded.getCopy();
    items1[1] = outer1_9(outer1_10(isVisible[23]).Text, obj);
    obj.children = items1;
    return outer1_10(outer1_5, obj, arg1);
  });
  return closure_9(features(isVisible[21]).View, obj);
}
function getNextTierIndex(premiumTier) {
  let closure_0 = Math.min(BoostedGuildTiers.TIER_3, premiumTier + 1);
  const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
  let num = 0;
  if (-1 !== findIndexResult) {
    num = findIndexResult;
  }
  return num;
}
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_6, BoostedGuildTiers } = ME);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let obj = { tier: BoostedGuildTiers.TIER_1 };
obj = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji });
  }
};
let items = [
  obj,
  {
    isIncluded: true,
    IconComponent: require("StickerIcon").StickerIcon,
    getCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers });
    }
  },
,
,
,
,
,
,
,
,

];
let obj1 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers });
  }
};
items[2] = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Jbg8oY, { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution });
  }
};
let obj3 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.w1gmLt, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vBfZzD, obj);
  }
};
items[3] = obj3;
let obj2 = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Jbg8oY, { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution });
  }
};
items[4] = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers });
  }
};
let obj5 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
items[5] = obj5;
let obj4 = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers });
  }
};
items[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
let obj6 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
items[7] = {
  isIncluded: false,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.pIn7Af, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
let obj7 = {
  isIncluded: false,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.pIn7Af, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items[8] = {
  isIncluded: false,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
let obj8 = {
  isIncluded: false,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
items[9] = {
  isIncluded: false,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
let obj9 = {
  isIncluded: false,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
items[10] = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
obj.features = items;
let items1 = [obj, , ];
const obj11 = { tier: BoostedGuildTiers.TIER_2 };
let obj10 = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
let items2 = [
  {
    isIncluded: true,
    IconComponent: require("ReactionIcon").ReactionIcon,
    getCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji });
    }
  },
,
,
,
,
,
,
,
,
,

];
let obj12 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji });
  }
};
items2[1] = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers });
  }
};
let obj14 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { resolution: require(12523) /* CONTROL_RESOLUTION */.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Jbg8oY, obj);
  }
};
items2[2] = obj14;
let obj13 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers });
  }
};
items2[3] = {
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.w1gmLt, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vBfZzD, obj);
  }
};
let obj15 = {
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.w1gmLt, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vBfZzD, obj);
  }
};
items2[4] = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers });
  }
};
let obj16 = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers });
  }
};
items2[5] = {
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
let obj17 = {
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
items2[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
let obj19 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.pIn7Af, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items2[7] = obj19;
let obj20 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
items2[8] = obj20;
const obj21 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
items2[9] = obj21;
let obj18 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
items2[10] = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
obj11.features = items2;
items1[1] = obj11;
const obj23 = { tier: BoostedGuildTiers.TIER_3 };
let obj22 = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
let items3 = [
  {
    isIncluded: true,
    IconComponent: require("ReactionIcon").ReactionIcon,
    getCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji });
    }
  },
,
,
,
,
,
,
,
,
,

];
let obj24 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji });
  }
};
items3[1] = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers });
  }
};
let obj25 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers });
  }
};
items3[2] = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { resolution: require(12523) /* CONTROL_RESOLUTION */.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Jbg8oY, obj);
  }
};
const obj27 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.w1gmLt, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vBfZzD, obj);
  }
};
items3[3] = obj27;
const obj28 = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers });
  }
};
items3[4] = obj28;
const obj29 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
items3[5] = obj29;
let obj26 = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { resolution: require(12523) /* CONTROL_RESOLUTION */.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Jbg8oY, obj);
  }
};
items3[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
const obj31 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.pIn7Af, obj);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items3[7] = obj31;
const obj30 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tzGY0q);
  }
};
items3[8] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
const obj32 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
items3[9] = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
const obj34 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
items3[10] = obj34;
obj23.features = items3;
items1[2] = obj23;
const obj35 = { cardWrapper: { marginRight: 10, width: 290 } };
const obj33 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
obj35.card = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: "100%" };
obj35.cardContent = { display: "flex", padding: 24, height: "100%" };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", height: "100%" };
obj35.pressableWrapper = _createForOfIteratorHelperLoose;
obj35.cardHeading = { alignItems: "baseline", display: "flex", flexDirection: "row", flexGrow: 0, flexShrink: 0, marginBottom: 16 };
obj35.cardTierName = { marginRight: 10 };
obj35.cardTierBoostcount = { opacity: 0.7 };
obj35.cardFeatures = { flexGrow: 1, flexShrink: 0 };
obj35.cardFeaturesInvisible = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
obj35.cardFeaturesWrapper = { alignSelf: "stretch", flexGrow: 1, position: "relative" };
obj35.cardFeature = { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 };
obj35.cardFeatureExcluded = { opacity: 0.5 };
obj35.cardFeatureExcludedCopy = { textDecorationLine: "line-through" };
obj35.cardFeatureLast = { marginBottom: 0 };
const obj36 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: "100%" };
obj35.cardsScroller = { flex: 1, marginTop: require("BoostedGuildTiers").PROGRESS_BAR_SPACING };
obj35.cardsScrollerContent = { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 8, paddingTop: 16, paddingBottom: 20 };
obj35.cardFeatureIcon = { height: 24, marginRight: 6, width: 24 };
obj35.cardFooter = { display: "flex", flexDirection: "row", marginTop: 24 };
obj35.cardFooterIcon = { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 };
const obj39 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 8, paddingVertical: 4, position: "absolute", top: -16, left: 24 };
obj35.cardTierBadge = obj39;
obj35.cardTierBadgeCopy = { textTransform: "uppercase" };
const obj38 = { flex: 1, marginTop: require("BoostedGuildTiers").PROGRESS_BAR_SPACING };
obj35.sparkleStar = { position: "absolute", tintColor: require("result").DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj35.sparkleStarPointed = { height: 15, width: 18 };
obj35.sparkleStarElongated = { height: 45, width: 23 };
obj35.sparkleStarPointed1 = { top: -7, right: 35 };
obj35.sparkleStarPointed2 = { top: 20, right: 55 };
obj35.sparkleStarPointed3 = { bottom: -7, left: 70 };
obj35.sparkleStarElongated1 = { right: 15, top: 10 };
obj35.gradientHighlight = { position: "absolute", height: 1, width: 60 };
obj35.gradientHighlightTop = { right: 15, top: 0 };
obj35.gradientHighlightBottom = { left: 48, bottom: 0 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj35);
let closure_14 = { code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
let closure_15 = importAllResult.forwardRef((onCardPress, ref) => {
  let features;
  let guild;
  let isExpanded;
  let tier;
  const tmp = callback4();
  ({ guild, features } = onCardPress);
  ({ isExpanded, tier } = onCardPress);
  const items = [features];
  let tmp4 = guild.premiumTier === tier;
  const memo = importAllResult.useMemo(() => {
    const found = features.filter((orderCollapsed) => null != orderCollapsed.orderCollapsed);
    return found.sort((orderCollapsed, orderCollapsed2) => {
      let num = 0;
      if (null != orderCollapsed.orderCollapsed) {
        num = 0;
        if (null != orderCollapsed2.orderCollapsed) {
          num = 0;
          if (orderCollapsed.orderCollapsed !== orderCollapsed2.orderCollapsed) {
            let num2 = -1;
            if (orderCollapsed.orderCollapsed > orderCollapsed2.orderCollapsed) {
              num2 = 1;
            }
            num = num2;
          }
        }
      }
      return num;
    });
  }, items);
  let obj = features(3976);
  const tmp2 = importDefault(4066)();
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  const tmp7 = obj.isThemeDark(importDefault(4066)()) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = features(1212).intl;
  const string = intl.string;
  const t = features(1212).t;
  if (isExpanded) {
    let stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  obj = { style: tmp.cardWrapper, ref };
  obj = { angle: 45, angleCenter: { x: 0.5, y: 0.5 } };
  const isThemeDarkResult = obj.isThemeDark(importDefault(4066)());
  const tmp10 = View;
  const tmp11 = callback2;
  const tmp9 = callback3;
  const items1 = [importDefault(689).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj.colors = items1;
  obj.locations = [0, 1];
  obj.style = tmp.card;
  obj.useAngle = true;
  const obj1 = { style: tmp.pressableWrapper };
  const obj2 = { onPress: onCardPress.onCardPress, style: tmp.cardContent, accessibilityRole: "button", accessibilityState: { expanded: isExpanded }, accessibilityLabel: stringResult };
  const obj3 = { style: tmp.cardHeading };
  const obj4 = { color: "text-overlay-light", style: tmp.cardTierName, variant: "heading-xxl/extrabold" };
  let obj7 = features(4022);
  obj4.children = obj7.getTierName(tier, { useLevels: false });
  const items2 = [callback2(features(4126).Text, obj4), ];
  const obj5 = { color: "text-overlay-light", style: tmp.cardTierBoostcount, variant: "text-md/medium" };
  const intl2 = features(1212).intl;
  obj5.children = intl2.format(features(1212).t.gDsyB9, { numSubscriptions: table[tier] });
  items2[1] = callback2(features(4126).Text, obj5);
  obj3.children = items2;
  const items3 = [callback3(View, obj3), , ];
  obj7 = { style: tmp.cardFeaturesWrapper };
  const items4 = [callback2(TierFeatures, { features: memo, isVisible: !isExpanded }), callback2(TierFeatures, { features, isVisible: isExpanded })];
  obj7.children = items4;
  items3[1] = callback3(View, obj7);
  const obj9 = { style: tmp.cardFooter };
  const obj10 = { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult };
  const items5 = [callback2(features(4126).Text, obj10), ];
  if (isExpanded) {
    let ChevronLargeDownIcon = tmp19(12524).ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = tmp19(12526).ChevronLargeDownIcon;
  }
  const obj6 = { numSubscriptions: table[tier] };
  const obj8 = { features: memo, isVisible: !isExpanded };
  const tmp12 = importDefault(4554);
  const tmp13 = callback2;
  const tmp14 = View;
  const tmp15 = callback3;
  const tmp16 = callback3;
  const tmp17 = View;
  const tmp18 = callback2;
  items5[1] = tmp18(ChevronLargeDownIcon, { color: importDefault(689).colors.WHITE, style: tmp.cardFooterIcon });
  obj9.children = items5;
  items3[2] = tmp16(tmp17, obj9);
  obj2.children = items3;
  obj1.children = tmp15(features(4660).PressableHighlight, obj2);
  obj.children = tmp13(tmp14, obj1);
  const items6 = [tmp11(tmp12, obj), , ];
  let tmp21 = tmp5;
  if (tier !== guild.premiumTier + 1) {
    if (tmp4) {
      tmp4 = tier === BoostedGuildTiers.TIER_3;
    }
    tmp21 = tmp4;
  }
  if (!tmp21) {
    items6[1] = tmp21;
    let tmp34 = tier === BoostedGuildTiers.TIER_3;
    if (tmp34) {
      const obj12 = {};
      const obj13 = {};
      let obj19 = features(3974);
      const items7 = [obj19.hexWithOpacity(tmp7, 0), , ];
      let obj20 = features(3974);
      items7[1] = obj20.hexWithOpacity(tmp7, 1);
      const tmp40 = importDefault(4554);
      items7[2] = features(3974).hexWithOpacity(tmp7, 0);
      obj13.colors = items7;
      obj13.start = { x: 0, y: 0 };
      obj13.end = { x: 1, y: 0 };
      obj13.locations = [0, 0.5, 1];
      const items8 = [, ];
      ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
      obj13.style = items8;
      const items9 = [callback2(tmp40, obj13), , , , , ];
      const obj14 = {};
      const obj22 = features(3974);
      const tmp43 = importDefault(4554);
      const items10 = [features(3974).hexWithOpacity(tmp7, 0), , ];
      const obj24 = features(3974);
      items10[1] = features(3974).hexWithOpacity(tmp7, 1);
      const obj25 = features(3974);
      items10[2] = features(3974).hexWithOpacity(tmp7, 0);
      obj14.colors = items10;
      obj14.start = { x: 0, y: 0 };
      obj14.end = { x: 1, y: 0 };
      obj14.locations = [0, 0.5, 1];
      const items11 = [, ];
      ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
      obj14.style = items11;
      items9[1] = callback2(tmp43, obj14);
      const obj15 = { source: importDefault(12528) };
      const items12 = [, , ];
      ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
      obj15.style = items12;
      items9[2] = callback2(features(1273).Icon, obj15);
      const obj16 = { source: importDefault(12528) };
      const items13 = [, , ];
      ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
      obj16.style = items13;
      items9[3] = callback2(features(1273).Icon, obj16);
      const obj17 = { source: importDefault(12528) };
      const items14 = [, , ];
      ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
      obj17.style = items14;
      items9[4] = callback2(features(1273).Icon, obj17);
      const obj18 = { source: importDefault(12529) };
      const items15 = [, , ];
      ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
      obj18.style = items15;
      items9[5] = callback2(features(1273).Icon, obj18);
      obj12.children = items9;
      tmp34 = callback3(closure_11, obj12);
      const obj26 = features(3974);
    }
    items6[2] = tmp34;
    obj.children = items6;
    return tmp9(tmp10, obj);
  } else {
    obj19 = { angle: 3, angleCenter: { x: 0.5, y: 0.2 } };
    const items16 = [importDefault(689).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    obj19.colors = items16;
    obj19.locations = [0, 1];
    obj19.style = tmp.cardTierBadge;
    obj19.useAngle = true;
    obj20 = { color: "text-overlay-light", style: tmp.cardTierBadgeCopy, variant: "text-xs/bold" };
    const intl3 = features(1212).intl;
    const string2 = intl3.string;
    if (tmp5) {
      let string2Result = string2(_9NBo7c);
    } else {
      string2Result = string2(_9NBo7c["9JbE3J"]);
    }
    obj20.children = string2Result;
    obj20 = callback2(features(4126).Text, obj20);
    obj19.children = obj20;
    callback2(importDefault(4554), obj19);
    const tmp23 = callback2;
    const tmp26 = importDefault(4554);
    const tmp27 = callback2;
  }
});
const obj40 = { position: "absolute", tintColor: require("result").DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx");

export default function GuildBoostingMarketingTierCards(guild) {
  function handleCardPress() {
    const result = guild(table[35]).DeprecatedLayoutAnimation();
    callback((arg0) => !arg0);
  }
  const tmp = callback4();
  guild = guild.guild;
  const ref = handleCardPress.useRef(null);
  const tmp3 = callback(handleCardPress.useState(false), 2);
  const dependencyMap = tmp3[0];
  callback = tmp3[1];
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    const timeout = window.setTimeout(() => {
      const current = outer1_1.current;
      if (null != current) {
        current.scrollToIndex(outer2_17(premiumTier.premiumTier));
      }
    }, 400);
    return () => {
      window.clearTimeout(closure_0);
    };
  }, items);
  const obj = {
    ref,
    itemCount: items1.length,
    cardWidth: 290,
    cardMarginRight: 10,
    contentContainerStyle: tmp.cardsScrollerContent,
    initialIndex: getNextTierIndex(guild.premiumTier),
    style: tmp.cardsScroller,
    children: items1.map((features) => {
      const tier = features.tier;
      return outer1_9(outer1_15, { features: features.features, guild, isExpanded: closure_2, onCardPress: handleCardPress, tier }, tier);
    })
  };
  return callback2(guild(11597).MarketingCardsScroller, obj);
};

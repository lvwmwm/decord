// Module ID: 12406
// Function ID: 94788
// Name: TierFeatures
// Dependencies: []
// Exports: default

// Module 12406 (TierFeatures)
let BoostedGuildTiers;
function TierFeatures(features) {
  const tmp = callback4();
  const arg1 = tmp;
  features = features.features;
  const importDefault = features;
  const isVisible = features.isVisible;
  const dependencyMap = isVisible;
  let obj = arg1(dependencyMap[21]);
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
  obj = { withDelay: arg1(dependencyMap[21]).withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS: 150, withTiming: arg1(dependencyMap[22]).withTiming, Easing: arg1(dependencyMap[21]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 13329849944491;
  fn.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { accessibilityElementsHidden: !isVisible, importantForAccessibility: "no-hide-descendants" };
  const items = [tmp.cardFeatures, !isVisible && tmp.cardFeaturesInvisible, animatedStyle];
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
    obj = { style: tmp.cardFeatureIcon };
    const items1 = [callback(isIncluded.IconComponent, obj), ];
    obj = { -9223372036854775808: "Array", 9223372036854775807: "atan2", 0: "r" };
    let cardFeatureExcludedCopy = !isIncluded.isIncluded;
    if (cardFeatureExcludedCopy) {
      cardFeatureExcludedCopy = tmp.cardFeatureExcludedCopy;
    }
    const items2 = [cardFeatureExcludedCopy];
    obj.style = items2;
    obj.children = isIncluded.getCopy();
    items1[1] = callback(closure_10(isVisible[23]).Text, obj);
    obj.children = items1;
    return closure_10(closure_5, obj, arg1);
  });
  return closure_9(importDefault(dependencyMap[21]).View, obj);
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_6, BoostedGuildTiers } = arg1(dependencyMap[3]));
const BoostedGuildFeatures = arg1(dependencyMap[4]).BoostedGuildFeatures;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
let obj = { tier: BoostedGuildTiers.TIER_1 };
obj = {
  "Bool(false)": null,
  "Bool(false)": null,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_7.TIER_1].limits.emoji });
  }
};
const items = [obj, , , , , , , , , , ];
const tmp3 = arg1(dependencyMap[5]);
items[1] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_1].limits.stickers });
  }
};
const obj1 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_1].limits.stickers });
  }
};
items[2] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[9]).ScreenArrowIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Jbg8oY, { resolution: BoostedGuildFeatures[closure_7.TIER_1].limits.screenShareQualityResolution });
  }
};
const obj3 = {
  "Bool(false)": "center",
  "Bool(false)": 16,
  IconComponent: arg1(dependencyMap[10]).VoiceNormalIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { bitrate: BoostedGuildFeatures[closure_7.TIER_1].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(arg1(dependencyMap[7]).t.w1gmLt, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.vBfZzD, obj);
  }
};
items[3] = obj3;
const obj2 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[9]).ScreenArrowIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Jbg8oY, { resolution: BoostedGuildFeatures[closure_7.TIER_1].limits.screenShareQualityResolution });
  }
};
items[4] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[11]).StageIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[closure_7.TIER_1].limits.stageVideoUsers });
  }
};
const obj4 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[11]).StageIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[closure_7.TIER_1].limits.stageVideoUsers });
  }
};
items[5] = {
  IconComponent: arg1(dependencyMap[12]).GifIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.PbAyub);
  }
};
const obj5 = {
  IconComponent: arg1(dependencyMap[12]).GifIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.PbAyub);
  }
};
items[6] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
const obj6 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
items[7] = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
const obj7 = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
items[8] = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.1a5rjl);
  }
};
const obj8 = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.1a5rjl);
  }
};
items[9] = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6PV6Qc);
  }
};
const obj9 = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6PV6Qc);
  }
};
items[10] = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[15]).LinkIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.adNGjW);
  }
};
obj.features = items;
const items1 = [obj, , ];
const obj11 = { tier: BoostedGuildTiers.TIER_2 };
const obj10 = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[15]).LinkIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.adNGjW);
  }
};
const items2 = [
  {
    isIncluded: true,
    IconComponent: arg1(dependencyMap[6]).ReactionIcon,
    getCopy() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_7.TIER_2].limits.emoji });
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
const obj12 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_7.TIER_2].limits.emoji });
  }
};
items2[1] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_2].limits.stickers });
  }
};
const obj14 = {
  "Bool(false)": null,
  "Bool(false)": null,
  IconComponent: arg1(dependencyMap[9]).ScreenArrowIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    const obj = { resolution: arg1(dependencyMap[16]).getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Jbg8oY, obj);
  }
};
items2[2] = obj14;
const obj13 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_2].limits.stickers });
  }
};
items2[3] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[10]).VoiceNormalIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { bitrate: BoostedGuildFeatures[closure_7.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(arg1(dependencyMap[7]).t.w1gmLt, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.vBfZzD, obj);
  }
};
const obj15 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[10]).VoiceNormalIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { bitrate: BoostedGuildFeatures[closure_7.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(arg1(dependencyMap[7]).t.w1gmLt, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.vBfZzD, obj);
  }
};
items2[4] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[11]).StageIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[closure_7.TIER_2].limits.stageVideoUsers });
  }
};
const obj16 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[11]).StageIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[closure_7.TIER_2].limits.stageVideoUsers });
  }
};
items2[5] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[12]).GifIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.PbAyub);
  }
};
const obj17 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[12]).GifIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.PbAyub);
  }
};
items2[6] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
const obj18 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
items2[7] = {
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
const obj20 = {
  "Bool(false)": "100%",
  "Bool(false)": 16,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.1a5rjl);
  }
};
items2[8] = obj20;
const obj21 = {
  "Bool(false)": "center",
  "Bool(false)": 16,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6PV6Qc);
  }
};
items2[9] = obj21;
const obj19 = {
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
items2[10] = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[15]).LinkIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.adNGjW);
  }
};
obj11.features = items2;
items1[1] = obj11;
const obj23 = { tier: BoostedGuildTiers.TIER_3 };
const obj22 = {
  isIncluded: false,
  IconComponent: arg1(dependencyMap[15]).LinkIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.adNGjW);
  }
};
const items3 = [
  {
    isIncluded: true,
    IconComponent: arg1(dependencyMap[6]).ReactionIcon,
    getCopy() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_7.TIER_3].limits.emoji });
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
const obj24 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_7.TIER_3].limits.emoji });
  }
};
items3[1] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_3].limits.stickers });
  }
};
const obj25 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[8]).StickerIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[closure_7.TIER_3].limits.stickers });
  }
};
items3[2] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[9]).ScreenArrowIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    const obj = { resolution: arg1(dependencyMap[16]).getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Jbg8oY, obj);
  }
};
const obj27 = {
  "Bool(false)": "center",
  "Bool(false)": 16,
  IconComponent: arg1(dependencyMap[10]).VoiceNormalIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { bitrate: BoostedGuildFeatures[closure_7.TIER_3].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(arg1(dependencyMap[7]).t.w1gmLt, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.vBfZzD, obj);
  }
};
items3[3] = obj27;
const obj28 = {
  "Bool(false)": "isArray",
  "Bool(false)": "HTTP",
  IconComponent: arg1(dependencyMap[11]).StageIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[closure_7.TIER_3].limits.stageVideoUsers });
  }
};
items3[4] = obj28;
const obj29 = {
  "Bool(false)": "100%",
  "Bool(false)": 16,
  IconComponent: arg1(dependencyMap[12]).GifIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.PbAyub);
  }
};
items3[5] = obj29;
const obj26 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[9]).ScreenArrowIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    const obj = { resolution: arg1(dependencyMap[16]).getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.Jbg8oY, obj);
  }
};
items3[6] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
const obj30 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.tzGY0q);
  }
};
items3[7] = {
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_3].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
const obj31 = {
  IconComponent: arg1(dependencyMap[14]).UploadIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    let obj = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { size: BoostedGuildFeatures[closure_7.TIER_3].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(arg1(dependencyMap[7]).t.pIn7Af, obj);
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aFRl53, obj);
  }
};
items3[8] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.1a5rjl);
  }
};
const obj32 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[13]).ServerGridIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.1a5rjl);
  }
};
items3[9] = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6PV6Qc);
  }
};
const obj34 = {
  "Bool(false)": null,
  "Bool(false)": null,
  IconComponent: arg1(dependencyMap[15]).LinkIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.adNGjW);
  }
};
items3[10] = obj34;
obj23.features = items3;
items1[2] = obj23;
let obj37 = arg1(dependencyMap[17]);
const obj35 = { cardWrapper: { "Bool(false)": "/assets/modules/guild_boosting/native/images", "Bool(false)": 23 } };
const obj33 = {
  isIncluded: true,
  IconComponent: arg1(dependencyMap[6]).ReactionIcon,
  getCopy() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6PV6Qc);
  }
};
obj35.card = { borderRadius: importDefault(dependencyMap[18]).radii.lg, height: "100%" };
obj35.cardContent = { style: true, variant: true, color: true };
obj37 = { borderRadius: importDefault(dependencyMap[18]).radii.lg };
obj35.pressableWrapper = obj37;
obj35.cardHeading = {};
obj35.cardTierName = { marginRight: 10 };
obj35.cardTierBoostcount = { opacity: 0.7 };
obj35.cardFeatures = { nestedScrollEnabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, scrollEventThrottle: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 };
obj35.cardFeaturesInvisible = {};
obj35.cardFeaturesWrapper = { -430812319: false, 1634795890: false, -1436461740: false };
obj35.cardFeature = {};
obj35.cardFeatureExcluded = { opacity: 0.5 };
obj35.cardFeatureExcludedCopy = { textDecorationLine: "line-through" };
obj35.cardFeatureLast = { marginBottom: 0 };
const obj36 = { borderRadius: importDefault(dependencyMap[18]).radii.lg, height: "100%" };
obj35.cardsScroller = { flex: 1, marginTop: arg1(dependencyMap[19]).PROGRESS_BAR_SPACING };
obj35.cardsScrollerContent = {};
obj35.cardFeatureIcon = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
obj35.cardFooter = { -131509629: null, body: null, enabled: null };
obj35.cardFooterIcon = { "Bool(true)": "r", "Bool(true)": "%JSONStringify%", "Bool(true)": "isArray", "Bool(true)": "isArrayBuffer", "Bool(true)": "isArray" };
const obj38 = { flex: 1, marginTop: arg1(dependencyMap[19]).PROGRESS_BAR_SPACING };
obj35.cardTierBadge = { borderRadius: importDefault(dependencyMap[18]).radii.sm };
obj35.cardTierBadgeCopy = { textTransform: "uppercase" };
const obj39 = { borderRadius: importDefault(dependencyMap[18]).radii.sm };
obj35.sparkleStar = { position: "absolute", tintColor: arg1(dependencyMap[20]).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj35.sparkleStarPointed = {};
obj35.sparkleStarElongated = { hideWhenScrolling: "column", autoCapitalize: "center" };
obj35.sparkleStarPointed1 = {};
obj35.sparkleStarPointed2 = {};
obj35.sparkleStarPointed3 = {};
obj35.sparkleStarElongated1 = { it-CH: -302624512, heroInfoContainer: -1429651183 };
obj35.gradientHighlight = { zIndex: false, width: false, backgroundColor: false };
obj35.gradientHighlightTop = { it-CH: null, heroInfoContainer: "36d299b9a20b89def78675ec02a95049" };
obj35.gradientHighlightBottom = {};
let closure_13 = obj37.createStyles(obj35);
let closure_14 = { code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
let closure_15 = importAllResult.forwardRef((onCardPress, ref) => {
  let features;
  let guild;
  let isExpanded;
  let tier;
  const tmp = callback4();
  ({ guild, features } = onCardPress);
  ref = features;
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
  let obj = ref(dependencyMap[25]);
  const tmp2 = importDefault(dependencyMap[24])();
  const unsafe_rawColors = importDefault(dependencyMap[18]).unsafe_rawColors;
  const tmp7 = obj.isThemeDark(importDefault(dependencyMap[24])()) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = ref(dependencyMap[7]).intl;
  const string = intl.string;
  const t = ref(dependencyMap[7]).t;
  if (isExpanded) {
    let stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  obj = { style: tmp.cardWrapper, ref };
  obj = { angle: 45, angleCenter: { 0: false, 0: false } };
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[24])());
  const tmp10 = View;
  const tmp11 = callback2;
  const tmp9 = callback3;
  const items1 = [importDefault(dependencyMap[18]).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(dependencyMap[18]).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj.colors = items1;
  obj.locations = [77601039, 1612144654];
  obj.style = tmp.card;
  obj.useAngle = true;
  const obj1 = { style: tmp.pressableWrapper };
  const obj2 = { onPress: onCardPress.onCardPress, style: tmp.cardContent, accessibilityRole: "button", accessibilityState: { expanded: isExpanded }, accessibilityLabel: stringResult };
  const obj3 = { style: tmp.cardHeading };
  const obj4 = { style: tmp.cardTierName };
  let obj7 = ref(dependencyMap[28]);
  obj4.children = obj7.getTierName(tier, { useLevels: false });
  const items2 = [callback2(ref(dependencyMap[23]).Text, obj4), ];
  const obj5 = { style: tmp.cardTierBoostcount };
  const intl2 = ref(dependencyMap[7]).intl;
  obj5.children = intl2.format(ref(dependencyMap[7]).t.gDsyB9, { numSubscriptions: closure_6[tier] });
  items2[1] = callback2(ref(dependencyMap[23]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback3(View, obj3), , ];
  obj7 = { style: tmp.cardFeaturesWrapper };
  const items4 = [callback2(TierFeatures, { features: memo, isVisible: !isExpanded }), callback2(TierFeatures, { features, isVisible: isExpanded })];
  obj7.children = items4;
  items3[1] = callback3(View, obj7);
  const obj9 = { style: tmp.cardFooter };
  const obj10 = { children: stringResult };
  const items5 = [callback2(ref(dependencyMap[23]).Text, obj10), ];
  if (isExpanded) {
    let ChevronLargeDownIcon = tmp19(tmp20[29]).ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = tmp19(tmp20[30]).ChevronLargeDownIcon;
  }
  const obj6 = { numSubscriptions: closure_6[tier] };
  const obj8 = { features: memo, isVisible: !isExpanded };
  const tmp12 = importDefault(dependencyMap[26]);
  const tmp13 = callback2;
  const tmp14 = View;
  const tmp15 = callback3;
  const tmp16 = callback3;
  const tmp17 = View;
  const tmp18 = callback2;
  items5[1] = tmp18(ChevronLargeDownIcon, { color: importDefault(dependencyMap[18]).colors.WHITE, style: tmp.cardFooterIcon });
  obj9.children = items5;
  items3[2] = tmp16(tmp17, obj9);
  obj2.children = items3;
  obj1.children = tmp15(ref(dependencyMap[27]).PressableHighlight, obj2);
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
      let obj19 = ref(dependencyMap[31]);
      const items7 = [obj19.hexWithOpacity(tmp7, 0), , ];
      let obj20 = ref(dependencyMap[31]);
      items7[1] = obj20.hexWithOpacity(tmp7, 1);
      const tmp40 = importDefault(dependencyMap[26]);
      items7[2] = ref(dependencyMap[31]).hexWithOpacity(tmp7, 0);
      obj13.colors = items7;
      obj13.start = { 0: "%FunctionPrototype%", 0: "paddingStart" };
      obj13.end = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 };
      obj13.locations = [false, false, false];
      const items8 = [, ];
      ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
      obj13.style = items8;
      const items9 = [callback2(tmp40, obj13), , , , , ];
      const obj14 = {};
      const obj22 = ref(dependencyMap[31]);
      const tmp43 = importDefault(dependencyMap[26]);
      const items10 = [ref(dependencyMap[31]).hexWithOpacity(tmp7, 0), , ];
      const obj24 = ref(dependencyMap[31]);
      items10[1] = ref(dependencyMap[31]).hexWithOpacity(tmp7, 1);
      const obj25 = ref(dependencyMap[31]);
      items10[2] = ref(dependencyMap[31]).hexWithOpacity(tmp7, 0);
      obj14.colors = items10;
      obj14.start = { 0: "%FunctionPrototype%", 0: "paddingStart" };
      obj14.end = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 };
      obj14.locations = [false, false, false];
      const items11 = [, ];
      ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
      obj14.style = items11;
      items9[1] = callback2(tmp43, obj14);
      const obj15 = { source: importDefault(dependencyMap[33]) };
      const items12 = [, , ];
      ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
      obj15.style = items12;
      items9[2] = callback2(ref(dependencyMap[32]).Icon, obj15);
      const obj16 = { source: importDefault(dependencyMap[33]) };
      const items13 = [, , ];
      ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
      obj16.style = items13;
      items9[3] = callback2(ref(dependencyMap[32]).Icon, obj16);
      const obj17 = { source: importDefault(dependencyMap[33]) };
      const items14 = [, , ];
      ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
      obj17.style = items14;
      items9[4] = callback2(ref(dependencyMap[32]).Icon, obj17);
      const obj18 = { source: importDefault(dependencyMap[34]) };
      const items15 = [, , ];
      ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
      obj18.style = items15;
      items9[5] = callback2(ref(dependencyMap[32]).Icon, obj18);
      obj12.children = items9;
      tmp34 = callback3(closure_11, obj12);
      const obj26 = ref(dependencyMap[31]);
    }
    items6[2] = tmp34;
    obj.children = items6;
    return tmp9(tmp10, obj);
  } else {
    obj19 = { angle: 3, angleCenter: {} };
    const items16 = [importDefault(dependencyMap[18]).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(dependencyMap[18]).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    obj19.colors = items16;
    obj19.locations = [77601039, 1612144654];
    obj19.style = tmp.cardTierBadge;
    obj19.useAngle = true;
    obj20 = { "Bool(true)": "r", "Bool(true)": "LinearTransition", "Bool(true)": "<string:1912729078>", style: tmp.cardTierBadgeCopy };
    const intl3 = ref(dependencyMap[7]).intl;
    const string2 = intl3.string;
    if (tmp5) {
      let string2Result = string2(_9NBo7c);
    } else {
      string2Result = string2(_9NBo7c.9JbE3J);
    }
    obj20.children = string2Result;
    obj20 = callback2(ref(dependencyMap[23]).Text, obj20);
    obj19.children = obj20;
    callback2(importDefault(dependencyMap[26]), obj19);
    const tmp23 = callback2;
    const tmp26 = importDefault(dependencyMap[26]);
    const tmp27 = callback2;
  }
});
const obj40 = { position: "absolute", tintColor: arg1(dependencyMap[20]).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx");

export default function GuildBoostingMarketingTierCards(guild) {
  function handleCardPress() {
    const result = guild(closure_2[35]).DeprecatedLayoutAnimation();
    callback((arg0) => !arg0);
  }
  const tmp = callback4();
  guild = guild.guild;
  const arg1 = guild;
  const ref = handleCardPress.useRef(null);
  const importDefault = ref;
  const tmp3 = callback(handleCardPress.useState(false), 2);
  let closure_2 = tmp3[0];
  const callback = tmp3[1];
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    const timeout = window.setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToIndex(callback(premiumTier.premiumTier));
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
      return callback2(closure_15, { features: features.features, guild, isExpanded: closure_2, onCardPress: handleCardPress, tier }, tier);
    })
  };
  return callback2(arg1(closure_2[36]).MarketingCardsScroller, obj);
};

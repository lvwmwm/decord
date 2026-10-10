// Module ID: 13856
// Function ID: 13857
// Name: GuildBoostingMarketingTierCards
// Dependencies: [32, 19, 17, 1085, 1392, 21, 8960, 1126, 12267, 12266, 8228, 8224, 9751, 13857, 9405, 5038, 13859, 5092, 587, 13851, 5969, 558, 576, 4850, 5093, 5088, 5031, 4969, 5391, 6184, 8024, 13860, 13862, 4967, 1200, 13864, 13865, 6666, 12304, 2]

// Module 13856 (GuildBoostingMarketingTierCards)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import LinkIcon from "LinkIcon" /* 5038 */;
import Text_Text from "Text/Text" /* 5088 */;
import timing from "timing" /* 5093 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import LegacyTokens from "LegacyTokens" /* 5969 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6666 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8024 */;
import StageIcon from "StageIcon" /* 8224 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8228 */;
import ReactionIcon from "ReactionIcon" /* 8960 */;
import UploadIcon from "UploadIcon" /* 9405 */;
import GifIcon from "GifIcon" /* 9751 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12266 */;
import StickerIcon from "StickerIcon" /* 12267 */;
import GuildBoostingMarketingProgressBar from "GuildBoostingMarketingProgressBar" /* 13851 */;
import ServerGridIcon from "ServerGridIcon" /* 13857 */;
import ServerBoostStreamQualityMarketingExperiment from "ServerBoostStreamQualityMarketingExperiment" /* 13859 */;
import AssetRegistryDefault from "AssetRegistry" /* 13864 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let BoostedGuildTiers;
let c10;
let c9;
let items;
let items2;
let items3;
let metroRequire;
let rect;
let unpackModuleId;
function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t["6PV6Qc"]);
}
const getCopy2 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.adNGjW);
};
const getCopy3 = function getCopy() {
  const intl = intl4.intl;
  const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji };
  return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
};
const getCopy4 = function getCopy() {
  const intl = intl4.intl;
  const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers };
  return intl.formatToPlainString(intl4.t.WgHNGI, obj);
};
const getCopy5 = function getCopy() {
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { resolution: obj2.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
  const Jbg8oY = intl4.t.Jbg8oY;
  obj2 = ServerBoostStreamQualityMarketingExperiment;
  return formatToPlainString(Jbg8oY, obj);
};
const getCopy6 = function getCopy() {
  let intl2;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
  const vBfZzD = intl4.t.vBfZzD;
  intl2 = intl4.intl;
  obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
  return formatToPlainString(vBfZzD, obj);
};
const getCopy7 = function getCopy() {
  const intl = intl4.intl;
  const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers };
  return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
};
const getCopy8 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.PbAyub);
};
const getCopy9 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.tzGY0q);
};
const getCopy10 = function getCopy() {
  let intl2;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
  const aFRl53 = intl4.t.aFRl53;
  intl2 = intl4.intl;
  obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
  return formatToPlainString(aFRl53, obj);
};
const getCopy11 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t["1a5rjl"]);
};
const getCopy12 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t["6PV6Qc"]);
};
const getCopy13 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.adNGjW);
};
function GuildBoostingMarketingTierCard(ref) {
  let ChevronLargeDownIcon;
  let PressableHighlight;
  let Text3;
  let features;
  let guild;
  let intl2;
  let isExpanded;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj4;
  let obj5;
  let obj9;
  let string2Result;
  let stringResult;
  let tier;
  let tmp8Result;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  features = undefined;
  const tmp2 = closure_14();
  ({ guild, features } = merged);
  ({ isExpanded, tier } = merged);
  const onCardPress = merged.onCardPress;
  const items = [features];
  const tmp5 = useThemeDefault();
  const memo = react.useMemo(() => {
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
  const premiumTier = guild.premiumTier;
  const sum = guild.premiumTier + 1;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp5);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp10 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = tmp8(1126).intl;
  const string = intl.string;
  const t = tmp8(1126).t;
  if (isExpanded) {
    stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  const obj2 = { style: tmp2.cardWrapper, ref, children: items6 };
  const obj3 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: items1, locations: [0, 1], style: tmp2.card, useAngle: true, children: React4(View, obj4) };
  items1 = [, ];
  const tmp3Result = LinearGradientDefault;
  items1[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
  items1[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
  obj4 = { style: tmp2.pressableWrapper, children: authStore(PressableHighlight, obj5) };
  obj5 = { onPress: onCardPress, style: tmp2.cardContent, accessibilityRole: "button", accessibilityState: { expanded: isExpanded }, accessibilityLabel: stringResult, children: items3 };
  const obj6 = { style: tmp2.cardHeading, children: items2 };
  PressableHighlight = tmp8(6184).PressableHighlight;
  const obj7 = { color: "text-overlay-light", style: tmp2.cardTierName, variant: "heading-xxl/extrabold", children: tmp8Result.getTierName(tier, { useLevels: false }) };
  const Text = tmp8(5088).Text;
  tmp8Result = GuildBoostingUtils;
  items2 = [React4(Text, obj7), ];
  const obj8 = { color: "text-overlay-light", style: tmp2.cardTierBoostcount, variant: "text-md/medium", children: intl2.format(intl4.t.gDsyB9, obj9) };
  const Text2 = tmp8(5088).Text;
  intl2 = tmp8(1126).intl;
  obj9 = { numSubscriptions: metroRequire[tier] };
  items2[1] = React4(Text2, obj8);
  items3 = [authStore(View, obj6), , ];
  const obj10 = { style: tmp2.cardFeaturesWrapper, children: items4 };
  items4 = [, ];
  const obj11 = { features: memo, isVisible: !isExpanded };
  items4[0] = React4(closure_17, obj11);
  items4[1] = React4(closure_17, { features, isVisible: isExpanded });
  items3[1] = authStore(View, obj10);
  const obj12 = { style: tmp2.cardFooter, children: items5 };
  items5 = [React4(Text_Text.Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }), ];
  if (isExpanded) {
    ChevronLargeDownIcon = tmp8(13860).ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = tmp8(13862).ChevronLargeDownIcon;
  }
  const obj13 = { color: nativeDefault.colors.WHITE, style: tmp2.cardFooterIcon };
  items5[1] = React4(ChevronLargeDownIcon, obj13);
  items3[2] = authStore(View, obj12);
  items6 = [React4(tmp3Result, obj3), , ];
  let tmp14Result = tmp16;
  if (!tmp14Result) {
    tmp14Result = premiumTier === tier && tier === BoostedGuildTiers.TIER_3;
    const tmp18 = premiumTier === tier && tier === BoostedGuildTiers.TIER_3;
  }
  if (tmp14Result) {
    const obj14 = { angle: 3, angleCenter: { x: 0.5, y: 0.2 }, colors: items7, locations: [0, 1], style: tmp2.cardTierBadge, useAngle: true, children: React4(Text3, obj15) };
    items7 = [, ];
    const tmp3Result4 = LinearGradientDefault;
    items7[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
    items7[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
    obj15 = { color: "text-overlay-light", style: tmp2.cardTierBadgeCopy, variant: "text-xs/bold", children: string2Result };
    Text3 = tmp8(5088).Text;
    const intl3 = tmp8(1126).intl;
    const string2 = intl3.string;
    const t2 = tmp8(1126).t;
    if (tier === sum) {
      string2Result = string2(t2["9NBo7c"]);
    } else {
      string2Result = string2(t2["9JbE3J"]);
    }
    tmp14Result = tmp14(tmp3Result4, obj14);
  }
  items6[1] = tmp14Result;
  let tmp12Result = tier === BoostedGuildTiers.TIER_3;
  if (tmp12Result) {
    const obj16 = { children: items10 };
    const obj17 = { colors: items8, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items9 };
    let num = 0;
    items8 = [, , ];
    const tmp3Result5 = LinearGradientDefault;
    const tmp8Result7 = ColorUtils;
    items8[0] = tmp8Result7.hexWithOpacity(tmp10, 0);
    const tmp8Result8 = ColorUtils;
    items8[1] = tmp8Result8.hexWithOpacity(tmp10, 1);
    const tmp8Result9 = ColorUtils;
    items8[2] = tmp8Result9.hexWithOpacity(tmp10, 0);
    items9 = [, ];
    ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp2);
    items10 = [React4(tmp3Result5, obj17), , , , , ];
    const obj18 = { colors: items11, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items12 };
    items11 = [, , ];
    const tmp3Result6 = LinearGradientDefault;
    const tmp8Result10 = ColorUtils;
    items11[0] = tmp8Result10.hexWithOpacity(tmp10, 0);
    const tmp8Result11 = ColorUtils;
    items11[1] = tmp8Result11.hexWithOpacity(tmp10, 1);
    const tmp8Result12 = ColorUtils;
    items11[2] = tmp8Result12.hexWithOpacity(tmp10, 0);
    items12 = [, ];
    ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp2);
    items10[1] = React4(tmp3Result6, obj18);
    const obj19 = { source: AssetRegistryDefault, style: items13 };
    const Icon = tmp8(1200).Icon;
    items13 = [, , ];
    ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp2);
    items10[2] = React4(Icon, obj19);
    const obj20 = { source: AssetRegistryDefault, style: items14 };
    const Icon2 = tmp8(1200).Icon;
    items14 = [, , ];
    ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp2);
    items10[3] = React4(Icon2, obj20);
    const obj21 = { source: AssetRegistryDefault, style: items15 };
    const Icon3 = tmp8(1200).Icon;
    items15 = [, , ];
    ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp2);
    items10[4] = React4(Icon3, obj21);
    const obj22 = { source: AssetRegistryDefault2, style: items16 };
    const Icon4 = tmp8(1200).Icon;
    items16 = [, , ];
    ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp2);
    items10[5] = React4(Icon4, obj22);
    tmp12Result = tmp12(unpackModuleId, obj16);
  }
  items6[2] = tmp12Result;
  return authStore(View, obj2);
}
let react = react_mod;
let View = react_native.View;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroRequire, BoostedGuildTiers } = Constants);
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let obj = { tier: BoostedGuildTiers.TIER_1, features: items };
let obj2 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji };
    return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
  }
};
items = [obj2, , , , , , , , , , ];
let obj3 = {
  isIncluded: true,
  IconComponent: StickerIcon.StickerIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers };
    return intl.formatToPlainString(intl4.t.WgHNGI, obj);
  }
};
items[1] = obj3;
let obj4 = {
  isIncluded: true,
  IconComponent: ScreenArrowIcon.ScreenArrowIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution };
    return intl.formatToPlainString(intl4.t.Jbg8oY, obj);
  }
};
items[2] = obj4;
let obj5 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: VoiceNormalIcon.VoiceNormalIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
    const vBfZzD = intl4.t.vBfZzD;
    intl2 = intl4.intl;
    obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    return formatToPlainString(vBfZzD, obj);
  }
};
items[3] = obj5;
let obj6 = {
  isIncluded: true,
  IconComponent: StageIcon.StageIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers };
    return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
  }
};
items[4] = obj6;
let obj7 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: GifIcon.GifIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PbAyub);
  }
};
items[5] = obj7;
let obj8 = {
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.tzGY0q);
  }
};
items[6] = obj8;
let obj9 = {
  isIncluded: false,
  IconComponent: UploadIcon.UploadIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
    const aFRl53 = intl4.t.aFRl53;
    intl2 = intl4.intl;
    obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    return formatToPlainString(aFRl53, obj);
  }
};
items[7] = obj9;
let obj10 = {
  isIncluded: false,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["1a5rjl"]);
  }
};
items[8] = obj10;
let obj11 = {
  isIncluded: false,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["6PV6Qc"]);
  }
};
items[9] = obj11;
let obj12 = {
  isIncluded: false,
  IconComponent: LinkIcon.LinkIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.adNGjW);
  }
};
items[10] = obj12;
let items1 = [obj, , ];
let obj13 = { tier: BoostedGuildTiers.TIER_2, features: items2 };
let obj14 = {
  isIncluded: true,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji };
    return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
  }
};
items2 = [obj14, , , , , , , , , , ];
let obj15 = {
  isIncluded: true,
  IconComponent: StickerIcon.StickerIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers };
    return intl.formatToPlainString(intl4.t.WgHNGI, obj);
  }
};
items2[1] = obj15;
let obj16 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: ScreenArrowIcon.ScreenArrowIcon,
  getCopy() {
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { resolution: obj2.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    const Jbg8oY = intl4.t.Jbg8oY;
    obj2 = ServerBoostStreamQualityMarketingExperiment;
    return formatToPlainString(Jbg8oY, obj);
  }
};
items2[2] = obj16;
let obj17 = {
  isIncluded: true,
  IconComponent: VoiceNormalIcon.VoiceNormalIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
    const vBfZzD = intl4.t.vBfZzD;
    intl2 = intl4.intl;
    obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    return formatToPlainString(vBfZzD, obj);
  }
};
items2[3] = obj17;
let obj18 = {
  isIncluded: true,
  IconComponent: StageIcon.StageIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers };
    return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
  }
};
items2[4] = obj18;
let obj19 = {
  isIncluded: true,
  IconComponent: GifIcon.GifIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PbAyub);
  }
};
items2[5] = obj19;
let obj20 = {
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.tzGY0q);
  }
};
items2[6] = obj20;
let obj21 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: UploadIcon.UploadIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
    const aFRl53 = intl4.t.aFRl53;
    intl2 = intl4.intl;
    obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    return formatToPlainString(aFRl53, obj);
  }
};
items2[7] = obj21;
let obj22 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["1a5rjl"]);
  }
};
items2[8] = obj22;
items2[9] = { orderCollapsed: 2, isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy };
({ orderCollapsed: 2, isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy });
items2[10] = { isIncluded: false, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy2 };
items1[1] = obj13;
const obj25 = { tier: BoostedGuildTiers.TIER_3, features: items3 };
({ isIncluded: false, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy2 });
items3 = [{ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy3 }, , , , , , , , , , ];
({ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy3 });
items3[1] = { isIncluded: true, IconComponent: StickerIcon.StickerIcon, getCopy: getCopy4 };
({ isIncluded: true, IconComponent: StickerIcon.StickerIcon, getCopy: getCopy4 });
items3[2] = { isIncluded: true, IconComponent: ScreenArrowIcon.ScreenArrowIcon, getCopy: getCopy5 };
({ isIncluded: true, IconComponent: ScreenArrowIcon.ScreenArrowIcon, getCopy: getCopy5 });
items3[3] = { orderCollapsed: 2, isIncluded: true, IconComponent: VoiceNormalIcon.VoiceNormalIcon, getCopy: getCopy6 };
({ orderCollapsed: 2, isIncluded: true, IconComponent: VoiceNormalIcon.VoiceNormalIcon, getCopy: getCopy6 });
items3[4] = { orderCollapsed: 4, isIncluded: true, IconComponent: StageIcon.StageIcon, getCopy: getCopy7 };
({ orderCollapsed: 4, isIncluded: true, IconComponent: StageIcon.StageIcon, getCopy: getCopy7 });
items3[5] = { orderCollapsed: 3, isIncluded: true, IconComponent: GifIcon.GifIcon, getCopy: getCopy8 };
({ orderCollapsed: 3, isIncluded: true, IconComponent: GifIcon.GifIcon, getCopy: getCopy8 });
items3[6] = { isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy9 };
({ isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy9 });
items3[7] = { orderCollapsed: 1, isIncluded: true, IconComponent: UploadIcon.UploadIcon, getCopy: getCopy10 };
({ orderCollapsed: 1, isIncluded: true, IconComponent: UploadIcon.UploadIcon, getCopy: getCopy10 });
items3[8] = { isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy11 };
({ isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy11 });
items3[9] = { isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy12 };
({ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy12 });
items3[10] = { orderCollapsed: 0, isIncluded: true, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy13 };
items1[2] = obj25;
let c13 = 150;
({ orderCollapsed: 0, isIncluded: true, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy13 });
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj37 = { cardWrapper: { marginRight: 10, width: 290 }, card: { borderRadius: nativeDefault.radii.lg, height: "100%" }, cardContent: { display: "flex", padding: 24, height: "100%" }, pressableWrapper: { borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" }, cardHeading: { alignItems: "baseline", display: "flex", flexDirection: "row", flexGrow: 0, flexShrink: 0, marginBottom: 16 }, cardTierName: { marginRight: 10 }, cardTierBoostcount: { opacity: 0.7 }, cardFeatures: { flexGrow: 1, flexShrink: 0 }, cardFeaturesInvisible: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }, cardFeaturesWrapper: { alignSelf: "stretch", flexGrow: 1, position: "relative" }, cardFeature: { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 }, cardFeatureExcluded: { opacity: 0.5 }, cardFeatureExcludedCopy: { textDecorationLine: "line-through" }, cardFeatureLast: { marginBottom: 0 }, cardsScroller: { flex: 1, marginTop: GuildBoostingMarketingProgressBar.PROGRESS_BAR_SPACING }, cardsScrollerContent: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 8, paddingTop: 16, paddingBottom: 20 }, cardFeatureIcon: { height: 24, marginRight: 6, width: 24 }, cardFooter: { display: "flex", flexDirection: "row", marginTop: 24 }, cardFooterIcon: { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 }, cardTierBadge: rect, cardTierBadgeCopy: { textTransform: "uppercase" }, sparkleStar: { position: "absolute", tintColor: LegacyTokens.DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK }, sparkleStarPointed: { height: 15, width: 18 }, sparkleStarElongated: { height: 45, width: 23 }, sparkleStarPointed1: { top: -7, right: 35 }, sparkleStarPointed2: { top: 20, right: 55 }, sparkleStarPointed3: { bottom: -7, left: 70 }, sparkleStarElongated1: { right: 15, top: 10 }, gradientHighlight: { position: "absolute", height: 1, width: 60 }, gradientHighlightTop: { right: 15, top: 0 }, gradientHighlightBottom: { left: 48, bottom: 0 } };
({ borderRadius: nativeDefault.radii.lg, height: "100%" });
({ borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" });
({ flex: 1, marginTop: GuildBoostingMarketingProgressBar.PROGRESS_BAR_SPACING });
rect = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 8, paddingVertical: 4, position: "absolute", top: -16, left: 24 };
({ position: "absolute", tintColor: LegacyTokens.DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK });
let closure_14 = createStyles(obj37);
const __initData = { code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
const __initData2 = { code: "function GuildBoostingMarketingTierCardsTsx2(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function TierFeatures(features) {
  let cardFeature;
  let duration;
  let isVisible;
  let tmp = isVisible;
  let obj = require("react");
  const cResult = obj.c(23);
  const tmp3 = closure_14();
  _require = tmp3;
  features = features.features;
  isVisible = features.isVisible;
  let obj2 = require("ReanimatedRexport");
  const fn = function n() {
    let Easing;
    let obj2;
    let num = 0;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    if (isVisible) {
      num = duration;
    }
    let num2 = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num2 = 1;
    }
    const obj = { opacity: withDelay(num, withTiming(num2, obj2)) };
    obj2 = { duration, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    Easing = tmp(4850).Easing;
    return obj;
  };
  let obj3 = { withDelay: require("ReanimatedRexport").withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj3;
  fn.__workletHash = 13329849944491;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let tmp5 = !isVisible;
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.cardFeatures) {
      let tmp7;
      let tmp8;
      if (cResult[2] === (!isVisible && tmp3.cardFeaturesInvisible)) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === features) {
        if (cResult[5] === tmp3.cardFeature) {
          if (cResult[6] === tmp3.cardFeatureExcluded) {
            if (cResult[7] === tmp3.cardFeatureExcludedCopy) {
              if (cResult[8] === tmp3.cardFeatureIcon) {
                if (cResult[9] === tmp3.cardFeatureLast) {
                  tmp8 = cResult[10];
                }
                if (cResult[18] === tmp5) {
                  if (cResult[19] === "no-hide-descendants") {
                    if (cResult[20] === tmp7) {
                      let tmp11;
                      if (cResult[21] === tmp8) {
                        tmp11 = cResult[22];
                      }
                      return tmp11;
                    }
                  }
                }
                const obj4 = { accessibilityElementsHidden: tmp5, importantForAccessibility: "no-hide-descendants", style: tmp7, children: tmp8 };
                const tmp14 = closure_9(features(tmp[23]).View, obj4);
                cResult[18] = tmp5;
                cResult[19] = "no-hide-descendants";
                cResult[20] = tmp7;
                cResult[21] = tmp8;
                cResult[22] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
        }
      }
      if (cResult[11] === features.length) {
        if (cResult[12] === tmp3.cardFeature) {
          if (cResult[13] === tmp3.cardFeatureExcluded) {
            if (cResult[14] === tmp3.cardFeatureExcludedCopy) {
              if (cResult[15] === tmp3.cardFeatureIcon) {
                let tmp9;
                if (cResult[16] === tmp3.cardFeatureLast) {
                  tmp9 = cResult[17];
                }
                const mapped = features.map(tmp9);
                cResult[4] = features;
                cResult[5] = tmp3.cardFeature;
                cResult[6] = tmp3.cardFeatureExcluded;
                cResult[7] = tmp3.cardFeatureExcludedCopy;
                cResult[8] = tmp3.cardFeatureIcon;
                cResult[9] = tmp3.cardFeatureLast;
                cResult[10] = mapped;
                tmp8 = mapped;
              }
            }
          }
        }
      }
      const fn2 = function c(isIncluded, arg1) {
        const items = [cardFeature.cardFeature, , ];
        isIncluded = isIncluded.isIncluded;
        let cardFeatureExcluded = !isIncluded;
        const tmp = authStore;
        const tmp2 = View;
        if (!isIncluded) {
          cardFeatureExcluded = tmp3.cardFeatureExcluded;
        }
        items[1] = cardFeatureExcluded;
        const obj = { style: items, children: items1 };
        const tmp4 = arg1 === features.length - 1 && cardFeature.cardFeatureLast;
        items[2] = tmp4;
        items1 = [, ];
        const obj2 = { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" };
        items1[0] = React4(isIncluded.IconComponent, obj2);
        const isIncluded2 = isIncluded.isIncluded;
        let cardFeatureExcludedCopy = !isIncluded2;
        const Text = Text_Text.Text;
        const tmp5 = React4;
        if (!isIncluded2) {
          cardFeatureExcludedCopy = tmp3.cardFeatureExcludedCopy;
        }
        const obj3 = { style: cardFeatureExcludedCopy, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
        items1[1] = tmp5(Text, obj3);
        return tmp(tmp2, obj, arg1);
      };
      let num = 11;
      cResult[11] = features.length;
      let num2 = 12;
      cResult[12] = tmp3.cardFeature;
      cResult[13] = tmp3.cardFeatureExcluded;
      cResult[14] = tmp3.cardFeatureExcludedCopy;
      cResult[15] = tmp3.cardFeatureIcon;
      cResult[16] = tmp3.cardFeatureLast;
      cResult[17] = fn2;
      tmp9 = fn2;
    }
  }
  let items = [tmp3.cardFeatures, !isVisible && tmp3.cardFeaturesInvisible, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.cardFeatures;
  cResult[2] = !isVisible && tmp3.cardFeaturesInvisible;
  cResult[3] = items;
  tmp7 = items;
}) : (function TierFeatures(features) {
  let cardFeature;
  let duration;
  let items;
  let tmp = closure_14();
  _require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let Easing;
    let obj2;
    let num = 0;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    if (isVisible) {
      num = duration;
    }
    let num2 = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num2 = 1;
    }
    const obj = { opacity: withDelay(num, withTiming(num2, obj2)) };
    obj2 = { duration, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    Easing = tmp(4850).Easing;
    return obj;
  };
  let obj2 = { withDelay: require("ReanimatedRexport").withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj2;
  fn.__workletHash = 14185267786248;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp3 = closure_9;
  let obj3 = {
    accessibilityElementsHidden: !isVisible,
    importantForAccessibility: "no-hide-descendants",
    style: items,
    children: features.map((isIncluded, index) => {
      const items = [cardFeature.cardFeature, , ];
      isIncluded = isIncluded.isIncluded;
      let cardFeatureExcluded = !isIncluded;
      const tmp = authStore;
      const tmp2 = View;
      if (!isIncluded) {
        cardFeatureExcluded = tmp3.cardFeatureExcluded;
      }
      items[1] = cardFeatureExcluded;
      const obj = { style: items, children: items1 };
      const tmp4 = index === features.length - 1 && cardFeature.cardFeatureLast;
      items[2] = tmp4;
      items1 = [, ];
      const obj2 = { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" };
      items1[0] = React4(isIncluded.IconComponent, obj2);
      const isIncluded2 = isIncluded.isIncluded;
      let cardFeatureExcludedCopy = !isIncluded2;
      const Text = Text_Text.Text;
      const tmp5 = React4;
      if (!isIncluded2) {
        cardFeatureExcludedCopy = tmp3.cardFeatureExcludedCopy;
      }
      const obj3 = { style: cardFeatureExcludedCopy, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
      items1[1] = tmp5(Text, obj3);
      return tmp(tmp2, obj, index);
    })
  };
  View = features(isVisible[23]).View;
  items = [tmp.cardFeatures, !isVisible && tmp.cardFeaturesInvisible, animatedStyle];
  return tmp3(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingMarketingTierCards(guild) {
  let TIER_3;
  let closure_3;
  let isExpanded;
  let onCardPress;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let obj = guild(isExpanded[22]);
  const cResult = obj.c(14);
  const tmp4 = closure_14();
  const tmp = guild;
  guild = guild.guild;
  const ref = react.useRef(null);
  const tmp2 = isExpanded;
  [isExpanded, _slicedToArray] = react.useState(false);
  const obj2 = react;
  if (cResult[0] !== guild.premiumTier) {
    const fn = function l() {
      let premiumTier = window.setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          premiumTier = undefined;
          const _Math = Math;
          const scrollToIndex = current.scrollToIndex;
          premiumTier = Math.min(TIER_3.TIER_3, premiumTier.premiumTier + 1);
          const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
          let num3 = 0;
          if (-1 !== findIndexResult) {
            num3 = findIndexResult;
          }
          scrollToIndex(num3);
        }
      }, 400);
      return () => {
        window.clearTimeout(premiumTier);
      };
    };
    const items = [guild.premiumTier];
    cResult[0] = guild.premiumTier;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function handleCardPress() {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_3((arg0) => !arg0);
    }
    let num3 = 3;
    cResult[3] = handleCardPress;
    tmp11 = handleCardPress;
  } else {
    tmp11 = cResult[3];
  }
  react = tmp11;
  const cardsScrollerContent = tmp4.cardsScrollerContent;
  if (cResult[4] !== guild.premiumTier) {
    let _Math = Math;
    let closure_0 = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
    let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
    let num6 = 0;
    if (-1 !== findIndexResult) {
      num6 = findIndexResult;
    }
    cResult[4] = guild.premiumTier;
    cResult[5] = num6;
    tmp12 = num6;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === guild) {
    let tmp17;
    if (cResult[7] === isExpanded) {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.cardsScroller) {
      if (cResult[10] === tmp4.cardsScrollerContent) {
        if (cResult[11] === tmp12) {
          let tmp19;
          if (cResult[12] === tmp17) {
            tmp19 = cResult[13];
          }
          return tmp19;
        }
      }
    }
    const obj3 = { ref, itemCount: items1.length, cardWidth: 290, cardMarginRight: 10, contentContainerStyle: cardsScrollerContent, initialIndex: tmp12, style: tmp16, children: tmp17 };
    const tmp22 = closure_9(tmp(tmp2[38]).MarketingCardsScroller, obj3);
    cResult[9] = tmp4.cardsScroller;
    cResult[10] = tmp4.cardsScrollerContent;
    cResult[11] = tmp12;
    cResult[12] = tmp17;
    cResult[13] = tmp22;
    tmp19 = tmp22;
  }
  const mapped = items1.map((features) => {
    const tier = features.tier;
    const obj = { features: features.features, guild, isExpanded, onCardPress, tier };
    return React4(GuildBoostingMarketingTierCard, obj, tier);
  });
  cResult[6] = guild;
  cResult[7] = isExpanded;
  cResult[8] = mapped;
  tmp17 = mapped;
}) : (function GuildBoostingMarketingTierCards(guild) {
  let TIER_3;
  let arr2;
  let isExpanded;
  let num;
  function handleCardPress() {
    const obj = DeprecatedLayoutAnimation;
    const result = obj.DeprecatedLayoutAnimation();
    _slicedToArray((arg0) => !arg0);
  }
  const tmp = closure_14();
  guild = guild.guild;
  const ref = handleCardPress.useRef(null);
  const tmp3 = _slicedToArray(handleCardPress.useState(false), 2);
  [dependencyMap, _slicedToArray] = tmp3;
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    let premiumTier = window.setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        premiumTier = undefined;
        const _Math = Math;
        const scrollToIndex = current.scrollToIndex;
        premiumTier = Math.min(TIER_3.TIER_3, premiumTier.premiumTier + 1);
        const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
        let num3 = 0;
        if (-1 !== findIndexResult) {
          num3 = findIndexResult;
        }
        scrollToIndex(num3);
      }
    }, 400);
    return () => {
      window.clearTimeout(premiumTier);
    };
  }, items);
  let obj = {
    ref,
    itemCount: items1.length,
    cardWidth: 290,
    cardMarginRight: 10,
    contentContainerStyle: tmp.cardsScrollerContent,
    initialIndex: num,
    style: tmp.cardsScroller,
    children: arr2.map((features) => {
      const tier = features.tier;
      const obj = { features: features.features, guild, isExpanded: dependencyMap, onCardPress: handleCardPress, tier };
      return React4(GuildBoostingMarketingTierCard, obj, tier);
    })
  };
  const MarketingCardsScroller = guild(12304).MarketingCardsScroller;
  let closure_0 = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
  let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
  num = 0;
  arr2 = items1;
  const tmp5 = closure_9;
  if (-1 !== findIndexResult) {
    num = findIndexResult;
  }
  return tmp5(MarketingCardsScroller, obj);
});
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx");

export default tmp5;

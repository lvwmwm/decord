// Module ID: 12866
// Function ID: 98327
// Name: _isNativeReflectConstruct
// Dependencies: [357629952, 131072, 528023552, 452984832, 3791650816, 553648129, 503316480, 2969567248, 3170893826, 1744830481, 33554461, 2046820352, 31, 27, 653, 33]
// Exports: canUserUse

// Module 12866 (_isNativeReflectConstruct)
import module_33 from "module_33";

let PremiumSubscriptionSKUs;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ PremiumSubscriptionSKUs, PremiumTypeToActivePremiumSubscriptionSKU: closure_9 } = arg1(dependencyMap[6]));
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("ProductCatalog.tsx");
let tmp5 = (arg0) => {
  class ProductCatalogFeature {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_4(this, ProductCatalogFeature);
      items = [, , ];
      items[0] = arg0;
      items[1] = (premiumType) => {
        let flag = false;
        if (null != premiumType) {
          flag = false;
          if (null != tmp2.premiumType) {
            if (null == closure_9[tmp2.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              closure_10.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              flag = false;
            } else {
              if (null == closure_11[tmp7]) {
                const _HermesInternal = HermesInternal;
                closure_10.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp7 + " and premium type " + tmp2.premiumType);
                let flag2 = false;
              } else {
                const skuFeatures = tmp10.skuFeatures;
                flag2 = skuFeatures.includes(tmp);
              }
              flag = flag2;
            }
          }
        }
        return flag;
      };
      items[2] = arg1;
      obj = closure_7(ProductCatalogFeature);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ProductCatalogFeature = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = ProductCatalogFeature;
  callback2(ProductCatalogFeature, arg0);
  return callback(ProductCatalogFeature);
}(importDefault(dependencyMap[8]));
tmp5 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.ANIMATED_EMOJIS);
tmp5 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
const tmp51 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.STICKERS_EVERYWHERE);
const tmp52 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
const tmp53 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.CUSTOM_CALL_SOUNDS);
const tmp54 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.PREMIUM_VOICE_FILTERS);
const tmp55 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.ANIMATED_AVATAR);
const tmp56 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.CUSTOM_DISCRIMINATOR);
const tmp57 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.PREMIUM_GUILD_MEMBER_PROFILE);
const tmp58 = new tmp5("profileBadges");
const tmp59 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration");
const tmp510 = new tmp5("collectibles");
const tmp511 = new tmp5("appIcons");
const tmp512 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.CLIENT_THEMES);
const tmp513 = new tmp5("boostDiscount");
const tmp514 = new tmp5("freeBoosts");
const tmp515 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.STREAM_MID_QUALITY);
const tmp516 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
const tmp517 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.CUSTOM_NOTIFICATION_SOUNDS);
const tmp518 = new tmp5("fancyVoiceChannelReactions");
const tmp519 = new tmp5("installPremiumApplications");
const tmp520 = new tmp5("redeemPremiumPerks");
const tmp521 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.VIDEO_FILTER_ASSETS);
let importDefaultResult1 = importDefault(dependencyMap[8]);
importDefaultResult1 = new importDefaultResult1(arg1(dependencyMap[9]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE, arg1(dependencyMap[10]).getUserMaxFileSize);
const tmp522 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.INCREASED_GUILD_LIMIT);
const tmp523 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.INCREASED_MESSAGE_LENGTH);
const tmp524 = new tmp5("increasedVideoUploadQuality");
const tmp525 = new tmp5("uploadLargeFiles");
const tmp526 = new tmp5(arg1(dependencyMap[9]).EntitlementFeatureNames.QUEST_ORB_MULTIPLIER);
const obj = {};
let importDefaultResult2 = importDefault(dependencyMap[11]);
const items = [tmp5, tmp5, tmp51, tmp58, tmp521, tmp524, tmp525, tmp511];
importDefaultResult2 = new importDefaultResult2(PremiumSubscriptionSKUs.TIER_0, items);
obj[PremiumSubscriptionSKUs.TIER_0] = importDefaultResult2;
let importDefaultResult3 = importDefault(dependencyMap[11]);
const items1 = [tmp5, tmp5, tmp55, tmp56, tmp58, tmp513, tmp515, tmp518, tmp524, tmp525, tmp511];
importDefaultResult3 = new importDefaultResult3(PremiumSubscriptionSKUs.TIER_1, items1);
obj[PremiumSubscriptionSKUs.TIER_1] = importDefaultResult3;
let importDefaultResult4 = importDefault(dependencyMap[11]);
const items2 = [tmp5, tmp5, tmp51, tmp52, tmp53, tmp55, tmp56, tmp57, tmp58, tmp59, tmp512, tmp513, tmp514, tmp515, tmp516, tmp518, tmp519, tmp520, tmp521, tmp522, tmp523, tmp524, tmp525, tmp511, tmp510, tmp517, tmp54, tmp526];
importDefaultResult4 = new importDefaultResult4(PremiumSubscriptionSKUs.TIER_2, items2);
obj[PremiumSubscriptionSKUs.TIER_2] = importDefaultResult4;
const frozen = Object.freeze(obj);
const items3 = [tmp513, tmp514];
const items4 = [tmp526];
let closure_14 = [];
const items5 = [tmp5, require("module_31").Perk.ANIMATED_EMOJIS];
const items6 = [items5, , , , , , , , , , , , , , , , , , , , , , , ];
const items7 = [tmp5, require("module_31").Perk.EMOJIS_EVERYWHERE];
items6[1] = items7;
const items8 = [tmp51, require("module_31").Perk.STICKERS_EVERYWHERE];
items6[2] = items8;
const items9 = [tmp52, require("module_31").Perk.SOUNDBOARD_EVERYWHERE];
items6[3] = items9;
const items10 = [tmp53, require("module_31").Perk.CUSTOM_CALL_SOUNDS];
items6[4] = items10;
const items11 = [tmp54, require("module_31").Perk.PREMIUM_VOICE_FILTERS];
items6[5] = items11;
const items12 = [tmp55, require("module_31").Perk.ANIMATED_AVATAR];
items6[6] = items12;
const items13 = [tmp56, require("module_31").Perk.CUSTOM_DISCRIMINATOR];
items6[7] = items13;
const items14 = [tmp57, require("module_31").Perk.PREMIUM_GUILD_MEMBER_PROFILE];
items6[8] = items14;
const items15 = [tmp59, require("module_31").Perk.PROFILE_PREMIUM_FEATURES];
items6[9] = items15;
const items16 = [tmp510, require("module_31").Perk.PREMIUM_COLLECTIBLES];
items6[10] = items16;
const items17 = [tmp512, require("module_31").Perk.CLIENT_THEMES];
items6[11] = items17;
const items18 = [tmp515, require("module_31").Perk.STREAM_MID_QUALITY];
items6[12] = items18;
const items19 = [tmp516, require("module_31").Perk.STREAM_HIGH_QUALITY];
items6[13] = items19;
const items20 = [tmp521, require("module_31").Perk.VIDEO_FILTER_ASSETS];
items6[14] = items20;
const items21 = [tmp522, require("module_31").Perk.INCREASED_GUILD_LIMIT];
items6[15] = items21;
const items22 = [tmp523, require("module_31").Perk.INCREASED_MESSAGE_LENGTH];
items6[16] = items22;
const items23 = [tmp525, require("module_31").Perk.INCREASED_FILE_UPLOAD_SIZE];
items6[17] = items23;
const items24 = [tmp58, require("module_31").Perk.PROFILE_BADGES];
items6[18] = items24;
const items25 = [tmp511, require("module_31").Perk.APP_ICONS];
items6[19] = items25;
const items26 = [tmp513, require("module_31").Perk.BOOST_DISCOUNT];
items6[20] = items26;
const items27 = [tmp514, require("module_31").Perk.FREE_BOOSTS];
items6[21] = items27;
const items28 = [tmp519, require("module_31").Perk.INSTALL_PREMIUM_APPLICATIONS];
items6[22] = items28;
const items29 = [tmp524, require("module_31").Perk.INCREASED_VIDEO_UPLOAD_QUALITY];
items6[23] = items29;
const map = new Map(items6);
const result = module_33.fileFinishedImporting("modules/premium/ProductCatalog.tsx");

export const ANIMATED_EMOJIS = tmp5;
export const EMOJIS_EVERYWHERE = tmp5;
export const STICKERS_EVERYWHERE = tmp51;
export const SOUNDBOARD_EVERYWHERE = tmp52;
export const CUSTOM_CALL_SOUNDS = tmp53;
export const PREMIUM_VOICE_FILTERS = tmp54;
export const ANIMATED_AVATAR = tmp55;
export const CUSTOM_DISCRIMINATOR = tmp56;
export const PREMIUM_GUILD_MEMBER_PROFILE = tmp57;
export const PROFILE_BADGES = tmp58;
export const PROFILE_PREMIUM_FEATURES = tmp59;
export const COLLECTIBLES = tmp510;
export const APP_ICONS = tmp511;
export const CLIENT_THEMES = tmp512;
export const BOOST_DISCOUNT = tmp513;
export const FREE_BOOSTS = tmp514;
export const STREAM_MID_QUALITY = tmp515;
export const STREAM_HIGH_QUALITY = tmp516;
export const CUSTOM_NOTIFICATION_SOUNDS = tmp517;
export const FANCY_VOICE_CHANNEL_REACTIONS = tmp518;
export const INSTALL_PREMIUM_APPLICATIONS = tmp519;
export const REDEEM_PREMIUM_PERKS = tmp520;
export const VIDEO_FILTER_ASSETS = tmp521;
export const INCREASED_FILE_UPLOAD_SIZE = importDefaultResult1;
export const INCREASED_GUILD_LIMIT = tmp522;
export const INCREASED_MESSAGE_LENGTH = tmp523;
export const INCREASED_VIDEO_UPLOAD_QUALITY = tmp524;
export const UPLOAD_LARGE_FILES = tmp525;
export const QUEST_ORB_MULTIPLIER = tmp526;
export const PRODUCT_CATALOG = frozen;
export const canUserUse = function canUserUse(ANIMATED_AVATAR, isPremiumWithFractionalPremiumOnly) {
  if (null != isPremiumWithFractionalPremiumOnly) {
    if (isPremiumWithFractionalPremiumOnly.isPremiumWithFractionalPremiumOnly()) {
      if (items3.includes(ANIMATED_AVATAR)) {
        return false;
      }
    }
  }
  if (null != isPremiumWithFractionalPremiumOnly) {
    if (isPremiumWithFractionalPremiumOnly.isFractionalPremiumWithNoStandardSub()) {
      if (items4.includes(ANIMATED_AVATAR)) {
        return false;
      }
    }
  }
  if (arg2) {
    if (closure_14.includes(ANIMATED_AVATAR)) {
      return false;
    }
  }
  const value = map.get(ANIMATED_AVATAR);
  if (null != value) {
    let perks;
    if (null != isPremiumWithFractionalPremiumOnly) {
      perks = isPremiumWithFractionalPremiumOnly.perks;
    }
    if (null != perks) {
      let obj = importDefault(dependencyMap[13]);
      obj = { location: "product_catalog_can_user_use" };
      const config = obj.getConfig(obj);
      if (config !== isPremiumWithFractionalPremiumOnly(dependencyMap[13]).DenormalizedPerksReadConfig.CONTROL) {
        let featureValue = ANIMATED_AVATAR.getFeatureValue(isPremiumWithFractionalPremiumOnly);
        let perks1;
        if (null != isPremiumWithFractionalPremiumOnly) {
          perks1 = isPremiumWithFractionalPremiumOnly.perks;
        }
        const obj3 = isPremiumWithFractionalPremiumOnly(dependencyMap[14]);
        if (config === isPremiumWithFractionalPremiumOnly(dependencyMap[13]).DenormalizedPerksReadConfig.DUAL_READ_RETURN_NEW) {
          featureValue = hasPerkResult;
        }
        return featureValue;
      }
    }
  }
  return ANIMATED_AVATAR.getFeatureValue(isPremiumWithFractionalPremiumOnly);
};

// Module ID: 13039
// Function ID: 100839
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 16, 15, 17, 18, 1851, 3, 13040, 8038, 8056, 13041, 1867, 13042, 1865, 2]
// Exports: canUserUse

// Module 13039 (_isNativeReflectConstruct)
import timestamp from "timestamp";
import closure_4 from "GuildFeatures";
import _assertThisInitialized from "_assertThisInitialized";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "_possibleConstructorReturn";
import tmp5 from "PremiumSKUFeature";
import importDefaultResult1 from "PremiumSKUFeature";
import importDefaultResult2 from "SKUListing";
import importDefaultResult3 from "SKUListing";
import importDefaultResult4 from "SKUListing";

let PremiumSubscriptionSKUs;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ PremiumSubscriptionSKUs, PremiumTypeToActivePremiumSubscriptionSKU: closure_9 } = GuildFeatures);
importDefaultResult = new importDefaultResult("ProductCatalog.tsx");
tmp5 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.ANIMATED_EMOJIS);
tmp5 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.EMOJIS_EVERYWHERE);
const tmp51 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.STICKERS_EVERYWHERE);
const tmp52 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
const tmp53 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.CUSTOM_CALL_SOUNDS);
const tmp54 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.PREMIUM_VOICE_FILTERS);
const tmp55 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.ANIMATED_AVATAR);
const tmp56 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.CUSTOM_DISCRIMINATOR);
const tmp57 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.PREMIUM_GUILD_MEMBER_PROFILE);
const tmp58 = new tmp5("profileBadges");
const tmp59 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration");
const tmp510 = new tmp5("collectibles");
const tmp511 = new tmp5("appIcons");
const tmp512 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.CLIENT_THEMES);
const tmp513 = new tmp5("boostDiscount");
const tmp514 = new tmp5("freeBoosts");
const tmp515 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.STREAM_MID_QUALITY);
const tmp516 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.STREAM_HIGH_QUALITY);
const tmp517 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.CUSTOM_NOTIFICATION_SOUNDS);
const tmp518 = new tmp5("fancyVoiceChannelReactions");
const tmp519 = new tmp5("installPremiumApplications");
const tmp520 = new tmp5("redeemPremiumPerks");
const tmp521 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.VIDEO_FILTER_ASSETS);
importDefaultResult1 = new importDefaultResult1(require("EntitlementFeatureNames").EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE, require("getUserMaxFileSize").getUserMaxFileSize);
const tmp522 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.INCREASED_GUILD_LIMIT);
const tmp523 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.INCREASED_MESSAGE_LENGTH);
const tmp524 = new tmp5("increasedVideoUploadQuality");
const tmp525 = new tmp5("uploadLargeFiles");
const tmp526 = new tmp5(require("EntitlementFeatureNames").EntitlementFeatureNames.QUEST_ORB_MULTIPLIER);
let obj = {};
let items = [tmp5, tmp5, tmp51, tmp58, tmp521, tmp524, tmp525, tmp511];
importDefaultResult2 = new importDefaultResult2(PremiumSubscriptionSKUs.TIER_0, items);
obj[PremiumSubscriptionSKUs.TIER_0] = importDefaultResult2;
const items1 = [tmp5, tmp5, tmp55, tmp56, tmp58, tmp513, tmp515, tmp518, tmp524, tmp525, tmp511];
importDefaultResult3 = new importDefaultResult3(PremiumSubscriptionSKUs.TIER_1, items1);
obj[PremiumSubscriptionSKUs.TIER_1] = importDefaultResult3;
const items2 = [tmp5, tmp5, tmp51, tmp52, tmp53, tmp55, tmp56, tmp57, tmp58, tmp59, tmp512, tmp513, tmp514, tmp515, tmp516, tmp518, tmp519, tmp520, tmp521, tmp522, tmp523, tmp524, tmp525, tmp511, tmp510, tmp517, tmp54, tmp526];
importDefaultResult4 = new importDefaultResult4(PremiumSubscriptionSKUs.TIER_2, items2);
obj[PremiumSubscriptionSKUs.TIER_2] = importDefaultResult4;
const frozen = Object.freeze(obj);
const items3 = [tmp513, tmp514];
const items4 = [tmp526];
let closure_14 = [];
const items5 = [tmp5, require("_callSuper").Perk.ANIMATED_EMOJIS];
const items6 = [items5, , , , , , , , , , , , , , , , , , , , , , , ];
const items7 = [tmp5, require("_callSuper").Perk.EMOJIS_EVERYWHERE];
items6[1] = items7;
const items8 = [tmp51, require("_callSuper").Perk.STICKERS_EVERYWHERE];
items6[2] = items8;
const items9 = [tmp52, require("_callSuper").Perk.SOUNDBOARD_EVERYWHERE];
items6[3] = items9;
const items10 = [tmp53, require("_callSuper").Perk.CUSTOM_CALL_SOUNDS];
items6[4] = items10;
const items11 = [tmp54, require("_callSuper").Perk.PREMIUM_VOICE_FILTERS];
items6[5] = items11;
const items12 = [tmp55, require("_callSuper").Perk.ANIMATED_AVATAR];
items6[6] = items12;
const items13 = [tmp56, require("_callSuper").Perk.CUSTOM_DISCRIMINATOR];
items6[7] = items13;
const items14 = [tmp57, require("_callSuper").Perk.PREMIUM_GUILD_MEMBER_PROFILE];
items6[8] = items14;
const items15 = [tmp59, require("_callSuper").Perk.PROFILE_PREMIUM_FEATURES];
items6[9] = items15;
const items16 = [tmp510, require("_callSuper").Perk.PREMIUM_COLLECTIBLES];
items6[10] = items16;
const items17 = [tmp512, require("_callSuper").Perk.CLIENT_THEMES];
items6[11] = items17;
const items18 = [tmp515, require("_callSuper").Perk.STREAM_MID_QUALITY];
items6[12] = items18;
const items19 = [tmp516, require("_callSuper").Perk.STREAM_HIGH_QUALITY];
items6[13] = items19;
const items20 = [tmp521, require("_callSuper").Perk.VIDEO_FILTER_ASSETS];
items6[14] = items20;
const items21 = [tmp522, require("_callSuper").Perk.INCREASED_GUILD_LIMIT];
items6[15] = items21;
const items22 = [tmp523, require("_callSuper").Perk.INCREASED_MESSAGE_LENGTH];
items6[16] = items22;
const items23 = [tmp525, require("_callSuper").Perk.INCREASED_FILE_UPLOAD_SIZE];
items6[17] = items23;
const items24 = [tmp58, require("_callSuper").Perk.PROFILE_BADGES];
items6[18] = items24;
const items25 = [tmp511, require("_callSuper").Perk.APP_ICONS];
items6[19] = items25;
const items26 = [tmp513, require("_callSuper").Perk.BOOST_DISCOUNT];
items6[20] = items26;
const items27 = [tmp514, require("_callSuper").Perk.FREE_BOOSTS];
items6[21] = items27;
const items28 = [tmp519, require("_callSuper").Perk.INSTALL_PREMIUM_APPLICATIONS];
items6[22] = items28;
const items29 = [tmp524, require("_callSuper").Perk.INCREASED_VIDEO_UPLOAD_QUALITY];
items6[23] = items29;
const map = new Map(items6);
let result = require("_assertThisInitialized").fileFinishedImporting("modules/premium/ProductCatalog.tsx");

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
      let obj = importDefault(13042);
      obj = { location: "product_catalog_can_user_use" };
      const config = obj.getConfig(obj);
      if (config !== require(13042) /* apexExperiment */.DenormalizedPerksReadConfig.CONTROL) {
        let featureValue = ANIMATED_AVATAR.getFeatureValue(isPremiumWithFractionalPremiumOnly);
        let perks1;
        if (null != isPremiumWithFractionalPremiumOnly) {
          perks1 = isPremiumWithFractionalPremiumOnly.perks;
        }
        const obj3 = require(1865) /* parseServerPerkConfigKind */;
        if (config === require(13042) /* apexExperiment */.DenormalizedPerksReadConfig.DUAL_READ_RETURN_NEW) {
          featureValue = hasPerkResult;
        }
        return featureValue;
      }
    }
  }
  return ANIMATED_AVATAR.getFeatureValue(isPremiumWithFractionalPremiumOnly);
};

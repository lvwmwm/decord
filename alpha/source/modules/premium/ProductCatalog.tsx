// Module ID: 16215
// Function ID: 16216
// Name: ProductCatalog
// Dependencies: [1386, 1387, 3, 1398, 1391, 2]
// Exports: canUserUse

// Module 16215 (ProductCatalog)
import LoggerDefault from "Logger" /* 3 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PerksStateUtils from "PerksStateUtils" /* 1391 */;
import user from "user" /* 1398 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const logger = new LoggerDefault("ProductCatalog.tsx");
const obj = {};
const TIER_0 = PremiumTypes.TIER_0;
const tmp2 = new LoggerDefault("ProductCatalog.tsx");
const items = [user.Perk.ANIMATED_EMOJIS, user.Perk.EMOJIS_EVERYWHERE, user.Perk.STICKERS_EVERYWHERE, user.Perk.PROFILE_BADGES, user.Perk.VIDEO_FILTER_ASSETS, user.Perk.INCREASED_VIDEO_UPLOAD_QUALITY, user.Perk.INCREASED_FILE_UPLOAD_SIZE, user.Perk.APP_ICONS];
obj[TIER_0] = new Set(items);
const TIER_1 = PremiumTypes.TIER_1;
const items1 = [, , , , , , , , , ];
new Set(items);
items1[0] = user.Perk.ANIMATED_EMOJIS;
items1[1] = user.Perk.EMOJIS_EVERYWHERE;
items1[2] = user.Perk.ANIMATED_AVATAR;
items1[3] = user.Perk.CUSTOM_DISCRIMINATOR;
items1[4] = user.Perk.PROFILE_BADGES;
items1[5] = user.Perk.BOOST_DISCOUNT;
items1[6] = user.Perk.STREAM_MID_QUALITY;
items1[7] = user.Perk.INCREASED_VIDEO_UPLOAD_QUALITY;
items1[8] = user.Perk.INCREASED_FILE_UPLOAD_SIZE;
items1[9] = user.Perk.APP_ICONS;
obj[TIER_1] = new Set(items1);
const TIER_2 = PremiumTypes.TIER_2;
const items2 = [, , , , , , , , , , , , , , , , , , , , , , ];
new Set(items1);
items2[0] = user.Perk.ANIMATED_EMOJIS;
items2[1] = user.Perk.EMOJIS_EVERYWHERE;
items2[2] = user.Perk.STICKERS_EVERYWHERE;
items2[3] = user.Perk.SOUNDBOARD_EVERYWHERE;
items2[4] = user.Perk.CUSTOM_CALL_SOUNDS;
items2[5] = user.Perk.ANIMATED_AVATAR;
items2[6] = user.Perk.CUSTOM_DISCRIMINATOR;
items2[7] = user.Perk.PREMIUM_GUILD_MEMBER_PROFILE;
items2[8] = user.Perk.PROFILE_BADGES;
items2[9] = user.Perk.PROFILE_PREMIUM_FEATURES;
items2[10] = user.Perk.CLIENT_THEMES;
items2[11] = user.Perk.BOOST_DISCOUNT;
items2[12] = user.Perk.FREE_BOOSTS;
items2[13] = user.Perk.STREAM_MID_QUALITY;
items2[14] = user.Perk.STREAM_HIGH_QUALITY;
items2[15] = user.Perk.INSTALL_PREMIUM_APPLICATIONS;
items2[16] = user.Perk.VIDEO_FILTER_ASSETS;
items2[17] = user.Perk.INCREASED_GUILD_LIMIT;
items2[18] = user.Perk.INCREASED_MESSAGE_LENGTH;
items2[19] = user.Perk.INCREASED_VIDEO_UPLOAD_QUALITY;
items2[20] = user.Perk.INCREASED_FILE_UPLOAD_SIZE;
items2[21] = user.Perk.APP_ICONS;
items2[22] = user.Perk.PREMIUM_COLLECTIBLES;
obj[TIER_2] = new Set(items2);
const items3 = [, ];
new Set(items2);
items3[0] = user.Perk.BOOST_DISCOUNT;
items3[1] = user.Perk.FREE_BOOSTS;
const set3 = new Set(items3);
const result = size.fileFinishedImporting("modules/premium/ProductCatalog.tsx");

export function canUserUse(PREMIUM_COLLECTIBLES, isPremiumWithFractionalPremiumOnly) {
  let tmp = null == isPremiumWithFractionalPremiumOnly || !isPremiumWithFractionalPremiumOnly.isPremiumWithFractionalPremiumOnly() || !set3.has(PREMIUM_COLLECTIBLES);
  if (tmp) {
    let flag;
    if (OverridePremiumTypeStore.hasPremiumTypeOverride(isPremiumWithFractionalPremiumOnly)) {
      let premiumType;
      if (isPremiumWithFractionalPremiumOnly != null) {
        premiumType = isPremiumWithFractionalPremiumOnly.premiumType;
      }
      let flag3 = false;
      if (null != premiumType) {
        let flag4;
        if (null == obj[isPremiumWithFractionalPremiumOnly.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the perks for the user's premium type " + isPremiumWithFractionalPremiumOnly.premiumType);
          flag4 = false;
        } else {
          flag4 = obj3.has(PREMIUM_COLLECTIBLES);
        }
        flag3 = flag4;
      }
      flag = flag3;
    } else {
      let perks;
      if (isPremiumWithFractionalPremiumOnly != null) {
        perks = isPremiumWithFractionalPremiumOnly.perks;
      }
      if (null != perks) {
        const obj2 = PerksStateUtils;
        flag = obj2.hasUnrestrictedPerk(isPremiumWithFractionalPremiumOnly.perks, PREMIUM_COLLECTIBLES);
      } else {
        let premiumType1;
        if (isPremiumWithFractionalPremiumOnly != null) {
          premiumType1 = isPremiumWithFractionalPremiumOnly.premiumType;
        }
        flag = false;
        if (null != premiumType1) {
          let flag2;
          if (null == obj[isPremiumWithFractionalPremiumOnly.premiumType]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the perks for the user's premium type " + isPremiumWithFractionalPremiumOnly.premiumType);
            flag2 = false;
          } else {
            flag2 = obj.has(PREMIUM_COLLECTIBLES);
          }
          flag = flag2;
        }
      }
    }
    tmp = flag;
  }
  return tmp;
}

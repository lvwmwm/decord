// Module ID: 9053
// Function ID: 9054
// Name: GuildBadgeImageSource
// Dependencies: [9054, 5840, 5841, 9056, 9057, 9058, 9059, 9060, 9061, 4639, 9055, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 9053 (GuildBadgeImageSource)
import shared from "shared" /* 4639 */;
import _modDef5840 from "module_5840" /* 5840 */;
import _modDef5841 from "module_5841" /* 5841 */;
import BadgeCategory from "BadgeCategory" /* 9054 */;
import GuildTraits from "GuildTraits" /* 9055 */;
import _modDef9056 from "module_9056" /* 9056 */;
import _modDef9057 from "module_9057" /* 9057 */;
import _modDef9058 from "module_9058" /* 9058 */;
import _modDef9059 from "module_9059" /* 9059 */;
import _modDef9060 from "module_9060" /* 9060 */;
import _modDef9061 from "module_9061" /* 9061 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9054).BadgeCategory.STAFF] = { imageSource: _modDef5840 };
let obj2 = { imageSource: _modDef5840 };
badgeVariants[fn(9054).BadgeCategory.PARTNERED] = { imageSource: _modDef5841 };
const obj3 = { imageSource: _modDef5841 };
badgeVariants[fn(9054).BadgeCategory.VERIFIED] = { imageSource: _modDef5840 };
const obj4 = { imageSource: _modDef5840 };
badgeVariants[fn(9054).BadgeCategory.COMMUNITY] = { imageSource: _modDef9056, imageSourceLight: _modDef9057, premiumImageSource: _modDef9058 };
const obj5 = { imageSource: _modDef9056, imageSourceLight: _modDef9057, premiumImageSource: _modDef9058 };
badgeVariants[fn(9054).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9059, imageSourceLight: _modDef9060, premiumImageSource: _modDef9061 };
const obj6 = { imageSource: _modDef9059, imageSourceLight: _modDef9060, premiumImageSource: _modDef9061 };
badgeVariants[fn(9054).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5840 };
badgeVariants[fn(9054).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(arg2)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
};
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(theme)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = shared;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};

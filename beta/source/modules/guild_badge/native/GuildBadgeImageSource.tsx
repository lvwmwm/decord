// Module ID: 9051
// Function ID: 9052
// Name: GuildBadgeImageSource
// Dependencies: [9052, 5838, 5839, 9054, 9055, 9056, 9057, 9058, 9059, 4642, 9053, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 9051 (GuildBadgeImageSource)
import shared from "shared" /* 4642 */;
import _modDef5838 from "module_5838" /* 5838 */;
import _modDef5839 from "module_5839" /* 5839 */;
import BadgeCategory from "BadgeCategory" /* 9052 */;
import GuildTraits from "GuildTraits" /* 9053 */;
import _modDef9054 from "module_9054" /* 9054 */;
import _modDef9055 from "module_9055" /* 9055 */;
import _modDef9056 from "module_9056" /* 9056 */;
import _modDef9057 from "module_9057" /* 9057 */;
import _modDef9058 from "module_9058" /* 9058 */;
import _modDef9059 from "module_9059" /* 9059 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9052).BadgeCategory.STAFF] = { imageSource: _modDef5838 };
let obj2 = { imageSource: _modDef5838 };
badgeVariants[fn(9052).BadgeCategory.PARTNERED] = { imageSource: _modDef5839 };
const obj3 = { imageSource: _modDef5839 };
badgeVariants[fn(9052).BadgeCategory.VERIFIED] = { imageSource: _modDef5838 };
const obj4 = { imageSource: _modDef5838 };
badgeVariants[fn(9052).BadgeCategory.COMMUNITY] = { imageSource: _modDef9054, imageSourceLight: _modDef9055, premiumImageSource: _modDef9056 };
const obj5 = { imageSource: _modDef9054, imageSourceLight: _modDef9055, premiumImageSource: _modDef9056 };
badgeVariants[fn(9052).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9057, imageSourceLight: _modDef9058, premiumImageSource: _modDef9059 };
const obj6 = { imageSource: _modDef9057, imageSourceLight: _modDef9058, premiumImageSource: _modDef9059 };
badgeVariants[fn(9052).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5838 };
badgeVariants[fn(9052).BadgeCategory.NONE] = {};
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

// Module ID: 9019
// Function ID: 9020
// Name: GuildBadgeImageSource
// Dependencies: [9020, 5806, 5807, 9022, 9023, 9024, 9025, 9026, 9027, 4610, 9021, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 9019 (GuildBadgeImageSource)
import shared from "shared" /* 4610 */;
import _modDef5806 from "module_5806" /* 5806 */;
import _modDef5807 from "module_5807" /* 5807 */;
import BadgeCategory from "BadgeCategory" /* 9020 */;
import GuildTraits from "GuildTraits" /* 9021 */;
import _modDef9022 from "module_9022" /* 9022 */;
import _modDef9023 from "module_9023" /* 9023 */;
import _modDef9024 from "module_9024" /* 9024 */;
import _modDef9025 from "module_9025" /* 9025 */;
import _modDef9026 from "module_9026" /* 9026 */;
import _modDef9027 from "module_9027" /* 9027 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9020).BadgeCategory.STAFF] = { imageSource: _modDef5806 };
let obj2 = { imageSource: _modDef5806 };
badgeVariants[fn(9020).BadgeCategory.PARTNERED] = { imageSource: _modDef5807 };
const obj3 = { imageSource: _modDef5807 };
badgeVariants[fn(9020).BadgeCategory.VERIFIED] = { imageSource: _modDef5806 };
const obj4 = { imageSource: _modDef5806 };
badgeVariants[fn(9020).BadgeCategory.COMMUNITY] = { imageSource: _modDef9022, imageSourceLight: _modDef9023, premiumImageSource: _modDef9024 };
const obj5 = { imageSource: _modDef9022, imageSourceLight: _modDef9023, premiumImageSource: _modDef9024 };
badgeVariants[fn(9020).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9025, imageSourceLight: _modDef9026, premiumImageSource: _modDef9027 };
const obj6 = { imageSource: _modDef9025, imageSourceLight: _modDef9026, premiumImageSource: _modDef9027 };
badgeVariants[fn(9020).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5806 };
badgeVariants[fn(9020).BadgeCategory.NONE] = {};
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

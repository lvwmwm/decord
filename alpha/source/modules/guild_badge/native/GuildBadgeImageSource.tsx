// Module ID: 8842
// Function ID: 8843
// Name: GuildBadgeImageSource
// Dependencies: [8840, 6168, 6169, 8843, 8844, 8845, 8846, 8847, 8848, 4929, 8839, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 8842 (GuildBadgeImageSource)
import shared from "shared" /* 4929 */;
import AssetRegistryDefault from "AssetRegistry" /* 6168 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6169 */;
import GuildTraits from "GuildTraits" /* 8839 */;
import BadgeCategory from "BadgeCategory" /* 8840 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8843 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8844 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8845 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8846 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 8847 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 8848 */;
import size from "module_2" /* 2 */;

const badgeVariants = {};
let obj2 = { imageSource: AssetRegistryDefault };
const STAFF = BadgeCategory.BadgeCategory.STAFF;
badgeVariants[STAFF] = obj2;
const obj3 = { imageSource: AssetRegistryDefault2 };
const PARTNERED = BadgeCategory.BadgeCategory.PARTNERED;
badgeVariants[PARTNERED] = obj3;
const obj4 = { imageSource: AssetRegistryDefault };
const VERIFIED = BadgeCategory.BadgeCategory.VERIFIED;
badgeVariants[VERIFIED] = obj4;
const obj5 = { imageSource: AssetRegistryDefault3, imageSourceLight: AssetRegistryDefault4, premiumImageSource: AssetRegistryDefault5 };
const COMMUNITY = BadgeCategory.BadgeCategory.COMMUNITY;
badgeVariants[COMMUNITY] = obj5;
const obj6 = { imageSource: AssetRegistryDefault6, imageSourceLight: AssetRegistryDefault7, premiumImageSource: AssetRegistryDefault8 };
const DISCOVERABLE = BadgeCategory.BadgeCategory.DISCOVERABLE;
badgeVariants[DISCOVERABLE] = obj6;
const obj7 = { imageSource: AssetRegistryDefault };
const VERIFIED_AND_PARTNERED = BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED;
badgeVariants[VERIFIED_AND_PARTNERED] = obj7;
badgeVariants[BadgeCategory.BadgeCategory.NONE] = {};
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
  let imageSource;
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  const obj = shared;
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
  let tmp5 = null;
  if (null != tmp4) {
    let imageSource;
    if (guildTraits.premium) {
      if (null != tmp4.premiumImageSource) {
        imageSource = tmp4.premiumImageSource;
      }
      tmp5 = imageSource;
    }
    const tmpResult = shared;
    if (tmpResult.isThemeLight(theme)) {
      if (null != tmp4.imageSourceLight) {
        imageSource = tmp4.imageSourceLight;
      }
    }
    imageSource = tmp4.imageSource;
  }
  return tmp5;
};

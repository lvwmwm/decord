// Module ID: 9269
// Function ID: 9270
// Name: GuildBadgeImageSource
// Dependencies: [9267, 6920, 6921, 9270, 9271, 9272, 9273, 9274, 9275, 5010, 9266, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 9269 (GuildBadgeImageSource)
import shared from "shared" /* 5010 */;
import AssetRegistryDefault from "AssetRegistry" /* 6920 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6921 */;
import GuildTraits from "GuildTraits" /* 9266 */;
import BadgeCategory from "BadgeCategory" /* 9267 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9270 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9271 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9272 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9273 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9274 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9275 */;
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

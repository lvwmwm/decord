// Module ID: 5702
// Function ID: 49090
// Name: resolveImageSource
// Dependencies: [5703, 5705, 5706, 5707, 5708, 5709, 5710, 5711, 5712, 3976, 5704, 2]
// Exports: getGuildBadgeImageSource

// Module 5702 (resolveImageSource)
const require = arg1;
function resolveImageSource(premiumImageSource, guildTraits, closure_2) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(closure_2)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
}
let obj = {};
obj = { imageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.STAFF] = obj;
obj = { imageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.PARTNERED] = obj;
const obj1 = { imageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.VERIFIED] = obj1;
let obj2 = { imageSource: require("registerAsset"), imageSourceLight: require("registerAsset"), premiumImageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.COMMUNITY] = obj2;
const obj3 = { imageSource: require("registerAsset"), imageSourceLight: require("registerAsset"), premiumImageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.DISCOVERABLE] = obj3;
const obj4 = { imageSource: require("registerAsset") };
obj[require("BadgeCategory").BadgeCategory.VERIFIED_AND_PARTNERED] = obj4;
obj[require("BadgeCategory").BadgeCategory.NONE] = {};
const result = require("registerAsset").fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export const badgeVariants = obj;
export { resolveImageSource };
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, closure_2) {
  const obj = require(5704) /* isPremiumGuild */;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = require(5703) /* BadgeCategory */;
  const tmp2 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = resolveImageSource(tmp2, guildTraits, closure_2);
  }
  return tmp3;
};

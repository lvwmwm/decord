// Module ID: 5698
// Function ID: 49055
// Name: resolveImageSource
// Dependencies: []
// Exports: getGuildBadgeImageSource

// Module 5698 (resolveImageSource)
function resolveImageSource(premiumImageSource, guildTraits, theme) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(theme)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
}
let obj = {};
obj = { imageSource: importDefault(dependencyMap[1]) };
obj[arg1(dependencyMap[0]).BadgeCategory.STAFF] = obj;
obj = { imageSource: importDefault(dependencyMap[2]) };
obj[arg1(dependencyMap[0]).BadgeCategory.PARTNERED] = obj;
const obj1 = { imageSource: importDefault(dependencyMap[1]) };
obj[arg1(dependencyMap[0]).BadgeCategory.VERIFIED] = obj1;
const obj2 = { imageSource: importDefault(dependencyMap[3]), imageSourceLight: importDefault(dependencyMap[4]), premiumImageSource: importDefault(dependencyMap[5]) };
obj[arg1(dependencyMap[0]).BadgeCategory.COMMUNITY] = obj2;
const obj3 = { imageSource: importDefault(dependencyMap[6]), imageSourceLight: importDefault(dependencyMap[7]), premiumImageSource: importDefault(dependencyMap[8]) };
obj[arg1(dependencyMap[0]).BadgeCategory.DISCOVERABLE] = obj3;
const obj4 = { imageSource: importDefault(dependencyMap[1]) };
obj[arg1(dependencyMap[0]).BadgeCategory.VERIFIED_AND_PARTNERED] = obj4;
obj[arg1(dependencyMap[0]).BadgeCategory.NONE] = {};
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export const badgeVariants = obj;
export { resolveImageSource };
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
  const obj = theme(dependencyMap[10]);
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = theme(dependencyMap[0]);
  let tmp3 = null;
  if (null != obj[obj2.getBadgeCategory(obj2, guildTraits)]) {
    tmp3 = resolveImageSource(tmp2, guildTraits, theme);
  }
  return tmp3;
};

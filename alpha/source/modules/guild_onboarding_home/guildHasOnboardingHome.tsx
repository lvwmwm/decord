// Module ID: 7364
// Function ID: 7365
// Name: guildHasOnboardingHome
// Dependencies: [1084, 4881, 2]
// Exports: default

// Module 7364 (guildHasOnboardingHome)
import FavoritesUtils from "FavoritesUtils" /* 4881 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ GuildFeatures: c2, ME: c3 } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id || id.id === _false;
  if (!isFavoritesGuildIdResult) {
    const obj = FavoritesUtils;
    isFavoritesGuildIdResult = obj.isFavoritesGuildId(id.id);
  }
  if (!isFavoritesGuildIdResult) {
    const features = id.features;
    isFavoritesGuildIdResult = !features.has(constants.COMMUNITY);
  }
  if (!isFavoritesGuildIdResult) {
    const features2 = id.features;
    isFavoritesGuildIdResult = !features2.has(constants.GUILD_SERVER_GUIDE);
  }
  if (!isFavoritesGuildIdResult) {
    const features3 = id.features;
    isFavoritesGuildIdResult = !features3.has(constants.GUILD_ONBOARDING);
  }
  return !isFavoritesGuildIdResult;
};

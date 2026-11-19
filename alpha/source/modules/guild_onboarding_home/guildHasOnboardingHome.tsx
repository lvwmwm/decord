// Module ID: 6566
// Function ID: 6567
// Name: guildHasOnboardingHome
// Dependencies: [1072, 4666, 2]
// Exports: default

// Module 6566 (guildHasOnboardingHome)
import FavoritesUtils from "FavoritesUtils" /* 4666 */;
import Constants from "Constants" /* 1072 */;
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

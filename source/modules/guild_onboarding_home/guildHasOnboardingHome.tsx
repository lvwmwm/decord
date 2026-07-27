// Module ID: 4336
// Function ID: 38299
// Name: guildHasOnboardingHome
// Dependencies: [653, 1841, 2]
// Exports: default

// Module 4336 (guildHasOnboardingHome)
import ME from "ME";

let closure_2;
let closure_3;
({ GuildFeatures: closure_2, ME: closure_3 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id;
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = id.id === closure_3;
  }
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = require(1841) /* isFavoritesGuildId */.isFavoritesGuildId(id.id);
    const obj = require(1841) /* isFavoritesGuildId */;
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

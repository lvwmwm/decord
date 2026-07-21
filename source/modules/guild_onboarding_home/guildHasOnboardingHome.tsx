// Module ID: 4331
// Function ID: 38246
// Name: guildHasOnboardingHome
// Dependencies: []
// Exports: default

// Module 4331 (guildHasOnboardingHome)
const _module = require(dependencyMap[0]);
({ GuildFeatures: closure_0, FAVORITES: closure_1, ME: closure_2 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = id.id === closure_2;
  }
  if (!tmp) {
    tmp = id.id === closure_1;
  }
  if (!tmp) {
    const features = id.features;
    tmp = !features.has(closure_0.COMMUNITY);
  }
  if (!tmp) {
    const features2 = id.features;
    tmp = !features2.has(closure_0.GUILD_SERVER_GUIDE);
  }
  if (!tmp) {
    const features3 = id.features;
    tmp = !features3.has(closure_0.GUILD_ONBOARDING);
  }
  return !tmp;
};

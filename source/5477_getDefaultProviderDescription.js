// Module ID: 5477
// Function ID: 46712
// Name: getDefaultProviderDescription
// Dependencies: []
// Exports: default

// Module 5477 (getDefaultProviderDescription)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.D/wRWb);
  } else if (PlatformTypes.YOUTUBE === arg0) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.TC0upt);
  }
};

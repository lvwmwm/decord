// Module ID: 5481
// Function ID: 46793
// Name: getDefaultProviderDescription
// Dependencies: [653, 1212, 2]
// Exports: default

// Module 5481 (getDefaultProviderDescription)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["D/wRWb"]);
  } else if (PlatformTypes.YOUTUBE === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TC0upt);
  }
};

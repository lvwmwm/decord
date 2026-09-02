// Module ID: 5978
// Function ID: 5979
// Name: getDefaultProviderDescription
// Dependencies: [673, 1233, 2]
// Exports: default

// Module 5978 (getDefaultProviderDescription)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TC0upt);
  }
};

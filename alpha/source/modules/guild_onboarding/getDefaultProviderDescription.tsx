// Module ID: 7273
// Function ID: 7274
// Name: getDefaultProviderDescription
// Dependencies: [1084, 1125, 2]
// Exports: default

// Module 7273 (getDefaultProviderDescription)
import Constants from "Constants" /* 1084 */;
import intl3 from "intl" /* 1125 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = intl3.intl;
    return intl2.string(intl3.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = intl3.intl;
    return intl.string(intl3.t.TC0upt);
  }
};

// Module ID: 6600
// Function ID: 6601
// Name: getDefaultProviderDescription
// Dependencies: [1074, 1115, 2]
// Exports: default

// Module 6600 (getDefaultProviderDescription)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
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

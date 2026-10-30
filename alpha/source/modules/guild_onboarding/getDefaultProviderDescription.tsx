// Module ID: 7338
// Function ID: 7339
// Name: getDefaultProviderDescription
// Dependencies: [1072, 1114, 2]
// Exports: default

// Module 7338 (getDefaultProviderDescription)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
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

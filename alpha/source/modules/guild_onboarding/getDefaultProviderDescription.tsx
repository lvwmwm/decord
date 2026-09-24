// Module ID: 7512
// Function ID: 7513
// Name: getDefaultProviderDescription
// Dependencies: [1074, 1115, 2]
// Exports: default

// Module 7512 (getDefaultProviderDescription)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = util.intl;
    return intl.string(util.t.TC0upt);
  }
};

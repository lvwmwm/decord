// Module ID: 13992
// Function ID: 13993
// Name: getActivityPlatformDisplayName
// Dependencies: [1087, 1128, 13991, 2]
// Exports: default

// Module 13992 (getActivityPlatformDisplayName)
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 13991 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type, arg1) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.Nfvo72);
  } else if (PlatformTypes.PLAYSTATION === type) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t.fFl4jo);
  } else if (PlatformTypes.META_QUEST_OR_HORIZON === type) {
    let stringResult;
    const tmp5 = isOnMetaHorizonDefault(arg1);
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (tmp5) {
      stringResult = string(t.BrHQaq);
    } else {
      stringResult = string(t.p6vL0e);
    }
    return stringResult;
  } else {
    return type.name;
  }
};

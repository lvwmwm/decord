// Module ID: 14827
// Function ID: 14828
// Name: getActivityPlatformDisplayName
// Dependencies: [1072, 1114, 14826, 2]
// Exports: default

// Module 14827 (getActivityPlatformDisplayName)
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1114 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 14826 */;
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

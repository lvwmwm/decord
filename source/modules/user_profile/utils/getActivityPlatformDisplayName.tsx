// Module ID: 11942
// Function ID: 92332
// Name: getActivityPlatformDisplayName
// Dependencies: [653, 1212, 11941, 2]
// Exports: default

// Module 11942 (getActivityPlatformDisplayName)
import { PlatformTypes } from "ME";

const result = require("isOnMetaHorizon").fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Nfvo72);
  } else if (PlatformTypes.PLAYSTATION === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.fFl4jo);
  } else if (PlatformTypes.META_QUEST_OR_HORIZON === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (tmp4) {
      let stringResult = string(t.BrHQaq);
    } else {
      stringResult = string(t.p6vL0e);
    }
    return stringResult;
  } else {
    return type.name;
  }
};

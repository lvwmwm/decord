// Module ID: 11929
// Function ID: 92265
// Name: getActivityPlatformDisplayName
// Dependencies: []
// Exports: default

// Module 11929 (getActivityPlatformDisplayName)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.Nfvo72);
  } else if (PlatformTypes.PLAYSTATION === type) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.fFl4jo);
  } else if (PlatformTypes.META_QUEST_OR_HORIZON === type) {
    const intl = require(dependencyMap[1]).intl;
    const string = intl.string;
    const t = require(dependencyMap[1]).t;
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

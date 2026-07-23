// Module ID: 8254
// Function ID: 65128
// Name: useBadges
// Dependencies: [3970, 1849, 3803, 624, 1212, 2]
// Exports: default

// Module 8254 (useBadges)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges) {
  const LegacyUsernameDisabled = require(3803) /* explicitContentFromProto */.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  const items = [closure_3];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_3.getCurrentUser());
  require(624) /* defaultAreStatesEqual */;
  [][0] = _isNativeReflectConstruct;
  if (null == getBadges) {
    return [];
  } else {
    let badges;
    if (null != getBadges) {
      badges = getBadges.getBadges();
    }
    if (null == badges) {
      badges = [];
    }
    let found = badges;
    if (tmp5) {
      found = badges.filter((id) => id.id !== "legacy_username");
    }
    let mapped = found;
    if (tmp4) {
      mapped = found.map((id) => {
        const obj = {};
        const merged = Object.assign(id);
        if (id.id === "legacy_username") {
          const intl = outer1_0(outer1_1[4]).intl;
          let description = intl.string(outer1_0(outer1_1[4]).t.Br1ls3);
        } else {
          description = id.description;
        }
        obj["description"] = description;
        return obj;
      });
    }
    return mapped;
  }
  let obj = require(624) /* defaultAreStatesEqual */;
};
export const QUEST_COMPLETED_BADGE = "quest_completed";

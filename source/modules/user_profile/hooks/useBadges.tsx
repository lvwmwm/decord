// Module ID: 8759
// Function ID: 8760
// Name: useBadges
// Dependencies: [4124, 1903, 3957, 647, 1236, 2]
// Exports: default

// Module 8759 (useBadges)
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const legacy_username = "legacy_username";
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges) {
  const LegacyUsernameDisabled = require(3957) /* explicitContentFromProto */.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  let tmpResult = tmp(647);
  const items = [mergeGuildAvatar];
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmpResult = tmp(647);
  [][0] = initialize;
  if (null == getBadges) {
    return [];
  } else {
    let badges;
    if (getBadges != null) {
      badges = getBadges.getBadges();
    }
    if (badges == null) {
      badges = [];
    }
    let found = badges;
    if (tmp7) {
      found = badges.filter((id) => id.id !== closure_4);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        const obj = {};
        const merged = Object.assign(id);
        if (id.id === closure_4) {
          const intl = callback(1236).intl;
          let description = intl.string(callback(1236).t.Br1ls3);
        } else {
          description = id.description;
        }
        obj.description = description;
        return obj;
      });
    }
    return mapped;
  }
};
export const QUEST_COMPLETED_BADGE = "quest_completed";

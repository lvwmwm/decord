// Module ID: 8939
// Function ID: 8940
// Name: useBadges
// Dependencies: [5196, 1385, 4966, 563, 1113, 2]
// Exports: default

// Module 8939 (useBadges)
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import StreamerModeStore from "StreamerModeStore" /* 5196 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const legacy_username = "legacy_username";
const result = size.fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges, arg1) {
  let currentUser;
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  const items = [UserStore];
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  useStateFromStores;
  [][0] = StreamerModeStore;
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
    const tmp7 = null != stateFromStores && stateFromStores.id === getBadges.userId && setting;
    if (tmp7) {
      found = badges.filter((id) => id.id !== legacy_username);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        let description;
        const obj = { description };
        const merged = Object.assign(id);
        if (id.id === legacy_username) {
          const intl = intl2.intl;
          description = intl.string(intl2.t.Br1ls3);
        } else {
          description = id.description;
        }
        return obj;
      });
    }
    return mapped;
  }
};
export const QUEST_COMPLETED_BADGE = "quest_completed";

// Module ID: 8242
// Function ID: 65054
// Name: useBadges
// Dependencies: []
// Exports: default

// Module 8242 (useBadges)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges) {
  const LegacyUsernameDisabled = arg1(dependencyMap[2]).LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => currentUser.getCurrentUser());
  arg1(dependencyMap[3]);
  [][0] = closure_2;
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
          const intl = callback(closure_1[4]).intl;
          let description = intl.string(callback(closure_1[4]).t.Br1ls3);
        } else {
          description = id.description;
        }
        obj["description"] = description;
        return obj;
      });
    }
    return mapped;
  }
  const obj = arg1(dependencyMap[3]);
};
export const QUEST_COMPLETED_BADGE = "quest_completed";

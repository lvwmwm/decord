// Module ID: 18870
// Function ID: 18871
// Name: useOwnsAnyBadge
// Dependencies: [1383, 8763, 504, 8757, 8815, 2]
// Exports: default

// Module 18870 (useOwnsAnyBadge)
import useDisplayProfileDefault from "useDisplayProfile" /* 8757 */;
import useBadgesDefault from "useBadges" /* 8815 */;
import UserStore from "UserStore" /* 1383 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/badges/useOwnsAnyBadge.tsx");

export default function useOwnsAnyBadge() {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(504);
  let stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let someResult = null;
    if (null != stateFromStores) {
      someResult = null;
      const obj = BadgeDirectoryStore;
      if (BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badges = obj.getBadges(tmp);
        someResult = badges.some((owned) => owned.owned);
      }
    }
    return someResult;
  }, items2);
  const tmp3 = useDisplayProfileDefault(stateFromStores);
  if (stateFromStores1 == null) {
    stateFromStores1 = useBadgesDefault(tmp3).length > 0;
  }
  return stateFromStores1;
};

// Module ID: 19693
// Function ID: 19694
// Name: useOwnsAnyBadge
// Dependencies: [1388, 8558, 504, 8493, 8619, 2]
// Exports: default

// Module 19693 (useOwnsAnyBadge)
import useDisplayProfileDefault from "useDisplayProfile" /* 8493 */;
import useBadgesDefault from "useBadges" /* 8619 */;
import UserStore from "UserStore" /* 1388 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8558 */;
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

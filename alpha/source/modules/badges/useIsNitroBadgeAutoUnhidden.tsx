// Module ID: 19244
// Function ID: 19245
// Name: useIsNitroBadgeAutoUnhidden
// Dependencies: [1385, 8834, 504, 8826, 2]
// Exports: default

// Module 19244 (useIsNitroBadgeAutoUnhidden)
import get_initialized from "get initialized" /* 504 */;
import BadgeId from "BadgeId" /* 8826 */;
import UserStore from "UserStore" /* 1385 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8834 */;
import size from "module_2" /* 2 */;

let badgeById, currentUser;

const result = size.fileFinishedImporting("modules/badges/useIsNitroBadgeAutoUnhidden.tsx");

export default function useIsNitroBadgeAutoUnhidden() {
  const items = [UserStore, BadgeDirectoryStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      badgeById = badgeById.getBadgeById(BadgeId.BadgeId.PREMIUM_TENURE, id);
      let flag;
      if (badgeById != null) {
        flag = badgeById.auto_unhidden;
      }
      if (flag == null) {
        flag = false;
      }
      tmp3 = flag;
    }
    return tmp3;
  });
};

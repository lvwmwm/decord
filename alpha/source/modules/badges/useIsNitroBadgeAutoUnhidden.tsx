// Module ID: 19147
// Function ID: 19148
// Name: useIsNitroBadgeAutoUnhidden
// Dependencies: [1387, 6383, 504, 6138, 2]
// Exports: default

// Module 19147 (useIsNitroBadgeAutoUnhidden)
import get_initialized from "get initialized" /* 504 */;
import BadgeId from "BadgeId" /* 6138 */;
import UserStore from "UserStore" /* 1387 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 6383 */;
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

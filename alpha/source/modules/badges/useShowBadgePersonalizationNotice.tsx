// Module ID: 11656
// Function ID: 11657
// Name: useShowBadgePersonalizationNotice
// Dependencies: [6877, 1072, 504, 11649, 2]
// Exports: default

// Module 11656 (useShowBadgePersonalizationNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import BadgeUtils from "BadgeUtils" /* 11649 */;
import ConsentStore from "ConsentStore" /* 6877 */;
import size from "module_2" /* 2 */;

const Consents = Constants.Consents;
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default function useShowBadgePersonalizationNotice(arg0) {
  let badge;
  let isViewingOtherUser;
  ({ badge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  const obj2 = BadgeUtils;
  const tmp2 = obj2.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
  return tmp2;
};

// Module ID: 11466
// Function ID: 11467
// Name: useShowBadgePersonalizationNotice
// Dependencies: [6742, 1072, 504, 11459, 2]
// Exports: default

// Module 11466 (useShowBadgePersonalizationNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import BadgeUtils from "BadgeUtils" /* 11459 */;
import ConsentStore from "ConsentStore" /* 6742 */;
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

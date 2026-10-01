// Module ID: 10666
// Function ID: 10667
// Name: useShowBadgePersonalizationNotice
// Dependencies: [6012, 1074, 504, 10659, 2]
// Exports: default

// Module 10666 (useShowBadgePersonalizationNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import ConsentStore from "ConsentStore" /* 6012 */;
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

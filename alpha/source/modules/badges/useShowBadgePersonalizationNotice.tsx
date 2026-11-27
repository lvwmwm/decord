// Module ID: 9878
// Function ID: 9879
// Name: useShowBadgePersonalizationNotice
// Dependencies: [6841, 1071, 504, 9871, 2]
// Exports: default

// Module 9878 (useShowBadgePersonalizationNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import BadgeUtils from "BadgeUtils" /* 9871 */;
import ConsentStore from "ConsentStore" /* 6841 */;
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

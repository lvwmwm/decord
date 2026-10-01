// Module ID: 10665
// Function ID: 10666
// Name: useShowBadgeProgress
// Dependencies: [6012, 1074, 504, 10659, 2]
// Exports: default

// Module 10665 (useShowBadgeProgress)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import ConsentStore from "ConsentStore" /* 6012 */;
import size from "module_2" /* 2 */;

const Consents = Constants.Consents;
const result = size.fileFinishedImporting("modules/badges/useShowBadgeProgress.tsx");

export default function useShowBadgeProgress(arg0) {
  let badge;
  let isViewingOtherUser;
  let viewerBadge;
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  const tmpResult = BadgeUtils;
  const tmp4 = null != tmpResult.findTier(viewerBadge, viewerBadge.next_tier);
  const tmpResult2 = BadgeUtils;
  const tmp6 = !isViewingOtherUser && viewerBadge.owned && tmp4 && !(tmpResult2.isPersonalizationGatedBadge(badge.badge_id) && !stateFromStores);
  return tmp6;
};

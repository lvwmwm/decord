// Module ID: 11465
// Function ID: 11466
// Name: useShowBadgeProgress
// Dependencies: [6742, 1072, 504, 11459, 2]
// Exports: default

// Module 11465 (useShowBadgeProgress)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import BadgeUtils from "BadgeUtils" /* 11459 */;
import ConsentStore from "ConsentStore" /* 6742 */;
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

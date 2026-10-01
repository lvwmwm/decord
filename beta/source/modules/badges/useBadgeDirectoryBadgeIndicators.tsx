// Module ID: 10660
// Function ID: 10661
// Name: useBadgeDirectoryBadgeIndicators
// Dependencies: [19, 10661, 10659, 7642, 504, 2]
// Exports: dismissBadgeDirectoryBadgeIndicator, isNewIndicatorBadgeId, useBadgeDirectoryBadgeIndicators, useDismissBadgeDirectoryBadgeIndicator

// Module 10660 (useBadgeDirectoryBadgeIndicators)
import BadgeUtils from "BadgeUtils" /* 10659 */;
import react from "react" /* 19 */;
import BadgeDirectorySeenStore from "BadgeDirectorySeenStore" /* 10661 */;
import size from "module_2" /* 2 */;

let badge_id;

let tmp;
const BadgeDirectoryActionCreators = tmp(7642);
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryBadgeIndicators.tsx");

export const NEW_INDICATOR_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
export const isNewIndicatorBadgeId = function isNewIndicatorBadgeId(arg0) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  return BETA_BADGE_IDS.has(arg0);
};
export const dismissBadgeDirectoryBadgeIndicator = function dismissBadgeDirectoryBadgeIndicator(badgeId) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  if (BETA_BADGE_IDS.has(badgeId)) {
    const tmpResult = BadgeDirectoryActionCreators;
    const result = tmpResult.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
  }
};
export const useBadgeDirectoryBadgeIndicators = function useBadgeDirectoryBadgeIndicators(badges) {
  let items1;
  let seenBadgeIndicators;
  badges = badges.badges;
  const enabled = badges.enabled;
  const items = [BadgeDirectorySeenStore];
  const obj = badges(enabled[4]);
  const stateFromStores = obj.useStateFromStores(items, () => seenBadgeIndicators.getSeenBadgeIndicators());
  const obj2 = {
    badgeIndicatorIds: stateFromStores.useMemo(function() {
      let _Set1;
      const _Set = Set;
      if (enabled) {
        const found = badges.filter((badge_id) => {
          badge_id = badge_id.badge_id;
          const BETA_BADGE_IDS = badges(enabled[2]).BETA_BADGE_IDS;
          const hasItem = BETA_BADGE_IDS.has(badge_id) && !set.has(badge_id);
          return hasItem;
        });
        const self3 = this;
        const self4 = this;
        _Set1 = new _Set(found.map((badge_id) => badge_id.badge_id));
      } else {
        const self = this;
        const self2 = this;
        _Set1 = new _Set();
      }
      return _Set1;
    }, items1)
  };
  items1 = [badges, enabled, stateFromStores];
  return obj2;
};
export const useDismissBadgeDirectoryBadgeIndicator = function useDismissBadgeDirectoryBadgeIndicator(badgeId) {
  badgeId = badgeId.badgeId;
  const enabled = badgeId.enabled;
  const items = [badgeId, enabled];
  const effect = react.useEffect(() => {
    const tmp2 = null != badgeId && enabled;
    if (tmp2) {
      const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
      const tmp3 = require;
      if (BETA_BADGE_IDS.has(badgeId)) {
        const tmp3Result = tmp3(7642);
        const result = tmp3Result.markBadgeDirectoryBadgeIndicatorSeen(tmp);
      }
    }
  }, items);
};

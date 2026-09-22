// Module ID: 15295
// Function ID: 15296
// Name: useBountyRecurringSwipeUpNux
// Dependencies: [32, 7633, 2028, 2]
// Exports: useBountyRecurringSwipeUpNux

// Module 15295 (useBountyRecurringSwipeUpNux)
import dismissible_content from "dismissible_content" /* 2028 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7633 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = function useBountyRecurringSwipeUpNux(isEligible) {
  let prop = null;
  if (isEligible.isEligible) {
    prop = tmp(2028).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
  [tmp5, tmp6] = tmp4;
  return { hasRecurringSwipeUpNux: tmp5 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp6 };
};

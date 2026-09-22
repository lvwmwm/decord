// Module ID: 15100
// Function ID: 15101
// Name: useBountyRecurringSwipeUpNux
// Dependencies: [32, 7491, 1943, 2]
// Exports: useBountyRecurringSwipeUpNux

// Module 15100 (useBountyRecurringSwipeUpNux)
import dismissible_content from "dismissible_content" /* 1943 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7491 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = function useBountyRecurringSwipeUpNux(isEligible) {
  let prop = null;
  if (isEligible.isEligible) {
    prop = tmp(1943).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
  [tmp5, tmp6] = tmp4;
  return { hasRecurringSwipeUpNux: tmp5 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp6 };
};

// Module ID: 14547
// Function ID: 14548
// Name: useBountyRecurringSwipeUpNux
// Dependencies: [32, 6806, 2029, 2]
// Exports: useBountyRecurringSwipeUpNux

// Module 14547 (useBountyRecurringSwipeUpNux)
import dismissible_content from "dismissible_content" /* 2029 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export const useBountyRecurringSwipeUpNux = function useBountyRecurringSwipeUpNux(isEligible) {
  let tmp6;
  let tmp7;
  isEligible = isEligible.isEligible;
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent;
  if (isEligible) {
    prop = tmp(2029).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmp5 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
  const obj = { hasRecurringSwipeUpNux: tmp6 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp7 };
  [tmp6, tmp7] = tmp5;
  return obj;
};

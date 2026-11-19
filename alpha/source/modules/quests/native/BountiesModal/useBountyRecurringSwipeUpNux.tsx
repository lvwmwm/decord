// Module ID: 16380
// Function ID: 16381
// Name: useBountyRecurringSwipeUpNux
// Dependencies: [32, 8960, 4625, 2]
// Exports: useBountyRecurringSwipeUpNux

// Module 16380 (useBountyRecurringSwipeUpNux)
import dismissible_content from "dismissible_content" /* 4625 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 8960 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyRecurringSwipeUpNux.tsx");

export function useBountyRecurringSwipeUpNux(isEligible) {
  let tmp6;
  let tmp7;
  isEligible = isEligible.isEligible;
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent;
  if (isEligible) {
    prop = tmp(4625).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmp5 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
  const obj = { hasRecurringSwipeUpNux: tmp6 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp7 };
  [tmp6, tmp7] = tmp5;
  return obj;
}

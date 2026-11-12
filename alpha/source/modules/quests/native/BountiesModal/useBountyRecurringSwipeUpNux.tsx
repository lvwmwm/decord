// Module ID: 17432
// Function ID: 17433
// Name: useBountyRecurringSwipeUpNux
// Dependencies: [32, 9493, 5076, 2]
// Exports: useBountyRecurringSwipeUpNux

// Module 17432 (useBountyRecurringSwipeUpNux)
import dismissible_content from "dismissible_content" /* 5076 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 9493 */;
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
    prop = tmp(5076).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
  }
  const tmp5 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2);
  const obj = { hasRecurringSwipeUpNux: tmp6 === dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, dismissRecurringSwipeUpNux: tmp7 };
  [tmp6, tmp7] = tmp5;
  return obj;
}

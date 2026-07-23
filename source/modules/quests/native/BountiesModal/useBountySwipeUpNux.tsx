// Module ID: 13911
// Function ID: 106480
// Name: useBountySwipeUpNux
// Dependencies: [57, 10840, 13912, 1334, 5802, 2]
// Exports: useBountySwipeUpNux

// Module 13911 (useBountySwipeUpNux)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY").fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = require(10840) /* shouldUseScrollIndicatorOverlay */.BountiesVerticalScrollExperiment;
  const tmp = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = require(13912) /* FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY */;
  const first = callback(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp) {
      const items = [require(1334) /* DismissibleContent */.DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp) {
        prop = require(1334) /* DismissibleContent */.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    const obj2 = require(5802) /* useSelectedDismissibleContent */;
    if (first) {
      let tmp17 = isEligible;
      if (isEligible) {
        tmp17 = tmp;
      }
      let tmp16 = tmp17;
    } else {
      tmp16 = tmp13 === require(1334) /* DismissibleContent */.DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    const tmp12 = callback(require(5802) /* useSelectedDismissibleContent */.useSelectedDismissibleContent([]), 2);
    obj = { cooldownDurationMs: 86400000 };
    const obj3 = require(5802) /* useSelectedDismissibleContent */;
    obj = { hasSingleUseSwipeUpNux: tmp16, dismissSingleUseSwipeUpNux: tmp12[1] };
    if (first) {
      if (isEligible) {
        isEligible = !tmp;
      }
      let tmp25 = isEligible;
    } else {
      tmp25 = tmp22 === require(1334) /* DismissibleContent */.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj.hasRecurringSwipeUpNux = tmp25;
    obj.dismissRecurringSwipeUpNux = callback(require(5802) /* useSelectedDismissibleContent */.useSelectedTimeRecurringDismissibleContent(prop, obj), 2)[1];
    return obj;
  }
};

// Module ID: 13797
// Function ID: 104324
// Name: useBountySwipeUpNux
// Dependencies: []
// Exports: useBountySwipeUpNux

// Module 13797 (useBountySwipeUpNux)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = arg1(dependencyMap[1]).BountiesVerticalScrollExperiment;
  const tmp = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  let obj = arg1(dependencyMap[2]);
  const first = callback(obj.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp) {
      const items = [arg1(dependencyMap[3]).DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp) {
        prop = arg1(dependencyMap[3]).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    const obj2 = arg1(dependencyMap[4]);
    if (first) {
      let tmp17 = isEligible;
      if (isEligible) {
        tmp17 = tmp;
      }
      let tmp16 = tmp17;
    } else {
      tmp16 = tmp13 === arg1(dependencyMap[3]).DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    const tmp12 = callback(arg1(dependencyMap[4]).useSelectedDismissibleContent([]), 2);
    obj = { cooldownDurationMs: 86400000 };
    const obj3 = arg1(dependencyMap[4]);
    obj = { hasSingleUseSwipeUpNux: tmp16, dismissSingleUseSwipeUpNux: tmp12[1] };
    if (first) {
      if (isEligible) {
        isEligible = !tmp;
      }
      let tmp25 = isEligible;
    } else {
      tmp25 = tmp22 === arg1(dependencyMap[3]).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj.hasRecurringSwipeUpNux = tmp25;
    obj.dismissRecurringSwipeUpNux = callback(arg1(dependencyMap[4]).useSelectedTimeRecurringDismissibleContent(prop, obj), 2)[1];
    return obj;
  }
};

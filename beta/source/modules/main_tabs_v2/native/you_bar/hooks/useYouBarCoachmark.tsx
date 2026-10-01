// Module ID: 16001
// Function ID: 16002
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 4655, 2042, 1115, 2029, 4566, 12667, 14275, 1486, 504, 13243, 4865, 6806, 16002, 10589, 2]
// Exports: useYouBarCoachmark

// Module 16001 (useYouBarCoachmark)
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  let tmp8;
  let tmp9;
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isInPrivateProfilesExperiment;
  let stateFromStores;
  let obj = isQuestRendered(isInPrivateProfilesExperiment[6]);
  const animatedRef = obj.useAnimatedRef();
  let obj2 = isQuestRendered(isInPrivateProfilesExperiment[7]);
  isInPrivateProfilesExperiment = obj2.useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const obj3 = isQuestRendered(isInPrivateProfilesExperiment[8]);
  const isTinyBroncoEligible = obj3.useIsTinyBroncoEligible();
  const obj4 = isQuestRendered(isInPrivateProfilesExperiment[9]);
  const isFocused = obj4.useIsFocused();
  let items = [stateFromStores];
  const obj5 = isQuestRendered(isInPrivateProfilesExperiment[10]);
  stateFromStores = obj5.useStateFromStores(items, () => {
    const obj = isQuestRendered(isInPrivateProfilesExperiment[11]);
    const obj2 = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != stateFromStores.getGuildId() && tmp;
    return tmp2;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    const tmp = isQuestRendered;
    if (!tmp) {
      const tmp2 = isFocused;
      if (tmp2) {
        const items = [];
        const tmp3 = stateFromStores;
        if (tmp3) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        const tmp7 = isInPrivateProfilesExperiment;
        if (tmp7) {
          items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        const tmp11 = isTinyBroncoEligible;
        if (tmp11) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj6 = isQuestRendered(isInPrivateProfilesExperiment[13]);
  let tmp7 = isTinyBroncoEligible(obj6.useSelectedDismissibleContent(memo), 2);
  [tmp8, tmp9] = tmp7;
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = isFocused.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(isQuestRendered(isInPrivateProfilesExperiment[4]).t.gMFchc),
      description: intl2.string(isQuestRendered(isInPrivateProfilesExperiment[4]).t["V3j11+"]),
      position: "top",
      visible: visibleContent === isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = isQuestRendered(isInPrivateProfilesExperiment[4]).intl;
    intl2 = isQuestRendered(isInPrivateProfilesExperiment[4]).intl;
    return obj;
  }, items2);
  const obj7 = isQuestRendered(isInPrivateProfilesExperiment[14]);
  const privateProfileCoachmarkProps = obj7.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj8 = isQuestRendered(isInPrivateProfilesExperiment[15]);
  const coachmark = obj8.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj9 = isQuestRendered(isInPrivateProfilesExperiment[15]);
  const coachmark1 = obj9.useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
};

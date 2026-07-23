// Module ID: 15098
// Function ID: 114950
// Name: useYouBarCoachmark
// Dependencies: [57, 31, 3947, 1345, 1212, 1334, 3991, 12113, 1457, 566, 12625, 4206, 5802, 15099, 8563, 2]
// Exports: useYouBarCoachmark

// Module 15098 (useYouBarCoachmark)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
let closure_6 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const animatedRef = isQuestRendered(isInPrivateProfilesExperiment[6]).useAnimatedRef();
  let obj = isQuestRendered(isInPrivateProfilesExperiment[6]);
  isInPrivateProfilesExperiment = isQuestRendered(isInPrivateProfilesExperiment[7]).useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const obj2 = isQuestRendered(isInPrivateProfilesExperiment[7]);
  const isFocused = isQuestRendered(isInPrivateProfilesExperiment[8]).useIsFocused();
  const obj3 = isQuestRendered(isInPrivateProfilesExperiment[8]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = isQuestRendered(isInPrivateProfilesExperiment[9]).useStateFromStores(items, () => {
    let obj = isQuestRendered(isInPrivateProfilesExperiment[10]);
    obj = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj) >= 10;
    return null != outer1_4.getGuildId() && obj.getFirstInstallTimeElapsed(obj) >= 10;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isFocused];
  const memo = stateFromStores.useMemo(() => {
    if (!isQuestRendered) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (isInPrivateProfilesExperiment) {
          items.push(isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        return items;
      }
    }
    return outer1_6;
  }, items1);
  const obj4 = isQuestRendered(isInPrivateProfilesExperiment[9]);
  const tmp6 = isFocused(isQuestRendered(isInPrivateProfilesExperiment[12]).useSelectedDismissibleContent(memo), 2);
  let visibleContent = tmp6[0];
  let markAsDismissed = tmp6[1];
  const obj5 = isQuestRendered(isInPrivateProfilesExperiment[12]);
  const tmp9 = (function useSwipeCoachmarkProps(visibleContent) {
    visibleContent = visibleContent.visibleContent;
    const markAsDismissed = visibleContent.markAsDismissed;
    const items = [markAsDismissed, visibleContent];
    return stateFromStores.useMemo(() => {
      const obj = {};
      const intl = isQuestRendered(isInPrivateProfilesExperiment[4]).intl;
      obj.title = intl.string(isQuestRendered(isInPrivateProfilesExperiment[4]).t.gMFchc);
      const intl2 = isQuestRendered(isInPrivateProfilesExperiment[4]).intl;
      obj.description = intl2.string(isQuestRendered(isInPrivateProfilesExperiment[4]).t["V3j11+"]);
      obj.position = "top";
      obj.visible = visibleContent === isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
      obj.onDismiss = function onDismiss() {
        return outer1_1(outer3_5.USER_DISMISS);
      };
      return obj;
    }, items);
  })({ visibleContent, markAsDismissed });
  const privateProfileCoachmarkProps = isQuestRendered(isInPrivateProfilesExperiment[13]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj6 = isQuestRendered(isInPrivateProfilesExperiment[13]);
  const coachmark = isQuestRendered(isInPrivateProfilesExperiment[14]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj7 = isQuestRendered(isInPrivateProfilesExperiment[14]);
  const coachmark1 = isQuestRendered(isInPrivateProfilesExperiment[14]).useCoachmark(animatedRef, tmp9);
  return { animatedRef, visibleContent, markAsDismissed };
};

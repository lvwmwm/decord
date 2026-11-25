// Module ID: 18092
// Function ID: 18093
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 5045, 4858, 1112, 4845, 1653, 16167, 18093, 1501, 504, 15142, 5796, 9519, 18096, 9526, 2]
// Exports: useYouBarCoachmark

// Module 18092 (useYouBarCoachmark)
import dismissible_content from "dismissible_content" /* 4845 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export function useYouBarCoachmark(isCondensed) {
  let tmp10;
  let tmp9;
  isCondensed = isCondensed.isCondensed;
  let isAgeNoticeEligible;
  let isFocused;
  let stateFromStores;
  let obj = isCondensed(isAgeNoticeEligible[6]);
  const animatedRef = obj.useAnimatedRef();
  const avatarAnchorRef = isFocused.useRef(null);
  let obj2 = isCondensed(isAgeNoticeEligible[7]);
  isAgeNoticeEligible = obj2.useIsAgeNoticeEligible();
  const obj3 = isCondensed(isAgeNoticeEligible[8]);
  const isCheckpointRelaunchCoachmarkEligible = obj3.useIsCheckpointRelaunchCoachmarkEligible("YouBar");
  const obj4 = isCondensed(isAgeNoticeEligible[9]);
  isFocused = obj4.useIsFocused();
  let items = [stateFromStores];
  const obj5 = isCondensed(isAgeNoticeEligible[10]);
  stateFromStores = obj5.useStateFromStores(items, () => {
    const obj = isCondensed(isAgeNoticeEligible[11]);
    const obj2 = { from: "authed", unit: isCondensed(isAgeNoticeEligible[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != stateFromStores.getGuildId() && tmp;
    return tmp2;
  });
  const items1 = [isCondensed, stateFromStores, isAgeNoticeEligible, isCheckpointRelaunchCoachmarkEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    const tmp = isCondensed;
    if (!tmp) {
      const tmp2 = isFocused;
      if (tmp2) {
        const items = [];
        const tmp3 = stateFromStores;
        if (tmp3) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        const tmp10 = isAgeNoticeEligible;
        if (tmp10) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        const tmp14 = isCheckpointRelaunchCoachmarkEligible;
        if (tmp14) {
          items.push(dismissible_content.DismissibleContent.BUILD_A_BEAR_RELAUNCH_COACHMARK);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj6 = isCondensed(isAgeNoticeEligible[13]);
  [tmp9, tmp10] = isCheckpointRelaunchCoachmarkEligible(obj6.useSelectedDismissibleContent(memo), 2);
  const items2 = [markAsDismissed, visibleContent];
  const tmp8 = isCheckpointRelaunchCoachmarkEligible(obj6.useSelectedDismissibleContent(memo), 2);
  const memo1 = isFocused.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(isCondensed(isAgeNoticeEligible[4]).t.gMFchc),
      description: intl2.string(isCondensed(isAgeNoticeEligible[4]).t["V3j11+"]),
      position: "top",
      visible: visibleContent === isCondensed(isAgeNoticeEligible[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = isCondensed(isAgeNoticeEligible[4]).intl;
    intl2 = isCondensed(isAgeNoticeEligible[4]).intl;
    return obj;
  }, items2);
  const obj7 = isCondensed(isAgeNoticeEligible[14]);
  const privateProfileCoachmarkProps = obj7.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj8 = isCondensed(isAgeNoticeEligible[8]);
  const checkpointRelaunchCoachmarkProps = obj8.useCheckpointRelaunchCoachmarkProps({ visibleContent, markAsDismissed });
  const obj9 = isCondensed(isAgeNoticeEligible[15]);
  const coachmark = obj9.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj10 = isCondensed(isAgeNoticeEligible[15]);
  const coachmark1 = obj10.useCoachmark(animatedRef, memo1);
  const obj11 = isCondensed(isAgeNoticeEligible[15]);
  const coachmark2 = obj11.useCoachmark(avatarAnchorRef, checkpointRelaunchCoachmarkProps);
  return { animatedRef, avatarAnchorRef, visibleContent, markAsDismissed };
}

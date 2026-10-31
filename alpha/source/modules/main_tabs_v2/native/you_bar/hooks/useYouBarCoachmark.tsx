// Module ID: 18423
// Function ID: 18424
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 5045, 4860, 1113, 4847, 5095, 16603, 1498, 504, 15587, 5772, 7569, 18424, 9954, 2]
// Exports: useYouBarCoachmark

// Module 18423 (useYouBarCoachmark)
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export function useYouBarCoachmark(isCondensed) {
  let guildId;
  let tmp7;
  let tmp8;
  isCondensed = isCondensed.isCondensed;
  let isTinyBroncoEligible;
  let obj = isCondensed(isTinyBroncoEligible[6]);
  const animatedRef = obj.useAnimatedRef();
  let obj2 = isCondensed(isTinyBroncoEligible[7]);
  isTinyBroncoEligible = obj2.useIsTinyBroncoEligible();
  const obj3 = isCondensed(isTinyBroncoEligible[8]);
  const isFocused = obj3.useIsFocused();
  let items = [SelectedGuildStore];
  const obj4 = isCondensed(isTinyBroncoEligible[9]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    const obj = isCondensed(isTinyBroncoEligible[10]);
    const obj2 = { from: "authed", unit: isCondensed(isTinyBroncoEligible[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != guildId.getGuildId() && tmp;
    return tmp2;
  });
  const items1 = [isCondensed, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = stateFromStores.useMemo(() => {
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
        const tmp10 = isTinyBroncoEligible;
        if (tmp10) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj5 = isCondensed(isTinyBroncoEligible[12]);
  [tmp7, tmp8] = isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  const items2 = [markAsDismissed, visibleContent];
  isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  const memo1 = stateFromStores.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(isCondensed(isTinyBroncoEligible[4]).t.gMFchc),
      description: intl2.string(isCondensed(isTinyBroncoEligible[4]).t["V3j11+"]),
      position: "top",
      visible: visibleContent === isCondensed(isTinyBroncoEligible[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = isCondensed(isTinyBroncoEligible[4]).intl;
    intl2 = isCondensed(isTinyBroncoEligible[4]).intl;
    return obj;
  }, items2);
  const obj6 = isCondensed(isTinyBroncoEligible[13]);
  const privateProfileCoachmarkProps = obj6.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isCondensed(isTinyBroncoEligible[14]);
  const coachmark = obj7.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj8 = isCondensed(isTinyBroncoEligible[14]);
  const coachmark1 = obj8.useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
}

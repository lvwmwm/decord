// Module ID: 18380
// Function ID: 18381
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 5040, 4855, 1114, 4842, 5090, 16561, 1499, 504, 15548, 5767, 7563, 18381, 9933, 2]
// Exports: useYouBarCoachmark

// Module 18380 (useYouBarCoachmark)
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export function useYouBarCoachmark(isQuestRendered) {
  let guildId;
  let tmp7;
  let tmp8;
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isTinyBroncoEligible;
  let obj = isQuestRendered(isTinyBroncoEligible[6]);
  const animatedRef = obj.useAnimatedRef();
  let obj2 = isQuestRendered(isTinyBroncoEligible[7]);
  isTinyBroncoEligible = obj2.useIsTinyBroncoEligible();
  const obj3 = isQuestRendered(isTinyBroncoEligible[8]);
  const isFocused = obj3.useIsFocused();
  let items = [SelectedGuildStore];
  const obj4 = isQuestRendered(isTinyBroncoEligible[9]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    const obj = isQuestRendered(isTinyBroncoEligible[10]);
    const obj2 = { from: "authed", unit: isQuestRendered(isTinyBroncoEligible[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != guildId.getGuildId() && tmp;
    return tmp2;
  });
  const items1 = [isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = stateFromStores.useMemo(() => {
    const tmp = isQuestRendered;
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
  const obj5 = isQuestRendered(isTinyBroncoEligible[12]);
  [tmp7, tmp8] = isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  const items2 = [markAsDismissed, visibleContent];
  isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  const memo1 = stateFromStores.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(isQuestRendered(isTinyBroncoEligible[4]).t.gMFchc),
      description: intl2.string(isQuestRendered(isTinyBroncoEligible[4]).t["V3j11+"]),
      position: "top",
      visible: visibleContent === isQuestRendered(isTinyBroncoEligible[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = isQuestRendered(isTinyBroncoEligible[4]).intl;
    intl2 = isQuestRendered(isTinyBroncoEligible[4]).intl;
    return obj;
  }, items2);
  const obj6 = isQuestRendered(isTinyBroncoEligible[13]);
  const privateProfileCoachmarkProps = obj6.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isQuestRendered(isTinyBroncoEligible[14]);
  const coachmark = obj7.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj8 = isQuestRendered(isTinyBroncoEligible[14]);
  const coachmark1 = obj8.useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
}

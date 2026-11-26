// Module ID: 18929
// Function ID: 18930
// Name: NitroBadgeUnhiddenCoachmark
// Dependencies: [19, 1071, 4759, 18926, 1112, 5592, 2187, 9087, 2]
// Exports: default

// Module 18929 (NitroBadgeUnhiddenCoachmark)
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const HelpdeskArticles = Constants.HelpdeskArticles;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/user_profile/native/NitroBadgeUnhiddenCoachmark.tsx");

export default function NitroBadgeUnhiddenCoachmark(markAsDismissed) {
  let constants2;
  let position;
  let targetRef;
  let visible;
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = markAsDismissed(18926)(targetRef, visible);
  dependencyMap = tmp;
  const items = [visible, tmp, markAsDismissed];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      title: intl.string(intl4.t.ZRLAIy),
      description: intl2.string(intl4.t.sEGQaJ),
      visible,
      position,
      onDismiss() {
        return markAsDismissed(constants2.USER_DISMISS);
      },
      buttonLabel: intl3.string(intl4.t.hvVgAZ),
      buttonVariant: "primary",
      onButtonPress() {
        closure_1_1(constants2.TAKE_ACTION);
        const openURL = markAsDismissed(position[5]).openURL;
        markAsDismissed(position[5]);
        const obj = markAsDismissed(position[6]);
        openURL(obj.getArticleURL(constants.PROFILE_BADGES_MANAGEMENT));
      }
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items);
  let obj = visible(9087);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};

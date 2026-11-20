// Module ID: 17915
// Function ID: 17916
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 4640, 21, 4627, 8960, 1112, 11592, 8967, 2]
// Exports: default

// Module 17915 (useForLaterCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4627 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4640 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_6 = dismissible_content.DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  let closure_1;
  let first;
  let obj = first(8960);
  const items = [closure_6];
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  const items1 = [tmp[1], first];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.qPbFK2),
      description: intl2.string(intl3.t.b2yxYL),
      position: "bottom",
      visible: first === closure_6,
      onDismiss() {
        closure_1_1(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_5(first(closure_1_1[7]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items1);
  const obj2 = first(8967);
  const coachmark = obj2.useCoachmark(targetRef, memo);
  return tmp[1];
};

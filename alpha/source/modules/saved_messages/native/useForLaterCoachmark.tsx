// Module ID: 18732
// Function ID: 18733
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 4987, 21, 4974, 7709, 1113, 11370, 10133, 2]
// Exports: default

// Module 18732 (useForLaterCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4974 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4987 */;
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
  let obj = first(7709);
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
  const obj2 = first(10133);
  const coachmark = obj2.useCoachmark(targetRef, memo);
  return tmp[1];
};

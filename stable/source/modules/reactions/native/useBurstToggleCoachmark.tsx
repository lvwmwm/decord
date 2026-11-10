// Module ID: 9953
// Function ID: 9954
// Name: useBurstToggleCoachmark
// Dependencies: [32, 19, 17, 1383, 4860, 21, 4847, 5014, 575, 9918, 504, 2047, 7569, 1113, 9954, 2]
// Exports: default

// Module 9953 (useBurstToggleCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import SuperReactionIcon2 from "SuperReactionIcon" /* 9918 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
function EducationCoachmarkImg() {
  ({ color: nativeDefault.colors.WHITE, size: "md" });
  const SuperReactionIcon = SuperReactionIcon2.SuperReactionIcon;
  return <View style={closure_10().upsellImageContainer}>{null}</View>;
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = dismissible_content.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
let obj = { upsellImageContainer: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  let currentUser;
  let first;
  let items2;
  let obj = first(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = first(2047);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    items2 = items1;
  } else {
    items2 = [];
  }
  const tmpResult = first(7569);
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  let closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      description: intl.string(intl3.t.nyYohm),
      onDismiss() {
        closure_1_1(constants.UNKNOWN);
      },
      position: "bottom",
      renderImgComponent() {
        return closure_1_8(closure_1_11, {});
      },
      title: intl2.string(intl3.t.ORK94p),
      visible: first === closure_9
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items3);
  const tmpResult2 = first(9954);
  const coachmark = tmpResult2.useCoachmark(targetRef, memo);
  return tmp5[1];
};

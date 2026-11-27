// Module ID: 19139
// Function ID: 19140
// Name: DisplayNameStylesFlywheelProfileCoachmark
// Dependencies: [19, 17, 1387, 4889, 21, 5043, 504, 2174, 1112, 3303, 9569, 19140, 2]
// Exports: default

// Module 19139 (DisplayNameStylesFlywheelProfileCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4889 */;
import DisplayNameLockeAbstractUI from "DisplayNameLockeAbstractUI" /* 19140 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

function CoachmarkImage() {
  return <View style={closure_8().coachmarkImageContainer}>{jsx(DisplayNameLockeAbstractUI.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" })}</View>;
}
let react = react_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" } });
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  let currentUser;
  let description;
  let string2Result;
  let stringResult;
  let title;
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  dependencyMap = undefined;
  react = undefined;
  let onDismiss;
  const targetRef = visible.targetRef;
  const items = [UserStore];
  const obj = visible(504);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = markAsDismissed(2174);
  const result = obj2.canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1112).intl;
  const string = intl.string;
  const tmp6 = markAsDismissed(3303);
  const tmp4 = markAsDismissed;
  if (result) {
    stringResult = string(tmp6.h6sykk);
  } else {
    stringResult = string(tmp6.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = tmp(1112).intl;
  const string2 = intl2.string;
  const tmp4Result = tmp4(3303);
  if (result) {
    string2Result = string2(tmp4Result.TyUdka);
  } else {
    string2Result = string2(tmp4Result.dluV0R);
  }
  react = string2Result;
  const items1 = [markAsDismissed];
  onDismiss = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [stringResult, string2Result, visible, onDismiss];
  const memo = react.useMemo(() => ({
    title,
    description,
    visible,
    position: "bottom",
    onDismiss,
    renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    }
  }), items2);
  const tmpResult = visible(9569);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return null;
};

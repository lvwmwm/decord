// Module ID: 15536
// Function ID: 119560
// Name: CoachmarkImage
// Dependencies: [31, 27, 1849, 1345, 33, 4130, 689, 566, 3776, 1212, 2556, 8608, 5807, 1273, 2]
// Exports: default

// Module 15536 (CoachmarkImage)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function CoachmarkImage() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.coachmarkImageContainer };
  const items = [callback(require(5807) /* AccountAgeTier10LargeBadge */.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" }), ];
  obj = { style: tmp.betaTag };
  items[1] = callback(require(1273) /* Button */.BetaTag, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.coachmarkImageContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.betaTag = { marginLeft: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let dependencyMap;
  let React;
  let callback;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = visible(566).useStateFromStores(items, () => outer1_5.getCurrentUser());
  const obj = visible(566);
  const result = markAsDismissed(3776).canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1212).intl;
  const string = intl.string;
  const tmp3 = markAsDismissed(2556);
  if (result) {
    let stringResult = string(tmp3.h6sykk);
  } else {
    stringResult = string(tmp3.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = visible(1212).intl;
  const string2 = intl2.string;
  const tmp5 = markAsDismissed(2556);
  if (result) {
    let string2Result = string2(tmp5.TyUdka);
  } else {
    string2Result = string2(tmp5.dluV0R);
  }
  React = string2Result;
  const items1 = [markAsDismissed];
  callback = React.useCallback(() => {
    markAsDismissed(outer1_6.USER_DISMISS);
  }, items1);
  const items2 = [stringResult, string2Result, visible, callback];
  const memo = React.useMemo(() => ({
    title: c2,
    description: c3,
    visible,
    position: "bottom",
    onDismiss: callback,
    renderImgComponent() {
      return outer2_7(outer2_10, {});
    }
  }), items2);
  const obj2 = markAsDismissed(3776);
  const coachmark = visible(8608).useCoachmark(visible.targetRef, memo);
  return null;
};

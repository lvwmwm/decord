// Module ID: 13402
// Function ID: 13403
// Name: WishlistViewerCoachmark
// Dependencies: [19, 17, 2062, 21, 5092, 558, 576, 13403, 6156, 1126, 9442, 2]

// Module 13402 (WishlistViewerCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef13403 from "module_13403" /* 13403 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoachmarkImage() {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp3 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef13403 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.image) {
    const tmp9 = jsx(FastImageDefault, { source: first, style: tmp3.image });
    cResult[1] = tmp3.image;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp3.imageContainer) {
    let tmp10;
    if (cResult[4] === tmp6) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp3.imageContainer}>{tmp6}</View>;
  cResult[3] = tmp3.imageContainer;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function CoachmarkImage() {
  const tmp = closure_7();
  const obj3 = { uri: _modDef13403 };
  FastImageDefault;
  return <View style={tmp.imageContainer}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function WishlistViewerCoachmark(onViewWishlist) {
  let isVisible;
  let markAsDismissed;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = markAsDismissed(576);
  const cResult = obj.c(12);
  ({ isVisible, markAsDismissed } = onViewWishlist);
  onViewWishlist = onViewWishlist.onViewWishlist;
  const anchorRef = onViewWishlist.anchorRef;
  if (cResult[0] !== onViewWishlist) {
    const fn = function n() {
      onViewWishlist();
    };
    cResult[0] = onViewWishlist;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t["+b6iUl"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(markAsDismissed(1126).t.Howsng);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    tmp6 = stringResult1;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== markAsDismissed) {
    const fn2 = function y() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = markAsDismissed;
    cResult[5] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function _() {
      return <closure_1_8 />;
    };
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(markAsDismissed(1126).t.TxBQzD);
    cResult[6] = fn3;
    cResult[7] = stringResult2;
    tmp11 = stringResult2;
    tmp10 = fn3;
  } else {
    tmp10 = cResult[6];
    tmp11 = cResult[7];
  }
  if (cResult[8] === tmp4) {
    if (cResult[9] === isVisible) {
      let tmp13;
      if (cResult[10] === tmp9) {
        tmp13 = cResult[11];
      }
      const tmpResult = markAsDismissed(9442);
      const coachmark = tmpResult.useCoachmark(anchorRef, tmp13);
      return null;
    }
  }
  const obj2 = { title: tmp5, description: tmp6, position: "bottom", visible: isVisible, onDismiss: tmp9, renderImgComponent: tmp10, buttonLabel: tmp11, buttonVariant: "primary", onButtonPress: tmp4 };
  cResult[8] = tmp4;
  cResult[9] = isVisible;
  cResult[10] = tmp9;
  cResult[11] = obj2;
  tmp13 = obj2;
}) : (function WishlistViewerCoachmark(isVisible) {
  isVisible = isVisible.isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  let onButtonPress;
  const items = [onViewWishlist];
  const anchorRef = isVisible.anchorRef;
  onButtonPress = onButtonPress.useCallback(() => {
    onViewWishlist();
  }, items);
  const items1 = [isVisible, markAsDismissed, onButtonPress];
  const memo = onButtonPress.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(intl4.t["+b6iUl"]),
      description: intl2.string(intl4.t.Howsng),
      position: "bottom",
      visible: isVisible,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_6(closure_1_8, {});
      },
      buttonLabel: intl3.string(intl4.t.TxBQzD),
      buttonVariant: "primary",
      onButtonPress
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items1);
  let obj = isVisible(onViewWishlist[10]);
  const coachmark = obj.useCoachmark(anchorRef, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default tmp2;

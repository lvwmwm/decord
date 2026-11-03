// Module ID: 15159
// Function ID: 15160
// Name: WishlistViewerCoachmark
// Dependencies: [19, 17, 4987, 21, 5141, 5837, 15160, 1113, 10085, 2]
// Exports: default

// Module 15159 (WishlistViewerCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4987 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _modDef15160 from "module_15160" /* 15160 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

function CoachmarkImage() {
  const tmp = closure_7();
  const obj3 = { uri: _modDef15160 };
  FastImageDefault;
  return <View style={tmp.imageContainer}>{null}</View>;
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
const result = size.fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default function WishlistViewerCoachmark(isVisible) {
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
  let obj = isVisible(onViewWishlist[8]);
  const coachmark = obj.useCoachmark(anchorRef, memo);
  return null;
};

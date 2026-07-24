// Module ID: 12182
// Function ID: 95419
// Name: CoachmarkImage
// Dependencies: [31, 27, 1345, 33, 4130, 12183, 1212, 8608, 2]
// Exports: default

// Module 12182 (CoachmarkImage)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function CoachmarkImage() {
  const tmp = callback();
  let obj = { style: tmp.imageContainer };
  obj = {};
  obj = { uri: importDefault(12183) };
  obj.source = obj;
  obj.style = tmp.image;
  obj.children = <closure_5 uri={importDefault(12183)} />;
  return <closure_4 uri={importDefault(12183)} />;
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
const result = require("ContentDismissActionType").fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default function WishlistViewerCoachmark(isVisible) {
  isVisible = isVisible.isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  const items = [onViewWishlist];
  callback = callback.useCallback(() => {
    onViewWishlist();
  }, items);
  const items1 = [isVisible, markAsDismissed, callback];
  const memo = callback.useMemo(() => {
    const obj = {};
    const intl = isVisible(onViewWishlist[6]).intl;
    obj.title = intl.string(isVisible(onViewWishlist[6]).t["+b6iUl"]);
    const intl2 = isVisible(onViewWishlist[6]).intl;
    obj.description = intl2.string(isVisible(onViewWishlist[6]).t.Howsng);
    obj.position = "bottom";
    obj.visible = isVisible;
    obj.onDismiss = function onDismiss() {
      return outer1_1(outer2_6.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_7(outer2_9, {});
    };
    const intl3 = isVisible(onViewWishlist[6]).intl;
    obj.buttonLabel = intl3.string(isVisible(onViewWishlist[6]).t.TxBQzD);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback;
    return obj;
  }, items1);
  const coachmark = isVisible(onViewWishlist[7]).useCoachmark(isVisible.anchorRef, memo);
  return null;
};

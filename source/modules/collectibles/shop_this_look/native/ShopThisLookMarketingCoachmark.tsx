// Module ID: 12575
// Function ID: 12576
// Name: ShopThisLookMarketingCoachmarkImage
// Dependencies: [19, 17, 1388, 5815, 21, 4344, 6183, 12573, 1236, 8698, 2]
// Exports: default

// Module 12575 (ShopThisLookMarketingCoachmarkImage)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ShopThisLookMarketingCoachmarkImage() {
  return <View style={callback().imageContainer}>{jsx(require(6183) /* BumpingFistsSpotIllustration */.BumpingFistsSpotIllustration, { width: 100, height: 56, resizeMode: "contain" })}</View>;
}
let closure_7 = createCacheKey.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx");

export default function ShopThisLookMarketingCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  let closure_3;
  let callback;
  let callback1;
  closure_3 = onPress.useRef(false);
  const items = [onDismiss, onPress];
  callback = onPress.useCallback(() => {
    closure_3.current = true;
    const result = visible(onDismiss[7]).trackShopThisLookMenuAction(visible(onDismiss[7]).ShopThisLookMenuAction.COACHMARK_CTA_CLICKED, callback1.ACTION_SHEET);
    onDismiss(callback.TAKE_ACTION);
    onPress();
  }, items);
  const items1 = [onDismiss];
  callback1 = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(callback.USER_DISMISS);
  }, items1);
  const items2 = [visible];
  const effect = onPress.useEffect(() => {
    if (visible) {
      const result = visible(onDismiss[7]).trackShopThisLookMenuAction(visible(onDismiss[7]).ShopThisLookMenuAction.COACHMARK_VIEWED, callback1.ACTION_SHEET);
      const obj = visible(onDismiss[7]);
    }
  }, items2);
  const items3 = [visible, onDismiss];
  const effect1 = onPress.useEffect(() => visible ? (() => {
    const result = outer1_0(outer1_1[7]).trackShopThisLookMenuAction(outer1_0(outer1_1[7]).ShopThisLookMenuAction.COACHMARK_DISMISSED, outer1_5.ACTION_SHEET);
    if (!ref.current) {
      callback(outer1_4.AUTO_DISMISS);
    }
  }) : undefined, items3);
  const items4 = [visible, callback, callback1];
  const memo = onPress.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null, onDismiss: null };
    const intl = visible(onDismiss[8]).intl;
    obj[0] = intl.string(visible(onDismiss[8]).t.TrOccu);
    const intl2 = visible(onDismiss[8]).intl;
    obj[1] = intl2.string(visible(onDismiss[8]).t["Eh5+1F"]);
    obj[2] = visible;
    obj[4] = function renderImgComponent() {
      return callback(closure_8, {});
    };
    const intl3 = visible(onDismiss[8]).intl;
    obj[5] = intl3.string(visible(onDismiss[8]).t["bqZVd/"]);
    obj[7] = callback;
    obj[8] = callback1;
    return obj;
  }, items4);
  const coachmark = visible(onDismiss[9]).useCoachmark(visible.targetRef, memo);
  return null;
};

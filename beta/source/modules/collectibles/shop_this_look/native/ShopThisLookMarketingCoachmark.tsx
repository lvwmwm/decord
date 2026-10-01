// Module ID: 12564
// Function ID: 12565
// Name: ShopThisLookMarketingCoachmark
// Dependencies: [19, 17, 2042, 6629, 21, 4836, 12565, 12559, 1115, 10589, 2]
// Exports: default

// Module 12564 (ShopThisLookMarketingCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import Constants from "Constants" /* 6629 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 12559 */;
import BumpingFistsSpotIllustration from "BumpingFistsSpotIllustration" /* 12565 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function ShopThisLookMarketingCoachmarkImage() {
  return <View style={closure_7().imageContainer}>{jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, { width: 100, height: 56, resizeMode: "contain" })}</View>;
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx");

export default function ShopThisLookMarketingCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  const targetRef = visible.targetRef;
  let closure_3 = onPress.useRef(false);
  const items = [onDismiss, onPress];
  const onButtonPress = onPress.useCallback(() => {
    closure_3.current = true;
    const obj = ShopThisLookAnalyticsUtils;
    const result = obj.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED, UserProfileThemeTypes.ACTION_SHEET);
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    onPress();
  }, items);
  const items1 = [onDismiss];
  const callback1 = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [visible];
  const effect = onPress.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const obj = ShopThisLookAnalyticsUtils;
      const result = obj.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
    }
  }, items2);
  const items3 = [visible, onDismiss];
  const effect1 = onPress.useEffect(() => {
    let ref;
    return visible ? (() => {
      const obj = visible(onDismiss[7]);
      const result = obj.trackShopThisLookMenuAction(visible(onDismiss[7]).ShopThisLookMenuAction.COACHMARK_DISMISSED, callback1.ACTION_SHEET);
      if (!ref.current) {
        closure_1_1(callback.AUTO_DISMISS);
      }
    }) : undefined;
  }, items3);
  const items4 = [visible, onButtonPress, callback1];
  const memo = onPress.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(intl4.t.TrOccu),
      description: intl2.string(intl4.t["Eh5+1F"]),
      visible,
      position: "bottom",
      renderImgComponent() {
        return closure_1_6(closure_1_8, {});
      },
      buttonLabel: intl3.string(intl4.t["bqZVd/"]),
      buttonVariant: "primary",
      onButtonPress,
      onDismiss: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items4);
  let obj = visible(onDismiss[9]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};

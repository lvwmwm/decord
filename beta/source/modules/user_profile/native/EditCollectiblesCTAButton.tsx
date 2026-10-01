// Module ID: 7617
// Function ID: 7618
// Name: EditCollectiblesCTAButton
// Dependencies: [19, 4825, 1076, 1609, 21, 4836, 1613, 504, 7618, 4566, 5280, 4488, 6974, 7619, 1115, 4801, 7620, 7621, 6961, 4800, 5281, 2]

// Module 7617 (EditCollectiblesCTAButton)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import intl4 from "intl" /* 1115 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import spring from "spring" /* 5280 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators" /* 7620 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 7621 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let user;

let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let closure_6 = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let __initData = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
let closure_10 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
const __initData2 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const memoResult = react.memo((user) => {
  let Button;
  let View2;
  let c9;
  let isTryItOut;
  let items4;
  let items5;
  let obj12;
  let onApply;
  let product;
  let purchase;
  let str;
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  closure_8 = undefined;
  __initData = undefined;
  let isShopStandalonePdpMobileEnabled;
  let tmp = closure_8();
  let tmp2 = currentSkuId;
  let tmp3 = selectedSkuId;
  const tmp4 = user;
  const bottom = currentSkuId(selectedSkuId[6])().bottom;
  let obj = user(selectedSkuId[7]);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  ({ purchase, product } = currentSkuId(selectedSkuId[8])(selectedSkuId));
  const tmp6 = currentSkuId(selectedSkuId[8])(selectedSkuId);
  let obj2 = user(selectedSkuId[9]);
  const sharedValue = obj2.useSharedValue(false);
  let obj3 = onApply;
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = onApply.useEffect(() => {
    const result = sharedValue.set(selectedSkuId !== currentSkuId);
  }, items1);
  let obj4 = user(selectedSkuId[9]);
  class O {
    constructor() {
      let num = 60;
      const obj = sharedValue;
      if (sharedValue.get()) {
        num = 0;
      }
      let num2 = 0.9;
      if (obj.get()) {
        num2 = 1;
      }
      let withSpringResult = num;
      if (!stateFromStores) {
        const obj2 = spring;
        withSpringResult = obj2.withSpring(num, closure_6);
      }
      const transform = [{ translateY: withSpringResult }, ];
      let withSpringResult1 = num2;
      if (!stateFromStores) {
        const obj3 = spring;
        withSpringResult1 = obj3.withSpring(num2, closure_6);
      }
      transform[1] = { scale: withSpringResult1 };
      return { transform };
    }
  }
  let obj5 = { shouldShowButton: sharedValue, APPLY_BUTTON_BOUNCE_DISTANCE: 60, APPLY_BUTTON_SCALE_TRANSITION: 0.9, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  O.__closure = obj5;
  O.__workletHash = 15594859424201;
  O.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(O);
  let obj6 = user(selectedSkuId[9]);
  class M {
    constructor() {
      let pointerEvents = "none";
      if (sharedValue.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  M.__closure = { shouldShowButton: sharedValue };
  M.__workletHash = 16151141699021;
  M.__initData = isShopStandalonePdpMobileEnabled;
  const animatedProps = obj6.useAnimatedProps(M);
  let obj7 = user(selectedSkuId[9]);
  class R {
    constructor() {
      let num = 0;
      if (sharedValue.get()) {
        num = 1;
      }
      let opacity = num;
      if (!stateFromStores) {
        const obj = { overshootClamping: true };
        const withSpring = spring.withSpring;
        spring;
        const merged = Object.assign(closure_6);
        opacity = withSpring(num, obj);
      }
      return { opacity };
    }
  }
  R.__closure = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  R.__workletHash = 13351061137085;
  R.__initData = __initData2;
  ({ shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores });
  const animatedStyle1 = obj7.useAnimatedStyle(R);
  const obj9 = currentSkuId(selectedSkuId[11]);
  const canUseCollectiblesResult = obj9.canUseCollectibles(user);
  const obj10 = user(selectedSkuId[12]);
  let result = obj10.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmp4Result = tmp4(tmp3[12]);
    result = tmp4Result.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    const tmp4Result3 = tmp4(tmp3[12]);
    result1 = tmp4Result3.isPremiumCollectiblesPurchase(purchase);
  }
  let tmp15 = null == selectedSkuId;
  if (!tmp15) {
    tmp15 = null != purchase && !result1;
    const tmp16 = null != purchase && !result1;
  }
  if (!tmp15) {
    tmp15 = result && isTryItOut;
    const tmp17 = result && isTryItOut;
  }
  closure_8 = tmp15;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  __initData = result;
  const tmp4Result4 = tmp4(tmp3[13]);
  isShopStandalonePdpMobileEnabled = tmp4Result4.useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
  const items2 = [tmp15, result, user];
  const items3 = [tmp15, onApply, result, isShopStandalonePdpMobileEnabled, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj3.useMemo(() => {
    let stringResult;
    const tmp = closure_8;
    if (tmp) {
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t.Jh8fJz);
    } else {
      const tmp2 = c9;
      if (tmp2) {
        let stringResult1;
        const obj = PremiumUtilsDefault;
        const isPremiumResult = obj.isPremium(user);
        const intl2 = intl4.intl;
        const string = intl2.string;
        const t = intl4.t;
        if (isPremiumResult) {
          stringResult1 = string(t.KXLX7l);
        } else {
          stringResult1 = string(t.mr4K7D);
        }
        stringResult = stringResult1;
      } else {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.fYfGgK);
      }
    }
    return stringResult;
  }, items2);
  const callback = obj3.useCallback(() => {
    const tmp = closure_8;
    if (tmp) {
      const obj6 = HapticUtils;
      const result = obj6.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
    } else {
      const tmp2 = c9;
      if (tmp2) {
        const obj5 = EditCollectiblesActionCreators;
        const result1 = obj5.navigateToNitroManagement();
      } else {
        const tmp3 = isShopStandalonePdpMobileEnabled;
        if (tmp3) {
          if (null != selectedSkuId) {
            const obj2 = { skuId: tmp4, analyticsLocations, stageCollectibleChangeForEditProfile: onApply };
            const obj3 = openProductDetailsActionSheet;
            const result2 = obj3.openProductDetailsActionSheetForSku(obj2, "stack");
          }
        }
        const obj4 = { analyticsLocations, analyticsSource, initialProductSkuId: selectedSkuId, screen: analyticsSource.SHOP_ALL };
        const obj = CollectiblesActionCreators;
        const result3 = obj.openCollectiblesShopMobile(obj4);
      }
    }
    const obj7 = ActionSheetActionCreatorsDefault;
    obj7.hideActionSheet();
  }, items3);
  const obj11 = { style: items4, animatedProps, children: sharedValue(View2, obj12) };
  items4 = [tmp.buttonContainer, animatedStyle1];
  const View = tmp2(tmp3[9]).View;
  obj12 = { style: items5, pointerEvents: "box-none", children: sharedValue(Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true }) };
  items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: bottom }];
  View2 = tmp2(tmp3[9]).View;
  str = "primary";
  Button = tmp4(tmp3[20]).Button;
  if (result) {
    str = "active";
  }
  return sharedValue(View, obj11);
});
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;

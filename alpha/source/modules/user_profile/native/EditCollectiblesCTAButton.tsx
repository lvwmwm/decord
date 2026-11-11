// Module ID: 9337
// Function ID: 9338
// Name: EditCollectiblesCTAButton
// Dependencies: [19, 5244, 1074, 1623, 21, 5243, 1627, 504, 9338, 1652, 5876, 2171, 8431, 9339, 1113, 5491, 9340, 9341, 8418, 5489, 5873, 2]

// Module 9337 (EditCollectiblesCTAButton)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl4 from "intl" /* 1113 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8418 */;
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators" /* 9340 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 9341 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let closure_6 = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
let jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let closure_9 = { code: "(function EditCollectiblesCTAButtonTsx1(){let[shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};})" };
let closure_10 = { code: "(function EditCollectiblesCTAButtonTsx2(){let[shouldShowButton]=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};})" };
let closure_11 = { code: "(function EditCollectiblesCTAButtonTsx3(){let[shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};})" };
const memoResult = react.memo(function EditCollectiblesCTAButton(user) {
  let Button;
  let View2;
  let closure_7;
  let isTryItOut;
  let items10;
  let items11;
  let obj5;
  let onApply;
  let product;
  let purchase;
  let str;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  jsx = undefined;
  let c8;
  let isShopStandalonePdpMobileEnabled;
  let tmp = c8();
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
  const items2 = [isShopStandalonePdpMobileEnabled, sharedValue, 60, 0.9, stateFromStores, , ];
  const useAnimatedStyle = user(selectedSkuId[9]).useAnimatedStyle;
  const tmp9 = user(selectedSkuId[9]);
  items2[5] = user(selectedSkuId[10]).withSpring;
  items2[6] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class EditCollectiblesCTAButtonTsx1 {
    constructor() {
      let num = 0;
      const obj = _undefined;
      if (!_undefined.get()) {
        num = c1;
      }
      let num2 = 1;
      if (!obj.get()) {
        num2 = c2;
      }
      let tmp2 = num;
      if (!c3) {
        tmp2 = _undefined2(num, c5);
      }
      const transform = [{ translateY: tmp2 }, ];
      let tmp5 = num2;
      if (!c3) {
        tmp5 = _undefined2(num2, c5);
      }
      transform[1] = { scale: tmp5 };
      return { transform };
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  EditCollectiblesCTAButtonTsx1.__closure = items3;
  EditCollectiblesCTAButtonTsx1.__workletHash = 3346300187216;
  EditCollectiblesCTAButtonTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(EditCollectiblesCTAButtonTsx1);
  const items4 = [closure_10, sharedValue];
  c0 = undefined;
  [tmp19, tmp20] = items4;
  const tmp10 = sharedValue;
  const tmp4Result = tmp4(tmp3[9]);
  class EditCollectiblesCTAButtonTsx2 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items5 = [tmp20];
  EditCollectiblesCTAButtonTsx2.__closure = items5;
  EditCollectiblesCTAButtonTsx2.__workletHash = 2472922412820;
  EditCollectiblesCTAButtonTsx2.__initData = tmp19;
  const animatedProps = tmp4Result.useAnimatedProps(EditCollectiblesCTAButtonTsx2);
  const items6 = [closure_11, sharedValue, stateFromStores, , ];
  const useAnimatedStyle2 = tmp4(tmp3[9]).useAnimatedStyle;
  tmp4(tmp3[9]);
  items6[3] = tmp4(tmp3[10]).withSpring;
  items6[4] = tmp10;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items6;
  class EditCollectiblesCTAButtonTsx3 {
    constructor() {
      let num = 0;
      if (_undefined.get()) {
        num = 1;
      }
      let opacity = num;
      if (!c1) {
        const obj = { overshootClamping: true };
        const merged = Object.assign(c3);
        opacity = _undefined2(num, obj);
      }
      return { opacity };
    }
  }
  const items7 = [tmp24, tmp25, tmp26, tmp27];
  EditCollectiblesCTAButtonTsx3.__closure = items7;
  EditCollectiblesCTAButtonTsx3.__workletHash = 13264991240196;
  EditCollectiblesCTAButtonTsx3.__initData = tmp23;
  const animatedStyle2 = useAnimatedStyle2(EditCollectiblesCTAButtonTsx3);
  const tmp2Result = tmp2(tmp3[11]);
  const canUseCollectiblesResult = tmp2Result.canUseCollectibles(user);
  const tmp4Result7 = tmp4(tmp3[12]);
  let result = tmp4Result7.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmp4Result8 = tmp4(tmp3[12]);
    result = tmp4Result8.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    const tmp4Result9 = tmp4(tmp3[12]);
    result1 = tmp4Result9.isPremiumCollectiblesPurchase(purchase);
  }
  let tmp32 = null == selectedSkuId;
  if (!tmp32) {
    tmp32 = null != purchase && !result1;
  }
  if (!tmp32) {
    tmp32 = result && isTryItOut;
  }
  jsx = tmp32;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  c8 = result;
  const tmp4Result10 = tmp4(tmp3[13]);
  isShopStandalonePdpMobileEnabled = tmp4Result10.useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
  const items8 = [tmp32, result, user];
  const items9 = [tmp32, onApply, result, isShopStandalonePdpMobileEnabled, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj3.useMemo(() => {
    let stringResult;
    const tmp = closure_7;
    if (tmp) {
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t.Jh8fJz);
    } else {
      const tmp2 = c8;
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
  }, items8);
  const callback = obj3.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const obj6 = HapticUtils;
      const result = obj6.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
    } else {
      const tmp2 = c8;
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
  }, items9);
  let obj4 = { style: items10, animatedProps, children: jsx(View2, obj5) };
  items10 = [tmp.buttonContainer, animatedStyle2];
  const View = tmp2(tmp3[9]).View;
  obj5 = { style: items11, pointerEvents: "box-none", children: jsx(Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true }) };
  items11 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: bottom }];
  View2 = tmp2(tmp3[9]).View;
  str = "primary";
  Button = tmp4(tmp3[20]).Button;
  if (result) {
    str = "active";
  }
  return jsx(View, obj4);
});
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;

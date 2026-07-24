// Module ID: 7945
// Function ID: 62945
// Dependencies: [31, 4122, 655, 1552, 33, 4130, 1557, 566, 7946, 3991, 4542, 3776, 6786, 1212, 4099, 7947, 6773, 4098, 4543, 2]

// Module 7945
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_5 } from "items";
import { MEDIA_PICKER_SEND_BUTTON_SPRING as closure_6 } from "DRAG_HANDLE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let closure_9 = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
let closure_10 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
let closure_11 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const memoResult = importAllResult.memo((user) => {
  let isTryItOut;
  let onApply;
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  let callback;
  let c9;
  const tmp = callback();
  let obj = user(selectedSkuId[7]);
  let items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  const tmp3 = currentSkuId(selectedSkuId[8])(selectedSkuId);
  const purchase = tmp3.purchase;
  let obj1 = user(selectedSkuId[9]);
  const sharedValue = obj1.useSharedValue(false);
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = onApply.useEffect(() => {
    const result = sharedValue.set(selectedSkuId !== currentSkuId);
  }, items1);
  let obj2 = user(selectedSkuId[9]);
  class O {
    constructor() {
      num = 60;
      if (closure_7.get()) {
        num = 0;
      }
      num2 = 0.9;
      if (closure_7.get()) {
        num2 = 1;
      }
      obj = {};
      obj = {};
      withSpringResult = num;
      if (!closure_6) {
        tmp2 = user;
        tmp3 = selectedSkuId;
        num3 = 10;
        obj3 = user(selectedSkuId[10]);
        tmp4 = outer1_6;
        withSpringResult = obj3.withSpring(num, outer1_6);
      }
      obj.translateY = withSpringResult;
      items = [, ];
      items[0] = obj;
      obj1 = {};
      withSpringResult1 = num2;
      if (!closure_6) {
        tmp6 = user;
        tmp7 = selectedSkuId;
        num4 = 10;
        obj5 = user(selectedSkuId[10]);
        tmp8 = outer1_6;
        withSpringResult1 = obj5.withSpring(num2, outer1_6);
      }
      obj1.scale = withSpringResult1;
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { shouldShowButton: sharedValue, APPLY_BUTTON_BOUNCE_DISTANCE: 60, APPLY_BUTTON_SCALE_TRANSITION: 0.9, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  O.__closure = obj;
  O.__workletHash = 15594859424201;
  O.__initData = c9;
  const animatedStyle = obj2.useAnimatedStyle(O);
  class M {
    constructor() {
      obj = {};
      str = "none";
      if (closure_7.get()) {
        str = "box-none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  M.__closure = { shouldShowButton: sharedValue };
  M.__workletHash = 16151141699021;
  M.__initData = closure_10;
  const animatedProps = user(selectedSkuId[9]).useAnimatedProps(M);
  let obj5 = user(selectedSkuId[9]);
  class R {
    constructor() {
      num = 0;
      if (closure_7.get()) {
        num = 1;
      }
      obj = {};
      withSpringResult = num;
      if (!closure_6) {
        tmp2 = user;
        tmp3 = selectedSkuId;
        num2 = 10;
        obj2 = user(selectedSkuId[10]);
        obj = {};
        tmp4 = outer1_6;
        tmp5 = obj;
        merged = Object.assign(outer1_6);
        flag = true;
        str = "overshootClamping";
        obj["overshootClamping"] = true;
        withSpringResult = obj2.withSpring(num, obj);
      }
      obj.opacity = withSpringResult;
      return obj;
    }
  }
  obj = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  R.__closure = obj;
  R.__workletHash = 13351061137085;
  R.__initData = closure_11;
  const animatedStyle1 = user(selectedSkuId[9]).useAnimatedStyle(R);
  const obj6 = user(selectedSkuId[9]);
  const canUseCollectiblesResult = currentSkuId(selectedSkuId[11]).canUseCollectibles(user);
  const obj8 = currentSkuId(selectedSkuId[11]);
  let result = user(selectedSkuId[12]).isPremiumCollectiblesProduct(tmp3.product);
  if (!result) {
    result = user(selectedSkuId[12]).isPremiumCollectiblesPurchase(purchase);
    const obj10 = user(selectedSkuId[12]);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    result1 = user(selectedSkuId[12]).isPremiumCollectiblesPurchase(purchase);
    const obj11 = user(selectedSkuId[12]);
  }
  let tmp16 = null == selectedSkuId;
  if (!tmp16) {
    tmp16 = null != purchase && !result1;
    const tmp17 = null != purchase && !result1;
  }
  if (!tmp16) {
    let tmp18 = result;
    if (result) {
      tmp18 = isTryItOut;
    }
    tmp16 = tmp18;
  }
  callback = tmp16;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  c9 = result;
  const items2 = [tmp16, result, user];
  const items3 = [tmp16, onApply, result, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = onApply.useMemo(() => {
    if (c8) {
      const intl3 = user(selectedSkuId[13]).intl;
      let stringResult = intl3.string(user(selectedSkuId[13]).t.Jh8fJz);
    } else if (c9) {
      const obj = currentSkuId(selectedSkuId[11]);
      const intl2 = user(selectedSkuId[13]).intl;
      const string = intl2.string;
      let KXLX7l = user(selectedSkuId[13]).t;
      if (isPremiumResult) {
        KXLX7l = KXLX7l.KXLX7l;
        let stringResult1 = string(KXLX7l);
      } else {
        stringResult1 = string(KXLX7l.mr4K7D);
      }
      isPremiumResult = currentSkuId(selectedSkuId[11]).isPremium(user);
    } else {
      const intl = user(selectedSkuId[13]).intl;
      stringResult = intl.string(user(selectedSkuId[13]).t.fYfGgK);
    }
    return stringResult;
  }, items2);
  callback = onApply.useCallback(() => {
    if (c8) {
      const result = user(selectedSkuId[14]).triggerHapticFeedback(user(selectedSkuId[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
      const obj4 = user(selectedSkuId[14]);
    } else if (c9) {
      let tmp2Result = tmp2(tmp3[15]);
      const result1 = tmp2Result.navigateToNitroManagement();
    } else {
      tmp2Result = tmp2(tmp3[16]);
      const obj = { analyticsLocations, analyticsSource, initialProductSkuId: selectedSkuId, screen: analyticsSource.SHOP_ALL };
      const result2 = tmp2Result.openCollectiblesShopMobile(obj);
    }
    currentSkuId(selectedSkuId[17]).hideActionSheet();
  }, items3);
  obj1 = { style: items4, animatedProps };
  items4 = [tmp.buttonContainer, animatedStyle1];
  obj2 = { style: items5, pointerEvents: "box-none" };
  items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: currentSkuId(selectedSkuId[6])().bottom }];
  let obj3 = {};
  let str = "primary";
  if (result) {
    str = "active";
  }
  obj3.variant = str;
  obj3.onPress = callback;
  obj3.size = "md";
  obj3.text = memo;
  obj3.grow = true;
  obj2.children = sharedValue(user(selectedSkuId[18]).Button, obj3);
  obj1.children = sharedValue(currentSkuId(selectedSkuId[9]).View, obj2);
  return sharedValue(currentSkuId(selectedSkuId[9]).View, obj1);
});
let result = require("items").fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;

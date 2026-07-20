// Module ID: 7845
// Function ID: 62554
// Dependencies: []

// Module 7845
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
let closure_6 = arg1(dependencyMap[3]).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ buttonRowContainer: {}, buttonContainer: { 1402599266: false, -1334830736: false, -413065818: false, 1660337745: false, 1968297925: false, -1530113667: false, -1571694751: false, -253271418: false } });
let closure_9 = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
let closure_10 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
let closure_11 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((user) => {
  let isTryItOut;
  let onApply;
  user = user.user;
  const arg1 = user;
  const currentSkuId = user.currentSkuId;
  const importDefault = currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  const dependencyMap = selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  let closure_4 = analyticsLocations;
  const analyticsSource = user.analyticsSource;
  let closure_5 = analyticsSource;
  let callback;
  let closure_9;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let closure_6 = stateFromStores;
  const tmp3 = importDefault(dependencyMap[8])(selectedSkuId);
  const purchase = tmp3.purchase;
  let obj1 = arg1(dependencyMap[9]);
  const sharedValue = obj1.useSharedValue(false);
  const jsx = sharedValue;
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(selectedSkuId !== currentSkuId);
  }, items1);
  let obj2 = arg1(dependencyMap[9]);
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
        tmp4 = closure_6;
        withSpringResult = obj3.withSpring(num, closure_6);
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
        tmp8 = closure_6;
        withSpringResult1 = obj5.withSpring(num2, closure_6);
      }
      obj1.scale = withSpringResult1;
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { "Bool(false)": 117957, "Bool(false)": 1777025281, "Bool(false)": 1091633153, shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: arg1(dependencyMap[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_6 };
  O.__closure = obj;
  O.__workletHash = 15594859424201;
  O.__initData = closure_9;
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
  const animatedProps = arg1(dependencyMap[9]).useAnimatedProps(M);
  const obj5 = arg1(dependencyMap[9]);
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
        tmp4 = closure_6;
        tmp5 = obj;
        merged = Object.assign(closure_6);
        flag = true;
        str = "overshootClamping";
        obj["overshootClamping"] = true;
        withSpringResult = obj2.withSpring(num, obj);
      }
      obj.opacity = withSpringResult;
      return obj;
    }
  }
  obj = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: arg1(dependencyMap[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_6 };
  R.__closure = obj;
  R.__workletHash = 13351061137085;
  R.__initData = closure_11;
  const animatedStyle1 = arg1(dependencyMap[9]).useAnimatedStyle(R);
  const obj6 = arg1(dependencyMap[9]);
  const canUseCollectiblesResult = importDefault(dependencyMap[11]).canUseCollectibles(user);
  const obj8 = importDefault(dependencyMap[11]);
  let result = arg1(dependencyMap[12]).isPremiumCollectiblesProduct(tmp3.product);
  if (!result) {
    result = arg1(dependencyMap[12]).isPremiumCollectiblesPurchase(purchase);
    const obj10 = arg1(dependencyMap[12]);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    result1 = arg1(dependencyMap[12]).isPremiumCollectiblesPurchase(purchase);
    const obj11 = arg1(dependencyMap[12]);
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
  closure_9 = result;
  const items2 = [tmp16, result, user];
  const items3 = [tmp16, onApply, result, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = importAllResult.useMemo(() => {
    if (tmp16) {
      const intl3 = user(selectedSkuId[13]).intl;
      let stringResult = intl3.string(user(selectedSkuId[13]).t.Jh8fJz);
    } else if (result) {
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
      const isPremiumResult = currentSkuId(selectedSkuId[11]).isPremium(user);
    } else {
      const intl = user(selectedSkuId[13]).intl;
      stringResult = intl.string(user(selectedSkuId[13]).t.fYfGgK);
    }
    return stringResult;
  }, items2);
  callback = importAllResult.useCallback(() => {
    if (tmp16) {
      const result = user(selectedSkuId[14]).triggerHapticFeedback(user(selectedSkuId[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
      const obj4 = user(selectedSkuId[14]);
    } else if (result) {
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
  const items4 = [tmp.buttonContainer, animatedStyle1];
  obj2 = { style: items5, pointerEvents: "box-none" };
  const items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: importDefault(dependencyMap[6])().bottom }];
  const obj3 = {};
  let str = "primary";
  if (result) {
    str = "active";
  }
  obj3.variant = str;
  obj3.onPress = callback;
  obj3.size = "md";
  obj3.text = memo;
  obj3.grow = true;
  obj2.children = jsx(arg1(dependencyMap[18]).Button, obj3);
  obj1.children = jsx(importDefault(dependencyMap[9]).View, obj2);
  return jsx(importDefault(dependencyMap[9]).View, obj1);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;

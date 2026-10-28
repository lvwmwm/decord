// Module ID: 10483
// Function ID: 10484
// Name: PremiumGiftPlanSelect
// Dependencies: [32, 19, 17, 8718, 9551, 1391, 1084, 21, 5004, 587, 683, 558, 576, 1502, 1630, 5304, 1496, 10484, 5303, 6966, 504, 10533, 10531, 8710, 10481, 10535, 10541, 9765, 5085, 1199, 5242, 10549, 10537, 7314, 10550, 10584, 10928, 1125, 6967, 5705, 14140, 5294, 5270, 2]

// Module 10483 (PremiumGiftPlanSelect)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1084 */;
import native from "native" /* 1199 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import timing from "timing" /* 5242 */;
import PremiumGiftFeaturesCardDefault from "PremiumGiftFeaturesCard" /* 10541 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore_mod from "BadgeDirectoryStore" /* 8718 */;
import PromotionsStore_mod from "PromotionsStore" /* 9551 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation, state, v16;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
let BadgeDirectoryStore = BadgeDirectoryStore_mod;
let PromotionsStore = PromotionsStore_mod;
const PremiumTypes = PremiumConstants.PremiumTypes;
let VerticalGradient = Constants.VerticalGradient;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = PremiumTypes);
let c16 = 16;
let closure_17 = createStyles.createStyles((width, arg1, arg2) => {
  let alphaResult;
  let obj4;
  let space;
  let space2;
  let space3;
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, headerBackground: size, headerBackgroundColor: { color: nativeDefault.colors.BACKGROUND_BASE_LOW }, headerImageContainer: { position: "absolute", width, height: arg1 / 1.75 }, headerImage: { width }, headerOverlay: obj4, avatar: { alignSelf: "center" }, title: { textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: nativeDefault.space.PX_24 }, description: { textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: nativeDefault.space.PX_24 }, carousel: { marginTop: arg2 ? space3.PX_16 : space3.PX_32 }, dmGiftingContent: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 }, loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 1 }, closeButton: { padding: nativeDefault.space.PX_16 }, closeButtonIcon: { width: 24, height: 24, tintColor: "white" }, badgeBanner: { marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 } };
  size = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  obj4 = { width, backgroundColor: alphaResult.hex() };
  ({ color: nativeDefault.colors.BACKGROUND_BASE_LOW });
  const obj6 = _modDef683("#000000");
  alphaResult = obj6.alpha(0.8);
  space = nativeDefault.space;
  ({ textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: nativeDefault.space.PX_24 });
  space2 = tmp(587).space;
  ({ textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: nativeDefault.space.PX_24 });
  space3 = tmp(587).space;
  ({ paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 });
  ({ padding: nativeDefault.space.PX_16 });
  ({ marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 });
  return obj;
});
let closure_18 = { code: "function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}" };
let closure_19 = { code: "function PremiumGiftPlanSelectTsx2(value,index_0){const{lastItemIndex,CAROUSEL_GAP,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index_0-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=CAROUSEL_GAP+leftT*(centerOffset-CAROUSEL_GAP)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}" };
const __initData = { code: "function PremiumGiftPlanSelectTsx3(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}" };
const __initData2 = { code: "function PremiumGiftPlanSelectTsx4(value,index_0){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index_0-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftPlanSelect(arg0) {
  let bottom;
  let claimableRewards;
  let closure_6;
  let giftPromotionRewardSkuIds;
  let giftsToNextTier;
  let height;
  let isLoadingWishlist;
  let items3;
  let nextTier;
  let onClose;
  let recipientUser;
  let ref;
  let shouldUseDMWishlistGiftingDesign;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp30;
  let tmp31;
  let top;
  let width;
  let tmp = navigation;
  let tmp2 = onClose;
  let obj = navigation(onClose[12]);
  const cResult = obj.c(160);
  ({ shouldUseDMWishlistGiftingDesign, isLoadingWishlist } = arg0);
  let obj2 = navigation(onClose[13]);
  navigation = obj2.useNavigation();
  let tmp5 = claimableRewards;
  let tmp6 = claimableRewards(onClose[14])();
  ({ top, bottom } = tmp6);
  const sum = top + navigation(onClose[15]).NAV_BAR_HEIGHT;
  ({ width, height } = claimableRewards(onClose[16])());
  claimableRewards(onClose[16])();
  let obj3 = navigation(onClose[17]);
  const nativeGiftContext = obj3.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  const obj4 = navigation(onClose[18]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  if (cResult[0] !== onClose) {
    let fn = function f() {
      onClose();
      return true;
    };
    let num = 0;
    cResult[0] = onClose;
    let num2 = 1;
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  const tmpResult = tmp(tmp2[19]);
  tmpResult.useNavigatorBackPressHandler(tmp11);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    items = [PromotionsStore];
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
    cResult[2] = items;
    cResult[3] = C;
    tmp14 = C;
    tmp13 = items;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[20]);
  const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp13, tmp14);
  const tmpResult5 = tmp(tmp2[21]);
  const selectPremiumGift = tmpResult5.useSelectPremiumGift("PremiumGiftPlanSelect");
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: "PremiumGiftPlanSelect" };
    cResult[4] = obj5;
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
  } else {
    tmp18 = cResult[4];
  }
  const tmp5Result = tmp5(tmp2[22]);
  let enabled = tmp5Result.useConfig(tmp18).enabled;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BadgeDirectoryStore];
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
    cResult[5] = items1;
    cResult[6] = tmp22;
    tmp20 = tmp22;
    tmp19 = items1;
  } else {
    tmp19 = cResult[5];
    tmp20 = cResult[6];
  }
  const tmpResult6 = tmp(tmp2[20]);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp19, tmp20);
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  closure_17(width, height, enabled);
  const first = selectPremiumGift(enabled.useState(0), 2)[0];
  selectPremiumGift(enabled.useState(0), 2);
  [r10117, closure_6] = selectPremiumGift(enabled.useState(false), 2);
  selectPremiumGift(enabled.useState(false), 2);
  const tmp26 = selectPremiumGift;
  if (cResult[7] !== navigation) {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
    const items2 = [navigation];
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
    cResult[7] = navigation;
    cResult[8] = K;
    cResult[9] = items2;
    tmp31 = items2;
    tmp30 = K;
  } else {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
    tmp31 = cResult[9];
  }
  const effect = obj11.useEffect(tmp30, tmp31);
  const tmp26Result = tmp26(enabled.useState(null), 2);
  const first1 = tmp26Result[0];
  let closure_8 = tmp26Result[1];
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
    cResult[10] = tmp36;
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
  } else {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
  }
  BadgeDirectoryStore = obj11.useRef(tmp35);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
    cResult[11] = tmp38;
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
  } else {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
  }
  if (claimableRewards != null) {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
  }
  if (cResult[12] === shouldUseDMWishlistGiftingDesign) {
    class K {
      constructor() {
        navigation = navigation.addListener("state", () => {
          state = state.getState();
          closure_1_6(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
        });
        return () => {
          navigation.removeListener("state", state);
        };
      }
    }
    const effect1 = obj11.useEffect(tmp37, items3);
    const _Symbol = Symbol;
    class C {
      constructor() {
        return PromotionsStore.getGiftPromotionRewardSkuIds();
      }
    }
    if (tmp41 === Symbol.for("react.memo_cache_sentinel")) {
      class Te {
        constructor() {
          if (ref.current.length >= items.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(items, tmp2.current, 0);
            const _Math2 = Math;
            const applyResult = HermesBuiltin.apply(max, items, Math);
            const _Number = Number;
            if (!Number.isNaN(applyResult)) {
              closure_8(applyResult);
            }
          }
        }
      }
      cResult[15] = Te;
      class C {
        constructor() {
          return PromotionsStore.getGiftPromotionRewardSkuIds();
        }
      }
    } else {
      class Te {
        constructor() {
          if (ref.current.length >= items.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(items, tmp2.current, 0);
            const _Math2 = Math;
            const applyResult = HermesBuiltin.apply(max, items, Math);
            const _Number = Number;
            if (!Number.isNaN(applyResult)) {
              closure_8(applyResult);
            }
          }
        }
      }
    }
    PromotionsStore = tmp42;
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class Te {
        constructor() {
          if (ref.current.length >= items.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(items, tmp2.current, 0);
            const _Math2 = Math;
            const applyResult = HermesBuiltin.apply(max, items, Math);
            const _Number = Number;
            if (!Number.isNaN(applyResult)) {
              closure_8(applyResult);
            }
          }
        }
      }
      cResult[16] = tmp43;
      class C {
        constructor() {
          return PromotionsStore.getGiftPromotionRewardSkuIds();
        }
      }
    } else {
      class Te {
        constructor() {
          if (ref.current.length >= items.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(items, tmp2.current, 0);
            const _Math2 = Math;
            const applyResult = HermesBuiltin.apply(max, items, Math);
            const _Number = Number;
            if (!Number.isNaN(applyResult)) {
              closure_8(applyResult);
            }
          }
        }
      }
    }
    let result = 0.86 * width;
    VerticalGradient = result;
    if (cResult[17] === first1) {
      class Te {
        constructor() {
          if (ref.current.length >= items.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(items, tmp2.current, 0);
            const _Math2 = Math;
            const applyResult = HermesBuiltin.apply(max, items, Math);
            const _Number = Number;
            if (!Number.isNaN(applyResult)) {
              closure_8(applyResult);
            }
          }
        }
      }
    }
    function xe(variant, arg1) {
      let obj = arg1;
      if (undefined === arg1) {
        obj = { forScreenReader: false };
      }
      const forScreenReader = obj.forScreenReader;
      return function PremiumGiftCarouselItem(item) {
        let fn;
        let obj3;
        let str;
        let str2;
        let tmp5;
        item = item.item;
        const index = item.index;
        let tmp2 = forScreenReader;
        const tmp3 = forScreenReader ? metroRequire : metroImportDefault;
        const obj = { accessible: tmp2, accessibilityRole: str, onPress: fn, style: { paddingVertical: nativeDefault.space.PX_8 }, children: authStore2(tmp5, obj3, index) };
        str = undefined;
        if (tmp2) {
          str = "button";
        }
        fn = undefined;
        if (tmp2) {
          fn = () => closure_2_3(item);
        }
        obj3 = {
          premiumType: item,
          variant,
          onPress() {
            return closure_2_3(item);
          },
          style: size,
          onLayout(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            if (height > 0) {
              let num = ref.current[index];
              const current = ref.current;
              const _Math = Math;
              const tmp2 = index;
              if (num == null) {
                num = 0;
              }
              current[tmp2] = max(height, num);
              closure_2_10();
            }
          },
          claimableRewards,
          isSelected: first === index
        };
        ({ paddingVertical: nativeDefault.space.PX_8 });
        size = { height: first1, width: VerticalGradient, alignSelf: str2 };
        str2 = undefined;
        tmp5 = PremiumGiftFeaturesCardDefault;
        const tmp6 = variant;
        if ("default" === tmp6) {
          str2 = "center";
        }
        return authStore2(tmp3, obj);
      };
    }
    cResult[17] = first1;
    cResult[18] = result;
    cResult[19] = claimableRewards;
    cResult[20] = first;
    cResult[21] = selectPremiumGift;
    cResult[22] = xe;
  }
  items3 = [shouldUseDMWishlistGiftingDesign, undefined];
  cResult[12] = shouldUseDMWishlistGiftingDesign;
  cResult[13] = undefined;
  cResult[14] = items3;
}) : (function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  let AvatarSizes;
  let bottom;
  let c16;
  let c7;
  let claimableRewards;
  let formatToPlainStringResult;
  let giftsToNextTier;
  let height;
  let intl;
  let intl4;
  let items11;
  let items12;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let nextTier;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj21;
  let obj25;
  let obj26;
  let obj31;
  let obj32;
  let obj33;
  let obj39;
  let obj41;
  let recipientUser;
  let str2;
  let str3;
  let str4;
  let sum1;
  let tmp18;
  let tmp49;
  let tmp4Result;
  let tmp4Result7;
  let tmp60;
  let tmp63Result6;
  let tmp65;
  let tmp67;
  let tmp69;
  let tmpResult7;
  let tmpResult8;
  let top;
  let width;
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  navigation = undefined;
  claimableRewards = undefined;
  let onClose;
  let closure_5;
  let currentIndex;
  c7 = undefined;
  let num;
  let closure_9;
  let ref;
  let callback;
  let c12;
  let callback2;
  let str;
  let sharedValue;
  v16 = undefined;
  let c17;
  let result1;
  let diff1;
  const tmp = navigation;
  let tmp2 = onClose;
  const isLoadingWishlist = shouldUseDMWishlistGiftingDesign.isLoadingWishlist;
  let obj = navigation(onClose[13]);
  navigation = obj.useNavigation();
  const tmp4 = claimableRewards;
  let tmp5 = claimableRewards(onClose[14])();
  ({ top, bottom } = tmp5);
  let tmp6 = claimableRewards(onClose[16])();
  ({ width, height } = tmp6);
  let obj2 = navigation(onClose[17]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  let obj3 = navigation(onClose[18]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  const obj4 = navigation(onClose[19]);
  obj4.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  items = [ref];
  const obj5 = navigation(onClose[20]);
  const stateFromStoresArray = obj5.useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  const obj6 = navigation(onClose[21]);
  const selectPremiumGift = obj6.useSelectPremiumGift("PremiumGiftPlanSelect");
  const obj7 = claimableRewards(onClose[22]);
  let enabled = obj7.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  const items1 = [closure_9];
  const obj8 = navigation(onClose[20]);
  const stateFromStoresObject = obj8.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: closure_9.getNextTier(navigation(onClose[23]).BadgeId.GIFTING), giftsToNextTier: closure_9.getRemainingToNextTier(navigation(onClose[23]).BadgeId.GIFTING) };
    return obj;
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp13 = c17(width, height, enabled);
  closure_5 = tmp13;
  const tmp14 = selectPremiumGift(enabled.useState(0), 2);
  currentIndex = tmp14[0];
  [tmp18, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  selectPremiumGift(enabled.useState(false), 2);
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      state = state.getState();
      closure_1_7(state.routes[state.index].name === navigation(onClose[24]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      navigation.removeListener("state", state);
    };
  }, items2);
  const tmp20 = selectPremiumGift(enabled.useState(null), 2);
  num = tmp20[0];
  closure_9 = tmp21;
  ref = enabled.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign, ];
  let tmp63Result = enabled;
  let length;
  const useEffect = enabled.useEffect;
  if (claimableRewards != null) {
    length = claimableRewards.length;
  }
  items3[1] = length;
  const effect1 = useEffect(() => {
    ref.current = [];
    closure_9(null);
  }, items3);
  const items4 = [tmp20[1]];
  callback = obj9.useCallback(() => {
    if (ref.current.length >= items.length) {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(items, tmp2.current, 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(max, items, Math);
      const _Number = Number;
      if (!Number.isNaN(applyResult)) {
        closure_9(applyResult);
      }
    }
  }, items4);
  const callback1 = obj9.useCallback(() => {
    claimableRewards(onClose[25])();
  }, []);
  let result = 0.86 * width;
  c12 = result;
  const items5 = [selectPremiumGift, result, ref, callback, num, currentIndex, claimableRewards];
  callback2 = obj9.useCallback((variant) => {
    let width;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = { forScreenReader: false };
    }
    const forScreenReader = obj.forScreenReader;
    return function PremiumGiftCarouselItem(item) {
      let fn;
      let obj3;
      let str2;
      let tmp5;
      item = item.item;
      const index = item.index;
      let tmp2 = forScreenReader;
      const tmp3 = forScreenReader ? metroRequire : metroImportDefault;
      const obj = { accessible: tmp2, accessibilityRole: str, onPress: fn, style: { paddingVertical: nativeDefault.space.PX_8 }, children: authStore2(tmp5, obj3, index) };
      str = undefined;
      if (tmp2) {
        str = "button";
      }
      fn = undefined;
      if (tmp2) {
        fn = () => closure_2_3(item);
      }
      obj3 = {
        premiumType: item,
        variant,
        onPress() {
          return closure_2_3(item);
        },
        style: size,
        onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          if (height > 0) {
            num = ref.current[index];
            const current = ref.current;
            const _Math = Math;
            const tmp2 = index;
            if (num == null) {
              num = 0;
            }
            current[tmp2] = max(height, num);
            closure_2_11();
          }
        },
        claimableRewards,
        isSelected: first === index
      };
      ({ paddingVertical: nativeDefault.space.PX_8 });
      size = { height: num, width, alignSelf: str2 };
      str2 = undefined;
      tmp5 = PremiumGiftFeaturesCardDefault;
      const tmp6 = variant;
      if ("default" === tmp6) {
        str2 = "center";
      }
      return authStore2(tmp3, obj);
    };
  }, items5);
  const tmpResult = tmp(tmp2[27]);
  let tmp31 = null != claimableRewards;
  const isWindowSmall = tmpResult.useIsWindowSmall();
  if (tmp31) {
    tmp31 = claimableRewards.length > 0;
  }
  if (isWindowSmall) {
    str = "smallCompact";
  } else {
    str = "compact";
  }
  const items6 = [callback2, str];
  const memo = obj9.useMemo(() => callback2(str), items6);
  const items7 = [callback2];
  let memo1 = obj9.useMemo(() => callback2("default"), items7);
  const tmpResult5 = tmp(tmp2[28]);
  sharedValue = tmpResult5.useSharedValue(false);
  const items8 = [sharedValue, num];
  const effect2 = obj9.useEffect(() => {
    const result = sharedValue.set(null != num);
  }, items8);
  function he() {
    const obj = { easing: native.STANDARD_EASING, duration: 500 };
    const withTiming = timing.withTiming;
    num = 0;
    timing;
    const obj2 = sharedValue;
    if (sharedValue.get()) {
      num = 1;
    }
    const obj3 = { opacity: withTiming(num, obj), transform: items };
    const withTiming2 = tmp(5242).withTiming;
    let num2 = 100;
    timing;
    if (obj2.get()) {
      num2 = 0;
    }
    items = [{ translateY: withTiming2(num2, obj) }];
    ({ translateY: withTiming2(num2, obj) });
    return obj3;
  }
  const tmpResult6 = tmp(tmp2[28]);
  he.__closure = { STANDARD_EASING: tmp(tmp2[29]).STANDARD_EASING, withTiming: tmp(tmp2[30]).withTiming, carouselVisibility: sharedValue };
  he.__workletHash = 15067339177991;
  he.__initData = __initData;
  ({ STANDARD_EASING: tmp(tmp2[29]).STANDARD_EASING, withTiming: tmp(tmp2[30]).withTiming, carouselVisibility: sharedValue });
  const animatedStyle = tmpResult6.useAnimatedStyle(he);
  const items9 = [tmp13];
  const sum = result + v16;
  v16 = sum;
  let diff = sharedValue.length - 1;
  c17 = diff;
  result1 = (width - result) / 2;
  diff1 = width - result - v16;
  function fe(arg0, arg1) {
    const diff = arg1 - arg0;
    const bound = Math.max(0, Math.min(1, diff));
    const obj = { transform: items };
    items = [{ translateX: arg0 * c16 + (16 + bound * (result1 - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (diff1 - result1)) }];
    ({ translateX: arg0 * c16 + (16 + bound * (result1 - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (diff1 - result1)) });
    return obj;
  }
  fe.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  fe.__workletHash = 15752257370037;
  fe.__initData = __initData2;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = obj9.useMemo(() => {
    items = [, ];
    const obj = _modDef683(closure_5.headerBackgroundColor.color);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    const obj3 = _modDef683(closure_5.headerBackgroundColor.color);
    const alphaResult1 = obj3.alpha(1);
    items[1] = alphaResult1.hex();
    return items;
  }, items9);
  const callback3 = obj9.useCallback(fe, items10);
  if (isLoadingWishlist) {
    const obj11 = { style: items11, children: c12(closure_5, { size: "large" }) };
    items11 = [, ];
    ({ container: arr22[0], loadingContainer: arr22[1] } = tmp13);
    tmp63Result6 = c12(c7, obj11);
  } else if (shouldUseDMWishlistGiftingDesign) {
    const obj12 = { style: tmp13.container, children: tmp65(num, obj13) };
    obj13 = { contentContainerStyle: obj14, children: items12 };
    obj14 = { paddingBottom: bottom };
    tmp65 = callback2;
    if (tmp63Result) {
      const obj15 = { style: tmp13.badgeBanner, children: c12(tmp67, obj16) };
      obj16 = { onPress: callback1, accessibilityRole: "button", children: c12(tmp4Result, obj17) };
      obj17 = { giftsToNextTier, nextTierName: str4, nextTierIcon: tmpResult7.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: tmp4(tmp2[33]).PREMIUM_GIFT_PLAN_SELECTION };
      str4 = nextTier.name;
      tmp4Result = tmp4(tmp2[31]);
      tmp67 = currentIndex;
      if (str4 == null) {
        str4 = "";
      }
      tmpResult7 = tmp(tmp2[32]);
      tmp63Result = tmp63(tmp64, obj15);
    }
    items12 = [tmp63Result, , ];
    const obj18 = { style: tmp13.dmGiftingContent, children: tmp69 };
    if (0 === stateFromStoresArray.length) {
      let tmp63Result4;
      if (isScreenReaderEnabled) {
        const obj19 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          contentContainerStyle: obj21,
          children: sharedValue.map((item, index) => {
                  const obj = { item, index };
                  return callback2(str, { forScreenReader: true })(obj);
                })
        };
        obj21 = { gap: v16, paddingHorizontal: v16 };
        tmp63Result4 = tmp63(tmp66, obj19);
      } else {
        size = {
          style: animatedStyle,
          data: sharedValue,
          renderItem: memo,
          width,
          windowSize: sharedValue.length,
          height: num + 2 * tmp4(tmp2[9]).space.PX_8,
          onConfigurePanGesture(activeOffsetX) {
                  activeOffsetX.activeOffsetX([-10, 10]);
                },
          loop: false,
          scrollAnimationDuration: 200,
          customAnimation: callback3,
          onSnapToItem: tmp14[1]
        };
        const tmp4Result5 = tmp4(tmp2[34]);
        if (num == null) {
          num = 1;
        }
        tmp63Result4 = tmp63(tmp4Result5, size);
      }
      tmp69 = tmp63Result4;
    } else {
      tmp69 = null;
    }
    items12[1] = c12(c7, obj18);
    let tmp63Result5 = null != recipientUser;
    if (tmp63Result5) {
      const obj22 = { giftRecipient: recipientUser };
      tmp63Result5 = tmp63(tmp(tmp2[35]).PremiumGiftWishlistBanner, obj22);
    }
    items12[2] = tmp63Result5;
    tmp63Result6 = tmp63(tmp64, obj12);
  } else {
    let tmp57;
    if (tmp18) {
      tmp18 = c12(tmp4(tmp2[36]), { animated: true, barStyle: "light-content" });
    }
    const items13 = [tmp18, , , , , ];
    const obj23 = { style: items14, onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl.string(tmp(tmp2[37]).t.cpT0Cq), children: c12(c7, obj25) };
    items14 = [tmp13.closeButtonContainer, ];
    const obj24 = { paddingTop: top };
    items14[1] = obj24;
    intl = tmp(tmp2[37]).intl;
    obj25 = { style: tmp13.closeButton, children: c12(tmp(tmp2[38]).XSmallIcon, obj26) };
    obj26 = { size: "md", style: tmp13.closeButtonIcon };
    items13[1] = c12(currentIndex, obj23);
    const obj27 = { resizeMode: "cover", style: items15, source: tmp4(tmp2[40]) };
    items15 = [, ];
    ({ headerImageContainer: arr16[0], headerImage: arr16[1] } = tmp13);
    const tmp4Result6 = tmp4(tmp2[39]);
    items13[2] = c12(tmp4Result6, obj27);
    const obj28 = { style: items16 };
    items16 = [, ];
    ({ headerImageContainer: arr17[0], headerOverlay: arr17[1] } = tmp13);
    items13[3] = c12(c7, obj28);
    const obj29 = { style: tmp13.headerBackground, start: null, end: null, colors: memo2 };
    ({ START: obj20.start, END: obj20.end } = callback);
    items13[4] = c12(tmp4(tmp2[41]), obj29);
    const obj30 = { contentContainerStyle: obj31, children: callback2(tmp49, obj32) };
    obj31 = { paddingBottom: bottom };
    obj32 = { style: obj33, children: items17 };
    let tmp47Result = null != recipientUser;
    obj33 = { paddingTop: top + tmp(tmp2[15]).NAV_BAR_HEIGHT };
    const tmp48 = currentIndex;
    tmp49 = c7;
    if (tmp47Result) {
      const obj34 = { style: tmp13.avatar, guildId: "r", size: tmp63Result ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE, user: recipientUser };
      const Avatar = tmp(tmp2[29]).Avatar;
      AvatarSizes = tmp(tmp2[29]).AvatarSizes;
      tmp47Result = tmp47(Avatar, obj34);
    }
    items17 = [tmp47Result, , , , ];
    const obj35 = { style: tmp13.title, variant: str2, color: "text-overlay-light", children: formatToPlainStringResult };
    str2 = "heading-xxl/extrabold";
    const Text = tmp(tmp2[42]).Text;
    if (null != recipientUser) {
      str2 = "heading-xl/extrabold";
    }
    if (null != recipientUser) {
      const intl3 = tmp(tmp2[37]).intl;
      const formatToPlainString = intl3.formatToPlainString;
      let username = recipientUser.globalName;
      const m5ggvH = tmp(tmp2[37]).t.m5ggvH;
      if (username == null) {
        username = recipientUser.username;
      }
      const obj36 = { username };
      formatToPlainStringResult = formatToPlainString(m5ggvH, obj36);
    } else {
      const intl2 = tmp(tmp2[37]).intl;
      formatToPlainStringResult = intl2.string(tmp(tmp2[37]).t.dqQgZv);
    }
    items17[1] = c12(Text, obj35);
    const obj37 = { style: tmp13.description, variant: "heading-sm/medium", color: "text-overlay-light", children: intl4.string(tmp(tmp2[37]).t["30qzrd"]) };
    const Text2 = tmp(tmp2[42]).Text;
    intl4 = tmp(tmp2[37]).intl;
    items17[2] = c12(Text2, obj37);
    let tmp47Result3 = tmp63Result;
    if (tmp47Result3) {
      const obj38 = { style: tmp13.badgeBanner, onPress: callback1, accessibilityRole: "button", children: c12(tmp4Result7, obj39) };
      obj39 = { giftsToNextTier, nextTierName: str3, nextTierIcon: tmpResult8.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: tmp4(tmp2[33]).PREMIUM_GIFT_PLAN_SELECTION };
      str3 = nextTier.name;
      tmp4Result7 = tmp4(tmp2[31]);
      if (str3 == null) {
        str3 = "";
      }
      tmpResult8 = tmp(tmp2[32]);
      tmp47Result3 = tmp47(tmp48, obj38);
    }
    items17[3] = tmp47Result3;
    if (0 === stateFromStoresArray.length) {
      let tmp47Result4;
      if (isScreenReaderEnabled) {
        const obj40 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: tmp13.carousel,
          contentContainerStyle: obj41,
          children: sharedValue.map((item, index) => {
                  const obj = { item, index };
                  return callback2("default", { forScreenReader: true })(obj);
                })
        };
        obj41 = { gap: v16, paddingHorizontal: v16 };
        tmp47Result4 = tmp47(tmp52, obj40);
      } else {
        const size1 = {
          style: items18,
          data: sharedValue,
          renderItem: memo1,
          width,
          height: sum1,
          onConfigurePanGesture(activeOffsetX) {
                  activeOffsetX.activeOffsetX([-10, 10]);
                },
          loop: false,
          scrollAnimationDuration: 200,
          customAnimation: tmp60,
          mode: "parallax",
          modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 },
          onSnapToItem: tmp14[1]
        };
        items18 = [tmp13.carousel, animatedStyle];
        const tmp4Result8 = tmp4(tmp2[34]);
        if (tmp63Result) {
          memo1 = memo;
        }
        sum1 = undefined;
        if (null != num) {
          sum1 = num + 2 * tmp4(tmp2[9]).space.PX_8;
        }
        tmp60 = undefined;
        if (tmp63Result) {
          tmp60 = callback3;
        }
        const obj42 = { children: items19 };
        items19 = [c12(tmp4Result8, size1), ];
        const obj43 = { numberOfItems: sharedValue.length, currentIndex };
        items19[1] = c12(tmp(tmp2[29]).CarouselPagination, obj43);
        tmp47Result4 = tmp44(tmp45, obj42);
      }
      tmp57 = tmp47Result4;
    } else {
      tmp57 = null;
    }
    const obj44 = { children: items13 };
    items17[4] = tmp57;
    items13[5] = c12(num, obj30);
    tmp63Result6 = tmp44(tmp45, obj44);
  }
  return tmp63Result6;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default tmp4;

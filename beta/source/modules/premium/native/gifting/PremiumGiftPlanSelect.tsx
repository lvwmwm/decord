// Module ID: 10680
// Function ID: 10681
// Name: PremiumGiftPlanSelect
// Dependencies: [32, 19, 17, 8834, 9714, 1387, 1072, 21, 5140, 575, 671, 1499, 1627, 1493, 10681, 5390, 7070, 504, 10733, 10731, 8826, 10678, 10734, 10739, 9964, 1652, 1187, 5370, 10747, 10736, 7412, 10748, 10782, 11352, 1113, 7120, 5842, 14694, 5715, 5714, 5751, 2]
// Exports: default

// Module 10680 (PremiumGiftPlanSelect)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftFeaturesCardDefault from "PremiumGiftFeaturesCard" /* 10739 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8834 */;
import PromotionsStore from "PromotionsStore" /* 9714 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let navigation, state;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const PremiumTypes = PremiumConstants.PremiumTypes;
const VerticalGradient = Constants.VerticalGradient;
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
  const obj6 = _modDef671("#000000");
  alphaResult = obj6.alpha(0.8);
  space = nativeDefault.space;
  ({ textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: nativeDefault.space.PX_24 });
  space2 = tmp(575).space;
  ({ textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: nativeDefault.space.PX_24 });
  space3 = tmp(575).space;
  ({ paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 });
  ({ padding: nativeDefault.space.PX_16 });
  ({ marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 });
  return obj;
});
let closure_18 = { code: "(function PremiumGiftPlanSelectTsx1(){let[STANDARD_EASING,withTiming,carouselVisibility]=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};})" };
let closure_19 = { code: "(function PremiumGiftPlanSelectTsx2(value,index){let[lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep]=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  let AvatarSizes;
  let bottom;
  let c7;
  let claimableRewards;
  let formatToPlainStringResult;
  let giftsToNextTier;
  let height;
  let intl;
  let intl4;
  let items15;
  let items16;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let nextTier;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj20;
  let obj24;
  let obj25;
  let obj30;
  let obj31;
  let obj32;
  let obj38;
  let obj40;
  let recipientUser;
  let str2;
  let str3;
  let str4;
  let sum1;
  let tmp18;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp48;
  let tmp49;
  let tmp4Result;
  let tmp4Result7;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp60;
  let tmp71;
  let tmp74Result6;
  let tmp76;
  let tmp78;
  let tmp80;
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
  const tmp = navigation;
  let tmp2 = onClose;
  const isLoadingWishlist = shouldUseDMWishlistGiftingDesign.isLoadingWishlist;
  let obj = navigation(onClose[11]);
  navigation = obj.useNavigation();
  const tmp4 = claimableRewards;
  let tmp5 = claimableRewards(onClose[12])();
  ({ top, bottom } = tmp5);
  let tmp6 = claimableRewards(onClose[13])();
  ({ width, height } = tmp6);
  let obj2 = navigation(onClose[14]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  let obj3 = navigation(onClose[15]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  const obj4 = navigation(onClose[16]);
  obj4.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  items = [ref];
  const obj5 = navigation(onClose[17]);
  const stateFromStoresArray = obj5.useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  const obj6 = navigation(onClose[18]);
  const selectPremiumGift = obj6.useSelectPremiumGift("PremiumGiftPlanSelect");
  const obj7 = claimableRewards(onClose[19]);
  let enabled = obj7.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  const items1 = [closure_9];
  const obj8 = navigation(onClose[17]);
  const stateFromStoresObject = obj8.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: closure_9.getNextTier(navigation(onClose[20]).BadgeId.GIFTING), giftsToNextTier: closure_9.getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING) };
    return obj;
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp13 = closure_17(width, height, enabled);
  closure_5 = tmp13;
  const tmp14 = selectPremiumGift(enabled.useState(0), 2);
  currentIndex = tmp14[0];
  [tmp18, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  selectPremiumGift(enabled.useState(false), 2);
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      state = state.getState();
      closure_1_7(state.routes[state.index].name === navigation(onClose[21]).PremiumGiftScreens.PLAN_SELECT);
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
  let tmp74Result = enabled;
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
    claimableRewards(onClose[22])();
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
  let tmp31 = null != claimableRewards;
  const tmpResult = tmp(tmp2[24]);
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
  const tmpResult5 = tmp(tmp2[25]);
  sharedValue = tmpResult5.useSharedValue(false);
  const items8 = [sharedValue, num];
  const effect2 = obj9.useEffect(() => {
    const result = sharedValue.set(null != num);
  }, items8);
  const items9 = [closure_18, , , ];
  const useAnimatedStyle = tmp(tmp2[25]).useAnimatedStyle;
  tmp(tmp2[25]);
  items9[1] = tmp(tmp2[26]).STANDARD_EASING;
  items9[2] = tmp(tmp2[27]).withTiming;
  items9[3] = sharedValue;
  let c0;
  let c1;
  let c2;
  [tmp37, tmp38, tmp39, tmp40] = items9;
  class PremiumGiftPlanSelectTsx1 {
    constructor() {
      const obj = { easing, duration: 500 };
      num = 0;
      const obj2 = _undefined;
      if (_undefined.get()) {
        num = 1;
      }
      let num2 = 100;
      const obj3 = { opacity: _undefined(num, obj), transform: items };
      if (obj2.get()) {
        num2 = 0;
      }
      items = [{ translateY: _undefined(num2, obj) }];
      ({ translateY: _undefined(num2, obj) });
      return obj3;
    }
  }
  const items10 = [tmp38, tmp39, tmp40];
  PremiumGiftPlanSelectTsx1.__closure = items10;
  PremiumGiftPlanSelectTsx1.__workletHash = 4508908176572;
  PremiumGiftPlanSelectTsx1.__initData = tmp37;
  const animatedStyle = useAnimatedStyle(PremiumGiftPlanSelectTsx1);
  const items11 = [tmp13];
  const sum = result + v16;
  let diff = sharedValue.length - 1;
  const result1 = (width - result) / 2;
  const diff1 = width - result - v16;
  const items12 = [closure_19, diff, 16, result1, diff1, sum];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53] = items12;
  class PremiumGiftPlanSelectTsx2 {
    constructor(arg0, arg1) {
      const diff = arg1 - arg0;
      const bound = Math.max(0, Math.min(1, diff));
      const obj = { transform: items };
      items = [{ translateX: arg0 * c4 + (c1 + bound * (c2 - c1) + Math.max(0, Math.min(1, diff - (c0 - 1))) * (c3 - c2)) }];
      ({ translateX: arg0 * c4 + (c1 + bound * (c2 - c1) + Math.max(0, Math.min(1, diff - (c0 - 1))) * (c3 - c2)) });
      return obj;
    }
  }
  const items13 = [tmp49, tmp50, tmp51, tmp52, tmp53];
  PremiumGiftPlanSelectTsx2.__closure = items13;
  PremiumGiftPlanSelectTsx2.__workletHash = 287869632170;
  PremiumGiftPlanSelectTsx2.__initData = tmp48;
  const items14 = [sum, diff, 16, result1, diff1];
  const memo2 = obj9.useMemo(() => {
    items = [, ];
    const obj = _modDef671(closure_5.headerBackgroundColor.color);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    const obj3 = _modDef671(closure_5.headerBackgroundColor.color);
    const alphaResult1 = obj3.alpha(1);
    items[1] = alphaResult1.hex();
    return items;
  }, items11);
  const callback3 = obj9.useCallback(PremiumGiftPlanSelectTsx2, items14);
  if (isLoadingWishlist) {
    const obj10 = { style: items15, children: c12(closure_5, { size: "large" }) };
    items15 = [, ];
    ({ container: arr26[0], loadingContainer: arr26[1] } = tmp13);
    tmp74Result6 = c12(c7, obj10);
  } else if (shouldUseDMWishlistGiftingDesign) {
    const obj11 = { style: tmp13.container, children: tmp76(num, obj12) };
    obj12 = { contentContainerStyle: obj13, children: items16 };
    obj13 = { paddingBottom: bottom };
    tmp76 = callback2;
    if (tmp74Result) {
      const obj14 = { style: tmp13.badgeBanner, children: c12(tmp78, obj15) };
      obj15 = { onPress: callback1, accessibilityRole: "button", children: c12(tmp4Result, obj16) };
      obj16 = { giftsToNextTier, nextTierName: str4, nextTierIcon: tmpResult7.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: tmp4(tmp2[30]).PREMIUM_GIFT_PLAN_SELECTION };
      str4 = nextTier.name;
      tmp4Result = tmp4(tmp2[28]);
      tmp78 = currentIndex;
      if (str4 == null) {
        str4 = "";
      }
      tmpResult7 = tmp(tmp2[29]);
      tmp74Result = tmp74(tmp75, obj14);
    }
    items16 = [tmp74Result, , ];
    const obj17 = { style: tmp13.dmGiftingContent, children: tmp80 };
    if (0 === stateFromStoresArray.length) {
      let tmp74Result4;
      if (isScreenReaderEnabled) {
        const obj19 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          contentContainerStyle: obj20,
          children: sharedValue.map((item, index) => {
                  const obj = { item, index };
                  return callback2(str, { forScreenReader: true })(obj);
                })
        };
        obj20 = { gap: v16, paddingHorizontal: v16 };
        tmp74Result4 = tmp74(tmp77, obj19);
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
        const tmp4Result5 = tmp4(tmp2[31]);
        if (num == null) {
          num = 1;
        }
        tmp74Result4 = tmp74(tmp4Result5, size);
      }
      tmp80 = tmp74Result4;
    } else {
      tmp80 = null;
    }
    items16[1] = c12(c7, obj17);
    let tmp74Result5 = null != recipientUser;
    if (tmp74Result5) {
      const obj21 = { giftRecipient: recipientUser };
      tmp74Result5 = tmp74(tmp(tmp2[32]).PremiumGiftWishlistBanner, obj21);
    }
    items16[2] = tmp74Result5;
    tmp74Result6 = tmp74(tmp75, obj11);
  } else {
    let tmp68;
    if (tmp18) {
      tmp18 = c12(tmp4(tmp2[33]), { animated: true, barStyle: "light-content" });
    }
    const items17 = [tmp18, , , , , ];
    const obj22 = { style: items18, onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl.string(tmp(tmp2[34]).t.cpT0Cq), children: c12(c7, obj24) };
    items18 = [tmp13.closeButtonContainer, ];
    const obj23 = { paddingTop: top };
    items18[1] = obj23;
    intl = tmp(tmp2[34]).intl;
    obj24 = { style: tmp13.closeButton, children: c12(tmp(tmp2[35]).XSmallIcon, obj25) };
    obj25 = { size: "md", style: tmp13.closeButtonIcon };
    items17[1] = c12(currentIndex, obj22);
    const obj26 = { resizeMode: "cover", style: items19, source: tmp4(tmp2[37]) };
    items19 = [, ];
    ({ headerImageContainer: arr20[0], headerImage: arr20[1] } = tmp13);
    const tmp4Result6 = tmp4(tmp2[36]);
    items17[2] = c12(tmp4Result6, obj26);
    const obj27 = { style: items20 };
    items20 = [, ];
    ({ headerImageContainer: arr21[0], headerOverlay: arr21[1] } = tmp13);
    items17[3] = c12(c7, obj27);
    const obj28 = { style: tmp13.headerBackground, start: null, end: null, colors: memo2 };
    ({ START: obj18.start, END: obj18.end } = callback);
    items17[4] = c12(tmp4(tmp2[38]), obj28);
    const obj29 = { contentContainerStyle: obj30, children: callback2(tmp60, obj31) };
    obj30 = { paddingBottom: bottom };
    obj31 = { style: obj32, children: items21 };
    let tmp58Result = null != recipientUser;
    obj32 = { paddingTop: top + tmp(tmp2[39]).NAV_BAR_HEIGHT };
    const tmp59 = currentIndex;
    tmp60 = c7;
    if (tmp58Result) {
      const obj33 = { style: tmp13.avatar, guildId: "r", size: tmp74Result ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE, user: recipientUser };
      const Avatar = tmp(tmp2[26]).Avatar;
      AvatarSizes = tmp(tmp2[26]).AvatarSizes;
      tmp58Result = tmp58(Avatar, obj33);
    }
    items21 = [tmp58Result, , , , ];
    const obj34 = { style: tmp13.title, variant: str2, color: "text-overlay-light", children: formatToPlainStringResult };
    str2 = "heading-xxl/semibold";
    const Text = tmp(tmp2[40]).Text;
    if (null != recipientUser) {
      str2 = "heading-xl/semibold";
    }
    if (null != recipientUser) {
      const intl3 = tmp(tmp2[34]).intl;
      const formatToPlainString = intl3.formatToPlainString;
      let username = recipientUser.globalName;
      const m5ggvH = tmp(tmp2[34]).t.m5ggvH;
      if (username == null) {
        username = recipientUser.username;
      }
      const obj35 = { username };
      formatToPlainStringResult = formatToPlainString(m5ggvH, obj35);
    } else {
      const intl2 = tmp(tmp2[34]).intl;
      formatToPlainStringResult = intl2.string(tmp(tmp2[34]).t.dqQgZv);
    }
    items21[1] = c12(Text, obj34);
    const obj36 = { style: tmp13.description, variant: "heading-xs/medium", color: "text-overlay-light", children: intl4.string(tmp(tmp2[34]).t["30qzrd"]) };
    const Text2 = tmp(tmp2[40]).Text;
    intl4 = tmp(tmp2[34]).intl;
    items21[2] = c12(Text2, obj36);
    let tmp58Result3 = tmp74Result;
    if (tmp58Result3) {
      const obj37 = { style: tmp13.badgeBanner, onPress: callback1, accessibilityRole: "button", children: c12(tmp4Result7, obj38) };
      obj38 = { giftsToNextTier, nextTierName: str3, nextTierIcon: tmpResult8.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: tmp4(tmp2[30]).PREMIUM_GIFT_PLAN_SELECTION };
      str3 = nextTier.name;
      tmp4Result7 = tmp4(tmp2[28]);
      if (str3 == null) {
        str3 = "";
      }
      tmpResult8 = tmp(tmp2[29]);
      tmp58Result3 = tmp58(tmp59, obj37);
    }
    items21[3] = tmp58Result3;
    if (0 === stateFromStoresArray.length) {
      let tmp58Result4;
      if (isScreenReaderEnabled) {
        const obj39 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: tmp13.carousel,
          contentContainerStyle: obj40,
          children: sharedValue.map((item, index) => {
                  const obj = { item, index };
                  return callback2("default", { forScreenReader: true })(obj);
                })
        };
        obj40 = { gap: v16, paddingHorizontal: v16 };
        tmp58Result4 = tmp58(tmp63, obj39);
      } else {
        const size1 = {
          style: items22,
          data: sharedValue,
          renderItem: memo1,
          width,
          height: sum1,
          onConfigurePanGesture(activeOffsetX) {
                  activeOffsetX.activeOffsetX([-10, 10]);
                },
          loop: false,
          scrollAnimationDuration: 200,
          customAnimation: tmp71,
          mode: "parallax",
          modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 },
          onSnapToItem: tmp14[1]
        };
        items22 = [tmp13.carousel, animatedStyle];
        const tmp4Result8 = tmp4(tmp2[31]);
        if (tmp74Result) {
          memo1 = memo;
        }
        sum1 = undefined;
        if (null != num) {
          sum1 = num + 2 * tmp4(tmp2[9]).space.PX_8;
        }
        tmp71 = undefined;
        if (tmp74Result) {
          tmp71 = callback3;
        }
        const obj41 = { children: items23 };
        items23 = [c12(tmp4Result8, size1), ];
        const obj42 = { numberOfItems: sharedValue.length, currentIndex };
        items23[1] = c12(tmp(tmp2[26]).CarouselPagination, obj42);
        tmp58Result4 = tmp55(tmp56, obj41);
      }
      tmp68 = tmp58Result4;
    } else {
      tmp68 = null;
    }
    const obj43 = { children: items17 };
    items21[4] = tmp68;
    items17[5] = c12(num, obj29);
    tmp74Result6 = tmp55(tmp56, obj43);
  }
  return tmp74Result6;
};

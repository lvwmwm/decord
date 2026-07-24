// Module ID: 9715
// Function ID: 75564
// Name: items
// Dependencies: [57, 31, 27, 8312, 7129, 1851, 653, 33, 4130, 689, 666, 1456, 1557, 1450, 8848, 4528, 5093, 566, 9716, 8815, 8309, 9714, 9718, 9721, 9179, 3991, 1273, 4131, 9727, 5482, 9728, 9762, 7530, 1212, 5119, 5085, 9791, 4554, 5084, 4126, 2]
// Exports: default

// Module 9715 (items)
import _slicedToArray from "_slicedToArray";
import PremiumGiftWishlistBanner from "PremiumGiftWishlistBanner";
import get_ActivityIndicator from "withTiming";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { VerticalGradient } from "ME";
import jsxProd from "getSystemLocale";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ ActivityIndicator: closure_5, Pressable: closure_6, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = require("GuildFeatures").PremiumTypes);
let closure_16 = _createForOfIteratorHelperLoose.createStyles((width) => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.container = obj;
  obj = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj.headerBackground = obj;
  obj.headerBackgroundColor = { color: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.headerImageContainer = { position: "absolute", width, height: arg1 / 1.75 };
  obj.headerImage = { width };
  const obj2 = { width };
  let obj5 = importDefault(666)("#000000");
  const obj1 = { color: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj2.backgroundColor = obj5.alpha(0.8).hex();
  obj.headerOverlay = obj2;
  obj.avatar = { alignSelf: "center" };
  const obj3 = { textAlign: "center" };
  const space = importDefault(689).space;
  obj3.marginTop = arg2 ? space.PX_16 : space.PX_12;
  obj3.marginHorizontal = importDefault(689).space.PX_24;
  obj.title = obj3;
  const obj4 = { textAlign: "center" };
  const space2 = importDefault(689).space;
  obj4.marginTop = arg2 ? space2.PX_16 : space2.PX_12;
  obj4.marginHorizontal = importDefault(689).space.PX_24;
  obj.description = obj4;
  obj5 = {};
  const space3 = importDefault(689).space;
  obj5.marginTop = arg2 ? space3.PX_16 : space3.PX_32;
  obj.carousel = obj5;
  const alphaResult = obj5.alpha(0.8);
  obj.dmGiftingContent = { paddingTop: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_48 };
  obj.loadingContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj.closeButtonContainer = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  const obj6 = { paddingTop: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_48 };
  obj.closeButton = { padding: importDefault(689).space.PX_16 };
  obj.closeButtonIcon = { width: 24, height: 24, tintColor: "white" };
  const obj7 = { padding: importDefault(689).space.PX_16 };
  obj.badgeBanner = { marginTop: importDefault(689).space.PX_16, marginHorizontal: importDefault(689).space.PX_16 };
  return obj;
});
let closure_17 = { code: "function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}" };
let closure_18 = { code: "function PremiumGiftPlanSelectTsx2(value,index){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  let bottom;
  let c7;
  let claimableRewards;
  let giftsToNextTier;
  let nextTier;
  let recipientUser;
  let tmp14;
  let top;
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  let enabled;
  let c5;
  let first;
  c7 = undefined;
  let first1;
  let c9;
  let ref;
  let callback;
  callback = undefined;
  let callback2;
  let str;
  let sharedValue;
  callback2 = undefined;
  let c17;
  let result1;
  let diff1;
  let obj = navigation(onClose[11]);
  navigation = obj.useNavigation();
  ({ top, bottom } = claimableRewards(onClose[12])());
  const size = claimableRewards(onClose[13])();
  const width = size.width;
  let obj1 = navigation(onClose[14]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  let obj2 = navigation(onClose[15]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = navigation(onClose[16]);
  obj3.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  let obj4 = navigation(onClose[17]);
  let items = [ref];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  let obj5 = navigation(onClose[18]);
  const selectPremiumGift = obj5.useSelectPremiumGift("PremiumGiftPlanSelect");
  let obj6 = claimableRewards(onClose[19]);
  enabled = obj6.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  let obj7 = navigation(onClose[17]);
  const items1 = [c9];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => {
    let getNextTier;
    let getRemainingToNextTier;
    ({ getNextTier, getRemainingToNextTier } = c9);
    return { nextTier: getNextTier(navigation(onClose[20]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING) };
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp9 = callback2(width, size.height, enabled);
  c5 = tmp9;
  const tmp10 = selectPremiumGift(enabled.useState(0), 2);
  first = tmp10[0];
  let num = 1;
  let tmp2 = claimableRewards(onClose[12])();
  [tmp14, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      const state = closure_0.getState();
      outer1_7(state.routes[state.index].name === navigation(onClose[21]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      closure_0.removeListener("state", closure_0);
    };
  }, items2);
  const tmp16 = selectPremiumGift(enabled.useState(null), 2);
  first1 = tmp16[0];
  c9 = tmp18;
  ref = enabled.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign];
  const effect1 = enabled.useEffect(() => {
    ref.current = [];
    _undefined2(null);
  }, items3);
  const items4 = [tmp16[1]];
  callback = enabled.useCallback(() => {
    if (ref.current.length >= sharedValue.length) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(ref.current, 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
      const _Number = Number;
      if (!Number.isNaN(applyResult)) {
        _undefined2(applyResult);
      }
    }
  }, items4);
  const callback1 = enabled.useCallback(() => {
    claimableRewards(onClose[22])();
  }, []);
  let result = 0.86 * width;
  callback = result;
  const items5 = [selectPremiumGift, result, ref, callback, first1, first, claimableRewards];
  callback2 = enabled.useCallback((arg0) => {
    let tmp = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      let obj = { forScreenReader: false };
      tmp = obj;
    }
    const forScreenReader = tmp.forScreenReader;
    return (item) => {
      item = item.item;
      const index = item.index;
      let obj = { accessible: index };
      let str;
      if (index) {
        str = "button";
      }
      obj.accessibilityRole = str;
      let fn;
      if (index) {
        fn = () => outer2_3(item);
      }
      obj.onPress = fn;
      obj = { paddingVertical: claimableRewards(onClose[9]).space.PX_8 };
      obj.style = obj;
      obj = {
        premiumType: item,
        variant: item,
        onPress() {
          return outer2_3(item);
        }
      };
      const obj1 = {};
      let tmp6;
      if (null != outer1_8) {
        tmp6 = outer1_8;
      }
      obj1.height = tmp6;
      obj1.width = outer1_12;
      let str2;
      if ("default" === item) {
        str2 = "center";
      }
      obj1.alignSelf = str2;
      obj.style = obj1;
      obj.onLayout = function onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        if (height > 0) {
          let num = 0;
          if (null != outer2_10.current[index]) {
            num = tmp5;
          }
          outer2_10.current[index] = Math.max(height, num);
          outer2_11();
          const tmp2 = index;
        }
      };
      obj.claimableRewards = forScreenReader;
      obj.isSelected = outer1_6 === index;
      obj.children = c12(claimableRewards(onClose[23]), obj, index);
      return c12(index ? first : c7, obj);
    };
  }, items5);
  let obj8 = navigation(onClose[24]);
  let tmp26 = null != claimableRewards;
  let navigationResult = enabled;
  const isWindowSmall = obj8.useIsWindowSmall();
  if (tmp26) {
    tmp26 = claimableRewards.length > 0;
  }
  if (isWindowSmall) {
    str = "smallCompact";
  } else {
    str = "compact";
  }
  const items6 = [callback2, str];
  const memo = enabled.useMemo(() => callback2(str), items6);
  const items7 = [callback2];
  let memo1 = enabled.useMemo(() => callback2("default"), items7);
  let obj9 = navigation(onClose[25]);
  sharedValue = obj9.useSharedValue(false);
  const items8 = [sharedValue, first1];
  const effect2 = enabled.useEffect(() => {
    const result = sharedValue.set(null != first1);
  }, items8);
  let obj10 = navigation(onClose[25]);
  function pe() {
    let obj = { easing: navigation(onClose[26]).STANDARD_EASING, duration: 500 };
    obj = {};
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    obj.opacity = navigation(onClose[27]).withTiming(num, obj);
    obj = {};
    const obj3 = navigation(onClose[27]);
    let num2 = 100;
    if (sharedValue.get()) {
      num2 = 0;
    }
    obj.translateY = navigation(onClose[27]).withTiming(num2, obj);
    const items = [obj];
    obj.transform = items;
    return obj;
  }
  obj = { STANDARD_EASING: navigation(onClose[26]).STANDARD_EASING, withTiming: navigation(onClose[27]).withTiming, carouselVisibility: sharedValue };
  pe.__closure = obj;
  pe.__workletHash = 2946262965957;
  pe.__initData = c17;
  const animatedStyle = obj10.useAnimatedStyle(pe);
  const items9 = [tmp9];
  const sum = result + 16;
  callback2 = sum;
  let diff = sharedValue.length - num;
  c17 = diff;
  result1 = (width - result) / 2;
  diff1 = width - result - 16;
  class Se {
    constructor(arg0, arg1) {
      diff = arg1 - shouldUseDMWishlistGiftingDesign;
      bound = Math.max(0, Math.min(1, diff));
      obj = {};
      obj = { translateX: shouldUseDMWishlistGiftingDesign * c16 + (16 + bound * (withTiming - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (c19 - withTiming)) };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Se.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  Se.__workletHash = 8954351954675;
  Se.__initData = result1;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = enabled.useMemo(() => {
    const obj = claimableRewards(onClose[10])(_undefined.headerBackgroundColor.color);
    const items = [claimableRewards(onClose[10])(_undefined.headerBackgroundColor.color).alpha(0).hex(), ];
    const alphaResult = claimableRewards(onClose[10])(_undefined.headerBackgroundColor.color).alpha(0);
    const obj3 = claimableRewards(onClose[10])(_undefined.headerBackgroundColor.color);
    items[1] = claimableRewards(onClose[10])(_undefined.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items9);
  const callback3 = enabled.useCallback(Se, items10);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    navigation = callback;
    navigation = c7;
    obj = {};
    const items11 = [, ];
    ({ container: arr22[0], loadingContainer: arr22[1] } = tmp9);
    obj.style = items11;
    navigation = c5;
    obj1 = { size: "large" };
    obj.children = callback(c5, obj1);
    navigation = callback(c7, obj);
  } else if (shouldUseDMWishlistGiftingDesign) {
    obj2 = { style: tmp9.container };
    obj3 = {};
    obj4 = { paddingBottom: bottom };
    obj3.contentContainerStyle = obj4;
    navigation = callback;
    navigation = c7;
    navigation = callback2;
    navigation = first1;
    if (navigationResult) {
      navigation = callback;
      obj5 = { style: tmp9.badgeBanner };
      obj6 = { onPress: callback1, accessibilityRole: "button" };
      navigation = claimableRewards;
      navigation = onClose;
      navigation = c7;
      navigation = first;
      obj7 = { giftsToNextTier };
      const name2 = nextTier.name;
      let str10 = "";
      navigation = claimableRewards(onClose[28]);
      if (null != name2) {
        str10 = name2;
      }
      obj7.nextTierName = str10;
      obj7.nextTierIcon = nextTier.simple_icon_url;
      navigation = claimableRewards;
      navigation = onClose;
      obj7.analyticsLocation = claimableRewards(onClose[29]).PREMIUM_GIFT_PLAN_SELECTION;
      obj6.children = navigation(navigation, obj7);
      obj5.children = navigation(navigation, obj6);
      navigationResult = navigation(navigation, obj5);
    }
    const items12 = [navigationResult, , ];
    obj8 = { style: tmp9.dmGiftingContent };
    if (0 !== stateFromStoresArray.length) {
      navigation = null;
      if (undefined === claimableRewards) {
        obj8.children = null;
        items12[1] = navigation(navigation, obj8);
        navigation = null != recipientUser;
        if (navigation) {
          navigation = callback;
          navigation = onClose;
          obj9 = { giftRecipient: recipientUser };
          navigation = callback(navigation(onClose[31]).PremiumGiftWishlistBanner, obj9);
        }
        items12[2] = navigation;
        obj3.children = items12;
        obj2.children = navigation(navigation, obj3);
        navigation = navigation(navigation, obj2);
      }
    }
    navigation = callback;
    if (isScreenReaderEnabled) {
      navigation = first1;
      obj10 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: { gap: 16, paddingHorizontal: 16 } };
      navigation = sharedValue;
      obj10.children = sharedValue.map((item, index) => callback2(str, { forScreenReader: true })({ item, index }));
      navigation = navigation(first1, obj10);
    } else {
      navigation = claimableRewards;
      navigation = onClose;
      const obj11 = { style: animatedStyle };
      navigation = sharedValue;
      obj11.data = sharedValue;
      obj11.renderItem = memo;
      obj11.width = width;
      obj11.windowSize = sharedValue.length;
      navigation = claimableRewards(onClose[30]);
      if (null != first1) {
        num = first1;
      }
      navigation = claimableRewards;
      navigation = onClose;
      obj11.height = num + 2 * claimableRewards(onClose[9]).space.PX_8;
      obj11.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
        const items = [-10, 10];
        activeOffsetX.activeOffsetX(items);
      };
      obj11.loop = false;
      obj11.scrollAnimationDuration = 200;
      obj11.customAnimation = callback3;
      obj11.onSnapToItem = tmp12;
      navigation = navigation(navigation, obj11);
    }
  } else {
    const obj12 = {};
    if (tmp14) {
      tmp14 = callback(claimableRewards(onClose[32]), { animated: true, barStyle: "light-content" });
    }
    const items13 = [tmp14, , , , , ];
    const obj13 = {};
    const items14 = [tmp9.closeButtonContainer, ];
    const obj14 = { paddingTop: top };
    items14[1] = obj14;
    obj13.style = items14;
    obj13.onPress = onClose;
    obj13.accessibilityRole = "button";
    const intl = navigation(onClose[33]).intl;
    obj13.accessibilityLabel = intl.string(navigation(onClose[33]).t.cpT0Cq);
    const obj15 = { style: tmp9.closeButton };
    const obj16 = { size: "md", style: tmp9.closeButtonIcon };
    obj15.children = callback(navigation(onClose[34]).XSmallIcon, obj16);
    obj13.children = callback(c7, obj15);
    items13[1] = callback(first, obj13);
    const obj17 = { resizeMode: "cover" };
    const items15 = [, ];
    ({ headerImageContainer: arr15[0], headerImage: arr15[1] } = tmp9);
    obj17.style = items15;
    obj17.source = claimableRewards(onClose[36]);
    items13[2] = callback(claimableRewards(onClose[35]), obj17);
    const obj18 = {};
    const items16 = [, ];
    ({ headerImageContainer: arr16[0], headerOverlay: arr16[1] } = tmp9);
    obj18.style = items16;
    items13[3] = callback(c7, obj18);
    const obj19 = { style: tmp9.headerBackground };
    ({ START: obj20.start, END: obj20.end } = callback);
    obj19.colors = memo2;
    items13[4] = callback(claimableRewards(onClose[37]), obj19);
    const obj20 = {};
    const obj21 = { paddingBottom: bottom };
    obj20.contentContainerStyle = obj21;
    const obj22 = {};
    const obj23 = { paddingTop: top + navigation(onClose[38]).NAV_BAR_HEIGHT };
    const items17 = [obj23];
    obj22.style = items17;
    if (null == recipientUser) {
      const items18 = [tmp54, , , , ];
      const obj24 = { style: tmp9.title };
      let str5 = "heading-xxl/extrabold";
      if (null != recipientUser) {
        str5 = "heading-xl/extrabold";
      }
      obj24.variant = str5;
      obj24.color = "text-overlay-light";
      if (null != recipientUser) {
        const intl3 = navigation(onClose[33]).intl;
        const obj25 = {};
        let username = recipientUser.globalName;
        if (null == username) {
          username = recipientUser.username;
        }
        obj25.username = username;
        let formatToPlainStringResult = intl3.formatToPlainString(navigation(onClose[33]).t.m5ggvH, obj25);
      } else {
        const intl2 = navigation(onClose[33]).intl;
        formatToPlainStringResult = intl2.string(navigation(onClose[33]).t.dqQgZv);
      }
      obj24.children = formatToPlainStringResult;
      items18[1] = callback(navigation(onClose[39]).Text, obj24);
      const obj26 = { style: tmp9.description, variant: "heading-sm/medium", color: "text-overlay-light" };
      const intl4 = navigation(onClose[33]).intl;
      obj26.children = intl4.string(navigation(onClose[33]).t["30qzrd"]);
      items18[2] = callback(navigation(onClose[39]).Text, obj26);
      let tmp73Result = navigationResult;
      if (navigationResult) {
        const obj27 = { style: tmp9.badgeBanner, onPress: callback1, accessibilityRole: "button" };
        const obj28 = { giftsToNextTier };
        const name = nextTier.name;
        let str7 = "";
        if (null != name) {
          str7 = name;
        }
        obj28.nextTierName = str7;
        obj28.nextTierIcon = nextTier.simple_icon_url;
        obj28.analyticsLocation = claimableRewards(onClose[29]).PREMIUM_GIFT_PLAN_SELECTION;
        obj27.children = callback(claimableRewards(onClose[28]), obj28);
        tmp73Result = tmp73(first, obj27);
        const tmp74 = first;
        const tmp77 = claimableRewards(onClose[28]);
      }
      items18[3] = tmp73Result;
      if (0 !== stateFromStoresArray.length) {
        if (undefined === claimableRewards) {
          items18[4] = null;
          obj22.children = items18;
          obj20.children = tmp53(tmp48, obj22);
          items13[5] = tmp44(tmp52, obj20);
          obj12.children = items13;
          navigation = tmp39(tmp40, obj12);
        }
      }
      if (isScreenReaderEnabled) {
        const obj29 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: tmp9.carousel,
          contentContainerStyle: { gap: 16, paddingHorizontal: 16 },
          children: sharedValue.map((item, index) => {
                  const str = "default";
                  return callback2(str, { forScreenReader: true })({ item, index });
                })
        };
        let tmp81Result = callback(first1, obj29);
      } else {
        const obj30 = {};
        const obj31 = {};
        const items19 = [tmp9.carousel, animatedStyle];
        obj31.style = items19;
        obj31.data = sharedValue;
        if (navigationResult) {
          memo1 = memo;
        }
        obj31.renderItem = memo1;
        obj31.width = width;
        let sum1;
        if (null != first1) {
          sum1 = first1 + 2 * claimableRewards(onClose[9]).space.PX_8;
        }
        obj31.height = sum1;
        obj31.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
          const items = [-10, 10];
          activeOffsetX.activeOffsetX(items);
        };
        obj31.loop = false;
        obj31.scrollAnimationDuration = 200;
        let tmp91;
        if (navigationResult) {
          tmp91 = callback3;
        }
        obj31.customAnimation = tmp91;
        obj31.mode = "parallax";
        obj31.modeConfig = { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 };
        obj31.onSnapToItem = tmp12;
        const items20 = [callback(claimableRewards(onClose[30]), obj31), ];
        const obj32 = { numberOfItems: sharedValue.length, currentIndex: first };
        items20[1] = callback(navigation(onClose[26]).CarouselPagination, obj32);
        obj30.children = items20;
        tmp81Result = callback2(str, obj30);
        const tmp81 = callback2;
        const tmp82 = str;
        const tmp83 = callback;
        const tmp86 = claimableRewards(onClose[30]);
      }
      navigation = tmp81Result;
      const tmp61 = callback;
    } else {
      const obj33 = { style: tmp9.avatar, guildId: undefined };
      const AvatarSizes = navigation(onClose[26]).AvatarSizes;
      obj33.size = navigationResult ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj33.user = recipientUser;
      callback(navigation(onClose[26]).Avatar, obj33);
      const tmp55 = callback;
    }
    tmp39 = callback2;
    tmp40 = str;
    tmp44 = callback;
    tmp48 = c7;
    const tmp50 = claimableRewards(onClose[35]);
    tmp52 = first1;
    tmp53 = callback2;
  }
  return navigation;
};

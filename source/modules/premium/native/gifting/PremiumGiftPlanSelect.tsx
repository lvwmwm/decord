// Module ID: 9674
// Function ID: 75311
// Name: items
// Dependencies: []
// Exports: default

// Module 9674 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, Pressable: closure_6, View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const VerticalGradient = arg1(dependencyMap[6]).VerticalGradient;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
const items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = arg1(dependencyMap[5]).PremiumTypes);
const tmp3 = arg1(dependencyMap[7]);
let closure_16 = arg1(dependencyMap[8]).createStyles((width) => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  obj.container = obj;
  obj = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj.headerBackground = obj;
  obj.headerBackgroundColor = { color: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  obj.headerImageContainer = { position: "absolute", width, height: arg1 / 1.75 };
  obj.headerImage = { width };
  const obj2 = { width };
  let obj5 = importDefault(dependencyMap[10])("#000000");
  const obj1 = { color: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  obj2.backgroundColor = obj5.alpha(0.8).hex();
  obj.headerOverlay = obj2;
  obj.avatar = { alignSelf: "center" };
  const obj3 = { textAlign: "center" };
  const space = importDefault(dependencyMap[9]).space;
  obj3.marginTop = arg2 ? space.PX_16 : space.PX_12;
  obj3.marginHorizontal = importDefault(dependencyMap[9]).space.PX_24;
  obj.title = obj3;
  const obj4 = { textAlign: "center" };
  const space2 = importDefault(dependencyMap[9]).space;
  obj4.marginTop = arg2 ? space2.PX_16 : space2.PX_12;
  obj4.marginHorizontal = importDefault(dependencyMap[9]).space.PX_24;
  obj.description = obj4;
  obj5 = {};
  const space3 = importDefault(dependencyMap[9]).space;
  obj5.marginTop = arg2 ? space3.PX_16 : space3.PX_32;
  obj.carousel = obj5;
  const alphaResult = obj5.alpha(0.8);
  obj.dmGiftingContent = { paddingTop: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_48 };
  obj.loadingContainer = {};
  obj.closeButtonContainer = {};
  const obj6 = { paddingTop: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_48 };
  obj.closeButton = { padding: importDefault(dependencyMap[9]).space.PX_16 };
  obj.closeButtonIcon = {};
  const obj7 = { padding: importDefault(dependencyMap[9]).space.PX_16 };
  obj.badgeBanner = { marginTop: importDefault(dependencyMap[9]).space.PX_16, marginHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
  return obj;
});
let closure_17 = { code: "function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}" };
let closure_18 = { code: "function PremiumGiftPlanSelectTsx2(value,index){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}" };
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  let bottom;
  let claimableRewards;
  let giftsToNextTier;
  let nextTier;
  let recipientUser;
  let tmp14;
  let top;
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  let React;
  let tmp9;
  let first;
  let closure_7;
  let first1;
  let closure_9;
  let closure_10;
  let VerticalGradient;
  let result;
  let callback2;
  let str;
  let items;
  callback2 = undefined;
  let closure_17;
  let closure_18;
  let diff1;
  let obj = arg1(dependencyMap[11]);
  let navigation = obj.useNavigation();
  const arg1 = navigation;
  ({ top, bottom } = importDefault(dependencyMap[12])());
  const size = importDefault(dependencyMap[13])();
  const width = size.width;
  let obj1 = arg1(dependencyMap[14]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  const importDefault = claimableRewards;
  const onClose = nativeGiftContext.onClose;
  const dependencyMap = onClose;
  let obj2 = arg1(dependencyMap[15]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = arg1(dependencyMap[16]);
  obj3.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  let obj4 = arg1(dependencyMap[17]);
  items = [closure_10];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  let obj5 = arg1(dependencyMap[18]);
  const selectPremiumGift = obj5.useSelectPremiumGift("PremiumGiftPlanSelect");
  let callback = selectPremiumGift;
  let obj6 = importDefault(dependencyMap[19]);
  let enabled = obj6.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  let obj7 = arg1(dependencyMap[17]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => {
    let getNextTier;
    let getRemainingToNextTier;
    ({ getNextTier, getRemainingToNextTier } = tmp18);
    return { nextTier: getNextTier(navigation(onClose[20]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING) };
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  React = enabled;
  tmp9 = callback2(width, size.height, enabled);
  const tmp10 = callback(React.useState(0), 2);
  first = tmp10[0];
  let num = 1;
  const tmp2 = importDefault(dependencyMap[12])();
  [tmp14, closure_7] = callback(React.useState(false), 2);
  const items2 = [navigation];
  const effect = React.useEffect(() => {
    const navigation = navigation.addListener("state", () => {
      const state = lib.getState();
      callback(state.routes[state.index].name === lib(closure_2[21]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      lib.removeListener("state", lib);
    };
  }, items2);
  const tmp16 = callback(React.useState(null), 2);
  first1 = tmp16[0];
  closure_9 = tmp18;
  const ref = React.useRef([]);
  closure_10 = ref;
  const items3 = [shouldUseDMWishlistGiftingDesign];
  const effect1 = React.useEffect(() => {
    ref.current = [];
    tmp18(null);
  }, items3);
  const items4 = [tmp16[1]];
  callback = React.useCallback(() => {
    if (ref.current.length >= sharedValue.length) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(ref.current, 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
      const _Number = Number;
      if (!Number.isNaN(applyResult)) {
        tmp18(applyResult);
      }
    }
  }, items4);
  VerticalGradient = callback;
  const callback1 = React.useCallback(() => {
    claimableRewards(onClose[22])();
  }, []);
  result = 0.86 * width;
  const items5 = [selectPremiumGift, result, ref, callback, first1, first, claimableRewards];
  callback2 = React.useCallback((arg0) => {
    let tmp = arg1;
    const navigation = arg0;
    if (arg1 === undefined) {
      const obj = { forScreenReader: false };
      tmp = obj;
    }
    const claimableRewards = tmp.forScreenReader;
    return (item) => {
      item = item.item;
      const index = item.index;
      const forScreenReader = index;
      let obj = { accessible: forScreenReader };
      let str;
      if (forScreenReader) {
        str = "button";
      }
      obj.accessibilityRole = str;
      let fn;
      if (forScreenReader) {
        fn = () => callback(item);
      }
      obj.onPress = fn;
      obj = { paddingVertical: forScreenReader(closure_2[9]).space.PX_8 };
      obj.style = obj;
      obj = {
        premiumType: item,
        variant: item,
        onPress() {
          return callback(item);
        }
      };
      const obj1 = {};
      let tmp6;
      if (null != closure_8) {
        tmp6 = closure_8;
      }
      obj1.height = tmp6;
      obj1.width = closure_12;
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
          if (null != ref.current[closure_1]) {
            num = tmp5;
          }
          ref.current[index] = Math.max(height, num);
          callback2();
          const tmp2 = index;
        }
      };
      obj.claimableRewards = forScreenReader;
      obj.isSelected = closure_6 === index;
      obj.children = closure_12(forScreenReader(closure_2[23]), obj, index);
      return closure_12(forScreenReader ? closure_6 : closure_7, obj);
    };
  }, items5);
  let obj8 = arg1(dependencyMap[24]);
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
  const memo = React.useMemo(() => callback2(str), items6);
  const items7 = [callback2];
  let memo1 = React.useMemo(() => callback2("default"), items7);
  let obj9 = arg1(dependencyMap[25]);
  const sharedValue = obj9.useSharedValue(false);
  items = sharedValue;
  const items8 = [sharedValue, first1];
  const effect2 = React.useEffect(() => {
    const result = sharedValue.set(null != first1);
  }, items8);
  let obj10 = arg1(dependencyMap[25]);
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
  obj = { STANDARD_EASING: arg1(dependencyMap[26]).STANDARD_EASING, withTiming: arg1(dependencyMap[27]).withTiming, carouselVisibility: sharedValue };
  pe.__closure = obj;
  pe.__workletHash = 2946262965957;
  pe.__initData = closure_17;
  const animatedStyle = obj10.useAnimatedStyle(pe);
  const items9 = [tmp9];
  const sum = result + 16;
  callback2 = sum;
  const diff = items.length - num;
  closure_17 = diff;
  const result1 = (width - result) / 2;
  closure_18 = result1;
  diff1 = width - result - 16;
  class Se {
    constructor(arg0, arg1) {
      diff = arg1 - shouldUseDMWishlistGiftingDesign;
      bound = Math.max(0, Math.min(1, diff));
      obj = {};
      obj = { translateX: shouldUseDMWishlistGiftingDesign * closure_16 + (16 + bound * (withTiming - 16) + Math.max(0, Math.min(1, diff - (closure_17 - 1))) * (closure_19 - withTiming)) };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Se.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  Se.__workletHash = 8954351954675;
  Se.__initData = closure_18;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = React.useMemo(() => {
    const obj = claimableRewards(onClose[10])(tmp9.headerBackgroundColor.color);
    const items = [claimableRewards(onClose[10])(tmp9.headerBackgroundColor.color).alpha(0).hex(), ];
    const alphaResult = claimableRewards(onClose[10])(tmp9.headerBackgroundColor.color).alpha(0);
    const obj3 = claimableRewards(onClose[10])(tmp9.headerBackgroundColor.color);
    items[1] = claimableRewards(onClose[10])(tmp9.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items9);
  const callback3 = React.useCallback(Se, items10);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    navigation = result;
    navigation = closure_7;
    obj = {};
    const items11 = [, ];
    ({ container: arr22[0], loadingContainer: arr22[1] } = tmp9);
    obj.style = items11;
    navigation = tmp9;
    obj1 = { size: "large" };
    obj.children = result(tmp9, obj1);
    navigation = result(closure_7, obj);
  } else if (shouldUseDMWishlistGiftingDesign) {
    obj2 = { style: tmp9.container };
    obj3 = {};
    obj4 = { paddingBottom: bottom };
    obj3.contentContainerStyle = obj4;
    navigation = result;
    navigation = closure_7;
    navigation = callback2;
    navigation = first1;
    if (navigationResult) {
      navigation = result;
      obj5 = { style: tmp9.badgeBanner };
      obj6 = { onPress: callback1, accessibilityRole: "button" };
      navigation = importDefault;
      navigation = dependencyMap;
      navigation = closure_7;
      navigation = first;
      obj7 = { giftsToNextTier };
      const name2 = nextTier.name;
      let str10 = "";
      navigation = importDefault(dependencyMap[28]);
      if (null != name2) {
        str10 = name2;
      }
      obj7.nextTierName = str10;
      obj7.nextTierIcon = nextTier.simple_icon_url;
      navigation = importDefault;
      navigation = dependencyMap;
      obj7.analyticsLocation = importDefault(dependencyMap[29]).PREMIUM_GIFT_PLAN_SELECTION;
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
          navigation = result;
          navigation = arg1;
          navigation = dependencyMap;
          obj9 = { giftRecipient: recipientUser };
          navigation = result(arg1(dependencyMap[31]).PremiumGiftWishlistBanner, obj9);
        }
        items12[2] = navigation;
        obj3.children = items12;
        obj2.children = navigation(navigation, obj3);
        navigation = navigation(navigation, obj2);
      }
    }
    navigation = result;
    if (isScreenReaderEnabled) {
      navigation = first1;
      obj10 = { <string:3654615011>: "<string:1040334421>", <string:2849920773>: "<string:1040334338>", contentContainerStyle: { "Bool(true)": null, "Bool(true)": null } };
      navigation = items;
      obj10.children = items.map((item, index) => callback2(str, { forScreenReader: true })({ item, index }));
      navigation = navigation(first1, obj10);
    } else {
      navigation = importDefault;
      navigation = dependencyMap;
      const obj11 = { style: animatedStyle };
      navigation = items;
      obj11.data = items;
      obj11.renderItem = memo;
      obj11.width = width;
      obj11.windowSize = items.length;
      navigation = importDefault(dependencyMap[30]);
      if (null != first1) {
        num = first1;
      }
      navigation = importDefault;
      navigation = dependencyMap;
      obj11.height = num + 2 * importDefault(dependencyMap[9]).space.PX_8;
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
      tmp14 = result(importDefault(dependencyMap[32]), {});
    }
    const items13 = [tmp14, , , , , ];
    const obj13 = {};
    const items14 = [tmp9.closeButtonContainer, ];
    const obj14 = { paddingTop: top };
    items14[1] = obj14;
    obj13.style = items14;
    obj13.onPress = onClose;
    obj13.accessibilityRole = "button";
    const intl = arg1(dependencyMap[33]).intl;
    obj13.accessibilityLabel = intl.string(arg1(dependencyMap[33]).t.cpT0Cq);
    const obj15 = { style: tmp9.closeButton };
    const obj16 = { size: "md", style: tmp9.closeButtonIcon };
    obj15.children = result(arg1(dependencyMap[34]).XSmallIcon, obj16);
    obj13.children = result(closure_7, obj15);
    items13[1] = result(first, obj13);
    const obj17 = { resizeMode: "cover" };
    const items15 = [, ];
    ({ headerImageContainer: arr15[0], headerImage: arr15[1] } = tmp9);
    obj17.style = items15;
    obj17.source = importDefault(dependencyMap[36]);
    items13[2] = result(importDefault(dependencyMap[35]), obj17);
    const obj18 = {};
    const items16 = [, ];
    ({ headerImageContainer: arr16[0], headerOverlay: arr16[1] } = tmp9);
    obj18.style = items16;
    items13[3] = result(closure_7, obj18);
    const obj19 = { style: tmp9.headerBackground };
    ({ START: obj20.start, END: obj20.end } = VerticalGradient);
    obj19.colors = memo2;
    items13[4] = result(importDefault(dependencyMap[37]), obj19);
    const obj20 = {};
    const obj21 = { paddingBottom: bottom };
    obj20.contentContainerStyle = obj21;
    const obj22 = {};
    const obj23 = { paddingTop: top + arg1(dependencyMap[38]).NAV_BAR_HEIGHT };
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
        const intl3 = arg1(dependencyMap[33]).intl;
        const obj25 = {};
        let username = recipientUser.globalName;
        if (null == username) {
          username = recipientUser.username;
        }
        obj25.username = username;
        let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[33]).t.m5ggvH, obj25);
      } else {
        const intl2 = arg1(dependencyMap[33]).intl;
        formatToPlainStringResult = intl2.string(arg1(dependencyMap[33]).t.dqQgZv);
      }
      obj24.children = formatToPlainStringResult;
      items18[1] = result(arg1(dependencyMap[39]).Text, obj24);
      const obj26 = { style: tmp9.description };
      const intl4 = arg1(dependencyMap[33]).intl;
      obj26.children = intl4.string(arg1(dependencyMap[33]).t.30qzrd);
      items18[2] = result(arg1(dependencyMap[39]).Text, obj26);
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
        obj28.analyticsLocation = importDefault(dependencyMap[29]).PREMIUM_GIFT_PLAN_SELECTION;
        obj27.children = result(importDefault(dependencyMap[28]), obj28);
        tmp73Result = tmp73(first, obj27);
        const tmp74 = first;
        const tmp77 = importDefault(dependencyMap[28]);
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
          <string:3654615011>: "<string:1040334421>",
          <string:2849920773>: "<string:1040334338>",
          style: tmp9.carousel,
          contentContainerStyle: { "Bool(true)": null, "Bool(true)": null },
          children: items.map((item, index) => {
                  const str = "default";
                  return callback2(str, { forScreenReader: true })({ item, index });
                })
        };
        let tmp81Result = result(first1, obj29);
      } else {
        const obj30 = {};
        const obj31 = {};
        const items19 = [tmp9.carousel, animatedStyle];
        obj31.style = items19;
        obj31.data = items;
        if (navigationResult) {
          memo1 = memo;
        }
        obj31.renderItem = memo1;
        obj31.width = width;
        let sum1;
        if (null != first1) {
          sum1 = first1 + 2 * importDefault(dependencyMap[9]).space.PX_8;
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
        obj31.modeConfig = {};
        obj31.onSnapToItem = tmp12;
        const items20 = [result(importDefault(dependencyMap[30]), obj31), ];
        const obj32 = { numberOfItems: items.length, currentIndex: first };
        items20[1] = result(arg1(dependencyMap[26]).CarouselPagination, obj32);
        obj30.children = items20;
        tmp81Result = callback2(str, obj30);
        const tmp81 = callback2;
        const tmp82 = str;
        const tmp83 = result;
        const tmp86 = importDefault(dependencyMap[30]);
      }
      navigation = tmp81Result;
      const tmp61 = result;
    } else {
      const obj33 = { style: tmp9.avatar, guildId: undefined };
      const AvatarSizes = arg1(dependencyMap[26]).AvatarSizes;
      obj33.size = navigationResult ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj33.user = recipientUser;
      result(arg1(dependencyMap[26]).Avatar, obj33);
      const tmp55 = result;
    }
    const tmp39 = callback2;
    const tmp40 = str;
    const tmp44 = result;
    const tmp48 = closure_7;
    const tmp50 = importDefault(dependencyMap[35]);
    const tmp52 = first1;
    const tmp53 = callback2;
  }
  return navigation;
};

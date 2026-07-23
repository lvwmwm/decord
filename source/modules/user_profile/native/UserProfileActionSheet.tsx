// Module ID: 8498
// Function ID: 67833
// Name: UseAnimatedPosition
// Dependencies: [57, 31, 27, 1348, 1917, 1849, 7841, 5512, 653, 5188, 33, 4130, 5189, 3991, 1557, 566, 7887, 5464, 5484, 7186, 3803, 8266, 4663, 8241, 8499, 8256, 8247, 8225, 8236, 8500, 1450, 5084, 8255, 4066, 3834, 689, 8495, 8501, 7889, 1904, 7888, 675, 3982, 4098, 8492, 1456, 5187, 1273, 8502, 1212, 3842, 8506, 477, 5796, 8508, 11892, 11983, 8218, 5446, 12157, 1282, 2]

// Module 8498 (UseAnimatedPosition)
import usePreloadProfileEffect from "usePreloadProfileEffect";
import importAllResult from "NAV_BAR_HEIGHT";
import get_ActivityIndicator from "useProfileEffect";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "useTheme";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
const require = arg1;
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedPosition2 = animatedPosition(5189).useBottomSheet().animatedPosition;
  const obj = animatedPosition(5189);
  const fn = function n() {
    return animatedPosition2.get();
  };
  fn.__closure = { value: animatedPosition2 };
  fn.__workletHash = 5684011437075;
  fn.__initData = closure_19;
  const fn2 = function o(arg0) {
    return animatedPosition.set(arg0);
  };
  fn2.__closure = { animatedPosition };
  fn2.__workletHash = 15360670503044;
  fn2.__initData = closure_20;
  const animatedReaction = animatedPosition(3991).useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(children) {
  const animatedPosition = children.animatedPosition;
  const animatedIndex = children.animatedIndex;
  const safeAreaTop = children.safeAreaTop;
  let obj = animatedPosition(safeAreaTop[13]);
  const fn = function u() {
    let obj = {};
    obj = { translateY: animatedPosition.get() + safeAreaTop };
    const items = [obj];
    obj.transform = items;
    const value = animatedIndex.get();
    const items1 = [-1, 0];
    obj.opacity = animatedPosition(safeAreaTop[13]).interpolate(value, items1, [0, 1], animatedPosition(safeAreaTop[13]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[13]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[13]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 16546700050596;
  fn.__initData = closure_21;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [absoluteFill.absoluteFill, animatedStyle];
  return callback2(animatedIndex(safeAreaTop[13]).View, { style, pointerEvents: "box-none", children: children.children });
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: closure_13, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
let closure_19 = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
let closure_20 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
let closure_21 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_22 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let closure_23 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
const memoResult = importAllResult.memo(function UserProfileActionSheet(userId) {
  let usePreloadProfileEffect;
  let closure_4;
  let closure_6;
  let dependencyMap;
  let isPreviewingChanges;
  let messageId;
  let onClose;
  let openedAt;
  let primaryColor;
  let roleId;
  let secondaryColor;
  let sessionId;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ disableCalls: dependencyMap, disableMessage: usePreloadProfileEffect, isVoiceContext: closure_4, onClose } = userId);
  ({ location: closure_6, openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId } = userId);
  if (isPreviewingChanges === undefined) {
    isPreviewingChanges = false;
  }
  let flag = userId.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let prop = userId.sourceAnalyticsLocations;
  if (prop === undefined) {
    prop = [];
  }
  const initialSection = userId.initialSection;
  let sharedValue;
  let sharedValue1;
  let top;
  let stateFromStores;
  let stateFromStores1;
  let guild_id;
  let stateFromStores2;
  let callback3;
  let analyticsLocations;
  let ref;
  let sharedValue2;
  let first;
  let closure_22;
  let first1;
  let closure_24;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  let c29;
  let width;
  let c31;
  let closure_32;
  let closure_33;
  function showUserProfileActionSheetWithParams() {
    const merged = Object.assign(createUserProfileAnalyticsContext);
    channelId(outer1_2[44])({ sourceAnalyticsLocations: analyticsLocations });
  }
  function handleUserSettingsClose() {
    navigation.goBack();
    showUserProfileActionSheetWithParams();
  }
  let fetchStartedAt = analyticsLocations();
  let obj = userId(3991);
  sharedValue = obj.useSharedValue(0);
  let obj1 = userId(3991);
  sharedValue1 = obj1.useSharedValue(-1);
  top = channelId(1557)().top;
  let obj2 = userId(566);
  let items = [initialSection];
  stateFromStores = obj2.useStateFromStores(items, () => initialSection.getUser(userId));
  let obj3 = userId(566);
  let items1 = [isPreviewingChanges];
  const items2 = [channelId];
  stateFromStores1 = obj3.useStateFromStores(items1, () => isPreviewingChanges.getChannel(channelId), items2);
  guild_id = undefined;
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  let obj4 = userId(566);
  const items3 = [prop];
  stateFromStores2 = obj4.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = prop.getMember(guild_id, userId);
    }
    return member;
  });
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  if (null == id) {
    id = stateFromStores;
  }
  let tmp10;
  if (flag) {
    tmp10 = guild_id;
  }
  const tmp8Result = channelId(7887)(id, tmp10);
  callback3 = tmp8Result;
  const items4 = [];
  const tmp8 = channelId(7887);
  const tmp12 = channelId(5464);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(5484).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp12(items4).analyticsLocations;
  let obj5 = userId(7186);
  const bottomSheetRef = obj5.useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  ref = importAllResult.useRef(null);
  let obj6 = userId(3991);
  sharedValue2 = obj6.useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = importAllResult.useMemo(() => (function buildBottomSheeetScrollEventsHandlers(sharedValue2) {
    let closure_0 = sharedValue2;
    return (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
      let obj = userId(outer3_2[12]);
      const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY);
      const animatedScrollableState = userId(outer3_2[12]).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = userId(outer3_2[12]);
      const fn = function s(contentOffset) {
        if (null != handleOnScroll) {
          handleOnScroll(contentOffset, arg1);
        }
        const value = animatedScrollableState.get();
        let num = 0;
        if (value !== userId(outer4_2[12]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      obj = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: userId(outer3_2[12]).SCROLLABLE_STATE };
      fn.__closure = obj;
      fn.__workletHash = 13254130622789;
      fn.__initData = closure_22;
      const items = [handleOnScroll, animatedScrollableState];
      obj = {};
      const obj3 = userId(outer3_2[13]);
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj["handleOnScroll"] = userId(outer3_2[13]).useWorkletCallback(fn, items);
      return obj;
    };
  })(sharedValue2), items5);
  let obj7 = userId(3991);
  class W {
    constructor() {
      obj = {};
      if (c20.get() <= 0) {
        obj = {};
        tmp = c20;
        obj.translateY = c20.get();
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      obj.transform = items1;
      return obj;
    }
  }
  W.__closure = { scrollPosition: sharedValue2 };
  W.__workletHash = 6237718973214;
  W.__initData = first1;
  const animatedStyle = obj7.useAnimatedStyle(W);
  const tmp19 = callback(importAllResult.useState(false), 2);
  first = tmp19[0];
  closure_22 = tmp19[1];
  const tmp21 = callback(importAllResult.useState(0), 2);
  first1 = tmp21[0];
  closure_24 = tmp21[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback2(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = userId(3803).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let obj8 = userId(566);
  const items6 = [sharedValue];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => sharedValue.getPendingChanges());
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  let obj9 = userId(8266);
  obj = { layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag };
  createUserProfileAnalyticsContext = obj9.useCreateUserProfileAnalyticsContext(obj);
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId;
      if (null != pendingProfileFrame) {
        skuId = pendingProfileFrame.skuId;
      }
    }
    let obj11 = userId(4663);
    const isScreenLandscape = obj11.useIsScreenLandscape();
    let tmp33;
    if (!isScreenLandscape) {
      tmp33 = skuId;
    }
    const tmp32Result = channelId(8241)(tmp33, "UserProfileActionSheet");
    c29 = tmp32Result;
    obj = {};
    let tmp38;
    const tmp32 = channelId(8241);
    if (!isScreenLandscape) {
      tmp38 = skuId;
    }
    obj.skuId = tmp38;
    obj.openedAt = openedAt;
    obj.context = createUserProfileAnalyticsContext;
    obj.analyticsLocations = analyticsLocations;
    channelId(8499)(obj);
    const items7 = [tmp32Result, sharedValue, top, sharedValue1, first1];
    const memo1 = importAllResult.useMemo(() => {
      let tmp = null;
      if (null != c29) {
        let obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1 };
        obj = { frame: c29, frameOrder: userId(outer1_2[26]).ProfileFrameLayerOrder.BACK, profileThemeType: sharedValue1.ACTION_SHEET, containerWidth: first1 };
        obj.children = stateFromStores2(channelId(outer1_2[25]), obj);
        tmp = stateFromStores2(pendingAvatarDecoration, obj);
        const tmp10 = channelId(outer1_2[25]);
      }
      return tmp;
    }, items7);
    if (isPreviewingChanges) {
      if (undefined !== pendingProfileEffect) {
        let skuId1;
        if (null != pendingProfileEffect) {
          skuId1 = pendingProfileEffect.skuId;
        }
        let skuId2 = skuId1;
      }
      const tmp44Result = tmp44(skuId2);
      obj1 = { user: stateFromStores, displayProfile: tmp8Result };
      let pendingThemeColors;
      if (isPreviewingChanges) {
        pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      }
      obj1.pendingThemeColors = pendingThemeColors;
      const tmp49Result = channelId(8236)(obj1);
      const theme = tmp49Result.theme;
      ({ primaryColor, secondaryColor } = tmp49Result);
      const tmp49 = channelId(8236);
      const size = channelId(1450)();
      width = size.width;
      const diff = size.height - userId(5084).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp32Result, width];
      const memo2 = importAllResult.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != c29) {
            const _Math = Math;
            const bound = Math.min(width, guild_id);
            return channelId(outer1_2[32])(c29, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp55 = channelId(8500)(guild_id);
      let obj14 = userId(3834);
      const token = obj14.useToken(channelId(689).colors.INTERACTIVE_TEXT_HOVER, theme);
      obj2 = { userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp8Result, guildMember: stateFromStores2 };
      const tmp62 = channelId(8495)(obj2);
      c31 = tmp62;
      const items9 = [stateFromStores, channelId];
      closure_32 = importAllResult.useMemo(() => {
        let result = null != stateFromStores;
        if (result) {
          result = userId(outer1_2[37]).shouldDisableUserPresenceInChannel(stateFromStores, channelId);
          const obj = userId(outer1_2[37]);
        }
        return result;
      }, items9);
      const items10 = [stateFromStores, userId];
      const effect = importAllResult.useEffect(() => {
        if (null == stateFromStores) {
          const user = userId(outer1_2[38]).getUser(userId);
          const obj = userId(outer1_2[38]);
        }
      }, items10);
      const items11 = [stateFromStores, guild_id, channelId];
      const effect1 = importAllResult.useEffect(() => {
        let tmp = null == stateFromStores;
        if (!tmp) {
          let isNonUserBotResult = stateFromStores.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !channelId(outer1_2[39])(stateFromStores.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          const obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: guild_id };
          let tmp16;
          const avatarURL = stateFromStores.getAvatarURL(guild_id, 80);
          if (null != channelId) {
            tmp16 = channelId;
          }
          obj.channelId = tmp16;
          channelId(outer1_2[40])(stateFromStores.id, avatarURL, obj);
          const tmp9 = channelId(outer1_2[40]);
        }
      }, items11);
      const items12 = [tmp62, tmp8Result, guild_id, first, stateFromStores2];
      const effect2 = importAllResult.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == c17;
        }
        if (!tmp) {
          let tmp6 = null == guild_id;
          if (!tmp6) {
            let prop;
            if (null != stateFromStores2) {
              prop = stateFromStores2.fullProfileLoadedTimestamp;
            }
            tmp6 = null != prop;
          }
          if (tmp6) {
            channelId(outer1_2[41]).track(top.OPEN_POPOUT, c31);
            callback(true);
            const obj = channelId(outer1_2[41]);
          }
        }
      }, items12);
      skuId2 = undefined;
      if (null != pendingAvatarDecoration) {
        skuId2 = pendingAvatarDecoration.skuId;
      }
      const items13 = [skuId2, , , ];
      let skuId3;
      if (null != pendingProfileEffect) {
        skuId3 = pendingProfileEffect.skuId;
      }
      items13[1] = skuId3;
      let skuId4;
      if (null != pendingProfileFrame) {
        skuId4 = pendingProfileFrame.skuId;
      }
      items13[2] = skuId4;
      items13[3] = prop;
      const effect3 = importAllResult.useEffect(() => {
        if (atResult === channelId(outer1_2[18]).COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          let obj = channelId(outer1_2[41]);
          obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop };
          let skuId;
          if (null != pendingAvatarDecoration) {
            skuId = pendingAvatarDecoration.skuId;
          }
          if (null == skuId) {
            let skuId1;
            if (null != pendingProfileEffect) {
              skuId1 = pendingProfileEffect.skuId;
            }
            skuId = skuId1;
          }
          if (null == skuId) {
            let skuId2;
            if (null != pendingProfileFrame) {
              skuId2 = pendingProfileFrame.skuId;
            }
            skuId = skuId2;
          }
          obj.sku_id = skuId;
          obj.track(top.OPEN_MODAL, obj);
        }
      }, items13);
      const items14 = [onClose];
      const effect4 = importAllResult.useEffect(() => () => {
        if (null != outer1_5) {
          outer1_5();
        }
      }, items14);
      const items15 = [userId];
      const effect5 = importAllResult.useEffect(() => {
        function handleNavigationChange() {
          let key;
          if (null != rootNavigationRef) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            if (null != currentRoute) {
              key = currentRoute.key;
            }
          }
          if (key !== key) {
            const obj = channelId(outer2_2[43]);
            obj.hideActionSheet(userId(outer2_2[44]).getUserProfileActionSheetKey(rootNavigationRef));
            const obj2 = userId(outer2_2[44]);
          }
        }
        const rootNavigationRef = userId(outer1_2[42]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            let currentRoute = rootNavigationRef.getCurrentRoute();
            let key;
            if (null != currentRoute) {
              key = currentRoute.key;
            }
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => {
              rootNavigationRef.removeListener("state", handleNavigationChange);
            };
          }
        }
      }, items15);
      let obj16 = userId(1456);
      closure_33 = obj16.useNavigation();
      if (null == stateFromStores) {
        fetchStartedAt = userId;
        fetchStartedAt = dependencyMap;
        fetchStartedAt = stateFromStores2;
        obj3 = { value: analyticsLocations };
        fetchStartedAt = stateFromStores2;
        obj4 = { value: createUserProfileAnalyticsContext, openedAt };
        fetchStartedAt = undefined;
        if (null != tmp8Result) {
          fetchStartedAt = tmp8Result.fetchStartedAt;
        }
        obj4.fetchStartedAt = fetchStartedAt;
        fetchStartedAt = undefined;
        if (null != tmp8Result) {
          fetchStartedAt = tmp8Result.fetchEndedAt;
        }
        obj4.fetchEndedAt = fetchStartedAt;
        fetchStartedAt = undefined;
        if (null != tmp8Result) {
          fetchStartedAt = tmp8Result.isLoaded;
        }
        obj4.isLoaded = fetchStartedAt;
        fetchStartedAt = stateFromStores2;
        fetchStartedAt = userId;
        fetchStartedAt = dependencyMap;
        obj5 = {};
        fetchStartedAt = stateFromStores2;
        obj6 = {};
        obj7 = { marginTop: 42 };
        obj6.style = obj7;
        obj6.Illustration = userId(8502).NoResults;
        const intl2 = userId(1212).intl;
        obj6.body = intl2.string(userId(1212).t.eAn6z2);
        obj5.children = stateFromStores2(userId(1273).EmptyState, obj6);
        obj4.children = stateFromStores2(userId(5187).BottomSheet, obj5);
        obj3.children = fetchStartedAt(userId(8266).UserProfileAnalyticsProvider, obj4);
        fetchStartedAt = fetchStartedAt(userId(5464).AnalyticsLocationProvider, obj3);
      } else {
        fetchStartedAt = userId;
        fetchStartedAt = dependencyMap;
        fetchStartedAt = stateFromStores2;
        obj8 = { theme, primaryColor, secondaryColor };
        fetchStartedAt = stateFromStores2;
        obj9 = { value: analyticsLocations };
        fetchStartedAt = callback3;
        const obj10 = { value: createUserProfileAnalyticsContext, openedAt };
        let fetchStartedAt1;
        if (null != tmp8Result) {
          fetchStartedAt1 = tmp8Result.fetchStartedAt;
        }
        obj10.fetchStartedAt = fetchStartedAt1;
        let fetchEndedAt;
        if (null != tmp8Result) {
          fetchEndedAt = tmp8Result.fetchEndedAt;
        }
        obj10.fetchEndedAt = fetchEndedAt;
        let isLoaded;
        if (null != tmp8Result) {
          isLoaded = tmp8Result.isLoaded;
        }
        obj10.isLoaded = isLoaded;
        obj11 = { ref: bottomSheetRef.bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: fetchStartedAt.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1 };
        let tmp81 = null != tmp32Result;
        if (tmp81) {
          const obj12 = { animatedPosition: sharedValue };
          tmp81 = stateFromStores2(closure_24, obj12);
        }
        const items16 = [tmp81, , , ];
        const obj13 = { gradientHeight: diff, bannerHeight: tmp55 };
        items16[1] = stateFromStores2(channelId(8506), obj13);
        obj14 = { scrollsToTop: false, style: fetchStartedAt.container };
        const obj15 = {};
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        obj15.pointerEvents = str2;
        obj14.contentContainerStyle = obj15;
        let obj22 = userId(477);
        let tmp91;
        if (obj22.isIOS()) {
          tmp91 = memo;
        }
        obj14.scrollEventsHandlersHook = tmp91;
        obj14.ref = ref;
        obj16 = {};
        const obj17 = { style: fetchStartedAt.profileContainer, onLayout: callback };
        const items17 = [
          ((stateFromStores) => {
                  let obj = {
                    user: stateFromStores,
                    channel: stateFromStores1,
                    displayProfile: c17,
                    disableCalls: closure_2,
                    disableMessage: usePreloadProfileEffect,
                    isVoiceContext: closure_4,
                    location: closure_6,
                    disableStatus: closure_32,
                    scrollViewRef: ref,
                    isPreviewingChanges,
                    navigateToShop(initialTab, arg1) {
                      let obj = userId(outer2_2[53]);
                      obj = { screen: stateFromStores1.COLLECTIBLES_SHOP, onClose: outer1_35 };
                      return obj.openUserSettings(obj);
                    },
                    navigateToPremium(arg0) {
                      let obj = userId(outer2_2[53]);
                      obj = { screen: stateFromStores1.PREMIUM, onClose: outer1_35 };
                      return obj.openUserSettings(obj);
                    },
                    showUserProfileActionSheet: showUserProfileActionSheetWithParams,
                    initialSection
                  };
                  let obj1 = userId(outer1_2[52]);
                  let tmp;
                  if (obj1.isIOS()) {
                    tmp = sharedValue2;
                  }
                  obj.scrollPosition = tmp;
                  if (stateFromStores.isNonUserBot()) {
                    obj = {};
                    const merged = Object.assign(obj);
                    let tmp2Result = stateFromStores2(channelId(outer1_2[54]), obj);
                    const tmp17 = channelId(outer1_2[54]);
                  } else if (stateFromStores.bot) {
                    obj = {};
                    let tmp3Result = tmp3(tmp4[55]);
                    const merged1 = Object.assign(obj);
                    tmp2Result = tmp2(tmp3Result, obj);
                  } else {
                    obj1 = {};
                    tmp3Result = tmp3(tmp4[56]);
                    const merged2 = Object.assign(obj);
                    tmp2Result = tmp2(tmp3Result, obj1);
                  }
                  return tmp2Result;
                })(stateFromStores),

        ];
        let tmp95 = null != tmp44Result;
        if (tmp95) {
          const obj18 = {};
          const items18 = [fetchStartedAt.profileEffect, , ];
          const obj19 = { height: diff };
          items18[1] = obj19;
          items18[2] = animatedStyle;
          obj18.style = items18;
          obj18.pointerEvents = "none";
          const obj20 = { skuId: tmp44Result.skuId, bannerAdjustment: 0 };
          obj18.children = stateFromStores2(channelId(8218), obj20);
          tmp95 = stateFromStores2(channelId(3991).View, obj18);
        }
        items17[1] = tmp95;
        obj17.children = items17;
        obj16.children = callback3(closure_6, obj17);
        obj14.children = stateFromStores2(closure_6, obj16);
        items16[2] = stateFromStores2(userId(5189).BottomSheetScrollView, obj14);
        fetchStartedAt = null == tmp32Result;
        if (fetchStartedAt) {
          fetchStartedAt = stateFromStores2;
          fetchStartedAt = userId;
          fetchStartedAt = dependencyMap;
          const obj21 = { variant: "floating" };
          obj22 = { backgroundColor: token };
          obj21.tabStyle = obj22;
          obj21.onPress = bottomSheetClose;
          fetchStartedAt = stateFromStores2(userId(5446).ActionSheetHeaderBar, obj21);
        }
        items16[3] = fetchStartedAt;
        obj11.children = items16;
        const items19 = [callback3(userId(5187).BottomSheet, obj11), , ];
        fetchStartedAt = null != tmp32Result;
        if (fetchStartedAt) {
          fetchStartedAt = callback3;
          fetchStartedAt = pendingAvatarDecoration;
          const obj23 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1 };
          fetchStartedAt = stateFromStores2;
          fetchStartedAt = channelId;
          fetchStartedAt = dependencyMap;
          const obj24 = { frame: tmp32Result };
          fetchStartedAt = sharedValue1;
          obj24.profileThemeType = sharedValue1.ACTION_SHEET;
          fetchStartedAt = userId;
          fetchStartedAt = channelId(8256);
          obj24.frameOrder = userId(8247).ProfileFrameLayerOrder.FRONT;
          obj24.containerWidth = first1;
          const items20 = [stateFromStores2(fetchStartedAt, obj24), ];
          fetchStartedAt = stateFromStores2;
          const obj25 = { variant: "floating" };
          const obj26 = { backgroundColor: token };
          obj25.tabStyle = obj26;
          obj25.onPress = bottomSheetClose;
          items20[1] = stateFromStores2(userId(5446).ActionSheetHeaderBar, obj25);
          obj23.children = items20;
          fetchStartedAt = callback3(pendingAvatarDecoration, obj23);
        }
        items19[1] = fetchStartedAt;
        if (!isPreviewingChanges) {
          items19[2] = isPreviewingChanges;
          obj10.children = items19;
          obj9.children = fetchStartedAt(userId(8266).UserProfileAnalyticsProvider, obj10);
          obj8.children = fetchStartedAt(userId(5464).AnalyticsLocationProvider, obj9);
          fetchStartedAt = fetchStartedAt(userId(3842).ThemeContextProvider, obj8);
        } else {
          fetchStartedAt = userId;
          fetchStartedAt = dependencyMap;
          fetchStartedAt = stateFromStores2;
          const obj27 = { theme: tmp60, primaryColor: null, secondaryColor: null };
          fetchStartedAt = stateFromStores2;
          let obj28 = {};
          const intl = userId(1212).intl;
          if (setting === userId(1282).ProfileVisibility.FRIENDS_ONLY) {
            fetchStartedAt = userId;
            fetchStartedAt = dependencyMap;
            wSnI_0 = userId(1212).t.mNZcD8;
          } else {
            fetchStartedAt = userId;
            fetchStartedAt = dependencyMap;
            wSnI_0 = userId(1212).t["wSnI/0"];
          }
          obj28.text = intl.string(wSnI_0);
          obj28.isExpanded = true;
          obj28 = fetchStartedAt(userId(12157).ActionSheetBackdropToast, obj28);
          obj27.children = obj28;
          fetchStartedAt = fetchStartedAt(userId(3842).ThemeContextProvider, obj27);
        }
        const tmp78 = callback3;
        const tmp87 = stateFromStores2;
        const tmp92 = stateFromStores2;
        const tmp94 = callback3;
      }
      return fetchStartedAt;
    }
    if (null != tmp8Result) {
      const profileEffect = tmp8Result.profileEffect;
      if (null != profileEffect) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp37 = channelId(8499);
  }
  if (null != tmp8Result) {
    const profileFrame = tmp8Result.profileFrame;
    if (null != profileFrame) {
      skuId = profileFrame.skuId;
    }
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default memoResult;

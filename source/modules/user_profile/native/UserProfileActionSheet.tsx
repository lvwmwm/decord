// Module ID: 8492
// Function ID: 67796
// Name: UseAnimatedPosition
// Dependencies: []

// Module 8492 (UseAnimatedPosition)
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const arg1 = animatedPosition;
  const animatedPosition2 = arg1(dependencyMap[12]).useBottomSheet().animatedPosition;
  const importDefault = animatedPosition2;
  const obj = arg1(dependencyMap[12]);
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
  const animatedReaction = arg1(dependencyMap[13]).useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(children) {
  const animatedPosition = children.animatedPosition;
  const arg1 = animatedPosition;
  const animatedIndex = children.animatedIndex;
  const importDefault = animatedIndex;
  const safeAreaTop = children.safeAreaTop;
  const dependencyMap = safeAreaTop;
  let obj = arg1(dependencyMap[13]);
  const fn = function u() {
    let obj = {};
    obj = { translateY: animatedPosition.get() + safeAreaTop };
    const items = [obj];
    obj.transform = items;
    const value = animatedIndex.get();
    const items1 = [-1, 0];
    obj.opacity = animatedPosition(safeAreaTop[13]).interpolate(value, items1, [77601039, 1612144654], animatedPosition(safeAreaTop[13]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { animatedPosition, safeAreaTop, interpolate: arg1(dependencyMap[13]).interpolate, animatedIndex, Extrapolation: arg1(dependencyMap[13]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 16546700050596;
  fn.__initData = closure_21;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [absoluteFill.absoluteFill, animatedStyle];
  return callback2(importDefault(dependencyMap[13]).View, { style, pointerEvents: "box-none", children: children.children });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const UserProfileThemeTypes = arg1(dependencyMap[7]).UserProfileThemeTypes;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: closure_13, UserSettingsSections: closure_14 } = arg1(dependencyMap[8]));
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[9]).ACTION_SHEET_MAX_WIDTH;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
let closure_18 = arg1(dependencyMap[11]).createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: {} });
let closure_19 = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
let closure_20 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
let closure_21 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_22 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let closure_23 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
const obj2 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(function UserProfileActionSheet(userId) {
  let isPreviewingChanges;
  let messageId;
  let onClose;
  let openedAt;
  let primaryColor;
  let roleId;
  let secondaryColor;
  let sessionId;
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  ({ disableCalls: closure_2, disableMessage: closure_3, isVoiceContext: closure_4, onClose } = userId);
  ({ location: closure_6, openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId } = userId);
  if (isPreviewingChanges === undefined) {
    isPreviewingChanges = false;
  }
  let closure_7 = isPreviewingChanges;
  let flag = userId.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let prop = userId.sourceAnalyticsLocations;
  if (prop === undefined) {
    prop = [];
  }
  let closure_8 = prop;
  const initialSection = userId.initialSection;
  let closure_10;
  let UserProfileThemeTypes;
  let top;
  let stateFromStores;
  let stateFromStores1;
  let ACTION_SHEET_MAX_WIDTH;
  let stateFromStores2;
  let tmp8Result;
  let callback3;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let ActionSheetAlignedView;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  let tmp32Result;
  let width;
  let tmp62;
  let closure_32;
  let closure_33;
  function showUserProfileActionSheetWithParams() {
    const merged = Object.assign(createUserProfileAnalyticsContext);
    channelId(closure_2[44])({ sourceAnalyticsLocations: analyticsLocations });
  }
  function handleUserSettingsClose() {
    navigation.goBack();
    showUserProfileActionSheetWithParams();
  }
  let fetchStartedAt = callback3();
  let obj = arg1(dependencyMap[13]);
  const sharedValue = obj.useSharedValue(0);
  closure_10 = sharedValue;
  let obj1 = arg1(dependencyMap[13]);
  const sharedValue1 = obj1.useSharedValue(-1);
  UserProfileThemeTypes = sharedValue1;
  top = importDefault(dependencyMap[14])().top;
  let obj2 = arg1(dependencyMap[15]);
  const items = [initialSection];
  stateFromStores = obj2.useStateFromStores(items, () => initialSection.getUser(userId));
  let obj3 = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const items2 = [channelId];
  stateFromStores1 = obj3.useStateFromStores(items1, () => isPreviewingChanges.getChannel(channelId), items2);
  let guild_id;
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  ACTION_SHEET_MAX_WIDTH = guild_id;
  let obj4 = arg1(dependencyMap[15]);
  const items3 = [closure_8];
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
  tmp8Result = importDefault(dependencyMap[16])(id, tmp10);
  const items4 = [];
  const tmp8 = importDefault(dependencyMap[16]);
  const tmp12 = importDefault(dependencyMap[17]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = importDefault(dependencyMap[18]).USER_PROFILE_ACTION_SHEET;
  const analyticsLocations = tmp12(items4).analyticsLocations;
  callback3 = analyticsLocations;
  let obj5 = arg1(dependencyMap[19]);
  const bottomSheetRef = obj5.useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  const ref = importAllResult.useRef(null);
  closure_19 = ref;
  let obj6 = arg1(dependencyMap[13]);
  const sharedValue2 = obj6.useSharedValue(0);
  closure_20 = sharedValue2;
  const items5 = [sharedValue2];
  const memo = importAllResult.useMemo(() => function buildBottomSheeetScrollEventsHandlers(sharedValue2) {
    return (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
      let obj = animatedRef(closure_2[12]);
      const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY);
      const animatedScrollableState = animatedRef(closure_2[12]).useBottomSheetInternal().animatedScrollableState;
      animatedRef = animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = animatedRef(closure_2[12]);
      const fn = function s(contentOffset) {
        if (null != handleOnScroll) {
          handleOnScroll(contentOffset, arg1);
        }
        const value = animatedScrollableState.get();
        let num = 0;
        if (value !== animatedScrollableState(closure_2[12]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      obj = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedRef, animatedScrollableState, SCROLLABLE_STATE: animatedRef(closure_2[12]).SCROLLABLE_STATE };
      fn.__closure = obj;
      fn.__workletHash = 13254130622789;
      fn.__initData = closure_22;
      const items = [handleOnScroll, animatedScrollableState];
      obj = {};
      const obj3 = animatedRef(closure_2[13]);
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj["handleOnScroll"] = animatedRef(closure_2[13]).useWorkletCallback(fn, items);
      return obj;
    };
  }(sharedValue2), items5);
  let obj7 = arg1(dependencyMap[13]);
  class W {
    constructor() {
      obj = {};
      if (closure_20.get() <= 0) {
        obj = {};
        tmp = closure_20;
        obj.translateY = closure_20.get();
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
  W.__initData = closure_23;
  const animatedStyle = obj7.useAnimatedStyle(W);
  const tmp19 = callback(importAllResult.useState(false), 2);
  const first = tmp19[0];
  closure_21 = first;
  closure_22 = tmp19[1];
  const tmp21 = callback(importAllResult.useState(0), 2);
  const first1 = tmp21[0];
  closure_23 = first1;
  closure_24 = tmp21[1];
  const callback = importAllResult.useCallback((nativeEvent) => {
    callback2(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = arg1(dependencyMap[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let obj8 = arg1(dependencyMap[15]);
  const items6 = [closure_10];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => sharedValue.getPendingChanges());
  const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  ActionSheetAlignedView = pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  let obj9 = arg1(dependencyMap[21]);
  obj = { layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag };
  createUserProfileAnalyticsContext = obj9.useCreateUserProfileAnalyticsContext(obj);
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId;
      if (null != pendingProfileFrame) {
        skuId = pendingProfileFrame.skuId;
      }
    }
    let obj11 = arg1(dependencyMap[22]);
    const isScreenLandscape = obj11.useIsScreenLandscape();
    let tmp33;
    if (!isScreenLandscape) {
      tmp33 = skuId;
    }
    tmp32Result = importDefault(dependencyMap[23])(tmp33, "UserProfileActionSheet");
    obj = {};
    let tmp38;
    const tmp32 = importDefault(dependencyMap[23]);
    if (!isScreenLandscape) {
      tmp38 = skuId;
    }
    obj.skuId = tmp38;
    obj.openedAt = openedAt;
    obj.context = createUserProfileAnalyticsContext;
    obj.analyticsLocations = analyticsLocations;
    importDefault(dependencyMap[24])(obj);
    const items7 = [tmp32Result, sharedValue, top, sharedValue1, first1];
    const memo1 = importAllResult.useMemo(() => {
      let tmp = null;
      if (null != tmp32Result) {
        let obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1 };
        obj = { frame: tmp32Result, frameOrder: userId(closure_2[26]).ProfileFrameLayerOrder.BACK, profileThemeType: sharedValue1.ACTION_SHEET, containerWidth: first1 };
        obj.children = stateFromStores2(channelId(closure_2[25]), obj);
        tmp = stateFromStores2(pendingAvatarDecoration, obj);
        const tmp10 = channelId(closure_2[25]);
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
      const tmp49Result = importDefault(dependencyMap[28])(obj1);
      const theme = tmp49Result.theme;
      ({ primaryColor, secondaryColor } = tmp49Result);
      const tmp49 = importDefault(dependencyMap[28]);
      const size = importDefault(dependencyMap[30])();
      width = size.width;
      const diff = size.height - arg1(dependencyMap[31]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp32Result, width];
      const memo2 = importAllResult.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != tmp32Result) {
            const _Math = Math;
            const bound = Math.min(width, guild_id);
            return channelId(closure_2[32])(tmp32Result, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp55 = importDefault(dependencyMap[29])(ACTION_SHEET_MAX_WIDTH);
      let obj14 = arg1(dependencyMap[34]);
      const token = obj14.useToken(importDefault(dependencyMap[35]).colors.INTERACTIVE_TEXT_HOVER, theme);
      obj2 = { userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp8Result, guildMember: stateFromStores2 };
      tmp62 = importDefault(dependencyMap[36])(obj2);
      const items9 = [stateFromStores, channelId];
      closure_32 = importAllResult.useMemo(() => {
        let result = null != stateFromStores;
        if (result) {
          result = userId(closure_2[37]).shouldDisableUserPresenceInChannel(stateFromStores, channelId);
          const obj = userId(closure_2[37]);
        }
        return result;
      }, items9);
      const items10 = [stateFromStores, userId];
      const effect = importAllResult.useEffect(() => {
        if (null == stateFromStores) {
          const user = userId(closure_2[38]).getUser(userId);
          const obj = userId(closure_2[38]);
        }
      }, items10);
      const items11 = [stateFromStores, guild_id, channelId];
      const effect1 = importAllResult.useEffect(() => {
        let tmp = null == stateFromStores;
        if (!tmp) {
          let isNonUserBotResult = stateFromStores.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !channelId(closure_2[39])(stateFromStores.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          const obj = { 0: 11945304078997316000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 2888286052403451000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: -8364226554049099000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000742174258080857, guildId: guild_id };
          let tmp16;
          const avatarURL = stateFromStores.getAvatarURL(guild_id, 80);
          if (null != channelId) {
            tmp16 = channelId;
          }
          obj.channelId = tmp16;
          channelId(closure_2[40])(stateFromStores.id, avatarURL, obj);
          const tmp9 = channelId(closure_2[40]);
        }
      }, items11);
      const items12 = [tmp62, tmp8Result, guild_id, first, stateFromStores2];
      const effect2 = importAllResult.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == tmp8Result;
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
            channelId(closure_2[41]).track(top.OPEN_POPOUT, tmp62);
            callback(true);
            const obj = channelId(closure_2[41]);
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
        if (atResult === channelId(closure_2[18]).COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          let obj = channelId(closure_2[41]);
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
        if (null != callback) {
          callback();
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
            const obj = key(handleNavigationChange[43]);
            obj.hideActionSheet(rootNavigationRef(handleNavigationChange[44]).getUserProfileActionSheetKey(rootNavigationRef));
            const obj2 = rootNavigationRef(handleNavigationChange[44]);
          }
        }
        const rootNavigationRef = userId(handleNavigationChange[42]).getRootNavigationRef();
        const userId = rootNavigationRef;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            let key;
            if (null != currentRoute) {
              key = currentRoute.key;
            }
            const channelId = key;
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => {
              rootNavigationRef.removeListener("state", handleNavigationChange);
            };
          }
        }
      }, items15);
      let obj16 = arg1(dependencyMap[45]);
      closure_33 = obj16.useNavigation();
      if (null == stateFromStores) {
        fetchStartedAt = arg1;
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
        fetchStartedAt = arg1;
        fetchStartedAt = dependencyMap;
        obj5 = {};
        fetchStartedAt = stateFromStores2;
        obj6 = {};
        obj7 = { marginTop: 42 };
        obj6.style = obj7;
        obj6.Illustration = arg1(dependencyMap[48]).NoResults;
        const intl2 = arg1(dependencyMap[49]).intl;
        obj6.body = intl2.string(arg1(dependencyMap[49]).t.eAn6z2);
        obj5.children = stateFromStores2(arg1(dependencyMap[47]).EmptyState, obj6);
        obj4.children = stateFromStores2(arg1(dependencyMap[46]).BottomSheet, obj5);
        obj3.children = fetchStartedAt(arg1(dependencyMap[21]).UserProfileAnalyticsProvider, obj4);
        fetchStartedAt = fetchStartedAt(arg1(dependencyMap[17]).AnalyticsLocationProvider, obj3);
      } else {
        fetchStartedAt = arg1;
        fetchStartedAt = dependencyMap;
        fetchStartedAt = stateFromStores2;
        obj8 = { theme, primaryColor, secondaryColor };
        fetchStartedAt = stateFromStores2;
        obj9 = { value: analyticsLocations };
        fetchStartedAt = tmp8Result;
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
        obj11 = { ref: bottomSheetRef.bottomSheetRef, maxHeight: diff - memo2, contentStyles: fetchStartedAt.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1 };
        let tmp81 = null != tmp32Result;
        if (tmp81) {
          const obj12 = { animatedPosition: sharedValue };
          tmp81 = stateFromStores2(closure_24, obj12);
        }
        const items16 = [tmp81, , , ];
        const obj13 = { gradientHeight: diff, bannerHeight: tmp55 };
        items16[1] = stateFromStores2(importDefault(dependencyMap[51]), obj13);
        obj14 = { scrollsToTop: false, style: fetchStartedAt.container };
        const obj15 = {};
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        obj15.pointerEvents = str2;
        obj14.contentContainerStyle = obj15;
        let obj22 = arg1(dependencyMap[52]);
        let tmp91;
        if (obj22.isIOS()) {
          tmp91 = memo;
        }
        obj14.scrollEventsHandlersHook = tmp91;
        obj14.ref = ref;
        obj16 = {};
        const obj17 = { style: fetchStartedAt.profileContainer, onLayout: callback };
        const items17 = [
          (stateFromStores) => {
                  let obj = {
                    user: stateFromStores,
                    channel: stateFromStores1,
                    displayProfile: tmp8Result,
                    disableCalls: closure_2,
                    disableMessage: closure_3,
                    isVoiceContext: closure_4,
                    location: closure_6,
                    disableStatus: closure_32,
                    scrollViewRef: ref,
                    isPreviewingChanges,
                    navigateToShop(arg0) {
                      let obj = callback(closure_2[53]);
                      obj = { screen: constants.COLLECTIBLES_SHOP, onClose: closure_35 };
                      return obj.openUserSettings(obj);
                    },
                    navigateToPremium(arg0) {
                      let obj = callback(closure_2[53]);
                      obj = { screen: constants.PREMIUM, onClose: closure_35 };
                      return obj.openUserSettings(obj);
                    },
                    showUserProfileActionSheet: showUserProfileActionSheetWithParams,
                    initialSection
                  };
                  let obj1 = userId(closure_2[52]);
                  let tmp;
                  if (obj1.isIOS()) {
                    tmp = sharedValue2;
                  }
                  obj.scrollPosition = tmp;
                  if (stateFromStores.isNonUserBot()) {
                    obj = {};
                    const merged = Object.assign(obj);
                    let tmp2Result = stateFromStores2(channelId(closure_2[54]), obj);
                    const tmp17 = channelId(closure_2[54]);
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
                }(stateFromStores),

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
          obj18.children = stateFromStores2(importDefault(dependencyMap[57]), obj20);
          tmp95 = stateFromStores2(importDefault(dependencyMap[13]).View, obj18);
        }
        items17[1] = tmp95;
        obj17.children = items17;
        obj16.children = tmp8Result(closure_6, obj17);
        obj14.children = stateFromStores2(closure_6, obj16);
        items16[2] = stateFromStores2(arg1(dependencyMap[12]).BottomSheetScrollView, obj14);
        fetchStartedAt = null == tmp32Result;
        if (fetchStartedAt) {
          fetchStartedAt = stateFromStores2;
          fetchStartedAt = arg1;
          fetchStartedAt = dependencyMap;
          const obj21 = { variant: "floating" };
          obj22 = { backgroundColor: token };
          obj21.tabStyle = obj22;
          obj21.onPress = bottomSheetClose;
          fetchStartedAt = stateFromStores2(arg1(dependencyMap[58]).ActionSheetHeaderBar, obj21);
        }
        items16[3] = fetchStartedAt;
        obj11.children = items16;
        const items19 = [tmp8Result(arg1(dependencyMap[46]).BottomSheet, obj11), , ];
        fetchStartedAt = null != tmp32Result;
        if (fetchStartedAt) {
          fetchStartedAt = tmp8Result;
          fetchStartedAt = ActionSheetAlignedView;
          const obj23 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1 };
          fetchStartedAt = stateFromStores2;
          fetchStartedAt = importDefault;
          fetchStartedAt = dependencyMap;
          const obj24 = { frame: tmp32Result };
          fetchStartedAt = UserProfileThemeTypes;
          obj24.profileThemeType = UserProfileThemeTypes.ACTION_SHEET;
          fetchStartedAt = arg1;
          fetchStartedAt = importDefault(dependencyMap[25]);
          obj24.frameOrder = arg1(dependencyMap[26]).ProfileFrameLayerOrder.FRONT;
          obj24.containerWidth = first1;
          const items20 = [stateFromStores2(fetchStartedAt, obj24), ];
          fetchStartedAt = stateFromStores2;
          const obj25 = { variant: "floating" };
          const obj26 = { backgroundColor: token };
          obj25.tabStyle = obj26;
          obj25.onPress = bottomSheetClose;
          items20[1] = stateFromStores2(arg1(dependencyMap[58]).ActionSheetHeaderBar, obj25);
          obj23.children = items20;
          fetchStartedAt = tmp8Result(ActionSheetAlignedView, obj23);
        }
        items19[1] = fetchStartedAt;
        if (!isPreviewingChanges) {
          items19[2] = isPreviewingChanges;
          obj10.children = items19;
          obj9.children = fetchStartedAt(arg1(dependencyMap[21]).UserProfileAnalyticsProvider, obj10);
          obj8.children = fetchStartedAt(arg1(dependencyMap[17]).AnalyticsLocationProvider, obj9);
          fetchStartedAt = fetchStartedAt(arg1(dependencyMap[50]).ThemeContextProvider, obj8);
        } else {
          fetchStartedAt = arg1;
          fetchStartedAt = dependencyMap;
          fetchStartedAt = stateFromStores2;
          const obj27 = { <string:3431066467>: "mn", <string:1646814289>: "description", <string:2589056999>: "Array", theme: tmp60 };
          fetchStartedAt = stateFromStores2;
          let obj28 = {};
          const intl = arg1(dependencyMap[49]).intl;
          if (setting === arg1(dependencyMap[60]).ProfileVisibility.FRIENDS_ONLY) {
            fetchStartedAt = arg1;
            fetchStartedAt = dependencyMap;
            wSnI/0 = arg1(dependencyMap[49]).t.mNZcD8;
          } else {
            fetchStartedAt = arg1;
            fetchStartedAt = dependencyMap;
            wSnI/0 = arg1(dependencyMap[49]).t.wSnI/0;
          }
          obj28.text = intl.string(wSnI_0);
          obj28.isExpanded = true;
          obj28 = fetchStartedAt(arg1(dependencyMap[59]).ActionSheetBackdropToast, obj28);
          obj27.children = obj28;
          fetchStartedAt = fetchStartedAt(arg1(dependencyMap[50]).ThemeContextProvider, obj27);
        }
        const tmp78 = tmp8Result;
        const tmp87 = stateFromStores2;
        const tmp92 = stateFromStores2;
        const tmp94 = tmp8Result;
      }
      return fetchStartedAt;
    }
    if (null != tmp8Result) {
      const profileEffect = tmp8Result.profileEffect;
      if (null != profileEffect) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp37 = importDefault(dependencyMap[24]);
  }
  if (null != tmp8Result) {
    const profileFrame = tmp8Result.profileFrame;
    if (null != profileFrame) {
      skuId = profileFrame.skuId;
    }
  }
});
const result = arg1(dependencyMap[61]).fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default memoResult;

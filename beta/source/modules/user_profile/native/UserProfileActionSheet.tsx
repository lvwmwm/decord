// Module ID: 8506
// Function ID: 8507
// Name: UserProfileActionSheet
// Dependencies: [32, 19, 17, 2045, 2109, 1376, 8466, 7487, 1078, 7430, 21, 4790, 558, 6895, 4529, 568, 1616, 504, 8492, 7461, 7441, 8476, 2023, 8496, 5376, 8507, 8519, 8520, 8521, 8527, 8513, 8532, 8533, 8536, 1482, 5929, 8530, 4725, 4494, 580, 8505, 8537, 8487, 2097, 8493, 1245, 4649, 4757, 1488, 8485, 7429, 1181, 8538, 1119, 4503, 8543, 1368, 7658, 8546, 13319, 13392, 9112, 7433, 13477, 1190, 2]

// Module 8506 (UserProfileActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import isChangelogUserDefault from "isChangelogUser" /* 2097 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import BottomSheetModal from "BottomSheetModal" /* 6895 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8485 */;
import UserActionCreators from "UserActionCreators" /* 8487 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8493 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8513 */;
import ProfileFrameDefault from "ProfileFrame" /* 8527 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8530 */;
import ApplicationPresenceUtils from "ApplicationPresenceUtils" /* 8537 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import UserStore from "UserStore" /* 1376 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8466 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(7487).UserProfileThemeTypes;
const Constants = fn(1078);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7430).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4790);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
const __initData = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
const __initData2 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
const __initData3 = { code: "function UserProfileActionSheetTsx3(){const{value}=this.__closure;return value.get();}" };
const __initData4 = { code: "function UserProfileActionSheetTsx4(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedPosition) => {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedPosition2 = BottomSheetModal.useBottomSheet().animatedPosition;
  const fn = function n() {
    return animatedPosition2.get();
  };
  fn.__closure = { value: animatedPosition2 };
  fn.__workletHash = 5684011437075;
  fn.__initData = __initData;
  const fn2 = function o(arg0) {
    return animatedPosition.set(arg0);
  };
  fn2.__closure = { animatedPosition };
  fn2.__workletHash = 15360670503044;
  fn2.__initData = __initData2;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  return null;
}) : ((animatedPosition) => {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedPosition2 = BottomSheetModal.useBottomSheet().animatedPosition;
  const fn = function n() {
    return animatedPosition2.get();
  };
  fn.__closure = { value: animatedPosition2 };
  fn.__workletHash = 6265722906513;
  fn.__initData = __initData3;
  const fn2 = function o(arg0) {
    return animatedPosition.set(arg0);
  };
  fn2.__closure = { animatedPosition };
  fn2.__workletHash = 478345078786;
  fn2.__initData = __initData4;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  return null;
});
const __initData5 = { code: "function UserProfileActionSheetTsx5(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
const __initData6 = { code: "function UserProfileActionSheetTsx6(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedPosition) => {
  const cResult = animatedPosition(safeAreaTop[15]).c(5);
  animatedPosition = animatedPosition.animatedPosition;
  const animatedIndex = animatedPosition.animatedIndex;
  safeAreaTop = animatedPosition.safeAreaTop;
  const children = animatedPosition.children;
  let obj = animatedPosition(safeAreaTop[15]);
  const tmp = safeAreaTop;
  const fn = function o() {
    const obj = { transform: null, opacity: null };
    const items = [{ translateY: animatedPosition.get() + safeAreaTop }];
    obj.transform = items;
    const obj2 = { translateY: animatedPosition.get() + safeAreaTop };
    value = animatedIndex.get();
    obj.opacity = ReanimatedRexport.interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj2 = animatedPosition(safeAreaTop[14]);
  fn.__closure = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[14]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[14]).Extrapolation };
  fn.__workletHash = 10476832609826;
  fn.__initData = __initData5;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    let items = [closure_5.absoluteFill, animatedStyle];
    cResult[0] = animatedStyle;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    return tmp6;
  }
  const tmp7 = closure_16(animatedIndex(tmp[14]).View, { style: tmp4, pointerEvents: "box-none", children });
  cResult[2] = children;
  cResult[3] = tmp4;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((animatedPosition) => {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedIndex = animatedPosition.animatedIndex;
  const safeAreaTop = animatedPosition.safeAreaTop;
  const fn = function c() {
    const obj = { transform: null, opacity: null };
    const items = [{ translateY: animatedPosition.get() + safeAreaTop }];
    obj.transform = items;
    const obj2 = { translateY: animatedPosition.get() + safeAreaTop };
    value = animatedIndex.get();
    obj.opacity = ReanimatedRexport.interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = animatedPosition(safeAreaTop[14]);
  fn.__closure = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[14]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[14]).Extrapolation };
  fn.__workletHash = 16950257902497;
  fn.__initData = __initData6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: "box-none", children: animatedPosition.children };
  let items = [closure_5.absoluteFill, animatedStyle];
  obj3.style = items;
  return closure_16(animatedIndex(safeAreaTop[14]).View, obj3);
});
let closure_27 = { code: "function UserProfileActionSheetTsx7(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
const __initData7 = { code: "function UserProfileActionSheetTsx8(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
const __initData8 = { code: "function UserProfileActionSheetTsx9(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(localUser[15]).c(190);
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ messageId, localUser } = userId);
  ({ roleId, sessionId, onClose } = userId);
  ({ openedAt, isPreviewingChanges, showGuildProfile, sourceAnalyticsLocations } = userId);
  let tmp4 = undefined !== isPreviewingChanges;
  ({ disableCalls, disableMessage, isVoiceContext, location: _location, initialSection } = userId);
  if (tmp4) {
    tmp4 = isPreviewingChanges;
  }
  if (cResult[0] !== sourceAnalyticsLocations) {
    let items = sourceAnalyticsLocations;
    if (undefined === sourceAnalyticsLocations) {
      items = [];
    }
    cResult[0] = sourceAnalyticsLocations;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  noop = tmp6;
  closure_18();
  let obj = userId(localUser[15]);
  const sharedValue = userId(localUser[14]).useSharedValue(0);
  const tmpResult = userId(localUser[14]);
  const sharedValue1 = userId(localUser[14]).useSharedValue(-1);
  const top = channelId(tmp2[16])().top;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [closure_9];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== userId) {
    const fn = function z() {
      return UserStore.getUser(userId);
    };
    cResult[3] = userId;
    cResult[4] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[4];
  }
  const tmpResult9 = userId(localUser[14]);
  const stateFromStores = userId(localUser[17]).useStateFromStores(tmp11, tmp13);
  let tmp15 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp17;
    if (id === userId) {
      tmp17 = localUser;
    }
    tmp15 = tmp17;
  }
  localUser = tmp15;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [guild_id];
    cResult[5] = items2;
    let tmp18 = items2;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] !== channelId) {
    function ee() {
      return ChannelStore.getChannel(channelId);
    }
    const items3 = [channelId];
    cResult[6] = channelId;
    cResult[7] = ee;
    cResult[8] = items3;
    let tmp21 = items3;
    let tmp20 = ee;
  } else {
    tmp20 = cResult[7];
    tmp21 = cResult[8];
  }
  const tmpResult10 = userId(localUser[17]);
  const stateFromStores1 = userId(localUser[17]).useStateFromStores(tmp18, tmp20, tmp21);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [stateFromStores2];
    cResult[9] = items4;
    let tmp24 = items4;
  } else {
    tmp24 = cResult[9];
  }
  if (cResult[10] === guild_id) {
    if (cResult[11] === userId) {
      let tmp26 = cResult[12];
    }
    stateFromStores2 = tmp(tmp2[17]).useStateFromStores(tmp24, tmp26);
    let id1;
    const tmpResult12 = tmp(tmp2[17]);
    if (tmp15 != null) {
      id1 = tmp15.id;
    }
    if (id1 == null) {
      id1 = closure_13;
    }
    let tmp30;
    if (tmp5) {
      tmp30 = guild_id;
    }
    const tmp10Result = tmp10(tmp2[18]);
    closure_9 = tmp10(tmp2[18])(id1, tmp30);
    if (cResult[13] !== tmp6) {
      const items5 = [];
      items5[HermesBuiltin.arraySpread(tmp6, 0)] = tmp10(tmp2[19]).USER_PROFILE_ACTION_SHEET;
      cResult[13] = tmp6;
      cResult[14] = items5;
      let tmp32 = items5;
      const arraySpreadResult = HermesBuiltin.arraySpread(tmp6, 0);
    } else {
      tmp32 = cResult[14];
    }
    const analyticsLocations = tmp10(tmp2[20])(tmp32).analyticsLocations;
    const tmp10ResultResult = tmp10(tmp2[18])(id1, tmp30);
    const bottomSheetRef1 = tmp(tmp2[21]).useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    noop.useRef(null);
    const tmpResult13 = tmp(tmp2[21]);
    const sharedValue2 = tmp(tmp2[14]).useSharedValue(0);
    if (cResult[15] !== sharedValue2) {
      closure_129_0 = sharedValue2;
      const fn2 = (arg0, arg1, arg2) => {
        const scrollEventsHandlersDefault = animatedScrollableState(6895).useScrollEventsHandlersDefault(arg0, arg1, arg2);
        const obj = animatedScrollableState(6895);
        animatedScrollableState = animatedScrollableState(6895).useBottomSheetInternal().animatedScrollableState;
        const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
        const obj2 = animatedScrollableState(6895);
        const fn = function s(contentOffset, arg1) {
          if (handleOnScroll != null) {
            tmp(contentOffset, arg1);
          }
          value = animatedScrollableState.get();
          let num = 0;
          if (value !== userId(localUser[13]).SCROLLABLE_STATE.LOCKED) {
            num = contentOffset.contentOffset.y;
          }
          const result = animatedScrollableState.set(num);
        };
        const obj3 = animatedScrollableState(4529);
        fn.__closure = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6895).SCROLLABLE_STATE };
        fn.__workletHash = 1075381102662;
        fn.__initData = __initData;
        const items = [handleOnScroll, animatedScrollableState];
        const obj5 = {};
        obj4 = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6895).SCROLLABLE_STATE };
        const merged = Object.assign(scrollEventsHandlersDefault);
        obj5.handleOnScroll = obj3.useWorkletCallback(fn, items);
        return obj5;
      };
      cResult[15] = sharedValue2;
      cResult[16] = fn2;
    }
    const tmpResult14 = tmp(tmp2[14]);
    function ve() {
      if (sharedValue2.get() <= 0) {
        const obj2 = { translateY: sharedValue2.get() };
        const items = [obj2];
        let transform = items;
      } else {
        transform = [];
      }
      return { transform };
    }
    let obj2 = { scrollPosition: sharedValue2 };
    ve.__closure = obj2;
    ve.__workletHash = 15687962271123;
    ve.__initData = __initData7;
    const animatedStyle = tmp(tmp2[14]).useAnimatedStyle(ve);
    const tmp43 = onClose(noop.useState(false), 2);
    closure_12 = tmp43[0];
    closure_13 = tmp43[1];
    const tmpResult15 = tmp(tmp2[14]);
    [r10173, closure_14] = onClose(noop.useState(0), 2);
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class Pe {
        constructor(arg0) {
          tmp = closure_14(Math.floor(userId.nativeEvent.layout.width));
          return;
        }
      }
      cResult[17] = Pe;
    } else {
      class Pe {
        constructor(arg0) {
          tmp = closure_14(Math.floor(userId.nativeEvent.layout.width));
          return;
        }
      }
    }
    const ProfileVisibility = tmp(tmp2[22]).ProfileVisibility;
    const setting = ProfileVisibility.useSetting();
    const _Symbol2 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class Pe {
        constructor(arg0) {
          tmp = closure_14(Math.floor(userId.nativeEvent.layout.width));
          return;
        }
      }
      const items6 = [analyticsLocations];
      function xe() {
        return analyticsLocations.getPendingChanges();
      }
      cResult[18] = items6;
      cResult[19] = xe;
      let tmp48 = xe;
      const tmp47 = items6;
    } else {
      class Pe {
        constructor(arg0) {
          tmp = closure_14(Math.floor(userId.nativeEvent.layout.width));
          return;
        }
      }
      tmp48 = cResult[19];
    }
    const tmp44 = onClose(noop.useState(0), 2);
    const stateFromStoresObject = tmp(tmp2[17]).useStateFromStoresObject(tmp47, tmp48);
    const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
    const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
    const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
    if (cResult[20] === channelId) {
      class Pe {
        constructor(arg0) {
          tmp = closure_14(Math.floor(userId.nativeEvent.layout.width));
          return;
        }
      }
    }
    const obj3 = { layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: tmp5 };
    cResult[20] = channelId;
    cResult[21] = guild_id;
    cResult[22] = messageId;
    cResult[23] = roleId;
    cResult[24] = sessionId;
    cResult[25] = tmp5;
    cResult[26] = userId;
    cResult[27] = obj3;
    const tmpResult16 = tmp(tmp2[17]);
  }
  function ae() {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  }
  cResult[10] = guild_id;
  cResult[11] = userId;
  cResult[12] = ae;
  tmp26 = ae;
}) : ((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  const localUser = userId.localUser;
  const onClose = userId.onClose;
  ({ openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId, disableCalls, disableMessage, isVoiceContext, location: _location } = userId);
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
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  closure_13 = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_17 = undefined;
  let first1;
  closure_19 = undefined;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  closure_24 = undefined;
  let width;
  closure_26 = undefined;
  let navigation;
  function handleUserSettingsClose() {
    navigation.goBack();
    const merged = Object.assign(createUserProfileAnalyticsContext);
    showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, localUser });
  }
  let tmp = first1();
  const tmp3 = localUser;
  const sharedValue = userId(localUser[14]).useSharedValue(0);
  let obj = userId(localUser[14]);
  const sharedValue1 = userId(localUser[14]).useSharedValue(-1);
  const top = channelId(localUser[16])().top;
  let obj2 = userId(localUser[14]);
  let items = [stateFromStores];
  stateFromStores = userId(localUser[17]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj4 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp9;
    if (id === userId) {
      tmp9 = localUser;
    }
    obj4 = tmp9;
  }
  let obj3 = userId(localUser[17]);
  const items1 = [sharedValue1];
  const items2 = [channelId];
  const stateFromStores1 = userId(tmp3[17]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const tmp2Result = userId(tmp3[17]);
  const items3 = [top];
  stateFromStores2 = userId(tmp3[17]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id1;
  const tmp2Result13 = userId(tmp3[17]);
  if (obj4 != null) {
    id1 = obj4.id;
  }
  if (id1 == null) {
    id1 = closure_13;
  }
  let tmp15;
  if (flag) {
    tmp15 = guild_id;
  }
  const tmp6ResultResult = channelId(tmp3[18])(id1, tmp15);
  closure_13 = tmp6ResultResult;
  const items4 = [];
  const tmp6Result = channelId(tmp3[18]);
  const tmp6Result10 = channelId(tmp3[20]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(tmp3[19]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp6Result10(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(prop, 0);
  const bottomSheetRef = userId(tmp3[21]).useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  const ref = isPreviewingChanges.useRef(null);
  const tmp2Result14 = userId(tmp3[21]);
  sharedValue2 = userId(tmp3[14]).useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = isPreviewingChanges.useMemo(() => {
    closure_0 = sharedValue2;
    return (arg0, arg1, arg2) => {
      const scrollEventsHandlersDefault = animatedScrollableState(6895).useScrollEventsHandlersDefault(arg0, arg1, arg2);
      const obj = animatedScrollableState(6895);
      animatedScrollableState = animatedScrollableState(6895).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = animatedScrollableState(6895);
      const fn = function s(contentOffset, arg1) {
        if (handleOnScroll != null) {
          tmp(contentOffset, arg1);
        }
        value = animatedScrollableState.get();
        let num = 0;
        if (value !== userId(localUser[13]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      const obj3 = animatedScrollableState(4529);
      fn.__closure = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6895).SCROLLABLE_STATE };
      fn.__workletHash = 1075381102662;
      fn.__initData = __initData;
      const items = [handleOnScroll, animatedScrollableState];
      const obj5 = {};
      obj4 = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6895).SCROLLABLE_STATE };
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj5.handleOnScroll = obj3.useWorkletCallback(fn, items);
      return obj5;
    };
  }, items5);
  const tmp2Result15 = userId(tmp3[14]);
  class D {
    constructor() {
      obj = closure_15;
      if (closure_15.get() <= 0) {
        obj1 = { translateY: null };
        obj1.translateY = obj.get();
        items = [];
        items[0] = obj1;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  D.__closure = { scrollPosition: sharedValue2 };
  D.__workletHash = 4091977514258;
  D.__initData = __initData8;
  const animatedStyle = userId(tmp3[14]).useAnimatedStyle(D);
  const tmp24 = onClose(isPreviewingChanges.useState(false), 2);
  first = tmp24[0];
  closure_17 = tmp24[1];
  const tmp26 = onClose(isPreviewingChanges.useState(0), 2);
  first1 = tmp26[0];
  closure_19 = tmp26[1];
  const callback = isPreviewingChanges.useCallback((nativeEvent) => {
    closure_19(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp2(tmp3[22]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const tmp2Result16 = userId(tmp3[14]);
  const items6 = [obj4];
  const stateFromStoresObject = userId(tmp3[17]).useStateFromStoresObject(items6, () => obj4.getPendingChanges());
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const tmp2Result17 = userId(tmp3[17]);
  createUserProfileAnalyticsContext = userId(tmp3[23]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag });
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId1;
      if (pendingProfileFrame != null) {
        skuId1 = pendingProfileFrame.skuId;
      }
      let skuId = skuId1;
    }
    const isScreenLandscape = tmp2(tmp3[24]).useIsScreenLandscape();
    let tmp35;
    const tmp2Result19 = tmp2(tmp3[24]);
    if (!isScreenLandscape) {
      tmp35 = skuId;
    }
    const tmp6Result2Result = tmp6(tmp3[25])(tmp35);
    closure_24 = tmp6Result2Result;
    let tmp38;
    const tmp6Result11 = tmp6(tmp3[25]);
    if (!isScreenLandscape) {
      tmp38 = skuId;
    }
    let obj5 = { skuId: tmp38, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp6(tmp3[26])(obj5);
    const tmp6Result12 = tmp6(tmp3[26]);
    const isShopThisLookMobileEnabled = tmp2(tmp3[27]).useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp42;
    const tmp2Result20 = tmp2(tmp3[27]);
    if (flag) {
      tmp42 = guild_id;
    }
    tmp6(tmp3[28])(userId, tmp42, isShopThisLookMobileEnabled);
    const items7 = [tmp6Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj8.useMemo(() => {
      let tmp2 = null;
      if (null != closure_24) {
        const obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
        const obj2 = { frame: tmp, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, containerWidth: first1 };
        obj.children = value2(ProfileFrameDefault, obj2);
        tmp2 = value2(closure_26, obj);
      }
      return tmp2;
    }, items7);
    if (isPreviewingChanges) {
      if (undefined !== pendingProfileEffect) {
        let skuId3;
        if (pendingProfileEffect != null) {
          skuId3 = pendingProfileEffect.skuId;
        }
        let skuId2 = skuId3;
      }
      const tmp46Result = tmp46(skuId2);
      const obj6 = { user: obj4, displayProfile: tmp6ResultResult, pendingThemeColors: null };
      let pendingThemeColors;
      if (isPreviewingChanges) {
        pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      }
      obj6.pendingThemeColors = pendingThemeColors;
      const tmp6Result14 = tmp6(tmp3[32]);
      ({ theme, primaryColor, secondaryColor } = tmp6(tmp3[32])(obj6));
      const tmp6Result5Result = tmp6(tmp3[32])(obj6);
      const size = tmp6(tmp3[34])();
      width = size.width;
      const diff = size.height - tmp2(tmp3[35]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp6Result2Result, width];
      const memo2 = obj8.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != closure_24) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp53 = tmp6(tmp3[33])(sharedValue2);
      const tmp56 = tmp6(tmp3[37])();
      const token = tmp2(tmp3[38]).useToken(tmp6(tmp3[39]).colors.INTERACTIVE_TEXT_HOVER, theme);
      const obj7 = { userId, user: obj4, channelId, guildId: guild_id, displayProfile: tmp6ResultResult, guildMember: stateFromStores2 };
      const tmp58 = tmp6(tmp3[40])(obj7);
      closure_26 = tmp58;
      const items9 = [obj4, channelId];
      const items10 = [stateFromStores, userId];
      const memo3 = obj8.useMemo(() => {
        let result = null != obj4;
        if (result) {
          result = ApplicationPresenceUtils.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items9);
      const effect = obj8.useEffect(() => {
        if (null == stateFromStores) {
          const user = UserActionCreators.getUser(userId);
        }
      }, items10);
      const items11 = [obj4, guild_id, channelId];
      const effect1 = obj8.useEffect(() => {
        let tmp = null == obj4;
        if (!tmp) {
          let isNonUserBotResult = obj.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !isChangelogUserDefault(obj.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: guild_id, channelId: null };
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          obj2.channelId = channelId;
          maybeFetchUserProfileDefault(obj.id, avatarURL, obj2);
        }
      }, items11);
      const items12 = [tmp58, tmp6ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj8.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == closure_13;
        }
        if (!tmp) {
          let tmp6 = null == guild_id;
          if (!tmp6) {
            prop = undefined;
            if (stateFromStores2 != null) {
              prop = stateFromStores2.fullProfileLoadedTimestamp;
            }
            tmp6 = null != prop;
          }
          if (tmp6) {
            AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_26);
            closure_17(true);
          }
        }
      }, items12);
      let skuId4;
      if (pendingAvatarDecoration != null) {
        skuId4 = pendingAvatarDecoration.skuId;
      }
      const items13 = [skuId4, , , ];
      let skuId5;
      if (pendingProfileEffect != null) {
        skuId5 = pendingProfileEffect.skuId;
      }
      items13[1] = skuId5;
      let skuId6;
      if (pendingProfileFrame != null) {
        skuId6 = pendingProfileFrame.skuId;
      }
      items13[2] = skuId6;
      items13[3] = prop;
      const effect3 = obj8.useEffect(() => {
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop, sku_id: null };
          let skuId;
          if (pendingAvatarDecoration != null) {
            skuId = pendingAvatarDecoration.skuId;
          }
          if (skuId == null) {
            let skuId1;
            if (pendingProfileEffect != null) {
              skuId1 = pendingProfileEffect.skuId;
            }
            skuId = skuId1;
          }
          if (skuId == null) {
            let skuId2;
            if (pendingProfileFrame != null) {
              skuId2 = pendingProfileFrame.skuId;
            }
            skuId = skuId2;
          }
          obj.sku_id = skuId;
          AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj);
          const tmp3Result = AnalyticsUtilsDefault;
        }
      }, items13);
      const items14 = [onClose];
      const effect4 = obj8.useEffect(() => () => {
        if (onClose != null) {
          tmp();
        }
      }, items14);
      const effect5 = obj8.useEffect(() => {
        function handleNavigationChange() {
          key = undefined;
          if (rootNavigationRef != null) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            if (currentRoute != null) {
              key = currentRoute.key;
            }
          }
          if (key !== key) {
            channelId(localUser[47]).hideAllActionSheets();
            const obj2 = channelId(localUser[47]);
          }
        }
        rootNavigationRef = rootNavigationRef(handleNavigationChange[46]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            let currentRoute = rootNavigationRef.getCurrentRoute();
            let key;
            if (currentRoute != null) {
              key = currentRoute.key;
            }
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => {
              rootNavigationRef.removeListener("state", handleNavigationChange);
            };
          }
        }
      }, []);
      const tmp2Result21 = tmp2(tmp3[38]);
      navigation = tmp2(tmp3[48]).useNavigation();
      if (null == obj4) {
        const obj9 = { value: analyticsLocations, children: null };
        const obj10 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt;
        if (tmp6ResultResult != null) {
          fetchStartedAt = tmp6ResultResult.fetchStartedAt;
        }
        obj10.fetchStartedAt = fetchStartedAt;
        let fetchEndedAt;
        if (tmp6ResultResult != null) {
          fetchEndedAt = tmp6ResultResult.fetchEndedAt;
        }
        obj10.fetchEndedAt = fetchEndedAt;
        let isLoaded;
        if (tmp6ResultResult != null) {
          isLoaded = tmp6ResultResult.isLoaded;
        }
        obj10.isLoaded = isLoaded;
        const obj11 = { children: null };
        const obj12 = { style: { marginTop: 42 }, Illustration: tmp2(tmp3[52]).NoResults, body: null };
        const intl2 = tmp2(tmp3[53]).intl;
        obj12.body = intl2.string(tmp2(tmp3[53]).t.eAn6z2);
        obj11.children = first(tmp2(tmp3[51]).EmptyState, obj12);
        obj10.children = first(tmp2(tmp3[50]).BottomSheet, obj11);
        obj9.children = first(tmp2(tmp3[23]).UserProfileAnalyticsProvider, obj10);
        let tmp104Result8 = tmp100(tmp2(tmp3[20]).AnalyticsLocationProvider, obj9);
      } else {
        const obj13 = { theme, primaryColor, secondaryColor, children: null };
        const obj14 = { value: analyticsLocations, children: null };
        const obj15 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt1;
        if (tmp6ResultResult != null) {
          fetchStartedAt1 = tmp6ResultResult.fetchStartedAt;
        }
        obj15.fetchStartedAt = fetchStartedAt1;
        let fetchEndedAt1;
        if (tmp6ResultResult != null) {
          fetchEndedAt1 = tmp6ResultResult.fetchEndedAt;
        }
        obj15.fetchEndedAt = fetchEndedAt1;
        let isLoaded1;
        if (tmp6ResultResult != null) {
          isLoaded1 = tmp6ResultResult.isLoaded;
        }
        obj15.isLoaded = isLoaded1;
        const obj16 = { ref: bottomSheetRef.bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: tmp.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1, children: null };
        let tmp104Result = null != tmp6Result2Result;
        if (tmp104Result) {
          const obj17 = { animatedPosition: sharedValue };
          tmp104Result = tmp104(createUserProfileAnalyticsContext, obj17);
        }
        const items15 = [tmp104Result, , , ];
        const obj18 = { gradientHeight: diff, bannerHeight: tmp53 };
        items15[1] = first(tmp6(tmp3[55]), obj18);
        const obj19 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, scrollEventsHandlersHook: null, ref: null, children: null };
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        const obj20 = { pointerEvents: str2 };
        obj19.contentContainerStyle = obj20;
        let tmp74;
        if (tmp2Result23.isIOS()) {
          tmp74 = memo;
        }
        obj19.scrollEventsHandlersHook = tmp74;
        obj19.ref = ref;
        const obj21 = { style: tmp.profileContainer, onLayout: callback, children: null };
        const obj22 = { user: obj4, channel: stateFromStores1, guildId: null, displayProfile: null, disableCalls: null, disableMessage: null, isVoiceContext: null, location: null, disableStatus: null, scrollViewRef: null, isPreviewingChanges: null, navigateToShop: null, navigateToPremium: null, showUserProfileActionSheet: null, initialSection: null, scrollPosition: null };
        let tmp76;
        if (flag) {
          tmp76 = guild_id;
        }
        obj22.guildId = tmp76;
        obj22.displayProfile = tmp6ResultResult;
        obj22.disableCalls = disableCalls;
        obj22.disableMessage = disableMessage;
        obj22.isVoiceContext = isVoiceContext;
        obj22.location = _location;
        obj22.disableStatus = memo3;
        obj22.scrollViewRef = ref;
        obj22.isPreviewingChanges = isPreviewingChanges;
        obj22.navigateToShop = function navigateToShop() {
          return openUserSettings.openUserSettings({ screen: state.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose });
        };
        obj22.navigateToPremium = function navigateToPremium() {
          return openUserSettings.openUserSettings({ screen: state.PREMIUM, onClose: handleUserSettingsClose });
        };
        obj22.showUserProfileActionSheet = function showUserProfileActionSheetWithParams() {
          const merged = Object.assign(createUserProfileAnalyticsContext);
          showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, localUser });
        };
        obj22.initialSection = userId.initialSection;
        tmp2Result23 = tmp2(tmp3[56]);
        let tmp77;
        if (tmp2Result24.isIOS()) {
          tmp77 = sharedValue2;
        }
        obj22.scrollPosition = tmp77;
        if (obj4.isNonUserBot()) {
          const obj23 = {};
          let merged = Object.assign(obj22);
          let tmp104Result5 = tmp104(tmp6(tmp3[58]), obj23);
          const tmp6Result15 = tmp6(tmp3[58]);
        } else if (obj4.bot) {
          const obj24 = {};
          const merged1 = Object.assign(obj22);
          tmp104Result5 = tmp104(tmp6(tmp3[59]), obj24);
          const tmp6Result16 = tmp6(tmp3[59]);
        } else {
          const obj25 = {};
          const merged2 = Object.assign(obj22);
          tmp104Result5 = tmp104(tmp6(tmp3[60]), obj25);
          const tmp6Result17 = tmp6(tmp3[60]);
        }
        const items16 = [tmp104Result5, ];
        let tmp104Result6 = null != tmp46Result;
        if (tmp104Result6) {
          const obj26 = { style: null, pointerEvents: "none", children: null };
          const items17 = [tmp.profileEffect, , ];
          const obj27 = { height: diff };
          items17[1] = obj27;
          items17[2] = animatedStyle;
          obj26.style = items17;
          const obj28 = { skuId: tmp46Result.skuId, bannerAdjustment: 0 };
          obj26.children = tmp104(tmp6(tmp3[61]), obj28);
          tmp104Result6 = tmp104(tmp6(tmp3[14]).View, obj26);
        }
        const obj29 = { children: null };
        items16[1] = tmp104Result6;
        obj21.children = items16;
        obj29.children = closure_17(sharedValue, obj21);
        obj19.children = first(sharedValue, obj29);
        items15[2] = first(tmp2(tmp3[13]).BottomSheetScrollView, obj19);
        let tmp104Result7 = null == tmp6Result2Result;
        if (tmp104Result7) {
          const obj30 = { variant: "floating", tabStyle: null, onPress: null };
          const obj31 = { backgroundColor: token };
          obj30.tabStyle = obj31;
          obj30.onPress = bottomSheetClose;
          tmp104Result7 = tmp104(tmp2(tmp3[62]).ActionSheetHeaderBar, obj30);
        }
        items15[3] = tmp104Result7;
        obj16.children = items15;
        const items18 = [closure_17(tmp2(tmp3[50]).BottomSheet, obj16), , ];
        let tmp105Result = null != tmp6Result2Result;
        if (tmp105Result) {
          const obj32 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
          const obj33 = { frame: tmp6Result2Result, profileThemeType: guild_id.ACTION_SHEET, frameOrder: tmp2(tmp3[30]).ProfileFrameLayerOrder.FRONT, containerWidth: first1 };
          const items19 = [tmp104(tmp6(tmp3[29]), obj33), ];
          const obj34 = { variant: "floating", tabStyle: null, onPress: null };
          const obj35 = { backgroundColor: token };
          obj34.tabStyle = obj35;
          obj34.onPress = bottomSheetClose;
          items19[1] = tmp104(tmp2(tmp3[62]).ActionSheetHeaderBar, obj34);
          obj32.children = items19;
          tmp105Result = tmp105(closure_26, obj32);
          const tmp6Result18 = tmp6(tmp3[29]);
        }
        items18[1] = tmp105Result;
        if (!isPreviewingChanges) {
          items18[2] = isPreviewingChanges;
          obj15.children = items18;
          obj14.children = tmp105(tmp2(tmp3[23]).UserProfileAnalyticsProvider, obj15);
          obj13.children = tmp104(tmp2(tmp3[20]).AnalyticsLocationProvider, obj14);
          tmp104Result8 = tmp104(tmp2(tmp3[54]).ThemeContextProvider, obj13);
        } else {
          const obj36 = { theme: tmp56, primaryColor: null, secondaryColor: null, children: null };
          const intl = tmp2(tmp3[53]).intl;
          if (setting === tmp2(tmp3[64]).ProfileVisibility.FRIENDS_ONLY) {
            let mNZcD8 = tmp2(tmp3[53]).t.mNZcD8;
          } else {
            mNZcD8 = tmp2(tmp3[53]).t["wSnI/0"];
          }
          const obj37 = { text: intl.string(mNZcD8), isExpanded: true };
          obj36.children = tmp104(tmp2(tmp3[63]).ActionSheetBackdropToast, obj37);
          tmp104(tmp2(tmp3[54]).ThemeContextProvider, obj36);
        }
        tmp2Result24 = tmp2(tmp3[56]);
      }
      return tmp104Result8;
    }
    if (tmp6ResultResult != null) {
      const profileEffect = tmp6ResultResult.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp6Result13 = tmp6(tmp3[28]);
  }
  if (tmp6ResultResult != null) {
    const profileFrame = tmp6ResultResult.profileFrame;
    if (profileFrame != null) {
      skuId = profileFrame.skuId;
    }
  }
}));

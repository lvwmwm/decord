// Module ID: 7645
// Function ID: 7646
// Name: UserProfileActionSheet
// Dependencies: [32, 19, 17, 2045, 2108, 1372, 7605, 6629, 1074, 6572, 21, 4836, 6045, 4566, 1613, 504, 7631, 6583, 6603, 7615, 2021, 7635, 5438, 7646, 7658, 7659, 7660, 7666, 7652, 7672, 7673, 7676, 1479, 5994, 7670, 4767, 4531, 576, 7644, 7677, 7626, 2097, 7632, 1241, 4693, 4800, 1485, 7624, 6571, 1177, 7678, 1115, 4540, 7683, 1364, 6800, 7686, 12543, 12634, 8264, 6575, 12702, 1186, 2]

// Module 7645 (UserProfileActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import isChangelogUserDefault from "isChangelogUser" /* 2097 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import Constants2 from "Constants" /* 6629 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 7652 */;
import ProfileFrameDefault from "ProfileFrame" /* 7666 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7670 */;
import ApplicationPresenceUtils from "ApplicationPresenceUtils" /* 7677 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, navigation, set;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const obj = BottomSheetModal;
  const animatedPosition2 = obj.useBottomSheet().animatedPosition;
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
  const obj2 = ReanimatedRexport;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(animatedPosition) {
  let items;
  animatedPosition = animatedPosition.animatedPosition;
  const animatedIndex = animatedPosition.animatedIndex;
  const safeAreaTop = animatedPosition.safeAreaTop;
  const children = animatedPosition.children;
  let obj = animatedPosition(safeAreaTop[13]);
  const fn = function c() {
    let interpolate;
    let items;
    let value;
    const obj = { transform: items, opacity: interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP) };
    items = [{ translateY: animatedPosition.get() + safeAreaTop }];
    ({ translateY: animatedPosition.get() + safeAreaTop });
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = animatedIndex.get();
    return obj;
  };
  const obj2 = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[13]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[13]).Extrapolation };
  fn.__closure = obj2;
  fn.__workletHash = 16546700050596;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, pointerEvents: "box-none", children };
  items = [absoluteFill.absoluteFill, animatedStyle];
  return closure_16(animatedIndex(safeAreaTop[13]).View, obj3);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
const __initData = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
const __initData2 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
const __initData3 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_24 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let closure_25 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
const memoResult = react.memo(function UserProfileActionSheet(userId) {
  let ActionSheetBackdropToast;
  let AnalyticsLocationProvider2;
  let BottomSheet2;
  let EmptyState;
  let UserProfileAnalyticsProvider;
  let UserProfileAnalyticsProvider2;
  let _location;
  let avatarDecoration1;
  let collectibleProfileOverrides;
  let disableCalls;
  let disableMessage;
  let fetchEndedAt;
  let fetchEndedAt1;
  let fetchStartedAt;
  let fetchStartedAt1;
  let intl2;
  let isLoaded;
  let isLoaded1;
  let isPreviewingChanges;
  let isVoiceContext;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let messageId;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj20;
  let obj28;
  let obj29;
  let obj31;
  let obj35;
  let obj37;
  let openedAt;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingThemeColors;
  let primaryColor;
  let roleId;
  let secondaryColor;
  let sessionId;
  let showGuildProfile;
  let skuId;
  let theme;
  let tmp54;
  let tmp78;
  let tmp80;
  let tmp82;
  userId = userId.userId;
  const channelId = userId.channelId;
  const localUser = userId.localUser;
  const onClose = userId.onClose;
  ({ openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId, disableCalls, disableMessage, isVoiceContext, location: _location } = userId);
  if (isPreviewingChanges === undefined) {
    isPreviewingChanges = false;
  }
  ({ collectibleProfileOverrides, showGuildProfile } = userId);
  if (showGuildProfile === undefined) {
    showGuildProfile = true;
  }
  let prop = userId.sourceAnalyticsLocations;
  if (prop === undefined) {
    prop = [];
  }
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  let closure_13;
  let analyticsLocations;
  let sharedValue2;
  let first;
  let closure_17;
  let first1;
  let closure_19;
  let avatarDecoration;
  let profileEffect1;
  let profileFrame1;
  let createUserProfileAnalyticsContext;
  closure_24 = undefined;
  let width;
  let closure_26;
  navigation = undefined;
  function handleUserSettingsClose() {
    navigation.goBack();
    const obj = { sourceAnalyticsLocations: analyticsLocations, localUser };
    const tmp2 = showUserProfileActionSheetDefault;
    const merged = Object.assign(createUserProfileAnalyticsContext);
    tmp2(obj);
  }
  const initialSection = userId.initialSection;
  let tmp2 = first1();
  const tmp3 = userId;
  const tmp4 = localUser;
  let obj = userId(localUser[13]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = userId(localUser[13]);
  const sharedValue1 = obj2.useSharedValue(-1);
  let tmp7 = channelId;
  const top = channelId(localUser[14])().top;
  let obj3 = userId(localUser[15]);
  let items = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj4 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp10;
    if (id === userId) {
      tmp10 = localUser;
    }
    obj4 = tmp10;
  }
  const tmp3Result = tmp3(tmp4[15]);
  const items1 = [sharedValue1];
  const items2 = [channelId];
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const items3 = [top];
  const tmp3Result13 = tmp3(tmp4[15]);
  stateFromStores2 = tmp3Result13.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id1;
  const tmp7Result = tmp7(tmp4[16]);
  if (obj4 != null) {
    id1 = obj4.id;
  }
  if (id1 == null) {
    id1 = closure_13;
  }
  let tmp16;
  if (showGuildProfile) {
    tmp16 = guild_id;
  }
  const tmp7ResultResult = tmp7Result(id1, tmp16);
  closure_13 = tmp7ResultResult;
  const items4 = [];
  const tmp7Result10 = tmp7(tmp4[17]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items4, prop, 0);
  items4[arraySpreadResult] = tmp7(tmp4[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp7Result10(items4).analyticsLocations;
  const tmp3Result14 = tmp3(tmp4[19]);
  const bottomSheetRef1 = tmp3Result14.useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const ref = isPreviewingChanges.useRef(null);
  const tmp3Result15 = tmp3(tmp4[13]);
  sharedValue2 = tmp3Result15.useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = isPreviewingChanges.useMemo(() => (arg0, arg1, arg2) => {
    let animatedScrollableState;
    let workletCallback;
    const obj = animatedScrollableState(closure_1_2[12]);
    const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(arg0, arg1, arg2);
    const obj2 = animatedScrollableState(closure_1_2[12]);
    animatedScrollableState = obj2.useBottomSheetInternal().animatedScrollableState;
    const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
    const fn = function s(contentOffset, arg1) {
      if (handleOnScroll != null) {
        tmp(contentOffset, arg1);
      }
      set = animatedScrollableState.set;
      const value = animatedScrollableState.get();
      let num = 0;
      if (value !== sharedValue2(localUser[12]).SCROLLABLE_STATE.LOCKED) {
        num = contentOffset.contentOffset.y;
      }
      const result = set(num);
    };
    const obj3 = animatedScrollableState(closure_1_2[13]);
    fn.__closure = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(closure_1_2[12]).SCROLLABLE_STATE };
    fn.__workletHash = 13254130622789;
    fn.__initData = __initData;
    const items = [handleOnScroll, animatedScrollableState];
    const obj5 = { handleOnScroll: workletCallback };
    ({ defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(closure_1_2[12]).SCROLLABLE_STATE });
    workletCallback = obj3.useWorkletCallback(fn, items);
    const merged = Object.assign(scrollEventsHandlersDefault);
    return obj5;
  }, items5);
  const tmp3Result16 = tmp3(tmp4[13]);
  class F {
    constructor() {
      let transform;
      const obj = sharedValue2;
      if (sharedValue2.get() <= 0) {
        const items = [{ translateY: obj.get() }];
        transform = items;
        const obj2 = { translateY: obj.get() };
      } else {
        transform = [];
      }
      return { transform };
    }
  }
  F.__closure = { scrollPosition: sharedValue2 };
  F.__workletHash = 6237718973214;
  F.__initData = width;
  const animatedStyle = tmp3Result16.useAnimatedStyle(F);
  const tmp25 = onClose(isPreviewingChanges.useState(false), 2);
  first = tmp25[0];
  closure_17 = tmp25[1];
  const tmp27 = onClose(isPreviewingChanges.useState(0), 2);
  first1 = tmp27[0];
  closure_19 = tmp27[1];
  const callback = isPreviewingChanges.useCallback((nativeEvent) => {
    closure_19(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp3(tmp4[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const items6 = [obj4];
  const tmp3Result17 = tmp3(tmp4[15]);
  const stateFromStoresObject = tmp3Result17.useStateFromStoresObject(items6, () => obj4.getPendingChanges());
  avatarDecoration = undefined;
  ({ pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame } = stateFromStoresObject);
  if (collectibleProfileOverrides != null) {
    avatarDecoration = collectibleProfileOverrides.avatarDecoration;
  }
  if (avatarDecoration == null) {
    avatarDecoration = pendingAvatarDecoration;
  }
  profileEffect1 = undefined;
  if (collectibleProfileOverrides != null) {
    profileEffect1 = collectibleProfileOverrides.profileEffect;
  }
  if (profileEffect1 == null) {
    profileEffect1 = pendingProfileEffect;
  }
  profileFrame1 = undefined;
  if (collectibleProfileOverrides != null) {
    profileFrame1 = collectibleProfileOverrides.profileFrame;
  }
  if (profileFrame1 == null) {
    profileFrame1 = pendingProfileFrame;
  }
  const tmp3Result18 = tmp3(tmp4[21]);
  createUserProfileAnalyticsContext = tmp3Result18.useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile });
  if (isPreviewingChanges) {
    let skuId2;
    if (undefined !== profileFrame1) {
      let skuId1;
      if (profileFrame1 != null) {
        skuId1 = profileFrame1.skuId;
      }
      skuId = skuId1;
    }
    const tmp3Result19 = tmp3(tmp4[22]);
    const isScreenLandscape = tmp3Result19.useIsScreenLandscape();
    let tmp39;
    const tmp7Result11 = tmp7(tmp4[23]);
    if (!isScreenLandscape) {
      tmp39 = skuId;
    }
    const tmp7Result2Result = tmp7Result11(tmp39);
    closure_24 = tmp7Result2Result;
    let tmp42;
    const tmp7Result12 = tmp7(tmp4[24]);
    if (!isScreenLandscape) {
      tmp42 = skuId;
    }
    let obj5 = { skuId: tmp42, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp7Result12(obj5);
    const tmp3Result20 = tmp3(tmp4[25]);
    const isShopThisLookMobileEnabled = tmp3Result20.useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp46;
    const tmp7Result13 = tmp7(tmp4[26]);
    if (showGuildProfile) {
      tmp46 = guild_id;
    }
    tmp7Result13(userId, tmp46, isShopThisLookMobileEnabled);
    const items7 = [tmp7Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj8.useMemo(() => {
      let obj2;
      let tmp10;
      let tmp2 = null;
      if (null != closure_24) {
        const obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: authStore3(tmp10, obj2) };
        obj2 = { frame: tmp, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, containerWidth: first1 };
        tmp10 = ProfileFrameDefault;
        tmp2 = authStore3(ActionSheetAlignedView, obj);
      }
      return tmp2;
    }, items7);
    if (isPreviewingChanges) {
      let tmp108Result7;
      if (undefined !== profileEffect1) {
        let skuId3;
        if (profileEffect1 != null) {
          skuId3 = profileEffect1.skuId;
        }
        skuId2 = skuId3;
      }
      const tmp50Result = tmp50(skuId2);
      const obj6 = { user: obj4, displayProfile: tmp7ResultResult, pendingThemeColors: tmp54 };
      tmp54 = undefined;
      const tmp7Result14 = tmp7(tmp4[30]);
      if (isPreviewingChanges) {
        tmp54 = pendingThemeColors;
      }
      ({ theme, primaryColor, secondaryColor } = tmp7Result14(obj6));
      tmp7Result14(obj6);
      const tmp57 = tmp7(tmp4[31])(sharedValue2);
      size = tmp7(tmp4[32])();
      width = size.width;
      const diff = size.height - tmp3(tmp4[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp7Result2Result, width];
      const memo2 = obj8.useMemo(() => {
        const tmp = isPreviewingChanges;
        if (tmp) {
          if (null != closure_24) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp2, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp60 = tmp7(tmp4[35])();
      const tmp3Result21 = tmp3(tmp4[36]);
      const token = tmp3Result21.useToken(tmp7(tmp4[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      const obj7 = { userId, user: obj4, channelId, guildId: guild_id, displayProfile: tmp7ResultResult, guildMember: stateFromStores2 };
      const tmp62 = tmp7(tmp4[38])(obj7);
      closure_26 = tmp62;
      const items9 = [obj4, channelId];
      const items10 = [stateFromStores, userId];
      const memo3 = obj8.useMemo(() => {
        let result = null != obj4;
        if (result) {
          const obj = ApplicationPresenceUtils;
          result = obj.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items9);
      const effect = obj8.useEffect(() => {
        if (null == stateFromStores) {
          const obj = UserActionCreators;
          const user = obj.getUser(userId);
        }
      }, items10);
      const items11 = [obj4, guild_id, channelId];
      const effect1 = obj8.useEffect(() => {
        let tmp10;
        let tmp = null == obj4;
        if (!tmp) {
          tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
          const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
        }
        if (!tmp) {
          const id = obj.id;
          const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: guild_id, channelId: tmp10 };
          const tmp7 = maybeFetchUserProfileDefault;
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          tmp7(id, avatarURL, obj2);
          tmp10 = channelId;
        }
      }, items11);
      const items12 = [tmp62, tmp7ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj8.useEffect(() => {
        const tmp = first || null == closure_13;
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
            const obj = AnalyticsUtilsDefault;
            obj.track(stateFromStores2.OPEN_POPOUT, closure_26);
            closure_17(true);
          }
        }
      }, items12);
      let skuId4;
      const useEffect = obj8.useEffect;
      if (avatarDecoration != null) {
        skuId4 = avatarDecoration.skuId;
      }
      const items13 = [skuId4, , , ];
      let skuId5;
      if (profileEffect1 != null) {
        skuId5 = profileEffect1.skuId;
      }
      items13[1] = skuId5;
      let skuId6;
      if (profileFrame1 != null) {
        skuId6 = profileFrame1.skuId;
      }
      items13[2] = skuId6;
      items13[3] = prop;
      const effect3 = useEffect(() => {
        let skuId;
        const atResult = prop.at(-1);
        const tmp = prop;
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: tmp, sku_id: skuId };
          skuId = undefined;
          const track = tmp3(1241).track;
          const OPEN_MODAL = stateFromStores2.OPEN_MODAL;
          AnalyticsUtilsDefault;
          if (avatarDecoration != null) {
            skuId = avatarDecoration.skuId;
          }
          if (skuId == null) {
            let skuId1;
            if (profileEffect1 != null) {
              skuId1 = profileEffect1.skuId;
            }
            skuId = skuId1;
          }
          if (skuId == null) {
            let skuId2;
            if (profileFrame1 != null) {
              skuId2 = profileFrame1.skuId;
            }
            skuId = skuId2;
          }
          track(OPEN_MODAL, obj);
        }
      }, items13);
      const items14 = [onClose];
      const effect4 = obj8.useEffect(() => () => {
        if (onClose != null) {
          tmp();
        }
      }, items14);
      const effect5 = obj8.useEffect(() => {
        let rootNavigationRef;
        function handleNavigationChange() {
          key = undefined;
          const obj = rootNavigationRef;
          if (rootNavigationRef != null) {
            const currentRoute = obj.getCurrentRoute();
            if (currentRoute != null) {
              key = currentRoute.key;
            }
          }
          if (key !== key) {
            const obj2 = channelId(localUser[45]);
            obj2.hideAllActionSheets();
          }
        }
        let obj = rootNavigationRef(handleNavigationChange[44]);
        rootNavigationRef = obj.getRootNavigationRef();
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
      const tmp3Result22 = tmp3(tmp4[46]);
      navigation = tmp3Result22.useNavigation();
      if (null == obj4) {
        const obj9 = { value: analyticsLocations, children: first(UserProfileAnalyticsProvider, obj10) };
        const AnalyticsLocationProvider = tmp3(tmp4[17]).AnalyticsLocationProvider;
        obj10 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt, fetchEndedAt, isLoaded, children: first(BottomSheet2, obj11) };
        fetchStartedAt = undefined;
        UserProfileAnalyticsProvider = tmp3(tmp4[21]).UserProfileAnalyticsProvider;
        if (tmp7ResultResult != null) {
          fetchStartedAt = tmp7ResultResult.fetchStartedAt;
        }
        fetchEndedAt = undefined;
        if (tmp7ResultResult != null) {
          fetchEndedAt = tmp7ResultResult.fetchEndedAt;
        }
        isLoaded = undefined;
        if (tmp7ResultResult != null) {
          isLoaded = tmp7ResultResult.isLoaded;
        }
        obj11 = { children: first(EmptyState, obj12) };
        BottomSheet2 = tmp3(tmp4[48]).BottomSheet;
        obj12 = { style: { marginTop: 42 }, Illustration: tmp3(tmp4[50]).NoResults, body: intl2.string(tmp3(tmp4[51]).t.eAn6z2) };
        EmptyState = tmp3(tmp4[49]).EmptyState;
        intl2 = tmp3(tmp4[51]).intl;
        tmp108Result7 = tmp104(AnalyticsLocationProvider, obj9);
      } else {
        let tmp108Result4;
        const obj13 = { theme, primaryColor, secondaryColor, children: first(AnalyticsLocationProvider2, obj14) };
        const ThemeContextProvider2 = tmp3(tmp4[52]).ThemeContextProvider;
        obj14 = { value: analyticsLocations, children: closure_17(UserProfileAnalyticsProvider2, obj15) };
        AnalyticsLocationProvider2 = tmp3(tmp4[17]).AnalyticsLocationProvider;
        obj15 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: fetchStartedAt1, fetchEndedAt: fetchEndedAt1, isLoaded: isLoaded1, children: items18 };
        fetchStartedAt1 = undefined;
        UserProfileAnalyticsProvider2 = tmp3(tmp4[21]).UserProfileAnalyticsProvider;
        if (tmp7ResultResult != null) {
          fetchStartedAt1 = tmp7ResultResult.fetchStartedAt;
        }
        fetchEndedAt1 = undefined;
        if (tmp7ResultResult != null) {
          fetchEndedAt1 = tmp7ResultResult.fetchEndedAt;
        }
        isLoaded1 = undefined;
        if (tmp7ResultResult != null) {
          isLoaded1 = tmp7ResultResult.isLoaded;
        }
        let tmp108Result = null != tmp7Result2Result;
        const obj16 = { ref: bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: tmp2.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1, children: items15 };
        BottomSheet = tmp3(tmp4[48]).BottomSheet;
        if (tmp108Result) {
          const obj17 = { animatedPosition: sharedValue };
          tmp108Result = tmp108(profileEffect1, obj17);
        }
        items15 = [tmp108Result, , , ];
        const obj18 = { gradientHeight: diff, bannerHeight: tmp57 };
        items15[1] = first(tmp7(tmp4[53]), obj18);
        let str2;
        const obj19 = { scrollsToTop: false, style: tmp2.container, contentContainerStyle: obj20, scrollEventsHandlersHook: tmp78, ref, children: first(sharedValue, obj29) };
        const BottomSheetScrollView = tmp3(tmp4[12]).BottomSheetScrollView;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        tmp78 = undefined;
        obj20 = { pointerEvents: str2 };
        const tmp3Result23 = tmp3(tmp4[54]);
        if (tmp3Result23.isIOS()) {
          tmp78 = memo;
        }
        const obj22 = {
          user: obj4,
          channel: stateFromStores1,
          guildId: tmp80,
          displayProfile: tmp7ResultResult,
          disableCalls,
          disableMessage,
          isVoiceContext,
          location: _location,
          disableStatus: memo3,
          scrollViewRef: ref,
          isPreviewingChanges,
          avatarDecorationOverride: avatarDecoration1,
          navigateToShop() {
                  const obj = openUserSettings;
                  const obj2 = { screen: analyticsLocations.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
          navigateToPremium() {
                  const obj = openUserSettings;
                  const obj2 = { screen: analyticsLocations.PREMIUM, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
          showUserProfileActionSheet: function showUserProfileActionSheetWithParams() {
                  const obj = { sourceAnalyticsLocations: analyticsLocations, localUser };
                  const tmp = showUserProfileActionSheetDefault;
                  const merged = Object.assign(createUserProfileAnalyticsContext);
                  tmp(obj);
                },
          initialSection,
          scrollPosition: tmp82
        };
        tmp80 = undefined;
        const obj21 = { style: tmp2.profileContainer, onLayout: callback, children: items16 };
        if (showGuildProfile) {
          tmp80 = guild_id;
        }
        avatarDecoration1 = undefined;
        if (collectibleProfileOverrides != null) {
          avatarDecoration1 = collectibleProfileOverrides.avatarDecoration;
        }
        tmp82 = undefined;
        const tmp3Result24 = tmp3(tmp4[54]);
        if (tmp3Result24.isIOS()) {
          tmp82 = sharedValue2;
        }
        if (obj4.isNonUserBot()) {
          const obj23 = {};
          const tmp7Result15 = tmp7(tmp4[56]);
          let merged = Object.assign(obj22);
          tmp108Result4 = tmp108(tmp7Result15, obj23);
        } else if (obj4.bot) {
          const obj24 = {};
          const tmp7Result16 = tmp7(tmp4[57]);
          const merged1 = Object.assign(obj22);
          tmp108Result4 = tmp108(tmp7Result16, obj24);
        } else {
          const obj25 = {};
          const tmp7Result17 = tmp7(tmp4[58]);
          const merged2 = Object.assign(obj22);
          tmp108Result4 = tmp108(tmp7Result17, obj25);
        }
        items16 = [tmp108Result4, ];
        let tmp108Result5 = null != tmp50Result;
        if (tmp108Result5) {
          const obj26 = { style: items17, pointerEvents: "none", children: first(tmp7(tmp4[59]), obj28) };
          items17 = [tmp2.profileEffect, , ];
          const obj27 = { height: diff };
          items17[1] = obj27;
          items17[2] = animatedStyle;
          const View = tmp7(tmp4[13]).View;
          obj28 = { skuId: tmp50Result.skuId, bannerAdjustment: 0 };
          tmp108Result5 = tmp108(View, obj26);
        }
        items16[1] = tmp108Result5;
        obj29 = { children: closure_17(sharedValue, obj21) };
        items15[2] = first(BottomSheetScrollView, obj19);
        let tmp108Result6 = null == tmp7Result2Result;
        if (tmp108Result6) {
          const obj30 = { variant: "floating", tabStyle: obj31, onPress: bottomSheetClose };
          obj31 = { backgroundColor: token };
          tmp108Result6 = tmp108(tmp3(tmp4[60]).ActionSheetHeaderBar, obj30);
        }
        items15[3] = tmp108Result6;
        items18 = [closure_17(BottomSheet, obj16), , ];
        let tmp109Result = null != tmp7Result2Result;
        if (tmp109Result) {
          const obj32 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: items19 };
          const obj33 = { frame: tmp7Result2Result, profileThemeType: guild_id.ACTION_SHEET, frameOrder: tmp3(tmp4[28]).ProfileFrameLayerOrder.FRONT, containerWidth: first1 };
          const tmp7Result18 = tmp7(tmp4[27]);
          items19 = [first(tmp7Result18, obj33), ];
          const obj34 = { variant: "floating", tabStyle: obj35, onPress: bottomSheetClose };
          obj35 = { backgroundColor: token };
          items19[1] = first(tmp3(tmp4[60]).ActionSheetHeaderBar, obj34);
          tmp109Result = tmp109(createUserProfileAnalyticsContext, obj32);
        }
        items18[1] = tmp109Result;
        if (isPreviewingChanges) {
          let mNZcD8;
          const obj36 = { theme: tmp60, primaryColor: null, secondaryColor: null, children: first(ActionSheetBackdropToast, obj37) };
          const ThemeContextProvider = tmp3(tmp4[52]).ThemeContextProvider;
          ActionSheetBackdropToast = tmp3(tmp4[61]).ActionSheetBackdropToast;
          const intl = tmp3(tmp4[51]).intl;
          const string = intl.string;
          if (setting === tmp3(tmp4[62]).ProfileVisibility.FRIENDS_ONLY) {
            mNZcD8 = tmp3(tmp4[51]).t.mNZcD8;
          } else {
            mNZcD8 = tmp3(tmp4[51]).t["wSnI/0"];
          }
          obj37 = { text: string(mNZcD8), isExpanded: true };
          isPreviewingChanges = tmp108(ThemeContextProvider, obj36);
        }
        items18[2] = isPreviewingChanges;
        tmp108Result7 = tmp108(ThemeContextProvider2, obj13);
      }
      return tmp108Result7;
    }
    if (tmp7ResultResult != null) {
      const profileEffect = tmp7ResultResult.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
  }
  if (tmp7ResultResult != null) {
    const profileFrame = tmp7ResultResult.profileFrame;
    if (profileFrame != null) {
      skuId = profileFrame.skuId;
    }
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default memoResult;

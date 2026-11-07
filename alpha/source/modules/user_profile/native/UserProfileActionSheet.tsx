// Module ID: 8843
// Function ID: 8844
// Name: UserProfileActionSheet
// Dependencies: [32, 19, 17, 4989, 5052, 1385, 8802, 7437, 1072, 5389, 21, 5140, 5392, 1652, 1627, 504, 8828, 7387, 7412, 8812, 4965, 8832, 8844, 8845, 8857, 8858, 8859, 8866, 8851, 8872, 8873, 8876, 1493, 5714, 8870, 5369, 5724, 575, 8841, 8877, 8823, 5041, 8829, 1252, 5315, 5317, 8878, 5374, 1499, 8821, 5388, 1187, 8879, 1113, 5199, 8884, 1377, 7635, 8887, 15045, 15148, 9581, 5723, 15283, 1196, 2]

// Module 8843 (UserProfileActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _mod1652 from "module_1652" /* 1652 */;
import isChangelogUserDefault from "isChangelogUser" /* 5041 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5389 */;
import BottomSheetModal from "BottomSheetModal" /* 5392 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import Constants2 from "Constants" /* 7437 */;
import openUserSettings from "openUserSettings" /* 7635 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8821 */;
import UserActionCreators from "UserActionCreators" /* 8823 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8829 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8851 */;
import ProfileFrameDefault from "ProfileFrame" /* 8866 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8870 */;
import ApplicationPresenceUtils from "ApplicationPresenceUtils" /* 8877 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildMemberStore from "GuildMemberStore" /* 5052 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8802 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let constants, navigation, num, obj1, set;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
function UseAnimatedPosition(animatedPosition) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  animatedPosition = animatedPosition.animatedPosition;
  const obj = BottomSheetModal;
  const animatedPosition2 = obj.useBottomSheet().animatedPosition;
  const items = [closure_19, animatedPosition2];
  let c0;
  [tmp, tmp2] = items;
  const obj2 = _mod1652;
  class UserProfileActionSheetTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp2];
  UserProfileActionSheetTsx1.__closure = items1;
  UserProfileActionSheetTsx1.__workletHash = 10170177207562;
  UserProfileActionSheetTsx1.__initData = tmp;
  const items2 = [closure_20, animatedPosition];
  c0 = undefined;
  [tmp3, tmp4] = items2;
  class UserProfileActionSheetTsx2 {
    constructor(arg0) {
      return closure_0.set(animatedPosition);
    }
  }
  const items3 = [tmp4];
  UserProfileActionSheetTsx2.__closure = items3;
  UserProfileActionSheetTsx2.__workletHash = 15025652485949;
  UserProfileActionSheetTsx2.__initData = tmp3;
  const animatedReaction = obj2.useAnimatedReaction(UserProfileActionSheetTsx1, UserProfileActionSheetTsx2);
  return null;
}
function ActionSheetAlignedView(arg0) {
  let animatedIndex;
  let animatedPosition;
  let children;
  let items2;
  let safeAreaTop;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ animatedPosition, animatedIndex, safeAreaTop, children } = arg0);
  let items = [closure_22, animatedPosition, safeAreaTop, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[3] = _mod1652.interpolate;
  items[4] = animatedIndex;
  items[5] = _mod1652.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class UserProfileActionSheetTsx3 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateY: closure_0.get() + closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      obj.opacity = closure_2(closure_3.get(), [-1, 0], [0, 1], closure_4.CLAMP);
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
  UserProfileActionSheetTsx3.__closure = items1;
  UserProfileActionSheetTsx3.__workletHash = 8011994194653;
  UserProfileActionSheetTsx3.__initData = tmp3;
  const animatedStyle = useAnimatedStyle(UserProfileActionSheetTsx3);
  let obj = { style: items2, pointerEvents: "box-none", children };
  items2 = [hasOwnProperty.absoluteFill, animatedStyle];
  return authStore4(_modDef1652.View, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
let closure_19 = { code: "(function UserProfileActionSheetTsx1(){let[value]=this.__closure;return value.get();})" };
let closure_20 = { code: "(function UserProfileActionSheetTsx2(prepared){let[animatedPosition]=this.__closure;return animatedPosition.set(prepared);})" };
let closure_22 = { code: "(function UserProfileActionSheetTsx3(){let[animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation]=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};})" };
let closure_24 = { code: "(function UserProfileActionSheetTsx4(payload,context){let[defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE]=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);})" };
let closure_25 = { code: "(function UserProfileActionSheetTsx5(){let[scrollPosition]=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};})" };
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
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
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
  let tmp24;
  let tmp25;
  let tmp56;
  let tmp81;
  let tmp83;
  let tmp85;
  userId = userId.userId;
  const channelId = userId.channelId;
  const localUser = userId.localUser;
  const navigationReplace = userId.navigationReplace;
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
  let guild_id;
  let stateFromStores2;
  constants = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_18 = undefined;
  let first1;
  closure_20 = undefined;
  let avatarDecoration;
  let profileEffect1;
  let profileFrame1;
  let createUserProfileAnalyticsContext;
  closure_25 = undefined;
  let width;
  let closure_27;
  navigation = undefined;
  function handleUserSettingsClose() {
    navigation.goBack();
    const obj = { navigationReplace, sourceAnalyticsLocations: analyticsLocations, localUser };
    const tmp2 = showUserProfileActionSheetDefault;
    const merged = Object.assign(createUserProfileAnalyticsContext);
    tmp2(obj);
  }
  const initialSection = userId.initialSection;
  let tmp2 = closure_18();
  const tmp3 = userId;
  let tmp4 = localUser;
  let obj = userId(localUser[13]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = userId(localUser[13]);
  const sharedValue1 = obj2.useSharedValue(-1);
  let tmp7 = channelId;
  const top = channelId(localUser[14])().top;
  let obj3 = userId(localUser[15]);
  let items = [top];
  const stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(userId));
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
  let items1 = [sharedValue];
  let items2 = [channelId];
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const items3 = [sharedValue1];
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
    id1 = stateFromStores2;
  }
  let tmp16;
  if (showGuildProfile) {
    tmp16 = guild_id;
  }
  const tmp7ResultResult = tmp7Result(id1, tmp16);
  constants = tmp7ResultResult;
  const items4 = [];
  const tmp7Result10 = tmp7(tmp4[17]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items4, prop, 0);
  items4[arraySpreadResult] = tmp7(tmp4[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp7Result10(items4).analyticsLocations;
  const tmp3Result14 = tmp3(tmp4[19]);
  const bottomSheetRef1 = tmp3Result14.useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const ref = onClose.useRef(null);
  const tmp3Result15 = tmp3(tmp4[13]);
  sharedValue2 = tmp3Result15.useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = onClose.useMemo(() => (arg0, arg1, arg2) => {
    let callback;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    const obj = sharedValue2(localUser[12]);
    const scrollEventsHandlersDefault = obj.useScrollEventsHandlersDefault(arg0, arg1, arg2);
    const obj2 = sharedValue2(localUser[12]);
    const animatedScrollableState = obj2.useBottomSheetInternal().animatedScrollableState;
    const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
    const items = [createUserProfileAnalyticsContext, handleOnScroll, closure_0, animatedScrollableState, ];
    const useCallback = React.useCallback;
    items[4] = sharedValue2(localUser[12]).SCROLLABLE_STATE;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
    class UserProfileActionSheetTsx4 {
      constructor(arg0, arg1) {
        if (closure_0 != null) {
          tmp2 = arg1;
          tmpResult = tmp(arg0, arg1);
        }
        tmp4 = closure_1;
        set = closure_1.set;
        num = 0;
        if (closure_2.get() !== closure_3.LOCKED) {
          num = arg0.contentOffset.y;
        }
        result = set(num);
        return;
      }
    }
    const items1 = [tmp4, tmp5, tmp6, tmp7];
    UserProfileActionSheetTsx4.__closure = items1;
    UserProfileActionSheetTsx4.__workletHash = 16409642534780;
    UserProfileActionSheetTsx4.__initData = tmp3;
    const items2 = [handleOnScroll, animatedScrollableState];
    const obj3 = { handleOnScroll: callback };
    callback = useCallback(UserProfileActionSheetTsx4, items2);
    const merged = Object.assign(scrollEventsHandlersDefault);
    return obj3;
  }, items5);
  const items6 = [closure_25, sharedValue2];
  let c0;
  [tmp24, tmp25] = items6;
  const tmp3Result16 = tmp3(tmp4[13]);
  class UserProfileActionSheetTsx5 {
    constructor() {
      let transform;
      const obj = _undefined;
      if (_undefined.get() <= 0) {
        const items = [{ translateY: obj.get() }];
        transform = items;
        const obj2 = { translateY: obj.get() };
      } else {
        transform = [];
      }
      return { transform };
    }
  }
  const items7 = [tmp25];
  UserProfileActionSheetTsx5.__closure = items7;
  UserProfileActionSheetTsx5.__workletHash = 4107598224583;
  UserProfileActionSheetTsx5.__initData = tmp24;
  const animatedStyle = tmp3Result16.useAnimatedStyle(UserProfileActionSheetTsx5);
  const tmp27 = navigationReplace(onClose.useState(false), 2);
  first = tmp27[0];
  closure_18 = tmp27[1];
  const tmp29 = navigationReplace(onClose.useState(0), 2);
  first1 = tmp29[0];
  closure_20 = tmp29[1];
  let callback = obj8.useCallback((nativeEvent) => {
    closure_20(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp3(tmp4[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const items8 = [stateFromStores];
  const tmp3Result17 = tmp3(tmp4[15]);
  const stateFromStoresObject = tmp3Result17.useStateFromStoresObject(items8, () => stateFromStores.getPendingChanges());
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
    let tmp41;
    const tmp7Result11 = tmp7(tmp4[23]);
    if (!isScreenLandscape) {
      tmp41 = skuId;
    }
    const tmp7Result2Result = tmp7Result11(tmp41);
    closure_25 = tmp7Result2Result;
    let tmp44;
    const tmp7Result12 = tmp7(tmp4[24]);
    if (!isScreenLandscape) {
      tmp44 = skuId;
    }
    const obj5 = { skuId: tmp44, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp7Result12(obj5);
    const tmp3Result20 = tmp3(tmp4[25]);
    const isShopThisLookMobileEnabled = tmp3Result20.useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp48;
    const tmp7Result13 = tmp7(tmp4[26]);
    if (showGuildProfile) {
      tmp48 = guild_id;
    }
    tmp7Result13(userId, tmp48, isShopThisLookMobileEnabled);
    const items9 = [tmp7Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj8.useMemo(() => {
      let obj2;
      let tmp10;
      let tmp2 = null;
      if (null != closure_25) {
        const obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: authStore4(tmp10, obj2) };
        obj2 = { frame: tmp, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, containerWidth: first1 };
        tmp10 = ProfileFrameDefault;
        tmp2 = authStore4(ActionSheetAlignedView, obj);
      }
      return tmp2;
    }, items9);
    if (isPreviewingChanges) {
      let tmp111Result9;
      if (undefined !== profileEffect1) {
        let skuId3;
        if (profileEffect1 != null) {
          skuId3 = profileEffect1.skuId;
        }
        skuId2 = skuId3;
      }
      const tmp52Result = tmp52(skuId2);
      const obj6 = { user: obj4, displayProfile: tmp7ResultResult, pendingThemeColors: tmp56 };
      tmp56 = undefined;
      const tmp7Result14 = tmp7(tmp4[30]);
      if (isPreviewingChanges) {
        tmp56 = pendingThemeColors;
      }
      ({ theme, primaryColor, secondaryColor } = tmp7Result14(obj6));
      tmp7Result14(obj6);
      const tmp59 = tmp7(tmp4[31])(analyticsLocations);
      size = tmp7(tmp4[32])();
      width = size.width;
      const diff = size.height - tmp3(tmp4[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items10 = [isPreviewingChanges, tmp7Result2Result, width];
      let tmp112Result = null != tmp7Result2Result;
      const memo2 = obj8.useMemo(() => {
        const tmp = isPreviewingChanges;
        if (tmp) {
          if (null != closure_25) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp2, bound).overflowTop;
          }
        }
        return 0;
      }, items10);
      if (!tmp112Result) {
        tmp112Result = isPreviewingChanges;
      }
      const tmp63 = tmp7(tmp4[35])();
      const tmp3Result21 = tmp3(tmp4[36]);
      const token = tmp3Result21.useToken(tmp7(tmp4[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      const obj7 = { userId, user: obj4, channelId, guildId: guild_id, displayProfile: tmp7ResultResult, guildMember: stateFromStores2 };
      const tmp65 = tmp7(tmp4[38])(obj7);
      closure_27 = tmp65;
      const items11 = [obj4, channelId];
      const items12 = [stateFromStores, userId];
      const memo3 = obj8.useMemo(() => {
        let result = null != obj4;
        if (result) {
          const obj = ApplicationPresenceUtils;
          result = obj.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items11);
      const effect = obj8.useEffect(() => {
        if (null == stateFromStores) {
          const obj = UserActionCreators;
          const user = obj.getUser(userId);
        }
      }, items12);
      const items13 = [obj4, guild_id, channelId];
      const effect1 = obj8.useEffect(() => {
        let tmp10;
        let tmp = null == obj4;
        if (!tmp) {
          tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
          const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
        }
        if (!tmp) {
          const id = obj.id;
          const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, guildId: guild_id, channelId: tmp10 };
          const tmp7 = maybeFetchUserProfileDefault;
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          tmp7(id, avatarURL, obj2);
          tmp10 = channelId;
        }
      }, items13);
      const items14 = [tmp65, tmp7ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj8.useEffect(() => {
        const tmp = first || null == constants;
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
            obj.track(guild_id.OPEN_POPOUT, closure_27);
            closure_18(true);
          }
        }
      }, items14);
      let skuId4;
      const useEffect = obj8.useEffect;
      if (avatarDecoration != null) {
        skuId4 = avatarDecoration.skuId;
      }
      const items15 = [skuId4, , , ];
      let skuId5;
      if (profileEffect1 != null) {
        skuId5 = profileEffect1.skuId;
      }
      items15[1] = skuId5;
      let skuId6;
      if (profileFrame1 != null) {
        skuId6 = profileFrame1.skuId;
      }
      items15[2] = skuId6;
      items15[3] = prop;
      const effect3 = useEffect(() => {
        let skuId;
        const atResult = prop.at(-1);
        const tmp = prop;
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: tmp, sku_id: skuId };
          skuId = undefined;
          const track = tmp3(1252).track;
          const OPEN_MODAL = guild_id.OPEN_MODAL;
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
      }, items15);
      const items16 = [onClose];
      const effect4 = obj8.useEffect(() => () => {
        if (onClose != null) {
          tmp();
        }
      }, items16);
      const effect5 = obj8.useEffect(() => {
        let isChatLockedOpen;
        let rootNavigationRef;
        function handleNavigationChange() {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const obj = rootNavigationRef;
          const obj2 = userId(localUser[45]);
          isChatLockedOpen = obj2.getChatLayout().isChatLockedOpen;
          state = obj.getState();
          const tmp4 = !isChatLockedOpen && isChatLockedOpen && channelId(tmp2[46])(state, state);
          if (!tmp4) {
            if (key !== key) {
              const obj3 = channelId(localUser[47]);
              obj3.hideAllActionSheets();
            }
          }
        }
        const tmp2 = isChatLockedOpen;
        let obj = rootNavigationRef(isChatLockedOpen[44]);
        const tmp = rootNavigationRef;
        rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            let currentRoute = rootNavigationRef.getCurrentRoute();
            let key;
            if (currentRoute != null) {
              key = currentRoute.key;
            }
            const tmpResult = tmp(tmp2[45]);
            isChatLockedOpen = tmpResult.getChatLayout().isChatLockedOpen;
            let state = rootNavigationRef.getState();
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => rootNavigationRef.removeListener("state", handleNavigationChange);
          }
        }
      }, []);
      const tmp3Result22 = tmp3(tmp4[48]);
      navigation = tmp3Result22.useNavigation();
      if (null == obj4) {
        const obj9 = { value: analyticsLocations, children: sharedValue2(UserProfileAnalyticsProvider, obj10) };
        const AnalyticsLocationProvider = tmp3(tmp4[17]).AnalyticsLocationProvider;
        obj10 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt, fetchEndedAt, isLoaded, children: sharedValue2(BottomSheet2, obj11) };
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
        obj11 = { children: sharedValue2(EmptyState, obj12) };
        BottomSheet2 = tmp3(tmp4[50]).BottomSheet;
        obj12 = { style: { marginTop: 42 }, Illustration: tmp3(tmp4[52]).NoResults, body: intl2.string(tmp3(tmp4[53]).t.eAn6z2) };
        EmptyState = tmp3(tmp4[51]).EmptyState;
        intl2 = tmp3(tmp4[53]).intl;
        tmp111Result9 = tmp107(AnalyticsLocationProvider, obj9);
      } else {
        let tmp111Result5;
        const obj13 = { theme, primaryColor, secondaryColor, children: sharedValue2(AnalyticsLocationProvider2, obj14) };
        const ThemeContextProvider2 = tmp3(tmp4[54]).ThemeContextProvider;
        obj14 = { value: analyticsLocations, children: first(UserProfileAnalyticsProvider2, obj15) };
        AnalyticsLocationProvider2 = tmp3(tmp4[17]).AnalyticsLocationProvider;
        obj15 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: fetchStartedAt1, fetchEndedAt: fetchEndedAt1, isLoaded: isLoaded1, children: items20 };
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
        let tmp111Result = tmp112Result;
        const obj16 = { ref: bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: tmp2.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1, children: items17 };
        const BottomSheet = tmp3(tmp4[50]).BottomSheet;
        if (tmp112Result) {
          const obj17 = { animatedPosition: sharedValue };
          tmp111Result = tmp111(avatarDecoration, obj17);
        }
        items17 = [tmp111Result, , , ];
        const obj18 = { gradientHeight: diff, bannerHeight: tmp59 };
        items17[1] = sharedValue2(tmp7(tmp4[55]), obj18);
        let str2;
        const obj19 = { scrollsToTop: false, style: tmp2.container, contentContainerStyle: obj20, scrollEventsHandlersHook: tmp81, ref, children: sharedValue2(prop, obj29) };
        const BottomSheetScrollView = tmp3(tmp4[12]).BottomSheetScrollView;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        tmp81 = undefined;
        obj20 = { pointerEvents: str2 };
        const tmp3Result23 = tmp3(tmp4[56]);
        if (tmp3Result23.isIOS()) {
          tmp81 = memo;
        }
        const obj22 = {
          user: obj4,
          channel: stateFromStores1,
          guildId: tmp83,
          displayProfile: tmp7ResultResult,
          disableCalls,
          disableMessage,
          navigationReplace,
          isVoiceContext,
          location: _location,
          disableStatus: memo3,
          scrollViewRef: ref,
          isPreviewingChanges,
          avatarDecorationOverride: avatarDecoration1,
          navigateToShop() {
                  const obj = openUserSettings;
                  const obj2 = { screen: constants.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
          navigateToPremium() {
                  const obj = openUserSettings;
                  const obj2 = { screen: constants.PREMIUM, onClose: handleUserSettingsClose };
                  return obj.openUserSettings(obj2);
                },
          showUserProfileActionSheet: function showUserProfileActionSheetWithParams() {
                  const obj = { navigationReplace, sourceAnalyticsLocations: analyticsLocations, localUser };
                  const tmp = showUserProfileActionSheetDefault;
                  const merged = Object.assign(createUserProfileAnalyticsContext);
                  tmp(obj);
                },
          initialSection,
          scrollPosition: tmp85
        };
        tmp83 = undefined;
        const obj21 = { style: tmp2.profileContainer, onLayout: callback, children: items18 };
        if (showGuildProfile) {
          tmp83 = guild_id;
        }
        avatarDecoration1 = undefined;
        if (collectibleProfileOverrides != null) {
          avatarDecoration1 = collectibleProfileOverrides.avatarDecoration;
        }
        tmp85 = undefined;
        const tmp3Result24 = tmp3(tmp4[56]);
        if (tmp3Result24.isIOS()) {
          tmp85 = sharedValue2;
        }
        if (obj4.isNonUserBot()) {
          const obj23 = {};
          const tmp7Result15 = tmp7(tmp4[58]);
          let merged = Object.assign(obj22);
          tmp111Result5 = tmp111(tmp7Result15, obj23);
        } else if (obj4.bot) {
          const obj24 = {};
          const tmp7Result16 = tmp7(tmp4[59]);
          const merged1 = Object.assign(obj22);
          tmp111Result5 = tmp111(tmp7Result16, obj24);
        } else {
          const obj25 = {};
          const tmp7Result17 = tmp7(tmp4[60]);
          const merged2 = Object.assign(obj22);
          tmp111Result5 = tmp111(tmp7Result17, obj25);
        }
        items18 = [tmp111Result5, ];
        let tmp111Result6 = null != tmp52Result;
        if (tmp111Result6) {
          const obj26 = { style: items19, pointerEvents: "none", children: sharedValue2(tmp7(tmp4[61]), obj28) };
          items19 = [tmp2.profileEffect, , ];
          const obj27 = { height: diff };
          items19[1] = obj27;
          items19[2] = animatedStyle;
          const View = tmp7(tmp4[13]).View;
          obj28 = { skuId: tmp52Result.skuId, bannerAdjustment: 0 };
          tmp111Result6 = tmp111(View, obj26);
        }
        items18[1] = tmp111Result6;
        obj29 = { children: first(prop, obj21) };
        items17[2] = sharedValue2(BottomSheetScrollView, obj19);
        let tmp111Result7 = !tmp112Result;
        if (tmp111Result7) {
          const obj30 = { variant: "floating", tabStyle: obj31, onPress: bottomSheetClose };
          obj31 = { backgroundColor: token };
          tmp111Result7 = tmp111(tmp3(tmp4[62]).ActionSheetHeaderBar, obj30);
        }
        items17[3] = tmp111Result7;
        items20 = [first(BottomSheet, obj16), , ];
        if (tmp112Result) {
          let tmp111Result8 = null != tmp7Result2Result;
          const obj32 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: items21 };
          const tmp101 = profileFrame1;
          if (tmp111Result8) {
            const obj33 = { frame: tmp7Result2Result, profileThemeType: obj4.ACTION_SHEET, frameOrder: tmp3(tmp4[28]).ProfileFrameLayerOrder.FRONT, containerWidth: first1 };
            const tmp7Result18 = tmp7(tmp4[27]);
            tmp111Result8 = tmp111(tmp7Result18, obj33);
          }
          items21 = [tmp111Result8, ];
          const obj34 = { variant: "floating", tabStyle: obj35, onPress: bottomSheetClose };
          obj35 = { backgroundColor: token };
          items21[1] = sharedValue2(tmp3(tmp4[62]).ActionSheetHeaderBar, obj34);
          tmp112Result = tmp112(tmp101, obj32);
        }
        items20[1] = tmp112Result;
        if (isPreviewingChanges) {
          let mNZcD8;
          const obj36 = { theme: tmp63, primaryColor: null, secondaryColor: null, children: sharedValue2(ActionSheetBackdropToast, obj37) };
          const ThemeContextProvider = tmp3(tmp4[54]).ThemeContextProvider;
          ActionSheetBackdropToast = tmp3(tmp4[63]).ActionSheetBackdropToast;
          const intl = tmp3(tmp4[53]).intl;
          const string = intl.string;
          if (setting === tmp3(tmp4[64]).ProfileVisibility.FRIENDS_ONLY) {
            mNZcD8 = tmp3(tmp4[53]).t.mNZcD8;
          } else {
            mNZcD8 = tmp3(tmp4[53]).t["wSnI/0"];
          }
          obj37 = { text: string(mNZcD8), isExpanded: true };
          isPreviewingChanges = tmp111(ThemeContextProvider, obj36);
        }
        items20[2] = isPreviewingChanges;
        tmp111Result9 = tmp111(ThemeContextProvider2, obj13);
      }
      return tmp111Result9;
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

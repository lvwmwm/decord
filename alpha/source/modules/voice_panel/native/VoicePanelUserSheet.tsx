// Module ID: 18852
// Function ID: 18853
// Name: VoicePanelUserSheet
// Dependencies: [109, 19, 17, 4856, 4946, 1389, 1084, 21, 5004, 587, 558, 576, 7289, 7314, 14509, 8716, 504, 13251, 4832, 7320, 14508, 8705, 1125, 14518, 7448, 9678, 9795, 5085, 6025, 14585, 18851, 9450, 1199, 5705, 5270, 14531, 14588, 5301, 5305, 7257, 2]

// Module 18852 (VoicePanelUserSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7448 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8705 */;
import UserProfileActivity from "UserProfileActivity" /* 14531 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 18851 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["ref"];
let react = react_mod;
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let c14 = 48;
let createStyles = createStyles_mod;
let obj = { wrapper: { gap: 12, padding: 16 }, card: obj2, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16 }, user: { display: "flex", gap: 8, flexDirection: "row", alignItems: "center", flex: 1, minWidth: 0 }, avatar: obj3, username: { flexShrink: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 48, maxHeight: 48, borderRadius: nativeDefault.radii.round };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowMenu(userId) {
  let analyticsLocations;
  let first;
  let stateFromStores;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp = userId;
  let obj = userId(analyticsLocations[11]);
  const cResult = obj.c(53);
  userId = userId.userId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  const currentUserId = userId.currentUserId;
  const tmp5 = channelId(analyticsLocations[12]);
  const tmp5Result = tmp5(channelId(analyticsLocations[13]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  analyticsLocations = tmp5Result.analyticsLocations;
  stateFromStores.useRef(null);
  channelId(analyticsLocations[14])();
  let obj2 = userId(analyticsLocations[15]);
  const userProfileAnalyticsContext = obj2.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class S {
      constructor() {
        obj = { relationshipType: closure_9.getRelationshipType(userId), isIgnored: closure_9.isIgnored(userId) };
        return obj;
      }
    }
    cResult[1] = userId;
    cResult[2] = S;
    tmp12 = S;
  } else {
    class S {
      constructor() {
        obj = { relationshipType: closure_9.getRelationshipType(userId), isIgnored: closure_9.isIgnored(userId) };
        return obj;
      }
    }
  }
  const tmpResult = tmp(analyticsLocations[16]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp12);
  const relationshipType = stateFromStoresObject.relationshipType;
  const BLOCKED = RelationshipTypes.BLOCKED;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = { relationshipType: closure_9.getRelationshipType(userId), isIgnored: closure_9.isIgnored(userId) };
        return obj;
      }
    }
    const items1 = [UserStore];
    cResult[3] = items1;
    tmp14 = items1;
  } else {
    class S {
      constructor() {
        obj = { relationshipType: closure_9.getRelationshipType(userId), isIgnored: closure_9.isIgnored(userId) };
        return obj;
      }
    }
  }
  if (cResult[4] !== userId) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    cResult[4] = userId;
    cResult[5] = V;
    tmp15 = V;
  } else {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  const tmpResult3 = tmp(analyticsLocations[16]);
  stateFromStores = tmpResult3.useStateFromStores(tmp14, tmp15);
  channelId(analyticsLocations[17])(userId, guildId);
  const DeveloperMode = tmp(tmp2[18]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    let obj3 = { autoTrackExposure: false };
    cResult[6] = tmp21;
    cResult[7] = obj3;
    tmp20 = obj3;
    tmp19 = tmp21;
  } else {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    tmp20 = cResult[7];
  }
  const tmp4Result = channelId(analyticsLocations[19]);
  const tidaWebformEnabled = tmp4Result.useExperiment(tmp19, tmp20).tidaWebformEnabled;
  if (cResult[8] === analyticsLocations) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  tmp(analyticsLocations[20]);
  if (cResult[24] === analyticsLocations) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  class X {
    constructor(arg0) {
      obj = {};
      tmp = closure_1(closure_2[21]);
      merged = Object.assign(context);
      obj.showGuildProfile = userId;
      obj.userId = userId;
      obj.channelId = channelId;
      obj.sourceAnalyticsLocations = analyticsLocations;
      obj.ignoreBlockedSpeedBump = true;
      tmpResult = tmp(obj);
      return;
    }
  }
  cResult[24] = analyticsLocations;
  cResult[25] = channelId;
  cResult[26] = context;
  cResult[27] = userId;
  cResult[28] = X;
}) : (function OverflowMenu(userId) {
  let ContextMenu;
  let View;
  let intl;
  let intl2;
  let isIgnored;
  let obj14;
  let obj15;
  let obj16;
  let relationshipType;
  let tmp21;
  userId = userId.userId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let analyticsLocations;
  let stateFromStores;
  const currentUserId = userId.currentUserId;
  let tmp = channelId;
  const tmp3 = channelId(analyticsLocations[12]);
  const tmp3Result = tmp3(channelId(analyticsLocations[13]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  analyticsLocations = tmp3Result.analyticsLocations;
  const newestAnalyticsLocation = tmp3Result.newestAnalyticsLocation;
  const ref = stateFromStores.useRef(null);
  const tmp6 = channelId(analyticsLocations[14])();
  let obj = userId(analyticsLocations[15]);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let obj2 = userId(analyticsLocations[16]);
  const items = [RelationshipStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(userId), isIgnored: RelationshipStore.isIgnored(userId) };
    return obj;
  });
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  const BLOCKED = RelationshipTypes.BLOCKED;
  let obj3 = userId(analyticsLocations[16]);
  const items1 = [UserStore];
  stateFromStores = obj3.useStateFromStores(items1, () => UserStore.getUser(userId));
  const tmp11 = channelId(analyticsLocations[17])(userId, guildId);
  const DeveloperMode = userId(analyticsLocations[18]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj4 = channelId(analyticsLocations[19]);
  const tidaWebformEnabled = obj4.useExperiment({ location: "VoicePanelUserSheetOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const items2 = [userId, channelId, context, analyticsLocations];
  const obj5 = userId(analyticsLocations[20]);
  const result = obj5.isIarUserReportingEnabled("VoicePanelUserSheet - Mobile");
  const showUserProfile = stateFromStores.useCallback((showGuildProfile) => {
    const obj = { showGuildProfile, userId, channelId, sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true };
    const tmp = showUserProfileActionSheetDefault;
    const merged = Object.assign(context);
    tmp(obj);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let items7;
    const obj6 = { user: stateFromStores, channelId, location: newestAnalyticsLocation, analyticsLocations, trackUserProfileAction, showUserProfile };
    const items3 = [];
    const items4 = [];
    const push3 = items3.push;
    const obj7 = {
      label: intl2.string(userId(analyticsLocations[22]).t.GISTta),
      action() {
          const obj = { action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback(false);
        }
    };
    intl2 = tmp7(tmp2[22]).intl;
    push3(obj7);
    if (currentUserId !== userId) {
      const obj8 = { isIgnored, isBlocked: relationshipType === BLOCKED };
      const tmp7Result = userId(analyticsLocations[23]);
      const ignoreMenuItem = tmp7Result.getIgnoreMenuItem(obj6, obj8);
      if (null != ignoreMenuItem) {
        items4.push(ignoreMenuItem);
      }
      const push = items4.push;
      const obj9 = { isBlocked: relationshipType === BLOCKED };
      const tmp7Result4 = userId(analyticsLocations[23]);
      push(tmp7Result4.getBlockMenuItem(obj6, obj9));
      if (relationshipType !== BLOCKED) {
        const obj10 = { isInIarUserReportingExperiment: result, guildId, reportEntrypoint: "VoicePanelUserSheet" };
        const tmp7Result5 = userId(analyticsLocations[23]);
        const reportMenuItem = tmp7Result5.getReportMenuItem(obj6, obj10);
        if (null != reportMenuItem) {
          items4.push(reportMenuItem);
        }
      }
    }
    if (setting) {
      const push2 = items3.push;
      const obj11 = { tidaWebformEnabled, avatarGuildId: guildId };
      const tmp7Result6 = userId(analyticsLocations[23]);
      push2(tmp7Result6.getDeveloperCopyMenuItem(obj6, obj11));
    }
    const obj12 = {
      label: intl.string(userId(analyticsLocations[22]).t.oeb1vg),
      action() {
          const obj = { action: "SEND_MESSAGE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: stateFromStores.id };
          obj2.openPrivateChannel(obj3);
        }
    };
    intl = tmp7(tmp2[22]).intl;
    const items5 = [obj12];
    const obj13 = { value: analyticsLocations, children: closure_12(tmp21, obj14) };
    obj14 = { ref, children: closure_12(View, obj15) };
    const AnalyticsLocationProvider = tmp7(tmp2[12]).AnalyticsLocationProvider;
    obj15 = { style: tmp6, children: closure_12(ContextMenu, obj16) };
    View = tmp(tmp2[27]).View;
    ContextMenu = tmp7(tmp2[26]).ContextMenu;
    tmp21 = showUserProfile;
    if (tmp11) {
      const items6 = [items5, items3, items4];
      items7 = items6;
    } else {
      items7 = [items3, items4];
    }
    obj16 = {
      items: items7,
      children(ref) {
          let MoreHorizontalIcon;
          let intl;
          let obj2;
          const obj = { ref: ref.ref, accessibilityLabel: intl.string(userId(analyticsLocations[22]).t["+zofAD"]), children: closure_1_12(MoreHorizontalIcon, obj2) };
          const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
          intl = userId(analyticsLocations[22]).intl;
          obj2 = { size: "sm", color: channelId(analyticsLocations[9]).colors.WHITE };
          MoreHorizontalIcon = userId(analyticsLocations[25]).MoreHorizontalIcon;
          return closure_1_12(closure_1_7, obj);
        }
    };
    return closure_12(AnalyticsLocationProvider, obj13);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelUserSheet(userId) {
  let card;
  let channelId;
  let closure_5;
  let currentUser;
  let first;
  let guildId;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp9;
  let tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(53);
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  dependencyMap = closure_15();
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[4] = channelId;
    cResult[5] = A;
    tmp11 = A;
  } else {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items2 = [UserStore];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = R;
    tmp14 = R;
    tmp13 = items2;
  } else {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp14);
  const tmpResult6 = tmp(6025);
  const name = tmpResult6.useName(guildId, channelId, stateFromStores);
  const live = userId(14585)(userId).live;
  react = tmp17;
  if (cResult[8] !== (null == stateFromStores || null == stateFromStores1 || null == stateFromStores2)) {
    class C {
      constructor() {
        const tmp = closure_5;
        if (tmp) {
          const obj = VoicePanelUserActionCreators;
          const result = obj.closeVoicePanelUserActionSheet();
        }
      }
    }
    const items3 = [null == stateFromStores || null == stateFromStores1 || null == stateFromStores2];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = null == stateFromStores || null == stateFromStores1 || null == stateFromStores2;
    cResult[9] = C;
    cResult[10] = items3;
    tmp19 = items3;
    tmp18 = C;
  } else {
    class C {
      constructor() {
        const tmp = closure_5;
        if (tmp) {
          const obj = VoicePanelUserActionCreators;
          const result = obj.closeVoicePanelUserActionSheet();
        }
      }
    }
    tmp19 = cResult[10];
  }
  const effect = react.useEffect(tmp18, tmp19);
  if (null != stateFromStores) {
    class C {
      constructor() {
        const tmp = closure_5;
        if (tmp) {
          const obj = VoicePanelUserActionCreators;
          const result = obj.closeVoicePanelUserActionSheet();
        }
      }
    }
  }
  return null;
}) : (function VoicePanelUserSheet(userId) {
  let card;
  let channelId;
  let closure_5;
  let currentUser;
  let guildId;
  let items4;
  let items5;
  let items6;
  let obj10;
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  let tmp = closure_15();
  dependencyMap = tmp;
  let obj = channelId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [ChannelStore];
  const obj3 = channelId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const items2 = [UserStore];
  const obj4 = channelId(504);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj5 = channelId(6025);
  const name = obj5.useName(guildId, channelId, stateFromStores);
  const live = userId(14585)(userId).live;
  react = tmp8;
  const items3 = [null == stateFromStores || null == stateFromStores1 || null == stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = closure_5;
    if (tmp) {
      const obj = VoicePanelUserActionCreators;
      const result = obj.closeVoicePanelUserActionSheet();
    }
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        let cachedSourceFromURI;
        let tmp11Result;
        const avatarURL = stateFromStores.getAvatarURL(guildId, 48, false);
        if (null != avatarURL) {
          const tmp2Result = channelId(9450);
          cachedSourceFromURI = tmp2Result.getCachedSourceFromURI(avatarURL);
        }
        const avatarDecoration = stateFromStores.avatarDecoration;
        BottomSheet = tmp2(5301).BottomSheet;
        const BottomSheetScrollView = tmp2(5305).BottomSheetScrollView;
        const obj2 = { bottom: true, style: tmp.wrapper, children: items6 };
        const obj6 = { style: tmp.header, children: items5 };
        const obj7 = { style: tmp.user, children: items4 };
        const SafeAreaPaddingView = tmp2(7257).SafeAreaPaddingView;
        if (null != avatarDecoration) {
          const obj8 = { source: cachedSourceFromURI, size: channelId(1199).AvatarSizes.LARGE_48, avatarDecoration };
          const Avatar = tmp2(1199).Avatar;
          tmp11Result = tmp11(Avatar, obj8);
        } else {
          size = { source: cachedSourceFromURI, resizeMode: "stretch", width: v48, height: v48, style: tmp.avatar };
          const tmp7Result = userId(5705);
          tmp11Result = tmp11(tmp7Result, size);
        }
        const obj9 = { scrollable: true, children: closure_12(BottomSheetScrollView, obj10) };
        items4 = [tmp11Result, ];
        obj10 = { children: closure_13(SafeAreaPaddingView, obj2) };
        const obj11 = { variant: "text-md/semibold", style: tmp.username, lineClamp: 1, children: name };
        items4[1] = closure_12(channelId(5270).Text, obj11);
        items5 = [closure_13(closure_6, obj7), ];
        const obj12 = { userId: stateFromStores.id, currentUserId: stateFromStores2.id, channelId, guildId };
        items5[1] = closure_12(closure_16, obj12);
        items6 = [
          closure_13(closure_6, obj6),
          live.map((activity, index) => {
                  let application_id = activity.application_id;
                  const obj = { user: stateFromStores, currentUser: stateFromStores2, activity, style: card.card };
                  const ActivityCard = UserProfileActivity.ActivityCard;
                  const tmp = authStore2;
                  if (application_id == null) {
                    application_id = index;
                  }
                  return tmp(ActivityCard, obj, application_id);
                }),

        ];
        const obj13 = { user: stateFromStores, channel: stateFromStores1, currentUser: stateFromStores2, style: tmp.card };
        items6[2] = closure_12(userId(14588), obj13);
        return closure_12(BottomSheet, obj9);
      }
    }
  }
  return null;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserSheet.tsx");

export default tmp5;

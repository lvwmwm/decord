// Module ID: 19191
// Function ID: 19192
// Name: VoicePanelUserSheet
// Dependencies: [19, 17, 4858, 4951, 1384, 1072, 21, 5009, 575, 7320, 7345, 14778, 8753, 504, 13635, 4834, 7351, 14777, 8742, 1114, 14787, 7479, 5090, 9853, 9736, 6036, 14854, 19190, 9500, 5267, 1188, 5712, 5619, 14800, 14857, 2]
// Exports: default

// Module 19191 (VoicePanelUserSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import UserProfileActivity from "UserProfileActivity" /* 14800 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 19190 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let unpackModuleId;
function OverflowMenu(userId) {
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
  let context;
  const currentUserId = userId.currentUserId;
  let tmp = channelId;
  const tmp3 = channelId(analyticsLocations[9]);
  const tmp3Result = tmp3(channelId(analyticsLocations[10]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  analyticsLocations = tmp3Result.analyticsLocations;
  const newestAnalyticsLocation = tmp3Result.newestAnalyticsLocation;
  const ref = context.useRef(null);
  const tmp6 = channelId(analyticsLocations[11])();
  let obj = userId(analyticsLocations[12]);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let obj2 = userId(analyticsLocations[13]);
  const items = [RelationshipStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(userId), isIgnored: RelationshipStore.isIgnored(userId) };
    return obj;
  });
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  const BLOCKED = RelationshipTypes.BLOCKED;
  let obj3 = userId(analyticsLocations[13]);
  const items1 = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => UserStore.getUser(userId));
  const tmp11 = channelId(analyticsLocations[14])(userId, guildId);
  const DeveloperMode = userId(analyticsLocations[15]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj4 = channelId(analyticsLocations[16]);
  const tidaWebformEnabled = obj4.useExperiment({ location: "VoicePanelUserSheetOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const items2 = [userId, channelId, context, analyticsLocations];
  const obj5 = userId(analyticsLocations[17]);
  const result = obj5.isIarUserReportingEnabled("VoicePanelUserSheet - Mobile");
  const showUserProfile = context.useCallback((showGuildProfile) => {
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
      label: intl2.string(userId(analyticsLocations[19]).t.GISTta),
      action() {
          const obj = { action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback(false);
        }
    };
    intl2 = tmp7(tmp2[19]).intl;
    push3(obj7);
    if (currentUserId !== userId) {
      const obj8 = { isIgnored, isBlocked: relationshipType === BLOCKED };
      const tmp7Result = userId(analyticsLocations[20]);
      const ignoreMenuItem = tmp7Result.getIgnoreMenuItem(obj6, obj8);
      if (null != ignoreMenuItem) {
        items4.push(ignoreMenuItem);
      }
      const push = items4.push;
      const obj9 = { isBlocked: relationshipType === BLOCKED };
      const tmp7Result4 = userId(analyticsLocations[20]);
      push(tmp7Result4.getBlockMenuItem(obj6, obj9));
      if (relationshipType !== BLOCKED) {
        const obj10 = { isInIarUserReportingExperiment: result, guildId, reportEntrypoint: "VoicePanelUserSheet" };
        const tmp7Result5 = userId(analyticsLocations[20]);
        const reportMenuItem = tmp7Result5.getReportMenuItem(obj6, obj10);
        if (null != reportMenuItem) {
          items4.push(reportMenuItem);
        }
      }
    }
    if (setting) {
      const push2 = items3.push;
      const obj11 = { tidaWebformEnabled, avatarGuildId: guildId };
      const tmp7Result6 = userId(analyticsLocations[20]);
      push2(tmp7Result6.getDeveloperCopyMenuItem(obj6, obj11));
    }
    const obj12 = {
      label: intl.string(userId(analyticsLocations[19]).t.oeb1vg),
      action() {
          const obj = { action: "SEND_MESSAGE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: stateFromStores.id };
          obj2.openPrivateChannel(obj3);
        }
    };
    intl = tmp7(tmp2[19]).intl;
    const items5 = [obj12];
    const obj13 = { value: analyticsLocations, children: closure_10(tmp21, obj14) };
    obj14 = { ref, children: closure_10(View, obj15) };
    const AnalyticsLocationProvider = tmp7(tmp2[9]).AnalyticsLocationProvider;
    obj15 = { style: tmp6, children: closure_10(ContextMenu, obj16) };
    View = tmp(tmp2[22]).View;
    ContextMenu = tmp7(tmp2[23]).ContextMenu;
    tmp21 = trackUserProfileAction;
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
          const obj = { ref: ref.ref, accessibilityLabel: intl.string(userId(analyticsLocations[19]).t["+zofAD"]), children: closure_1_10(MoreHorizontalIcon, obj2) };
          const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
          intl = userId(analyticsLocations[19]).intl;
          obj2 = { size: "sm", color: channelId(analyticsLocations[8]).colors.WHITE };
          MoreHorizontalIcon = userId(analyticsLocations[24]).MoreHorizontalIcon;
          return closure_1_10(stateFromStores, obj);
        }
    };
    return closure_10(AnalyticsLocationProvider, obj13);
  }
}
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { gap: 12, padding: 16 }, card: obj2, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16 }, user: { display: "flex", gap: 8, flexDirection: "row", alignItems: "center", flex: 1, minWidth: 0 }, avatar: obj3, username: { flexShrink: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 48, maxHeight: 48, borderRadius: nativeDefault.radii.round };
let closure_12 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserSheet.tsx");

export default function VoicePanelUserSheet(userId) {
  let card;
  let channelId;
  let currentUser;
  let guildId;
  let items4;
  let items5;
  let items6;
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  let tmp = closure_12();
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
  const obj5 = channelId(6036);
  const name = obj5.useName(guildId, channelId, stateFromStores);
  const live = userId(14854)(userId).live;
  let closure_5 = tmp8;
  const items3 = [null == stateFromStores || null == stateFromStores1 || null == stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
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
          const tmp2Result = channelId(9500);
          cachedSourceFromURI = tmp2Result.getCachedSourceFromURI(avatarURL);
        }
        const avatarDecoration = stateFromStores.avatarDecoration;
        const obj2 = { style: tmp.wrapper, children: items6 };
        const obj6 = { style: tmp.header, children: items5 };
        const obj7 = { style: tmp.user, children: items4 };
        BottomSheet = tmp2(5267).BottomSheet;
        if (null != avatarDecoration) {
          const obj8 = { source: cachedSourceFromURI, size: channelId(1188).AvatarSizes.LARGE_48, avatarDecoration };
          const Avatar = tmp2(1188).Avatar;
          tmp11Result = tmp11(Avatar, obj8);
        } else {
          size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 48, height: 48, style: tmp.avatar };
          const tmp7Result = userId(5712);
          tmp11Result = tmp11(tmp7Result, size);
        }
        items4 = [tmp11Result, ];
        const obj10 = { variant: "text-md/semibold", style: tmp.username, lineClamp: 1, children: name };
        const obj9 = { children: closure_11(stateFromStores2, obj2) };
        items4[1] = closure_10(channelId(5619).Text, obj10);
        items5 = [closure_11(stateFromStores2, obj7), ];
        const obj11 = { userId: stateFromStores.id, currentUserId: stateFromStores2.id, channelId, guildId };
        items5[1] = closure_10(OverflowMenu, obj11);
        items6 = [
          closure_11(stateFromStores2, obj6),
          live.map((activity, index) => {
                  let application_id = activity.application_id;
                  const obj = { user: stateFromStores, currentUser: stateFromStores2, activity, style: card.card };
                  const ActivityCard = UserProfileActivity.ActivityCard;
                  const tmp = authStore;
                  if (application_id == null) {
                    application_id = index;
                  }
                  return tmp(ActivityCard, obj, application_id);
                }),

        ];
        const obj12 = { user: stateFromStores, channel: stateFromStores1, currentUser: stateFromStores2, style: tmp.card };
        items6[2] = closure_10(userId(14857), obj12);
        return closure_10(BottomSheet, obj9);
      }
    }
  }
  return null;
};

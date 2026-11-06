// Module ID: 15014
// Function ID: 15015
// Name: UserProfileOverflowMenu
// Dependencies: [32, 19, 17, 6923, 5019, 5112, 5073, 7460, 1072, 5835, 21, 504, 11790, 15015, 13890, 11791, 15021, 8853, 7410, 7435, 8849, 8879, 8880, 15022, 15023, 15024, 7592, 5847, 8842, 1113, 7572, 5404, 6824, 15030, 2118, 15031, 2530, 11816, 7574, 4995, 7441, 5224, 5866, 2148, 5829, 9867, 12652, 15033, 1652, 10012, 15028, 8119, 9862, 575, 15034, 2]
// Exports: default

// Module 15014 (UserProfileOverflowMenu)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import UserUtilsDefault from "UserUtils" /* 5224 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import CallConstants from "CallConstants" /* 5835 */;
import ToastUtils from "ToastUtils" /* 5866 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import ClipboardUtils from "ClipboardUtils" /* 7441 */;
import Constants2 from "Constants" /* 7460 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7572 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7574 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8842 */;
import isGameOrganizationInviteRecipientDefault from "isGameOrganizationInviteRecipient" /* 11790 */;
import openGameOrganizationInvitePickerDefault from "openGameOrganizationInvitePicker" /* 11816 */;
import getApplicationInstallURL2 from "getApplicationInstallURL" /* 12652 */;
import GuildInviteUtils from "GuildInviteUtils" /* 15015 */;
import openShopThisLookActionSheet from "openShopThisLookActionSheet" /* 15024 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 15028 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 15033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6923 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
let View = react_native.View;
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ AVATAR_MAX_SIZE: unpackModuleId, ChannelTypesSets: closure_12, RelationshipTypes: map1 } = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let bannerURL;
  let channel;
  let closure_17;
  let displayProfile;
  let guildId1;
  let guildId5;
  let id4;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let isIgnored;
  let isLinkedGameOrganizationInviteRecipient;
  let isVisible;
  let items7;
  let items8;
  let markAsDismissed;
  let obj23;
  let obj24;
  let relationshipType;
  let tmp70;
  user = user.user;
  const currentUser = user.currentUser;
  const application = user.application;
  ({ displayProfile, channel } = user);
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let guildId;
  let canRing;
  let userIsInCall;
  let callback1;
  let id2;
  let closure_15;
  let closure_16;
  let installAppPropsFromProfileApplication;
  let tmp = user;
  const tmp2 = application;
  let obj = user(application[11]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id), isLinkedGameOrganizationInviteRecipient: isGameOrganizationInviteRecipientDefault(user, currentUser.id, RelationshipStore) };
    return obj;
  });
  ({ relationshipType, isLinkedGameOrganizationInviteRecipient, isIgnored } = stateFromStoresObject);
  let obj2 = user(application[11]);
  let items1 = [newestAnalyticsLocation, trackUserProfileAction];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    const obj = { selectedChannel: trackUserProfileAction.getChannel(newestAnalyticsLocation.getChannelId()), selectedVoiceChannelId: newestAnalyticsLocation.getVoiceChannelId() };
    return obj;
  });
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj3 = user(application[13]);
  [arr3, arr4] = channel(obj3.useServerInviteRows(user.id), 2);
  const tmp5 = channel(obj3.useServerInviteRows(user.id), 2);
  const tmp6 = null != analyticsLocations.getNickname(user.id);
  const tmp8 = currentUser(application[14])(user.id);
  const tmp9 = tmp8 && arr3.length + arr4.length > 0;
  const tmp10 = currentUser(tmp2[15])("user_profile_overflow_menu");
  const tmpResult = tmp(tmp2[16]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  const tmpResult14 = tmp(tmp2[17]);
  const userProfileAnalyticsContext = tmpResult14.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp7Result = currentUser(tmp2[18]);
  const tmp7ResultResult = tmp7Result(currentUser(tmp2[19]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  let id = user.id;
  const tmp7Result2 = currentUser(tmp2[20]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result2(id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmpResult15 = tmp(tmp2[21]);
  const isShopThisLookMobileEnabled = tmpResult15.useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult16 = tmp(tmp2[22]);
  const equippedCollectibleSkuIds = tmpResult16.useEquippedCollectibleSkuIds(user.id, guildId);
  let ref = selectedChannel.useRef(null);
  const tmp22 = currentUser(tmp2[23])();
  const tmpResult17 = tmp(tmp2[24]);
  const shopThisLookMarketing = tmpResult17.useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedChannel.useCallback(() => {
    const obj = openShopThisLookActionSheet;
    const obj2 = { userId: user.id, guildId };
    const result = obj.openShopThisLookActionSheet(obj2);
  }, items2);
  const tmpResult18 = tmp(tmp2[26]);
  canRing = tmpResult18.useCanRing(user, selectedVoiceChannelId);
  const tmpResult19 = tmp(tmp2[27]);
  const isTidaMediaTakedownRegion = tmpResult19.useIsTidaMediaTakedownRegion();
  const items3 = [context];
  const tmpResult20 = tmp(tmp2[11]);
  const stateFromStoresObject2 = tmpResult20.useStateFromStoresObject(items3, () => {
    let ringing;
    let participant = null;
    const tmp = canRing && null != selectedVoiceChannelId;
    if (tmp) {
      participant = ChannelRTCStore.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: ringing };
    ringing = null != participant && participant.type === ParticipantTypes.USER && participant.ringing;
    return obj;
  });
  userIsInCall = stateFromStoresObject2.userIsInCall;
  const items4 = [user.id, , , ];
  let id1;
  const isUserRinging = stateFromStoresObject2.isUserRinging;
  const useCallback = selectedChannel.useCallback;
  if (channel != null) {
    id1 = channel.id;
  }
  items4[1] = id1;
  items4[2] = context;
  items4[3] = analyticsLocations;
  callback1 = useCallback((showGuildProfile) => {
    let id;
    const obj = { showGuildProfile, userId: user.id, channelId: id, sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true };
    const tmp = showUserProfileActionSheetDefault;
    const merged = Object.assign(context);
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    tmp(obj);
  }, items4);
  id2 = user.id;
  const id3 = currentUser.id;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  let obj4 = { user, channelId: id4, location: newestAnalyticsLocation, analyticsLocations, trackUserProfileAction, showUserProfile: callback1 };
  id4 = undefined;
  const BLOCKED = callback1.BLOCKED;
  const tmp31 = callback1;
  if (channel != null) {
    id4 = channel.id;
  }
  closure_15 = tmp33;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj5 = {
      label: intl.string(tmp(tmp2[29]).t.GISTta),
      action() {
          const obj = { action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback1(false);
        }
    };
    const push = items5.push;
    intl = tmp(tmp2[29]).intl;
    push(obj5);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp37 = null != guildId3;
  if (tmp37) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp37 = null == guildId4;
  }
  if (tmp37) {
    let obj6 = {
      label: intl2.string(tmp(tmp2[29]).t.DisZzB),
      action() {
          const obj = { action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback1();
        }
    };
    const push2 = items5.push;
    intl2 = tmp(tmp2[29]).intl;
    push2(obj6);
  }
  const items6 = [];
  if (id3 !== id2) {
    let tmp40 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp40) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id2);
      }
      tmp40 = hasItem;
    }
    if (tmp40) {
      const push3 = items6.push;
      const obj7 = {
        label: intl3.string(tmp(tmp2[29]).t["n5zMI+"]),
        variant: "destructive",
        action() {
              const obj = ChannelActionCreatorsDefault;
              obj.removeRecipient(channel.id, id2);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
      };
      intl3 = tmp(tmp2[29]).intl;
      push3(obj7);
    }
    if (relationshipType === tmp31.FRIEND) {
      let stringResult;
      const push4 = items5.push;
      const intl4 = tmp(tmp2[29]).intl;
      const string = intl4.string;
      const t = tmp(tmp2[29]).t;
      if (tmp6) {
        stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj8 = {
        label: stringResult,
        action() {
              const obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
              trackUserProfileAction(obj);
              const obj2 = ModalActionCreatorsDefault;
              const obj3 = { userId: id2, showUserProfile: callback1 };
              obj2.pushLazy(asyncRequire(15030, dependencyMap.paths), obj3);
              const obj4 = ActionSheetActionCreatorsDefault;
              obj4.hideActionSheet();
            }
      };
      push4(obj8);
    }
    if (isShopThisLookMobileEnabled && equippedCollectibleSkuIds.length > 0) {
      const push5 = items5.push;
      const obj9 = {
        label: intl5.string(tmp(tmp2[29]).t.xNdRDO),
        action() {
              const obj = openShopThisLookActionSheet;
              const obj2 = { userId: id2, guildId };
              const result = obj.openShopThisLookActionSheet(obj2);
            }
      };
      intl5 = tmp(tmp2[29]).intl;
      push5(obj9);
    }
    const obj10 = { isIgnored, isBlocked: relationshipType === BLOCKED };
    const tmpResult21 = tmp(tmp2[35]);
    const ignoreMenuItem = tmpResult21.getIgnoreMenuItem(obj4, obj10);
    if (null != ignoreMenuItem) {
      items6.push(ignoreMenuItem);
    }
    const push6 = items6.push;
    const obj11 = { isBlocked: relationshipType === BLOCKED };
    const tmpResult22 = tmp(tmp2[35]);
    push6(tmpResult22.getBlockMenuItem(obj4, obj11));
    if (relationshipType !== BLOCKED) {
      const obj12 = { isInIarUserReportingExperiment: result, guildId: guildId1, reportEntrypoint: "UserProfileOverflowMenu" };
      const tmpResult23 = tmp(tmp2[35]);
      const reportMenuItem = tmpResult23.getReportMenuItem(obj4, obj12);
      if (null != reportMenuItem) {
        items6.push(reportMenuItem);
      }
      const tmp52 = !user.bot && tmp9;
      if (tmp52) {
        const push7 = items5.push;
        const obj13 = {
          label: intl6.string(tmp(tmp2[29]).t.Sd8Ixw),
          action() {
                  const obj = { action: "PRESS_INVITE_TO_SERVER", analyticsLocations };
                  trackUserProfileAction(obj);
                  const obj2 = GuildInviteUtils;
                  const result = obj2.showGuildInviteActionSheet(id2, newestAnalyticsLocation);
                }
        };
        intl6 = tmp(tmp2[29]).intl;
        push7(obj13);
      }
      if (isLinkedGameOrganizationInviteRecipient) {
        isLinkedGameOrganizationInviteRecipient = tmp8;
      }
      if (isLinkedGameOrganizationInviteRecipient) {
        isLinkedGameOrganizationInviteRecipient = tmp10;
      }
      if (isLinkedGameOrganizationInviteRecipient) {
        const push8 = items5.push;
        const obj14 = {
          label: intl7.string(currentUser(tmp2[36])["wkSug+"]),
          action() {
                  return openGameOrganizationInvitePickerDefault(id2);
                }
        };
        intl7 = tmp(tmp2[29]).intl;
        push8(obj14);
      }
    }
  }
  let tmp55 = !canRing;
  if (canRing) {
    tmp55 = null == selectedVoiceChannelId;
  }
  if (!tmp55) {
    tmp55 = userIsInCall && !isUserRinging;
  }
  if (!tmp55) {
    let string2Result;
    const push9 = items5.push;
    const intl8 = tmp(tmp2[29]).intl;
    const string2 = intl8.string;
    const t2 = tmp(tmp2[29]).t;
    if (userIsInCall) {
      string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj15 = {
      label: string2Result,
      action() {
          let str = "RING";
          const tmp = trackUserProfileAction;
          if (userIsInCall) {
            str = "STOP_RINGING";
          }
          const obj = { action: str, analyticsLocations };
          tmp(obj);
          const obj2 = CallActionCreatorsDefault;
          if (userIsInCall) {
            const items = [user.id];
            obj2.stopRinging(selectedVoiceChannelId, items);
          } else {
            const items1 = [user.id];
            obj2.ring(selectedVoiceChannelId, items1, "user_profile_overflow_menu");
          }
        }
    };
    push9(obj15);
  }
  const DeveloperMode = tmp(tmp2[39]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const tmp60 = setting && isTidaMediaTakedownRegion;
  if (!tmp60) {
    const push10 = items5.push;
    const obj16 = {
      label: intl9.string(tmp(tmp2[29]).t.y5MwJy),
      action() {
          const obj = { action: "COPY_USERNAME", analyticsLocations };
          trackUserProfileAction(obj);
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj2 = UserUtilsDefault;
          copy(obj2.getUserTag(user, { decoration: "never", identifiable: "always" }));
          const obj3 = ToastUtils;
          const result = obj3.presentUsernameCopied();
        }
    };
    intl9 = tmp(tmp2[29]).intl;
    push10(obj16);
  }
  if (user.bot) {
    if (null != application) {
      const tmpResult24 = tmp(tmp2[43]);
      closure_16 = tmpResult24.supportsEmbeddedSurface(application, tmp(tmp2[44]).EmbeddedSurfaceType.MAIN);
      const tmpResult25 = tmp(tmp2[45]);
      installAppPropsFromProfileApplication = tmpResult25.getInstallAppPropsFromProfileApplication(application);
      const push13 = items5.push;
      const obj17 = {
        label: intl11.string(tmp(tmp2[29]).t.WqhZss),
        action() {
              let activityLaunchURL;
              const obj = { action: "COPY_APP_LINK", analyticsLocations };
              trackUserProfileAction(obj);
              const obj2 = getApplicationInstallURL2;
              if (closure_16) {
                const obj3 = { applicationId: application.id, referrerId: currentUser.id };
                activityLaunchURL = obj2.getActivityLaunchURL(obj3);
              } else {
                const getApplicationInstallURL = obj2.getApplicationInstallURL;
                const obj4 = { id: application.id };
                const merged = Object.assign(closure_17);
                activityLaunchURL = getApplicationInstallURL(obj4);
              }
              const obj5 = ClipboardUtils;
              obj5.copy(activityLaunchURL);
              const obj6 = ToastUtils;
              obj6.presentLinkCopied();
            }
      };
      intl11 = tmp(tmp2[29]).intl;
      push13(obj17);
    }
  }
  if (setting) {
    const push11 = items5.push;
    const obj18 = { isTidaRegion: isTidaMediaTakedownRegion, avatarGuildId: guildId5, bannerUrl: bannerURL };
    guildId5 = undefined;
    const getDeveloperCopyMenuItem = tmp(tmp2[35]).getDeveloperCopyMenuItem;
    tmp(tmp2[35]);
    if (displayProfile != null) {
      guildId5 = displayProfile.guildId;
    }
    bannerURL = undefined;
    if (displayProfile != null) {
      const obj19 = { canAnimate: true, size: canRing };
      bannerURL = displayProfile.getBannerURL(obj19);
    }
    push11(getDeveloperCopyMenuItem(obj4, obj18));
  }
  let hasItem1 = null != channel && null != selectedChannel;
  if (hasItem1) {
    const TEXTUAL = userIsInCall.TEXTUAL;
    hasItem1 = TEXTUAL.has(selectedChannel.type);
  }
  if (hasItem1) {
    const push12 = items5.push;
    const obj20 = {
      label: intl10.string(tmp(tmp2[29]).t.PHjkRE),
      action() {
          const obj = { userId: id2, selectedChannel, showUserProfile: callback1, analyticsLocations };
          return openUserContextMenuCommandsDefault(obj);
        }
    };
    intl10 = tmp(tmp2[29]).intl;
    push12(obj20);
  }
  if (0 !== items5.length) {
    const obj21 = { value: analyticsLocations, children: items8 };
    const obj22 = { ref, children: closure_15(View, obj23) };
    const AnalyticsLocationProvider = tmp(tmp2[18]).AnalyticsLocationProvider;
    obj23 = { style: tmp22, children: closure_15(tmp(tmp2[49]).ContextMenu, obj24) };
    View = tmp7(tmp2[48]).View;
    obj24 = {
      items: items7,
      onOpen() {
          const tmp = closure_15;
          if (tmp) {
            const obj = ShopThisLookAnalyticsUtils;
            const result = obj.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.MENU_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
          }
        },
      children(ref) {
          let MoreHorizontalIcon;
          let intl;
          let obj2;
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref, size: "sm", variant: "secondary-overlay", accessibilityLabel: intl.string(user(application[29]).t["+zofAD"]), icon: closure_15(MoreHorizontalIcon, obj2) };
          const IconButton = user(application[51]).IconButton;
          const merged1 = Object.assign(merged);
          intl = user(application[29]).intl;
          obj2 = { size: "sm", color: currentUser(application[53]).colors.WHITE };
          MoreHorizontalIcon = user(application[52]).MoreHorizontalIcon;
          return closure_15(IconButton, obj);
        }
    };
    items7 = [items5, items6];
    items8 = [closure_15(selectedVoiceChannelId, obj22), ];
    const obj25 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
    items8[1] = closure_15(currentUser(tmp2[54]), obj25);
    tmp70 = closure_16(AnalyticsLocationProvider, obj21);
  } else {
    tmp70 = null;
  }
  return tmp70;
};

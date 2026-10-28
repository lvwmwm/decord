// Module ID: 14501
// Function ID: 14502
// Name: UserProfileOverflowMenu
// Dependencies: [32, 19, 17, 6807, 4856, 4946, 4907, 7340, 1084, 5668, 21, 504, 14502, 13251, 11329, 14508, 8716, 7289, 7314, 8712, 8742, 8743, 14509, 14510, 14511, 7460, 7320, 8705, 1125, 7448, 5246, 6707, 14517, 1999, 14518, 2403, 11354, 7450, 4832, 7321, 5058, 5698, 2028, 5662, 9683, 12054, 14520, 5085, 9795, 14515, 7991, 9678, 587, 14521, 2]
// Exports: default

// Module 14501 (UserProfileOverflowMenu)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import UserUtilsDefault from "UserUtils" /* 5058 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import CallConstants from "CallConstants" /* 5668 */;
import ToastUtils from "ToastUtils" /* 5698 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import ClipboardUtils from "ClipboardUtils" /* 7321 */;
import Constants2 from "Constants" /* 7340 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7448 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7450 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8705 */;
import openGameOrganizationInvitePickerDefault from "openGameOrganizationInvitePicker" /* 11354 */;
import getApplicationInstallURL2 from "getApplicationInstallURL" /* 12054 */;
import GuildInviteUtils from "GuildInviteUtils" /* 14502 */;
import openShopThisLookActionSheet from "openShopThisLookActionSheet" /* 14511 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 14515 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 14520 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import Constants from "Constants" /* 1084 */;
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
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id) };
    return obj;
  });
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj2 = user(application[11]);
  let items1 = [newestAnalyticsLocation, trackUserProfileAction];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    const obj = { selectedChannel: trackUserProfileAction.getChannel(newestAnalyticsLocation.getChannelId()), selectedVoiceChannelId: newestAnalyticsLocation.getVoiceChannelId() };
    return obj;
  });
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  let obj3 = user(application[12]);
  [arr3, arr4] = channel(obj3.useServerInviteRows(user.id), 2);
  const tmp5 = channel(obj3.useServerInviteRows(user.id), 2);
  const tmp6 = null != analyticsLocations.getNickname(user.id);
  const tmp8 = currentUser(application[13])(user.id);
  const tmp9 = tmp8 && arr3.length + arr4.length > 0;
  const tmp10 = currentUser(tmp2[14])("user_profile_overflow_menu");
  const tmpResult = tmp(tmp2[15]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  const tmpResult13 = tmp(tmp2[16]);
  const userProfileAnalyticsContext = tmpResult13.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp7Result = currentUser(tmp2[17]);
  const tmp7ResultResult = tmp7Result(currentUser(tmp2[18]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  let id = user.id;
  const tmp7Result3 = currentUser(tmp2[19]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result3(id, guild_id);
  guildId = undefined;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  const tmpResult14 = tmp(tmp2[20]);
  const isShopThisLookMobileEnabled = tmpResult14.useIsShopThisLookMobileEnabled("UserProfileOverflowMenu");
  const tmpResult15 = tmp(tmp2[21]);
  const equippedCollectibleSkuIds = tmpResult15.useEquippedCollectibleSkuIds(user.id, guildId);
  let ref = selectedChannel.useRef(null);
  const tmp22 = currentUser(tmp2[22])();
  const tmpResult16 = tmp(tmp2[23]);
  const shopThisLookMarketing = tmpResult16.useShopThisLookMarketing(user.id, guildId, isShopThisLookMobileEnabled);
  const items2 = [user.id, guildId];
  ({ isVisible, markAsDismissed } = shopThisLookMarketing);
  const callback = selectedChannel.useCallback(() => {
    const obj = openShopThisLookActionSheet;
    const obj2 = { userId: user.id, guildId };
    const result = obj.openShopThisLookActionSheet(obj2);
  }, items2);
  const tmpResult17 = tmp(tmp2[25]);
  canRing = tmpResult17.useCanRing(user, selectedVoiceChannelId);
  const tmp7Result4 = currentUser(tmp2[26]);
  const tidaWebformEnabled = tmp7Result4.useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const items3 = [context];
  const tmpResult18 = tmp(tmp2[11]);
  const stateFromStoresObject2 = tmpResult18.useStateFromStoresObject(items3, () => {
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
  const tmp30 = callback1;
  if (channel != null) {
    id4 = channel.id;
  }
  closure_15 = tmp32;
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId2) {
    let obj5 = {
      label: intl.string(tmp(tmp2[28]).t.GISTta),
      action() {
          const obj = { action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback1(false);
        }
    };
    const push = items5.push;
    intl = tmp(tmp2[28]).intl;
    push(obj5);
  }
  let guildId3;
  if (tmp7Result1Result != null) {
    guildId3 = tmp7Result1Result.guildId;
  }
  let tmp36 = null != guildId3;
  if (tmp36) {
    let guildId4;
    if (displayProfile != null) {
      guildId4 = displayProfile.guildId;
    }
    tmp36 = null == guildId4;
  }
  if (tmp36) {
    let obj6 = {
      label: intl2.string(tmp(tmp2[28]).t.DisZzB),
      action() {
          const obj = { action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations };
          trackUserProfileAction(obj);
          callback1();
        }
    };
    const push2 = items5.push;
    intl2 = tmp(tmp2[28]).intl;
    push2(obj6);
  }
  const items6 = [];
  if (id3 !== id2) {
    let tmp39 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp39) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id2);
      }
      tmp39 = hasItem;
    }
    if (tmp39) {
      const push3 = items6.push;
      const obj7 = {
        label: intl3.string(tmp(tmp2[28]).t["n5zMI+"]),
        variant: "destructive",
        action() {
              const obj = ChannelActionCreatorsDefault;
              obj.removeRecipient(channel.id, id2);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
      };
      intl3 = tmp(tmp2[28]).intl;
      push3(obj7);
    }
    if (relationshipType === tmp30.FRIEND) {
      let stringResult;
      const push4 = items5.push;
      const intl4 = tmp(tmp2[28]).intl;
      const string = intl4.string;
      const t = tmp(tmp2[28]).t;
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
              obj2.pushLazy(asyncRequire(14517, dependencyMap.paths), obj3);
              const obj4 = ActionSheetActionCreatorsDefault;
              obj4.hideActionSheet();
            }
      };
      push4(obj8);
    }
    if (isShopThisLookMobileEnabled && equippedCollectibleSkuIds.length > 0) {
      const push5 = items5.push;
      const obj9 = {
        label: intl5.string(tmp(tmp2[28]).t.xNdRDO),
        action() {
              const obj = openShopThisLookActionSheet;
              const obj2 = { userId: id2, guildId };
              const result = obj.openShopThisLookActionSheet(obj2);
            }
      };
      intl5 = tmp(tmp2[28]).intl;
      push5(obj9);
    }
    const obj10 = { isIgnored, isBlocked: relationshipType === BLOCKED };
    const tmpResult19 = tmp(tmp2[34]);
    const ignoreMenuItem = tmpResult19.getIgnoreMenuItem(obj4, obj10);
    if (null != ignoreMenuItem) {
      items6.push(ignoreMenuItem);
    }
    const push6 = items6.push;
    const obj11 = { isBlocked: relationshipType === BLOCKED };
    const tmpResult20 = tmp(tmp2[34]);
    push6(tmpResult20.getBlockMenuItem(obj4, obj11));
    if (relationshipType !== BLOCKED) {
      const obj12 = { isInIarUserReportingExperiment: result, guildId: guildId1, reportEntrypoint: "UserProfileOverflowMenu" };
      const tmpResult21 = tmp(tmp2[34]);
      const reportMenuItem = tmpResult21.getReportMenuItem(obj4, obj12);
      if (null != reportMenuItem) {
        items6.push(reportMenuItem);
      }
      const tmp51 = !user.bot && tmp9;
      if (tmp51) {
        const push7 = items5.push;
        const obj13 = {
          label: intl6.string(tmp(tmp2[28]).t.Sd8Ixw),
          action() {
                  const obj = { action: "PRESS_INVITE_TO_SERVER", analyticsLocations };
                  trackUserProfileAction(obj);
                  const obj2 = GuildInviteUtils;
                  const result = obj2.showGuildInviteActionSheet(id2, newestAnalyticsLocation);
                }
        };
        intl6 = tmp(tmp2[28]).intl;
        push7(obj13);
      }
      const tmp53 = !user.bot && !user.isSystemUser() && tmp8 && tmp10;
      if (tmp53) {
        const push8 = items5.push;
        const obj14 = {
          label: intl7.string(currentUser(tmp2[35])["wkSug+"]),
          action() {
                  return openGameOrganizationInvitePickerDefault(id2);
                }
        };
        intl7 = tmp(tmp2[28]).intl;
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
    const intl8 = tmp(tmp2[28]).intl;
    const string2 = intl8.string;
    const t2 = tmp(tmp2[28]).t;
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
  const DeveloperMode = tmp(tmp2[38]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const tmp60 = setting && tidaWebformEnabled;
  if (!tmp60) {
    const push10 = items5.push;
    const obj16 = {
      label: intl9.string(tmp(tmp2[28]).t.y5MwJy),
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
    intl9 = tmp(tmp2[28]).intl;
    push10(obj16);
  }
  if (user.bot) {
    if (null != application) {
      const tmpResult22 = tmp(tmp2[42]);
      closure_16 = tmpResult22.supportsEmbeddedSurface(application, tmp(tmp2[43]).EmbeddedSurfaceType.MAIN);
      const tmpResult23 = tmp(tmp2[44]);
      installAppPropsFromProfileApplication = tmpResult23.getInstallAppPropsFromProfileApplication(application);
      const push13 = items5.push;
      const obj17 = {
        label: intl11.string(tmp(tmp2[28]).t.WqhZss),
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
      intl11 = tmp(tmp2[28]).intl;
      push13(obj17);
    }
  }
  if (setting) {
    const push11 = items5.push;
    const obj18 = { tidaWebformEnabled, avatarGuildId: guildId5, bannerUrl: bannerURL };
    guildId5 = undefined;
    const getDeveloperCopyMenuItem = tmp(tmp2[34]).getDeveloperCopyMenuItem;
    tmp(tmp2[34]);
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
      label: intl10.string(tmp(tmp2[28]).t.PHjkRE),
      action() {
          const obj = { userId: id2, selectedChannel, showUserProfile: callback1, analyticsLocations };
          return openUserContextMenuCommandsDefault(obj);
        }
    };
    intl10 = tmp(tmp2[28]).intl;
    push12(obj20);
  }
  if (0 !== items5.length) {
    const obj21 = { value: analyticsLocations, children: items8 };
    const obj22 = { ref, children: closure_15(View, obj23) };
    const AnalyticsLocationProvider = tmp(tmp2[17]).AnalyticsLocationProvider;
    obj23 = { style: tmp22, children: closure_15(tmp(tmp2[48]).ContextMenu, obj24) };
    View = tmp7(tmp2[47]).View;
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
          const obj = { ref, size: "sm", variant: "secondary-overlay", accessibilityLabel: intl.string(user(application[28]).t["+zofAD"]), icon: closure_15(MoreHorizontalIcon, obj2) };
          const IconButton = user(application[50]).IconButton;
          const merged1 = Object.assign(merged);
          intl = user(application[28]).intl;
          obj2 = { size: "sm", color: currentUser(application[52]).colors.WHITE };
          MoreHorizontalIcon = user(application[51]).MoreHorizontalIcon;
          return closure_15(IconButton, obj);
        }
    };
    items7 = [items5, items6];
    items8 = [closure_15(selectedVoiceChannelId, obj22), ];
    const obj25 = { targetRef: ref, visible: isVisible, onDismiss: markAsDismissed, onPress: callback };
    items8[1] = closure_15(currentUser(tmp2[53]), obj25);
    tmp70 = closure_16(AnalyticsLocationProvider, obj21);
  } else {
    tmp70 = null;
  }
  return tmp70;
};

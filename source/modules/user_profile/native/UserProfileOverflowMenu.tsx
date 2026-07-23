// Module ID: 12136
// Function ID: 95039
// Name: UserProfileOverflowMenu
// Dependencies: [57, 31, 4143, 1348, 3767, 1906, 653, 4148, 10420, 33, 566, 12137, 12143, 11895, 8266, 5464, 5484, 7887, 8920, 8921, 5491, 8559, 480, 8492, 1212, 4140, 4098, 4337, 12144, 1934, 8923, 10422, 7488, 10421, 7600, 477, 11653, 675, 8922, 4341, 3803, 5492, 3969, 3830, 5498, 11897, 9302, 7771, 8968, 689, 2]
// Exports: default

// Module 12136 (UserProfileOverflowMenu)
import _slicedToArray from "_slicedToArray";
import IgnoredInformationTable from "IgnoredInformationTable";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "BlockedInformationTable";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_15;
let closure_16;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_9, AVATAR_MAX_SIZE: closure_10, ChannelTypesSets: closure_11, NOOP: closure_12, RelationshipTypes: closure_13 } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_15, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_16 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let currentUser;
  let displayProfile;
  let isIgnored;
  let relationshipType;
  user = user.user;
  ({ currentUser, displayProfile } = user);
  const channel = user.channel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let canRing;
  let enabled;
  let userIsInCall;
  let constants;
  let id;
  let guildId;
  let obj = user(channel[10]);
  let items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = user(channel[10]);
  let items1 = [analyticsLocations, context];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    let getChannel;
    let getChannel2;
    ({ getChannel, getChannel: getChannel2 } = context);
    return { selectedChannel: getChannel(analyticsLocations.getChannelId()), selectedVoiceChannelId: analyticsLocations.getVoiceChannelId(), selectedVoiceChannel: getChannel2(analyticsLocations.getVoiceChannelId()) };
  });
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  const selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let obj2 = user(channel[11]);
  [arr3, arr4] = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp3 = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp4 = null != trackUserProfileAction.getNickname(user.id);
  let obj3 = user(channel[13]);
  let result = obj3.isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj4 = user(channel[14]);
  const userProfileAnalyticsContext = obj4.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp5 = displayProfile(channel[12])(user.id) && arr2.length + arr3.length > 0;
  const tmp8Result = displayProfile(channel[15])(displayProfile(channel[16]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp8Result.analyticsLocations;
  newestAnalyticsLocation = tmp8Result.newestAnalyticsLocation;
  let guild_id;
  const tmp8 = displayProfile(channel[15]);
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const tmp10Result = displayProfile(channel[17])(user.id, guild_id);
  let obj5 = user(channel[18]);
  canRing = obj5.useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  let obj6 = displayProfile(channel[19]);
  obj = {};
  let guild_id1;
  if (null != selectedVoiceChannel) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  obj.guildId = guild_id1;
  obj.location = "UserProfileOverflowMenu";
  enabled = obj6.useExperiment(obj).enabled;
  let obj8 = displayProfile(channel[20]);
  const tidaWebformEnabled = obj8.useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  let obj9 = user(channel[10]);
  const items2 = [selectedVoiceChannel];
  const stateFromStoresObject2 = obj9.useStateFromStoresObject(items2, () => {
    let tmp = canRing;
    if (canRing) {
      tmp = null != selectedVoiceChannelId;
    }
    let participant = null;
    if (tmp) {
      participant = selectedVoiceChannel.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant };
    let ringing = null != participant;
    if (ringing) {
      ringing = participant.type === id.USER;
    }
    if (ringing) {
      ringing = participant.ringing;
    }
    obj.isUserRinging = ringing;
    return obj;
  });
  userIsInCall = stateFromStoresObject2.userIsInCall;
  if (canRing) {
    canRing = null != selectedVoiceChannelId;
  }
  if (canRing) {
    canRing = !userIsInCall || stateFromStoresObject2.isUserRinging;
    const tmp16 = !userIsInCall || stateFromStoresObject2.isUserRinging;
  }
  obj = {};
  const tmp10 = displayProfile(channel[17]);
  obj.type = user(channel[22]).ImpressionTypes.MENU;
  obj.name = user(channel[22]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
  obj1 = { voice_channel_id: selectedVoiceChannelId };
  let guild_id2;
  if (null != selectedVoiceChannel) {
    guild_id2 = selectedVoiceChannel.guild_id;
  }
  obj1.voice_guild_id = guild_id2;
  obj.properties = obj1;
  obj2 = {};
  if (enabled) {
    enabled = canRing;
  }
  obj2.disableTrack = !enabled;
  const items3 = [user.id];
  displayProfile(channel[21])(obj, obj2, items3);
  const items4 = [user.id, , , ];
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = context;
  items4[3] = analyticsLocations;
  constants = selectedVoiceChannelId.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(context);
    obj["showGuildProfile"] = arg0;
    obj["userId"] = user.id;
    let id;
    if (null != channel) {
      id = channel.id;
    }
    obj["channelId"] = id;
    obj["sourceAnalyticsLocations"] = analyticsLocations;
    obj["ignoreBlockedSpeedBump"] = true;
    displayProfile(channel[23])(obj);
  }, items4);
  const items5 = [];
  const items6 = [];
  id = user.id;
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guildId1;
  if (null != displayProfile) {
    guildId1 = displayProfile.guildId;
  }
  if (null != guildId1) {
    obj3 = {};
    let intl = user(channel[24]).intl;
    obj3.label = intl.string(user(channel[24]).t.GISTta);
    obj3.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback(false);
    };
    items5.push(obj3);
  }
  let guildId2;
  if (null != tmp10Result) {
    guildId2 = tmp10Result.guildId;
  }
  let tmp29 = null != guildId2;
  if (tmp29) {
    let guildId3;
    if (null != displayProfile) {
      guildId3 = displayProfile.guildId;
    }
    tmp29 = null == guildId3;
  }
  if (tmp29) {
    obj4 = {};
    let intl2 = user(channel[24]).intl;
    obj4.label = intl2.string(user(channel[24]).t.DisZzB);
    obj4.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      callback();
    };
    items5.push(obj4);
  }
  if (currentUser.id !== id) {
    let hasItem = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (hasItem) {
      const recipients = channel.recipients;
      hasItem = null != recipients;
      let obj15 = recipients;
    }
    if (hasItem) {
      hasItem = obj15.includes(id);
    }
    if (hasItem) {
      obj5 = {};
      let intl3 = user(channel[24]).intl;
      obj5.label = intl3.string(user(channel[24]).t["n5zMI+"]);
      obj5.variant = "destructive";
      obj5.action = function action() {
        displayProfile(channel[25]).removeRecipient(channel.id, id);
        const obj = displayProfile(channel[25]);
        displayProfile(channel[26]).hideActionSheet();
      };
      items6.push(obj5);
    }
    if (relationshipType !== constants.FRIEND) {
      if (isIgnored) {
        if (!tmp23) {
          obj6 = {};
          let intl5 = user(channel[24]).intl;
          obj6.label = intl5.string(user(channel[24]).t["8wXU9B"]);
          obj6.action = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            let id;
            if (null != channel) {
              id = channel.id;
            }
            displayProfile(channel[30]).unignoreUser(id, newestAnalyticsLocation, id);
            callback();
          };
          arr2 = items6.push(obj6);
        }
        const push = items6.push;
        if (tmp23) {
          const obj7 = {};
          const intl11 = user(channel[24]).intl;
          obj7.label = intl11.string(user(channel[24]).t.XyHpKH);
          obj7.action = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            displayProfile(channel[30]).unblockUser(id, obj);
            callback();
            const obj2 = displayProfile(channel[30]);
            id = undefined;
            if (null != channel) {
              id = channel.id;
            }
            const result = displayProfile(channel[32]).showUnblockSuccessToast(id, id);
          };
          arr3 = push(obj7);
        } else {
          obj8 = {};
          const intl7 = user(channel[24]).intl;
          obj8.label = intl7.string(user(channel[24]).t.l4Emac);
          obj8.variant = "destructive";
          obj8.action = function action() {
            let obj = displayProfile(channel[26]);
            obj = { userId: id };
            id = undefined;
            if (null != channel) {
              id = channel.id;
            }
            obj.channelId = id;
            obj.onSuccess = function onSuccess() {
              let id;
              if (null != outer1_2) {
                id = outer1_2.id;
              }
              const result = displayProfile(channel[32]).showBlockSuccessToast(outer1_14, id);
            };
            obj.impressionName = user(channel[22]).ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(user(channel[29])(channel[33], channel.paths), guildId, obj, "stack");
          };
          push(obj8);
          if (result) {
            obj9 = {};
            const intl9 = user(channel[24]).intl;
            obj9.label = intl9.string(user(channel[24]).t.wqHXNt);
            obj9.variant = "destructive";
            obj9.action = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp2;
              if ("@me" !== guildId) {
                if (null !== guildId) {
                  tmp2 = guildId;
                }
              }
              const result = user(channel[34]).showReportModalForUser(user, tmp2);
              const obj = { action: "REPORT", analyticsLocations };
              const obj2 = user(channel[34]);
              displayProfile(channel[26]).hideActionSheet();
            };
            items6.push(obj9);
          } else {
            if (obj22.isAndroid()) {
              const obj10 = {};
              const intl8 = user(channel[24]).intl;
              obj10.label = intl8.string(user(channel[24]).t.TbHyMG);
              obj10.variant = "destructive";
              obj10.action = function action() {
                let obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                user(channel[36]).alertUserReported();
                const obj2 = user(channel[36]);
                obj = { reported_user_id: id };
                displayProfile(channel[37]).track(newestAnalyticsLocation.TNS_USER_REPORT_SUBMITTED, obj);
              };
              items6.push(obj10);
            }
            obj22 = user(channel[35]);
          }
          if (tmp5) {
            const obj11 = {};
            const intl10 = user(channel[24]).intl;
            obj11.label = intl10.string(user(channel[24]).t.Sd8Ixw);
            obj11.action = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = user(channel[11]).showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items5.push(obj11);
          }
        }
      }
      if (!tmp23) {
        const obj12 = {};
        const intl6 = user(channel[24]).intl;
        obj12.label = intl6.string(user(channel[24]).t.ytCpKs);
        obj12.action = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = displayProfile(channel[26]);
          obj = { userId: id };
          id = undefined;
          if (null != channel) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.onSuccess = userIsInCall;
          obj.impressionName = user(channel[22]).ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(user(channel[29])(channel[31], channel.paths), outer1_16, obj, "stack");
        };
        items6.push(obj12);
      }
    } else {
      let obj13 = {};
      let intl4 = user(channel[24]).intl;
      const string = intl4.string;
      if (tmp4) {
        let stringResult = string(_8pOYUE);
      } else {
        stringResult = string(_8pOYUE.BGYkaH);
      }
      obj13.label = stringResult;
      obj13.action = function action() {
        let obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { userId: id, showUserProfile: closure_13 };
        displayProfile(channel[27]).pushLazy(user(channel[29])(channel[28], channel.paths), obj);
        const obj2 = displayProfile(channel[27]);
        displayProfile(channel[26]).hideActionSheet();
      };
      obj13 = items5.push(obj13);
    }
  }
  if (!canRing) {
    const DeveloperMode = user(channel[40]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp71 = setting;
    if (setting) {
      tmp71 = tidaWebformEnabled;
    }
    if (!tmp71) {
      const obj14 = {};
      const intl13 = user(channel[24]).intl;
      obj14.label = intl13.string(user(channel[24]).t.y5MwJy);
      obj14.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = user(channel[41]);
        obj2.copy(displayProfile(channel[42]).getUserTag(user, { decoration: "never", identifiable: "always" }));
        const obj3 = displayProfile(channel[42]);
        const result = user(channel[43]).presentUsernameCopied();
      };
      items5.push(obj14);
    }
    if (setting) {
      const push2 = items5.push;
      obj15 = {};
      const intl14 = user(channel[24]).intl;
      const string3 = intl14.string;
      const t = user(channel[24]).t;
      if (tidaWebformEnabled) {
        obj15.label = string3(t.QvQeLv);
        obj15.action = function action() {
          const items = [];
          let obj = {};
          const intl = user(channel[24]).intl;
          obj.label = intl.string(user(channel[24]).t.y5MwJy);
          obj.onPress = function onPress() {
            outer1_7({ action: "COPY_USERNAME", analyticsLocations: outer1_8 });
            const obj = { action: "COPY_USERNAME", analyticsLocations: outer1_8 };
            const obj2 = user(channel[41]);
            obj2.copy(displayProfile(channel[42]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = displayProfile(channel[42]);
            const result = user(channel[43]).presentUsernameCopied();
          };
          items.push(obj);
          obj = {};
          const intl2 = user(channel[24]).intl;
          obj.label = intl2.string(user(channel[24]).t["/AXYnE"]);
          obj.onPress = function onPress() {
            outer1_7({ action: "COPY_USER_ID", analyticsLocations: outer1_8 });
            user(channel[41]).copy(outer1_14);
            const obj = { action: "COPY_USER_ID", analyticsLocations: outer1_8 };
            const obj2 = user(channel[41]);
            user(channel[43]).presentIdCopied();
          };
          items.push(obj);
          let hasAvatarForGuildResult = null != bannerURL.avatar;
          if (!hasAvatarForGuildResult) {
            let guildId;
            if (null != displayProfile) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = bannerURL.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            obj = {};
            const intl3 = user(channel[24]).intl;
            obj.label = intl3.string(user(channel[24]).t.gERDvM);
            obj.onPress = function onPress() {
              outer1_7({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations: outer1_8 });
              let guildId;
              if (null != outer1_1) {
                guildId = outer1_1.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, canRing, true);
              if (null != avatarURL) {
                user(channel[41]).copy(avatarURL);
                const obj2 = user(channel[41]);
                user(channel[43]).presentLinkCopied();
                const obj3 = user(channel[43]);
              }
            };
            items.push(obj);
          }
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: canRing };
            bannerURL = displayProfile.getBannerURL(obj1);
            if (null != bannerURL) {
              let obj2 = {};
              const intl4 = user(channel[24]).intl;
              obj2.label = intl4.string(user(channel[24]).t.hsNv0R);
              obj2.onPress = function onPress() {
                outer1_7({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 });
                user(channel[41]).copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 };
                const obj2 = user(channel[41]);
                user(channel[43]).presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj4 = user(channel[44]);
          let obj3 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          obj4 = {};
          const intl5 = user(channel[24]).intl;
          obj4.title = intl5.string(user(channel[24]).t.QvQeLv);
          obj3.header = obj4;
          let result = obj4.showSimpleActionSheet(obj3);
        };
        push2(obj15);
      } else {
        obj15.label = string3(t["/AXYnE"]);
        obj15.action = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          user(channel[41]).copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          const obj2 = user(channel[41]);
          user(channel[43]).presentIdCopied();
        };
        push2(obj15);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = enabled.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj16 = {};
      const intl15 = user(channel[24]).intl;
      obj16.label = intl15.string(user(channel[24]).t.PHjkRE);
      obj16.action = function action() {
        return displayProfile(channel[45])({ userId: id, selectedChannel, showUserProfile: closure_13, analyticsLocations });
      };
      items5.push(obj16);
    }
    if (0 !== items5.length) {
      const obj17 = { value: analyticsLocations };
      const obj18 = {};
      const items7 = [items5, items6];
      obj18.items = items7;
      obj18.children = function children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj["size"] = "sm";
        obj["variant"] = "secondary-overlay";
        const intl = user(channel[24]).intl;
        obj["accessibilityLabel"] = intl.string(user(channel[24]).t["+zofAD"]);
        obj = { size: "sm", color: displayProfile(channel[49]).colors.WHITE };
        obj["icon"] = outer1_17(user(channel[48]).MoreHorizontalIcon, obj);
        return outer1_17(user(channel[47]).IconButton, obj);
      };
      obj17.children = jsx(user(channel[46]).ContextMenu, {});
      let tmp84 = jsx(user(channel[15]).AnalyticsLocationProvider, { value: analyticsLocations });
    } else {
      tmp84 = null;
    }
    return tmp84;
  } else {
    let obj19 = {};
    const intl12 = user(channel[24]).intl;
    const string2 = intl12.string;
    let ygslb0 = user(channel[24]).t;
    if (userIsInCall) {
      ygslb0 = ygslb0.ygslb0;
      let string2Result = string2(ygslb0);
    } else {
      string2Result = string2(ygslb0.bHa9kN);
    }
    obj19.label = string2Result;
    obj19.action = function action() {
      const obj = {};
      let str = "RING";
      if (userIsInCall) {
        str = "STOP_RINGING";
      }
      obj.action = str;
      obj.analyticsLocations = analyticsLocations;
      trackUserProfileAction(obj);
      const obj2 = displayProfile(channel[38]);
      if (userIsInCall) {
        const items = [user.id];
        obj2.stopRinging(selectedVoiceChannelId, items);
      } else {
        const items1 = [user.id];
        obj2.ring(selectedVoiceChannelId, items1, "user_profile_overflow_menu");
        let tmp6 = enabled;
        if (enabled) {
          tmp6 = null != selectedVoiceChannel;
        }
        if (tmp6) {
          displayProfile(channel[26]).hideActionSheet();
          const obj3 = displayProfile(channel[26]);
          user(channel[39]).openChannelCallModal(selectedVoiceChannel);
          const obj4 = user(channel[39]);
        }
      }
    };
    obj19 = items5.push(obj19);
  }
};

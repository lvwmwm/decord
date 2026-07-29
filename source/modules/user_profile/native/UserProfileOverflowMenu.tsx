// Module ID: 12207
// Function ID: 12208
// Name: UserProfileOverflowMenu
// Dependencies: [32, 19, 4202, 1372, 3826, 1931, 676, 4207, 10448, 21, 589, 12208, 12214, 11966, 8107, 5515, 5535, 7983, 8915, 8916, 5542, 8426, 503, 8359, 1236, 4199, 4157, 4395, 12215, 1959, 8918, 10450, 6721, 10449, 7692, 500, 11713, 698, 8917, 4399, 3862, 5543, 4028, 3889, 5549, 11968, 9299, 6682, 8963, 712, 2]
// Exports: default

// Module 12207 (UserProfileOverflowMenu)
import module_6721 from "module_6721";
import experiment from "experiment";
import getParticipants from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "trackImpression";

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: c9, AVATAR_MAX_SIZE: c10, ChannelTypesSets: unpackModuleId, NOOP: closure_12, RelationshipTypes: map1 } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_15, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_16 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("getParticipants").fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

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
  let selectedChannel;
  let selectedVoiceChannelId;
  let selectedVoiceChannel;
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
  selectedChannel = stateFromStoresObject1.selectedChannel;
  selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let obj2 = user(channel[11]);
  [arr3, arr4] = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  const tmp5 = selectedChannel(obj2.useServerInviteRows(user.id), 2);
  let tmp8 = displayProfile(channel[12])(user.id);
  if (tmp8) {
    tmp8 = arr2.length + arr3.length > 0;
  }
  let tmpResult = tmp(tmp2[13]);
  let result = tmpResult.isIarUserReportingEnabled("User Profile Options - Mobile");
  tmpResult = tmp(tmp2[14]);
  const userProfileAnalyticsContext = tmpResult.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let tmp7Result = tmp7(tmp2[15]);
  const tmp7ResultResult = tmp7Result(displayProfile(channel[16]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7ResultResult.analyticsLocations;
  newestAnalyticsLocation = tmp7ResultResult.newestAnalyticsLocation;
  let guild_id;
  tmp7Result = tmp7(tmp2[17]);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp7Result1Result = tmp7Result(user.id, guild_id);
  const tmp6 = null != trackUserProfileAction.getNickname(user.id);
  canRing = user(channel[18]).useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  const tmpResult1 = user(channel[18]);
  let guild_id1;
  if (selectedVoiceChannel != null) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  enabled = displayProfile(channel[19]).useExperiment({ guildId: guild_id1, location: "UserProfileOverflowMenu" }).enabled;
  const tmp7Result1 = displayProfile(channel[19]);
  const tidaWebformEnabled = displayProfile(channel[20]).useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const tmp7Result2 = displayProfile(channel[20]);
  const items2 = [selectedVoiceChannel];
  const stateFromStoresObject2 = user(channel[10]).useStateFromStoresObject(items2, () => {
    let tmp = canRing;
    if (canRing) {
      tmp = null != selectedVoiceChannelId;
    }
    let participant = null;
    if (tmp) {
      participant = selectedVoiceChannel.getParticipant(selectedVoiceChannelId, user.id);
    }
    const obj = { userIsInCall: null != participant, isUserRinging: null };
    let ringing = null != participant;
    if (ringing) {
      ringing = participant.type === id.USER;
    }
    if (ringing) {
      ringing = participant.ringing;
    }
    obj[1] = ringing;
    return obj;
  });
  userIsInCall = stateFromStoresObject2.userIsInCall;
  if (canRing) {
    canRing = null != selectedVoiceChannelId;
  }
  if (canRing) {
    let isUserRinging = !userIsInCall;
    if (userIsInCall) {
      isUserRinging = stateFromStoresObject2.isUserRinging;
    }
    canRing = isUserRinging;
  }
  obj = { type: null, name: null, properties: null };
  const tmpResult2 = user(channel[10]);
  obj[0] = user(channel[22]).ImpressionTypes.MENU;
  obj[1] = user(channel[22]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
  obj = { voice_channel_id: selectedVoiceChannelId, voice_guild_id: null };
  let guild_id2;
  if (selectedVoiceChannel != null) {
    guild_id2 = selectedVoiceChannel.guild_id;
  }
  obj[1] = guild_id2;
  obj[2] = obj;
  if (enabled) {
    enabled = canRing;
  }
  obj1 = { disableTrack: !enabled };
  const items3 = [user.id];
  displayProfile(channel[21])(obj, obj1, items3);
  const items4 = [user.id, , , ];
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = context;
  items4[3] = analyticsLocations;
  constants = selectedVoiceChannelId.useCallback((showGuildProfile) => {
    const obj = {};
    const merged = Object.assign(context);
    obj.showGuildProfile = showGuildProfile;
    obj.userId = user.id;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj.channelId = id;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    displayProfile(channel[23])(obj);
  }, items4);
  id = user.id;
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let guildId1;
  if (displayProfile != null) {
    guildId1 = displayProfile.guildId;
  }
  const items5 = [];
  if (null != guildId1) {
    obj2 = { label: null, action: null };
    let intl = tmp(tmp2[24]).intl;
    obj2[0] = intl.string(tmp(tmp2[24]).t.GISTta);
    obj2[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback(false);
    };
    items5.push(obj2);
  }
  let guildId2;
  if (tmp7Result1Result != null) {
    guildId2 = tmp7Result1Result.guildId;
  }
  let tmp29 = null != guildId2;
  if (tmp29) {
    let guildId3;
    if (displayProfile != null) {
      guildId3 = displayProfile.guildId;
    }
    tmp29 = null == guildId3;
  }
  if (tmp29) {
    let obj3 = { label: null, action: null };
    let intl2 = tmp(tmp2[24]).intl;
    obj3[0] = intl2.string(tmp(tmp2[24]).t.DisZzB);
    obj3[1] = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations });
      callback();
    };
    items5.push(obj3);
  }
  const items6 = [];
  if (currentUser.id !== id) {
    let tmp32 = null != channel && !channel.isThread() && channel.isOwner(currentUser.id);
    if (tmp32) {
      const recipients = channel.recipients;
      let hasItem;
      if (recipients != null) {
        hasItem = recipients.includes(id);
      }
      tmp32 = hasItem;
    }
    if (tmp32) {
      let obj4 = { label: null, variant: "destructive", action: null };
      let intl3 = tmp(tmp2[24]).intl;
      obj4[0] = intl3.string(tmp(tmp2[24]).t["n5zMI+"]);
      obj4[2] = function action() {
        displayProfile(channel[25]).removeRecipient(channel.id, id);
        const obj = displayProfile(channel[25]);
        displayProfile(channel[26]).hideActionSheet();
      };
      items6.push(obj4);
    }
    if (relationshipType !== constants.FRIEND) {
      if (isIgnored) {
        if (!tmp36) {
          const obj5 = { label: null, action: null };
          let intl5 = tmp(tmp2[24]).intl;
          obj5[0] = intl5.string(tmp(tmp2[24]).t["8wXU9B"]);
          obj5[1] = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            let id;
            if (channel != null) {
              id = channel.id;
            }
            displayProfile(channel[30]).unignoreUser(id, newestAnalyticsLocation, id);
            callback();
          };
          arr2 = items6.push(obj5);
        }
        const push = items6.push;
        if (tmp36) {
          const obj6 = { label: null, action: null };
          const intl11 = tmp(tmp2[24]).intl;
          obj6[0] = intl11.string(tmp(tmp2[24]).t.XyHpKH);
          obj6[1] = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            displayProfile(channel[30]).unblockUser(id, obj);
            callback();
            const obj2 = displayProfile(channel[30]);
            const tmp2 = id;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            const result = displayProfile(channel[32]).showUnblockSuccessToast(tmp2, id);
          };
          arr3 = push(obj6);
        } else {
          const obj7 = { label: null, variant: "destructive", action: null };
          const intl7 = tmp(tmp2[24]).intl;
          obj7[0] = intl7.string(tmp(tmp2[24]).t.l4Emac);
          obj7[2] = function action() {
            let obj = displayProfile(channel[26]);
            obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj[1] = id;
            obj[2] = function onSuccess() {
              let id;
              if (id != null) {
                id = id.id;
              }
              const result = outer1_1(outer1_2[32]).showBlockSuccessToast(closure_14, id);
            };
            obj[3] = user(channel[22]).ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(user(channel[29])(channel[33], channel.paths), guildId, obj, "stack");
          };
          push(obj7);
          if (result) {
            const obj8 = { label: null, variant: "destructive", action: null };
            const intl9 = tmp(tmp2[24]).intl;
            obj8[0] = intl9.string(tmp(tmp2[24]).t.wqHXNt);
            obj8[2] = function action() {
              trackUserProfileAction({ action: "REPORT", analyticsLocations });
              let tmp3;
              if ("@me" !== guildId) {
                if (null !== tmp2) {
                  tmp3 = tmp2;
                }
              }
              const result = user(channel[34]).showReportModalForUser(user, tmp3);
              const obj = { action: "REPORT", analyticsLocations };
              const obj2 = user(channel[34]);
              displayProfile(channel[26]).hideActionSheet();
            };
            items6.push(obj8);
          } else {
            if (tmpResult3.isAndroid()) {
              const obj9 = { label: null, variant: "destructive", action: null };
              const intl8 = tmp(tmp2[24]).intl;
              obj9[0] = intl8.string(tmp(tmp2[24]).t.TbHyMG);
              obj9[2] = function action() {
                let obj = { action: "REPORT", analyticsLocations };
                trackUserProfileAction(obj);
                user(channel[36]).alertUserReported();
                const obj2 = user(channel[36]);
                obj = { reported_user_id: id };
                displayProfile(channel[37]).track(newestAnalyticsLocation.TNS_USER_REPORT_SUBMITTED, obj);
              };
              items6.push(obj9);
            }
            tmpResult3 = tmp(tmp2[35]);
          }
          if (tmp8) {
            const obj10 = { label: null, action: null };
            const intl10 = tmp(tmp2[24]).intl;
            obj10[0] = intl10.string(tmp(tmp2[24]).t.Sd8Ixw);
            obj10[1] = function action() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations });
              const result = user(channel[11]).showGuildInviteActionSheet(id, newestAnalyticsLocation);
            };
            items5.push(obj10);
          }
        }
      }
      if (relationshipType !== constants.BLOCKED) {
        const obj11 = { label: null, action: null };
        const intl6 = tmp(tmp2[24]).intl;
        obj11[0] = intl6.string(tmp(tmp2[24]).t.ytCpKs);
        obj11[1] = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = displayProfile(channel[26]);
          const tmp2 = channel;
          const tmp3 = user;
          obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj[1] = id;
          obj[2] = userIsInCall;
          obj[3] = tmp3(tmp2[22]).ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(user(channel[29])(channel[31], channel.paths), outer1_16, obj, "stack");
        };
        items6.push(obj11);
      }
    } else {
      let intl4 = tmp(tmp2[24]).intl;
      const string = intl4.string;
      let t = tmp(tmp2[24]).t;
      if (tmp6) {
        let stringResult = string(t["8pOYUE"]);
      } else {
        stringResult = string(t.BGYkaH);
      }
      const obj12 = { label: null, action: null };
      obj12[0] = stringResult;
      obj12[1] = function action() {
        let obj = { action: "PRESS_SET_FRIEND_NICKNAME", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { userId: id, showUserProfile: closure_13 };
        displayProfile(channel[27]).pushLazy(user(channel[29])(channel[28], channel.paths), obj);
        const obj2 = displayProfile(channel[27]);
        displayProfile(channel[26]).hideActionSheet();
      };
      t = items5.push(obj12);
    }
  }
  if (!canRing) {
    const DeveloperMode = tmp(tmp2[40]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp46 = setting;
    if (setting) {
      tmp46 = tidaWebformEnabled;
    }
    if (!tmp46) {
      const obj13 = { label: null, action: null };
      const intl13 = tmp(tmp2[24]).intl;
      obj13[0] = intl13.string(tmp(tmp2[24]).t.y5MwJy);
      obj13[1] = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = user(channel[41]);
        obj2.copy(displayProfile(channel[42]).getUserTag(user, { decoration: "never", identifiable: "always" }));
        const obj3 = displayProfile(channel[42]);
        const result = user(channel[43]).presentUsernameCopied();
      };
      items5.push(obj13);
    }
    if (setting) {
      const push2 = items5.push;
      const obj14 = { label: null, action: null };
      const intl14 = tmp(tmp2[24]).intl;
      const string3 = intl14.string;
      const t3 = tmp(tmp2[24]).t;
      if (tidaWebformEnabled) {
        obj14[0] = string3(t3.QvQeLv);
        obj14[1] = function action() {
          const items = [];
          let obj = { label: null, onPress: null };
          const intl = user(channel[24]).intl;
          obj[0] = intl.string(user(channel[24]).t.y5MwJy);
          obj[1] = function onPress() {
            callback({ action: "COPY_USERNAME", analyticsLocations: handleConnectionOpen });
            const obj = { action: "COPY_USERNAME", analyticsLocations: handleConnectionOpen };
            const obj2 = bannerURL(outer1_2[41]);
            obj2.copy(outer1_1(outer1_2[42]).getUserTag(bannerURL, { decoration: "never", identifiable: "always" }));
            const obj3 = outer1_1(outer1_2[42]);
            const result = bannerURL(outer1_2[43]).presentUsernameCopied();
          };
          items.push(obj);
          obj = { label: null, onPress: null };
          const intl2 = user(channel[24]).intl;
          obj[0] = intl2.string(user(channel[24]).t["/AXYnE"]);
          obj[1] = function onPress() {
            callback({ action: "COPY_USER_ID", analyticsLocations: handleConnectionOpen });
            bannerURL(outer1_2[41]).copy(closure_14);
            const obj = { action: "COPY_USER_ID", analyticsLocations: handleConnectionOpen };
            const obj2 = bannerURL(outer1_2[41]);
            bannerURL(outer1_2[43]).presentIdCopied();
          };
          items.push(obj);
          let obj2 = bannerURL;
          let hasAvatarForGuildResult = null != bannerURL.avatar;
          if (!hasAvatarForGuildResult) {
            let guildId;
            if (displayProfile != null) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = obj2.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            obj = { label: null, onPress: null };
            const intl3 = tmp(tmp2[24]).intl;
            obj[0] = intl3.string(tmp(tmp2[24]).t.gERDvM);
            obj[1] = function onPress() {
              callback({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations: handleConnectionOpen });
              let guildId;
              if (guildId != null) {
                guildId = guildId.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, outer1_10, true);
              if (null != avatarURL) {
                bannerURL(outer1_2[41]).copy(avatarURL);
                const obj2 = bannerURL(outer1_2[41]);
                bannerURL(outer1_2[43]).presentLinkCopied();
                const obj3 = bannerURL(outer1_2[43]);
              }
            };
            items.push(obj);
          }
          let obj4 = displayProfile;
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: null };
            obj1[1] = canRing;
            bannerURL = obj4.getBannerURL(obj1);
            if (null != bannerURL) {
              obj2 = { label: null, onPress: null };
              const intl4 = tmp(tmp2[24]).intl;
              obj2[0] = intl4.string(tmp(tmp2[24]).t.hsNv0R);
              obj2[1] = function onPress() {
                outer1_7({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 });
                user(channel[41]).copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: outer1_8 };
                const obj2 = user(channel[41]);
                user(channel[43]).presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj3 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
          obj4 = { title: null };
          const intl5 = tmp(tmp2[24]).intl;
          obj4[0] = intl5.string(user(channel[24]).t.QvQeLv);
          obj3[2] = obj4;
          let result = user(channel[44]).showSimpleActionSheet(obj3);
        };
        push2(obj14);
      } else {
        obj14[0] = string3(t3["/AXYnE"]);
        obj14[1] = function action() {
          trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
          user(channel[41]).copy(id);
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          const obj2 = user(channel[41]);
          user(channel[43]).presentIdCopied();
        };
        push2(obj14);
      }
    }
    let hasItem1 = null != channel && null != selectedChannel;
    if (hasItem1) {
      const TEXTUAL = enabled.TEXTUAL;
      hasItem1 = TEXTUAL.has(selectedChannel.type);
    }
    if (hasItem1) {
      const obj15 = { label: null, action: null };
      const intl15 = tmp(tmp2[24]).intl;
      obj15[0] = intl15.string(tmp(tmp2[24]).t.PHjkRE);
      obj15[1] = function action() {
        return displayProfile(channel[45])({ userId: id, selectedChannel, showUserProfile: closure_13, analyticsLocations });
      };
      items5.push(obj15);
    }
    if (0 !== items5.length) {
      const obj16 = { value: null, children: null };
      obj16[0] = analyticsLocations;
      const obj17 = { items: null, children: null };
      const items7 = [items5, items6];
      obj17[0] = items7;
      obj17[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = user(channel[24]).intl;
        obj.accessibilityLabel = intl.string(user(channel[24]).t["+zofAD"]);
        obj = { size: "sm", color: null };
        obj[1] = displayProfile(channel[49]).colors.WHITE;
        obj.icon = callback2(user(channel[48]).MoreHorizontalIcon, obj);
        return callback2(user(channel[47]).IconButton, obj);
      };
      obj16[1] = jsx(tmp(tmp2[46]).ContextMenu, { items: null, children: null });
      let tmp53 = jsx(tmp(tmp2[15]).AnalyticsLocationProvider, { value: null, children: null });
    } else {
      tmp53 = null;
    }
    return tmp53;
  } else {
    const intl12 = tmp(tmp2[24]).intl;
    const string2 = intl12.string;
    let t2 = tmp(tmp2[24]).t;
    if (userIsInCall) {
      let string2Result = string2(t2.ygslb0);
    } else {
      string2Result = string2(t2.bHa9kN);
    }
    const obj18 = { label: null, action: null };
    obj18[0] = string2Result;
    obj18[1] = function action() {
      let str = "RING";
      if (userIsInCall) {
        str = "STOP_RINGING";
      }
      trackUserProfileAction({ action: str, analyticsLocations });
      const obj2 = displayProfile(channel[38]);
      if (userIsInCall) {
        const items = [user.id];
        obj2.stopRinging(selectedVoiceChannelId, items);
      } else {
        const items1 = [user.id];
        obj2.ring(selectedVoiceChannelId, items1, "user_profile_overflow_menu");
        let tmp7 = enabled;
        if (enabled) {
          tmp7 = null != selectedVoiceChannel;
        }
        if (tmp7) {
          displayProfile(channel[26]).hideActionSheet();
          const obj3 = displayProfile(channel[26]);
          user(channel[39]).openChannelCallModal(selectedVoiceChannel);
          const obj4 = user(channel[39]);
        }
      }
    };
    t2 = items5.push(obj18);
  }
};

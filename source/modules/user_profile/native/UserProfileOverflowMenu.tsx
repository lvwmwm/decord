// Module ID: 12018
// Function ID: 92862
// Name: UserProfileOverflowMenu
// Dependencies: [126746624, 348323840, 37093376, 251723776, 79429632, 488570880, 555483136, 768999424, 131072, 351272960, 57, 31, 27, 33, 4126, 689, 1273, 1212, 12022, 12023, 12019, 4124, 5225, 11626, 12024, 5449, 4962, 5767, 8476, 2, 8060, 6912, 3077120, 1785344, 8448, 3076864, 3004160, 1411328, 1055744, 310272, 1389568, 512, 451966976, 246218752, 78249984, 125632512, 246743040, 249102336, 37093376, 131072, 334495744]
// Exports: default

// Module 12018 (UserProfileOverflowMenu)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticEvents: closure_9, AVATAR_MAX_SIZE: closure_10, ChannelTypesSets: closure_11, NOOP: closure_12, RelationshipTypes: closure_13 } = arg1(dependencyMap[6]));
const ParticipantTypes = arg1(dependencyMap[7]).ParticipantTypes;
const tmp2 = arg1(dependencyMap[6]);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_15, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_16 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
const tmp3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[50]).fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenu.tsx");

export default function UserProfileOverflowMenu(user) {
  let arr3;
  let arr4;
  let currentUser;
  let displayProfile;
  let isIgnored;
  let relationshipType;
  user = user.user;
  const arg1 = user;
  ({ currentUser, displayProfile } = user);
  const importDefault = displayProfile;
  const channel = user.channel;
  const dependencyMap = channel;
  let closure_6;
  let nickname;
  let closure_8;
  let newestAnalyticsLocation;
  let canRing;
  let enabled;
  let userIsInCall;
  let constants;
  let ParticipantTypes;
  let guildId;
  let obj = arg1(dependencyMap[10]);
  const items = [nickname];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_8, closure_6];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    let getChannel;
    let getChannel2;
    ({ getChannel, getChannel: getChannel2 } = context);
    return { selectedChannel: getChannel(analyticsLocations.getChannelId()), selectedVoiceChannelId: analyticsLocations.getVoiceChannelId(), selectedVoiceChannel: getChannel2(analyticsLocations.getVoiceChannelId()) };
  });
  const selectedChannel = stateFromStoresObject1.selectedChannel;
  const callback = selectedChannel;
  const selectedVoiceChannelId = stateFromStoresObject1.selectedVoiceChannelId;
  const React = selectedVoiceChannelId;
  const selectedVoiceChannel = stateFromStoresObject1.selectedVoiceChannel;
  let closure_5 = selectedVoiceChannel;
  let obj2 = arg1(dependencyMap[11]);
  [arr3, arr4] = callback(obj2.useServerInviteRows(user.id), 2);
  const tmp3 = callback(obj2.useServerInviteRows(user.id), 2);
  const tmp4 = null != nickname.getNickname(user.id);
  let obj3 = arg1(dependencyMap[13]);
  const result = obj3.isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj4 = arg1(dependencyMap[14]);
  const userProfileAnalyticsContext = obj4.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  closure_6 = context;
  nickname = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp5 = importDefault(dependencyMap[12])(user.id) && arr2.length + arr3.length > 0;
  const tmp8Result = importDefault(dependencyMap[15])(importDefault(dependencyMap[16]).USER_PROFILE_OVERFLOW_MENU);
  const analyticsLocations = tmp8Result.analyticsLocations;
  closure_8 = analyticsLocations;
  newestAnalyticsLocation = tmp8Result.newestAnalyticsLocation;
  let guild_id;
  const tmp8 = importDefault(dependencyMap[15]);
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const tmp10Result = importDefault(dependencyMap[17])(user.id, guild_id);
  let obj5 = arg1(dependencyMap[18]);
  canRing = obj5.useCanRing(user, "UserProfileOverflowMenu", selectedVoiceChannelId);
  let obj6 = importDefault(dependencyMap[19]);
  obj = {};
  let guild_id1;
  if (null != selectedVoiceChannel) {
    guild_id1 = selectedVoiceChannel.guild_id;
  }
  obj.guildId = guild_id1;
  obj.location = "UserProfileOverflowMenu";
  enabled = obj6.useExperiment(obj).enabled;
  let obj8 = importDefault(dependencyMap[20]);
  const tidaWebformEnabled = obj8.useExperiment({ location: "UserProfileOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled;
  let obj9 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
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
  const tmp10 = importDefault(dependencyMap[17]);
  obj.type = arg1(dependencyMap[22]).ImpressionTypes.MENU;
  obj.name = arg1(dependencyMap[22]).ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
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
  importDefault(dependencyMap[21])(obj, obj2, items3);
  const items4 = [user.id, , , ];
  let id;
  if (null != channel) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = context;
  items4[3] = analyticsLocations;
  constants = React.useCallback((arg0) => {
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
  ParticipantTypes = id;
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guildId1;
  if (null != displayProfile) {
    guildId1 = displayProfile.guildId;
  }
  let tmp25 = null == guildId1;
  if (!tmp25) {
    tmp25 = null != displayProfile && displayProfile.private;
    const tmp26 = null != displayProfile && displayProfile.private;
  }
  if (!tmp25) {
    obj3 = {};
    const intl = arg1(dependencyMap[24]).intl;
    obj3.label = intl.string(arg1(dependencyMap[24]).t.GISTta);
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
  let tmp31 = null != guildId2;
  if (tmp31) {
    let guildId3;
    if (null != displayProfile) {
      guildId3 = displayProfile.guildId;
    }
    tmp31 = null == guildId3;
  }
  if (tmp31) {
    obj4 = {};
    const intl2 = arg1(dependencyMap[24]).intl;
    obj4.label = intl2.string(arg1(dependencyMap[24]).t.DisZzB);
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
      const intl3 = arg1(dependencyMap[24]).intl;
      obj5.label = intl3.string(arg1(dependencyMap[24]).t.n5zMI+);
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
          const intl5 = arg1(dependencyMap[24]).intl;
          obj6.label = intl5.string(arg1(dependencyMap[24]).t.8wXU9B);
          obj6.action = function action() {
            trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
            let id;
            if (null != channel) {
              id = channel.id;
            }
            displayProfile(channel[30]).unignoreUser(id, newestAnalyticsLocation, id);
            callback();
          };
          const arr2 = items6.push(obj6);
        }
        const push = items6.push;
        if (tmp23) {
          const obj7 = {};
          const intl11 = arg1(dependencyMap[24]).intl;
          obj7.label = intl11.string(arg1(dependencyMap[24]).t.XyHpKH);
          obj7.action = function action() {
            let obj = { action: "UNBLOCK", analyticsLocations };
            trackUserProfileAction(obj);
            obj = { location: newestAnalyticsLocation };
            displayProfile(channel[30]).unblockUser(id, obj);
            callback();
            const obj2 = displayProfile(channel[30]);
            let id;
            if (null != channel) {
              id = channel.id;
            }
            const result = displayProfile(channel[32]).showUnblockSuccessToast(id, id);
          };
          arr3 = push(obj7);
        } else {
          obj8 = {};
          const intl7 = arg1(dependencyMap[24]).intl;
          obj8.label = intl7.string(arg1(dependencyMap[24]).t.l4Emac);
          obj8.variant = "destructive";
          obj8.action = function action() {
            let obj = displayProfile(channel[26]);
            obj = { userId: id };
            let id;
            if (null != channel) {
              id = channel.id;
            }
            obj.channelId = id;
            obj.onSuccess = function onSuccess() {
              let id;
              if (null != id) {
                id = id.id;
              }
              const result = callback(id[32]).showBlockSuccessToast(closure_14, id);
            };
            obj.impressionName = user(channel[22]).ImpressionNames.BLOCK_USER_CONFIRMATION;
            obj.openLazy(user(channel[29])(channel[33], channel.paths), guildId, obj, "stack");
          };
          push(obj8);
          if (result) {
            obj9 = {};
            const intl9 = arg1(dependencyMap[24]).intl;
            obj9.label = intl9.string(arg1(dependencyMap[24]).t.wqHXNt);
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
              const intl8 = arg1(dependencyMap[24]).intl;
              obj10.label = intl8.string(arg1(dependencyMap[24]).t.TbHyMG);
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
            const obj22 = arg1(dependencyMap[35]);
          }
          if (tmp5) {
            const obj11 = {};
            const intl10 = arg1(dependencyMap[24]).intl;
            obj11.label = intl10.string(arg1(dependencyMap[24]).t.Sd8Ixw);
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
        const intl6 = arg1(dependencyMap[24]).intl;
        obj12.label = intl6.string(arg1(dependencyMap[24]).t.ytCpKs);
        obj12.action = function action() {
          let obj = { action: "IGNORE", analyticsLocations };
          trackUserProfileAction(obj);
          const obj2 = displayProfile(channel[26]);
          obj = { userId: id };
          let id;
          if (null != channel) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.onSuccess = userIsInCall;
          obj.impressionName = user(channel[22]).ImpressionNames.IGNORE_USER_CONFIRMATION;
          obj2.openLazy(user(channel[29])(channel[31], channel.paths), closure_16, obj, "stack");
        };
        items6.push(obj12);
      }
    } else {
      let obj13 = {};
      const intl4 = arg1(dependencyMap[24]).intl;
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
    const DeveloperMode = arg1(dependencyMap[40]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    let tmp73 = setting;
    if (setting) {
      tmp73 = tidaWebformEnabled;
    }
    if (!tmp73) {
      const obj14 = {};
      const intl13 = arg1(dependencyMap[24]).intl;
      obj14.label = intl13.string(arg1(dependencyMap[24]).t.y5MwJy);
      obj14.action = function action() {
        trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = user(channel[41]);
        obj2.copy(displayProfile(channel[42]).getUserTag(user, { allowSnowflake: true, gay-Latn-ID: true }));
        const obj3 = displayProfile(channel[42]);
        const result = user(channel[43]).presentUsernameCopied();
      };
      items5.push(obj14);
    }
    if (setting) {
      const push2 = items5.push;
      obj15 = {};
      const intl14 = arg1(dependencyMap[24]).intl;
      const string3 = intl14.string;
      const t = arg1(dependencyMap[24]).t;
      if (tidaWebformEnabled) {
        obj15.label = string3(t.QvQeLv);
        obj15.action = function action() {
          const items = [];
          let obj = {};
          const intl = user(channel[24]).intl;
          obj.label = intl.string(user(channel[24]).t.y5MwJy);
          obj.onPress = function onPress() {
            callback({ action: "COPY_USERNAME", analyticsLocations: closure_8 });
            const obj = { action: "COPY_USERNAME", analyticsLocations: closure_8 };
            const obj2 = bannerURL(closure_2[41]);
            obj2.copy(lib(closure_2[42]).getUserTag(bannerURL, { allowSnowflake: true, gay-Latn-ID: true }));
            const obj3 = lib(closure_2[42]);
            const result = bannerURL(closure_2[43]).presentUsernameCopied();
          };
          items.push(obj);
          obj = {};
          const intl2 = user(channel[24]).intl;
          obj.label = intl2.string(user(channel[24]).t./AXYnE);
          obj.onPress = function onPress() {
            callback({ action: "COPY_USER_ID", analyticsLocations: closure_8 });
            bannerURL(closure_2[41]).copy(closure_14);
            const obj = { action: "COPY_USER_ID", analyticsLocations: closure_8 };
            const obj2 = bannerURL(closure_2[41]);
            bannerURL(closure_2[43]).presentIdCopied();
          };
          items.push(obj);
          let hasAvatarForGuildResult = null != user.avatar;
          if (!hasAvatarForGuildResult) {
            let guildId;
            if (null != displayProfile) {
              guildId = displayProfile.guildId;
            }
            hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
          }
          if (hasAvatarForGuildResult) {
            obj = {};
            const intl3 = user(channel[24]).intl;
            obj.label = intl3.string(user(channel[24]).t.gERDvM);
            obj.onPress = function onPress() {
              callback({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations: closure_8 });
              let guildId;
              if (null != lib) {
                guildId = lib.guildId;
              }
              const avatarURL = bannerURL.getAvatarURL(guildId, closure_10, true);
              if (null != avatarURL) {
                bannerURL(closure_2[41]).copy(avatarURL);
                const obj2 = bannerURL(closure_2[41]);
                bannerURL(closure_2[43]).presentLinkCopied();
                const obj3 = bannerURL(closure_2[43]);
              }
            };
            items.push(obj);
          }
          if (null != displayProfile) {
            const obj1 = { canAnimate: true, size: canRing };
            const bannerURL = displayProfile.getBannerURL(obj1);
            const user = bannerURL;
            if (null != bannerURL) {
              const obj2 = {};
              const intl4 = user(channel[24]).intl;
              obj2.label = intl4.string(user(channel[24]).t.hsNv0R);
              obj2.onPress = function onPress() {
                callback({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: closure_8 });
                bannerURL(closure_2[41]).copy(bannerURL);
                const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations: closure_8 };
                const obj2 = bannerURL(closure_2[41]);
                bannerURL(closure_2[43]).presentLinkCopied();
              };
              items.push(obj2);
            }
          }
          let obj4 = user(channel[44]);
          const obj3 = { SEO_PAGE_VIEWED: 1665208787, stagger: 1912603216, getI18NCountryName: 24, playstationVersion: 24, customScoreGuild: 1412514049, options: items };
          obj4 = {};
          const intl5 = user(channel[24]).intl;
          obj4.title = intl5.string(user(channel[24]).t.QvQeLv);
          obj3.header = obj4;
          const result = obj4.showSimpleActionSheet(obj3);
        };
        push2(obj15);
      } else {
        obj15.label = string3(t./AXYnE);
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
      const intl15 = arg1(dependencyMap[24]).intl;
      obj16.label = intl15.string(arg1(dependencyMap[24]).t.PHjkRE);
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
        obj["accessibilityLabel"] = intl.string(user(channel[24]).t.+zofAD);
        obj = { size: "sm", color: displayProfile(channel[49]).colors.WHITE };
        obj["icon"] = callback2(user(channel[48]).MoreHorizontalIcon, obj);
        return callback2(user(channel[47]).IconButton, obj);
      };
      obj17.children = jsx(arg1(dependencyMap[46]).ContextMenu, obj18);
      let tmp86 = jsx(arg1(dependencyMap[15]).AnalyticsLocationProvider, obj17);
    } else {
      tmp86 = null;
    }
    return tmp86;
  } else {
    let obj19 = {};
    const intl12 = arg1(dependencyMap[24]).intl;
    const string2 = intl12.string;
    let ygslb0 = arg1(dependencyMap[24]).t;
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

// Module ID: 11905
// Function ID: 92126
// Name: ActivityCardText
// Dependencies: []
// Exports: default

// Module 11905 (ActivityCardText)
function ActivityCardText(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  let trimmed = str;
  if ("string" === typeof children.children) {
    trimmed = str.trim();
  }
  let tmp4 = null;
  if (null != trimmed) {
    tmp4 = null;
    if ("" !== trimmed) {
      obj = {};
      const merged1 = Object.assign(merged);
      obj["children"] = trimmed;
      tmp4 = callback2(arg1(dependencyMap[18]).Text, obj);
    }
  }
  return tmp4;
}
function MaybeLink(href) {
  href = href.href;
  const arg1 = href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    const obj = {
      accessibilityRole: "link",
      onPress() {
          let obj = href(closure_2[19]);
          obj = { href };
          return obj.handleClick(obj);
        },
      children
    };
    tmp = callback2(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  let largeImage;
  let smallImage;
  user = user.user;
  const arg1 = user;
  const activity = user.activity;
  const importDefault = activity;
  const dependencyMap = user.onAction;
  const tmp = callback4();
  let obj = arg1(dependencyMap[20]);
  const imageForActivity = obj.useImageForActivity(activity, user.application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  arg1(dependencyMap[21]);
  obj = { style: tmp.body };
  if (!!user.bot) {
    const items = [tmp7, ];
    obj = { style: tmp.content };
    if (importDefault(dependencyMap[22])(activity)) {
      const obj1 = { variant: "text-md/semibold" };
      const obj2 = {
        text: activity.details,
        activity,
        onPress() {
              return onAction({ action: "OPEN_SPOTIFY_TRACK" });
            }
      };
      obj1.children = callback2(arg1(dependencyMap[24]).SpotifyTrack, obj2);
      let tmp49Result = tmp49(ActivityCardText, obj1);
    } else {
      const obj3 = { href: activity.details_url };
      const obj4 = { variant: "text-md/semibold" };
      if (importDefault(dependencyMap[30])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (null == name) {
          name = activity.name;
        }
      }
      obj4.children = name;
      obj3.children = callback2(ActivityCardText, obj4);
      tmp49Result = tmp49(MaybeLink, obj3);
      const tmp50 = MaybeLink;
      const tmp51 = callback2;
      const tmp52 = ActivityCardText;
    }
    const items1 = [
      tmp49Result,
      () => {
          if (activity(onAction[22])(activity)) {
            let trimmed;
            if (null != tmp.state) {
              trimmed = str.trim();
            }
            let tmp15 = null;
            if (null != trimmed) {
              tmp15 = null;
              if ("" !== trimmed) {
                let obj = {};
                obj = {
                  artists: trimmed,
                  activity,
                  userId: user.id,
                  onPress() {
                          return callback({ action: "OPEN_SPOTIFY_ARTIST" });
                        }
                };
                obj.children = callback(user(onAction[24]).SpotifyArtists, obj);
                tmp15 = callback(closure_25, obj);
              }
            }
            return tmp15;
          } else {
            let state = tmp.details;
            let tmp4 = activity(onAction[30])(tmp);
            if (!tmp4) {
              tmp4 = null == activity.state;
            }
            if (!tmp4) {
              state = activity.state;
            }
            obj = { href: activity.state_url };
            const obj1 = { children: state };
            obj.children = callback(closure_25, obj1);
            return callback(closure_26, obj);
          }
        }(),
  ,

    ];
    let tmp70Result = null;
    if (!importDefault(dependencyMap[22])(activity)) {
      tmp70Result = null;
      if (activity.type !== constants.WATCHING) {
        if (importDefault(dependencyMap[30])(activity)) {
          if (!importDefault(dependencyMap[31])(activity)) {
            tmp70Result = null;
          }
        }
        if (importDefault(dependencyMap[30])(activity)) {
          const party = activity.party;
          let size;
          if (null != party) {
            size = party.size;
          }
          let tmp77 = null != size;
          if (tmp77) {
            tmp77 = activity.party.size.length >= 2;
          }
          if (!tmp77) {
            let obj5 = {};
            const items2 = [activity.state, ""];
            obj5.children = items2.join(" ");
            tmp70Result = callback2(ActivityCardText, obj5);
          } else if (0 === activity.party.size[1]) {
            const intl3 = arg1(dependencyMap[23]).intl;
            const obj6 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[23]).t.IM4J4e, obj6);
          } else {
            const intl2 = arg1(dependencyMap[23]).intl;
            const obj7 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[23]).t.u//9By, obj7);
          }
        } else {
          const obj8 = {};
          const assets3 = activity.assets;
          let large_url;
          if (null != assets3) {
            large_url = assets3.large_url;
          }
          obj8.href = large_url;
          let obj9 = {};
          const assets4 = activity.assets;
          let large_text;
          if (null != assets4) {
            large_text = assets4.large_text;
          }
          obj9.children = large_text;
          obj8.children = callback2(ActivityCardText, obj9);
          tmp70Result = callback2(MaybeLink, obj8);
          const tmp70 = callback2;
          const tmp71 = MaybeLink;
          const tmp73 = callback2;
          const tmp74 = ActivityCardText;
        }
      }
    }
    items1[2] = tmp70Result;
    let tmp86 = !user.bot;
    if (tmp86) {
      const obj10 = { style: tmp.badges, activity };
      tmp86 = callback2(importDefault(dependencyMap[32]), obj10);
    }
    items1[3] = tmp86;
    obj.children = items1;
    items[1] = closure_22(closure_7, obj);
    obj.children = items;
    return tmp5(tmp6, obj);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const obj11 = {};
        const items3 = [tmp.imageContainer, importDefault(dependencyMap[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio];
        obj11.style = items3;
        const obj12 = {};
        const assets = activity.assets;
        let large_url1;
        if (null != assets) {
          large_url1 = assets.large_url;
        }
        obj12.href = large_url1;
        let obj13 = {};
        obj5 = arg1(dependencyMap[26]);
        obj13.source = obj5.makeSource(largeImage.src);
        obj13.alt = largeImage.alt;
        obj13.style = tmp.largeImage;
        obj12.children = callback2(importDefault(dependencyMap[25]), obj13);
        const items4 = [callback2(MaybeLink, obj12), ];
        let tmp25Result = null != smallImage;
        if (tmp25Result) {
          const obj14 = { style: tmp.smallImageBackground };
          const obj15 = {};
          const assets2 = activity.assets;
          let small_url;
          if (null != assets2) {
            small_url = assets2.small_url;
          }
          obj15.href = small_url;
          const obj16 = {};
          obj9 = arg1(dependencyMap[26]);
          obj16.source = obj9.makeSource(smallImage.src);
          obj16.alt = smallImage.alt;
          obj16.style = tmp.smallImage;
          obj15.children = callback2(importDefault(dependencyMap[25]), obj16);
          obj14.children = callback2(MaybeLink, obj15);
          tmp25Result = callback2(closure_7, obj14);
          const tmp25 = callback2;
          const tmp26 = closure_7;
          const tmp27 = callback2;
          const tmp28 = MaybeLink;
          const tmp33 = importDefault(dependencyMap[25]);
        }
        items4[1] = tmp25Result;
        obj11.children = items4;
        let tmp90Result = closure_22(closure_7, obj11);
        const tmp12 = closure_22;
        const tmp13 = closure_7;
        const tmp16 = callback2;
        const tmp17 = MaybeLink;
        const tmp22 = importDefault(dependencyMap[25]);
      } else {
        const obj17 = {};
        const items5 = [, ];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj17.style = items5;
        const obj18 = { size: "custom", style: tmp.largeImage };
        const obj28 = arg1(dependencyMap[29]);
        const tmp90 = callback2;
        const tmp91 = closure_7;
        const tmp92 = callback2;
        const colors = importDefault(dependencyMap[16]).colors;
        obj18.color = arg1(dependencyMap[29]).isThemeDark(tmp4) ? colors.WHITE : colors.BLACK;
        obj17.children = tmp92(arg1(dependencyMap[28]).UnknownGameIcon, obj18);
        tmp90Result = tmp90(tmp91, obj17);
        const isThemeDarkResult = arg1(dependencyMap[29]).isThemeDark(tmp4);
      }
    }
    const obj19 = { accessibilityRole: "button", accessibilityLabel: largeImage.alt };
    const intl = arg1(dependencyMap[23]).intl;
    obj19.accessibilityHint = intl.string(arg1(dependencyMap[23]).t.sjjOk2);
    obj19.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      user(onAction[24]).openAlbum(activity, user.id);
    };
    const obj20 = {};
    const items6 = [, ];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj20.style = items6;
    const obj21 = {};
    obj13 = arg1(dependencyMap[26]);
    obj21.source = obj13.makeSource(largeImage.src);
    obj21.alt = largeImage.alt;
    largeImage = tmp.largeImage;
    obj21.style = largeImage;
    obj20.children = callback2(importDefault(dependencyMap[25]), obj21);
    obj19.children = callback2(closure_7, obj20);
    tmp90Result = callback2(closure_6, obj19);
    const tmp43 = importDefault(dependencyMap[25]);
  }
}
function ActivityCard(user) {
  let activity;
  let end;
  let start;
  user = user.user;
  const arg1 = user;
  ({ currentUser: closure_1, activity } = user);
  const dependencyMap = activity;
  const voiceChannel = user.voiceChannel;
  let React;
  let tmp7Result;
  let stateFromStores1;
  const tmp = callback4();
  let closure_3 = tmp;
  const tmp2 = importDefault(dependencyMap[33])(activity);
  const analyticsLocations = importDefault(dependencyMap[34])(importDefault(dependencyMap[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let obj = { display: "live" };
  let id;
  const tmp3 = importDefault(dependencyMap[34]);
  if (null != voiceChannel) {
    id = voiceChannel.id;
  }
  obj.voiceChannelId = id;
  obj.user = user;
  obj.activity = activity;
  obj.analyticsLocations = analyticsLocations;
  const tmp4Result = importDefault(dependencyMap[36])(obj);
  React = tmp4Result;
  obj = { location: "User Profile Activity Card" };
  const application_id = activity.application_id;
  let tmp8;
  const tmp4 = importDefault(dependencyMap[36]);
  if (null != application_id) {
    tmp8 = application_id;
  }
  obj.applicationId = tmp8;
  obj.source = arg1(dependencyMap[38]).GameProfileSources.UserProfile;
  obj.trackEntryPointImpression = true;
  obj.sourceUserId = user.id;
  tmp7Result = importDefault(dependencyMap[37])(obj);
  const items = [tmp7Result];
  const callback = React.useCallback(() => {
    if (null != tmp7Result) {
      tmp7Result();
    }
  }, items);
  obj = { userId: user.id, onAction: tmp4Result };
  importDefault(dependencyMap[39])(obj);
  let obj3 = arg1(dependencyMap[40]);
  const items1 = [closure_11, closure_15, closure_10];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    if (lib(activity[31])(activity)) {
      let session_id;
      if (null != activity) {
        session_id = activity.session_id;
      }
      const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(user.id, session_id);
      let channelId;
      if (null != voiceStateForSession) {
        channelId = voiceStateForSession.channelId;
      }
      const channel = channel.getChannel(channelId);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      return guild.getGuild(guildId);
    } else {
      return null;
    }
  });
  let obj4 = arg1(dependencyMap[40]);
  const items2 = [closure_8];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    if (null != activity.application_id) {
      let application = store.getApplication(activity.application_id);
    } else {
      application = null;
      if (null != activity.name) {
        application = store.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  let tmp35Result = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp35Result = null;
    if (activity.type !== constants.HANG_STATUS) {
      const obj1 = { value: analyticsLocations };
      const obj2 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
      const intl = arg1(dependencyMap[23]).intl;
      obj3 = { gameName: activity.name };
      obj2.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[23]).t.9sZWVp, obj3);
      obj4 = {};
      const items3 = [tmp.card, user.style];
      obj4.style = items3;
      obj4.title = tmp2.text;
      obj4.titleStyle = tmp.cardTitle;
      let tmp15Result = null != tmp2.platformIcon;
      if (tmp15Result) {
        const obj5 = { style: tmp.cardTitleIcon };
        let obj6 = arg1(dependencyMap[26]);
        const platformIcon = tmp2.platformIcon;
        let whitePNG;
        if (null != platformIcon) {
          whitePNG = platformIcon.whitePNG;
        }
        obj5.source = obj6.makeSource(whitePNG);
        obj5.size = arg1(dependencyMap[43]).IconSizes.SMALL_14;
        obj5.disableColor = true;
        tmp15Result = callback2(arg1(dependencyMap[43]).Icon, obj5);
        const tmp15 = callback2;
      }
      obj4.titleIcon = tmp15Result;
      obj6 = { user, activity, application: stateFromStores1, onAction: tmp4Result };
      const items4 = [callback2(ActivityCardBody, obj6), , , ];
      let tmp26 = null;
      if (importDefault(dependencyMap[44])(activity)) {
        ({ start, end } = activity.timestamps);
        const obj7 = { start, end };
        tmp26 = callback2(importDefault(dependencyMap[45]), obj7);
      }
      items4[1] = tmp26;
      let tmp30 = null;
      if (null != voiceChannel) {
        tmp30 = null;
        if (null != stateFromStores) {
          const obj8 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp4Result, style: tmp.voiceChannelDivider };
          tmp30 = callback2(importDefault(dependencyMap[46]), obj8);
        }
      }
      items4[2] = tmp30;
      items4[3] = () => {
        if (lib(activity[47])(activity)) {
          let obj = { type: constants.XBOX, onAction: tmp4Result };
          return callback(user(activity[48]).ConnectPlatformButton, obj);
        } else if (lib(activity[49])(activity)) {
          obj = { type: constants.PLAYSTATION, onAction: tmp4Result };
          return callback(user(activity[48]).ConnectPlatformButton, obj);
        } else if (user.id === lib.id) {
          return null;
        } else if (lib(activity[22])(activity)) {
          const obj1 = { activity, onAction: tmp4Result };
          return callback(user(activity[48]).PlayOnSpotifyButton, obj1);
        } else if (lib(activity[31])(activity)) {
          const obj2 = { user, currentUser: lib, activity, application: stateFromStores1, onAction: tmp4Result };
          return callback(user(activity[48]).JoinActivityButton, obj2);
        } else {
          if (lib(activity[30])(activity)) {
            obj = user(activity[50]);
            let _Set = Set;
            let supported_platforms = activity.supported_platforms;
            const currentActivityGamePlatform = obj.getCurrentActivityGamePlatform();
            if (null == supported_platforms) {
              supported_platforms = [];
            }
            const prototype = _Set.prototype;
            _Set = new _Set(supported_platforms);
            const hasItem = _Set.has(currentActivityGamePlatform);
            if (null != stateFromStores1) {
              const deepLinkUri = stateFromStores1.deepLinkUri;
            }
            if (hasItem) {
              if (tmp24) {
                if (null != deepLinkUri) {
                  if (null != activity.session_id) {
                    if (null != stateFromStores1) {
                      const obj3 = { user, currentUser: lib, activity, application: stateFromStores1, onAction: tmp4Result };
                      return callback(user(activity[48]).JoinGameActivityButton, obj3);
                    }
                  }
                }
              }
            }
            const tmp24 = null != activity.party;
          }
          if (lib(activity[51])(activity)) {
            const obj4 = { activity, onAction: tmp4Result };
            let tmp34 = callback(user(activity[48]).WatchActivityButton, obj4);
          } else {
            tmp34 = null;
            if (null != activity.buttons) {
              tmp34 = null;
              if (activity.buttons.length > 0) {
                const obj5 = { style: tmp.customButtons };
                const buttons = activity.buttons;
                obj5.children = buttons.map((arg0, index) => callback2(callback(closure_2[48]).CustomActivityButton, { index, user: callback, activity: closure_2, onAction: closure_4 }, index));
                tmp34 = callback(closure_7, obj5);
              }
            }
          }
          return tmp34;
        }
      }();
      obj4.children = items4;
      obj2.children = closure_22(importDefault(dependencyMap[42]), obj4);
      obj1.children = callback2(arg1(dependencyMap[41]).PressableOpacity, obj2);
      tmp35Result = callback2(arg1(dependencyMap[34]).AnalyticsLocationProvider, obj1);
      const tmp35 = callback2;
      const tmp38 = callback2;
      const tmp39 = closure_22;
      const tmp41 = importDefault(dependencyMap[42]);
    }
  }
  return tmp35Result;
}
function StreamActivityCard(user) {
  let effectiveVolume;
  let handleVolumeChange;
  user = user.user;
  const arg1 = user;
  const stream = user.stream;
  const importDefault = stream;
  const activity = user.activity;
  const dependencyMap = activity;
  let closure_4;
  const tmp = callback4();
  let obj = arg1(dependencyMap[40]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(stream.channelId));
  const callback = stateFromStores;
  let obj1 = arg1(dependencyMap[40]);
  const items1 = [closure_15];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    return inChannel.isInChannel(id);
  });
  let obj2 = arg1(dependencyMap[40]);
  const items2 = [closure_11];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => guild.getGuild(stream.guildId));
  let obj3 = arg1(dependencyMap[40]);
  const items3 = [closure_13];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => closure_13.findActivity(user.id, (arg0) => {
    let tmp = callback(closure_2[30])(arg0);
    if (tmp) {
      tmp = !callback(closure_2[52])(arg0);
    }
    return tmp;
  }));
  let obj4 = arg1(dependencyMap[40]);
  const items4 = [closure_9];
  const stateFromStores4 = obj4.useStateFromStores(items4, () => activeStreamForUser.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  if (null != stateFromStores4) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp7 = importDefault(dependencyMap[53]);
  ({ effectiveVolume, handleVolumeChange } = importDefault(dependencyMap[53])(ownerId, arg1(dependencyMap[54]).MediaEngineContextTypes.STREAM));
  let obj5 = arg1(dependencyMap[40]);
  const items5 = [closure_8];
  const stateFromStores5 = obj5.useStateFromStores(items5, () => {
    let application_id;
    if (null != activity) {
      application_id = activity.application_id;
    }
    if (null != application_id) {
      let application = store.getApplication(activity.application_id);
    } else {
      let name;
      if (null != activity) {
        name = activity.name;
      }
      application = null;
      if (null != name) {
        application = store.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  let obj6 = arg1(dependencyMap[55]);
  const tmp7Result = importDefault(dependencyMap[53])(ownerId, arg1(dependencyMap[54]).MediaEngineContextTypes.STREAM);
  const analyticsLocations = importDefault(dependencyMap[34])(importDefault(dependencyMap[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  obj = { display: "live" };
  let id;
  const tmp11 = importDefault(dependencyMap[34]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj.voiceChannelId = id;
  obj.user = user;
  obj.stream = stream;
  obj.analyticsLocations = analyticsLocations;
  const tmp12Result = importDefault(dependencyMap[36])(obj);
  closure_4 = tmp12Result;
  obj = { userId: user.id, onAction: tmp12Result };
  importDefault(dependencyMap[39])(obj);
  let obj9 = importDefault(dependencyMap[56]);
  obj1 = { value: analyticsLocations };
  obj2 = { style: items6 };
  const items6 = [tmp.card, user.style];
  const tmp12 = importDefault(dependencyMap[36]);
  const tmp16 = callback2;
  const tmp17 = closure_22;
  if (null != stateFromStores3) {
    const intl2 = arg1(dependencyMap[23]).intl;
    obj3 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[23]).t.4CQq9Q, obj3);
  } else {
    const intl = arg1(dependencyMap[23]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[23]).t.Jpkr/q);
  }
  obj2.title = formatToPlainStringResult;
  obj2.titleStyle = tmp.cardTitle;
  obj2.titleIcon = callback2(arg1(dependencyMap[43]).LiveTag, {});
  obj4 = { style: tmp.streamPreview, children: callback2(arg1(dependencyMap[57]).VoicePanelStreamPreview, obj5) };
  obj5 = {
    mode: undefined,
    stream,
    disabled: !callback(obj6.useCanWatchStream(stateFromStores), 1)[0],
    onPress() {
      tmp12Result({ action: "PRESS_IMAGE" });
      const voiceChannel = stream(activity[58]).selectVoiceChannel(stream.channelId);
      const obj = stream(activity[58]);
      const result = user(activity[59]).watchStreamAndTransitionToStream(stream);
      const obj2 = user(activity[59]);
      stream(activity[60]).hideActionSheet();
    }
  };
  const items7 = [callback2(closure_7, obj4), , , , ];
  let tmp24 = null != stateFromStores4 && !obj9.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp24) {
    obj6 = { value: effectiveVolume, onValueChange: handleVolumeChange };
    tmp24 = callback2(importDefault(dependencyMap[61]), obj6, "set-stream-volume");
  }
  items7[1] = tmp24;
  let tmp28 = null != activity;
  if (tmp28) {
    tmp28 = importDefault(dependencyMap[31])(activity);
  }
  if (tmp28) {
    const obj7 = { user, activity, application: stateFromStores5, onAction: tmp12Result };
    tmp28 = callback2(ActivityCardBody, obj7);
  }
  items7[2] = tmp28;
  let tmp33 = null != stateFromStores2 && null != stateFromStores;
  if (tmp33) {
    const obj8 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp12Result, style: tmp.voiceChannelDivider };
    tmp33 = callback2(importDefault(dependencyMap[46]), obj8);
  }
  items7[3] = tmp33;
  let tmp37 = null != stateFromStores;
  if (tmp37) {
    obj9 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp12Result };
    tmp37 = callback2(arg1(dependencyMap[48]).VoiceChannelButtons, obj9);
  }
  items7[4] = tmp37;
  obj2.children = items7;
  obj1.children = tmp17(importDefault(dependencyMap[42]), obj2);
  return tmp16(arg1(dependencyMap[34]).AnalyticsLocationProvider, obj1);
}
function VoiceCallActivityCard(arg0) {
  let channel;
  let isInChannel;
  let style;
  let user;
  ({ user, channel } = arg0);
  const arg1 = channel;
  ({ isInChannel, style } = arg0);
  const tmp = callback4();
  const tmp3 = importDefault(dependencyMap[63])(channel);
  let obj = arg1(dependencyMap[40]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[40]);
  const items1 = [closure_12];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_12.can(constants.CONNECT, channel);
    }
    return isPrivateResult;
  });
  const tmp2 = importDefault(dependencyMap[62])(channel);
  const tmp6Result = importDefault(dependencyMap[34])(importDefault(dependencyMap[35]).USER_PROFILE_VOICE_ACTIVITY_CARD);
  const dependencyMap = tmp6Result.newestAnalyticsLocation;
  obj = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations: tmp6Result.analyticsLocations };
  const tmp8 = importDefault(dependencyMap[36])(obj);
  let closure_3 = tmp8;
  obj = { userId: user.id, onAction: tmp8 };
  importDefault(dependencyMap[39])(obj);
  obj1 = { style: items2 };
  const items2 = [tmp.card, style];
  const tmp10 = callback3;
  const tmp6 = importDefault(dependencyMap[34]);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = arg1(dependencyMap[23]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[23]).t;
      if (isGuildStageVoiceResult) {
        let stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj1.title = stringResult;
    obj1.titleStyle = tmp.cardTitle;
    const obj2 = { style: tmp.body };
    const obj3 = { users: tmp2 };
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj3.guildId = id;
    const items3 = [callback2(importDefault(dependencyMap[64]), obj3), ];
    const obj4 = { style: tmp.voiceCallContent };
    if (stateFromStores1) {
      const obj5 = { accessibilityRole: "button" };
      const obj6 = { channel };
      obj5.accessibilityLabel = importDefault(dependencyMap[66])(obj6);
      const intl3 = arg1(dependencyMap[23]).intl;
      obj5.accessibilityHint = intl3.string(arg1(dependencyMap[23]).t.9C444m);
      obj5.onPress = function onPress() {
        tmp8({ action: "OPEN_VOICE_CHANNEL" });
        stateFromStores(newestAnalyticsLocation[60]).hideActionSheet();
        const obj = stateFromStores(newestAnalyticsLocation[60]);
        stateFromStores(newestAnalyticsLocation[67]).popAll();
        const obj2 = stateFromStores(newestAnalyticsLocation[67]);
        channel(newestAnalyticsLocation[68]).openGuildVoiceModal(channel, newestAnalyticsLocation);
      };
      const obj7 = {};
      const obj8 = { style: tmp.voiceCallNameIconWrapper };
      const obj9 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, channel };
      obj8.children = callback2(importDefault(dependencyMap[65]), obj9);
      const items4 = [callback2(closure_7, obj8), tmp3];
      obj7.children = items4;
      obj5.children = callback3(arg1(dependencyMap[18]).Text, obj7);
      let tmp33 = callback2(arg1(dependencyMap[41]).PressableOpacity, obj5);
    } else {
      const obj10 = {};
      const obj11 = { style: tmp.voiceCallNameIconWrapper };
      const obj12 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, channel };
      obj11.children = callback2(importDefault(dependencyMap[65]), obj12);
      const items5 = [callback2(closure_7, obj11), tmp3];
      obj10.children = items5;
      tmp33 = callback3(arg1(dependencyMap[18]).Text, obj10);
    }
    const items6 = [tmp33, ];
    let tmp42 = null;
    if (null != stateFromStores) {
      const obj13 = { accessibilityRole: "button" };
      const intl4 = arg1(dependencyMap[23]).intl;
      obj13.accessibilityHint = intl4.string(arg1(dependencyMap[23]).t.KLOhbO);
      const intl5 = arg1(dependencyMap[23]).intl;
      const obj14 = { guildName: stateFromStores.name };
      obj13.accessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[23]).t.hq/Qze, obj14);
      obj13.onPress = function onPress() {
        tmp8({ action: "OPEN_VOICE_GUILD" });
        channel(newestAnalyticsLocation[69]).transitionToGuild(stateFromStores.id);
        stateFromStores(newestAnalyticsLocation[70])();
        const obj = channel(newestAnalyticsLocation[69]);
        stateFromStores(newestAnalyticsLocation[60]).hideActionSheet();
      };
      const obj15 = { variant: "text-xs/medium" };
      const intl6 = arg1(dependencyMap[23]).intl;
      const obj16 = { guildName: stateFromStores.name };
      obj15.children = intl6.format(arg1(dependencyMap[23]).t.hq/Qze, obj16);
      obj13.children = callback2(arg1(dependencyMap[18]).Text, obj15);
      tmp42 = callback2(arg1(dependencyMap[41]).PressableOpacity, obj13);
    }
    items6[1] = tmp42;
    obj4.children = items6;
    items3[1] = callback3(closure_7, obj4);
    obj2.children = items3;
    const items7 = [callback3(closure_7, obj2), ];
    const obj17 = { channel, isInChannel, onAction: tmp8 };
    items7[1] = callback2(arg1(dependencyMap[48]).VoiceChannelButtons, obj17);
    obj1.children = items7;
    return tmp10(tmp11, obj1);
  }
  const intl2 = arg1(dependencyMap[23]).intl;
  stringResult = intl2.string(arg1(dependencyMap[23]).t.9FaEzi);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_5, TouchableWithoutFeedback: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
const CARD_PADDING = arg1(dependencyMap[12]).CARD_PADDING;
const tmp2 = arg1(dependencyMap[2]);
({ ActivityTypes: closure_17, Permissions: closure_18, PlatformTypes: closure_19, StatusTypes: closure_20 } = arg1(dependencyMap[13]));
const tmp3 = arg1(dependencyMap[13]);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { card: { gap: 12 }, cardTitle: { marginBottom: 0 } };
obj = { tintColor: importDefault(dependencyMap[16]).colors.TEXT_SUBTLE };
let num = 16;
obj.cardTitleIcon = obj;
obj.body = {};
obj.content = { flex: 1 };
obj.imageContainer = { position: "relative" };
obj.imageAspectRatio = { badge_text: true, PARTY: 0.001, paddingVertical: 0.001 };
obj.crunchyrollImageAspectRatio = { badge_text: "<string:1363103842>", PARTY: "<string:4131526215>", paddingVertical: "<string:4127195403>" };
const tmp4 = arg1(dependencyMap[14]);
obj.largeImage = { borderRadius: importDefault(dependencyMap[16]).radii.xs };
const obj2 = { 0: "png", 0: "iconOriginalMd5", 0: "bannerOriginalMd5", 0: "splashOriginalMd5", backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOW };
obj.smallImageBackground = obj2;
obj.smallImage = {};
obj.badges = {};
const obj3 = { kkvDatabase: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000092349256818313, childSpanTimeout: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061976, sectionIndex: -13336029583459642000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderTopColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.voiceChannelDivider = obj3;
obj.customButtons = { stiffness: null, damping: null };
const obj4 = { 975478355: null, 1656971454: null, 2035461794: null, borderRadius: importDefault(dependencyMap[16]).radii.xs };
obj.streamPreview = obj4;
obj.voiceActivityCard = { padding: 0 };
obj.voiceSettings = {};
const obj5 = { kkvDatabase: "confetti", childSpanTimeout: 60, sectionIndex: "days", itemIndex: true, borderTopColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
obj.voiceSettingsDivider = obj5;
obj.voiceCallContent = { fontWeight: false, style: false };
const obj6 = {};
const obj1 = { borderRadius: importDefault(dependencyMap[16]).radii.xs };
if (obj10.isAndroid()) {
  num = 12;
}
obj6.height = num;
obj.voiceCallNameIconWrapper = obj6;
let closure_24 = obj.createStyles(obj);
const obj10 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[74]).fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  let live;
  let stream;
  const user = guildId.user;
  const arg1 = user;
  const currentUser = guildId.currentUser;
  const importDefault = currentUser;
  const style = guildId.style;
  const dependencyMap = style;
  let closure_3;
  let closure_4;
  let voiceActivity;
  let stateFromStores;
  let items7 = function renderVoiceActivityCard(voiceChannel) {
    if (null != stream) {
      if (stream.channelId === voiceChannel.id) {
        let obj = { user, stream, activity: voiceActivity, style: tmp.voiceActivityCard };
        let tmp7 = callback(closure_29, obj);
      }
      return tmp7;
    }
    if (null != voiceActivity) {
      obj = { user, currentUser, activity: voiceActivity, voiceChannel, style: tmp.voiceActivityCard };
      tmp7 = callback(closure_28, obj);
    } else {
      obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: tmp.voiceActivityCard };
      tmp7 = callback(closure_30, obj);
    }
  };
  const tmp = callback4();
  closure_3 = tmp;
  ({ live, stream } = importDefault(dependencyMap[71])(user.id));
  closure_4 = stream;
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp3 = importDefault(dependencyMap[72])(obj);
  const voiceChannel = tmp3.voiceChannel;
  voiceActivity = tmp3.voiceActivity;
  let obj1 = arg1(dependencyMap[40]);
  const items = [closure_15];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = inChannel.isInChannel(voiceChannel.id);
    }
    return isInChannelResult;
  });
  let closure_8 = user.id === currentUser.id;
  let obj2 = arg1(dependencyMap[40]);
  const items1 = [closure_14, closure_13];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (closure_8) {
      let status = status2.getStatus();
    } else {
      status = status.getStatus(user.id);
    }
    let tmp5 = status === constants.OFFLINE;
    if (!tmp5) {
      tmp5 = status === constants.INVISIBLE;
    }
    return tmp5;
  });
  let obj3 = arg1(dependencyMap[40]);
  const items2 = [closure_16];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const userProfile = userProfile.getUserProfile(user.id);
    let _private;
    if (null != userProfile) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  if (stateFromStores1) {
    if (null != voiceChannel) {
      if (stateFromStores) {
        obj = {};
        const items3 = [tmp.card, style];
        obj.style = items3;
        obj = { user, currentUser, channel: voiceChannel };
        const items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        obj.style = items4;
        obj.children = callback2(importDefault(dependencyMap[73]), obj);
        return callback2(importDefault(dependencyMap[42]), obj);
      }
    }
  }
  if (stateFromStores1) {
    return null;
  } else {
    let found = live;
    if (null != voiceActivity) {
      found = live.filter((arg0) => arg0 !== voiceActivity);
    }
    obj1 = {};
    let tmp10 = !stateFromStores2;
    if (tmp10) {
      tmp10 = null != voiceChannel;
    }
    if (!tmp10) {
      const items5 = [tmp10, , ];
      let tmp23 = !stateFromStores2 && null != stream;
      if (tmp23) {
        let id;
        if (null != voiceChannel) {
          id = voiceChannel.id;
        }
        tmp23 = stream.channelId !== id;
      }
      if (tmp23) {
        obj2 = { user, stream, activity: voiceActivity, style };
        tmp23 = callback2(StreamActivityCard, obj2);
      }
      items5[1] = tmp23;
      items5[2] = found.map((activity) => {
        let tmp = arg1;
        const application_id = activity.application_id;
        if (null != application_id) {
          tmp = application_id;
        }
        return closure_21(closure_28, { user, currentUser, activity, style }, tmp);
      });
      obj1.children = items5;
      return tmp8(tmp9, obj1);
    } else if (stateFromStores) {
      obj3 = {};
      const items6 = [tmp.card, style];
      obj3.style = items6;
      const tmp19 = importDefault(dependencyMap[42]);
      items7 = [, ];
      items7[0] = items7(voiceChannel);
      const obj4 = { user, currentUser, channel: voiceChannel };
      const items8 = [, ];
      ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
      obj4.style = items8;
      items7[1] = callback2(importDefault(dependencyMap[73]), obj4);
      obj3.children = items7;
      let tmp15 = callback3(tmp19, obj3);
      const items7Result = items7(voiceChannel);
    } else {
      const obj5 = {};
      const items9 = [tmp.card, style];
      obj5.style = items9;
      obj5.children = items7(voiceChannel);
      tmp15 = callback2(importDefault(dependencyMap[42]), obj5);
      const tmp14 = importDefault(dependencyMap[42]);
    }
    const tmp8 = callback3;
    const tmp9 = closure_23;
  }
};

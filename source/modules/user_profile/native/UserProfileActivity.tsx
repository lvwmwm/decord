// Module ID: 11918
// Function ID: 92205
// Name: ActivityCardText
// Dependencies: [57, 31, 27, 4167, 4149, 1348, 1838, 3758, 4217, 4810, 4146, 6856, 5512, 653, 33, 4130, 689, 477, 4126, 8336, 11919, 3842, 9081, 1212, 10900, 5085, 1392, 8315, 11924, 3976, 9073, 6982, 11925, 11937, 5464, 5484, 11943, 8588, 8600, 11944, 566, 4660, 5511, 1273, 11930, 11945, 11947, 11922, 11955, 11923, 11958, 7882, 11960, 10747, 4227, 6967, 10712, 11961, 4944, 4309, 4098, 10716, 11948, 4320, 11962, 9084, 8450, 4337, 4341, 5737, 10484, 11963, 11965, 11966, 2]
// Exports: default

// Module 11918 (ActivityCardText)
import VoicePanelStreamPreview from "VoicePanelStreamPreview";
import isEmbeddedActivity from "isEmbeddedActivity";
import get_ActivityIndicator from "isCrunchyrollActivity";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { CARD_PADDING } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import jsxProd from "getActivityHeader";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "get ActivityIndicator";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
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
      tmp4 = callback(require(4126) /* Text */.Text, obj);
    }
  }
  return tmp4;
}
function MaybeLink(href) {
  href = href.href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    let obj = {
      accessibilityRole: "link",
      onPress() {
          let obj = href(outer1_2[19]);
          obj = { href };
          return obj.handleClick(obj);
        },
      children
    };
    tmp = callback(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  let largeImage;
  let smallImage;
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(onAction[20]);
  const imageForActivity = obj.useImageForActivity(activity, user.application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[21]);
  obj = { style: tmp.body };
  if (!!user.bot) {
    const items = [tmp7, ];
    obj = { style: tmp.content };
    if (activity(onAction[22])(activity)) {
      let obj1 = { variant: "text-md/semibold" };
      const obj2 = {
        text: activity.details,
        activity,
        onPress() {
              return onAction({ action: "OPEN_SPOTIFY_TRACK" });
            }
      };
      obj1.children = callback(user(onAction[24]).SpotifyTrack, obj2);
      let tmp49Result = tmp49(ActivityCardText, obj1);
    } else {
      const obj3 = { href: activity.details_url };
      const obj4 = { variant: "text-md/semibold" };
      if (activity(onAction[30])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (null == name) {
          name = activity.name;
        }
      }
      obj4.children = name;
      obj3.children = callback(ActivityCardText, obj4);
      tmp49Result = tmp49(MaybeLink, obj3);
      const tmp50 = MaybeLink;
      const tmp51 = callback;
      const tmp52 = ActivityCardText;
    }
    const items1 = [
      tmp49Result,
      (() => {
          if (activity(onAction[22])(activity)) {
            let trimmed;
            if (null != tmp.state) {
              trimmed = str.trim();
            }
            let tmp15 = null;
            if (null != trimmed) {
              tmp15 = null;
              if ("" !== trimmed) {
                let obj = { variant: "text-xs/medium", lineClamp: 1 };
                obj = {
                  artists: trimmed,
                  activity,
                  userId: user.id,
                  onPress() {
                          return outer1_2({ action: "OPEN_SPOTIFY_ARTIST" });
                        }
                };
                obj.children = outer1_21(user(onAction[24]).SpotifyArtists, obj);
                tmp15 = outer1_21(outer1_25, obj);
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
            const obj1 = { variant: "text-xs/medium", lineClamp: 1, children: state };
            obj.children = outer1_21(outer1_25, obj1);
            return outer1_21(outer1_26, obj);
          }
        })(),
  ,

    ];
    let tmp70Result = null;
    if (!activity(onAction[22])(activity)) {
      tmp70Result = null;
      if (activity.type !== constants.WATCHING) {
        if (activity(onAction[30])(activity)) {
          if (!activity(onAction[31])(activity)) {
            tmp70Result = null;
          }
        }
        if (activity(onAction[30])(activity)) {
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
            let obj5 = { variant: "text-xs/medium", lineClamp: 1 };
            const items2 = [activity.state, ""];
            obj5.children = items2.join(" ");
            tmp70Result = callback(ActivityCardText, obj5);
          } else if (0 === activity.party.size[1]) {
            const intl3 = user(onAction[23]).intl;
            const obj6 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(user(onAction[23]).t.IM4J4e, obj6);
          } else {
            const intl2 = user(onAction[23]).intl;
            const obj7 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(user(onAction[23]).t["u//9By"], obj7);
          }
        } else {
          const obj8 = {};
          const assets3 = activity.assets;
          let large_url;
          if (null != assets3) {
            large_url = assets3.large_url;
          }
          obj8.href = large_url;
          let obj9 = { variant: "text-xs/medium", lineClamp: 1 };
          const assets4 = activity.assets;
          let large_text;
          if (null != assets4) {
            large_text = assets4.large_text;
          }
          obj9.children = large_text;
          obj8.children = callback(ActivityCardText, obj9);
          tmp70Result = callback(MaybeLink, obj8);
          const tmp70 = callback;
          const tmp71 = MaybeLink;
          const tmp73 = callback;
          const tmp74 = ActivityCardText;
        }
      }
    }
    items1[2] = tmp70Result;
    let tmp86 = !user.bot;
    if (tmp86) {
      const obj10 = { style: tmp.badges, activity };
      tmp86 = callback(activity(onAction[32]), obj10);
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
        const items3 = [tmp.imageContainer, activity(onAction[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio];
        obj11.style = items3;
        const obj12 = {};
        const assets = activity.assets;
        let large_url1;
        if (null != assets) {
          large_url1 = assets.large_url;
        }
        obj12.href = large_url1;
        let obj13 = {};
        obj5 = user(onAction[26]);
        obj13.source = obj5.makeSource(largeImage.src);
        obj13.alt = largeImage.alt;
        obj13.style = tmp.largeImage;
        obj12.children = callback(activity(onAction[25]), obj13);
        const items4 = [callback(MaybeLink, obj12), ];
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
          obj9 = user(onAction[26]);
          obj16.source = obj9.makeSource(smallImage.src);
          obj16.alt = smallImage.alt;
          obj16.style = tmp.smallImage;
          obj15.children = callback(activity(onAction[25]), obj16);
          obj14.children = callback(MaybeLink, obj15);
          tmp25Result = callback(closure_7, obj14);
          const tmp25 = callback;
          const tmp26 = closure_7;
          const tmp27 = callback;
          const tmp28 = MaybeLink;
          const tmp33 = activity(onAction[25]);
        }
        items4[1] = tmp25Result;
        obj11.children = items4;
        let tmp90Result = closure_22(closure_7, obj11);
        const tmp12 = closure_22;
        const tmp13 = closure_7;
        const tmp16 = callback;
        const tmp17 = MaybeLink;
        const tmp22 = activity(onAction[25]);
      } else {
        const obj17 = {};
        const items5 = [, ];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj17.style = items5;
        const obj18 = { size: "custom", style: tmp.largeImage };
        const obj28 = user(onAction[29]);
        const tmp90 = callback;
        const tmp91 = closure_7;
        const tmp92 = callback;
        const colors = activity(onAction[16]).colors;
        obj18.color = user(onAction[29]).isThemeDark(tmp4) ? colors.WHITE : colors.BLACK;
        obj17.children = tmp92(user(onAction[28]).UnknownGameIcon, obj18);
        tmp90Result = tmp90(tmp91, obj17);
        const isThemeDarkResult = user(onAction[29]).isThemeDark(tmp4);
      }
    }
    const obj19 = { accessibilityRole: "button", accessibilityLabel: largeImage.alt };
    const intl = user(onAction[23]).intl;
    obj19.accessibilityHint = intl.string(user(onAction[23]).t.sjjOk2);
    obj19.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      user(onAction[24]).openAlbum(activity, user.id);
    };
    const obj20 = {};
    const items6 = [, ];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj20.style = items6;
    const obj21 = {};
    obj13 = user(onAction[26]);
    obj21.source = obj13.makeSource(largeImage.src);
    obj21.alt = largeImage.alt;
    largeImage = tmp.largeImage;
    obj21.style = largeImage;
    obj20.children = callback(activity(onAction[25]), obj21);
    obj19.children = callback(closure_7, obj20);
    tmp90Result = callback(closure_6, obj19);
    const tmp43 = activity(onAction[25]);
  }
}
function ActivityCard(user) {
  let activity;
  let end;
  let importDefault;
  let start;
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const voiceChannel = user.voiceChannel;
  let React;
  let c5;
  let stateFromStores1;
  const tmp = _createForOfIteratorHelperLoose();
  let VoicePanelStreamPreview = tmp;
  const tmp2 = importDefault(activity[33])(activity);
  const analyticsLocations = importDefault(activity[34])(importDefault(activity[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let obj = { display: "live" };
  let id;
  const tmp3 = importDefault(activity[34]);
  if (null != voiceChannel) {
    id = voiceChannel.id;
  }
  obj.voiceChannelId = id;
  obj.user = user;
  obj.activity = activity;
  obj.analyticsLocations = analyticsLocations;
  const tmp4Result = importDefault(activity[36])(obj);
  React = tmp4Result;
  obj = { location: "User Profile Activity Card" };
  const application_id = activity.application_id;
  let tmp8;
  const tmp4 = importDefault(activity[36]);
  if (null != application_id) {
    tmp8 = application_id;
  }
  obj.applicationId = tmp8;
  obj.source = user(activity[38]).GameProfileSources.UserProfile;
  obj.trackEntryPointImpression = true;
  obj.sourceUserId = user.id;
  const tmp7Result = importDefault(activity[37])(obj);
  c5 = tmp7Result;
  const items = [tmp7Result];
  const callback = React.useCallback(() => {
    if (null != _undefined) {
      _undefined();
    }
  }, items);
  obj = { userId: user.id, onAction: tmp4Result };
  importDefault(activity[39])(obj);
  let obj3 = user(activity[40]);
  const items1 = [closure_11, closure_15, closure_10];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    if (outer1_1(activity[31])(activity)) {
      let session_id;
      if (null != activity) {
        session_id = activity.session_id;
      }
      const voiceStateForSession = outer1_15.getVoiceStateForSession(user.id, session_id);
      let channelId;
      if (null != voiceStateForSession) {
        channelId = voiceStateForSession.channelId;
      }
      const channel = outer1_10.getChannel(channelId);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      return outer1_11.getGuild(guildId);
    } else {
      return null;
    }
  });
  let obj4 = user(activity[40]);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    if (null != activity.application_id) {
      let application = outer1_8.getApplication(activity.application_id);
    } else {
      application = null;
      if (null != activity.name) {
        application = outer1_8.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  let tmp35Result = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp35Result = null;
    if (activity.type !== constants.HANG_STATUS) {
      let obj1 = { value: analyticsLocations };
      let obj2 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
      const intl = user(activity[23]).intl;
      obj3 = { gameName: activity.name };
      obj2.accessibilityLabel = intl.formatToPlainString(user(activity[23]).t["9sZWVp"], obj3);
      obj4 = {};
      const items3 = [tmp.card, user.style];
      obj4.style = items3;
      obj4.title = tmp2.text;
      obj4.titleStyle = tmp.cardTitle;
      let tmp15Result = null != tmp2.platformIcon;
      if (tmp15Result) {
        let obj5 = { style: tmp.cardTitleIcon };
        let obj6 = user(activity[26]);
        const platformIcon = tmp2.platformIcon;
        let whitePNG;
        if (null != platformIcon) {
          whitePNG = platformIcon.whitePNG;
        }
        obj5.source = obj6.makeSource(whitePNG);
        obj5.size = user(activity[43]).IconSizes.SMALL_14;
        obj5.disableColor = true;
        tmp15Result = callback(user(activity[43]).Icon, obj5);
        const tmp15 = callback;
      }
      obj4.titleIcon = tmp15Result;
      obj6 = { user, activity, application: stateFromStores1, onAction: tmp4Result };
      const items4 = [callback(ActivityCardBody, obj6), , , ];
      let tmp26 = null;
      if (importDefault(activity[44])(activity)) {
        ({ start, end } = activity.timestamps);
        const obj7 = { start, end };
        tmp26 = callback(importDefault(activity[45]), obj7);
      }
      items4[1] = tmp26;
      let tmp30 = null;
      if (null != voiceChannel) {
        tmp30 = null;
        if (null != stateFromStores) {
          const obj8 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp4Result, style: tmp.voiceChannelDivider };
          tmp30 = callback(importDefault(activity[46]), obj8);
        }
      }
      items4[2] = tmp30;
      items4[3] = (() => {
        if (outer1_1(activity[47])(activity)) {
          let obj = { type: outer1_19.XBOX, onAction: c4 };
          return outer1_21(user(activity[48]).ConnectPlatformButton, obj);
        } else if (outer1_1(activity[49])(activity)) {
          obj = { type: outer1_19.PLAYSTATION, onAction: c4 };
          return outer1_21(user(activity[48]).ConnectPlatformButton, obj);
        } else if (user.id === id.id) {
          return null;
        } else if (outer1_1(activity[22])(activity)) {
          const obj1 = { activity, onAction: c4 };
          return outer1_21(user(activity[48]).PlayOnSpotifyButton, obj1);
        } else if (outer1_1(activity[31])(activity)) {
          const obj2 = { user, currentUser: id, activity, application: stateFromStores1, onAction: c4 };
          return outer1_21(user(activity[48]).JoinActivityButton, obj2);
        } else {
          if (outer1_1(activity[30])(activity)) {
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
                      const obj3 = { user, currentUser: id, activity, application: stateFromStores1, onAction: c4 };
                      return outer1_21(user(activity[48]).JoinGameActivityButton, obj3);
                    }
                  }
                }
              }
            }
            tmp24 = null != activity.party;
          }
          if (outer1_1(activity[51])(activity)) {
            const obj4 = { activity, onAction: c4 };
            let tmp34 = outer1_21(user(activity[48]).WatchActivityButton, obj4);
          } else {
            tmp34 = null;
            if (null != activity.buttons) {
              tmp34 = null;
              if (activity.buttons.length > 0) {
                const obj5 = { style: tmp.customButtons };
                const buttons = activity.buttons;
                obj5.children = buttons.map((arg0, index) => outer2_21(user(activity[48]).CustomActivityButton, { index, user: outer1_0, activity: outer1_2, onAction: outer1_4 }, index));
                tmp34 = outer1_21(outer1_7, obj5);
              }
            }
          }
          return tmp34;
        }
      })();
      obj4.children = items4;
      obj2.children = closure_22(importDefault(activity[42]), obj4);
      obj1.children = callback(user(activity[41]).PressableOpacity, obj2);
      tmp35Result = callback(user(activity[34]).AnalyticsLocationProvider, obj1);
      const tmp35 = callback;
      const tmp38 = callback;
      const tmp39 = closure_22;
      const tmp41 = importDefault(activity[42]);
    }
  }
  return tmp35Result;
}
function StreamActivityCard(user) {
  let effectiveVolume;
  let handleVolumeChange;
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  let c4;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = user(activity[40]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(stream.channelId));
  let obj1 = user(activity[40]);
  const items1 = [closure_15];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    return outer1_15.isInChannel(id);
  });
  let obj2 = user(activity[40]);
  const items2 = [closure_11];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_11.getGuild(stream.guildId));
  let obj3 = user(activity[40]);
  const items3 = [closure_13];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => outer1_13.findActivity(user.id, (arg0) => {
    let tmp = stream(activity[30])(arg0);
    if (tmp) {
      tmp = !stream(activity[52])(arg0);
    }
    return tmp;
  }));
  let obj4 = user(activity[40]);
  const items4 = [closure_9];
  const stateFromStores4 = obj4.useStateFromStores(items4, () => outer1_9.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  if (null != stateFromStores4) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp7 = stream(activity[53]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[53])(ownerId, user(activity[54]).MediaEngineContextTypes.STREAM));
  let obj5 = user(activity[40]);
  const items5 = [_isNativeReflectConstruct];
  const stateFromStores5 = obj5.useStateFromStores(items5, () => {
    let application_id;
    if (null != activity) {
      application_id = activity.application_id;
    }
    if (null != application_id) {
      let application = outer1_8.getApplication(activity.application_id);
    } else {
      let name;
      if (null != activity) {
        name = activity.name;
      }
      application = null;
      if (null != name) {
        application = outer1_8.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  let obj6 = user(activity[55]);
  const tmp7Result = stream(activity[53])(ownerId, user(activity[54]).MediaEngineContextTypes.STREAM);
  const analyticsLocations = stream(activity[34])(stream(activity[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  obj = { display: "live" };
  let id;
  const tmp11 = stream(activity[34]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj.voiceChannelId = id;
  obj.user = user;
  obj.stream = stream;
  obj.analyticsLocations = analyticsLocations;
  const tmp12Result = stream(activity[36])(obj);
  c4 = tmp12Result;
  obj = { userId: user.id, onAction: tmp12Result };
  stream(activity[39])(obj);
  let obj9 = stream(activity[56]);
  obj1 = { value: analyticsLocations };
  obj2 = { style: items6 };
  items6 = [tmp.card, user.style];
  const tmp12 = stream(activity[36]);
  const tmp16 = callback;
  const tmp17 = closure_22;
  if (null != stateFromStores3) {
    const intl2 = user(activity[23]).intl;
    obj3 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(user(activity[23]).t["4CQq9Q"], obj3);
  } else {
    const intl = user(activity[23]).intl;
    formatToPlainStringResult = intl.string(user(activity[23]).t["Jpkr/q"]);
  }
  obj2.title = formatToPlainStringResult;
  obj2.titleStyle = tmp.cardTitle;
  obj2.titleIcon = callback(user(activity[43]).LiveTag, {});
  obj4 = { style: tmp.streamPreview, children: callback(user(activity[57]).VoicePanelStreamPreview, obj5) };
  obj5 = {
    mode: undefined,
    stream,
    disabled: !stateFromStores(obj6.useCanWatchStream(stateFromStores), 1)[0],
    onPress() {
      _undefined({ action: "PRESS_IMAGE" });
      const voiceChannel = stream(activity[58]).selectVoiceChannel(stream.channelId);
      const obj = stream(activity[58]);
      const result = user(activity[59]).watchStreamAndTransitionToStream(stream);
      const obj2 = user(activity[59]);
      stream(activity[60]).hideActionSheet();
    }
  };
  const items7 = [callback(closure_7, obj4), , , , ];
  let tmp24 = null != stateFromStores4 && !obj9.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp24) {
    obj6 = { value: effectiveVolume, onValueChange: handleVolumeChange };
    tmp24 = callback(stream(activity[61]), obj6, "set-stream-volume");
  }
  items7[1] = tmp24;
  let tmp28 = null != activity;
  if (tmp28) {
    tmp28 = stream(activity[31])(activity);
  }
  if (tmp28) {
    const obj7 = { user, activity, application: stateFromStores5, onAction: tmp12Result };
    tmp28 = callback(ActivityCardBody, obj7);
  }
  items7[2] = tmp28;
  let tmp33 = null != stateFromStores2 && null != stateFromStores;
  if (tmp33) {
    const obj8 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp12Result, style: tmp.voiceChannelDivider };
    tmp33 = callback(stream(activity[46]), obj8);
  }
  items7[3] = tmp33;
  let tmp37 = null != stateFromStores;
  if (tmp37) {
    obj9 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp12Result };
    tmp37 = callback(user(activity[48]).VoiceChannelButtons, obj9);
  }
  items7[4] = tmp37;
  obj2.children = items7;
  obj1.children = tmp17(stream(activity[42]), obj2);
  return tmp16(user(activity[34]).AnalyticsLocationProvider, obj1);
}
function VoiceCallActivityCard(arg0) {
  let channel;
  let isInChannel;
  let style;
  let user;
  ({ user, channel } = arg0);
  ({ isInChannel, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = stateFromStores(newestAnalyticsLocation[63])(channel);
  let obj = channel(newestAnalyticsLocation[40]);
  const items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => outer1_11.getGuild(channel.guild_id));
  let obj1 = channel(newestAnalyticsLocation[40]);
  const items1 = [closure_12];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = outer1_12.can(outer1_18.CONNECT, channel);
    }
    return isPrivateResult;
  });
  const tmp2 = stateFromStores(newestAnalyticsLocation[62])(channel);
  const tmp6Result = stateFromStores(newestAnalyticsLocation[34])(stateFromStores(newestAnalyticsLocation[35]).USER_PROFILE_VOICE_ACTIVITY_CARD);
  newestAnalyticsLocation = tmp6Result.newestAnalyticsLocation;
  obj = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations: tmp6Result.analyticsLocations };
  const tmp8 = stateFromStores(newestAnalyticsLocation[36])(obj);
  let VoicePanelStreamPreview = tmp8;
  obj = { userId: user.id, onAction: tmp8 };
  stateFromStores(newestAnalyticsLocation[39])(obj);
  obj1 = { style: items2 };
  items2 = [tmp.card, style];
  const tmp10 = callback2;
  const tmp6 = stateFromStores(newestAnalyticsLocation[34]);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = channel(newestAnalyticsLocation[23]).intl;
      const string = intl.string;
      const t = channel(newestAnalyticsLocation[23]).t;
      if (isGuildStageVoiceResult) {
        let stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj1.title = stringResult;
    obj1.titleStyle = tmp.cardTitle;
    let obj2 = { style: tmp.body };
    const obj3 = { users: tmp2 };
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj3.guildId = id;
    const items3 = [callback(stateFromStores(newestAnalyticsLocation[64]), obj3), ];
    const obj4 = { style: tmp.voiceCallContent };
    if (stateFromStores1) {
      const obj5 = { accessibilityRole: "button" };
      const obj6 = { channel };
      obj5.accessibilityLabel = stateFromStores(newestAnalyticsLocation[66])(obj6);
      const intl3 = channel(newestAnalyticsLocation[23]).intl;
      obj5.accessibilityHint = intl3.string(channel(newestAnalyticsLocation[23]).t["9C444m"]);
      obj5.onPress = function onPress() {
        tmp8({ action: "OPEN_VOICE_CHANNEL" });
        stateFromStores(newestAnalyticsLocation[60]).hideActionSheet();
        const obj = stateFromStores(newestAnalyticsLocation[60]);
        stateFromStores(newestAnalyticsLocation[67]).popAll();
        const obj2 = stateFromStores(newestAnalyticsLocation[67]);
        channel(newestAnalyticsLocation[68]).openGuildVoiceModal(channel, newestAnalyticsLocation);
      };
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
      const obj8 = { style: tmp.voiceCallNameIconWrapper };
      const obj9 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj8.children = callback(stateFromStores(newestAnalyticsLocation[65]), obj9);
      const items4 = [callback(closure_7, obj8), tmp3];
      obj7.children = items4;
      obj5.children = callback2(channel(newestAnalyticsLocation[18]).Text, obj7);
      let tmp33 = callback(channel(newestAnalyticsLocation[41]).PressableOpacity, obj5);
    } else {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
      const obj11 = { style: tmp.voiceCallNameIconWrapper };
      const obj12 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj11.children = callback(stateFromStores(newestAnalyticsLocation[65]), obj12);
      const items5 = [callback(closure_7, obj11), tmp3];
      obj10.children = items5;
      tmp33 = callback2(channel(newestAnalyticsLocation[18]).Text, obj10);
    }
    const items6 = [tmp33, ];
    let tmp42 = null;
    if (null != stateFromStores) {
      const obj13 = { accessibilityRole: "button" };
      const intl4 = channel(newestAnalyticsLocation[23]).intl;
      obj13.accessibilityHint = intl4.string(channel(newestAnalyticsLocation[23]).t.KLOhbO);
      const intl5 = channel(newestAnalyticsLocation[23]).intl;
      const obj14 = { guildName: stateFromStores.name };
      obj13.accessibilityLabel = intl5.formatToPlainString(channel(newestAnalyticsLocation[23]).t["hq/Qze"], obj14);
      obj13.onPress = function onPress() {
        tmp8({ action: "OPEN_VOICE_GUILD" });
        channel(newestAnalyticsLocation[69]).transitionToGuild(stateFromStores.id);
        stateFromStores(newestAnalyticsLocation[70])();
        const obj = channel(newestAnalyticsLocation[69]);
        stateFromStores(newestAnalyticsLocation[60]).hideActionSheet();
      };
      const obj15 = { variant: "text-xs/medium" };
      const intl6 = channel(newestAnalyticsLocation[23]).intl;
      const obj16 = { guildName: stateFromStores.name };
      obj15.children = intl6.format(channel(newestAnalyticsLocation[23]).t["hq/Qze"], obj16);
      obj13.children = callback(channel(newestAnalyticsLocation[18]).Text, obj15);
      tmp42 = callback(channel(newestAnalyticsLocation[41]).PressableOpacity, obj13);
    }
    items6[1] = tmp42;
    obj4.children = items6;
    items3[1] = callback2(closure_7, obj4);
    obj2.children = items3;
    const items7 = [callback2(closure_7, obj2), ];
    const obj17 = { channel, isInChannel, onAction: tmp8 };
    items7[1] = callback(channel(newestAnalyticsLocation[48]).VoiceChannelButtons, obj17);
    obj1.children = items7;
    return tmp10(tmp11, obj1);
  }
  const intl2 = channel(newestAnalyticsLocation[23]).intl;
  stringResult = intl2.string(channel(newestAnalyticsLocation[23]).t["9FaEzi"]);
}
({ TouchableOpacity: closure_5, TouchableWithoutFeedback: closure_6, View: closure_7 } = get_ActivityIndicator);
({ ActivityTypes: closure_17, Permissions: closure_18, PlatformTypes: closure_19, StatusTypes: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
_createForOfIteratorHelperLoose = { card: { gap: 12 }, cardTitle: { marginBottom: 0 } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let num = 16;
_createForOfIteratorHelperLoose.cardTitleIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { flexDirection: "row", alignItems: "center", gap: 16 };
_createForOfIteratorHelperLoose.content = { flex: 1 };
_createForOfIteratorHelperLoose.imageContainer = { position: "relative" };
_createForOfIteratorHelperLoose.imageAspectRatio = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
_createForOfIteratorHelperLoose.crunchyrollImageAspectRatio = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.largeImage = obj1;
let obj2 = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.smallImageBackground = obj2;
_createForOfIteratorHelperLoose.smallImage = { width: 24, height: 24, borderRadius: 12 };
_createForOfIteratorHelperLoose.badges = { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 };
let obj3 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingTop: 12 };
_createForOfIteratorHelperLoose.voiceChannelDivider = obj3;
_createForOfIteratorHelperLoose.customButtons = { flexDirection: "column", gap: 8 };
let obj4 = { aspectRatio: 1.7777777777777777, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.streamPreview = obj4;
_createForOfIteratorHelperLoose.voiceActivityCard = { padding: 0 };
_createForOfIteratorHelperLoose.voiceSettings = { padding: 0, marginBottom: -16 };
let obj5 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingTop: 16, marginTop: 4, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
_createForOfIteratorHelperLoose.voiceSettingsDivider = obj5;
_createForOfIteratorHelperLoose.voiceCallContent = { flex: 1, gap: 4 };
let obj6 = { width: 22, height: null, justifyContent: "center" };
if (set.isAndroid()) {
  num = 12;
}
obj6.height = num;
_createForOfIteratorHelperLoose.voiceCallNameIconWrapper = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  let live;
  let stream;
  const user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  let c3;
  stream = undefined;
  let voiceActivity;
  let stateFromStores;
  let items7 = function renderVoiceActivityCard(voiceChannel) {
    if (null != stream) {
      if (stream.channelId === voiceChannel.id) {
        let obj = { user, stream, activity: voiceActivity, style: _undefined.voiceActivityCard };
        let tmp7 = outer1_21(outer1_29, obj);
      }
      return tmp7;
    }
    if (null != voiceActivity) {
      obj = { user, currentUser, activity: voiceActivity, voiceChannel, style: _undefined.voiceActivityCard };
      tmp7 = outer1_21(outer1_28, obj);
    } else {
      obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: _undefined.voiceActivityCard };
      tmp7 = outer1_21(outer1_30, obj);
    }
  };
  let tmp = _createForOfIteratorHelperLoose();
  c3 = tmp;
  ({ live, stream } = currentUser(style[71])(user.id));
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp3 = currentUser(style[72])(obj);
  const voiceChannel = tmp3.voiceChannel;
  voiceActivity = tmp3.voiceActivity;
  let obj1 = user(style[40]);
  const items = [closure_15];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = outer1_15.isInChannel(voiceChannel.id);
    }
    return isInChannelResult;
  });
  let _isNativeReflectConstruct = user.id === currentUser.id;
  let obj2 = user(style[40]);
  const items1 = [closure_14, closure_13];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (_isNativeReflectConstruct) {
      let status = outer1_14.getStatus();
    } else {
      status = outer1_13.getStatus(user.id);
    }
    let tmp5 = status === outer1_20.OFFLINE;
    if (!tmp5) {
      tmp5 = status === outer1_20.INVISIBLE;
    }
    return tmp5;
  });
  let obj3 = user(style[40]);
  const items2 = [closure_16];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const userProfile = outer1_16.getUserProfile(user.id);
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
        obj.children = callback(currentUser(style[73]), obj);
        return callback(currentUser(style[42]), obj);
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
        tmp23 = callback(StreamActivityCard, obj2);
      }
      items5[1] = tmp23;
      items5[2] = found.map((activity) => {
        let tmp = arg1;
        const application_id = activity.application_id;
        if (null != application_id) {
          tmp = application_id;
        }
        return outer1_21(outer1_28, { user, currentUser, activity, style }, tmp);
      });
      obj1.children = items5;
      return tmp8(tmp9, obj1);
    } else if (stateFromStores) {
      obj3 = {};
      const items6 = [tmp.card, style];
      obj3.style = items6;
      const tmp19 = currentUser(style[42]);
      items7 = [, ];
      items7[0] = items7(voiceChannel);
      const obj4 = { user, currentUser, channel: voiceChannel };
      const items8 = [, ];
      ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
      obj4.style = items8;
      items7[1] = callback(currentUser(style[73]), obj4);
      obj3.children = items7;
      let tmp15 = callback2(tmp19, obj3);
      const items7Result = items7(voiceChannel);
    } else {
      const obj5 = {};
      const items9 = [tmp.card, style];
      obj5.style = items9;
      obj5.children = items7(voiceChannel);
      tmp15 = callback(currentUser(style[42]), obj5);
      const tmp14 = currentUser(style[42]);
    }
    tmp8 = callback2;
    tmp9 = closure_23;
  }
};

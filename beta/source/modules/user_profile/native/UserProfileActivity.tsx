// Module ID: 12572
// Function ID: 12573
// Name: UserProfileActivity
// Dependencies: [32, 19, 17, 5063, 4858, 2045, 2067, 4469, 4876, 5591, 4855, 7035, 6629, 1074, 21, 4836, 576, 1364, 4832, 7818, 12573, 4540, 10350, 1115, 11248, 5899, 1397, 7792, 8021, 4685, 10345, 7158, 12578, 12588, 6583, 6603, 12594, 8128, 8139, 12595, 504, 5435, 6628, 1177, 12581, 12596, 12598, 12606, 12609, 7705, 4877, 12576, 12577, 12611, 9477, 4891, 7139, 9437, 12612, 5723, 4978, 4800, 9442, 12599, 4989, 12613, 10352, 9060, 5039, 5043, 6760, 8761, 12614, 12616, 12617, 2]
// Exports: default

// Module 12572 (UserProfileActivity)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import Constants2 from "Constants" /* 6629 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 8761 */;
import UserActivitySpotify from "UserActivitySpotify" /* 11248 */;
import UserProfileActivityButtons from "UserProfileActivityButtons" /* 12606 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
function ActivityCardText(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let trimmed = str;
  if (typeof children.children === "string") {
    trimmed = str.trim();
  }
  let tmp3 = null;
  if (null != trimmed) {
    tmp3 = null;
    if ("" !== trimmed) {
      const obj = { children: trimmed };
      const Text = Text_Text.Text;
      const merged1 = Object.assign(merged);
      tmp3 = closure_21(Text, obj);
    }
  }
  return tmp3;
}
function MaybeLink(href) {
  href = href.href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    let obj = {
      accessibilityRole: "link",
      onPress() {
          const obj = MaskedLinkUtils;
          const obj2 = { href };
          return obj.handleClick(obj2);
        },
      children
    };
    tmp = closure_21(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  let UnknownGameIcon;
  let colors;
  let intl;
  let isThemeDarkResult;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let largeImage;
  let obj10;
  let obj11;
  let obj13;
  let obj16;
  let obj18;
  let obj20;
  let obj22;
  let obj27;
  let obj4;
  let obj5;
  let obj8;
  let smallImage;
  let tmp11Result;
  let tmp13Result;
  let tmp13Result2;
  let tmp25Result;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp30;
  let tmp31;
  let tmp31Result3;
  let tmp32;
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const application = user.application;
  const tmp = closure_24();
  let obj = user(onAction[20]);
  const imageForActivity = obj.useImageForActivity(activity, application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[21]);
  let tmp9 = !user.bot;
  const obj2 = { style: tmp.body, children: items4 };
  if (tmp9) {
    let tmp50Result;
    if (null != largeImage) {
      const tmp11 = activity;
      if (activity(onAction[22])(activity)) {
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: largeImage.alt,
          accessibilityHint: intl.string(user(onAction[23]).t.sjjOk2),
          onPress() {
                  onAction({ action: "OPEN_SPOTIFY_ALBUM" });
                  const obj = UserActivitySpotify;
                  obj.openAlbum(activity, user.id);
                },
          children: closure_21(closure_7, obj4)
        };
        intl = tmp2(tmp3[23]).intl;
        obj4 = { style: items, children: closure_21(tmp11Result, obj5) };
        items = [, ];
        ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
        obj5 = { source: tmp2Result.makeSource(largeImage.src), alt: largeImage.alt, style: tmp.largeImage };
        tmp11Result = tmp11(onAction[25]);
        tmp2Result = user(onAction[26]);
        tmp50Result = closure_21(closure_6, obj3);
      }
      tmp9 = tmp50Result;
    }
    if (null != largeImage) {
      const items1 = [tmp.imageContainer, ];
      const obj6 = { style: items1, children: items2 };
      items1[1] = activity(onAction[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
      const assets = activity.assets;
      let large_url;
      if (assets != null) {
        large_url = assets.large_url;
      }
      const obj7 = { href: large_url, children: closure_21(tmp13Result, obj8) };
      obj8 = { source: tmp2Result4.makeSource(largeImage.src), alt: largeImage.alt, style: tmp.largeImage };
      tmp13Result = activity(onAction[25]);
      tmp2Result4 = user(onAction[26]);
      items2 = [closure_21(MaybeLink, obj7), ];
      let tmp14Result = null != smallImage;
      if (tmp14Result) {
        const assets2 = activity.assets;
        let small_url;
        const obj9 = { style: tmp.smallImageBackground, children: closure_21(MaybeLink, obj10) };
        if (assets2 != null) {
          small_url = assets2.small_url;
        }
        obj10 = { href: small_url, children: closure_21(tmp13Result2, obj11) };
        obj11 = { source: tmp2Result5.makeSource(smallImage.src), alt: smallImage.alt, style: tmp.smallImage };
        tmp13Result2 = activity(onAction[25]);
        tmp2Result5 = user(onAction[26]);
        tmp14Result = tmp14(tmp8, obj9);
      }
      items2[1] = tmp14Result;
      tmp50Result = tmp7(tmp8, obj6);
    } else {
      const obj12 = { style: items3, children: closure_21(UnknownGameIcon, obj13) };
      items3 = [, ];
      ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
      obj13 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
      UnknownGameIcon = tmp2(tmp3[28]).UnknownGameIcon;
      const tmp2Result6 = user(onAction[29]);
      isThemeDarkResult = tmp2Result6.isThemeDark(tmp6);
      colors = activity(tmp3[16]).colors;
      tmp50Result = tmp50(tmp8, obj12);
    }
  }
  items4 = [tmp9, ];
  const obj14 = { style: tmp.content, children: items5 };
  if (activity(onAction[22])(activity)) {
    const obj15 = { variant: "text-md/semibold", children: closure_21(user(onAction[24]).SpotifyTrack, obj16) };
    obj16 = {
      text: activity.details,
      activity,
      onPress() {
          return onAction({ action: "OPEN_SPOTIFY_TRACK" });
        }
    };
    tmp25Result = tmp25(ActivityCardText, obj15);
    tmp30 = ActivityCardText;
    tmp31 = tmp25;
    tmp32 = tmp25;
  } else {
    let name;
    const obj17 = { href: activity.details_url, children: closure_21(ActivityCardText, obj18) };
    const tmp26 = MaybeLink;
    if (activity(onAction[30])(activity)) {
      name = activity.name;
    } else {
      name = activity.details;
      if (name == null) {
        name = activity.name;
      }
    }
    obj18 = { variant: "text-md/semibold", children: name };
    tmp25Result = tmp25(tmp26, obj17);
    tmp30 = tmp27;
    tmp31 = tmp25;
    tmp32 = tmp25;
  }
  items5 = [tmp25Result, , , ];
  if (activity(onAction[22])(activity)) {
    let trimmed;
    if (activity.state != null) {
      trimmed = str.trim();
    }
    let tmp31Result = null;
    if (null != trimmed) {
      tmp31Result = null;
      if ("" !== trimmed) {
        const obj19 = { variant: "text-xs/medium", lineClamp: 1, children: tmp31(user(onAction[24]).SpotifyArtists, obj20) };
        obj20 = {
          artists: trimmed,
          activity,
          userId: user.id,
          onPress() {
                  return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
                }
        };
        tmp31Result = tmp31(tmp30, obj19);
      }
    }
    tmp31Result3 = tmp31Result;
  } else {
    let state = activity.details;
    const tmp34 = tmp24(tmp3[30])(activity) || null == activity.state;
    if (!tmp34) {
      state = activity.state;
    }
    const obj21 = { href: activity.state_url, children: tmp31(tmp30, obj22) };
    obj22 = { variant: "text-xs/medium", lineClamp: 1, children: state };
    tmp31Result3 = tmp31(MaybeLink, obj21);
  }
  items5[1] = tmp31Result3;
  let tmp31Result4 = null;
  if (!activity(onAction[22])(activity)) {
    tmp31Result4 = null;
    if (activity.type !== constants.WATCHING) {
      if (activity(onAction[30])(activity)) {
        if (!activity(onAction[31])(activity)) {
          tmp31Result4 = null;
        }
      }
      if (activity(onAction[30])(activity)) {
        const party = activity.party;
        size = undefined;
        if (party != null) {
          size = party.size;
        }
        let str3 = "";
        const tmp47 = null != size && activity.party.size.length >= 2;
        if (tmp47) {
          let formatToPlainStringResult;
          if (0 === activity.party.size[1]) {
            const intl3 = tmp2(tmp3[23]).intl;
            const obj23 = { count: activity.party.size[0] };
            formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[23]).t.IM4J4e, obj23);
          } else {
            const intl2 = tmp2(tmp3[23]).intl;
            const obj24 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[23]).t["u//9By"], obj24);
          }
          str3 = formatToPlainStringResult;
        }
        const obj25 = { variant: "text-xs/medium", lineClamp: 1, children: items6.join(" ") };
        items6 = [activity.state, str3];
        tmp31Result4 = tmp31(tmp30, obj25);
      } else {
        const assets3 = activity.assets;
        let large_url1;
        const tmp43 = MaybeLink;
        if (assets3 != null) {
          large_url1 = assets3.large_url;
        }
        const assets4 = activity.assets;
        let large_text;
        const obj26 = { href: large_url1, children: tmp31(tmp30, obj27) };
        if (assets4 != null) {
          large_text = assets4.large_text;
        }
        obj27 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
        tmp31Result4 = tmp31(tmp43, obj26);
      }
    }
  }
  items5[2] = tmp31Result4;
  let tmp32Result = !user.bot;
  if (tmp32Result) {
    const obj28 = { style: tmp.badges, activity };
    tmp32Result = tmp32(tmp24(tmp3[32]), obj28);
  }
  items5[3] = tmp32Result;
  items4[1] = closure_22(closure_7, obj14);
  return closure_22(closure_7, obj2);
}
function ActivityCard(user) {
  let PressableOpacity;
  let activity;
  let buttons;
  let currentUser;
  let end;
  let intl;
  let items3;
  let items4;
  let makeSource;
  let obj6;
  let obj7;
  let obj8;
  let onAction;
  let start;
  let tmp2Result2;
  let tmp33Result;
  let tmp34;
  let whitePNG;
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  let closure_3;
  const style = user.style;
  const tmp = closure_24();
  const tmp4 = activity(12588)(activity);
  const tmp5 = activity(6583);
  const analyticsLocations = tmp5(activity(6603).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp6 = activity(12594);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp6Result = tmp6({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp6Result;
  const application_id = activity.application_id;
  const tmp2Result = activity(8128);
  let obj = { location: "User Profile Activity Card", applicationId: application_id, source: user(8139).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
  const tmp2ResultResult = tmp2Result(obj);
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = react.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  const obj2 = { userId: user.id, onAction: tmp6Result };
  activity(12595)(obj2);
  const items1 = [GuildStore, VoiceStateStore, ChannelStore];
  const obj3 = user(504);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    if (isEmbeddedActivityDefault(activity)) {
      let session_id;
      const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
      const id = user.id;
      if (activity != null) {
        session_id = tmp.session_id;
      }
      const voiceStateForSession = getVoiceStateForSession(id, session_id);
      let channelId;
      if (voiceStateForSession != null) {
        channelId = voiceStateForSession.channelId;
      }
      const getGuild = GuildStore.getGuild;
      const channel = ChannelStore.getChannel(channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return getGuild(guildId);
    } else {
      return null;
    }
  });
  const items2 = [ApplicationStore];
  const obj4 = user(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let application;
    if (null != activity.application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    } else {
      application = null;
      if (null != activity.name) {
        application = ApplicationStore.getApplicationByName(tmp.name);
      }
    }
    return application;
  });
  let tmp33Result8 = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp33Result8 = null;
    if (activity.type !== tmp16.HANG_STATUS) {
      const obj5 = { value: analyticsLocations, children: closure_21(PressableOpacity, obj6) };
      const AnalyticsLocationProvider = tmp10(6583).AnalyticsLocationProvider;
      obj6 = { onPress: callback, disabled: null == tmp2ResultResult, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(user(1115).t["9sZWVp"], obj7), children: tmp34(tmp2Result2, obj8) };
      PressableOpacity = tmp10(5435).PressableOpacity;
      intl = tmp10(1115).intl;
      obj8 = { style: items3, title: tmp4.text, titleStyle: tmp.cardTitle, titleIcon: tmp33Result, children: items4 };
      items3 = [tmp.card, style];
      tmp33Result = null != tmp4.platformIcon;
      obj7 = { gameName: activity.name };
      tmp2Result2 = activity(6628);
      tmp34 = closure_22;
      if (tmp33Result) {
        const obj9 = { style: tmp.cardTitleIcon, source: makeSource(whitePNG), size: user(1177).IconSizes.SMALL_14, disableColor: true };
        const Icon = tmp10(1177).Icon;
        const platformIcon = tmp4.platformIcon;
        whitePNG = undefined;
        makeSource = user(1397).makeSource;
        user(1397);
        if (platformIcon != null) {
          whitePNG = platformIcon.whitePNG;
        }
        tmp33Result = tmp33(Icon, obj9);
      }
      const obj10 = { user, activity, application: stateFromStores1, onAction: tmp6Result };
      items4 = [closure_21(ActivityCardBody, obj10), , , ];
      let tmp33Result5 = null;
      if (activity(12581)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj11 = { start, end };
        tmp33Result5 = tmp33(tmp2(12596), obj11);
      }
      items4[1] = tmp33Result5;
      let tmp33Result6 = null;
      if (null != voiceChannel) {
        tmp33Result6 = null;
        if (null != stateFromStores) {
          const obj12 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp6Result, style: tmp.voiceChannelDivider };
          tmp33Result6 = tmp33(tmp2(12598), obj12);
        }
      }
      items4[2] = tmp33Result6;
      let tmp33Result7 = null;
      if (user.id !== currentUser.id) {
        if (activity(10350)(activity)) {
          const obj13 = { activity, onAction: tmp6Result };
          tmp33Result7 = tmp33(tmp10(12606).PlayOnSpotifyButton, obj13);
        } else if (activity(7158)(activity)) {
          const obj14 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
          tmp33Result7 = tmp33(tmp10(12606).JoinActivityButton, obj14);
        } else {
          if (activity(10345)(activity)) {
            let supported_platforms = activity.supported_platforms;
            const tmp10Result2 = user(12609);
            const currentActivityGamePlatform = tmp10Result2.getCurrentActivityGamePlatform();
            const _Set = Set;
            if (supported_platforms == null) {
              supported_platforms = [];
            }
            const self = this;
            const self2 = this;
            const _Set1 = new _Set(supported_platforms);
            if (_Set1.has(currentActivityGamePlatform)) {
              if (null != activity.party) {
                let deepLinkUri;
                if (stateFromStores1 != null) {
                  deepLinkUri = stateFromStores1.deepLinkUri;
                }
                if (null != deepLinkUri) {
                  if (null != activity.session_id) {
                    if (null != stateFromStores1) {
                      const obj15 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
                      tmp33Result7 = tmp33(tmp10(12606).JoinGameActivityButton, obj15);
                    }
                  }
                }
              }
            }
          }
          if (activity(7705)(activity)) {
            const obj16 = { activity, onAction: tmp6Result };
            tmp33Result7 = tmp33(tmp10(12606).WatchActivityButton, obj16);
          } else {
            if (null != activity.buttons) {
              if (activity.buttons.length > 0) {
                const obj17 = {
                  style: tmp.customButtons,
                  children: buttons.map((item, index) => {
                                  const obj = { index, user, activity, onAction };
                                  return closure_21(UserProfileActivityButtons.CustomActivityButton, obj, index);
                                })
                };
                buttons = activity.buttons;
                tmp33Result7 = tmp33(closure_7, obj17);
              }
            }
            tmp33Result7 = null;
            if (!activity(4877)(activity)) {
              if (activity(12576)(activity)) {
                const obj18 = { type: constants3.XBOX, onAction: tmp6Result };
                tmp33Result7 = tmp33(tmp10(12606).ConnectPlatformButton, obj18);
              } else {
                tmp33Result7 = null;
                if (activity(12577)(activity)) {
                  const obj19 = { type: constants3.PLAYSTATION, onAction: tmp6Result };
                  tmp33Result7 = tmp33(tmp10(12606).ConnectPlatformButton, obj19);
                }
              }
            }
          }
        }
      }
      items4[3] = tmp33Result7;
      tmp33Result8 = tmp33(AnalyticsLocationProvider, obj5);
    }
  }
  return tmp33Result8;
}
function StreamActivityCard(user) {
  let effectiveVolume;
  let formatToPlainStringResult;
  let handleVolumeChange;
  let intl3;
  let items6;
  let items7;
  let obj11;
  let obj8;
  let tmp21;
  let tmp9Result7;
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  let closure_4;
  const style = user.style;
  const tmp = closure_24();
  let tmp3 = activity;
  let obj = user(activity[40]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj2 = user(activity[40]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let id;
    const isInChannel = VoiceStateStore.isInChannel;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return isInChannel(id);
  });
  let obj3 = user(activity[40]);
  const items2 = [GuildStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  const items3 = [PresenceStore];
  const obj4 = user(activity[40]);
  const stateFromStores3 = obj4.useStateFromStores(items3, () => PresenceStore.findActivity(user.id, (arg0) => {
    const tmp3 = stream(activity[30])(arg0) && !stream(activity[53])(arg0);
    return tmp3;
  }));
  const items4 = [ApplicationStreamingStore];
  const obj5 = user(activity[40]);
  const stateFromStores4 = obj5.useStateFromStores(items4, () => ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  const tmp10 = stream(activity[54]);
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = tmp10(ownerId, user(tmp3[55]).MediaEngineContextTypes.STREAM));
  tmp10(ownerId, user(tmp3[55]).MediaEngineContextTypes.STREAM);
  const items5 = [ApplicationStore];
  const tmp2Result = user(tmp3[40]);
  const stateFromStores5 = tmp2Result.useStateFromStores(items5, () => {
    let application;
    let application_id;
    if (activity != null) {
      application_id = tmp.application_id;
    }
    if (null != application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    } else {
      let name;
      if (activity != null) {
        name = tmp.name;
      }
      application = null;
      if (null != name) {
        application = ApplicationStore.getApplicationByName(tmp.name);
      }
    }
    return application;
  });
  const tmp2Result2 = user(tmp3[56]);
  const first = stateFromStores(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0];
  const tmp9Result = stream(tmp3[34]);
  const analyticsLocations = tmp9Result(tmp9(tmp3[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp9Result5 = stream(tmp3[36]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = tmp9Result5({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
  closure_4 = tmp9Result1Result;
  const obj6 = { userId: user.id, onAction: tmp9Result1Result };
  stream(tmp3[39])(obj6);
  const tmp9Result6 = stream(tmp3[57]);
  const nonContextualStreamOutputPresent = tmp9Result6.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  const obj7 = { value: analyticsLocations, children: tmp21(tmp9Result7, obj8) };
  const AnalyticsLocationProvider = tmp2(tmp3[34]).AnalyticsLocationProvider;
  obj8 = { style: items6, title: formatToPlainStringResult, titleStyle: tmp.cardTitle, titleIcon: closure_21(user(tmp3[43]).LiveTag, {}), children: items7 };
  items6 = [tmp.card, style];
  tmp21 = closure_22;
  tmp9Result7 = stream(tmp3[42]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[23]).intl;
    const obj9 = { name: stateFromStores3.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[23]).t["4CQq9Q"], obj9);
  } else {
    const intl = tmp2(tmp3[23]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[23]).t["Jpkr/q"]);
  }
  const obj10 = { style: tmp.streamPreview, children: closure_21(user(tmp3[58]).VoicePanelStreamPreview, obj11) };
  obj11 = {
    mode: "a",
    stream,
    disabled: !first,
    onPress() {
      closure_4({ action: "PRESS_IMAGE" });
      const obj = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj.selectVoiceChannel(stream.channelId);
      const obj2 = StreamActionCreators;
      const result = obj2.watchStreamAndTransitionToStream(stream);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideAllActionSheets();
    }
  };
  items7 = [closure_21(closure_7, obj10), , , , ];
  let tmp20Result = null != stateFromStores4 && !nonContextualStreamOutputPresent;
  if (tmp20Result) {
    const obj12 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: intl3.string(user(tmp3[23]).t.pEAl4b) };
    const tmp9Result8 = stream(tmp3[62]);
    intl3 = tmp2(tmp3[23]).intl;
    tmp20Result = tmp20(tmp9Result8, obj12, "set-stream-volume");
  }
  items7[1] = tmp20Result;
  let tmp20Result4 = null != activity && tmp9(tmp3[31])(activity);
  if (tmp20Result4) {
    const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp20Result4 = tmp20(ActivityCardBody, obj13);
  }
  items7[2] = tmp20Result4;
  let tmp20Result5 = null != stateFromStores2 && null != stateFromStores;
  if (tmp20Result5) {
    const obj14 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp9Result1Result, style: tmp.voiceChannelDivider };
    tmp20Result5 = tmp20(tmp9(tmp3[46]), obj14);
  }
  items7[3] = tmp20Result5;
  let tmp20Result6 = null != stateFromStores;
  if (tmp20Result6) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp20Result6 = tmp20(tmp2(tmp3[47]).VoiceChannelButtons, obj15);
  }
  items7[4] = tmp20Result6;
  return closure_21(AnalyticsLocationProvider, obj7);
}
function VoiceCallActivityCard(arg0) {
  let Text2;
  let Text3;
  let analyticsLocations;
  let c2;
  let channel;
  let id;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isInChannel;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj11;
  let obj13;
  let obj16;
  let obj18;
  let obj19;
  let obj20;
  let style;
  let user;
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  let tmp = closure_24();
  const tmp4 = stateFromStores(12599)(channel);
  const tmp5 = stateFromStores(4989)(channel);
  let obj = channel(504);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj2 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
    }
    return isPrivateResult;
  });
  const tmp9 = stateFromStores(6583);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = tmp9(stateFromStores(6603).USER_PROFILE_VOICE_ACTIVITY_CARD));
  let obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  tmp9(stateFromStores(6603).USER_PROFILE_VOICE_ACTIVITY_CARD);
  const tmp11 = stateFromStores(12594)(obj3);
  let closure_3 = tmp11;
  const obj4 = { userId: user.id, onAction: tmp11 };
  stateFromStores(12595)(obj4);
  const obj5 = { style: items2, title: null, titleStyle: null, children: null };
  items2 = [tmp.card, style];
  const tmp14 = stateFromStores(6628);
  if (!channel.isDM()) {
    let stringResult;
    let tmp13Result;
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl = tmp6(1115).intl;
      const string = intl.string;
      const t = tmp6(1115).t;
      if (isGuildStageVoiceResult) {
        stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
    }
    obj5.title = stringResult;
    obj5.titleStyle = tmp.cardTitle;
    const obj7 = { users: tmp4, guildId: id };
    id = undefined;
    const obj6 = { style: tmp.body, children: items3 };
    const tmp2Result = stateFromStores(12613);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items3 = [closure_21(tmp2Result, obj7), ];
    const obj8 = { style: tmp.voiceCallContent, children: items6 };
    if (stateFromStores1) {
      const obj9 = {
        accessibilityRole: "button",
        accessibilityLabel: stateFromStores(9060)(obj10),
        accessibilityHint: intl3.string(channel(1115).t["9C444m"]),
        onPress() {
              closure_3({ action: "OPEN_VOICE_CHANNEL" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ModalActionCreatorsDefault;
              obj2.popAll();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, c2);
            },
        children: closure_22(Text2, obj11)
      };
      const PressableOpacity = tmp6(5435).PressableOpacity;
      obj10 = { channel };
      intl3 = tmp6(1115).intl;
      obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items4 };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: closure_21(stateFromStores(10352), obj13) };
      Text2 = tmp6(4832).Text;
      obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items4 = [closure_21(closure_7, obj12), tmp5];
      tmp13Result = tmp18(PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items5 };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: closure_21(stateFromStores(10352), obj16) };
      const Text = tmp6(4832).Text;
      obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items5 = [closure_21(closure_7, obj15), tmp5];
      tmp13Result = tmp13(Text, obj14);
    }
    items6 = [tmp13Result, ];
    let tmp18Result2 = null;
    if (null != stateFromStores) {
      const obj17 = {
        accessibilityRole: "button",
        accessibilityHint: intl4.string(channel(1115).t.KLOhbO),
        accessibilityLabel: intl5.formatToPlainString(channel(1115).t["hq/Qze"], obj18),
        onPress() {
              closure_3({ action: "OPEN_VOICE_GUILD" });
              const obj = transitionToGuild;
              obj.transitionToGuild(stateFromStores.id);
              closeVoicePanelsDefault();
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideAllActionSheets();
            },
        children: closure_21(Text3, obj19)
      };
      const PressableOpacity2 = tmp6(5435).PressableOpacity;
      intl4 = tmp6(1115).intl;
      intl5 = tmp6(1115).intl;
      obj18 = { guildName: stateFromStores.name };
      obj19 = { variant: "text-xs/medium", children: intl6.format(channel(1115).t["hq/Qze"], obj20) };
      Text3 = tmp6(4832).Text;
      intl6 = tmp6(1115).intl;
      obj20 = { guildName: stateFromStores.name };
      tmp18Result2 = tmp18(PressableOpacity2, obj17);
    }
    items6[1] = tmp18Result2;
    items3[1] = closure_22(closure_7, obj8);
    const items7 = [closure_22(closure_7, obj6), ];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_21(channel(12606).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_22(tmp14, obj5);
  }
  const intl2 = tmp6(1115).intl;
  stringResult = intl2.string(tmp6(1115).t["9FaEzi"]);
}
({ TouchableOpacity: hasOwnProperty, TouchableWithoutFeedback: metroRequire, View: metroImportDefault } = react_native);
const CARD_PADDING = Constants2.CARD_PADDING;
({ ActivityTypes: closure_17, Permissions: closure_18, PlatformTypes: closure_19, StatusTypes: closure_20 } = Constants);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: { gap: 12 }, cardTitle: { marginBottom: 0 }, cardTitleIcon: obj2, body: { flexDirection: "row", alignItems: "center", gap: 16 }, content: { flex: 1 }, imageContainer: { position: "relative" }, imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" }, crunchyrollImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" }, largeImage: size, smallImageBackground: rect, smallImage: { width: 24, height: 24, borderRadius: 12 }, badges: { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 }, voiceChannelDivider: obj3, customButtons: { flexDirection: "column", gap: 8 }, streamPreview: obj4, voiceActivityCard: { padding: 0 }, voiceSettings: { padding: 0, marginBottom: -16 }, voiceSettingsDivider: obj5, voiceCallContent: { flex: 1, gap: 4 }, voiceCallNameIconWrapper: { width: 22, height: num, justifyContent: "center" } };
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
rect = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
obj4 = { aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj5 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 16, marginTop: 4, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
let closure_24 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(user) {
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let live;
  let obj6;
  let stream;
  user = user.user;
  const currentUser = user.currentUser;
  const style = user.style;
  stream = undefined;
  const guildId = user.guildId;
  let tmp = closure_24();
  let closure_3 = tmp;
  let tmp2 = currentUser;
  ({ live, stream } = currentUser(style[72])(user.id));
  let obj = { userId: user.id, guildId };
  const tmp4 = currentUser(style[72])(user.id);
  const tmp5 = currentUser(style[73])(obj);
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj2 = user(style[40]);
  const items = [VoiceStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  });
  let closure_8 = user.id === currentUser.id;
  let obj3 = user(style[40]);
  const items1 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let status;
    const tmp = closure_8;
    if (tmp) {
      status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(user.id);
    }
    return status === constants.OFFLINE || status === constants.INVISIBLE;
  });
  const items2 = [UserProfileStore];
  const obj4 = user(style[40]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const userProfile = UserProfileStore.getUserProfile(user.id);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  if (stateFromStores1) {
    if (null != voiceChannel) {
      if (stateFromStores) {
        const obj5 = { style: items3, children: closure_21(tmp2(style[74]), obj6) };
        items3 = [tmp.card, style];
        obj6 = { user, currentUser, channel: voiceChannel, style: items4 };
        items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        const tmp2Result = tmp2(style[42]);
        return closure_21(tmp2Result, obj5);
      }
    }
  }
  if (stateFromStores1) {
    return null;
  } else {
    let found = live;
    if (null != voiceActivity) {
      found = live.filter((item) => item !== voiceActivity);
    }
    let tmp12 = !stateFromStores2;
    const tmp11 = closure_23;
    if (!stateFromStores2) {
      tmp12 = null != voiceChannel;
    }
    if (tmp12) {
      let tmp10Result;
      function renderVoiceActivityCard(voiceChannel) {
        let tmp8;
        if (null != stream) {
          if (stream.channelId === voiceChannel.id) {
            const obj2 = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
            tmp8 = closure_21(StreamActivityCard, obj2);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = closure_21(ActivityCard, obj3);
        } else {
          const obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = closure_21(VoiceCallActivityCard, obj);
        }
      }
      if (stateFromStores) {
        const obj7 = { style: items5, children: items6 };
        items5 = [tmp.card, style];
        items6 = [, ];
        const tmp2Result3 = tmp2(style[42]);
        items6[0] = renderVoiceActivityCard(voiceChannel);
        const obj8 = { user, currentUser, channel: voiceChannel, style: items7 };
        items7 = [, ];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        items6[1] = closure_21(tmp2(style[74]), obj8);
        tmp10Result = tmp10(tmp2Result3, obj7);
      } else {
        const obj9 = { style: items8, children: renderVoiceActivityCard(voiceChannel) };
        items8 = [tmp.card, style];
        const tmp2Result4 = tmp2(style[42]);
        tmp10Result = closure_21(tmp2Result4, obj9);
      }
      tmp12 = tmp10Result;
    }
    const items9 = [tmp12, , ];
    let tmp18 = !stateFromStores2 && null != stream;
    if (tmp18) {
      let id;
      const channelId = stream.channelId;
      if (voiceChannel != null) {
        id = voiceChannel.id;
      }
      tmp18 = channelId !== id;
    }
    if (tmp18) {
      const obj10 = { user, stream, activity: voiceActivity, style };
      tmp18 = closure_21(StreamActivityCard, obj10);
    }
    const obj11 = { children: items9 };
    items9[1] = tmp18;
    items9[2] = found.map((activity, index) => {
      let application_id = activity.application_id;
      const obj = { user, currentUser, activity, style };
      const tmp = closure_21;
      const tmp2 = ActivityCard;
      if (application_id == null) {
        application_id = index;
      }
      return tmp(tmp2, obj, application_id);
    });
    return closure_22(tmp11, obj11);
  }
};

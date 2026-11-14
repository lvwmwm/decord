// Module ID: 15704
// Function ID: 15705
// Name: UserProfileActivity
// Dependencies: [32, 19, 17, 2165, 15705, 5155, 5177, 5238, 6068, 5209, 7316, 5981, 7352, 7962, 1072, 21, 5306, 575, 1380, 5929, 7653, 15707, 5377, 10860, 1113, 12686, 6020, 1414, 9481, 8375, 5313, 10854, 6069, 8469, 15716, 15726, 7918, 7937, 15732, 10664, 10286, 15733, 504, 15734, 15735, 7428, 7961, 1187, 15719, 15740, 15742, 15749, 15595, 8625, 6070, 15714, 15715, 5936, 8546, 3221, 6015, 15753, 6827, 15754, 6935, 6862, 5552, 15743, 5954, 15755, 10863, 8418, 6848, 6900, 7231, 12744, 15756, 15758, 15759, 2]
// Exports: default

// Module 15704 (UserProfileActivity)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import StreamActionCreators from "StreamActionCreators" /* 6862 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6900 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6935 */;
import transitionToGuild from "transitionToGuild" /* 7231 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7653 */;
import Constants2 from "Constants" /* 7962 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8469 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import UserActivitySpotify from "UserActivitySpotify" /* 12686 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 12744 */;
import UserProfileActivityButtons from "UserProfileActivityButtons" /* 15749 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import RequestToStreamStore from "RequestToStreamStore" /* 15705 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import PresenceStore from "PresenceStore" /* 6068 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7316 */;
import VoiceStateStore from "VoiceStateStore" /* 5981 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

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
  let tmp31Result4;
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const application = user.application;
  const tmp = closure_24();
  let obj = user(onAction[21]);
  const imageForActivity = obj.useImageForActivity(activity, application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[22]);
  let tmp9 = !user.bot;
  const obj2 = { style: tmp.body, children: items4 };
  if (tmp9) {
    let tmp48Result;
    if (null != largeImage) {
      const tmp11 = activity;
      if (activity(onAction[23])(activity)) {
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: largeImage.alt,
          accessibilityHint: intl.string(user(onAction[24]).t.sjjOk2),
          onPress() {
                  onAction({ action: "OPEN_SPOTIFY_ALBUM" });
                  const obj = UserActivitySpotify;
                  obj.openAlbum(activity, user.id);
                },
          children: closure_21(closure_7, obj4)
        };
        intl = tmp2(tmp3[24]).intl;
        obj4 = { style: items, children: closure_21(tmp11Result, obj5) };
        items = [, ];
        ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
        obj5 = { source: tmp2Result.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: tmp.largeImage };
        tmp11Result = tmp11(onAction[26]);
        tmp2Result = user(onAction[27]);
        tmp48Result = closure_21(closure_6, obj3);
      }
      tmp9 = tmp48Result;
    }
    if (null != largeImage) {
      const items1 = [tmp.imageContainer, ];
      const obj6 = { style: items1, children: items2 };
      items1[1] = activity(onAction[28])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
      const assets = activity.assets;
      let large_url;
      if (assets != null) {
        large_url = assets.large_url;
      }
      const obj7 = { href: large_url, children: closure_21(tmp13Result, obj8) };
      obj8 = { source: tmp2Result4.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: tmp.largeImage };
      tmp13Result = activity(onAction[26]);
      tmp2Result4 = user(onAction[27]);
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
        obj11 = { source: tmp2Result5.makeSource(smallImage.src), accessibilityLabel: smallImage.alt, style: tmp.smallImage };
        tmp13Result2 = activity(onAction[26]);
        tmp2Result5 = user(onAction[27]);
        tmp14Result = tmp14(tmp8, obj9);
      }
      items2[1] = tmp14Result;
      tmp48Result = tmp7(tmp8, obj6);
    } else {
      const obj12 = { style: items3, children: closure_21(UnknownGameIcon, obj13) };
      items3 = [, ];
      ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
      obj13 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
      UnknownGameIcon = tmp2(tmp3[29]).UnknownGameIcon;
      const tmp2Result6 = user(onAction[30]);
      isThemeDarkResult = tmp2Result6.isThemeDark(tmp6);
      colors = activity(tmp3[17]).colors;
      tmp48Result = tmp48(tmp8, obj12);
    }
  }
  items4 = [tmp9, ];
  const obj14 = { style: tmp.content, children: items5 };
  if (activity(onAction[23])(activity)) {
    const obj15 = { variant: "body-md/semibold", children: closure_21(user(onAction[25]).SpotifyTrack, obj16) };
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
  } else {
    let name;
    const obj17 = { href: activity.details_url, children: closure_21(ActivityCardText, obj18) };
    const tmp26 = MaybeLink;
    if (activity(onAction[31])(activity)) {
      name = activity.name;
    } else {
      name = activity.details;
      if (name == null) {
        name = activity.name;
      }
    }
    obj18 = { variant: "body-md/semibold", children: name };
    tmp25Result = tmp25(tmp26, obj17);
    tmp30 = tmp27;
    tmp31 = tmp25;
  }
  items5 = [tmp25Result, , , ];
  if (activity(onAction[23])(activity)) {
    let trimmed;
    if (activity.state != null) {
      trimmed = str.trim();
    }
    let tmp31Result = null;
    if (null != trimmed) {
      tmp31Result = null;
      if ("" !== trimmed) {
        const obj19 = { variant: "body-xs/medium", lineClamp: 1, children: tmp31(user(onAction[25]).SpotifyArtists, obj20) };
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
    tmp31Result4 = tmp31Result;
  } else {
    let state = activity.details;
    const tmp33 = tmp24(tmp3[31])(activity) || null == activity.state;
    if (!tmp33) {
      state = activity.state;
    }
    const obj21 = { href: activity.state_url, children: tmp31(tmp30, obj22) };
    obj22 = { variant: "body-xs/medium", lineClamp: 1, children: state };
    tmp31Result4 = tmp31(MaybeLink, obj21);
  }
  items5[1] = tmp31Result4;
  let tmp31Result5 = null;
  if (!activity(onAction[23])(activity)) {
    tmp31Result5 = null;
    if (activity.type !== user(onAction[32]).ActivityTypes.WATCHING) {
      if (activity(onAction[31])(activity)) {
        if (!activity(onAction[33])(activity)) {
          tmp31Result5 = null;
        }
      }
      if (activity(onAction[31])(activity)) {
        const party = activity.party;
        size = undefined;
        if (party != null) {
          size = party.size;
        }
        let str3 = "";
        const tmp45 = null != size && activity.party.size.length >= 2;
        if (tmp45) {
          let formatToPlainStringResult;
          if (0 === activity.party.size[1]) {
            const intl3 = tmp2(tmp3[24]).intl;
            const obj23 = { count: activity.party.size[0] };
            formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[24]).t.IM4J4e, obj23);
          } else {
            const intl2 = tmp2(tmp3[24]).intl;
            const obj24 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t["u//9By"], obj24);
          }
          str3 = formatToPlainStringResult;
        }
        const obj25 = { variant: "body-xs/medium", lineClamp: 1, children: items6.join(" ") };
        items6 = [activity.state, str3];
        tmp31Result5 = tmp31(tmp30, obj25);
      } else {
        const assets3 = activity.assets;
        let large_url1;
        const tmp41 = MaybeLink;
        if (assets3 != null) {
          large_url1 = assets3.large_url;
        }
        const assets4 = activity.assets;
        let large_text;
        const obj26 = { href: large_url1, children: tmp31(tmp30, obj27) };
        if (assets4 != null) {
          large_text = assets4.large_text;
        }
        obj27 = { variant: "body-xs/medium", lineClamp: 1, children: large_text };
        tmp31Result5 = tmp31(tmp41, obj26);
      }
    }
  }
  items5[2] = tmp31Result5;
  let tmp31Result6 = !user.bot;
  if (tmp31Result6) {
    const obj28 = { style: tmp.badges, activity };
    tmp31Result6 = tmp31(tmp24(tmp3[34]), obj28);
  }
  items5[3] = tmp31Result6;
  items4[1] = closure_22(closure_7, obj14);
  return closure_22(closure_7, obj2);
}
class ActivityCard {
  constructor(user) {
    let PressableOpacity;
    let activity;
    let buttons;
    let currentUser;
    let end;
    let intl;
    let intl2;
    let isConnectedToRequestToStreamChannel;
    let isRequestOnCooldown;
    let items4;
    let items5;
    let makeSource;
    let obj7;
    let obj8;
    let obj9;
    let onAction;
    let requestToStreamChannel;
    let start;
    let tmp2Result2;
    let tmp37Result;
    let tmp38;
    let whitePNG;
    user = user.user;
    ({ currentUser, activity } = user);
    const voiceChannel = user.voiceChannel;
    dependencyMap = undefined;
    let closure_3;
    let requestToStreamData;
    const style = user.style;
    const tmp = closure_24();
    let tmp2 = activity;
    const tmp4 = activity(15726)(activity);
    const tmp5 = activity(7918);
    const analyticsLocations = tmp5(activity(7937).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
    let id;
    const tmp6 = activity(15732);
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    const tmp6Result = tmp6({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
    dependencyMap = tmp6Result;
    const application_id = activity.application_id;
    const tmp2Result = tmp2(10664);
    let obj = { location: "User Profile Activity Card", applicationId: application_id, source: user(10286).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
    const tmp2ResultResult = tmp2Result(obj);
    closure_3 = tmp2ResultResult;
    const items = [tmp2ResultResult];
    const callback = requestToStreamData.useCallback(() => {
      if (null != closure_3) {
        tmp();
      }
    }, items);
    const obj2 = { userId: user.id, onAction: tmp6Result };
    tmp2(15733)(obj2);
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
    const items3 = [VoiceStateStore, ChannelStore, SelectedChannelStore, RequestToStreamStore];
    const obj5 = user(504);
    const stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      let id;
      let voiceChannelId;
      const getChannel = ChannelStore.getChannel;
      const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(user.id);
      let channelId;
      const tmp2 = user;
      if (voiceStateForUser != null) {
        channelId = voiceStateForUser.channelId;
      }
      const channel = getChannel(channelId);
      const obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: voiceChannelId === id, isRequestOnCooldown: RequestToStreamStore.isRequestOnCooldown(tmp2.id) };
      id = undefined;
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (channel != null) {
        id = channel.id;
      }
      return obj;
    });
    ({ requestToStreamChannel, isConnectedToRequestToStreamChannel, isRequestOnCooldown } = stateFromStoresObject);
    const MobileRequestToStreamExperiment = user(15734).MobileRequestToStreamExperiment;
    let str;
    const useConfig = MobileRequestToStreamExperiment.useConfig;
    if (requestToStreamChannel != null) {
      str = requestToStreamChannel.guild_id;
    }
    if (str == null) {
      str = "";
    }
    let enabled = useConfig({ guildId: str, location: "UserProfileActivityCard" }).enabled;
    const tmp10Result = user(15735);
    requestToStreamData = tmp10Result.useRequestToStreamData(user.id, requestToStreamChannel);
    let tmp37Result8 = null;
    if (activity.type !== user(6069).ActivityTypes.CUSTOM_STATUS) {
      tmp37Result8 = null;
      if (activity.type !== user(6069).ActivityTypes.HANG_STATUS) {
        const obj6 = { value: analyticsLocations, children: closure_21(PressableOpacity, obj7) };
        const AnalyticsLocationProvider = tmp10(7918).AnalyticsLocationProvider;
        obj7 = { onPress: callback, disabled: null == tmp2ResultResult, accessibilityRole: "button", accessibilityLabel: intl2.formatToPlainString(user(1113).t["9sZWVp"], obj8), children: tmp38(tmp2Result2, obj9) };
        PressableOpacity = tmp10(7428).PressableOpacity;
        intl2 = tmp10(1113).intl;
        obj9 = { style: items4, title: tmp4.text, titleStyle: tmp.cardTitle, titleIcon: tmp37Result, children: items5 };
        items4 = [tmp.card, style];
        tmp37Result = null != tmp4.platformIcon;
        obj8 = { gameName: activity.name };
        tmp2Result2 = tmp2(7961);
        tmp38 = closure_22;
        if (tmp37Result) {
          const obj10 = { style: tmp.cardTitleIcon, source: makeSource(whitePNG), size: user(1187).IconSizes.SMALL_14, disableColor: true };
          const Icon = tmp10(1187).Icon;
          const platformIcon = tmp4.platformIcon;
          whitePNG = undefined;
          makeSource = user(1414).makeSource;
          user(1414);
          if (platformIcon != null) {
            whitePNG = platformIcon.whitePNG;
          }
          tmp37Result = tmp37(Icon, obj10);
        }
        const obj11 = { user, activity, application: stateFromStores1, onAction: tmp6Result };
        items5 = [closure_21(ActivityCardBody, obj11), , , , ];
        let tmp37Result5 = null;
        if (tmp2(15719)(activity)) {
          ({ start, end } = activity.timestamps);
          const obj12 = { start, end };
          tmp37Result5 = tmp37(tmp2(15740), obj12);
        }
        items5[1] = tmp37Result5;
        let tmp37Result6 = null;
        if (null != voiceChannel) {
          tmp37Result6 = null;
          if (null != stateFromStores) {
            const obj13 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp6Result, style: tmp.voiceChannelDivider };
            tmp37Result6 = tmp37(tmp2(15742), obj13);
          }
        }
        items5[2] = tmp37Result6;
        let tmp37Result7 = null;
        if (user.id !== currentUser.id) {
          if (tmp2(10860)(activity)) {
            const obj14 = { activity, onAction: tmp6Result };
            tmp37Result7 = tmp37(tmp10(15749).PlayOnSpotifyButton, obj14);
          } else if (tmp2(8469)(activity)) {
            const obj15 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
            tmp37Result7 = tmp37(tmp10(15749).JoinActivityButton, obj15);
          } else {
            if (tmp2(10854)(activity)) {
              let supported_platforms = activity.supported_platforms;
              const tmp10Result4 = user(15595);
              const currentActivityGamePlatform = tmp10Result4.getCurrentActivityGamePlatform();
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
                        const obj16 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
                        tmp37Result7 = tmp37(tmp10(15749).JoinGameActivityButton, obj16);
                      }
                    }
                  }
                }
              }
            }
            if (tmp2(8625)(activity)) {
              const obj17 = { activity, onAction: tmp6Result };
              tmp37Result7 = tmp37(tmp10(15749).WatchActivityButton, obj17);
            } else {
              if (null != activity.buttons) {
                if (activity.buttons.length > 0) {
                  const obj18 = {
                    style: tmp.customButtons,
                    children: buttons.map((item, index) => {
                                    const obj = { index, user, activity, onAction };
                                    return closure_21(UserProfileActivityButtons.CustomActivityButton, obj, index);
                                  })
                  };
                  buttons = activity.buttons;
                  tmp37Result7 = tmp37(closure_7, obj18);
                }
              }
              tmp37Result7 = null;
              if (!tmp2(6070)(activity)) {
                if (tmp2(15714)(activity)) {
                  const obj19 = { type: constants2.XBOX, onAction: tmp6Result };
                  tmp37Result7 = tmp37(tmp10(15749).ConnectPlatformButton, obj19);
                } else {
                  tmp37Result7 = null;
                  if (tmp2(15715)(activity)) {
                    const obj20 = { type: constants2.PLAYSTATION, onAction: tmp6Result };
                    tmp37Result7 = tmp37(tmp10(15749).ConnectPlatformButton, obj20);
                  }
                }
              }
            }
          }
        }
        items5[3] = tmp37Result7;
        if (enabled) {
          enabled = null != requestToStreamData;
        }
        if (enabled) {
          const playingApplication = requestToStreamData.playingApplication;
          let id1;
          if (playingApplication != null) {
            id1 = playingApplication.id;
          }
          let id2;
          if (stateFromStores1 != null) {
            id2 = stateFromStores1.id;
          }
          enabled = id1 === id2;
        }
        if (enabled) {
          let id3;
          if (stateFromStores1 != null) {
            id3 = stateFromStores1.id;
          }
          enabled = null != id3;
        }
        if (enabled) {
          enabled = isConnectedToRequestToStreamChannel;
        }
        if (enabled) {
          const obj21 = {
            onPress() {
                    const obj = UserProfileAnalyticsUtils;
                    const result = obj.trackUserProfileAction({ action: "PRESS_REQUEST_TO_STREAM" });
                    const result1 = requestToStreamData.handleRequestToStream({ analyticsLocation: "user_profile" });
                  },
            text: intl.string(tmp2(3221).DKHhec),
            disabled: isRequestOnCooldown,
            onPressDisabled: function onRequestToStreamDisabledPress() {
                    let intl;
                    const obj = { text: intl.string(activity(onAction[59]).mVFTUg) };
                    const open = activity(onAction[60]).open;
                    activity(onAction[60]);
                    intl = user(onAction[24]).intl;
                    open("REQUEST_TO_STREAM_DISABLED", obj);
                  }
          };
          const Button = tmp10(5936).Button;
          intl = tmp10(1113).intl;
          enabled = tmp37(Button, obj21);
        }
        items5[4] = enabled;
        tmp37Result8 = tmp37(AnalyticsLocationProvider, obj6);
      }
    }
    return tmp37Result8;
  }
}
function StreamActivityCard(user) {
  let formatToPlainStringResult;
  let items5;
  let items6;
  let obj12;
  let obj9;
  let tmp10Result;
  let tmp17;
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  let closure_4;
  const style = user.style;
  const tmp = closure_24();
  let tmp3 = activity;
  let obj = user(activity[42]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj2 = user(activity[42]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let id;
    const isInChannel = VoiceStateStore.isInChannel;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return isInChannel(id);
  });
  let obj3 = user(activity[42]);
  const items2 = [GuildStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  const items3 = [PresenceStore];
  const obj4 = user(activity[42]);
  const stateFromStores3 = obj4.useStateFromStores(items3, () => PresenceStore.findActivity(user.id, (arg0) => {
    const tmp3 = stream(activity[31])(arg0) && !stream(activity[61])(arg0);
    return tmp3;
  }));
  const items4 = [ApplicationStore];
  const obj5 = user(activity[42]);
  const stateFromStores4 = obj5.useStateFromStores(items4, () => {
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
  const obj6 = user(activity[62]);
  const first = stateFromStores(obj6.useCanWatchStream(stateFromStores), 1)[0];
  const tmp11 = stream(activity[36]);
  const analyticsLocations = tmp11(stream(activity[37]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp12 = stream(activity[38]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp12Result = tmp12({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
  closure_4 = tmp12Result;
  const obj7 = { userId: user.id, onAction: tmp12Result };
  stream(tmp3[41])(obj7);
  const obj8 = { value: analyticsLocations, children: tmp17(tmp10Result, obj9) };
  const AnalyticsLocationProvider = tmp2(tmp3[36]).AnalyticsLocationProvider;
  obj9 = { style: items5, title: formatToPlainStringResult, titleStyle: tmp.cardTitle, titleIcon: closure_21(user(tmp3[47]).LiveTag, {}), children: items6 };
  items5 = [tmp.card, style];
  tmp10Result = stream(tmp3[46]);
  tmp17 = closure_22;
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[24]).intl;
    const obj10 = { name: stateFromStores3.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t["4CQq9Q"], obj10);
  } else {
    const intl = tmp2(tmp3[24]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[24]).t["Jpkr/q"]);
  }
  const obj11 = { style: tmp.streamPreview, children: closure_21(user(tmp3[63]).VoicePanelStreamPreview, obj12) };
  obj12 = {
    mode: "a",
    stream,
    disabled: !first,
    onPress: function handlePressImage() {
      closure_4({ action: "PRESS_IMAGE" });
      const obj = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj.selectVoiceChannel(stream.channelId);
      const obj2 = StreamActionCreators;
      const result = obj2.watchStreamAndTransitionToStream(stream);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideAllActionSheets();
    }
  };
  items6 = [closure_21(closure_7, obj11), , , ];
  let tmp16Result = null != activity && tmp10(tmp3[33])(activity);
  if (tmp16Result) {
    const obj13 = { user, activity, application: stateFromStores4, onAction: tmp12Result };
    tmp16Result = tmp16(ActivityCardBody, obj13);
  }
  items6[1] = tmp16Result;
  let tmp16Result3 = null != stateFromStores2 && null != stateFromStores;
  if (tmp16Result3) {
    const obj14 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp12Result, style: tmp.voiceChannelDivider };
    tmp16Result3 = tmp16(tmp10(tmp3[50]), obj14);
  }
  items6[2] = tmp16Result3;
  let tmp16Result4 = null != stateFromStores;
  if (tmp16Result4) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp12Result };
    tmp16Result4 = tmp16(tmp2(tmp3[51]).VoiceChannelButtons, obj15);
  }
  items6[3] = tmp16Result4;
  return closure_21(AnalyticsLocationProvider, obj8);
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
  const tmp4 = stateFromStores(15743)(channel);
  const tmp5 = stateFromStores(5954)(channel);
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
  const tmp9 = stateFromStores(7918);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = tmp9(stateFromStores(7937).USER_PROFILE_VOICE_ACTIVITY_CARD));
  let obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  tmp9(stateFromStores(7937).USER_PROFILE_VOICE_ACTIVITY_CARD);
  const tmp11 = stateFromStores(15732)(obj3);
  let closure_3 = tmp11;
  const obj4 = { userId: user.id, onAction: tmp11 };
  stateFromStores(15733)(obj4);
  const obj5 = { style: items2, title: null, titleStyle: null, children: null };
  items2 = [tmp.card, style];
  const tmp14 = stateFromStores(7961);
  if (!channel.isDM()) {
    let stringResult;
    let tmp13Result;
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl = tmp6(1113).intl;
      const string = intl.string;
      const t = tmp6(1113).t;
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
    const tmp2Result = stateFromStores(15755);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items3 = [closure_21(tmp2Result, obj7), ];
    const obj8 = { style: tmp.voiceCallContent, children: items6 };
    if (stateFromStores1) {
      const obj9 = {
        accessibilityRole: "button",
        accessibilityLabel: stateFromStores(8418)(obj10),
        accessibilityHint: intl3.string(channel(1113).t["9C444m"]),
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
      const PressableOpacity = tmp6(7428).PressableOpacity;
      obj10 = { channel };
      intl3 = tmp6(1113).intl;
      obj11 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: items4 };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: closure_21(stateFromStores(10863), obj13) };
      Text2 = tmp6(5929).Text;
      obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items4 = [closure_21(closure_7, obj12), tmp5];
      tmp13Result = tmp18(PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: items5 };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: closure_21(stateFromStores(10863), obj16) };
      const Text = tmp6(5929).Text;
      obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items5 = [closure_21(closure_7, obj15), tmp5];
      tmp13Result = tmp13(Text, obj14);
    }
    items6 = [tmp13Result, ];
    let tmp18Result2 = null;
    if (null != stateFromStores) {
      const obj17 = {
        accessibilityRole: "button",
        accessibilityHint: intl4.string(channel(1113).t.KLOhbO),
        accessibilityLabel: intl5.formatToPlainString(channel(1113).t["hq/Qze"], obj18),
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
      const PressableOpacity2 = tmp6(7428).PressableOpacity;
      intl4 = tmp6(1113).intl;
      intl5 = tmp6(1113).intl;
      obj18 = { guildName: stateFromStores.name };
      obj19 = { variant: "body-xs/medium", children: intl6.format(channel(1113).t["hq/Qze"], obj20) };
      Text3 = tmp6(5929).Text;
      intl6 = tmp6(1113).intl;
      obj20 = { guildName: stateFromStores.name };
      tmp18Result2 = tmp18(PressableOpacity2, obj17);
    }
    items6[1] = tmp18Result2;
    items3[1] = closure_22(closure_7, obj8);
    const items7 = [closure_22(closure_7, obj6), ];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_21(channel(15749).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_22(tmp14, obj5);
  }
  const intl2 = tmp6(1113).intl;
  stringResult = intl2.string(tmp6(1113).t["9FaEzi"]);
}
({ TouchableOpacity: hasOwnProperty, TouchableWithoutFeedback: metroRequire, View: metroImportDefault } = react_native);
const CARD_PADDING = Constants2.CARD_PADDING;
({ Permissions: closure_18, PlatformTypes: closure_19, StatusTypes: closure_20 } = Constants);
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
  ({ live, stream } = currentUser(style[76])(user.id));
  let obj = { userId: user.id, guildId };
  const tmp4 = currentUser(style[76])(user.id);
  const tmp5 = currentUser(style[77])(obj);
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj2 = user(style[42]);
  const items = [VoiceStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  });
  let closure_8 = user.id === currentUser.id;
  let obj3 = user(style[42]);
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
  const obj4 = user(style[42]);
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
        const obj5 = { style: items3, children: closure_21(tmp2(style[78]), obj6) };
        items3 = [tmp.card, style];
        obj6 = { user, currentUser, channel: voiceChannel, style: items4 };
        items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        const tmp2Result = tmp2(style[46]);
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
        const tmp2Result3 = tmp2(style[46]);
        items6[0] = renderVoiceActivityCard(voiceChannel);
        const obj8 = { user, currentUser, channel: voiceChannel, style: items7 };
        items7 = [, ];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        items6[1] = closure_21(tmp2(style[78]), obj8);
        tmp10Result = tmp10(tmp2Result3, obj7);
      } else {
        const obj9 = { style: items8, children: renderVoiceActivityCard(voiceChannel) };
        items8 = [tmp.card, style];
        const tmp2Result4 = tmp2(style[46]);
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
export { ActivityCard };

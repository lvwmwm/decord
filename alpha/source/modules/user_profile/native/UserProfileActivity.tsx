// Module ID: 14308
// Function ID: 14309
// Name: UserProfileActivity
// Dependencies: [32, 109, 19, 17, 2042, 14309, 6643, 4824, 4846, 4904, 5713, 4875, 6499, 5631, 7704, 7306, 1084, 21, 4972, 587, 1381, 558, 576, 5235, 8860, 14311, 5038, 10654, 1125, 11345, 5670, 1414, 8832, 8072, 4979, 10647, 7813, 14320, 14330, 7255, 7280, 14336, 9245, 9246, 14337, 504, 14338, 14339, 14323, 14344, 5664, 3025, 14346, 14354, 14357, 8749, 5714, 14318, 14319, 6910, 7305, 1199, 5245, 8680, 14359, 11678, 5740, 6653, 6635, 7830, 5211, 11619, 14360, 11625, 14347, 5605, 10657, 9018, 6673, 7868, 7450, 10771, 14361, 14362, 14364, 14365, 2]

// Module 14308 (UserProfileActivity)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import shared from "shared" /* 4979 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import useChannelNameDefault from "useChannelName" /* 5605 */;
import FastImageDefault from "FastImage" /* 5670 */;
import hasRichActivityDefault from "hasRichActivity" /* 5714 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6635 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import Pressables from "Pressables" /* 6910 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7255 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import UserProfileCardDefault from "UserProfileCard" /* 7305 */;
import Constants2 from "Constants" /* 7306 */;
import transitionToGuild from "transitionToGuild" /* 7450 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7813 */;
import StreamActionCreators from "StreamActionCreators" /* 7830 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7868 */;
import UnknownGameIcon2 from "UnknownGameIcon" /* 8072 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8680 */;
import isStreamingDefault from "isStreaming" /* 8749 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8832 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8860 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9018 */;
import isGameActivityDefault from "isGameActivity" /* 10647 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10654 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10657 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10771 */;
import UserActivitySpotify from "UserActivitySpotify" /* 11345 */;
import isOnXboxDefault from "isOnXbox" /* 14318 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14319 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 14323 */;
import UserProfileActivityVoiceChannelDefault from "UserProfileActivityVoiceChannel" /* 14346 */;
import usePersonalizedVoiceChannelUsersDefault from "usePersonalizedVoiceChannelUsers" /* 14347 */;
import UserProfileActivityButtons from "UserProfileActivityButtons" /* 14354 */;
import isActivityJoinableOnCurrentPlatform from "isActivityJoinableOnCurrentPlatform" /* 14357 */;
import UserProfileVoiceSettingsDefault from "UserProfileVoiceSettings" /* 14365 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import RequestToStreamStore from "RequestToStreamStore" /* 14309 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6643 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildStore from "GuildStore" /* 4846 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import PresenceStore from "PresenceStore" /* 5713 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6499 */;
import VoiceStateStore from "VoiceStateStore" /* 5631 */;
import UserProfileStore from "UserProfileStore" /* 7704 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let metroImportAll;
let metroImportDefault;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
let tmp;
const Text_Text = tmp(5235);
const UserProfileActivityTimebarDefault = tmp(14344);
let user = ["children"];
let _slicedToArray = _slicedToArray_mod;
({ TouchableOpacity: metroImportDefault, TouchableWithoutFeedback: metroImportAll, View: c9 } = react_native);
const CARD_PADDING = Constants2.CARD_PADDING;
({ ActivityTypes: closure_21, Permissions: closure_22, PlatformTypes: closure_23, StatusTypes: closure_24 } = Constants);
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = Fragment);
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
let closure_28 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCardText(children) {
  let str;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp7 = _objectWithoutProperties(children, user);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp7;
    tmp4 = tmp7;
    str = children;
  } else {
    str = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== str) {
    let trimmed = str;
    if (typeof str === "string") {
      trimmed = str.trim();
    }
    cResult[3] = str;
    cResult[4] = trimmed;
    tmp8 = trimmed;
  } else {
    tmp8 = cResult[4];
  }
  let tmp10 = null;
  if (null != tmp8) {
    tmp10 = null;
    if ("" !== tmp8) {
      if (cResult[5] === tmp4) {
        let tmp11;
        if (cResult[6] === tmp8) {
          tmp11 = cResult[7];
        }
        tmp10 = tmp11;
      }
      const obj2 = { children: tmp8 };
      const Text = Text_Text.Text;
      const merged = Object.assign(tmp4);
      const tmp16 = closure_25(Text, obj2);
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      cResult[7] = tmp16;
      tmp11 = tmp16;
    }
  }
  return tmp10;
}) : (function ActivityCardText(children) {
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
      tmp3 = closure_25(Text, obj);
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function MaybeLink(href) {
  let obj = href(576);
  const cResult = obj.c(5);
  href = href.href;
  const children = href.children;
  let tmp2 = children;
  if (null != href) {
    let tmp3;
    if (cResult[0] !== href) {
      const fn = function n() {
        const obj = MaskedLinkUtils;
        const obj2 = { href };
        return obj.handleClick(obj2);
      };
      cResult[0] = href;
      cResult[1] = fn;
      tmp3 = fn;
    } else {
      tmp3 = cResult[1];
    }
    if (cResult[2] === children) {
      let tmp4;
      if (cResult[3] === tmp3) {
        tmp4 = cResult[4];
      }
      tmp2 = tmp4;
    }
    let obj2 = { accessibilityRole: "link", onPress: tmp3, children };
    const tmp7 = closure_25(closure_7, obj2);
    cResult[2] = children;
    cResult[3] = tmp3;
    cResult[4] = tmp7;
    tmp4 = tmp7;
  }
  return tmp2;
}) : (function MaybeLink(href) {
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
    tmp = closure_25(closure_7, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCardBody(user) {
  let items;
  let items1;
  let onAction;
  let tmp = onAction;
  let obj = user(onAction[22]);
  const cResult = obj.c(45);
  user = user.user;
  const activity = user.activity;
  onAction = user.onAction;
  const application = user.application;
  const tmp3 = closure_28();
  let closure_3 = tmp3;
  let obj2 = user(onAction[25]);
  const imageForActivity = obj2.useImageForActivity(activity, application, "user_profile_activity_native");
  const largeImage = imageForActivity.largeImage;
  const smallImage = imageForActivity.smallImage;
  let obj3 = user(onAction[26]);
  const theme = obj3.useThemeContext().theme;
  if (cResult[0] === activity) {
    if (cResult[1] === largeImage) {
      if (cResult[2] === onAction) {
        if (cResult[3] === smallImage) {
          if (cResult[4] === tmp3.crunchyrollImageAspectRatio) {
            if (cResult[5] === tmp3.imageAspectRatio) {
              if (cResult[6] === tmp3.imageContainer) {
                if (cResult[7] === tmp3.largeImage) {
                  if (cResult[8] === tmp3.smallImage) {
                    if (cResult[9] === tmp3.smallImageBackground) {
                      if (cResult[10] === theme) {
                        let tmp5;
                        if (cResult[11] === user.id) {
                          tmp5 = cResult[12];
                        }
                        if (cResult[13] === activity) {
                          let tmp6;
                          if (cResult[14] === onAction) {
                            tmp6 = cResult[15];
                          }
                          if (cResult[16] === activity) {
                            if (cResult[17] === onAction) {
                              let tmp7;
                              let tmp8;
                              if (cResult[18] === user.id) {
                                tmp7 = cResult[19];
                              }
                              if (cResult[20] !== activity) {
                                function renderState() {
                                  let items;
                                  let obj5;
                                  let tmp10;
                                  if (!isListeningOnSpotifyDefault(activity)) {
                                    if (activity.type !== constants.WATCHING) {
                                      if (isGameActivityDefault(activity)) {
                                        if (!isEmbeddedActivityDefault(activity)) {
                                          if (null != activity.party) {
                                            return null;
                                          }
                                        }
                                      }
                                      if (isGameActivityDefault(activity)) {
                                        const party = tmp3.party;
                                        size = undefined;
                                        if (party != null) {
                                          size = party.size;
                                        }
                                        let str = "";
                                        const tmp14 = null != size && tmp3.party.size.length >= 2;
                                        if (tmp14) {
                                          let formatToPlainStringResult;
                                          if (0 === activity.party.size[1]) {
                                            const intl2 = intl7.intl;
                                            const obj2 = { count: activity.party.size[0] };
                                            formatToPlainStringResult = intl2.formatToPlainString(intl7.t.IM4J4e, obj2);
                                          } else {
                                            const intl = intl7.intl;
                                            const obj3 = { count: activity.party.size[0], max: activity.party.size[1] };
                                            formatToPlainStringResult = intl.formatToPlainString(intl7.t["u//9By"], obj3);
                                          }
                                          str = formatToPlainStringResult;
                                        }
                                        const obj4 = { variant: "text-xs/medium", lineClamp: 1, children: items.join(" ") };
                                        items = [activity.state, str];
                                        return closure_25(closure_29, obj4);
                                      } else {
                                        const assets = tmp3.assets;
                                        let large_url;
                                        const tmp7 = closure_30;
                                        if (assets != null) {
                                          large_url = assets.large_url;
                                        }
                                        const assets2 = tmp3.assets;
                                        let large_text;
                                        const obj = { href: large_url, children: closure_25(tmp10, obj5) };
                                        tmp10 = closure_29;
                                        if (assets2 != null) {
                                          large_text = assets2.large_text;
                                        }
                                        obj5 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
                                        return closure_25(tmp7, obj);
                                      }
                                    }
                                  }
                                  return null;
                                }
                                cResult[20] = activity;
                                cResult[21] = renderState;
                                tmp8 = renderState;
                              } else {
                                tmp8 = cResult[21];
                              }
                              if (cResult[22] === tmp5) {
                                let tmp10;
                                let tmp12;
                                let tmp14;
                                let tmp16;
                                if (cResult[23] === user.bot) {
                                  tmp10 = cResult[24];
                                }
                                const content = tmp3.content;
                                if (cResult[25] !== tmp6) {
                                  const tmp6Result = tmp6();
                                  cResult[25] = tmp6;
                                  cResult[26] = tmp6Result;
                                  tmp12 = tmp6Result;
                                } else {
                                  tmp12 = cResult[26];
                                }
                                if (cResult[27] !== tmp7) {
                                  const tmp7Result = tmp7();
                                  cResult[27] = tmp7;
                                  cResult[28] = tmp7Result;
                                  tmp14 = tmp7Result;
                                } else {
                                  tmp14 = cResult[28];
                                }
                                if (cResult[29] !== tmp8) {
                                  const tmp8Result = tmp8();
                                  cResult[29] = tmp8;
                                  cResult[30] = tmp8Result;
                                  tmp16 = tmp8Result;
                                } else {
                                  tmp16 = cResult[30];
                                }
                                if (cResult[31] === activity) {
                                  if (cResult[32] === tmp3.badges) {
                                    let tmp18;
                                    if (cResult[33] === user.bot) {
                                      tmp18 = cResult[34];
                                    }
                                    if (cResult[35] === tmp3.content) {
                                      if (cResult[36] === tmp16) {
                                        if (cResult[37] === tmp18) {
                                          if (cResult[38] === tmp12) {
                                            let tmp22;
                                            if (cResult[39] === tmp14) {
                                              tmp22 = cResult[40];
                                            }
                                            if (cResult[41] === tmp3.body) {
                                              if (cResult[42] === tmp22) {
                                                let tmp26;
                                                if (cResult[43] === tmp10) {
                                                  tmp26 = cResult[44];
                                                }
                                                return tmp26;
                                              }
                                            }
                                            let obj4 = { style: tmp9, children: items };
                                            items = [tmp10, tmp22];
                                            const tmp29 = closure_26(closure_9, obj4);
                                            cResult[41] = tmp3.body;
                                            cResult[42] = tmp22;
                                            cResult[43] = tmp10;
                                            cResult[44] = tmp29;
                                            tmp26 = tmp29;
                                          }
                                        }
                                      }
                                    }
                                    let tmp23 = closure_26;
                                    let tmp24 = closure_9;
                                    let obj5 = { style: content, children: items1 };
                                    items1 = [tmp12, tmp14, tmp16, tmp18];
                                    let tmp25 = closure_26(closure_9, obj5);
                                    cResult[35] = tmp3.content;
                                    cResult[36] = tmp16;
                                    cResult[37] = tmp18;
                                    cResult[38] = tmp12;
                                    cResult[39] = tmp14;
                                    cResult[40] = tmp25;
                                    tmp22 = tmp25;
                                  }
                                }
                                let tmp19 = !user.bot;
                                if (tmp19) {
                                  let obj6 = { style: tmp3.badges, activity };
                                  tmp19 = closure_25(activity(tmp[37]), obj6);
                                }
                                cResult[31] = activity;
                                cResult[32] = tmp3.badges;
                                cResult[33] = user.bot;
                                cResult[34] = tmp19;
                                tmp18 = tmp19;
                              }
                              let tmp11 = !user.bot && tmp5();
                              cResult[22] = tmp5;
                              cResult[23] = user.bot;
                              cResult[24] = tmp11;
                              tmp10 = tmp11;
                            }
                          }
                          function renderDescription() {
                            let obj3;
                            let obj4;
                            if (isListeningOnSpotifyDefault(activity)) {
                              let trimmed;
                              if (activity.state != null) {
                                trimmed = str.trim();
                              }
                              let tmp11 = null;
                              if (null != trimmed) {
                                tmp11 = null;
                                if ("" !== trimmed) {
                                  const obj2 = { variant: "text-xs/medium", lineClamp: 1, children: closure_25(UserActivitySpotify.SpotifyArtists, obj3) };
                                  obj3 = {
                                    artists: trimmed,
                                    activity,
                                    userId: user.id,
                                    onPress() {
                                            return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
                                          }
                                  };
                                  tmp11 = closure_25(closure_29, obj2);
                                }
                              }
                              return tmp11;
                            } else {
                              let state = tmp3.details;
                              const tmp4 = isGameActivityDefault(tmp3) || null == tmp3.state;
                              if (!tmp4) {
                                state = tmp3.state;
                              }
                              const obj = { href: activity.state_url, children: closure_25(closure_29, obj4) };
                              obj4 = { variant: "text-xs/medium", lineClamp: 1, children: state };
                              return closure_25(closure_30, obj);
                            }
                          }
                          cResult[16] = activity;
                          cResult[17] = onAction;
                          cResult[18] = user.id;
                          cResult[19] = renderDescription;
                          tmp7 = renderDescription;
                        }
                        function renderName() {
                          let obj3;
                          let obj4;
                          let tmp4Result;
                          let tmp6;
                          if (isListeningOnSpotifyDefault(activity)) {
                            const obj2 = { variant: "text-md/semibold", children: closure_25(UserActivitySpotify.SpotifyTrack, obj3) };
                            obj3 = {
                              text: activity.details,
                              activity,
                              onPress() {
                                  return onAction({ action: "OPEN_SPOTIFY_TRACK" });
                                }
                            };
                            tmp4Result = tmp4(closure_29, obj2);
                          } else {
                            let name;
                            const obj = { href: activity.details_url, children: closure_25(tmp6, obj4) };
                            const tmp5 = closure_30;
                            tmp6 = closure_29;
                            if (isGameActivityDefault(activity)) {
                              name = tmp3.name;
                            } else {
                              name = tmp3.details;
                              if (name == null) {
                                name = tmp3.name;
                              }
                            }
                            obj4 = { variant: "text-md/semibold", children: name };
                            tmp4Result = tmp4(tmp5, obj);
                          }
                          return tmp4Result;
                        }
                        cResult[13] = activity;
                        cResult[14] = onAction;
                        cResult[15] = renderName;
                        tmp6 = renderName;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function renderImage() {
    let UnknownGameIcon;
    let colors;
    let id;
    let intl;
    let isThemeDarkResult;
    let items;
    let items2;
    let items3;
    let obj10;
    let obj11;
    let obj12;
    let obj14;
    let obj3;
    let obj4;
    let obj5;
    let obj7;
    let obj8;
    let tmp18;
    let tmp25;
    let tmp30;
    let tmp45;
    let tmp48Result;
    if (null != largeImage) {
      if (isListeningOnSpotifyDefault(activity)) {
        const obj2 = {
          accessibilityRole: "button",
          accessibilityLabel: largeImage.alt,
          accessibilityHint: intl.string(intl7.t.sjjOk2),
          onPress() {
                closure_1_2({ action: "OPEN_SPOTIFY_ALBUM" });
                const obj = user(onAction[29]);
                obj.openAlbum(activity, id.id);
              },
          children: closure_25(React4, obj3)
        };
        intl = intl7.intl;
        obj3 = { style: items, children: closure_25(tmp45, obj5) };
        items = [, ];
        ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = closure_3);
        obj5 = { source: obj12.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: closure_3.largeImage };
        tmp45 = FastImageDefault;
        obj12 = AvatarUtils;
        tmp48Result = closure_25(metroImportAll, obj2);
      }
      return tmp48Result;
    }
    if (null != largeImage) {
      const items1 = [closure_3.imageContainer, ];
      let obj = { style: items1, children: items2 };
      items1[1] = isCrunchyrollActivityDefault(activity) ? closure_3.crunchyrollImageAspectRatio : closure_3.imageAspectRatio;
      const assets = tmp11.assets;
      let large_url;
      const tmp12 = closure_25;
      const tmp6 = prioritySpeakerDucking;
      const tmp7 = React4;
      if (assets != null) {
        large_url = assets.large_url;
      }
      const obj6 = { href: large_url, children: closure_25(tmp18, obj7) };
      obj7 = { source: obj4.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: closure_3.largeImage };
      tmp18 = FastImageDefault;
      obj4 = AvatarUtils;
      items2 = [tmp12(closure_30, obj6), ];
      let tmp23Result = null != smallImage;
      if (tmp23Result) {
        const assets2 = tmp11.assets;
        let small_url;
        const obj9 = { style: closure_3.smallImageBackground, children: tmp25(closure_30, obj10) };
        const tmp23 = closure_25;
        const tmp24 = React4;
        tmp25 = closure_25;
        if (assets2 != null) {
          small_url = assets2.small_url;
        }
        obj10 = { href: small_url, children: closure_25(tmp30, obj11) };
        obj11 = { source: obj8.makeSource(smallImage.src), accessibilityLabel: smallImage.alt, style: closure_3.smallImage };
        tmp30 = FastImageDefault;
        obj8 = AvatarUtils;
        tmp23Result = tmp23(tmp24, obj9);
      }
      items2[1] = tmp23Result;
      tmp48Result = tmp6(tmp7, obj);
    } else {
      const obj13 = { style: items3, children: closure_25(UnknownGameIcon, obj14) };
      items3 = [, ];
      ({ imageContainer: arr4[0], imageAspectRatio: arr4[1] } = closure_3);
      obj14 = { size: "custom", style: closure_3.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
      UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
      const obj15 = shared;
      isThemeDarkResult = obj15.isThemeDark(theme);
      colors = nativeDefault.colors;
      tmp48Result = closure_25(React4, obj13);
    }
  }
  cResult[0] = activity;
  cResult[1] = largeImage;
  cResult[2] = onAction;
  cResult[3] = smallImage;
  cResult[4] = tmp3.crunchyrollImageAspectRatio;
  cResult[5] = tmp3.imageAspectRatio;
  cResult[6] = tmp3.imageContainer;
  cResult[7] = tmp3.largeImage;
  cResult[8] = tmp3.smallImage;
  cResult[9] = tmp3.smallImageBackground;
  cResult[10] = theme;
  cResult[11] = user.id;
  cResult[12] = renderImage;
  tmp5 = renderImage;
}) : (function ActivityCardBody(user) {
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
  const tmp = closure_28();
  let obj = user(onAction[25]);
  const imageForActivity = obj.useImageForActivity(activity, application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[26]);
  let tmp9 = !user.bot;
  const obj2 = { style: tmp.body, children: items4 };
  if (tmp9) {
    let tmp49Result;
    if (null != largeImage) {
      const tmp11 = activity;
      if (activity(onAction[27])(activity)) {
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: largeImage.alt,
          accessibilityHint: intl.string(user(onAction[28]).t.sjjOk2),
          onPress() {
                  onAction({ action: "OPEN_SPOTIFY_ALBUM" });
                  const obj = UserActivitySpotify;
                  obj.openAlbum(activity, user.id);
                },
          children: closure_25(closure_9, obj4)
        };
        intl = tmp2(tmp3[28]).intl;
        obj4 = { style: items, children: closure_25(tmp11Result, obj5) };
        items = [, ];
        ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
        obj5 = { source: tmp2Result.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: tmp.largeImage };
        tmp11Result = tmp11(onAction[30]);
        tmp2Result = user(onAction[31]);
        tmp49Result = closure_25(closure_8, obj3);
      }
      tmp9 = tmp49Result;
    }
    if (null != largeImage) {
      const items1 = [tmp.imageContainer, ];
      const obj6 = { style: items1, children: items2 };
      items1[1] = activity(onAction[32])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
      const assets = activity.assets;
      let large_url;
      if (assets != null) {
        large_url = assets.large_url;
      }
      const obj7 = { href: large_url, children: closure_25(tmp13Result, obj8) };
      obj8 = { source: tmp2Result4.makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: tmp.largeImage };
      tmp13Result = activity(onAction[30]);
      tmp2Result4 = user(onAction[31]);
      items2 = [closure_25(closure_30, obj7), ];
      let tmp14Result = null != smallImage;
      if (tmp14Result) {
        const assets2 = activity.assets;
        let small_url;
        const obj9 = { style: tmp.smallImageBackground, children: closure_25(closure_30, obj10) };
        if (assets2 != null) {
          small_url = assets2.small_url;
        }
        obj10 = { href: small_url, children: closure_25(tmp13Result2, obj11) };
        obj11 = { source: tmp2Result5.makeSource(smallImage.src), accessibilityLabel: smallImage.alt, style: tmp.smallImage };
        tmp13Result2 = activity(onAction[30]);
        tmp2Result5 = user(onAction[31]);
        tmp14Result = tmp14(tmp8, obj9);
      }
      items2[1] = tmp14Result;
      tmp49Result = tmp7(tmp8, obj6);
    } else {
      const obj12 = { style: items3, children: closure_25(UnknownGameIcon, obj13) };
      items3 = [, ];
      ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
      obj13 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
      UnknownGameIcon = tmp2(tmp3[33]).UnknownGameIcon;
      const tmp2Result6 = user(onAction[34]);
      isThemeDarkResult = tmp2Result6.isThemeDark(tmp6);
      colors = activity(tmp3[19]).colors;
      tmp49Result = tmp49(tmp8, obj12);
    }
  }
  items4 = [tmp9, ];
  const obj14 = { style: tmp.content, children: items5 };
  if (activity(onAction[27])(activity)) {
    const obj15 = { variant: "text-md/semibold", children: closure_25(user(onAction[29]).SpotifyTrack, obj16) };
    obj16 = {
      text: activity.details,
      activity,
      onPress() {
          return onAction({ action: "OPEN_SPOTIFY_TRACK" });
        }
    };
    tmp25Result = tmp25(closure_29, obj15);
    tmp30 = closure_29;
    tmp31 = tmp25;
  } else {
    let name;
    const obj17 = { href: activity.details_url, children: closure_25(closure_29, obj18) };
    const tmp26 = closure_30;
    if (activity(onAction[35])(activity)) {
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
  }
  items5 = [tmp25Result, , , ];
  if (activity(onAction[27])(activity)) {
    let trimmed;
    if (activity.state != null) {
      trimmed = str.trim();
    }
    let tmp31Result = null;
    if (null != trimmed) {
      tmp31Result = null;
      if ("" !== trimmed) {
        const obj19 = { variant: "text-xs/medium", lineClamp: 1, children: tmp31(user(onAction[29]).SpotifyArtists, obj20) };
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
    const tmp33 = tmp24(tmp3[35])(activity) || null == activity.state;
    if (!tmp33) {
      state = activity.state;
    }
    const obj21 = { href: activity.state_url, children: tmp31(tmp30, obj22) };
    obj22 = { variant: "text-xs/medium", lineClamp: 1, children: state };
    tmp31Result4 = tmp31(closure_30, obj21);
  }
  items5[1] = tmp31Result4;
  let tmp31Result5 = null;
  if (!activity(onAction[27])(activity)) {
    tmp31Result5 = null;
    if (activity.type !== constants.WATCHING) {
      if (activity(onAction[35])(activity)) {
        if (!activity(onAction[36])(activity)) {
          tmp31Result5 = null;
        }
      }
      if (activity(onAction[35])(activity)) {
        const party = activity.party;
        size = undefined;
        if (party != null) {
          size = party.size;
        }
        let str3 = "";
        const tmp46 = null != size && activity.party.size.length >= 2;
        if (tmp46) {
          let formatToPlainStringResult;
          if (0 === activity.party.size[1]) {
            const intl3 = tmp2(tmp3[28]).intl;
            const obj23 = { count: activity.party.size[0] };
            formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[28]).t.IM4J4e, obj23);
          } else {
            const intl2 = tmp2(tmp3[28]).intl;
            const obj24 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[28]).t["u//9By"], obj24);
          }
          str3 = formatToPlainStringResult;
        }
        const obj25 = { variant: "text-xs/medium", lineClamp: 1, children: items6.join(" ") };
        items6 = [activity.state, str3];
        tmp31Result5 = tmp31(tmp30, obj25);
      } else {
        const assets3 = activity.assets;
        let large_url1;
        const tmp42 = closure_30;
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
        tmp31Result5 = tmp31(tmp42, obj26);
      }
    }
  }
  items5[2] = tmp31Result5;
  let tmp31Result6 = !user.bot;
  if (tmp31Result6) {
    const obj28 = { style: tmp.badges, activity };
    tmp31Result6 = tmp31(tmp24(tmp3[37]), obj28);
  }
  items5[3] = tmp31Result6;
  items4[1] = closure_26(closure_9, obj14);
  return closure_26(closure_9, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCard(user) {
  let activity;
  let isConnectedToRequestToStreamChannel;
  let isRequestOnCooldown;
  let obj7;
  let requestToStreamChannel;
  let tmp14;
  let tmp20;
  let tmp23;
  let tmp = user;
  let tmp2 = activity;
  let obj = user(activity[22]);
  const cResult = obj.c(85);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const voiceChannel = user.voiceChannel;
  let closure_4 = closure_28();
  const tmp4 = closure_28();
  currentUser(activity[38])(activity);
  const tmp7 = currentUser(activity[39]);
  const analyticsLocations = tmp7(currentUser(activity[40]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  if (cResult[0] === activity) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === id) {
        let tmp9;
        if (cResult[3] === user) {
          tmp9 = cResult[4];
        }
        const tmp10 = currentUser(tmp2[41])(tmp9);
        const onAction = tmp10;
        const application_id = activity.application_id;
        if (cResult[5] === application_id) {
          let tmp11;
          if (cResult[6] === user.id) {
            tmp11 = cResult[7];
          }
          const tmp12 = currentUser(tmp2[43])(tmp11);
          let closure_6 = tmp12;
          if (cResult[8] !== tmp12) {
            class O {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
            cResult[8] = tmp12;
            cResult[9] = O;
          } else {
            class O {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
          }
          if (cResult[10] === tmp10) {
            let tmp17;
            class O {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
            currentUser(tmp2[44])(tmp14);
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
              const items = [GuildStore, , ];
              items[1] = VoiceStateStore;
              items[2] = ChannelStore;
              class G {
                constructor() {
                  tmp = activity;
                  if (closure_1(closure_2[36])(activity)) {
                    tmp3 = user;
                    session_id = undefined;
                    tmp2 = closure_19;
                    getVoiceStateForSession = closure_19.getVoiceStateForSession;
                    id = user.id;
                    if (tmp != null) {
                      session_id = tmp.session_id;
                    }
                    voiceStateForSession = getVoiceStateForSession(id, session_id);
                    channelId = undefined;
                    if (voiceStateForSession != null) {
                      channelId = voiceStateForSession.channelId;
                    }
                    tmp8 = closure_13;
                    tmp7 = closure_14;
                    getGuild = closure_14.getGuild;
                    channel = closure_13.getChannel(channelId);
                    guildId = undefined;
                    if (channel != null) {
                      guildId = channel.getGuildId();
                    }
                    return getGuild(guildId);
                  } else {
                    return null;
                  }
                }
              }
              tmp17 = items;
            } else {
              class O {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
            }
            if (cResult[14] === activity) {
              let tmp22;
              class O {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
              const tmpResult = tmp(tmp2[45]);
              const stateFromStores = tmpResult.useStateFromStores(tmp17, tmp20);
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class O {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                const items1 = [ApplicationStore];
                cResult[17] = items1;
                tmp22 = items1;
              } else {
                class O {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
              }
              if (cResult[18] === activity.application_id) {
                let tmp26;
                let tmp30;
                let tmp33;
                class O {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                const tmpResult3 = tmp(tmp2[45]);
                const stateFromStores1 = tmpResult3.useStateFromStores(tmp22, tmp23);
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                  const items2 = [VoiceStateStore, , , ];
                  items2[1] = ChannelStore;
                  items2[2] = SelectedChannelStore;
                  class G {
                    constructor() {
                      tmp = activity;
                      if (closure_1(closure_2[36])(activity)) {
                        tmp3 = user;
                        session_id = undefined;
                        tmp2 = closure_19;
                        getVoiceStateForSession = closure_19.getVoiceStateForSession;
                        id = user.id;
                        if (tmp != null) {
                          session_id = tmp.session_id;
                        }
                        voiceStateForSession = getVoiceStateForSession(id, session_id);
                        channelId = undefined;
                        if (voiceStateForSession != null) {
                          channelId = voiceStateForSession.channelId;
                        }
                        tmp8 = closure_13;
                        tmp7 = closure_14;
                        getGuild = closure_14.getGuild;
                        channel = closure_13.getChannel(channelId);
                        guildId = undefined;
                        if (channel != null) {
                          guildId = channel.getGuildId();
                        }
                        return getGuild(guildId);
                      } else {
                        return null;
                      }
                    }
                  }
                  cResult[21] = items2;
                  tmp26 = items2;
                } else {
                  class O {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                }
                if (cResult[22] !== user.id) {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                  cResult[22] = user.id;
                  cResult[23] = W;
                  tmp30 = W;
                } else {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                }
                class G {
                  constructor() {
                    tmp = activity;
                    if (closure_1(closure_2[36])(activity)) {
                      tmp3 = user;
                      session_id = undefined;
                      tmp2 = closure_19;
                      getVoiceStateForSession = closure_19.getVoiceStateForSession;
                      id = user.id;
                      if (tmp != null) {
                        session_id = tmp.session_id;
                      }
                      voiceStateForSession = getVoiceStateForSession(id, session_id);
                      channelId = undefined;
                      if (voiceStateForSession != null) {
                        channelId = voiceStateForSession.channelId;
                      }
                      tmp8 = closure_13;
                      tmp7 = closure_14;
                      getGuild = closure_14.getGuild;
                      channel = closure_13.getChannel(channelId);
                      guildId = undefined;
                      if (channel != null) {
                        guildId = channel.getGuildId();
                      }
                      return getGuild(guildId);
                    } else {
                      return null;
                    }
                  }
                }
                const stateFromStoresObject = obj7.useStateFromStoresObject(tmp26, tmp30);
                ({ requestToStreamChannel, isConnectedToRequestToStreamChannel, isRequestOnCooldown } = stateFromStoresObject);
                if (requestToStreamChannel != null) {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                }
                if (undefined == null) {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                }
                if (cResult[24] !== undefined) {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                  tmp34[0] = undefined;
                  cResult[24] = undefined;
                  cResult[25] = tmp34;
                  tmp33 = tmp34;
                } else {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                }
                const MobileRequestToStreamExperiment = tmp(tmp2[46]).MobileRequestToStreamExperiment;
                const enabled = MobileRequestToStreamExperiment.useConfig(tmp33).enabled;
                const tmpResult4 = tmp(tmp2[47]);
                const requestToStreamData = tmpResult4.useRequestToStreamData(user.id, requestToStreamChannel);
                if (activity.type !== constants.CUSTOM_STATUS) {
                  class W {
                    constructor() {
                      tmp = closure_13;
                      getChannel = closure_13.getChannel;
                      tmp2 = user;
                      voiceStateForUser = closure_19.getVoiceStateForUser(user.id);
                      channelId = undefined;
                      if (voiceStateForUser != null) {
                        channelId = voiceStateForUser.channelId;
                      }
                      channel = getChannel(channelId);
                      obj = { requestToStreamChannel: channel, isConnectedToRequestToStreamChannel: null, isRequestOnCooldown: null };
                      id = undefined;
                      voiceChannelId = closure_17.getVoiceChannelId();
                      if (channel != null) {
                        id = channel.id;
                      }
                      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
                      obj.isRequestOnCooldown = closure_11.isRequestOnCooldown(tmp2.id);
                      return obj;
                    }
                  }
                }
                return null;
              }
              class G {
                constructor() {
                  tmp = activity;
                  if (closure_1(closure_2[36])(activity)) {
                    tmp3 = user;
                    session_id = undefined;
                    tmp2 = closure_19;
                    getVoiceStateForSession = closure_19.getVoiceStateForSession;
                    id = user.id;
                    if (tmp != null) {
                      session_id = tmp.session_id;
                    }
                    voiceStateForSession = getVoiceStateForSession(id, session_id);
                    channelId = undefined;
                    if (voiceStateForSession != null) {
                      channelId = voiceStateForSession.channelId;
                    }
                    tmp8 = closure_13;
                    tmp7 = closure_14;
                    getGuild = closure_14.getGuild;
                    channel = closure_13.getChannel(channelId);
                    guildId = undefined;
                    if (channel != null) {
                      guildId = channel.getGuildId();
                    }
                    return getGuild(guildId);
                  } else {
                    return null;
                  }
                }
              }
              cResult[18] = activity.application_id;
              cResult[19] = activity.name;
              cResult[20] = tmp24;
              tmp23 = tmp24;
            }
            class G {
              constructor() {
                tmp = activity;
                if (closure_1(closure_2[36])(activity)) {
                  tmp3 = user;
                  session_id = undefined;
                  tmp2 = closure_19;
                  getVoiceStateForSession = closure_19.getVoiceStateForSession;
                  id = user.id;
                  if (tmp != null) {
                    session_id = tmp.session_id;
                  }
                  voiceStateForSession = getVoiceStateForSession(id, session_id);
                  channelId = undefined;
                  if (voiceStateForSession != null) {
                    channelId = voiceStateForSession.channelId;
                  }
                  tmp8 = closure_13;
                  tmp7 = closure_14;
                  getGuild = closure_14.getGuild;
                  channel = closure_13.getChannel(channelId);
                  guildId = undefined;
                  if (channel != null) {
                    guildId = channel.getGuildId();
                  }
                  return getGuild(guildId);
                } else {
                  return null;
                }
              }
            }
            cResult[14] = activity;
            cResult[15] = user.id;
            cResult[16] = G;
            tmp20 = G;
          }
          let obj2 = { userId: user.id, onAction: tmp10 };
          cResult[10] = tmp10;
          cResult[11] = user.id;
          cResult[12] = obj2;
          tmp14 = obj2;
        }
        let obj3 = { location: "User Profile Activity Card", applicationId: application_id, source: null, trackEntryPointImpression: true, sourceUserId: user.id };
        cResult[5] = application_id;
        cResult[6] = user.id;
        cResult[7] = obj3;
        tmp11 = obj3;
      }
    }
  }
  let obj4 = { display: "live", voiceChannelId: id, user, activity, analyticsLocations };
  cResult[0] = activity;
  cResult[1] = analyticsLocations;
  cResult[2] = id;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp9 = obj4;
}) : (function ActivityCard(user) {
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
  let tmp38Result;
  let tmp39;
  let whitePNG;
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  let closure_3;
  let requestToStreamData;
  const style = user.style;
  const tmp = closure_28();
  let tmp2 = activity;
  const tmp4 = activity(14330)(activity);
  const tmp5 = activity(7255);
  const analyticsLocations = tmp5(activity(7280).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp6 = activity(14336);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp6Result = tmp6({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp6Result;
  const application_id = activity.application_id;
  const tmp2Result = tmp2(9246);
  let obj = { location: "User Profile Activity Card", applicationId: application_id, source: user(9245).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
  const tmp2ResultResult = tmp2Result(obj);
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = react.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  const obj2 = { userId: user.id, onAction: tmp6Result };
  tmp2(14337)(obj2);
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
  const MobileRequestToStreamExperiment = user(14338).MobileRequestToStreamExperiment;
  let str;
  const useConfig = MobileRequestToStreamExperiment.useConfig;
  if (requestToStreamChannel != null) {
    str = requestToStreamChannel.guild_id;
  }
  if (str == null) {
    str = "";
  }
  let enabled = useConfig({ guildId: str, location: "UserProfileActivityCard" }).enabled;
  const tmp10Result = user(14339);
  requestToStreamData = tmp10Result.useRequestToStreamData(user.id, requestToStreamChannel);
  let tmp38Result8 = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp38Result8 = null;
    if (activity.type !== tmp18.HANG_STATUS) {
      const obj6 = { value: analyticsLocations, children: closure_25(PressableOpacity, obj7) };
      const AnalyticsLocationProvider = tmp10(7255).AnalyticsLocationProvider;
      obj7 = { onPress: callback, disabled: null == tmp2ResultResult, accessibilityRole: "button", accessibilityLabel: intl2.formatToPlainString(user(1125).t["9sZWVp"], obj8), children: tmp39(tmp2Result2, obj9) };
      PressableOpacity = tmp10(6910).PressableOpacity;
      intl2 = tmp10(1125).intl;
      obj9 = { style: items4, title: tmp4.text, titleStyle: tmp.cardTitle, titleIcon: tmp38Result, children: items5 };
      items4 = [tmp.card, style];
      tmp38Result = null != tmp4.platformIcon;
      obj8 = { gameName: activity.name };
      tmp2Result2 = tmp2(7305);
      tmp39 = closure_26;
      if (tmp38Result) {
        const obj10 = { style: tmp.cardTitleIcon, source: makeSource(whitePNG), size: user(1199).IconSizes.SMALL_14, disableColor: true };
        const Icon = tmp10(1199).Icon;
        const platformIcon = tmp4.platformIcon;
        whitePNG = undefined;
        makeSource = user(1414).makeSource;
        user(1414);
        if (platformIcon != null) {
          whitePNG = platformIcon.whitePNG;
        }
        tmp38Result = tmp38(Icon, obj10);
      }
      const obj11 = { user, activity, application: stateFromStores1, onAction: tmp6Result };
      items5 = [closure_25(closure_31, obj11), , , , ];
      let tmp38Result5 = null;
      if (tmp2(14323)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj12 = { start, end };
        tmp38Result5 = tmp38(tmp2(14344), obj12);
      }
      items5[1] = tmp38Result5;
      let tmp38Result6 = null;
      if (null != voiceChannel) {
        tmp38Result6 = null;
        if (null != stateFromStores) {
          const obj13 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp6Result, style: tmp.voiceChannelDivider };
          tmp38Result6 = tmp38(tmp2(14346), obj13);
        }
      }
      items5[2] = tmp38Result6;
      let tmp38Result7 = null;
      if (user.id !== currentUser.id) {
        if (tmp2(10654)(activity)) {
          const obj14 = { activity, onAction: tmp6Result };
          tmp38Result7 = tmp38(tmp10(14354).PlayOnSpotifyButton, obj14);
        } else if (tmp2(7813)(activity)) {
          const obj15 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
          tmp38Result7 = tmp38(tmp10(14354).JoinActivityButton, obj15);
        } else {
          if (tmp2(10647)(activity)) {
            let supported_platforms = activity.supported_platforms;
            const tmp10Result4 = user(14357);
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
                      tmp38Result7 = tmp38(tmp10(14354).JoinGameActivityButton, obj16);
                    }
                  }
                }
              }
            }
          }
          if (tmp2(8749)(activity)) {
            const obj17 = { activity, onAction: tmp6Result };
            tmp38Result7 = tmp38(tmp10(14354).WatchActivityButton, obj17);
          } else {
            if (null != activity.buttons) {
              if (activity.buttons.length > 0) {
                const obj18 = {
                  style: tmp.customButtons,
                  children: buttons.map((item, index) => {
                                  const obj = { index, user, activity, onAction };
                                  return closure_25(UserProfileActivityButtons.CustomActivityButton, obj, index);
                                })
                };
                buttons = activity.buttons;
                tmp38Result7 = tmp38(closure_9, obj18);
              }
            }
            tmp38Result7 = null;
            if (!tmp2(5714)(activity)) {
              if (tmp2(14318)(activity)) {
                const obj19 = { type: constants3.XBOX, onAction: tmp6Result };
                tmp38Result7 = tmp38(tmp10(14354).ConnectPlatformButton, obj19);
              } else {
                tmp38Result7 = null;
                if (tmp2(14319)(activity)) {
                  const obj20 = { type: constants3.PLAYSTATION, onAction: tmp6Result };
                  tmp38Result7 = tmp38(tmp10(14354).ConnectPlatformButton, obj20);
                }
              }
            }
          }
        }
      }
      items5[3] = tmp38Result7;
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
          text: intl.string(tmp2(3025).DKHhec),
          disabled: isRequestOnCooldown,
          onPressDisabled: function onRequestToStreamDisabledPress() {
                  let intl;
                  const obj = { text: intl.string(activity(onAction[51]).mVFTUg) };
                  const open = activity(onAction[50]).open;
                  activity(onAction[50]);
                  intl = user(onAction[28]).intl;
                  open("REQUEST_TO_STREAM_DISABLED", obj);
                }
        };
        const Button = tmp10(5245).Button;
        intl = tmp10(1125).intl;
        enabled = tmp38(Button, obj21);
      }
      items5[4] = enabled;
      tmp38Result8 = tmp38(AnalyticsLocationProvider, obj6);
    }
  }
  return tmp38Result8;
});
let closure_32 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamActivityCard(user) {
  let activity;
  let effectiveVolume;
  let first;
  let handleVolumeChange;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp29;
  let tmp30;
  let tmp7;
  let tmp9;
  const tmp = user;
  let obj = user(activity[22]);
  const cResult = obj.c(73);
  user = user.user;
  const stream = user.stream;
  activity = user.activity;
  closure_28();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stream.channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(stream.channelId);
    };
    cResult[1] = stream.channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(activity[45]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VoiceStateStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  let id;
  const tmp11 = cResult[4];
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (tmp11 !== id) {
    let id1;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[4] = id1;
    cResult[5] = T;
    tmp13 = T;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult7 = tmp(activity[45]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[6] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== stream.guildId) {
    class E {
      constructor() {
        return GuildStore.getGuild(stream.guildId);
      }
    }
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[8] = E;
    tmp18 = E;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(stream.guildId);
      }
    }
  }
  const tmpResult8 = tmp(activity[45]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp16, tmp18);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return GuildStore.getGuild(stream.guildId);
      }
    }
    const items3 = [];
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[9] = items3;
    tmp20 = items3;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(stream.guildId);
      }
    }
  }
  if (cResult[10] !== user.id) {
    class O {
      constructor() {
        return closure_16.findActivity(user.id, (arg0) => {
          const tmp3 = stream(activity[35])(arg0) && !stream(activity[64])(arg0);
          return tmp3;
        });
      }
    }
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[11] = O;
    tmp21 = O;
  } else {
    class O {
      constructor() {
        return closure_16.findActivity(user.id, (arg0) => {
          const tmp3 = stream(activity[35])(arg0) && !stream(activity[64])(arg0);
          return tmp3;
        });
      }
    }
  }
  const tmpResult9 = tmp(activity[45]);
  const stateFromStores3 = tmpResult9.useStateFromStores(tmp20, tmp21);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_16.findActivity(user.id, (arg0) => {
          const tmp3 = stream(activity[35])(arg0) && !stream(activity[64])(arg0);
          return tmp3;
        });
      }
    }
    const items4 = [];
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[12] = items4;
    tmp23 = items4;
  } else {
    class O {
      constructor() {
        return closure_16.findActivity(user.id, (arg0) => {
          const tmp3 = stream(activity[35])(arg0) && !stream(activity[64])(arg0);
          return tmp3;
        });
      }
    }
  }
  if (cResult[13] !== user.id) {
    class D {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
      }
    }
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[14] = D;
    tmp24 = D;
  } else {
    class D {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  const tmpResult10 = tmp(activity[45]);
  const stateFromStores4 = tmpResult10.useStateFromStores(tmp23, tmp24);
  const tmp27 = stream(activity[65]);
  if (stateFromStores4 != null) {
    class D {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  ({ effectiveVolume, handleVolumeChange } = tmp27(undefined, tmp(activity[66]).MediaEngineContextTypes.STREAM));
  tmp27(undefined, tmp(activity[66]).MediaEngineContextTypes.STREAM);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
      }
    }
    const items5 = [];
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[15] = items5;
    tmp29 = items5;
  } else {
    class D {
      constructor() {
        return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  if (cResult[16] !== activity) {
    class M {
      constructor() {
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
      }
    }
    class T {
      constructor() {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      }
    }
    cResult[17] = M;
    tmp30 = M;
  } else {
    class M {
      constructor() {
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
      }
    }
  }
  const tmpResult11 = tmp(activity[45]);
  const stateFromStores5 = tmpResult11.useStateFromStores(tmp29, tmp30);
  const tmpResult12 = tmp(activity[67]);
  const first1 = _slicedToArray(tmpResult12.useCanWatchStream(stateFromStores), 1)[0];
  const tmp26Result = stream(activity[39]);
  const analyticsLocations = tmp26Result(tmp26(tmp2[40]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  if (stateFromStores != null) {
    class M {
      constructor() {
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
      }
    }
  }
  if (cResult[18] === analyticsLocations) {
    class M {
      constructor() {
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
      }
    }
  }
  let obj2 = { display: "live", voiceChannelId: tmp34, user, stream, analyticsLocations };
  cResult[18] = analyticsLocations;
  cResult[19] = stream;
  cResult[20] = undefined;
  cResult[21] = user;
  cResult[22] = obj2;
}) : (function StreamActivityCard(user) {
  let closure_4;
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
  _slicedToArray = undefined;
  const style = user.style;
  const tmp = closure_28();
  let tmp3 = activity;
  let obj = user(activity[45]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj2 = user(activity[45]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let id;
    const isInChannel = VoiceStateStore.isInChannel;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return isInChannel(id);
  });
  let obj3 = user(activity[45]);
  const items2 = [GuildStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  const items3 = [PresenceStore];
  const obj4 = user(activity[45]);
  const stateFromStores3 = obj4.useStateFromStores(items3, () => PresenceStore.findActivity(user.id, (arg0) => {
    const tmp3 = stream(activity[35])(arg0) && !stream(activity[64])(arg0);
    return tmp3;
  }));
  const items4 = [ApplicationStreamingStore];
  const obj5 = user(activity[45]);
  const stateFromStores4 = obj5.useStateFromStores(items4, () => ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  const tmp10 = stream(activity[65]);
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = tmp10(ownerId, user(tmp3[66]).MediaEngineContextTypes.STREAM));
  tmp10(ownerId, user(tmp3[66]).MediaEngineContextTypes.STREAM);
  const items5 = [ApplicationStore];
  const tmp2Result = user(tmp3[45]);
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
  const tmp2Result2 = user(tmp3[67]);
  const first = _slicedToArray(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0];
  const tmp9Result = stream(tmp3[39]);
  const analyticsLocations = tmp9Result(tmp9(tmp3[40]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp9Result5 = stream(tmp3[41]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = tmp9Result5({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
  _slicedToArray = tmp9Result1Result;
  const obj6 = { userId: user.id, onAction: tmp9Result1Result };
  stream(tmp3[44])(obj6);
  const tmp9Result6 = stream(tmp3[71]);
  const nonContextualStreamOutputPresent = tmp9Result6.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  const obj7 = { value: analyticsLocations, children: tmp21(tmp9Result7, obj8) };
  const AnalyticsLocationProvider = tmp2(tmp3[39]).AnalyticsLocationProvider;
  obj8 = { style: items6, title: formatToPlainStringResult, titleStyle: tmp.cardTitle, titleIcon: closure_25(user(tmp3[61]).LiveTag, {}), children: items7 };
  items6 = [tmp.card, style];
  tmp21 = closure_26;
  tmp9Result7 = stream(tmp3[60]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[28]).intl;
    const obj9 = { name: stateFromStores3.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[28]).t["4CQq9Q"], obj9);
  } else {
    const intl = tmp2(tmp3[28]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[28]).t["Jpkr/q"]);
  }
  const obj10 = { style: tmp.streamPreview, children: closure_25(user(tmp3[72]).VoicePanelStreamPreview, obj11) };
  obj11 = {
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
  items7 = [closure_25(closure_9, obj10), , , , ];
  let tmp20Result = null != stateFromStores4 && !nonContextualStreamOutputPresent;
  if (tmp20Result) {
    const obj12 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: intl3.string(user(tmp3[28]).t.pEAl4b) };
    const tmp9Result8 = stream(tmp3[73]);
    intl3 = tmp2(tmp3[28]).intl;
    tmp20Result = tmp20(tmp9Result8, obj12, "set-stream-volume");
  }
  items7[1] = tmp20Result;
  let tmp20Result4 = null != activity && tmp9(tmp3[36])(activity);
  if (tmp20Result4) {
    const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp20Result4 = tmp20(closure_31, obj13);
  }
  items7[2] = tmp20Result4;
  let tmp20Result5 = null != stateFromStores2 && null != stateFromStores;
  if (tmp20Result5) {
    const obj14 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp9Result1Result, style: tmp.voiceChannelDivider };
    tmp20Result5 = tmp20(tmp9(tmp3[52]), obj14);
  }
  items7[3] = tmp20Result5;
  let tmp20Result6 = null != stateFromStores;
  if (tmp20Result6) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp20Result6 = tmp20(tmp2(tmp3[53]).VoiceChannelButtons, obj15);
  }
  items7[4] = tmp20Result6;
  return closure_25(AnalyticsLocationProvider, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceCallActivityCard(arg0) {
  let analyticsLocations;
  let channel;
  let closure_1;
  let closure_2;
  let first;
  let isInChannel;
  let newestAnalyticsLocation;
  let style;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(56);
  ({ user, channel } = arg0);
  ({ isInChannel, style } = arg0);
  importDefault = closure_28();
  const tmp4 = closure_28();
  usePersonalizedVoiceChannelUsersDefault(channel);
  dependencyMap = useChannelNameDefault(channel);
  const tmp7 = useChannelNameDefault(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function l() {
      return GuildStore.getGuild(channel.guild_id);
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp13 = PermissionStore;
    let items1 = [PermissionStore];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== channel) {
    class I {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[4] = channel;
    cResult[5] = I;
    tmp14 = I;
  } else {
    class I {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp12, tmp14);
  const tmp5Result = useAnalyticsLocationsDefault;
  ({ analyticsLocations, newestAnalyticsLocation } = tmp5Result(AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD));
  tmp5Result(AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[6] = tmp19;
    tmp18 = tmp19;
  } else {
    class I {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  if (cResult[7] === analyticsLocations) {
    class I {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  let obj2 = { display: "voice", activity: tmp18, voiceChannelId: channel.id, user, analyticsLocations };
  cResult[7] = analyticsLocations;
  cResult[8] = channel.id;
  cResult[9] = user;
  cResult[10] = obj2;
}) : (function VoiceCallActivityCard(arg0) {
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
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  let tmp = closure_28();
  const tmp4 = stateFromStores(14347)(channel);
  const tmp5 = stateFromStores(5605)(channel);
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
  const tmp9 = stateFromStores(7255);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = tmp9(stateFromStores(7280).USER_PROFILE_VOICE_ACTIVITY_CARD));
  let obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  tmp9(stateFromStores(7280).USER_PROFILE_VOICE_ACTIVITY_CARD);
  const tmp11 = stateFromStores(14336)(obj3);
  let closure_3 = tmp11;
  const obj4 = { userId: user.id, onAction: tmp11 };
  stateFromStores(14337)(obj4);
  const obj5 = { style: items2, title: null, titleStyle: null, children: null };
  items2 = [tmp.card, style];
  const tmp14 = stateFromStores(7305);
  if (!channel.isDM()) {
    let stringResult;
    let tmp13Result;
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl = tmp6(1125).intl;
      const string = intl.string;
      const t = tmp6(1125).t;
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
    const tmp2Result = stateFromStores(14361);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items3 = [closure_25(tmp2Result, obj7), ];
    const obj8 = { style: tmp.voiceCallContent, children: items6 };
    if (stateFromStores1) {
      const obj9 = {
        accessibilityRole: "button",
        accessibilityLabel: stateFromStores(9018)(obj10),
        accessibilityHint: intl3.string(channel(1125).t["9C444m"]),
        onPress() {
              closure_3({ action: "OPEN_VOICE_CHANNEL" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ModalActionCreatorsDefault;
              obj2.popAll();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, c2);
            },
        children: closure_26(Text2, obj11)
      };
      const PressableOpacity = tmp6(6910).PressableOpacity;
      obj10 = { channel };
      intl3 = tmp6(1125).intl;
      obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items4 };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: closure_25(stateFromStores(10657), obj13) };
      Text2 = tmp6(5235).Text;
      obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items4 = [closure_25(closure_9, obj12), tmp5];
      tmp13Result = tmp18(PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items5 };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: closure_25(stateFromStores(10657), obj16) };
      const Text = tmp6(5235).Text;
      obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      items5 = [closure_25(closure_9, obj15), tmp5];
      tmp13Result = tmp13(Text, obj14);
    }
    items6 = [tmp13Result, ];
    let tmp18Result2 = null;
    if (null != stateFromStores) {
      const obj17 = {
        accessibilityRole: "button",
        accessibilityHint: intl4.string(channel(1125).t.KLOhbO),
        accessibilityLabel: intl5.formatToPlainString(channel(1125).t["hq/Qze"], obj18),
        onPress() {
              closure_3({ action: "OPEN_VOICE_GUILD" });
              const obj = transitionToGuild;
              obj.transitionToGuild(stateFromStores.id);
              closeVoicePanelsDefault();
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideAllActionSheets();
            },
        children: closure_25(Text3, obj19)
      };
      const PressableOpacity2 = tmp6(6910).PressableOpacity;
      intl4 = tmp6(1125).intl;
      intl5 = tmp6(1125).intl;
      obj18 = { guildName: stateFromStores.name };
      obj19 = { variant: "text-xs/medium", children: intl6.format(channel(1125).t["hq/Qze"], obj20) };
      Text3 = tmp6(5235).Text;
      intl6 = tmp6(1125).intl;
      obj20 = { guildName: stateFromStores.name };
      tmp18Result2 = tmp18(PressableOpacity2, obj17);
    }
    items6[1] = tmp18Result2;
    items3[1] = closure_26(closure_9, obj8);
    const items7 = [closure_26(closure_9, obj6), ];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_25(channel(14354).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_26(tmp14, obj5);
  }
  const intl2 = tmp6(1125).intl;
  stringResult = intl2.string(tmp6(1125).t["9FaEzi"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivity(user) {
  let guildId;
  let live;
  let stream;
  let style;
  let tmp17;
  let tmp = user;
  let tmp2 = style;
  let obj = user(style[22]);
  const cResult = obj.c(70);
  user = user.user;
  const currentUser = user.currentUser;
  ({ guildId, style } = user);
  let closure_3 = closure_28();
  let tmp5 = currentUser;
  const tmp4 = closure_28();
  ({ live, stream } = currentUser(style[83])(user.id));
  const tmp6 = currentUser(style[83])(user.id);
  if (cResult[0] === guildId) {
    let tmp7;
    let tmp10;
    let tmp12;
    let tmp15;
    if (cResult[1] === user.id) {
      tmp7 = cResult[2];
    }
    let tmp8 = tmp5(tmp2[84])(tmp7);
    const voiceChannel = tmp8.voiceChannel;
    const voiceActivity = tmp8.voiceActivity;
    let tmp9 = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [VoiceStateStore];
      cResult[3] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== voiceChannel) {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_19;
            isInChannelResult = closure_19.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      cResult[4] = voiceChannel;
      cResult[5] = C;
      tmp12 = C;
    } else {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_19;
            isInChannelResult = closure_19.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
    }
    const tmpResult = tmp(tmp2[45]);
    const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
    let closure_8 = tmp14;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_19;
            isInChannelResult = closure_19.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      let items1 = [SelfPresenceStore, ];
      items1[1] = PresenceStore;
      cResult[6] = items1;
      tmp15 = items1;
    } else {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_19;
            isInChannelResult = closure_19.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
    }
    if (cResult[7] === user.id === currentUser.id) {
      let tmp19;
      let tmp20;
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_19;
            isInChannelResult = closure_19.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      const tmpResult3 = tmp(tmp2[45]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp15, tmp17);
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            isInChannelResult = null != voiceChannel;
            if (isInChannelResult) {
              tmp3 = closure_19;
              isInChannelResult = closure_19.isInChannel(tmp.id);
            }
            return isInChannelResult;
          }
        }
        let items2 = [UserProfileStore];
        cResult[10] = items2;
        tmp19 = items2;
      } else {
        class C {
          constructor() {
            isInChannelResult = null != voiceChannel;
            if (isInChannelResult) {
              tmp3 = closure_19;
              isInChannelResult = closure_19.isInChannel(tmp.id);
            }
            return isInChannelResult;
          }
        }
      }
      if (cResult[11] !== user.id) {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        cResult[11] = user.id;
        cResult[12] = D;
        tmp20 = D;
      } else {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
      }
      const tmpResult4 = tmp(tmp2[45]);
      const stateFromStores2 = tmpResult4.useStateFromStores(tmp19, tmp20);
      if (stateFromStores1) {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        if (null != voiceChannel) {
          class D {
            constructor() {
              userProfile = closure_20.getUserProfile(user.id);
              _private = undefined;
              if (userProfile != null) {
                _private = userProfile.private;
              }
              return true === _private;
            }
          }
        }
      } else {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
      }
      if (stateFromStores1) {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        return null;
      } else {
        class D {
          constructor() {
            userProfile = closure_20.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        if (null != voiceActivity) {
          class D {
            constructor() {
              userProfile = closure_20.getUserProfile(user.id);
              _private = undefined;
              if (userProfile != null) {
                _private = userProfile.private;
              }
              return true === _private;
            }
          }
        }
        cResult[27] = live;
        cResult[28] = voiceActivity;
        cResult[29] = live;
      }
    }
    class E {
      constructor() {
        tmp = closure_8;
        if (tmp) {
          tmp5 = closure_18;
          status = closure_18.getStatus();
        } else {
          tmp2 = closure_16;
          tmp3 = user;
          status = closure_16.getStatus(user.id);
        }
        tmp6 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
        return tmp6;
      }
    }
    cResult[7] = user.id === currentUser.id;
    cResult[8] = user.id;
    cResult[9] = E;
    tmp17 = E;
  }
  let obj2 = { userId: user.id, guildId };
  cResult[0] = guildId;
  cResult[1] = user.id;
  cResult[2] = obj2;
  tmp7 = obj2;
}) : (function UserProfileActivity(user) {
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
  let tmp = closure_28();
  let closure_3 = tmp;
  let tmp2 = currentUser;
  ({ live, stream } = currentUser(style[83])(user.id));
  let obj = { userId: user.id, guildId };
  const tmp4 = currentUser(style[83])(user.id);
  const tmp5 = currentUser(style[84])(obj);
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj2 = user(style[45]);
  const items = [VoiceStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  });
  let closure_8 = user.id === currentUser.id;
  let obj3 = user(style[45]);
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
  const obj4 = user(style[45]);
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
        const obj5 = { style: items3, children: closure_25(tmp2(style[85]), obj6) };
        items3 = [tmp.card, style];
        obj6 = { user, currentUser, channel: voiceChannel, style: items4 };
        items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        const tmp2Result = tmp2(style[60]);
        return closure_25(tmp2Result, obj5);
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
    const tmp11 = closure_27;
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
            tmp8 = closure_25(closure_33, obj2);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = closure_25(closure_32, obj3);
        } else {
          const obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = closure_25(closure_34, obj);
        }
      }
      if (stateFromStores) {
        const obj7 = { style: items5, children: items6 };
        items5 = [tmp.card, style];
        items6 = [, ];
        const tmp2Result3 = tmp2(style[60]);
        items6[0] = renderVoiceActivityCard(voiceChannel);
        const obj8 = { user, currentUser, channel: voiceChannel, style: items7 };
        items7 = [, ];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        items6[1] = closure_25(tmp2(style[85]), obj8);
        tmp10Result = tmp10(tmp2Result3, obj7);
      } else {
        const obj9 = { style: items8, children: renderVoiceActivityCard(voiceChannel) };
        items8 = [tmp.card, style];
        const tmp2Result4 = tmp2(style[60]);
        tmp10Result = closure_25(tmp2Result4, obj9);
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
      tmp18 = closure_25(closure_33, obj10);
    }
    const obj11 = { children: items9 };
    items9[1] = tmp18;
    items9[2] = found.map((activity, index) => {
      let application_id = activity.application_id;
      const obj = { user, currentUser, activity, style };
      const tmp = closure_25;
      const tmp2 = closure_32;
      if (application_id == null) {
        application_id = index;
      }
      return tmp(tmp2, obj, application_id);
    });
    return closure_26(tmp11, obj11);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default tmp7;
export const ActivityCard = tmp6;

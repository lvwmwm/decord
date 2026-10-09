// Module ID: 16464
// Function ID: 16465
// Name: VoiceUserItem
// Dependencies: [19, 17, 1085, 21, 1200, 10480, 5091, 587, 11714, 558, 576, 8835, 8836, 8838, 1265, 1415, 16465, 8786, 5021, 8782, 8784, 10735, 12975, 8147, 12973, 2]
// Exports: getVoiceUserHeight

// Module 16464 (VoiceUserItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 5021 */;
import AssetRegistryDefault from "AssetRegistry" /* 8147 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 8782 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 8784 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 8786 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10480 */;
import VideoIcon from "VideoIcon" /* 10735 */;
import GameActivityIconDefault from "GameActivityIcon" /* 12973 */;
import getConsoleIcon from "getConsoleIcon" /* 12975 */;
import VoiceUserNameItemDefault from "VoiceUserNameItem" /* 16465 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ChannelListLayout from "ChannelListLayout" /* 11714 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const getConsoleIconDefault = getConsoleIcon;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = native.AvatarSizes.XSMALL_20;
let createStyles = createStyles_mod;
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: size, voiceStateIcon: obj2, legacyVoiceStateIcon: obj3, gameIcon: { marginLeft: 6 } };
size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: 6 };
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj3 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_11 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceUserItem(member) {
  let items;
  let user;
  _require = member;
  let tmp = user;
  let obj = require("react");
  const cResult = obj.c(80);
  member = member.member;
  user = member.user;
  const guildId = member.guildId;
  const channelId = member.channelId;
  const stream = member.stream;
  const serverMute = member.serverMute;
  const serverDeaf = member.serverDeaf;
  const mute = member.mute;
  const deaf = member.deaf;
  const localMute = member.localMute;
  const video = member.video;
  let disabled = member.disabled;
  const platform = member.platform;
  const isInEmbeddedActivity = member.isInEmbeddedActivity;
  const voicePlatform = member.voicePlatform;
  const collapsed = member.collapsed;
  let tmp3 = video();
  let closure_16 = tmp3;
  let tmp4 = member;
  let tmp5 = member(user[11])("channel_list");
  const first = member(user[12])(user.id, guildId, tmp5)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp4(tmp[13])(application_id).gameRecord;
  if (cResult[0] === channelId) {
    if (cResult[1] === application_id) {
      let tmp8;
      if (cResult[2] === guildId) {
        tmp8 = cResult[3];
      }
      const onShown = tmp8;
      if (cResult[4] === guildId) {
        if (cResult[5] === member) {
          let tmp9;
          if (cResult[6] === user) {
            tmp9 = cResult[7];
          }
          const source = tmp9;
          if (cResult[8] === tmp9) {
            let tmp10;
            let tmp11;
            let tmp12;
            if (cResult[9] === tmp3.voiceStateCollapsed) {
              tmp10 = cResult[10];
            }
            if (cResult[11] !== tmp9) {
              function renderAvatar() {
                const obj = { source, size: XSMALL_20 };
                return metroRequire(native.Avatar, obj);
              }
              cResult[11] = tmp9;
              cResult[12] = renderAvatar;
              tmp11 = renderAvatar;
            } else {
              tmp11 = cResult[12];
            }
            if (cResult[13] !== member) {
              function renderName() {
                const obj = { variant, color };
                const tmp = VoiceUserNameItemDefault;
                const merged = Object.assign(member);
                return metroRequire(tmp, obj);
              }
              cResult[13] = member;
              cResult[14] = renderName;
              tmp12 = renderName;
            } else {
              tmp12 = cResult[14];
            }
            if (cResult[15] === disabled) {
              if (cResult[16] === localMute) {
                if (cResult[17] === mute) {
                  if (cResult[18] === serverMute) {
                    let tmp13;
                    if (cResult[19] === tmp3.voiceStateIcon) {
                      tmp13 = cResult[20];
                    }
                    if (cResult[21] === deaf) {
                      if (cResult[22] === disabled) {
                        if (cResult[23] === serverDeaf) {
                          let tmp14;
                          if (cResult[24] === tmp3.voiceStateIcon) {
                            tmp14 = cResult[25];
                          }
                          if (cResult[26] === stream) {
                            let tmp15;
                            if (cResult[27] === tmp3.legacyVoiceStateIcon) {
                              tmp15 = cResult[28];
                            }
                            if (cResult[29] === disabled) {
                              if (cResult[30] === tmp3.voiceStateIcon) {
                                let tmp16;
                                if (cResult[31] === video) {
                                  tmp16 = cResult[32];
                                }
                                if (cResult[33] === platform) {
                                  if (cResult[34] === tmp3.legacyVoiceStateIcon) {
                                    let tmp17;
                                    if (cResult[35] === voicePlatform) {
                                      tmp17 = cResult[36];
                                    }
                                    if (cResult[37] === isInEmbeddedActivity) {
                                      let tmp18;
                                      if (cResult[38] === tmp3.legacyVoiceStateIcon) {
                                        tmp18 = cResult[39];
                                      }
                                      if (cResult[40] === disabled) {
                                        if (cResult[41] === gameRecord) {
                                          if (cResult[42] === isInEmbeddedActivity) {
                                            if (cResult[43] === tmp3.gameIcon) {
                                              let tmp19;
                                              if (cResult[44] === tmp8) {
                                                tmp19 = cResult[45];
                                              }
                                              if (collapsed) {
                                                let tmp43;
                                                if (cResult[46] !== tmp10) {
                                                  const tmp10Result = tmp10();
                                                  cResult[46] = tmp10;
                                                  cResult[47] = tmp10Result;
                                                  tmp43 = tmp10Result;
                                                } else {
                                                  tmp43 = cResult[47];
                                                }
                                                return tmp43;
                                              } else {
                                                if (disabled) {
                                                  disabled = tmp3.disabled;
                                                }
                                                if (cResult[48] === tmp3.voiceState) {
                                                  let tmp20;
                                                  let tmp21;
                                                  let tmp23;
                                                  let tmp25;
                                                  let tmp27;
                                                  let tmp29;
                                                  let tmp31;
                                                  let tmp33;
                                                  let tmp35;
                                                  let tmp37;
                                                  if (cResult[49] === disabled) {
                                                    tmp20 = cResult[50];
                                                  }
                                                  if (cResult[51] !== tmp11) {
                                                    const tmp11Result = tmp11();
                                                    cResult[51] = tmp11;
                                                    cResult[52] = tmp11Result;
                                                    tmp21 = tmp11Result;
                                                  } else {
                                                    tmp21 = cResult[52];
                                                  }
                                                  if (cResult[53] !== tmp12) {
                                                    const tmp12Result = tmp12();
                                                    cResult[53] = tmp12;
                                                    cResult[54] = tmp12Result;
                                                    tmp23 = tmp12Result;
                                                  } else {
                                                    tmp23 = cResult[54];
                                                  }
                                                  if (cResult[55] !== tmp13) {
                                                    const tmp13Result = tmp13();
                                                    cResult[55] = tmp13;
                                                    cResult[56] = tmp13Result;
                                                    tmp25 = tmp13Result;
                                                  } else {
                                                    tmp25 = cResult[56];
                                                  }
                                                  if (cResult[57] !== tmp14) {
                                                    const tmp14Result = tmp14();
                                                    cResult[57] = tmp14;
                                                    cResult[58] = tmp14Result;
                                                    tmp27 = tmp14Result;
                                                  } else {
                                                    tmp27 = cResult[58];
                                                  }
                                                  if (cResult[59] !== tmp16) {
                                                    const tmp16Result = tmp16();
                                                    cResult[59] = tmp16;
                                                    cResult[60] = tmp16Result;
                                                    tmp29 = tmp16Result;
                                                  } else {
                                                    tmp29 = cResult[60];
                                                  }
                                                  if (cResult[61] !== tmp18) {
                                                    const tmp18Result = tmp18();
                                                    cResult[61] = tmp18;
                                                    cResult[62] = tmp18Result;
                                                    tmp31 = tmp18Result;
                                                  } else {
                                                    tmp31 = cResult[62];
                                                  }
                                                  if (cResult[63] !== tmp17) {
                                                    const tmp17Result = tmp17();
                                                    cResult[63] = tmp17;
                                                    cResult[64] = tmp17Result;
                                                    tmp33 = tmp17Result;
                                                  } else {
                                                    tmp33 = cResult[64];
                                                  }
                                                  if (cResult[65] !== tmp15) {
                                                    const tmp15Result = tmp15();
                                                    cResult[65] = tmp15;
                                                    cResult[66] = tmp15Result;
                                                    tmp35 = tmp15Result;
                                                  } else {
                                                    tmp35 = cResult[66];
                                                  }
                                                  if (cResult[67] !== tmp19) {
                                                    const tmp19Result = tmp19();
                                                    cResult[67] = tmp19;
                                                    cResult[68] = tmp19Result;
                                                    tmp37 = tmp19Result;
                                                  } else {
                                                    tmp37 = cResult[68];
                                                  }
                                                  if (cResult[69] === tmp20) {
                                                    if (cResult[70] === tmp21) {
                                                      if (cResult[71] === tmp23) {
                                                        if (cResult[72] === tmp25) {
                                                          if (cResult[73] === tmp27) {
                                                            if (cResult[74] === tmp29) {
                                                              if (cResult[75] === tmp31) {
                                                                if (cResult[76] === tmp33) {
                                                                  if (cResult[77] === tmp35) {
                                                                    let tmp39;
                                                                    if (cResult[78] === tmp37) {
                                                                      tmp39 = cResult[79];
                                                                    }
                                                                    return tmp39;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let obj2 = { style: tmp20, children: items };
                                                  items = [tmp21, tmp23, tmp25, tmp27, tmp29, tmp31, tmp33, tmp35, tmp37];
                                                  const tmp42 = serverDeaf(channelId, obj2);
                                                  cResult[69] = tmp20;
                                                  cResult[70] = tmp21;
                                                  cResult[71] = tmp23;
                                                  cResult[72] = tmp25;
                                                  cResult[73] = tmp27;
                                                  cResult[74] = tmp29;
                                                  cResult[75] = tmp31;
                                                  cResult[76] = tmp33;
                                                  cResult[77] = tmp35;
                                                  cResult[78] = tmp37;
                                                  cResult[79] = tmp42;
                                                  tmp39 = tmp42;
                                                }
                                                const items1 = [tmp3.voiceState, disabled];
                                                cResult[48] = tmp3.voiceState;
                                                cResult[49] = disabled;
                                                cResult[50] = items1;
                                                tmp20 = items1;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderGameIcon() {
                                        let tmp = null;
                                        if (!disabled) {
                                          tmp = null;
                                          if (!isInEmbeddedActivity) {
                                            tmp = null;
                                            if (null != gameRecord) {
                                              const obj = { game: tmp3, size: 16, fallback: "none", style: closure_16.gameIcon, onShown };
                                              tmp = metroRequire(GameActivityIconDefault, obj);
                                            }
                                          }
                                        }
                                        return tmp;
                                      }
                                      cResult[40] = disabled;
                                      cResult[41] = gameRecord;
                                      cResult[42] = isInEmbeddedActivity;
                                      cResult[43] = tmp3.gameIcon;
                                      cResult[44] = tmp8;
                                      cResult[45] = renderGameIcon;
                                      tmp19 = renderGameIcon;
                                    }
                                    function renderEmbeddedActivityIcon() {
                                      let tmp = null;
                                      if (isInEmbeddedActivity) {
                                        const obj = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_16.legacyVoiceStateIcon };
                                        const Icon = native.Icon;
                                        tmp = metroRequire(Icon, obj);
                                      }
                                      return tmp;
                                    }
                                    cResult[37] = isInEmbeddedActivity;
                                    cResult[38] = tmp3.legacyVoiceStateIcon;
                                    cResult[39] = renderEmbeddedActivityIcon;
                                    tmp18 = renderEmbeddedActivityIcon;
                                  }
                                }
                                function renderPlatform() {
                                  let str = platform;
                                  const tmp2 = getConsoleIconDefault;
                                  if (platform == null) {
                                    str = "";
                                  }
                                  let consoleIconForVoicePlatform = tmp2(str);
                                  if (consoleIconForVoicePlatform == null) {
                                    const obj = getConsoleIcon;
                                    consoleIconForVoicePlatform = obj.getConsoleIconForVoicePlatform(voicePlatform);
                                  }
                                  let tmp6 = null;
                                  if (null != consoleIconForVoicePlatform) {
                                    const obj2 = { source: consoleIconForVoicePlatform, size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_16.legacyVoiceStateIcon };
                                    const Icon = native.Icon;
                                    tmp6 = metroRequire(Icon, obj2);
                                  }
                                  return tmp6;
                                }
                                cResult[33] = platform;
                                cResult[34] = tmp3.legacyVoiceStateIcon;
                                cResult[35] = voicePlatform;
                                cResult[36] = renderPlatform;
                                tmp17 = renderPlatform;
                              }
                            }
                            function renderVideoIcon() {
                              let tmp = null;
                              if (video) {
                                tmp = null;
                                if (!disabled) {
                                  const obj = { size: "custom", color, style: closure_16.voiceStateIcon };
                                  tmp = metroRequire(VideoIcon.VideoIcon, obj);
                                }
                              }
                              return tmp;
                            }
                            cResult[29] = disabled;
                            cResult[30] = tmp3.voiceStateIcon;
                            cResult[31] = video;
                            cResult[32] = renderVideoIcon;
                            tmp16 = renderVideoIcon;
                          }
                          function renderStreamIndicator() {
                            let tmp = null;
                            if (stream) {
                              const obj = { style: closure_16.legacyVoiceStateIcon };
                              tmp = metroRequire(native.LiveTag, obj);
                            }
                            return tmp;
                          }
                          cResult[26] = stream;
                          cResult[27] = tmp3.legacyVoiceStateIcon;
                          cResult[28] = renderStreamIndicator;
                          tmp15 = renderStreamIndicator;
                        }
                      }
                    }
                    function renderDeafIcon() {
                      let tmp = null;
                      if (!disabled) {
                        let tmp4;
                        const tmp2 = serverDeaf;
                        if (tmp2) {
                          const obj2 = { style: closure_16.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
                          tmp4 = metroRequire(HeadphonesDenyIcon.HeadphonesDenyIcon, obj2);
                        } else {
                          tmp4 = null;
                          if (deaf) {
                            const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                            tmp4 = metroRequire(HeadphonesSlashIcon.HeadphonesSlashIcon, obj);
                          }
                        }
                        tmp = tmp4;
                      }
                      return tmp;
                    }
                    cResult[21] = deaf;
                    cResult[22] = disabled;
                    cResult[23] = serverDeaf;
                    cResult[24] = tmp3.voiceStateIcon;
                    cResult[25] = renderDeafIcon;
                    tmp14 = renderDeafIcon;
                  }
                }
              }
            }
            function renderMuteIcon() {
              let tmp = null;
              if (!disabled) {
                let tmp5;
                const tmp2 = serverMute;
                if (tmp2) {
                  const obj2 = { style: closure_16.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
                  tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
                } else {
                  const tmp3 = localMute;
                  if (tmp3) {
                    const obj3 = { style: closure_16.voiceStateIcon, size: "custom", color };
                    tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
                  } else {
                    tmp5 = null;
                    if (mute) {
                      const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                      tmp5 = metroRequire(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
                    }
                  }
                }
                tmp = tmp5;
              }
              return tmp;
            }
            cResult[15] = disabled;
            cResult[16] = localMute;
            cResult[17] = mute;
            cResult[18] = serverMute;
            cResult[19] = tmp3.voiceStateIcon;
            cResult[20] = renderMuteIcon;
            tmp13 = renderMuteIcon;
          }
          function renderCollapsed() {
            let obj2;
            const obj = { style: closure_16.voiceStateCollapsed, children: metroRequire(native.Avatar, obj2) };
            obj2 = { source, size: XSMALL_20 };
            return metroRequire(View, obj);
          }
          cResult[8] = tmp9;
          cResult[9] = tmp3.voiceStateCollapsed;
          cResult[10] = renderCollapsed;
          tmp10 = renderCollapsed;
        }
      }
      function getSource() {
        if (null != member) {
          let guildMemberAvatarSource;
          if (null != member.avatar) {
            const obj = AvatarUtilsDefault;
            guildMemberAvatarSource = obj.getGuildMemberAvatarSource(tmp, user);
          }
          return guildMemberAvatarSource;
        }
        guildMemberAvatarSource = user.getAvatarSource(guildId);
      }
      cResult[4] = guildId;
      cResult[5] = member;
      cResult[6] = user;
      cResult[7] = getSource;
      tmp9 = getSource;
    }
  }
  const fn = function c() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { guild_id: guildId, channel_id: channelId, application_id };
    obj.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, obj2);
  };
  cResult[0] = channelId;
  cResult[1] = application_id;
  cResult[2] = guildId;
  cResult[3] = fn;
  tmp8 = fn;
}) : (function VoiceUserItem(guildId) {
  let collapsed;
  let deaf;
  let disabled;
  let isInEmbeddedActivity;
  let items2;
  let localMute;
  let mute;
  let obj3;
  let platform;
  let require;
  let serverDeaf;
  let serverMute;
  let stream;
  let tmp8Result;
  let user;
  let video;
  let voicePlatform;
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_11();
  const tmp4 = user(guildId[11])("channel_list");
  const first = user(guildId[12])(user.id, guildId, tmp4)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != _require) {
      let guildMemberAvatarSource;
      if (null != _require.avatar) {
        const obj = AvatarUtilsDefault;
        guildMemberAvatarSource = obj.getGuildMemberAvatarSource(tmp, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = tmp2(tmp3[13])(application_id).gameRecord;
  const items = [guildId, channelId, application_id];
  if (collapsed) {
    let obj2 = { style: tmp.voiceStateCollapsed, children: closure_6(require("native").Avatar, obj3) };
    obj3 = { source: getSource, size: XSMALL_20 };
    tmp8Result = closure_6(application_id, obj2);
  } else {
    const items1 = [tmp.voiceState, ];
    let disabled2 = disabled;
    const tmp8 = closure_7;
    const tmp9 = application_id;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj = { style: items1, children: items2 };
    items1[1] = disabled2;
    const obj4 = { source: getSource, size: XSMALL_20 };
    items2 = [closure_6(require("native").Avatar, obj4), , , , , , , , ];
    const obj5 = { variant, color };
    const tmp2Result = user(guildId[16]);
    const merged = Object.assign(guildId);
    items2[1] = closure_6(tmp2Result, obj5);
    let tmp19 = null;
    if (!disabled) {
      let tmp10Result;
      if (serverMute) {
        const obj6 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp10Result = tmp10(tmp11(tmp3[17]).MicrophoneDenyIcon, obj6);
      } else if (localMute) {
        const obj7 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp10Result = tmp10(tmp11(tmp3[17]).MicrophoneDenyIcon, obj7);
      } else {
        tmp10Result = null;
        if (mute) {
          const obj8 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp10Result = tmp10(tmp11(tmp3[18]).MicrophoneSlashIcon, obj8);
        }
      }
      tmp19 = tmp10Result;
    }
    items2[2] = tmp19;
    let tmp21 = null;
    if (!disabled) {
      let tmp10Result7;
      if (serverDeaf) {
        const obj9 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp10Result7 = tmp10(tmp11(tmp3[19]).HeadphonesDenyIcon, obj9);
      } else {
        tmp10Result7 = null;
        if (deaf) {
          const obj10 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp10Result7 = tmp10(tmp11(tmp3[20]).HeadphonesSlashIcon, obj10);
        }
      }
      tmp21 = tmp10Result7;
    }
    items2[3] = tmp21;
    let tmp10Result8 = null;
    if (video) {
      tmp10Result8 = null;
      if (!disabled) {
        const obj11 = { size: "custom", color, style: tmp.voiceStateIcon };
        tmp10Result8 = tmp10(tmp11(tmp3[21]).VideoIcon, obj11);
      }
    }
    items2[4] = tmp10Result8;
    let tmp10Result9 = null;
    if (isInEmbeddedActivity) {
      const obj12 = { source: user(guildId[23]), size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon = tmp11(tmp3[4]).Icon;
      tmp10Result9 = tmp10(Icon, obj12);
    }
    items2[5] = tmp10Result9;
    const tmp2Result2 = user(guildId[22]);
    if (platform == null) {
      platform = "";
    }
    let tmp2Result1Result = tmp2Result2(platform);
    if (tmp2Result1Result == null) {
      const tmp11Result = require("getConsoleIcon");
      tmp2Result1Result = tmp11Result.getConsoleIconForVoicePlatform(voicePlatform);
    }
    let tmp10Result10 = null;
    if (null != tmp2Result1Result) {
      const obj13 = { source: tmp2Result1Result, size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon2 = tmp11(tmp3[4]).Icon;
      tmp10Result10 = tmp10(Icon2, obj13);
    }
    items2[6] = tmp10Result10;
    let tmp10Result11 = null;
    if (stream) {
      const obj14 = { style: tmp.legacyVoiceStateIcon };
      tmp10Result11 = tmp10(tmp11(tmp3[4]).LiveTag, obj14);
    }
    items2[7] = tmp10Result11;
    let tmp10Result12 = null;
    if (!disabled) {
      tmp10Result12 = null;
      if (!isInEmbeddedActivity) {
        tmp10Result12 = null;
        if (null != gameRecord) {
          const obj15 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp7 };
          tmp10Result12 = tmp10(tmp2(tmp3[24]), obj15);
        }
      }
    }
    items2[8] = tmp10Result12;
    tmp8Result = tmp8(tmp9, obj);
  }
  return tmp8Result;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight(c8, fontScale);
  return Math.max(scaleTextLineHeightResult, native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};

// Module ID: 17444
// Function ID: 17445
// Name: VoiceUserItem
// Dependencies: [19, 17, 1087, 21, 1202, 11023, 4969, 587, 12004, 558, 576, 9191, 9193, 1267, 1417, 17445, 9140, 9142, 9136, 9138, 11274, 14120, 8492, 14118, 2]
// Exports: getVoiceUserHeight

// Module 17444 (VoiceUserItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import native from "native" /* 1202 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import AssetRegistryDefault from "AssetRegistry" /* 8492 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 9136 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9138 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 9140 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9142 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11023 */;
import VideoIcon from "VideoIcon" /* 11274 */;
import GameActivityIconDefault from "GameActivityIcon" /* 14118 */;
import getConsoleIcon from "getConsoleIcon" /* 14120 */;
import VoiceUserNameItemDefault from "VoiceUserNameItem" /* 17445 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ChannelListLayout from "ChannelListLayout" /* 12004 */;
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
  const first = member(user[11])(user.id, guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp4(tmp[12])(application_id).gameRecord;
  if (cResult[0] === channelId) {
    if (cResult[1] === application_id) {
      let tmp7;
      if (cResult[2] === guildId) {
        tmp7 = cResult[3];
      }
      const onShown = tmp7;
      if (cResult[4] === guildId) {
        if (cResult[5] === member) {
          let tmp8;
          if (cResult[6] === user) {
            tmp8 = cResult[7];
          }
          const source = tmp8;
          if (cResult[8] === tmp8) {
            let tmp9;
            let tmp10;
            let tmp11;
            if (cResult[9] === tmp3.voiceStateCollapsed) {
              tmp9 = cResult[10];
            }
            if (cResult[11] !== tmp8) {
              function renderAvatar() {
                const obj = { source, size: XSMALL_20 };
                return metroRequire(native.Avatar, obj);
              }
              cResult[11] = tmp8;
              cResult[12] = renderAvatar;
              tmp10 = renderAvatar;
            } else {
              tmp10 = cResult[12];
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
              tmp11 = renderName;
            } else {
              tmp11 = cResult[14];
            }
            if (cResult[15] === disabled) {
              if (cResult[16] === localMute) {
                if (cResult[17] === mute) {
                  if (cResult[18] === serverMute) {
                    let tmp12;
                    if (cResult[19] === tmp3.voiceStateIcon) {
                      tmp12 = cResult[20];
                    }
                    if (cResult[21] === deaf) {
                      if (cResult[22] === disabled) {
                        if (cResult[23] === serverDeaf) {
                          let tmp13;
                          if (cResult[24] === tmp3.voiceStateIcon) {
                            tmp13 = cResult[25];
                          }
                          if (cResult[26] === stream) {
                            let tmp14;
                            if (cResult[27] === tmp3.legacyVoiceStateIcon) {
                              tmp14 = cResult[28];
                            }
                            if (cResult[29] === disabled) {
                              if (cResult[30] === tmp3.voiceStateIcon) {
                                let tmp15;
                                if (cResult[31] === video) {
                                  tmp15 = cResult[32];
                                }
                                if (cResult[33] === platform) {
                                  if (cResult[34] === tmp3.legacyVoiceStateIcon) {
                                    let tmp16;
                                    if (cResult[35] === voicePlatform) {
                                      tmp16 = cResult[36];
                                    }
                                    if (cResult[37] === isInEmbeddedActivity) {
                                      let tmp17;
                                      if (cResult[38] === tmp3.legacyVoiceStateIcon) {
                                        tmp17 = cResult[39];
                                      }
                                      if (cResult[40] === disabled) {
                                        if (cResult[41] === gameRecord) {
                                          if (cResult[42] === isInEmbeddedActivity) {
                                            if (cResult[43] === tmp3.gameIcon) {
                                              let tmp18;
                                              if (cResult[44] === tmp7) {
                                                tmp18 = cResult[45];
                                              }
                                              if (collapsed) {
                                                let tmp42;
                                                if (cResult[46] !== tmp9) {
                                                  const tmp9Result = tmp9();
                                                  cResult[46] = tmp9;
                                                  cResult[47] = tmp9Result;
                                                  tmp42 = tmp9Result;
                                                } else {
                                                  tmp42 = cResult[47];
                                                }
                                                return tmp42;
                                              } else {
                                                if (disabled) {
                                                  disabled = tmp3.disabled;
                                                }
                                                if (cResult[48] === tmp3.voiceState) {
                                                  let tmp19;
                                                  let tmp20;
                                                  let tmp22;
                                                  let tmp24;
                                                  let tmp26;
                                                  let tmp28;
                                                  let tmp30;
                                                  let tmp32;
                                                  let tmp34;
                                                  let tmp36;
                                                  if (cResult[49] === disabled) {
                                                    tmp19 = cResult[50];
                                                  }
                                                  if (cResult[51] !== tmp10) {
                                                    const tmp10Result = tmp10();
                                                    cResult[51] = tmp10;
                                                    cResult[52] = tmp10Result;
                                                    tmp20 = tmp10Result;
                                                  } else {
                                                    tmp20 = cResult[52];
                                                  }
                                                  if (cResult[53] !== tmp11) {
                                                    const tmp11Result = tmp11();
                                                    cResult[53] = tmp11;
                                                    cResult[54] = tmp11Result;
                                                    tmp22 = tmp11Result;
                                                  } else {
                                                    tmp22 = cResult[54];
                                                  }
                                                  if (cResult[55] !== tmp12) {
                                                    const tmp12Result = tmp12();
                                                    cResult[55] = tmp12;
                                                    cResult[56] = tmp12Result;
                                                    tmp24 = tmp12Result;
                                                  } else {
                                                    tmp24 = cResult[56];
                                                  }
                                                  if (cResult[57] !== tmp13) {
                                                    const tmp13Result = tmp13();
                                                    cResult[57] = tmp13;
                                                    cResult[58] = tmp13Result;
                                                    tmp26 = tmp13Result;
                                                  } else {
                                                    tmp26 = cResult[58];
                                                  }
                                                  if (cResult[59] !== tmp15) {
                                                    const tmp15Result = tmp15();
                                                    cResult[59] = tmp15;
                                                    cResult[60] = tmp15Result;
                                                    tmp28 = tmp15Result;
                                                  } else {
                                                    tmp28 = cResult[60];
                                                  }
                                                  if (cResult[61] !== tmp17) {
                                                    const tmp17Result = tmp17();
                                                    cResult[61] = tmp17;
                                                    cResult[62] = tmp17Result;
                                                    tmp30 = tmp17Result;
                                                  } else {
                                                    tmp30 = cResult[62];
                                                  }
                                                  if (cResult[63] !== tmp16) {
                                                    const tmp16Result = tmp16();
                                                    cResult[63] = tmp16;
                                                    cResult[64] = tmp16Result;
                                                    tmp32 = tmp16Result;
                                                  } else {
                                                    tmp32 = cResult[64];
                                                  }
                                                  if (cResult[65] !== tmp14) {
                                                    const tmp14Result = tmp14();
                                                    cResult[65] = tmp14;
                                                    cResult[66] = tmp14Result;
                                                    tmp34 = tmp14Result;
                                                  } else {
                                                    tmp34 = cResult[66];
                                                  }
                                                  if (cResult[67] !== tmp18) {
                                                    const tmp18Result = tmp18();
                                                    cResult[67] = tmp18;
                                                    cResult[68] = tmp18Result;
                                                    tmp36 = tmp18Result;
                                                  } else {
                                                    tmp36 = cResult[68];
                                                  }
                                                  if (cResult[69] === tmp19) {
                                                    if (cResult[70] === tmp20) {
                                                      if (cResult[71] === tmp22) {
                                                        if (cResult[72] === tmp24) {
                                                          if (cResult[73] === tmp26) {
                                                            if (cResult[74] === tmp28) {
                                                              if (cResult[75] === tmp30) {
                                                                if (cResult[76] === tmp32) {
                                                                  if (cResult[77] === tmp34) {
                                                                    let tmp38;
                                                                    if (cResult[78] === tmp36) {
                                                                      tmp38 = cResult[79];
                                                                    }
                                                                    return tmp38;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let obj2 = { style: tmp19, children: items };
                                                  items = [tmp20, tmp22, tmp24, tmp26, tmp28, tmp30, tmp32, tmp34, tmp36];
                                                  const tmp41 = serverDeaf(channelId, obj2);
                                                  cResult[69] = tmp19;
                                                  cResult[70] = tmp20;
                                                  cResult[71] = tmp22;
                                                  cResult[72] = tmp24;
                                                  cResult[73] = tmp26;
                                                  cResult[74] = tmp28;
                                                  cResult[75] = tmp30;
                                                  cResult[76] = tmp32;
                                                  cResult[77] = tmp34;
                                                  cResult[78] = tmp36;
                                                  cResult[79] = tmp41;
                                                  tmp38 = tmp41;
                                                }
                                                const items1 = [tmp3.voiceState, disabled];
                                                cResult[48] = tmp3.voiceState;
                                                cResult[49] = disabled;
                                                cResult[50] = items1;
                                                tmp19 = items1;
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
                                      cResult[44] = tmp7;
                                      cResult[45] = renderGameIcon;
                                      tmp18 = renderGameIcon;
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
                                    tmp17 = renderEmbeddedActivityIcon;
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
                                tmp16 = renderPlatform;
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
                            tmp15 = renderVideoIcon;
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
                          tmp14 = renderStreamIndicator;
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
                    tmp13 = renderDeafIcon;
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
            tmp12 = renderMuteIcon;
          }
          function renderCollapsed() {
            let obj2;
            const obj = { style: closure_16.voiceStateCollapsed, children: metroRequire(native.Avatar, obj2) };
            obj2 = { source, size: XSMALL_20 };
            return metroRequire(View, obj);
          }
          cResult[8] = tmp8;
          cResult[9] = tmp3.voiceStateCollapsed;
          cResult[10] = renderCollapsed;
          tmp9 = renderCollapsed;
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
      tmp8 = getSource;
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
  tmp7 = fn;
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
  let tmp7Result;
  let user;
  let video;
  let voicePlatform;
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_11();
  const first = user(guildId[11])(user.id, guildId)[0];
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
  const gameRecord = tmp2(tmp3[12])(application_id).gameRecord;
  const items = [guildId, channelId, application_id];
  if (collapsed) {
    let obj2 = { style: tmp.voiceStateCollapsed, children: closure_6(require("native").Avatar, obj3) };
    obj3 = { source: getSource, size: XSMALL_20 };
    tmp7Result = closure_6(application_id, obj2);
  } else {
    const items1 = [tmp.voiceState, ];
    let disabled2 = disabled;
    const tmp7 = closure_7;
    const tmp8 = application_id;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj = { style: items1, children: items2 };
    items1[1] = disabled2;
    const obj4 = { source: getSource, size: XSMALL_20 };
    items2 = [closure_6(require("native").Avatar, obj4), , , , , , , , ];
    const obj5 = { variant, color };
    const tmp2Result = user(guildId[15]);
    const merged = Object.assign(guildId);
    items2[1] = closure_6(tmp2Result, obj5);
    let tmp18 = null;
    if (!disabled) {
      let tmp9Result;
      if (serverMute) {
        const obj6 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp9Result = tmp9(tmp10(tmp3[16]).MicrophoneDenyIcon, obj6);
      } else if (localMute) {
        const obj7 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp9Result = tmp9(tmp10(tmp3[16]).MicrophoneDenyIcon, obj7);
      } else {
        tmp9Result = null;
        if (mute) {
          const obj8 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp9Result = tmp9(tmp10(tmp3[17]).MicrophoneSlashIcon, obj8);
        }
      }
      tmp18 = tmp9Result;
    }
    items2[2] = tmp18;
    let tmp20 = null;
    if (!disabled) {
      let tmp9Result7;
      if (serverDeaf) {
        const obj9 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp9Result7 = tmp9(tmp10(tmp3[18]).HeadphonesDenyIcon, obj9);
      } else {
        tmp9Result7 = null;
        if (deaf) {
          const obj10 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp9Result7 = tmp9(tmp10(tmp3[19]).HeadphonesSlashIcon, obj10);
        }
      }
      tmp20 = tmp9Result7;
    }
    items2[3] = tmp20;
    let tmp9Result8 = null;
    if (video) {
      tmp9Result8 = null;
      if (!disabled) {
        const obj11 = { size: "custom", color, style: tmp.voiceStateIcon };
        tmp9Result8 = tmp9(tmp10(tmp3[20]).VideoIcon, obj11);
      }
    }
    items2[4] = tmp9Result8;
    let tmp9Result9 = null;
    if (isInEmbeddedActivity) {
      const obj12 = { source: user(guildId[22]), size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon = tmp10(tmp3[4]).Icon;
      tmp9Result9 = tmp9(Icon, obj12);
    }
    items2[5] = tmp9Result9;
    const tmp2Result2 = user(guildId[21]);
    if (platform == null) {
      platform = "";
    }
    let tmp2Result1Result = tmp2Result2(platform);
    if (tmp2Result1Result == null) {
      const tmp10Result = require("getConsoleIcon");
      tmp2Result1Result = tmp10Result.getConsoleIconForVoicePlatform(voicePlatform);
    }
    let tmp9Result10 = null;
    if (null != tmp2Result1Result) {
      const obj13 = { source: tmp2Result1Result, size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon2 = tmp10(tmp3[4]).Icon;
      tmp9Result10 = tmp9(Icon2, obj13);
    }
    items2[6] = tmp9Result10;
    let tmp9Result11 = null;
    if (stream) {
      const obj14 = { style: tmp.legacyVoiceStateIcon };
      tmp9Result11 = tmp9(tmp10(tmp3[4]).LiveTag, obj14);
    }
    items2[7] = tmp9Result11;
    let tmp9Result12 = null;
    if (!disabled) {
      tmp9Result12 = null;
      if (!isInEmbeddedActivity) {
        tmp9Result12 = null;
        if (null != gameRecord) {
          const obj15 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp6 };
          tmp9Result12 = tmp9(tmp2(tmp3[23]), obj15);
        }
      }
    }
    items2[8] = tmp9Result12;
    tmp7Result = tmp7(tmp8, obj);
  }
  return tmp7Result;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight(c8, fontScale);
  return Math.max(scaleTextLineHeightResult, native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};

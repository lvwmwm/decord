// Module ID: 15356
// Function ID: 15357
// Name: Avatar
// Dependencies: [19, 17, 1087, 1203, 21, 4969, 587, 14247, 15345, 15346, 9375, 8619, 558, 576, 9374, 15347, 5232, 11393, 11394, 15357, 2]

// Module 15356 (Avatar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import IconDefault from "Icon" /* 5232 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8619 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9374 */;
import ClipView from "ClipView" /* 9375 */;
import AssetRegistryDefault from "AssetRegistry" /* 11393 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11394 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 14247 */;
import Status_StatusUtils from "Status/StatusUtils" /* 15345 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 15346 */;
import Status from "Status" /* 15347 */;
import SpeakerPulseDefault from "SpeakerPulse" /* 15357 */;
import react from "react" /* 19 */;
import StatusConstants from "StatusConstants" /* 1203 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const CutoutableAvatarImageDefault = CutoutableAvatarImage;
const StatusDefault = Status;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getStatusSize(arg0) {
  if (CutoutableAvatarImage.AvatarSizes.XXSMALL !== arg0) {
    if (CutoutableAvatarImage.AvatarSizes.XSMALL !== arg0) {
      if (CutoutableAvatarImage.AvatarSizes.XSMALL_20 !== arg0) {
        if (CutoutableAvatarImage.AvatarSizes.SMALL !== arg0) {
          if (CutoutableAvatarImage.AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return metroImportDefault.REFRESH_MEDIUM_10;
          } else {
            if (CutoutableAvatarImage.AvatarSizes.NORMAL !== arg0) {
              if (CutoutableAvatarImage.AvatarSizes.TABS_22 !== arg0) {
                if (CutoutableAvatarImage.AvatarSizes.LARGE !== arg0) {
                  if (CutoutableAvatarImage.AvatarSizes.LARGE_48 !== arg0) {
                    if (CutoutableAvatarImage.AvatarSizes.XLARGE !== arg0) {
                      if (CutoutableAvatarImage.AvatarSizes.XLARGE_72 !== arg0) {
                        if (CutoutableAvatarImage.AvatarSizes.XXLARGE !== arg0) {
                          if (CutoutableAvatarImage.AvatarSizes.PROFILE !== arg0) {
                            if (CutoutableAvatarImage.AvatarSizes.YOUBAR_60 !== arg0) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return metroImportDefault.LARGE;
                  }
                }
              }
            }
            return metroImportDefault.MEDIUM;
          }
        }
      }
    }
  }
  return metroImportDefault.SMALL;
}
function getAvatarStatusCutout(arg0) {
  let avatarSize;
  let cornerRadius;
  let cornerRadius2;
  let diff;
  let height;
  let height2;
  let height3;
  let isMobileOnline;
  let isVROnline;
  let items;
  let items1;
  let items2;
  let items3;
  let statusSizeOverride;
  let tmp15Result;
  let tmp4Result4;
  let userStatus;
  let width;
  let width2;
  let width3;
  ({ avatarSize, userStatus, isMobileOnline, isVROnline, statusSizeOverride } = arg0);
  if (null != userStatus) {
    if (userStatus !== StatusTypes.UNKNOWN) {
      const tmp6 = CutoutableAvatarImage.AVATAR_SIZE_MAP[avatarSize];
      if (statusSizeOverride == null) {
        statusSizeOverride = getStatusSize(avatarSize);
      }
      if (statusSizeOverride == null) {
        statusSizeOverride = 0;
      }
      const result = statusSizeOverride / 4;
      if (tmp2) {
        const tmp4Result = Status_StatusUtils;
        const statusTypingDimensions = tmp4Result.getStatusTypingDimensions(statusSizeOverride);
        ({ width: width3, height: height3 } = statusTypingDimensions);
        const tmp15 = getStatusContainerStyleDefault;
        if (isMobileOnline == null) {
          isMobileOnline = false;
        }
        if (isVROnline == null) {
          isVROnline = false;
        }
        const sum = height3 + 2 * metroRequire;
        const obj2 = { nativeCutouts: items };
        size = { shape: ClipView.CutoutShape.RoundedRect, x: diff + tmp4Result4.getAnimatedTypingTranslateX(tmp15Result.width), y: tmp6 - height3 - metroRequire, width: width3 + 2 * metroRequire, height: sum, cornerRadius: sum / 2 };
        diff = tmp6 - width3 - metroRequire;
        tmp15Result = tmp15(statusSizeOverride, isMobileOnline, isVROnline);
        items = [size];
        tmp4Result4 = Status_StatusUtils;
        return obj2;
      } else if (isVROnline) {
        const tmp4Result5 = Status_StatusUtils;
        const vRStatusContainerRect = tmp4Result5.getVRStatusContainerRect(statusSizeOverride);
        ({ width: width2, height: height2 } = vRStatusContainerRect);
        const obj3 = { nativeCutouts: items1 };
        const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp6 - width2 + result, y: tmp6 - height2 + result, width: width2, height: height2, cornerRadius: cornerRadius2 };
        cornerRadius2 = vRStatusContainerRect.cornerRadius;
        items1 = [size1];
        return obj3;
      } else if (isMobileOnline) {
        const tmp4Result6 = Status_StatusUtils;
        const mobileStatusContainerRect = tmp4Result6.getMobileStatusContainerRect(statusSizeOverride);
        ({ width, height } = mobileStatusContainerRect);
        const obj4 = { nativeCutouts: items2 };
        const size2 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp6 - width + result, y: tmp6 - height + result, width, height, cornerRadius };
        cornerRadius = mobileStatusContainerRect.cornerRadius;
        items2 = [size2];
        return obj4;
      } else {
        const sum1 = statusSizeOverride / 2 + tmp;
        const diff1 = tmp6 - sum1 - 2 * result;
        const obj = { nativeCutouts: items3 };
        const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum1 };
        items3 = [point];
        return obj;
      }
    }
  }
}
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ STATUS_PADDING: metroRequire, StatusSizes: metroImportDefault } = StatusConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((NORMAL) => {
  let decorationSizeForAvatarSize;
  let decorationSizeForAvatarSize1;
  let rect;
  let rect1;
  let rect2;
  const obj = { status: { position: "absolute", right: -3, bottom: -3 }, speaking: rect, soundboard: rect1, stageSpeaking: { position: "absolute", right: -2, bottom: -2 }, voiceStatus: size, decoration: rect2, container: { position: "relative" } };
  rect = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: nativeDefault.colors.STATUS_SPEAKING };
  rect1 = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
  size = { width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, borderRadius: nativeDefault.radii.md, right: 0, bottom: 0 };
  rect2 = { position: "absolute", top: -(decorationSizeForAvatarSize - CutoutableAvatarImage.styles[NORMAL].width) / 2, left: -(decorationSizeForAvatarSize1 - CutoutableAvatarImage.styles[NORMAL].width) / 2 };
  const obj6 = avatar_decorations_AvatarDecorationUtils;
  decorationSizeForAvatarSize = obj6.getDecorationSizeForAvatarSize(NORMAL);
  const obj7 = avatar_decorations_AvatarDecorationUtils;
  decorationSizeForAvatarSize1 = obj7.getDecorationSizeForAvatarSize(NORMAL);
  return obj;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Avatar(channel) {
  let accessibilityLabel;
  let accessible;
  let animate;
  let autoStatusCutout;
  let cutout;
  let isMobileOnline;
  let isStageCall;
  let isVROnline;
  let items;
  let needsOffscreenAlphaCompositing;
  let playingSoundboard;
  let source;
  let speaking;
  let speakingColor;
  let status;
  let statusSizeOverride;
  let streaming;
  let style;
  let typing;
  let tmp = channel;
  let tmp2 = speakingColor;
  let obj = channel(speakingColor[13]);
  const cResult = obj.c(80);
  channel = channel.channel;
  ({ streaming, isMobileOnline, isVROnline, status } = channel);
  ({ size, animate, speaking, playingSoundboard, speakingColor } = channel);
  const avatarDecoration = channel.avatarDecoration;
  const mute = channel.mute;
  const deaf = channel.deaf;
  const statusStyle = channel.statusStyle;
  const avatarStyle = channel.avatarStyle;
  ({ style, cutout, autoStatusCutout, isStageCall, source } = channel);
  const user = channel.user;
  const guildId = channel.guildId;
  const disablePlaceholder = channel.disablePlaceholder;
  ({ needsOffscreenAlphaCompositing, accessible, accessibilityLabel, typing, statusSizeOverride } = channel);
  let tmp4 = undefined !== streaming && streaming;
  streaming = tmp4;
  let tmp5 = undefined !== isMobileOnline && isMobileOnline;
  isMobileOnline = tmp5;
  let tmp6 = undefined !== isVROnline && isVROnline;
  isVROnline = tmp6;
  if (undefined === size) {
    size = tmp(tmp2[7]).AvatarSizes.NORMAL;
  }
  let tmp7 = undefined !== animate && animate;
  animate = tmp7;
  const tmp8 = undefined !== speaking && speaking;
  let closure_18 = tmp8;
  let closure_19 = tmp9;
  let tmp10 = undefined !== isStageCall && isStageCall;
  let closure_20 = tmp10;
  let tmp11 = undefined !== needsOffscreenAlphaCompositing && needsOffscreenAlphaCompositing;
  let tmp12 = undefined !== typing && typing;
  let closure_21 = tmp12;
  const tmp13 = guildId(size);
  let closure_22 = tmp13;
  if (cResult[0] === cutout) {
    if (cResult[1] === autoStatusCutout) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === size) {
            if (cResult[5] === status) {
              if (cResult[6] === statusSizeOverride) {
                let tmp14;
                if (cResult[7] === tmp12) {
                  tmp14 = cResult[8];
                }
                if (cResult[9] === tmp14) {
                  let tmp17;
                  if (cResult[10] === -tmp13.decoration.top) {
                    tmp17 = cResult[11];
                  }
                  if (cResult[12] === tmp17) {
                    let tmp19;
                    if (cResult[13] === tmp14) {
                      tmp19 = cResult[14];
                    }
                    const cutout2 = tmp19.cutout;
                    const decorationCutout = tmp19.decorationCutout;
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === avatarStyle) {
                        if (cResult[17] === channel) {
                          if (cResult[18] === cutout2) {
                            if (cResult[19] === disablePlaceholder) {
                              if (cResult[20] === guildId) {
                                if (cResult[21] === size) {
                                  if (cResult[22] === source) {
                                    let tmp20;
                                    if (cResult[23] === user) {
                                      tmp20 = cResult[24];
                                    }
                                    if (cResult[25] === tmp7) {
                                      if (cResult[26] === avatarDecoration) {
                                        if (cResult[27] === decorationCutout) {
                                          if (cResult[28] === size) {
                                            let tmp21;
                                            if (cResult[29] === tmp13.decoration) {
                                              tmp21 = cResult[30];
                                            }
                                            if (cResult[31] === tmp5) {
                                              if (cResult[32] === tmp6) {
                                                if (cResult[33] === size) {
                                                  if (cResult[34] === status) {
                                                    if (cResult[35] === statusSizeOverride) {
                                                      if (cResult[36] === statusStyle) {
                                                        if (cResult[37] === tmp4) {
                                                          if (cResult[38] === tmp13.status) {
                                                            if (cResult[39] === tmp12) {
                                                              let tmp22;
                                                              if (cResult[40] === user) {
                                                                tmp22 = cResult[41];
                                                              }
                                                              if (cResult[42] === deaf) {
                                                                if (cResult[43] === mute) {
                                                                  if (cResult[44] === tmp13.status) {
                                                                    let tmp23;
                                                                    if (cResult[45] === tmp13.voiceStatus) {
                                                                      tmp23 = cResult[46];
                                                                    }
                                                                    if (cResult[47] === tmp10) {
                                                                      if (cResult[48] === (undefined !== playingSoundboard && playingSoundboard)) {
                                                                        if (cResult[49] === size) {
                                                                          if (cResult[50] === tmp8) {
                                                                            if (cResult[51] === speakingColor) {
                                                                              if (cResult[52] === tmp13.soundboard) {
                                                                                if (cResult[53] === tmp13.speaking) {
                                                                                  let tmp24;
                                                                                  if (cResult[54] === tmp13.stageSpeaking) {
                                                                                    tmp24 = cResult[55];
                                                                                  }
                                                                                  const tmp25 = tmp(tmp2[7]).styles[size];
                                                                                  if (cResult[56] === style) {
                                                                                    if (cResult[57] === tmp13.container) {
                                                                                      let tmp26;
                                                                                      let tmp27;
                                                                                      let tmp29;
                                                                                      let tmp31;
                                                                                      let tmp33;
                                                                                      let tmp35;
                                                                                      if (cResult[58] === tmp25) {
                                                                                        tmp26 = cResult[59];
                                                                                      }
                                                                                      if (cResult[60] !== tmp24) {
                                                                                        const tmp24Result = tmp24();
                                                                                        cResult[60] = tmp24;
                                                                                        cResult[61] = tmp24Result;
                                                                                        tmp27 = tmp24Result;
                                                                                      } else {
                                                                                        tmp27 = cResult[61];
                                                                                      }
                                                                                      if (cResult[62] !== tmp20) {
                                                                                        const tmp20Result = tmp20();
                                                                                        cResult[62] = tmp20;
                                                                                        cResult[63] = tmp20Result;
                                                                                        tmp29 = tmp20Result;
                                                                                      } else {
                                                                                        tmp29 = cResult[63];
                                                                                      }
                                                                                      if (cResult[64] !== tmp21) {
                                                                                        const tmp21Result = tmp21();
                                                                                        cResult[64] = tmp21;
                                                                                        cResult[65] = tmp21Result;
                                                                                        tmp31 = tmp21Result;
                                                                                      } else {
                                                                                        tmp31 = cResult[65];
                                                                                      }
                                                                                      if (cResult[66] !== tmp22) {
                                                                                        const tmp22Result = tmp22();
                                                                                        cResult[66] = tmp22;
                                                                                        cResult[67] = tmp22Result;
                                                                                        tmp33 = tmp22Result;
                                                                                      } else {
                                                                                        tmp33 = cResult[67];
                                                                                      }
                                                                                      if (cResult[68] !== tmp23) {
                                                                                        const tmp23Result = tmp23();
                                                                                        cResult[68] = tmp23;
                                                                                        cResult[69] = tmp23Result;
                                                                                        tmp35 = tmp23Result;
                                                                                      } else {
                                                                                        tmp35 = cResult[69];
                                                                                      }
                                                                                      if (cResult[70] === accessibilityLabel) {
                                                                                        if (cResult[71] === accessible) {
                                                                                          if (cResult[72] === tmp11) {
                                                                                            if (cResult[73] === tmp26) {
                                                                                              if (cResult[74] === tmp27) {
                                                                                                if (cResult[75] === tmp29) {
                                                                                                  if (cResult[76] === tmp31) {
                                                                                                    if (cResult[77] === tmp33) {
                                                                                                      let tmp37;
                                                                                                      if (cResult[78] === tmp35) {
                                                                                                        tmp37 = cResult[79];
                                                                                                      }
                                                                                                      return tmp37;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      let obj2 = { style: tmp26, needsOffscreenAlphaCompositing: tmp11, accessible, accessibilityLabel, children: items };
                                                                                      items = [tmp27, tmp29, tmp31, tmp33, tmp35];
                                                                                      const tmp40 = user(mute, obj2);
                                                                                      cResult[70] = accessibilityLabel;
                                                                                      cResult[71] = accessible;
                                                                                      cResult[72] = tmp11;
                                                                                      cResult[73] = tmp26;
                                                                                      cResult[74] = tmp27;
                                                                                      cResult[75] = tmp29;
                                                                                      cResult[76] = tmp31;
                                                                                      cResult[77] = tmp33;
                                                                                      cResult[78] = tmp35;
                                                                                      cResult[79] = tmp40;
                                                                                      tmp37 = tmp40;
                                                                                    }
                                                                                  }
                                                                                  let items1 = [tmp25, tmp13.container, style];
                                                                                  cResult[56] = style;
                                                                                  cResult[57] = tmp13.container;
                                                                                  cResult[58] = tmp25;
                                                                                  cResult[59] = items1;
                                                                                  tmp26 = items1;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    function renderSpeakingIndicator() {
                                                                      let items;
                                                                      let tmp6Result;
                                                                      const tmp = closure_18;
                                                                      if (!tmp) {
                                                                        const tmp2 = closure_19;
                                                                        if (!tmp2) {
                                                                          return null;
                                                                        }
                                                                      }
                                                                      const sum = CutoutableAvatarImage.AVATAR_SIZE_MAP[size] + 4;
                                                                      if (closure_20) {
                                                                        const obj = { color: speakingColor, style: items };
                                                                        items = [closure_22.stageSpeaking, ];
                                                                        size = { width: sum, height: sum, borderRadius: sum / 2 };
                                                                        items[1] = size;
                                                                        tmp6Result = tmp6(SpeakerPulseDefault, obj);
                                                                      } else {
                                                                        const items1 = [closure_19 ? closure_22.soundboard : closure_22.speaking, , ];
                                                                        const size1 = { width: sum, height: sum, borderRadius: sum / 2 };
                                                                        items1[1] = size1;
                                                                        let tmp12 = null;
                                                                        const tmp7 = View;
                                                                        if (null != speakingColor) {
                                                                          tmp12 = null;
                                                                          if (!tmp8) {
                                                                            tmp12 = { borderColor: tmp10 };
                                                                            const obj2 = { borderColor: tmp10 };
                                                                          }
                                                                        }
                                                                        const obj3 = { style: items1 };
                                                                        items1[2] = tmp12;
                                                                        tmp6Result = tmp6(tmp7, obj3);
                                                                      }
                                                                      return tmp6Result;
                                                                    }
                                                                    cResult[47] = tmp10;
                                                                    cResult[48] = undefined !== playingSoundboard && playingSoundboard;
                                                                    cResult[49] = size;
                                                                    cResult[50] = tmp8;
                                                                    cResult[51] = speakingColor;
                                                                    cResult[52] = tmp13.soundboard;
                                                                    cResult[53] = tmp13.speaking;
                                                                    cResult[54] = tmp13.stageSpeaking;
                                                                    cResult[55] = renderSpeakingIndicator;
                                                                    tmp24 = renderSpeakingIndicator;
                                                                  }
                                                                }
                                                              }
                                                              function renderVoiceStatus() {
                                                                let items;
                                                                let items1;
                                                                let obj3;
                                                                let obj4;
                                                                let tmp10;
                                                                let tmp23;
                                                                let tmp3;
                                                                const tmp = deaf;
                                                                if (tmp) {
                                                                  const obj2 = { style: items, children: metroImportAll(tmp23, obj3) };
                                                                  items = [, ];
                                                                  ({ status: arr2[0], voiceStatus: arr2[1] } = closure_22);
                                                                  obj3 = { size: IconDefault.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, color: nativeDefault.unsafe_rawColors.WHITE };
                                                                  tmp23 = IconDefault;
                                                                  tmp3 = metroImportAll(View, obj2);
                                                                } else if (mute) {
                                                                  const obj = { style: items1, children: metroImportAll(tmp10, obj4) };
                                                                  items1 = [, ];
                                                                  ({ status: arr[0], voiceStatus: arr[1] } = closure_22);
                                                                  obj4 = { size: IconDefault.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault2, color: nativeDefault.unsafe_rawColors.WHITE };
                                                                  tmp10 = IconDefault;
                                                                  tmp3 = metroImportAll(View, obj);
                                                                }
                                                                return tmp3;
                                                              }
                                                              cResult[42] = deaf;
                                                              cResult[43] = mute;
                                                              cResult[44] = tmp13.status;
                                                              cResult[45] = tmp13.voiceStatus;
                                                              cResult[46] = renderVoiceStatus;
                                                              tmp23 = renderVoiceStatus;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            function renderStatus() {
                                              let items;
                                              if (null != status) {
                                                if (status !== StatusTypes.UNKNOWN) {
                                                  let tmp4 = statusSizeOverride;
                                                  if (statusSizeOverride == null) {
                                                    tmp4 = getStatusSize(size);
                                                  }
                                                  let tmp5 = null;
                                                  if (null != tmp4) {
                                                    const obj = { size: tmp4, isMobileOnline, isVROnline, status, streaming, style: items };
                                                    items = [closure_22.status, statusStyle];
                                                    tmp5 = obj;
                                                  }
                                                  let tmp11 = null;
                                                  if (null != tmp5) {
                                                    if (closure_21) {
                                                      let tmp21;
                                                      if (null != user) {
                                                        const obj2 = { typing: tmp12, userId: tmp13.id };
                                                        const StatusWithTyping = Status.StatusWithTyping;
                                                        const merged = Object.assign(tmp5);
                                                        tmp21 = metroImportAll(StatusWithTyping, obj2);
                                                      }
                                                      tmp11 = tmp21;
                                                    }
                                                    const obj3 = {};
                                                    const tmp17 = StatusDefault;
                                                    const merged1 = Object.assign(tmp5);
                                                    tmp21 = metroImportAll(tmp17, obj3);
                                                  }
                                                  return tmp11;
                                                }
                                              }
                                              return null;
                                            }
                                            cResult[31] = tmp5;
                                            cResult[32] = tmp6;
                                            cResult[33] = size;
                                            cResult[34] = status;
                                            cResult[35] = statusSizeOverride;
                                            cResult[36] = statusStyle;
                                            cResult[37] = tmp4;
                                            cResult[38] = tmp13.status;
                                            cResult[39] = tmp12;
                                            cResult[40] = user;
                                            cResult[41] = renderStatus;
                                            tmp22 = renderStatus;
                                          }
                                        }
                                      }
                                    }
                                    function renderDecorations() {
                                      let obj2;
                                      let tmp2 = null;
                                      if (null != avatarDecoration) {
                                        const obj = { size: obj2.getDecorationSizeForAvatarSize(size), avatarDecoration, decorationStyle: closure_22.decoration, animate, cutout: decorationCutout };
                                        const tmp6 = CutoutableAvatarDecorationDefault;
                                        obj2 = avatar_decorations_AvatarDecorationUtils;
                                        tmp2 = metroImportAll(tmp6, obj, tmp.asset);
                                      }
                                      return tmp2;
                                    }
                                    cResult[25] = tmp7;
                                    cResult[26] = avatarDecoration;
                                    cResult[27] = decorationCutout;
                                    cResult[28] = size;
                                    cResult[29] = tmp13.decoration;
                                    cResult[30] = renderDecorations;
                                    tmp21 = renderDecorations;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function renderImage() {
                      let tmp6;
                      const obj = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
                      if (null == source) {
                        let tmp4;
                        if (null == user) {
                          tmp4 = null;
                        }
                        return tmp4;
                      }
                      if (null != source) {
                        const obj2 = { source, size, animate };
                        const tmp29 = CutoutableAvatarImageDefault;
                        const merged = Object.assign(obj);
                        tmp6 = metroImportAll(tmp29, obj2);
                      } else if (null != user) {
                        const obj3 = { user: tmp35, guildId, size, animate };
                        const tmp19 = CutoutableAvatarImageDefault;
                        const merged1 = Object.assign(obj);
                        tmp6 = metroImportAll(tmp19, obj3);
                      } else if (null != channel) {
                        const obj4 = { channel: tmp5, size, animate };
                        const tmp10 = CutoutableAvatarImageDefault;
                        const merged2 = Object.assign(obj);
                        tmp6 = metroImportAll(tmp10, obj4);
                      }
                      tmp4 = tmp6;
                    }
                    cResult[15] = tmp7;
                    cResult[16] = avatarStyle;
                    cResult[17] = channel;
                    cResult[18] = cutout2;
                    cResult[19] = disablePlaceholder;
                    cResult[20] = guildId;
                    cResult[21] = size;
                    cResult[22] = source;
                    cResult[23] = user;
                    cResult[24] = renderImage;
                    tmp20 = renderImage;
                  }
                  let obj3 = { cutout: tmp14, decorationCutout: tmp17 };
                  cResult[12] = tmp17;
                  cResult[13] = tmp14;
                  cResult[14] = obj3;
                  tmp19 = obj3;
                }
                const tmpResult = tmp(tmp2[11]);
                const decorationCutoutForAvatarCutout = tmpResult.getDecorationCutoutForAvatarCutout(tmp14, tmp16);
                cResult[9] = tmp14;
                cResult[10] = -tmp13.decoration.top;
                cResult[11] = decorationCutoutForAvatarCutout;
                tmp17 = decorationCutoutForAvatarCutout;
              }
            }
          }
        }
      }
    }
  }
  let tmp15 = cutout;
  if (null != autoStatusCutout) {
    let obj4 = { avatarSize: size, userStatus: status, isMobileOnline: tmp5, isVROnline: tmp6, padding: true === autoStatusCutout ? statusStyle : autoStatusCutout.padding, typing: tmp12, statusSizeOverride };
    tmp15 = statusSizeOverride(obj4);
  }
  cResult[0] = cutout;
  cResult[1] = autoStatusCutout;
  cResult[2] = tmp5;
  cResult[3] = tmp6;
  cResult[4] = size;
  cResult[5] = status;
  cResult[6] = statusSizeOverride;
  cResult[7] = tmp12;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function Avatar(isMobileOnline) {
  let accessibilityLabel;
  let accessible;
  let avatarDecoration;
  let avatarStyle;
  let channel;
  let cutout;
  let cutout2;
  let deaf;
  let decorationCutout;
  let disablePlaceholder;
  let guildId;
  let isStageCall;
  let items1;
  let items2;
  let items5;
  let items6;
  let items7;
  let mute;
  let needsOffscreenAlphaCompositing;
  let obj11;
  let obj13;
  let source;
  let speakingColor;
  let statusStyle;
  let streaming;
  let style;
  let tmp17;
  let tmp59;
  let tmp62;
  let tmp7Result;
  let tmp9;
  let typing;
  let user;
  ({ channel, streaming } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const status = isMobileOnline.status;
  let NORMAL = isMobileOnline.size;
  if (NORMAL === undefined) {
    let tmp2 = status;
    NORMAL = flag(status[7]).AvatarSizes.NORMAL;
  }
  let flag3 = isMobileOnline.animate;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isMobileOnline.speaking;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = isMobileOnline.playingSoundboard;
  if (flag5 === undefined) {
    flag5 = false;
  }
  ({ speakingColor, avatarDecoration, cutout } = isMobileOnline);
  const autoStatusCutout = isMobileOnline.autoStatusCutout;
  ({ isStageCall, mute, deaf, statusStyle, avatarStyle, style } = isMobileOnline);
  if (isStageCall === undefined) {
    isStageCall = false;
  }
  ({ source, user, needsOffscreenAlphaCompositing, guildId, disablePlaceholder } = isMobileOnline);
  if (needsOffscreenAlphaCompositing === undefined) {
    needsOffscreenAlphaCompositing = false;
  }
  ({ typing, accessible, accessibilityLabel } = isMobileOnline);
  if (typing === undefined) {
    typing = false;
  }
  let statusSizeOverride = isMobileOnline.statusSizeOverride;
  const tmp3 = closure_10(NORMAL);
  const decoration = tmp3;
  const items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    let obj3;
    let tmp2;
    if (null != autoStatusCutout) {
      const obj = { avatarSize: NORMAL, userStatus: status, isMobileOnline: flag, isVROnline: flag2, padding: true === autoStatusCutout ? metroRequire : autoStatusCutout.padding, typing, statusSizeOverride };
      tmp2 = getAvatarStatusCutout(obj);
    } else {
      tmp2 = cutout;
    }
    const obj2 = { cutout: tmp2, decorationCutout: obj3.getDecorationCutoutForAvatarCutout(tmp2, -decoration.decoration.top) };
    obj3 = avatar_decorations_AvatarDecorationUtils;
    return obj2;
  }, items);
  let obj = { style: items1, needsOffscreenAlphaCompositing, accessible, accessibilityLabel, children: null };
  ({ cutout: cutout2, decorationCutout } = memo);
  items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  const tmp5 = closure_9;
  if (flag4) {
    let tmp11Result;
    const sum = tmp7(tmp8[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    if (isStageCall) {
      let obj2 = { color: speakingColor, style: items2 };
      items2 = [tmp3.stageSpeaking, ];
      size = { width: sum, height: sum, borderRadius: sum / 2 };
      items2[1] = size;
      tmp11Result = tmp11(flag2(tmp8[19]), obj2);
    } else {
      const items3 = [flag5 ? tmp3.soundboard : tmp3.speaking, , ];
      const size1 = { width: sum, height: sum, borderRadius: sum / 2 };
      items3[1] = size1;
      let tmp13 = null;
      if (null != speakingColor) {
        tmp13 = null;
        if (!flag5) {
          let obj3 = { borderColor: speakingColor };
          tmp13 = obj3;
        }
      }
      const obj4 = { style: items3 };
      items3[2] = tmp13;
      tmp11Result = tmp11(tmp6, obj4);
    }
    tmp9 = tmp11Result;
  } else {
    tmp9 = null;
  }
  const items4 = [tmp9, , , , ];
  const obj5 = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
  if (null == source) {
    let tmp16;
    let tmp56;
    if (null == user) {
      tmp16 = null;
    }
    items4[1] = tmp16;
    let tmp36 = null;
    if (null != avatarDecoration) {
      const obj6 = { size: tmp7Result.getDecorationSizeForAvatarSize(NORMAL), avatarDecoration, decorationStyle: tmp3.decoration, animate: flag3, cutout: decorationCutout };
      const tmp39 = flag2(status[14]);
      tmp7Result = flag(status[11]);
      tmp36 = decoration(tmp39, obj6, avatarDecoration.asset);
    }
    items4[2] = tmp36;
    let tmp40 = null;
    if (null != status) {
      tmp40 = null;
      if (status !== autoStatusCutout.UNKNOWN) {
        if (statusSizeOverride == null) {
          statusSizeOverride = getStatusSize(NORMAL);
        }
        let tmp43 = null;
        if (null != statusSizeOverride) {
          const obj7 = { size: statusSizeOverride, isMobileOnline: flag, isVROnline: flag2, status, streaming, style: items5 };
          items5 = [tmp3.status, statusStyle];
          tmp43 = obj7;
        }
        let tmp44 = null;
        if (null != tmp43) {
          if (typing) {
            let tmp51;
            if (null != user) {
              const obj8 = { typing, userId: user.id };
              const StatusWithTyping = tmp7(tmp8[15]).StatusWithTyping;
              const merged = Object.assign(tmp43);
              tmp51 = decoration(StatusWithTyping, obj8);
            }
            tmp44 = tmp51;
          }
          const obj9 = {};
          const tmp47 = flag2(status[15]);
          const merged1 = Object.assign(tmp43);
          tmp51 = decoration(tmp47, obj9);
        }
        tmp40 = tmp44;
      }
    }
    items4[3] = tmp40;
    if (deaf) {
      const obj10 = { style: items6, children: decoration(tmp62, obj11) };
      items6 = [, ];
      ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
      obj11 = { size: flag2(status[16]).Sizes.REFRESH_SMALL_16, source: flag2(status[17]), color: flag2(status[6]).unsafe_rawColors.WHITE };
      tmp62 = flag2(status[16]);
      tmp56 = decoration(tmp6, obj10);
    } else if (mute) {
      const obj12 = { style: items7, children: decoration(tmp59, obj13) };
      items7 = [, ];
      ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
      obj13 = { size: flag2(status[16]).Sizes.REFRESH_SMALL_16, source: flag2(status[18]), color: flag2(status[6]).unsafe_rawColors.WHITE };
      tmp59 = flag2(status[16]);
      tmp56 = decoration(tmp6, obj12);
    }
    items4[4] = tmp56;
    obj.children = items4;
    return tmp5(cutout, obj);
  }
  if (null != source) {
    const obj14 = { source, size: NORMAL, animate: flag3 };
    const tmp32 = flag2(status[7]);
    const merged2 = Object.assign(obj5);
    tmp17 = decoration(tmp32, obj14);
  } else if (null != user) {
    const obj15 = { user, guildId, size: NORMAL, animate: flag3 };
    const tmp26 = flag2(status[7]);
    const merged3 = Object.assign(obj5);
    tmp17 = decoration(tmp26, obj15);
  } else if (null != channel) {
    const obj16 = { channel, size: NORMAL, animate: flag3 };
    const tmp20 = flag2(status[7]);
    const merged4 = Object.assign(obj5);
    tmp17 = decoration(tmp20, obj16);
  }
  tmp16 = tmp17;
}));
let size = size_mod;
let result = size.fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default memoResult;
export const AvatarSizes = CutoutableAvatarImage.AvatarSizes;
export { getStatusSize };

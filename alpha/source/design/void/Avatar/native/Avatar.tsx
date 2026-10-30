// Module ID: 15953
// Function ID: 15954
// Name: Avatar
// Dependencies: [19, 17, 1072, 1189, 21, 5009, 575, 14842, 15942, 15943, 9487, 8720, 15954, 9486, 15944, 5631, 11744, 11745, 2]

// Module 15953 (Avatar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8720 */;
import ClipView from "ClipView" /* 9487 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 14842 */;
import Status_StatusUtils from "Status/StatusUtils" /* 15942 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 15943 */;
import react from "react" /* 19 */;
import StatusConstants from "StatusConstants" /* 1189 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

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
const memoResult = react.memo(function Avatar(isMobileOnline) {
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
  let items5;
  let items6;
  let items7;
  let mute;
  let needsOffscreenAlphaCompositing;
  let obj11;
  let obj9;
  let source;
  let statusStyle;
  let streaming;
  let style;
  let tmp15;
  let tmp57;
  let tmp60;
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
    let tmp = flag;
    const tmp2 = status;
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
  ({ avatarDecoration, cutout } = isMobileOnline);
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
  let items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    let cornerRadius;
    let cornerRadius2;
    let diff;
    let height;
    let height2;
    let height3;
    let items;
    let items1;
    let items2;
    let items3;
    let obj12;
    let obj14;
    let tmp;
    let tmp29Result;
    let width;
    let width2;
    let width3;
    if (null != autoStatusCutout) {
      let num = statusSizeOverride;
      let tmp6;
      if (null != status) {
        if (status !== StatusTypes.UNKNOWN) {
          const tmp43 = CutoutableAvatarImage.AVATAR_SIZE_MAP[NORMAL];
          if (num == null) {
            num = getStatusSize(tmp2);
          }
          if (num == null) {
            num = 0;
          }
          const result = num / 4;
          if (tmp5) {
            const obj9 = Status_StatusUtils;
            const statusTypingDimensions = obj9.getStatusTypingDimensions(num);
            ({ width: width3, height: height3 } = statusTypingDimensions);
            const tmp29 = getStatusContainerStyleDefault;
            const sum = height3 + 2 * metroRequire;
            const obj2 = { nativeCutouts: items };
            size = { shape: ClipView.CutoutShape.RoundedRect, x: diff + obj12.getAnimatedTypingTranslateX(tmp29Result.width), y: tmp43 - height3 - metroRequire, width: width3 + 2 * metroRequire, height: sum, cornerRadius: sum / 2 };
            diff = tmp43 - width3 - metroRequire;
            tmp29Result = tmp29(num, flag, flag2);
            items = [size];
            tmp6 = obj2;
            obj12 = Status_StatusUtils;
          } else if (flag2) {
            const obj6 = Status_StatusUtils;
            const vRStatusContainerRect = obj6.getVRStatusContainerRect(num);
            ({ width: width2, height: height2 } = vRStatusContainerRect);
            const obj4 = { nativeCutouts: items1 };
            const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp43 - width2 + result, y: tmp43 - height2 + result, width: width2, height: height2, cornerRadius: cornerRadius2 };
            cornerRadius2 = vRStatusContainerRect.cornerRadius;
            items1 = [size1];
            tmp6 = obj4;
          } else if (flag) {
            const obj3 = Status_StatusUtils;
            const mobileStatusContainerRect = obj3.getMobileStatusContainerRect(num);
            ({ width, height } = mobileStatusContainerRect);
            const obj5 = { nativeCutouts: items2 };
            const size2 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp43 - width + result, y: tmp43 - height + result, width, height, cornerRadius };
            cornerRadius = mobileStatusContainerRect.cornerRadius;
            items2 = [size2];
            tmp6 = obj5;
          } else {
            const sum1 = num / 2 + tmp4;
            const diff1 = tmp43 - sum1 - 2 * result;
            const obj = { nativeCutouts: items3 };
            const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum1 };
            items3 = [point];
            tmp6 = obj;
          }
        }
      }
      tmp = tmp6;
    } else {
      tmp = cutout;
    }
    const obj7 = { cutout: tmp, decorationCutout: obj14.getDecorationCutoutForAvatarCutout(tmp, -decoration.decoration.top) };
    obj14 = avatar_decorations_AvatarDecorationUtils;
    return obj7;
  }, items);
  let tmp6 = cutout;
  let obj = { style: items1, needsOffscreenAlphaCompositing, accessible, accessibilityLabel, children: null };
  ({ cutout: cutout2, decorationCutout } = memo);
  const tmp5 = closure_9;
  items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  if (flag4) {
    let tmp11Result;
    let num = 4;
    let sum = tmp7(tmp8[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    let obj2 = { style: null };
    if (isStageCall) {
      let items2 = [tmp3.stageSpeaking, ];
      size = { width: sum, height: sum, borderRadius: sum / 2 };
      items2[1] = size;
      obj2.style = items2;
      tmp11Result = tmp11(flag2(tmp8[12]), obj2);
    } else {
      let items3 = [flag5 ? tmp3.soundboard : tmp3.speaking, ];
      let size1 = { width: sum, height: sum, borderRadius: sum / 2 };
      items3[1] = size1;
      obj2.style = items3;
      tmp11Result = tmp11(tmp6, obj2);
    }
    tmp9 = tmp11Result;
  } else {
    tmp9 = null;
  }
  const items4 = [tmp9, , , , ];
  let obj3 = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
  if (null == source) {
    let tmp14;
    let tmp54;
    if (null == user) {
      tmp14 = null;
    }
    items4[1] = tmp14;
    let tmp34 = null;
    if (null != avatarDecoration) {
      let obj4 = { size: tmp7Result.getDecorationSizeForAvatarSize(NORMAL), avatarDecoration, decorationStyle: tmp3.decoration, animate: flag3, cutout: decorationCutout };
      const tmp37 = flag2(status[13]);
      tmp7Result = flag(status[11]);
      tmp34 = decoration(tmp37, obj4, avatarDecoration.asset);
    }
    items4[2] = tmp34;
    let tmp38 = null;
    if (null != status) {
      tmp38 = null;
      if (status !== autoStatusCutout.UNKNOWN) {
        if (statusSizeOverride == null) {
          statusSizeOverride = getStatusSize(NORMAL);
        }
        let tmp41 = null;
        if (null != statusSizeOverride) {
          let obj5 = { size: statusSizeOverride, isMobileOnline: flag, isVROnline: flag2, status, streaming, style: items5 };
          items5 = [tmp3.status, statusStyle];
          tmp41 = obj5;
        }
        let tmp42 = null;
        if (null != tmp41) {
          if (typing) {
            let tmp49;
            if (null != user) {
              let obj6 = { typing, userId: user.id };
              const StatusWithTyping = tmp7(tmp8[14]).StatusWithTyping;
              const merged = Object.assign(tmp41);
              tmp49 = decoration(StatusWithTyping, obj6);
            }
            tmp42 = tmp49;
          }
          let tmp43 = decoration;
          let obj7 = {};
          const tmp45 = flag2(status[14]);
          const merged1 = Object.assign(tmp41);
          tmp49 = decoration(tmp45, obj7);
        }
        tmp38 = tmp42;
      }
    }
    items4[3] = tmp38;
    if (deaf) {
      const obj8 = { style: items6, children: decoration(tmp60, obj9) };
      items6 = [, ];
      ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
      obj9 = { size: flag2(tmp8[15]).Sizes.REFRESH_SMALL_16, source: flag2(tmp8[16]), color: flag2(tmp8[6]).unsafe_rawColors.WHITE };
      tmp60 = flag2(status[15]);
      tmp54 = decoration(tmp6, obj8);
    } else if (mute) {
      const obj10 = { style: items7, children: decoration(tmp57, obj11) };
      items7 = [, ];
      ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
      obj11 = { size: flag2(status[15]).Sizes.REFRESH_SMALL_16, source: flag2(status[17]), color: flag2(status[6]).unsafe_rawColors.WHITE };
      tmp57 = flag2(status[15]);
      tmp54 = decoration(tmp6, obj10);
    }
    items4[4] = tmp54;
    obj.children = items4;
    return tmp5(tmp6, obj);
  }
  if (null != source) {
    let tmp29 = flag2;
    let obj12 = { source, size: NORMAL, animate: flag3 };
    const tmp30 = flag2(status[7]);
    const merged2 = Object.assign(obj3);
    tmp15 = decoration(tmp30, obj12);
  } else if (null != user) {
    const obj13 = { user, guildId, size: NORMAL, animate: flag3 };
    const tmp24 = flag2(status[7]);
    const merged3 = Object.assign(obj3);
    tmp15 = decoration(tmp24, obj13);
  } else if (null != channel) {
    let obj14 = { channel, size: NORMAL, animate: flag3 };
    const tmp18 = flag2(status[7]);
    const merged4 = Object.assign(obj3);
    tmp15 = decoration(tmp18, obj14);
  }
  tmp14 = tmp15;
});
let size = size_mod;
let result = size.fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default memoResult;
export const AvatarSizes = CutoutableAvatarImage.AvatarSizes;
export { getStatusSize };

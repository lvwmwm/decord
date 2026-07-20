// Module ID: 12896
// Function ID: 98418
// Name: getStatusSize
// Dependencies: []

// Module 12896 (getStatusSize)
function getStatusSize(arg0) {
  if (arg1(dependencyMap[7]).AvatarSizes.XXSMALL !== arg0) {
    if (arg1(dependencyMap[7]).AvatarSizes.XSMALL !== arg0) {
      if (arg1(dependencyMap[7]).AvatarSizes.XSMALL_20 !== arg0) {
        if (arg1(dependencyMap[7]).AvatarSizes.SMALL !== arg0) {
          if (arg1(dependencyMap[7]).AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return closure_7.REFRESH_MEDIUM_10;
          } else {
            if (arg1(dependencyMap[7]).AvatarSizes.NORMAL !== arg0) {
              if (arg1(dependencyMap[7]).AvatarSizes.TABS_22 !== arg0) {
                if (arg1(dependencyMap[7]).AvatarSizes.LARGE !== arg0) {
                  if (arg1(dependencyMap[7]).AvatarSizes.LARGE_48 !== arg0) {
                    if (arg1(dependencyMap[7]).AvatarSizes.XLARGE !== arg0) {
                      if (arg1(dependencyMap[7]).AvatarSizes.XLARGE_72 !== arg0) {
                        if (arg1(dependencyMap[7]).AvatarSizes.XXLARGE !== arg0) {
                          if (arg1(dependencyMap[7]).AvatarSizes.PROFILE !== arg0) {
                            if (arg1(dependencyMap[7]).AvatarSizes.YOUBAR_60 !== arg0) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return closure_7.LARGE;
                  }
                }
              }
            }
            return closure_7.MEDIUM;
          }
        }
      }
    }
  }
  return closure_7.SMALL;
}
function getAvatarDecorationMargin(closure_10) {
  const decorationSizeForAvatarSize = arg1(dependencyMap[11]).getDecorationSizeForAvatarSize(closure_10);
  return (decorationSizeForAvatarSize - arg1(dependencyMap[7]).styles[closure_10].width) / 2;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const StatusTypes = arg1(dependencyMap[2]).StatusTypes;
({ STATUS_PADDING: closure_6, StatusSizes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles((closure_10) => {
  let obj = { status: {} };
  obj = { "Bool(false)": 6, "Bool(false)": 85, "Bool(false)": null, "Bool(false)": "\u{1F482}\u200D\u2640\uFE0F", "Bool(false)": true, borderColor: importDefault(dependencyMap[6]).colors.STATUS_SPEAKING };
  obj.speaking = obj;
  obj.stageSpeaking = { "Bool(false)": 6, "Bool(false)": 85, "Bool(false)": null };
  obj = { 1364605794: "center", -1436482811: "#FFEAA0", 1672104017: null, 1403688096: "heading-xl/semibold", 102958628: "text-strong", 844301994: "header", 46208283: "heading-xl/medium", -2049548620: "mobile-text-heading-primary", backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400, borderRadius: importDefault(dependencyMap[6]).radii.md };
  obj.voiceStatus = obj;
  obj.decoration = { position: "absolute", top: -getAvatarDecorationMargin(closure_10), left: -getAvatarDecorationMargin(closure_10) };
  obj.container = { position: "relative" };
  return obj;
});
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((isMobileOnline) => {
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
  let mute;
  let needsOffscreenAlphaCompositing;
  let source;
  let statusStyle;
  let streaming;
  let style;
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
  const arg1 = flag;
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  const status = isMobileOnline.status;
  const dependencyMap = status;
  let NORMAL = isMobileOnline.size;
  if (NORMAL === undefined) {
    NORMAL = arg1(dependencyMap[7]).AvatarSizes.NORMAL;
  }
  let flag3 = isMobileOnline.animate;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isMobileOnline.speaking;
  if (flag4 === undefined) {
    flag4 = false;
  }
  ({ avatarDecoration, cutout } = isMobileOnline);
  const View = cutout;
  const autoStatusCutout = isMobileOnline.autoStatusCutout;
  const StatusTypes = autoStatusCutout;
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
  const statusSizeOverride = isMobileOnline.statusSizeOverride;
  let tmp3;
  tmp3 = callback(NORMAL);
  const items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    let avatarSize;
    let height;
    let height2;
    let height3;
    let isMobileOnline;
    let isVROnline;
    let statusSizeOverride;
    let userStatus;
    let width;
    let width2;
    let width3;
    if (null != autoStatusCutout) {
      let obj = { avatarSize: NORMAL, userStatus: status, isMobileOnline: flag, isVROnline: flag2 };
      if (true === autoStatusCutout) {
        let padding = typing;
      } else {
        padding = autoStatusCutout.padding;
      }
      obj.padding = padding;
      obj.typing = typing;
      obj.statusSizeOverride = statusSizeOverride;
      ({ avatarSize, userStatus, isMobileOnline, isVROnline, statusSizeOverride } = obj);
      let num = null != userStatus;
      let tmp12;
      if (num) {
        num = autoStatusCutout.UNKNOWN;
        if (userStatus !== num) {
          userStatus = flag(status[7]).AVATAR_SIZE_MAP[avatarSize];
          if (null == statusSizeOverride) {
            statusSizeOverride = callback(avatarSize);
          }
          num = 0;
          if (null != statusSizeOverride) {
            num = statusSizeOverride;
          }
          let num3 = num / 4;
          if (tmp11) {
            num3 = 8;
            const statusTypingDimensions = flag(status[8]).getStatusTypingDimensions(num);
            ({ width: width3, height: height3 } = statusTypingDimensions);
            let tmp30 = null != isMobileOnline;
            const obj10 = flag(status[8]);
            if (tmp30) {
              tmp30 = isMobileOnline;
            }
            const tmp29 = flag2(status[9]);
            const tmp31 = null != isVROnline && isVROnline;
            num = 2;
            const sum = height3 + 2 * typing;
            obj = {};
            obj = { shape: flag(status[10]).CutoutShape.RoundedRect };
            const diff = userStatus - width3 - typing;
            const tmp29Result = flag2(status[9])(num, tmp30, null != isVROnline && isVROnline);
            obj.x = diff + flag(status[num3]).getAnimatedTypingTranslateX(tmp29Result.width);
            obj.y = userStatus - height3 - typing;
            obj.width = width3 + 2 * typing;
            obj.height = sum;
            obj.cornerRadius = sum / 2;
            const items = [obj];
            obj.nativeCutouts = items;
            tmp12 = obj;
            const obj13 = flag(status[num3]);
          } else {
            if (isVROnline) {
              let obj6 = flag(status[8]);
              const vRStatusContainerRect = obj6.getVRStatusContainerRect(num);
              ({ width: width2, height: height2 } = vRStatusContainerRect);
              const obj1 = {};
              const obj2 = { shape: flag(status[10]).CutoutShape.RoundedRect, x: userStatus - width2 + num3, y: userStatus - height2 + num3, width: width2, height: height2, cornerRadius: vRStatusContainerRect.cornerRadius };
              const items1 = [obj2];
              obj1.nativeCutouts = items1;
              tmp12 = obj1;
            } else if (!isMobileOnline) {
              const sum1 = num / 2 + tmp10;
              const diff1 = userStatus - sum1 - 2 * num3;
              let obj3 = {};
              const obj4 = { shape: flag(status[10]).CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum1 };
              const items2 = [obj4];
              obj3.nativeCutouts = items2;
              tmp12 = obj3;
            }
            obj3 = flag(status[8]);
            const mobileStatusContainerRect = obj3.getMobileStatusContainerRect(num);
            ({ width, height } = mobileStatusContainerRect);
            const obj5 = {};
            obj6 = { shape: flag(status[10]).CutoutShape.RoundedRect, x: userStatus - width + num3, y: userStatus - height + num3, width, height, cornerRadius: mobileStatusContainerRect.cornerRadius };
            const items3 = [obj6];
            obj5.nativeCutouts = items3;
            tmp12 = obj5;
          }
        }
      }
    } else {
      const obj7 = { cutout, decorationCutout: flag(status[11]).getDecorationCutoutForAvatarCutout(cutout, -tmp3.decoration.top) };
      return obj7;
    }
  }, items);
  let merged = {};
  ({ cutout: cutout2, decorationCutout } = memo);
  const items1 = [arg1(dependencyMap[7]).styles[NORMAL], tmp3.container, style];
  merged.style = items1;
  merged.needsOffscreenAlphaCompositing = needsOffscreenAlphaCompositing;
  merged.accessible = accessible;
  merged.accessibilityLabel = accessibilityLabel;
  if (!flag4) {
    const items2 = [null, , , , ];
    merged = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
    if (null == source) {
      if (null == user) {
        if (null == channel) {
          items2[1] = null;
          let tmp39 = null;
          if (null != avatarDecoration) {
            const obj = {};
            let obj10 = arg1(dependencyMap[11]);
            obj.size = obj10.getDecorationSizeForAvatarSize(NORMAL);
            obj.avatarDecoration = avatarDecoration;
            obj.decorationStyle = tmp3.decoration;
            obj.animate = flag3;
            obj.cutout = decorationCutout;
            tmp39 = tmp3(importDefault(dependencyMap[13]), obj, avatarDecoration.asset);
            const tmp43 = importDefault(dependencyMap[13]);
          }
          items2[2] = tmp39;
          let tmp45 = null;
          if (null != status) {
            tmp45 = null;
            if (status !== StatusTypes.UNKNOWN) {
              if (null != statusSizeOverride) {
                let tmp48 = statusSizeOverride;
              } else {
                tmp48 = getStatusSize(NORMAL);
              }
              let id = null;
              if (null != tmp48) {
                const obj1 = { size: tmp48, isMobileOnline: flag, isVROnline: flag2, status, streaming };
                const items3 = [tmp3.status, statusStyle];
                obj1.style = items3;
                id = obj1;
              }
              if (null == id) {
                tmp45 = null;
              } else {
                if (!typing) {
                  const obj2 = {};
                  merged = Object.assign(id);
                  let tmp58 = tmp3(importDefault(dependencyMap[14]), obj2);
                  const tmp54 = importDefault(dependencyMap[14]);
                }
                const obj3 = {};
                const merged1 = Object.assign(id);
                obj3["typing"] = typing;
                id = user.id;
                user = "userId";
                obj3["userId"] = id;
                tmp58 = tmp3(arg1(dependencyMap[14]).StatusWithTyping, obj3);
              }
            }
          }
          items2[3] = tmp45;
          if (deaf) {
            const obj4 = {};
            const items4 = [, ];
            ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
            obj4.style = items4;
            const obj5 = { size: importDefault(dependencyMap[15]).Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[16]), color: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE };
            obj4.children = tmp3(importDefault(dependencyMap[15]), obj5);
            let tmp66 = tmp3(View, obj4);
            const tmp76 = importDefault(dependencyMap[15]);
          } else if (mute) {
            const obj6 = {};
            const items5 = [, ];
            ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
            obj6.style = items5;
            const obj7 = { size: importDefault(dependencyMap[15]).Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[17]), color: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE };
            obj6.children = tmp3(importDefault(dependencyMap[15]), obj7);
            tmp66 = tmp3(View, obj6);
            const tmp71 = importDefault(dependencyMap[15]);
          }
          items2[4] = tmp66;
          merged.children = items2;
          return closure_9(View, merged);
        }
      }
    }
    if (null != source) {
      const obj8 = { source, size: NORMAL, animate: flag3 };
      merged = Object.assign(merged);
      let tmp17 = tmp3(importDefault(dependencyMap[7]), obj8);
      const tmp35 = importDefault(dependencyMap[7]);
    } else if (null != user) {
      const obj9 = { user, guildId, size: NORMAL, animate: flag3 };
      const merged2 = Object.assign(merged);
      tmp17 = tmp3(importDefault(dependencyMap[7]), obj9);
      const tmp28 = importDefault(dependencyMap[7]);
    } else if (null != channel) {
      obj10 = { channel, size: NORMAL, animate: flag3 };
      const merged3 = Object.assign(merged);
      tmp17 = tmp3(importDefault(dependencyMap[7]), obj10);
      const tmp21 = importDefault(dependencyMap[7]);
    }
  } else {
    const sum = arg1(dependencyMap[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    if (isStageCall) {
      const obj11 = {};
      const items6 = [tmp3.stageSpeaking, ];
      const obj12 = { width: sum, height: sum, borderRadius: sum / 2 };
      items6[1] = obj12;
      obj11.style = items6;
      let tmp10Result = tmp10(importDefault(dependencyMap[12]), obj11);
    } else {
      const obj13 = {};
      const items7 = [tmp3.speaking, ];
      const obj14 = { width: sum, height: sum, borderRadius: sum / 2 };
      items7[1] = obj14;
      obj13.style = items7;
      tmp10Result = tmp10(View, obj13);
    }
  }
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default memoResult;
export const AvatarSizes = arg1(dependencyMap[7]).AvatarSizes;
export { getStatusSize };

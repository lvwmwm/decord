// Module ID: 13026
// Function ID: 100652
// Name: getStatusSize
// Dependencies: [31, 27, 653, 1274, 33, 4130, 689, 11951, 13015, 13016, 7873, 7838, 13027, 7872, 13017, 4545, 10592, 10593, 2]

// Module 13026 (getStatusSize)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { StatusTypes } from "ME";
import STATUS_PADDING from "STATUS_PADDING";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getStatusSize(arg0) {
  if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XXSMALL !== arg0) {
    if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XSMALL !== arg0) {
      if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XSMALL_20 !== arg0) {
        if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.SMALL !== arg0) {
          if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return closure_7.REFRESH_MEDIUM_10;
          } else {
            if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.NORMAL !== arg0) {
              if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.TABS_22 !== arg0) {
                if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.LARGE !== arg0) {
                  if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.LARGE_48 !== arg0) {
                    if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XLARGE !== arg0) {
                      if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XLARGE_72 !== arg0) {
                        if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XXLARGE !== arg0) {
                          if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.PROFILE !== arg0) {
                            if (require(11951) /* StaticNativeCutoutAvatarImage */.AvatarSizes.YOUBAR_60 !== arg0) {
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
  const decorationSizeForAvatarSize = require(7838) /* getDecorationSizeForAvatarSize */.getDecorationSizeForAvatarSize(closure_10);
  return (decorationSizeForAvatarSize - require(11951) /* StaticNativeCutoutAvatarImage */.styles[closure_10].width) / 2;
}
({ STATUS_PADDING: closure_6, StatusSizes: closure_7 } = STATUS_PADDING);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((closure_10) => {
  let obj = { status: { position: "absolute", right: -3, bottom: -3 } };
  obj = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: importDefault(689).colors.STATUS_SPEAKING };
  obj.speaking = obj;
  obj.stageSpeaking = { position: "absolute", right: -2, bottom: -2 };
  obj = { width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: importDefault(689).unsafe_rawColors.RED_400, borderRadius: importDefault(689).radii.md, right: 0, bottom: 0 };
  obj.voiceStatus = obj;
  obj.decoration = { position: "absolute", top: -getAvatarDecorationMargin(closure_10), left: -getAvatarDecorationMargin(closure_10) };
  obj.container = { position: "relative" };
  return obj;
});
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
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const status = isMobileOnline.status;
  let NORMAL = isMobileOnline.size;
  if (NORMAL === undefined) {
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
  const statusSizeOverride = isMobileOnline.statusSizeOverride;
  let callback;
  const tmp3 = callback2(NORMAL);
  callback = tmp3;
  let items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
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
            statusSizeOverride = outer1_11(avatarSize);
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
      const obj7 = { cutout, decorationCutout: flag(status[11]).getDecorationCutoutForAvatarCutout(cutout, -_undefined.decoration.top) };
      return obj7;
    }
  }, items);
  let merged = {};
  ({ cutout: cutout2, decorationCutout } = memo);
  let items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  merged.style = items1;
  merged.needsOffscreenAlphaCompositing = needsOffscreenAlphaCompositing;
  merged.accessible = accessible;
  merged.accessibilityLabel = accessibilityLabel;
  if (!flag4) {
    let items2 = [null, , , , ];
    merged = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
    if (null == source) {
      if (null == user) {
        if (null == channel) {
          items2[1] = null;
          let tmp39 = null;
          if (null != avatarDecoration) {
            let obj = {};
            let obj10 = flag(status[11]);
            obj.size = obj10.getDecorationSizeForAvatarSize(NORMAL);
            obj.avatarDecoration = avatarDecoration;
            obj.decorationStyle = tmp3.decoration;
            obj.animate = flag3;
            obj.cutout = decorationCutout;
            tmp39 = callback(flag2(status[13]), obj, avatarDecoration.asset);
            const tmp43 = flag2(status[13]);
          }
          items2[2] = tmp39;
          let tmp45 = null;
          if (null != status) {
            tmp45 = null;
            if (status !== autoStatusCutout.UNKNOWN) {
              if (null != statusSizeOverride) {
                let tmp48 = statusSizeOverride;
              } else {
                tmp48 = getStatusSize(NORMAL);
              }
              let id = null;
              if (null != tmp48) {
                let obj1 = { size: tmp48, isMobileOnline: flag, isVROnline: flag2, status, streaming };
                let items3 = [tmp3.status, statusStyle];
                obj1.style = items3;
                id = obj1;
              }
              if (null == id) {
                tmp45 = null;
              } else {
                if (!typing) {
                  let obj2 = {};
                  merged = Object.assign(id);
                  let tmp58 = callback(flag2(status[14]), obj2);
                  const tmp54 = flag2(status[14]);
                }
                let obj3 = {};
                const merged1 = Object.assign(id);
                obj3["typing"] = typing;
                id = user.id;
                user = "userId";
                obj3["userId"] = id;
                tmp58 = callback(flag(status[14]).StatusWithTyping, obj3);
              }
            }
          }
          items2[3] = tmp45;
          if (deaf) {
            let obj4 = {};
            const items4 = [, ];
            ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
            obj4.style = items4;
            let obj5 = { size: flag2(status[15]).Sizes.REFRESH_SMALL_16, source: flag2(status[16]), color: flag2(status[6]).unsafe_rawColors.WHITE };
            obj4.children = callback(flag2(status[15]), obj5);
            let tmp66 = callback(cutout, obj4);
            const tmp76 = flag2(status[15]);
          } else if (mute) {
            let obj6 = {};
            const items5 = [, ];
            ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
            obj6.style = items5;
            let obj7 = { size: flag2(status[15]).Sizes.REFRESH_SMALL_16, source: flag2(status[17]), color: flag2(status[6]).unsafe_rawColors.WHITE };
            obj6.children = callback(flag2(status[15]), obj7);
            tmp66 = callback(cutout, obj6);
            const tmp71 = flag2(status[15]);
          }
          items2[4] = tmp66;
          merged.children = items2;
          return closure_9(cutout, merged);
        }
      }
    }
    if (null != source) {
      const obj8 = { source, size: NORMAL, animate: flag3 };
      merged = Object.assign(merged);
      let tmp17 = callback(flag2(status[7]), obj8);
      const tmp35 = flag2(status[7]);
    } else if (null != user) {
      const obj9 = { user, guildId, size: NORMAL, animate: flag3 };
      const merged2 = Object.assign(merged);
      tmp17 = callback(flag2(status[7]), obj9);
      const tmp28 = flag2(status[7]);
    } else if (null != channel) {
      obj10 = { channel, size: NORMAL, animate: flag3 };
      const merged3 = Object.assign(merged);
      tmp17 = callback(flag2(status[7]), obj10);
      const tmp21 = flag2(status[7]);
    }
  } else {
    let sum = flag(status[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    if (isStageCall) {
      const obj11 = {};
      const items6 = [tmp3.stageSpeaking, ];
      const obj12 = { width: sum, height: sum, borderRadius: sum / 2 };
      items6[1] = obj12;
      obj11.style = items6;
      let tmp10Result = tmp10(flag2(status[12]), obj11);
    } else {
      let obj13 = {};
      const items7 = [tmp3.speaking, ];
      const obj14 = { width: sum, height: sum, borderRadius: sum / 2 };
      items7[1] = obj14;
      obj13.style = items7;
      tmp10Result = tmp10(cutout, obj13);
    }
  }
});
const result = require("ME").fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default memoResult;
export const AvatarSizes = require("StaticNativeCutoutAvatarImage").AvatarSizes;
export { getStatusSize };

// Module ID: 7025
// Function ID: 56390
// Name: getURL
// Dependencies: [57, 5, 27, 3772, 4110, 477, 22, 1392, 7026, 1447, 3974, 7065, 7070, 2]

// Module 7025 (getURL)
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "get ActivityIndicator";
import createText from "createText";
import importDefaultResult from "set";

let closure_5;
let closure_6;
const require = arg1;
function getURL(outer1_6) {
  if (null == outer1_6) {
    convert = convert.convert;
    const _HermesInternal = HermesInternal;
    let str = "asset:/emoji-" + convert.toCodePoint(outer1_6) + ".png";
  } else {
    str = "";
    const obj = require(477) /* set */;
  }
  return str;
}
async function _getEmojiColors(arg0, arg1) {
  const id = arg0.id;
  if (null != id) {
    let obj = outer2_1(outer2_2[7]);
    obj = { id, size: 32, animated: false };
    let emojiURL = obj.getEmojiURL(obj);
  } else {
    emojiURL = outer2_8(tmp);
  }
  if ("" === emojiURL) {
    const ImageManager = outer2_5.ImageManager;
    const _HermesInternal = HermesInternal;
    emojiURL = "data:image/png;base64," + yield ImageManager.getEmojiBase64(arg0.name, outer2_0(outer2_2[8]).EMOJI_IN_ANIMATION_SIZE);
  }
  const arr = yield outer2_0(outer2_2[9]).getPaletteForAvatar(emojiURL);
  let mapped;
  if (null != arr) {
    mapped = arr.map((arg0) => {
      let tmp2;
      let tmp3;
      let tmp4;
      [tmp2, tmp3, tmp4] = outer3_3(arg0, 3);
      const tmp = outer3_3(arg0, 3);
      return outer3_0(outer3_2[10]).rgbToHex(tmp2, tmp3, tmp4);
    });
  }
  return mapped;
}
({ NativeModules: closure_5, processColor: closure_6 } = get_ActivityIndicator);
let obj = {
  getURL: require("set").makeMemoizer(getURL),
  filterUnsupportedEmojis(emojis) {
    let found = emojis;
    if (!obj.isAndroid()) {
      found = importDefault(22).filter(emojis, (unicodeVersion) => {
        unicodeVersion = unicodeVersion.unicodeVersion;
        const systemVersionMajor = outer1_0(outer1_2[4]).getSystemVersionMajor();
        const obj = outer1_0(outer1_2[4]);
        const systemVersionMinor = outer1_0(outer1_2[4]).getSystemVersionMinor();
        let flag = true;
        if (unicodeVersion > 8) {
          if (9 === unicodeVersion) {
            let tmp21 = systemVersionMajor > 10;
            if (!tmp21) {
              let tmp22 = 10 === systemVersionMajor;
              if (tmp22) {
                tmp22 = systemVersionMinor >= 2;
              }
              tmp21 = tmp22;
            }
            flag = tmp21;
          } else if (10 === unicodeVersion) {
            let tmp19 = systemVersionMajor > 11;
            if (!tmp19) {
              let tmp20 = 11 === systemVersionMajor;
              if (tmp20) {
                tmp20 = systemVersionMinor >= 1;
              }
              tmp19 = tmp20;
            }
            flag = tmp19;
          } else if (11 === unicodeVersion) {
            let tmp17 = systemVersionMajor > 12;
            if (!tmp17) {
              let tmp18 = 12 === systemVersionMajor;
              if (tmp18) {
                tmp18 = systemVersionMinor >= 1;
              }
              tmp17 = tmp18;
            }
            flag = tmp17;
          } else {
            if (12 !== unicodeVersion) {
              if (12.1 !== unicodeVersion) {
                if (13 === unicodeVersion) {
                  let tmp13 = systemVersionMajor > 14;
                  if (!tmp13) {
                    let tmp14 = 14 === systemVersionMajor;
                    if (tmp14) {
                      tmp14 = systemVersionMinor >= 2;
                    }
                    tmp13 = tmp14;
                  }
                  flag = tmp13;
                } else if (13.1 === unicodeVersion) {
                  let tmp11 = systemVersionMajor > 14;
                  if (!tmp11) {
                    let tmp12 = 14 === systemVersionMajor;
                    if (tmp12) {
                      tmp12 = systemVersionMinor >= 5;
                    }
                    tmp11 = tmp12;
                  }
                  flag = tmp11;
                } else if (14 === unicodeVersion) {
                  let tmp9 = systemVersionMajor > 15;
                  if (!tmp9) {
                    tmp9 = 15 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp10 = 15 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp9;
                } else if (15 === unicodeVersion) {
                  let tmp7 = systemVersionMajor > 16;
                  if (!tmp7) {
                    tmp7 = 16 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp8 = 16 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp7;
                } else if (15.1 === unicodeVersion) {
                  let tmp5 = systemVersionMajor > 17;
                  if (!tmp5) {
                    tmp5 = 17 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp6 = 17 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp5;
                } else {
                  flag = false;
                  if (16 === unicodeVersion) {
                    let tmp4 = systemVersionMajor > 18;
                    if (!tmp4) {
                      tmp4 = 18 === systemVersionMajor && systemVersionMinor >= 4;
                      const tmp3 = 18 === systemVersionMajor && systemVersionMinor >= 4;
                    }
                    flag = tmp4;
                  }
                }
              }
            }
            let tmp15 = systemVersionMajor > 13;
            if (!tmp15) {
              let tmp16 = 13 === systemVersionMajor;
              if (tmp16) {
                tmp16 = systemVersionMinor >= 2;
              }
              tmp15 = tmp16;
            }
            flag = tmp15;
          }
        }
        return flag;
      });
      const arr = importDefault(22);
    }
    return found;
  },
  applyPlatformToThemedEmojiColorPalette(arg0) {
    let DARK;
    let LIGHT;
    let palette;
    let shouldProcessMobileColors;
    ({ palette, shouldProcessMobileColors } = arg0);
    if (shouldProcessMobileColors === undefined) {
      shouldProcessMobileColors = false;
    }
    if (shouldProcessMobileColors) {
      if (null != palette) {
        ({ LIGHT, DARK } = palette);
        let obj = {};
        obj = {};
        let accentColor;
        if (null != LIGHT) {
          accentColor = LIGHT.accentColor;
        }
        obj.accentColor = closure_6(accentColor);
        let backgroundColor;
        if (null != LIGHT) {
          backgroundColor = LIGHT.backgroundColor;
        }
        obj.backgroundColor = closure_6(backgroundColor);
        let highlightColor;
        if (null != LIGHT) {
          highlightColor = LIGHT.highlightColor;
        }
        obj.highlightColor = closure_6(highlightColor);
        let opacity;
        if (null != LIGHT) {
          opacity = LIGHT.opacity;
        }
        obj.opacity = opacity;
        obj.LIGHT = obj;
        obj = {};
        let accentColor1;
        if (null != DARK) {
          accentColor1 = DARK.accentColor;
        }
        obj.accentColor = closure_6(accentColor1);
        let backgroundColor1;
        if (null != DARK) {
          backgroundColor1 = DARK.backgroundColor;
        }
        obj.backgroundColor = closure_6(backgroundColor1);
        let highlightColor1;
        if (null != DARK) {
          highlightColor1 = DARK.highlightColor;
        }
        obj.highlightColor = closure_6(highlightColor1);
        let opacity1;
        if (null != DARK) {
          opacity1 = DARK.opacity;
        }
        obj.opacity = opacity1;
        obj.DARK = obj;
        return obj;
      }
    }
    return palette;
  },
  getEmojiColors() {
    return _getEmojiColors(...arguments);
  },
  triggerFullscreenAnimation(arg0) {
    let channelId;
    let emoji;
    let messageId;
    ({ channelId, messageId, emoji } = arg0);
    const result = require(7065) /* onDismiss */.openBurstReactionFirstSendActionSheet({ channelId, messageId, emoji });
  }
};
let result = require("get ActivityIndicator").fileFinishedImporting("utils/EmojiUtilsPlatformed.native.tsx");

export default obj;

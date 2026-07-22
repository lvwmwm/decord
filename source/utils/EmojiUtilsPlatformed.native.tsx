// Module ID: 7020
// Function ID: 56356
// Name: getURL
// Dependencies: []

// Module 7020 (getURL)
function getURL(closure_6) {
  if (null == closure_6) {
    const convert = convert.convert;
    const _HermesInternal = HermesInternal;
    let str = "asset:/emoji-" + convert.toCodePoint(closure_6) + ".png";
  } else {
    str = "";
    const obj = arg1(dependencyMap[5]);
  }
  return str;
}
async function _getEmojiColors(id, arg1) {
  id = id.id;
  if (null != id) {
    let obj = callback2(closure_2[7]);
    obj = { ao: null, accessible: null, hasDiversityParent: null, id };
    let emojiURL = obj.getEmojiURL(obj);
  } else {
    emojiURL = callback3(tmp);
  }
  if ("" === emojiURL) {
    const ImageManager = ImageManager.ImageManager;
    const _HermesInternal = HermesInternal;
    emojiURL = "data:image/png;base64," + yield ImageManager.getEmojiBase64(id.name, closure_0(closure_2[8]).EMOJI_IN_ANIMATION_SIZE);
  }
  const arr = yield callback(closure_2[9]).getPaletteForAvatar(emojiURL);
  let mapped;
  if (null != arr) {
    mapped = arr.map((arg0) => {
      let tmp2;
      let tmp3;
      let tmp4;
      [tmp2, tmp3, tmp4] = callback2(arg0, 3);
      const tmp = callback2(arg0, 3);
      return callback(closure_2[10]).rgbToHex(tmp2, tmp3, tmp4);
    });
  }
  return mapped;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ NativeModules: closure_5, processColor: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const obj = {};
const tmp2 = arg1(dependencyMap[2]);
obj.getURL = importDefault(dependencyMap[12]).makeMemoizer(getURL);
obj.filterUnsupportedEmojis = function filterUnsupportedEmojis(emojis) {
  let found = emojis;
  if (!obj.isAndroid()) {
    found = importDefault(dependencyMap[6]).filter(emojis, (unicodeVersion) => {
      unicodeVersion = unicodeVersion.unicodeVersion;
      const systemVersionMajor = callback(closure_2[4]).getSystemVersionMajor();
      const obj = callback(closure_2[4]);
      const systemVersionMinor = callback(closure_2[4]).getSystemVersionMinor();
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
    const arr = importDefault(dependencyMap[6]);
  }
  return found;
};
obj.applyPlatformToThemedEmojiColorPalette = function applyPlatformToThemedEmojiColorPalette(arg0) {
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
};
obj.getEmojiColors = function getEmojiColors() {
  return _getEmojiColors(...arguments);
};
obj.triggerFullscreenAnimation = function triggerFullscreenAnimation(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  const result = arg1(dependencyMap[11]).openBurstReactionFirstSendActionSheet({ channelId, messageId, emoji });
};
const importDefaultResult = importDefault(dependencyMap[12]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("utils/EmojiUtilsPlatformed.native.tsx");

export default obj;

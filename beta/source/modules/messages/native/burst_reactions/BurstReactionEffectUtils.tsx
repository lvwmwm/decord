// Module ID: 8031
// Function ID: 8032
// Name: burst_reactions/BurstReactionEffectUtils
// Dependencies: [5, 32, 19, 17, 558, 568, 4417, 8032, 1401, 1368, 8069, 2]

// Module 8031 (burst_reactions/BurstReactionEffectUtils)
import EmojiUtils from "EmojiUtils" /* 4417 */;
import getBurstAnimation from "getBurstAnimation" /* 8032 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function generateAnimationSource(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _generateAnimationSource(arg0, value) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp5;
          closure_133_0 = asyncGeneratorStep;
          closure_133_1 = undefined;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          closure_133_8 = undefined;
          closure_133_9 = undefined;
          closure_133_10 = undefined;
          closure_133_11 = undefined;
          c8 = 1;
          const obj6 = {};
          const merged = Object.assign(asyncGeneratorStep);
          obj6.animated = false;
          const emojiUrl = EmojiUtils.getEmojiUrl(obj6, 128);
          c4 = emojiUrl;
          if (emojiUrl == null) {
            c4 = "";
          }
          closure_133_2 = c4;
          const obj12 = getBurstAnimation;
          c9 = 2;
          c10 = 1;
          const obj7 = { value: obj12.getBurstAnimation(closure_0, closure_1, asyncGeneratorStep.name, closure_3), done: false };
          return obj7;
        }
      } else if (1 === tmp8) {
        c8 = 0;
        c10 = 3;
        return { value: null, done: true };
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_133_3 = value;
          if ("" !== closure_133_2) {
            closure_133_1 = closure_134_0(closure_134_1[8]).makeSource(closure_133_2);
            const ImageManager3 = closure_134_5.ImageManager;
            c9 = 3;
            c10 = 1;
            const obj10 = { value: ImageManager3.getAvatarBase64(closure_133_1), done: false };
            return obj10;
          } else {
            const ImageManager2 = closure_134_5.ImageManager;
            c9 = 4;
            c10 = 1;
            const obj11 = { value: ImageManager2.getEmojiBase64(closure_133_0.name, 128), done: false };
            return obj11;
          }
        }
      } else {
        if (3 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_133_4 = value;
            const _HermesInternal2 = HermesInternal;
            closure_133_3.assets[0].p = "data:image/png;base64," + closure_133_4;
          }
        } else if (4 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            const _HermesInternal = HermesInternal;
            closure_133_5 = "data:image/png;base64," + value;
            closure_133_3.assets[0].p = closure_133_5;
            closure_133_1 = closure_134_0(closure_134_1[8]).makeSource(closure_133_5);
            const obj3 = closure_134_0(closure_134_1[8]);
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_133_7 = value;
          closure_133_8 = closure_134_3(closure_133_7[0], 3);
          closure_133_9 = closure_133_8[0];
          closure_133_10 = closure_133_8[1];
          closure_133_11 = closure_133_8[2];
          const obj17 = { r: closure_133_9, g: closure_133_10, b: closure_133_11 };
          closure_133_6 = closure_134_0(closure_134_1[10]).replaceAnimationColors(closure_133_6, obj17);
          const _JSON2 = JSON;
          c8 = 0;
          c10 = 3;
          const obj = { value: JSON.parse(closure_133_6), done: true };
          return obj;
        }
        const _JSON = JSON;
        closure_133_6 = JSON.stringify(closure_133_3);
        if (null == closure_133_0.id) {
          closure_133_6 = closure_133_6.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
          if (obj5.isAndroid()) {
            closure_133_6 = closure_133_6.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
          }
          obj5 = closure_134_0(closure_134_1[9]);
        }
        const ImageManager = closure_134_5.ImageManager;
        c9 = 5;
        c10 = 1;
        const obj19 = { value: ImageManager.getDominantColors(closure_133_1), done: false };
        return obj19;
      }
    } catch (tmp47) {
      closure_7 = tmp47;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp47;
      } else {
        c9 = tmp;
      }
    }
  }
};
function generateAnimationSourceFromLocalImage(arg0) {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _generateAnimationSourceFromLocalImage(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ animationSource: closure_129_0, localImageSource: closure_129_1 } = closure_0);
          let uri;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 1;
          uri = closure_130_6.resolveAssetSource(closure_129_1).uri;
          closure_129_3 = closure_130_0(closure_130_1[8]).makeSource(uri);
          const ImageManager2 = closure_130_5.ImageManager;
          c5 = 3;
          c6 = 1;
          const obj5 = { value: ImageManager2.getAvatarBase64(closure_129_3), done: false };
          return obj5;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        c6 = 3;
        return { value: null, done: true };
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_4 = value;
          const _HermesInternal = HermesInternal;
          closure_129_0.assets[0].p = "data:image/png;base64," + closure_129_4;
          const _JSON2 = JSON;
          closure_129_5 = JSON.stringify(closure_129_0);
          const ImageManager = closure_130_5.ImageManager;
          c5 = 4;
          c6 = 1;
          const obj7 = { value: ImageManager.getDominantColors(closure_129_3), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_6 = value;
        closure_129_7 = closure_130_3(closure_129_6[0], 3);
        closure_129_8 = closure_129_7[0];
        closure_129_9 = closure_129_7[1];
        closure_129_10 = closure_129_7[2];
        const obj10 = { r: closure_129_8, g: closure_129_9, b: closure_129_10 };
        closure_129_5 = closure_130_0(closure_130_1[10]).replaceAnimationColors(closure_129_5, obj10);
        const _JSON = JSON;
        c4 = 0;
        c6 = 3;
        const obj = { value: JSON.parse(closure_129_5), done: true };
        return obj;
      }
    } catch (tmp10) {
      closure_3 = tmp10;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp10;
      } else {
        c5 = tmp;
      }
    }
  }
};
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(messageId[5]).c(6);
  channelId = channelId.channelId;
  messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  let obj = channelId(messageId[5]);
  let obj2 = noop;
  noop = isFullscreen(noop.useState(null), 2)[1];
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === isFullscreen) {
        if (cResult[3] === messageId) {
          let tmp4 = cResult[4];
          let tmp5 = cResult[5];
        }
        const effect = obj2.useEffect(tmp4, tmp5);
        return tmp3;
      }
    }
  }
  const fn = function u() {
    closure_0 = emoji(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, tmp11, c3), done: false };
                return obj4;
              } else {
                c3 = 3;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_1_4(closure_128_0);
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    });
    (function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  };
  const items = [channelId, messageId, emoji, isFullscreen];
  cResult[0] = channelId;
  cResult[1] = emoji;
  cResult[2] = isFullscreen;
  cResult[3] = messageId;
  cResult[4] = fn;
  cResult[5] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  noop = undefined;
  const tmp = isFullscreen(noop.useState(null), 2);
  noop = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource2(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, tmp11, c3), done: false };
                return obj4;
              } else {
                c3 = 3;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_1_4(closure_128_0);
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    };
    !(function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  return tmp[0];
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = tmp3;
export const useSuperReactionAnimationSourceFromLocalImage = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  const cResult = animationSource(localImageSource[5]).c(4);
  animationSource = animationSource.animationSource;
  localImageSource = animationSource.localImageSource;
  let obj = animationSource(localImageSource[5]);
  let obj2 = noop;
  closure_2 = _slicedToArray(noop.useState(null), 2)[1];
  if (cResult[0] === animationSource) {
    if (cResult[1] === localImageSource) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const effect = obj2.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function u() {
    closure_0 = closure_2(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              localImageSource = tmp2;
              animationSource = tmp5;
              closure_128_0 = undefined;
              const obj4 = { animationSource, localImageSource };
              v1 = 1;
              c3 = 1;
              const obj5 = { value: generateAnimationSourceFromLocalImage(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    });
    (function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  };
  const items = [animationSource, localImageSource];
  cResult[0] = animationSource;
  cResult[1] = localImageSource;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_2 = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource4(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              localImageSource = tmp2;
              animationSource = tmp5;
              closure_128_0 = undefined;
              const obj4 = { animationSource, localImageSource };
              v1 = 1;
              c3 = 1;
              const obj5 = { value: generateAnimationSourceFromLocalImage(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    };
    !(function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  return tmp[0];
});
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;

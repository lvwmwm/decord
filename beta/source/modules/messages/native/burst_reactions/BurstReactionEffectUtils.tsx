// Module ID: 7207
// Function ID: 7208
// Name: burst_reactions/BurstReactionEffectUtils
// Dependencies: [5, 32, 19, 17, 558, 576, 4490, 7208, 1403, 1370, 7245, 2]

// Module 7207 (burst_reactions/BurstReactionEffectUtils)
import EmojiUtils from "EmojiUtils" /* 4490 */;
import getBurstAnimation from "getBurstAnimation" /* 7208 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, channelId;

let hasOwnProperty;
let metroRequire;
function generateAnimationSource(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
let obj = function _generateAnimationSource() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_10;
    let closure_11;
    let closure_5;
    let closure_6;
    let closure_9;
    let user = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_4;
          let p;
          let tmp;
          let closure_8;
          let r;
          let g;
          let b;
          let ImageManager;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              user = closure_2;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              p = undefined;
              tmp = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              r = undefined;
              g = undefined;
              b = undefined;
              c8 = 1;
              const obj6 = { animated: false };
              const getEmojiUrl = EmojiUtils.getEmojiUrl;
              EmojiUtils;
              const merged = Object.assign(closure_2);
              const emojiUrl = getEmojiUrl(obj6, 128);
              c4 = emojiUrl;
              const tmp70 = closure_2;
              if (emojiUrl == null) {
                c4 = "";
              }
              closure_2 = c4;
              ImageManager = getBurstAnimation;
              c9 = 2;
              c10 = 1;
              const obj7 = { value: ImageManager.getBurstAnimation(user, closure_1, tmp70.name, closure_3), done: false };
              return obj7;
            }
          } else if (1 === c9) {
            c8 = 0;
            c10 = 3;
            return { value: null, done: true };
          } else if (2 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              if ("" !== closure_2) {
                const obj9 = closure_134_0(closure_134_1[8]);
                closure_1 = obj9.makeSource(closure_2);
                ImageManager = closure_134_5.ImageManager;
                c9 = 3;
                c10 = 1;
                const obj10 = { value: ImageManager.getAvatarBase64(closure_1), done: false };
                return obj10;
              } else {
                const ImageManager2 = closure_134_5.ImageManager;
                ImageManager = ImageManager2.getEmojiBase64(user.name, 128);
                c9 = 4;
                c10 = 1;
                return { value: ImageManager, done: false };
              }
            }
          } else {
            if (3 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                c10 = 3;
                return { value, done: true };
              } else {
                closure_4 = value;
                ImageManager = closure_4;
                const _HermesInternal2 = HermesInternal;
                closure_3.assets[0].p = "data:image/png;base64," + closure_4;
              }
            } else if (4 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                c10 = 3;
                return { value, done: true };
              } else {
                const _HermesInternal = HermesInternal;
                p = "data:image/png;base64," + value;
                closure_3.assets[0].p = p;
                const obj3 = closure_134_0(closure_134_1[8]);
                closure_1 = obj3.makeSource(p);
              }
            } else if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              closure_7 = value;
              closure_8 = closure_134_3(closure_7[0], 3);
              r = closure_8[0];
              g = closure_8[1];
              b = closure_8[2];
              const obj16 = { r, g, b };
              const obj15 = closure_134_0(closure_134_1[10]);
              tmp = obj15.replaceAnimationColors(tmp, obj16);
              const _JSON2 = JSON;
              c8 = 0;
              c10 = 3;
              obj = { value: JSON.parse(tmp), done: true };
              return obj;
            }
            const _JSON = JSON;
            ImageManager = JSON.stringify;
            tmp = ImageManager(closure_3);
            if (null == user.id) {
              tmp = tmp.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
              const obj5 = closure_134_0(closure_134_1[9]);
              if (obj5.isAndroid()) {
                tmp = tmp.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
              }
            }
            ImageManager = closure_134_5.ImageManager;
            c9 = 5;
            c10 = 1;
            const obj17 = { value: ImageManager.getDominantColors(closure_1), done: false };
            return obj17;
          }
        } catch (tmp42) {
          closure_7 = tmp42;
          if (0 === c8) {
            c10 = 3;
            throw tmp42;
          } else {
            c9 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function generateAnimationSourceFromLocalImage(arg0) {
  return obj(...arguments);
}
obj = function _generateAnimationSourceFromLocalImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_10;
    let closure_8;
    let closure_9;
    let assets = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let uri;
          let closure_4;
          let closure_5;
          let closure_6;
          let closure_7;
          let r;
          let g;
          let b;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              assets = undefined;
              c1 = undefined;
              ({ animationSource: c0, localImageSource: c1 } = closure_0);
              uri = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              r = undefined;
              g = undefined;
              b = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 1;
              uri = closure_130_6.resolveAssetSource(c1).uri;
              const obj11 = closure_130_0(closure_130_1[8]);
              closure_3 = obj11.makeSource(uri);
              const ImageManager2 = closure_130_5.ImageManager;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: ImageManager2.getAvatarBase64(closure_3), done: false };
              return obj5;
            }
          } else if (2 === c5) {
            c4 = 0;
            c6 = 3;
            return { value: null, done: true };
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              const _HermesInternal = HermesInternal;
              assets.assets[0].p = "data:image/png;base64," + closure_4;
              const _JSON2 = JSON;
              closure_5 = JSON.stringify(assets);
              const ImageManager = closure_130_5.ImageManager;
              c5 = 4;
              c6 = 1;
              const obj7 = { value: ImageManager.getDominantColors(closure_3), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            closure_6 = value;
            closure_7 = closure_130_3(closure_6[0], 3);
            r = closure_7[0];
            g = closure_7[1];
            b = closure_7[2];
            const obj10 = { r, g, b };
            const obj9 = closure_130_0(closure_130_1[10]);
            closure_5 = obj9.replaceAnimationColors(closure_5, obj10);
            const _JSON = JSON;
            c4 = 0;
            c6 = 3;
            obj = { value: JSON.parse(closure_5), done: true };
            return obj;
          }
        } catch (tmp7) {
          closure_3 = tmp7;
          if (0 === c4) {
            c6 = 3;
            throw tmp7;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let react = react_mod;
({ NativeModules: hasOwnProperty, Image: metroRequire } = react_native);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_4;
  let messageId;
  obj = channelId(messageId[5]);
  const cResult = obj.c(6);
  channelId = channelId.channelId;
  messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  let obj2 = react;
  const tmp2 = isFullscreen(react.useState(null), 2);
  react = tmp2[1];
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === isFullscreen) {
        let tmp4;
        let tmp5;
        if (cResult[3] === messageId) {
          tmp4 = cResult[4];
          tmp5 = cResult[5];
        }
        const effect = obj2.useEffect(tmp4, tmp5);
        return tmp3;
      }
    }
  }
  const fn = function u() {
    function getSource() {
      return closure_0(...arguments);
    }
    let closure_0 = emoji(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              let closure_1 = tmp;
              closure_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, c2, c3), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            closure_1_4(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp17) {
          c3 = 3;
          throw tmp17;
        }
      }
    });
    const tmp = getSource();
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
  let closure_4;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  react = undefined;
  let tmp = isFullscreen(react.useState(null), 2);
  react = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const first = tmp[0];
  const effect = react.useEffect(() => {
    function getSource() {
      return obj(...arguments);
    }
    obj = function _getSource2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            let closure_0;
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
                let closure_1 = tmp;
                closure_0 = undefined;
                if (null != c2) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: closure_2_7(closure_0, closure_1, c2, c3), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_1_4(closure_0);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp17) {
            c3 = 3;
            throw tmp17;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !getSource();
  }, items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  let closure_2;
  let localImageSource;
  obj = animationSource(localImageSource[5]);
  const cResult = obj.c(4);
  animationSource = animationSource.animationSource;
  localImageSource = animationSource.localImageSource;
  let obj2 = react;
  [, closure_2] = react.useState(null);
  if (cResult[0] === animationSource) {
    let tmp4;
    let tmp5;
    if (cResult[1] === localImageSource) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const effect = obj2.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function u() {
    function getSource() {
      return closure_0(...arguments);
    }
    let closure_0 = closure_2(function*(arg0, value) {
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              localImageSource = tmp;
              animationSource = undefined;
              const obj4 = { animationSource, localImageSource };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: generateAnimationSourceFromLocalImage(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            animationSource = value;
            c2(animationSource);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    const tmp = getSource();
  };
  const items = [animationSource, localImageSource];
  cResult[0] = animationSource;
  cResult[1] = localImageSource;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  let closure_2;
  let first;
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  closure_2 = undefined;
  [first, closure_2] = react.useState(null);
  const items = [animationSource, localImageSource];
  const effect = react.useEffect(() => {
    function getSource() {
      return obj(...arguments);
    }
    obj = function _getSource4() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
                localImageSource = tmp;
                animationSource = undefined;
                const obj4 = { animationSource, localImageSource };
                c2 = 1;
                c3 = 1;
                const obj5 = { value: closure_2_9(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              animationSource = value;
              c2(animationSource);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp13) {
            c3 = 3;
            throw tmp13;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !getSource();
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = tmp3;
export const useSuperReactionAnimationSourceFromLocalImage = tmp4;
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;

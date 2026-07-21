// Module ID: 7021
// Function ID: 56356
// Name: _generateAnimationSource
// Dependencies: []
// Exports: useBurstReactionAnimationSource, useSuperReactionAnimationSourceFromLocalImage

// Module 7021 (_generateAnimationSource)
async function _generateAnimationSource(arg0, arg1, name, arg3, arg4) {
  let tmp23;
  let tmp24;
  let tmp25;
  let obj = callback(closure_1[4]);
  obj = {};
  const merged = Object.assign(name);
  obj["animated"] = false;
  const emojiUrl = obj.getEmojiUrl(obj, 128);
  let str = "";
  if (null != emojiUrl) {
    str = emojiUrl;
  }
  const tmp4 = yield callback(closure_1[5]).getBurstAnimation(arg0, arg1, name.name, arg3);
  if ("" !== tmp3) {
    const source = callback(closure_1[6]).makeSource(str);
    let source1 = source;
    const ImageManager = closure_5.ImageManager;
    const _HermesInternal2 = HermesInternal;
    tmp5.assets[0].p = "data:image/png;base64," + yield ImageManager.getAvatarBase64(source);
    const obj5 = callback(closure_1[6]);
  } else {
    const ImageManager3 = closure_5.ImageManager;
    const _HermesInternal = HermesInternal;
    const combined = "data:image/png;base64," + yield ImageManager3.getEmojiBase64(name.name, 128);
    tmp5.assets[0].p = combined;
    source1 = callback(closure_1[6]).makeSource(combined);
    const obj4 = callback(closure_1[6]);
  }
  let str4 = JSON.stringify(tmp4);
  if (null == name.id) {
    str4 = str4.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
    if (obj6.isAndroid()) {
      str4 = str4.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
    }
    const obj6 = callback(closure_1[7]);
  }
  const ImageManager2 = closure_5.ImageManager;
  const obj3 = callback(closure_1[5]);
  const tmp3 = str;
  [tmp23, tmp24, tmp25] = callback2(yield ImageManager2.getDominantColors(source1)[0], 3);
  const tmp22 = callback2(yield ImageManager2.getDominantColors(source1)[0], 3);
  const result = callback(closure_1[8]).replaceAnimationColors(str4, { r: tmp23, g: tmp24, b: tmp25 });
  return JSON.parse(result);
}
async function _generateAnimationSourceFromLocalImage(arg0, arg1) {
  const fn = function*(animationSource) {
    let tmp5;
    let tmp6;
    let tmp7;
    animationSource = animationSource.animationSource;
    yield undefined;
    const source = callback(closure_1[6]).makeSource(closure_6.resolveAssetSource(animationSource.localImageSource).uri);
    const ImageManager = closure_5.ImageManager;
    animationSource.assets[0].p = "data:image/png;base64," + yield ImageManager.getAvatarBase64(source);
    const json = JSON.stringify(animationSource);
    const ImageManager2 = closure_5.ImageManager;
    const obj = callback(closure_1[6]);
    [tmp5, tmp6, tmp7] = callback2(yield ImageManager2.getDominantColors(source)[0], 3);
    const tmp4 = callback2(yield ImageManager2.getDominantColors(source)[0], 3);
    const result = callback(closure_1[8]).replaceAnimationColors(json, { r: tmp5, g: tmp6, b: tmp7 });
    return JSON.parse(result);
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
({ NativeModules: closure_5, Image: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = function useBurstReactionAnimationSource(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const dependencyMap = messageId;
  const emoji = channelId.emoji;
  let closure_2 = emoji;
  const isFullscreen = channelId.isFullscreen;
  const callback2 = isFullscreen;
  const tmp = callback2(React.useState(null), 2);
  const React = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = React.useEffect(() => {
    async function _getSource() {
      if (null != closure_2) {
        callback(yield function generateAnimationSource(arg0, arg1, arg2, arg3) {
          return callback(...arguments);
        }(closure_0, closure_1, closure_2, closure_3));
      }
    }
    !function getSource() {
      return _getSource(...arguments);
    }();
  }, items);
  return tmp[0];
};
export const useSuperReactionAnimationSourceFromLocalImage = function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  animationSource = animationSource.animationSource;
  const arg1 = animationSource;
  const localImageSource = animationSource.localImageSource;
  const dependencyMap = localImageSource;
  const tmp = callback2(React.useState(null), 2);
  let closure_2 = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = React.useEffect(() => {
    async function _getSource2() {
      callback(yield function generateAnimationSourceFromLocalImage(arg0) {
        return callback(...arguments);
      }({ animationSource: closure_0, localImageSource: closure_1 }));
    }
    !function getSource() {
      return _getSource2(...arguments);
    }();
  }, items);
  return tmp[0];
};
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;

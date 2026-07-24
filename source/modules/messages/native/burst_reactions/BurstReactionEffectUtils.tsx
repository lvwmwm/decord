// Module ID: 7025
// Function ID: 56410
// Name: _generateAnimationSource
// Dependencies: [5, 57, 31, 27, 3775, 7026, 1392, 477, 7063, 2]
// Exports: useBurstReactionAnimationSource, useSuperReactionAnimationSourceFromLocalImage

// Module 7025 (_generateAnimationSource)
import items from "items";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_5;
let closure_6;
const require = arg1;
async function _generateAnimationSource(arg0, arg1, arg2, arg3, arg4) {
  let tmp23;
  let tmp24;
  let tmp25;
  let obj = outer2_0(outer2_1[4]);
  obj = {};
  const merged = Object.assign(arg2);
  obj["animated"] = false;
  const emojiUrl = obj.getEmojiUrl(obj, 128);
  let str = "";
  if (null != emojiUrl) {
    str = emojiUrl;
  }
  const tmp4 = yield outer2_0(outer2_1[5]).getBurstAnimation(arg0, arg1, arg2.name, arg3);
  if ("" !== tmp3) {
    const source = outer2_0(outer2_1[6]).makeSource(str);
    let source1 = source;
    const ImageManager = outer2_5.ImageManager;
    const _HermesInternal2 = HermesInternal;
    tmp5.assets[0].p = "data:image/png;base64," + yield ImageManager.getAvatarBase64(source);
    const obj5 = outer2_0(outer2_1[6]);
  } else {
    const ImageManager3 = outer2_5.ImageManager;
    const _HermesInternal = HermesInternal;
    const combined = "data:image/png;base64," + yield ImageManager3.getEmojiBase64(arg2.name, 128);
    tmp5.assets[0].p = combined;
    source1 = outer2_0(outer2_1[6]).makeSource(combined);
    const obj4 = outer2_0(outer2_1[6]);
  }
  let str4 = JSON.stringify(tmp4);
  if (null == arg2.id) {
    str4 = str4.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
    if (obj6.isAndroid()) {
      str4 = str4.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
    }
    obj6 = outer2_0(outer2_1[7]);
  }
  const ImageManager2 = outer2_5.ImageManager;
  const obj3 = outer2_0(outer2_1[5]);
  tmp3 = str;
  [tmp23, tmp24, tmp25] = outer2_3(yield ImageManager2.getDominantColors(source1)[0], 3);
  const tmp22 = outer2_3(yield ImageManager2.getDominantColors(source1)[0], 3);
  const result = outer2_0(outer2_1[8]).replaceAnimationColors(str4, { r: tmp23, g: tmp24, b: tmp25 });
  return JSON.parse(result);
}
async function _generateAnimationSourceFromLocalImage(arg0, arg1) {
  let iter = (function*(animationSource) {
    let tmp5;
    let tmp6;
    let tmp7;
    animationSource = animationSource.animationSource;
    yield undefined;
    const source = outer2_0(outer2_1[6]).makeSource(outer2_6.resolveAssetSource(animationSource.localImageSource).uri);
    const ImageManager = outer2_5.ImageManager;
    animationSource.assets[0].p = "data:image/png;base64," + yield ImageManager.getAvatarBase64(source);
    const json = JSON.stringify(animationSource);
    const ImageManager2 = outer2_5.ImageManager;
    const obj = outer2_0(outer2_1[6]);
    [tmp5, tmp6, tmp7] = outer2_3(yield ImageManager2.getDominantColors(source)[0], 3);
    const tmp4 = outer2_3(yield ImageManager2.getDominantColors(source)[0], 3);
    const result = outer2_0(outer2_1[8]).replaceAnimationColors(json, { r: tmp5, g: tmp6, b: tmp7 });
    return JSON.parse(result);
  })();
  iter.next();
  return iter;
}
({ NativeModules: closure_5, Image: closure_6 } = get_ActivityIndicator);
let result = require("result").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = function useBurstReactionAnimationSource(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  const tmp = isFullscreen(React.useState(null), 2);
  React = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = React.useEffect(() => {
    async function _getSource() {
      if (null != outer3_2) {
        outer3_4(yield (function generateAnimationSource(_getSource, outer3_1, outer3_2, outer3_3) {
          return outer5_7(...arguments);
        })(_getSource, outer3_1, outer3_2, outer3_3));
      }
    }
    !(function getSource() {
      return _getSource(...arguments);
    })();
  }, items);
  return tmp[0];
};
export const useSuperReactionAnimationSourceFromLocalImage = function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  animationSource = animationSource.animationSource;
  const localImageSource = animationSource.localImageSource;
  const tmp = callback2(React.useState(null), 2);
  let items = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = React.useEffect(() => {
    async function _getSource2() {
      outer3_2(yield (function generateAnimationSourceFromLocalImage(arg0) {
        return outer5_8(...arguments);
      })({ animationSource: _getSource2, localImageSource: outer3_1 }));
    }
    !(function getSource() {
      return _getSource2(...arguments);
    })();
  }, items);
  return tmp[0];
};
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;

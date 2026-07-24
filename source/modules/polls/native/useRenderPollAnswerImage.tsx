// Module ID: 11361
// Function ID: 88399
// Name: useRenderPollAnswerImage
// Dependencies: [57, 31, 27, 4468, 4467, 1852, 33, 566, 11355, 5085, 5151, 3774, 1392, 2]
// Exports: default

// Module 11361 (useRenderPollAnswerImage)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("get ActivityIndicator").fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = mediaAttachmentState;
  const callback = arg3;
  const React = arg4;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp5.getUpload(closure_0, closure_1, first.Poll));
  const tmp2 = callback(React.useState(), 2);
  const first = tmp2[0];
  let status;
  if (null != mediaAttachmentState) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (null != mediaAttachmentState) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp5 = status === _require(11355).PollMediaUploadAttachmentStatus.PREPARING;
  _isNativeReflectConstruct = tmp5;
  obj = {
    renderImage: React.useMemo(() => {
      if (_isNativeReflectConstruct) {
        return outer1_9(stateFromStores, {});
      } else if (null != stateFromStores) {
        const tmp19 = null != _slicedToArray ? _slicedToArray : first;
        let obj = {};
        obj = { width: tmp19, height: tmp19 };
        obj.style = obj;
        const obj1 = { uri: stateFromStores.item.uri };
        obj.source = obj1;
        return outer1_9(callback2(mediaAttachmentState[9]), obj);
      } else {
        let emoji;
        if (null != mediaAttachmentState) {
          emoji = mediaAttachmentState.emoji;
        }
        if (null != emoji) {
          emoji = mediaAttachmentState.emoji;
          obj = {};
          const obj2 = { width: result, height: result };
          obj.fastImageStyle = obj2;
          let obj3 = { fontSize: result };
          obj.textEmojiStyle = obj3;
          const tmp12 = emoji.type === callback(mediaAttachmentState[11]).EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          let str = "";
          if (null != tmp12) {
            str = tmp12;
          }
          obj.name = str;
          let emojiURL;
          if (null != emoji.id) {
            obj3 = callback2(mediaAttachmentState[12]);
            const obj4 = {};
            ({ id: obj5.id, animated: obj5.animated } = emoji);
            obj4.size = outer1_8;
            emojiURL = obj3.getEmojiURL(obj4);
          }
          obj.src = emojiURL;
          return outer1_9(callback2(mediaAttachmentState[10]), obj);
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp2[1]
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp5, first];
  return obj;
};

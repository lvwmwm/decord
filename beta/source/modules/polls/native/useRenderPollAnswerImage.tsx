// Module ID: 11708
// Function ID: 11709
// Name: useRenderPollAnswerImage
// Dependencies: [32, 19, 17, 5200, 5199, 1375, 21, 504, 11688, 5899, 6551, 4486, 1397, 2]
// Exports: default

// Module 11708 (useRenderPollAnswerImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiTypes from "EmojiTypes" /* 4486 */;
import DraftStore from "DraftStore" /* 5200 */;
import FastImageDefault from "FastImage" /* 5899 */;
import EmojiDefault from "Emoji" /* 6551 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_7, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
const DraftType = DraftStore.DraftType;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState, arg3, arg4) {
  let closure_0;
  let closure_3;
  let closure_4;
  let first;
  let items1;
  let tmp6;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  _slicedToArray = arg3;
  react = arg4;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUpload(closure_0, closure_1, DraftType.Poll));
  [first, tmp6] = react.useState();
  let status;
  const obj2 = react;
  if (mediaAttachmentState != null) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (mediaAttachmentState != null) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp8 = status === tmp(11688).PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp8;
  let obj3 = {
    renderImage: obj2.useMemo(() => {
      let emojiURL;
      let obj6;
      let size1;
      let str;
      const tmp = closure_7;
      if (tmp) {
        return <ActivityIndicator />;
      } else if (null != stateFromStores) {
        let tmp15 = closure_3;
        const item = stateFromStores.item;
        if (closure_3 == null) {
          tmp15 = first;
        }
        size = { width: tmp15, height: tmp15 };
        const obj3 = { uri: item.uri };
        return jsx(FastImageDefault, { style: size, source: obj3 });
      } else {
        let emoji1;
        if (mediaAttachmentState != null) {
          emoji1 = tmp21.emoji;
        }
        if (null != emoji1) {
          const emoji = tmp21.emoji;
          const obj = { fastImageStyle: size1, textEmojiStyle: obj6, name: str, src: emojiURL };
          size1 = { width: fontSize, height: fontSize };
          obj6 = { fontSize };
          const tmp7 = EmojiDefault;
          str = emoji.type === EmojiTypes.EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          const tmp4 = jsx;
          if (str == null) {
            str = "";
          }
          emojiURL = undefined;
          if (null != emoji.id) {
            const obj7 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj5.id, animated: obj5.animated } = emoji);
            const obj4 = AvatarUtilsDefault;
            emojiURL = obj4.getEmojiURL(obj7);
          }
          return tmp4(tmp7, obj);
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp6
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp8, first];
  return obj3;
};

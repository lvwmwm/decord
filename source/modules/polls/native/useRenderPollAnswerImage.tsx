// Module ID: 11321
// Function ID: 88096
// Name: useRenderPollAnswerImage
// Dependencies: []
// Exports: default

// Module 11321 (useRenderPollAnswerImage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ActivityIndicator = arg1(dependencyMap[2]).ActivityIndicator;
const DraftType = arg1(dependencyMap[3]).DraftType;
let closure_7 = importDefault(dependencyMap[4]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[5]).EMOJI_URL_BASE_SIZE;
const jsx = arg1(dependencyMap[6]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = mediaAttachmentState;
  const callback = arg3;
  const React = arg4;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => tmp5.getUpload(arg0, arg1, first.Poll));
  const ActivityIndicator = stateFromStores;
  const tmp2 = callback(React.useState(), 2);
  const first = tmp2[0];
  const DraftType = first;
  let status;
  if (null != mediaAttachmentState) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (null != mediaAttachmentState) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp5 = status === arg1(dependencyMap[8]).PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp5;
  obj = {
    renderImage: React.useMemo(() => {
      if (tmp5) {
        return callback(stateFromStores, {});
      } else if (null != stateFromStores) {
        const tmp19 = null != arg3 ? arg3 : first;
        let obj = {};
        obj = { width: tmp19, height: tmp19 };
        obj.style = obj;
        const obj1 = { uri: stateFromStores.item.uri };
        obj.source = obj1;
        return callback(arg1(arg2[9]), obj);
      } else {
        let emoji;
        if (null != arg2) {
          emoji = arg2.emoji;
        }
        if (null != emoji) {
          emoji = arg2.emoji;
          obj = {};
          const obj2 = { width: arg4, height: arg4 };
          obj.fastImageStyle = obj2;
          let obj3 = { fontSize: arg4 };
          obj.textEmojiStyle = obj3;
          const tmp12 = emoji.type === arg0(arg2[11]).EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          let str = "";
          if (null != tmp12) {
            str = tmp12;
          }
          obj.name = str;
          let emojiURL;
          if (null != emoji.id) {
            obj3 = arg1(arg2[12]);
            const obj4 = {};
            ({ id: obj5.id, animated: obj5.animated } = emoji);
            obj4.size = closure_8;
            emojiURL = obj3.getEmojiURL(obj4);
          }
          obj.src = emojiURL;
          return callback(arg1(arg2[10]), obj);
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp2[1]
  };
  const items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp5, first];
  return obj;
};

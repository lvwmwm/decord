// Module ID: 9373
// Function ID: 73103
// Name: MessageStandardEmojiActionSheet
// Dependencies: []
// Exports: default

// Module 9373 (MessageStandardEmojiActionSheet)
function MessageStandardEmojiActionSheet(emojiNode) {
  let obj = arg1(dependencyMap[6]);
  const v4Result = obj.v4();
  const arg1 = v4Result;
  obj = {
    startExpanded: true,
    onDismiss() {
      let obj = callback(closure_2[8]);
      obj = { nonce: v4Result };
      obj.track(constants.CLOSE_POPOUT, obj);
    }
  };
  obj = { style: callback().contentWrapper, children: jsx(importDefault(dependencyMap[9]), { emojiNode: emojiNode.emojiNode, nonce: v4Result }) };
  obj.children = <View {...obj} />;
  return jsx(arg1(dependencyMap[7]).BottomSheet, obj);
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  let arg1;
  let obj = arg1(dependencyMap[10]);
  obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    let obj2 = arg1(dependencyMap[6]);
    const v4Result = obj2.v4();
    arg1 = v4Result;
    obj = {
      startExpanded: true,
      onDismiss() {
          let obj = callback(closure_2[8]);
          obj = { nonce: v4Result };
          obj.track(constants.CLOSE_POPOUT, obj);
        }
    };
    const obj1 = { style: tmp.contentWrapper };
    obj2 = { emojiNode, sourceType: tmp3, expressionSourceApplication: tmp5, expressionSourceGuild: tmp4, customEmojiFromJoinedGuild: tmp7, hasJoinedEmojiSourceGuild: tmp6, nonce: v4Result };
    obj1.children = jsx(importDefault(dependencyMap[11]), obj2);
    obj.children = <View {...obj1} />;
    return jsx(arg1(dependencyMap[7]).BottomSheet, obj);
  }
  const tmp = callback();
}
let num = 0;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: 16 };
if (obj4.isAndroid()) {
  num = 16;
}
obj.paddingBottom = num;
obj.contentWrapper = obj;
let closure_6 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    let obj = { emojiNode };
    let tmpResult = tmp(MessageStandardEmojiActionSheet, obj);
  } else {
    obj = { emojiNode };
    tmpResult = tmp(MessageCustomEmojiActionSheet, obj);
  }
  return tmpResult;
};

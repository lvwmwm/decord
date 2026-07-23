// Module ID: 9385
// Function ID: 73182
// Name: MessageStandardEmojiActionSheet
// Dependencies: [31, 27, 653, 33, 4130, 477, 491, 5187, 675, 9386, 9392, 9393, 2]
// Exports: default

// Module 9385 (MessageStandardEmojiActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "ME";

let require = arg1;
function MessageStandardEmojiActionSheet(emojiNode) {
  let obj = require(491) /* v1 */;
  const v4Result = obj.v4();
  require = v4Result;
  obj = {
    startExpanded: true,
    onDismiss() {
      let obj = outer1_1(outer1_2[8]);
      obj = { nonce: closure_0 };
      obj.track(outer1_4.CLOSE_POPOUT, obj);
    }
  };
  obj = { style: _createForOfIteratorHelperLoose().contentWrapper, children: jsx(importDefault(9386), { emojiNode: emojiNode.emojiNode, nonce: v4Result }) };
  obj.children = <View style={_createForOfIteratorHelperLoose().contentWrapper}>{jsx(importDefault(9386), { emojiNode: arg0.emojiNode, nonce: v4Result })}</View>;
  return jsx(require(5187) /* Background */.BottomSheet, { style: _createForOfIteratorHelperLoose().contentWrapper, children: jsx(importDefault(9386), { emojiNode: emojiNode.emojiNode, nonce: v4Result }) });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  let _require;
  let obj = _require(9392);
  obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    let obj2 = _require(491);
    const v4Result = obj2.v4();
    _require = v4Result;
    obj = {
      startExpanded: true,
      onDismiss() {
          let obj = outer1_1(outer1_2[8]);
          obj = { nonce: c0 };
          obj.track(outer1_4.CLOSE_POPOUT, obj);
        }
    };
    const obj1 = { style: tmp.contentWrapper };
    obj2 = { emojiNode, sourceType: tmp3, expressionSourceApplication: tmp5, expressionSourceGuild: tmp4, customEmojiFromJoinedGuild: tmp7, hasJoinedEmojiSourceGuild: tmp6, nonce: v4Result };
    obj1.children = jsx(importDefault(9393), { emojiNode, sourceType: tmp3, expressionSourceApplication: tmp5, expressionSourceGuild: tmp4, customEmojiFromJoinedGuild: tmp7, hasJoinedEmojiSourceGuild: tmp6, nonce: v4Result });
    obj.children = <View style={tmp.contentWrapper} />;
    return jsx(_require(5187).BottomSheet, {
      startExpanded: true,
      onDismiss() {
          let obj = outer1_1(outer1_2[8]);
          obj = { nonce: c0 };
          obj.track(outer1_4.CLOSE_POPOUT, obj);
        }
    });
  }
  tmp = _createForOfIteratorHelperLoose();
}
let num = 0;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: 16 };
if (set.isAndroid()) {
  num = 16;
}
_createForOfIteratorHelperLoose.paddingBottom = num;
_createForOfIteratorHelperLoose.contentWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

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

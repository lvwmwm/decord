// Module ID: 11138
// Function ID: 86608
// Name: ForumPostMessageContent
// Dependencies: [31, 33, 4131, 11139, 4127, 2]
// Exports: default

// Module 11138 (ForumPostMessageContent)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ text: { alignSelf: "flex-start" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let content;
  let hasUnreads;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let style;
  let variant;
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = callback();
  ({ content, style, variant } = importDefault(11139)({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj.color = str;
  obj.lineClamp = num;
  obj.ellipsizeMode = "tail";
  const items = [style, tmp.text];
  obj.style = items;
  obj.children = content;
  return jsx(require(4127) /* Text */.Text, { variant });
};

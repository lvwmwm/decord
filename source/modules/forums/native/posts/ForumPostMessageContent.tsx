// Module ID: 11333
// Function ID: 11334
// Name: ForumPostMessageContent
// Dependencies: [19, 21, 4285, 11334, 4281, 2]
// Exports: default

// Module 11333 (ForumPostMessageContent)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { alignSelf: "flex-start" } });
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

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
  ({ content, style, variant } = importDefault(11334)({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant, color: null, lineClamp: null, ellipsizeMode: "tail", style: null, children: null };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj[1] = str;
  obj[2] = num;
  const items = [style, tmp.text];
  obj[4] = items;
  obj[5] = content;
  return jsx(require(4281) /* Text */.Text, { variant, color: null, lineClamp: null, ellipsizeMode: "tail", style: null, children: null });
};

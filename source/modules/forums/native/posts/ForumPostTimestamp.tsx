// Module ID: 11167
// Function ID: 86701
// Name: ForumPostTimestamp
// Dependencies: [31, 11154, 33, 4165, 9109, 4161, 2]
// Exports: default

// Module 11167 (ForumPostTimestamp)
import "result";
import { useForumChannelStore } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ text: { lineHeight: 18, height: 18 } });
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  let format;
  let hasUnreads;
  let textStyle;
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  let obj = require(9109) /* sortForumPostReactionsByPopularityDesc */;
  let str = "text-muted";
  const lastActiveTimestamp = obj.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { lineClamp: 1, variant: "text-xs/normal", color: str };
  const items = [textStyle, callback().text];
  obj.style = items;
  obj.children = lastActiveTimestamp;
  return jsx(require(4161) /* Text */.Text, { lineClamp: 1, variant: "text-xs/normal", color: str });
};

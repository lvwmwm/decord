// Module ID: 11405
// Function ID: 11406
// Name: ForumPostTimestamp
// Dependencies: [19, 11392, 21, 4303, 8403, 4299, 2]
// Exports: default

// Module 11405 (ForumPostTimestamp)
import "noop";
import { useForumChannelStore } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { lineHeight: 18, height: 18 } });
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  let format;
  let hasUnreads;
  let textStyle;
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = callback();
  const tmp2 = require;
  let color = "text-muted";
  const children = require(8403) /* useLoadForumUnreadCounts */.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    color = "text-default";
  }
  const style = [textStyle, tmp.text];
  return jsx(tmp2(4299).Text, { lineClamp: 1, variant: "text-xs/normal", color, style, children });
};

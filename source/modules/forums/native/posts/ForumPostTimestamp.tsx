// Module ID: 11190
// Function ID: 11191
// Name: ForumPostTimestamp
// Dependencies: [19, 11177, 21, 4661, 8513, 4734, 2]
// Exports: default

// Module 11190 (ForumPostTimestamp)
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
  const children = require(8513) /* useLoadForumUnreadCounts */.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    color = "text-default";
  }
  const style = [textStyle, tmp.text];
  return jsx(tmp2(4734).Text, { lineClamp: 1, variant: "text-xs/normal", color, style, children });
};

// Module ID: 11452
// Function ID: 11453
// Name: ForumPostGridHeader
// Dependencies: [19, 17, 5963, 1398, 21, 4344, 11453, 11455, 11464, 11465, 11466, 2]
// Exports: default

// Module 11452 (ForumPostGridHeader)
import "noop";
import { View } from "get ActivityIndicator";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import { ChannelFlags } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("FORUM_GUIDELINES_ACTION_SHEET").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  let hasUnreads;
  let isNew;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: null };
    obj[0] = tmp.pinIcon;
    hasFlagResult = callback(importDefault(11453), obj);
  }
  const items = [hasFlagResult, callback(require(11455) /* ForumPostUsername */.ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(11464), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = tmp8(tmp10(11465), {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [closure_7(View, obj), callback(importDefault(11466), { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return closure_7(View, obj);
};

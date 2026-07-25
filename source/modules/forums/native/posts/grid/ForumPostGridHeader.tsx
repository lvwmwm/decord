// Module ID: 11116
// Function ID: 86515
// Name: ForumPostGridHeader
// Dependencies: [31, 27, 6016, 1355, 33, 4131, 11117, 11119, 11128, 11129, 11130, 2]
// Exports: default

// Module 11116 (ForumPostGridHeader)
import "result";
import { View } from "get ActivityIndicator";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import { ChannelFlags } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("FORUM_GUIDELINES_ACTION_SHEET").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  let hasUnreads;
  let isNew;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container };
  obj = { style: tmp.details };
  let tmp5 = hasFlagResult;
  if (hasFlagResult) {
    obj = { containerStyle: tmp.pinIcon };
    tmp5 = callback(importDefault(11117), obj);
  }
  const items = [tmp5, callback(require(11119) /* ForumPostUsername */.ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(11128), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = callback(importDefault(11129), {});
  }
  items[3] = isNew;
  obj.children = items;
  const items1 = [closure_7(View, obj), callback(importDefault(11130), { title: thread.name, hasUnreads })];
  obj.children = items1;
  return closure_7(View, obj);
};

// Module ID: 11175
// Function ID: 86728
// Name: ForumPostList
// Dependencies: [57, 31, 27, 1355, 33, 4165, 6033, 11156, 11166, 11176, 11179, 2]
// Exports: default

// Module 11175 (ForumPostList)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import { ChannelFlags } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let media;
  let messageContent;
  let parentChannel;
  let senderModifier;
  let thread;
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = callback3();
  let obj = require(6033) /* useAvailableTags */;
  const tmp2 = callback(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp2[0];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  obj = {};
  obj = { style: tmp.content };
  let tmp8Result = hasFlagResult;
  if (!hasFlagResult) {
    tmp8Result = 0 !== first.length;
  }
  if (tmp8Result) {
    const obj1 = { style: tmp.header };
    let tmp10 = hasFlagResult;
    if (hasFlagResult) {
      tmp10 = callback2(importDefault(11156), {});
    }
    const items = [tmp10, ];
    let tmp14 = 0 !== first.length;
    if (tmp14) {
      const obj2 = { appliedTags: first, additionalTagsCount: tmp2[1], hasUnreads };
      tmp14 = callback2(require(11166) /* ForumPostAppliedTagPills */.ForumPostAppliedTagPills, obj2);
    }
    items[1] = tmp14;
    obj1.children = items;
    tmp8Result = closure_7(View, obj1);
    const tmp8 = closure_7;
    const tmp9 = View;
  }
  const items1 = [tmp8Result, callback2(importDefault(11176), { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj.children = items1;
  const items2 = [closure_7(View, obj), callback2(importDefault(11179), { thread, firstMessage, hasUnreads, parentChannel })];
  obj.children = items2;
  return closure_7(closure_8, obj);
};

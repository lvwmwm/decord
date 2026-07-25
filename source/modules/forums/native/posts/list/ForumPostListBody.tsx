// Module ID: 11137
// Function ID: 86606
// Name: ForumPostListBody
// Dependencies: [31, 27, 6016, 33, 4131, 11129, 11119, 11128, 11130, 11138, 11123, 2]
// Exports: default

// Module 11137 (ForumPostListBody)
import "result";
import { View } from "get ActivityIndicator";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = require("FORUM_GUIDELINES_ACTION_SHEET").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  let containerStyle;
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let media;
  let messageContent;
  let senderModifier;
  let thread;
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  items = [tmp.body, containerStyle];
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.details };
  if (isNew) {
    const obj1 = { containerStyle: tmp.newTagContainer };
    isNew = callback(importDefault(11129), obj1);
  }
  const items1 = [isNew, callback(require(11119) /* ForumPostUsername */.ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(11128), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj.children = items1;
  const items2 = [closure_6(View, obj), , ];
  const obj3 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
  items2[1] = callback(importDefault(11130), obj3);
  items2[2] = callback(importDefault(11138), { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier });
  obj.children = items2;
  const items3 = [closure_6(View, obj), ];
  if (null == firstMessage) {
    let tmp8Result = null;
    if (null != media) {
      const obj4 = { channel: thread, media, isEmbed, isLocalDeviceMedia };
      let id;
      if (null != firstMessage) {
        id = firstMessage.id;
      }
      obj4.firstMessageId = id;
      obj4.containerStyle = tmp.thumbnailContainer;
      tmp8Result = callback(require(11123) /* ForumPostMediaAndroid */.ForumPostMediaThumbnail, obj4);
      const tmp8 = callback;
    }
  } else {
    tmp8Result = null;
  }
  items3[1] = tmp8Result;
  obj.children = items3;
  return closure_6(View, obj);
};

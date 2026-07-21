// Module ID: 11136
// Function ID: 86624
// Name: ForumPostListBody
// Dependencies: []
// Exports: default

// Module 11136 (ForumPostListBody)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ForumTimestampFormats = arg1(dependencyMap[2]).ForumTimestampFormats;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ body: {}, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: {}, newTagContainer: { marginEnd: 8 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

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
  const items = [tmp.body, containerStyle];
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.details };
  if (isNew) {
    const obj1 = { containerStyle: tmp.newTagContainer };
    isNew = callback(importDefault(dependencyMap[5]), obj1);
  }
  const items1 = [isNew, callback(arg1(dependencyMap[6]).ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(dependencyMap[7]), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj.children = items1;
  const items2 = [closure_6(View, obj), callback(importDefault(dependencyMap[8]), { title: thread.name, hasUnreads }), callback(importDefault(dependencyMap[9]), { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier })];
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
      tmp8Result = callback(arg1(dependencyMap[10]).ForumPostMediaThumbnail, obj4);
      const tmp8 = callback;
    }
  } else {
    tmp8Result = null;
  }
  items3[1] = tmp8Result;
  obj.children = items3;
  return closure_6(View, obj);
};

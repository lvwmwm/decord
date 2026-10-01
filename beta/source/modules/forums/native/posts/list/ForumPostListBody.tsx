// Module ID: 11504
// Function ID: 11505
// Name: ForumPostListBody
// Dependencies: [19, 17, 6691, 21, 4836, 6690, 11497, 11487, 11496, 11498, 11505, 11491, 2]
// Exports: default

// Module 11504 (ForumPostListBody)
import react_native from "react-native" /* 17 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6690 */;
import ForumConstants from "ForumConstants" /* 6691 */;
import ForumPostUsername from "ForumPostUsername" /* 11487 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11496 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 11497 */;
import ForumPostMessageContentDefault from "ForumPostMessageContent" /* 11505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  let containerStyle;
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let id;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let items;
  let items1;
  let items2;
  let items3;
  let media;
  let messageContent;
  let senderModifier;
  let thread;
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = closure_7();
  const obj = GameInvitesChannelUtils;
  const isGameInvitesPost = obj.useIsGameInvitesPost(thread);
  const obj2 = { style: items, children: items3 };
  items = [tmp.body, containerStyle];
  const obj3 = { style: tmp.contentContainer, children: items2 };
  const obj4 = { style: tmp.details, children: items1 };
  if (isNew) {
    const obj5 = { containerStyle: tmp.newTagContainer };
    isNew = hasOwnProperty(ForumPostNewTagDefault, obj5);
  }
  items1 = [isNew, hasOwnProperty(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), ];
  const obj6 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO };
  items1[2] = hasOwnProperty(ForumPostTimestampDefault, obj6);
  items2 = [metroRequire(View, obj4), , ];
  let tmp9Result = !isGameInvitesPost;
  if (tmp9Result) {
    const obj7 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
    tmp9Result = tmp9(tmp10(11498), obj7);
  }
  items2[1] = tmp9Result;
  items2[2] = hasOwnProperty(ForumPostMessageContentDefault, { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier });
  items3 = [metroRequire(View, obj3), ];
  let blocked;
  if (firstMessage != null) {
    blocked = firstMessage.blocked;
  }
  let tmp9Result2 = null;
  if (!blocked) {
    tmp9Result2 = null;
    if (null != media) {
      const obj8 = { channel: thread, media, isEmbed, isLocalDeviceMedia, firstMessageId: id, containerStyle: tmp.thumbnailContainer };
      id = undefined;
      const ForumPostMediaThumbnail = tmp2(11491).ForumPostMediaThumbnail;
      if (firstMessage != null) {
        id = firstMessage.id;
      }
      tmp9Result2 = tmp9(ForumPostMediaThumbnail, obj8);
    }
  }
  items3[1] = tmp9Result2;
  return metroRequire(View, obj2);
};

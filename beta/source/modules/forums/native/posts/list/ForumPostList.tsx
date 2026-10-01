// Module ID: 11503
// Function ID: 11504
// Name: ForumPostList
// Dependencies: [32, 19, 17, 2052, 21, 4836, 6693, 11485, 11495, 11504, 11507, 2]
// Exports: default

// Module 11503 (ForumPostList)
import react_native from "react-native" /* 17 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ForumTagHooks from "ForumTagHooks" /* 6693 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 11485 */;
import ForumPostListBodyDefault from "ForumPostListBody" /* 11504 */;
import ForumPostListFooterDefault from "ForumPostListFooter" /* 11507 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const ForumPostAppliedTags = tmp2(11495);
const View = react_native.View;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  let first;
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let items;
  let items1;
  let items2;
  let media;
  let messageContent;
  let parentChannel;
  let senderModifier;
  let thread;
  let tmp5;
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = closure_9();
  const obj = ForumTagHooks;
  [first, tmp5] = obj.useSomeAppliedTags(thread, 2);
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let tmp7Result = hasFlagResult;
  const obj2 = { style: tmp.content, children: items1 };
  const tmp8 = metroImportAll;
  if (!hasFlagResult) {
    tmp7Result = 0 !== first.length;
  }
  if (tmp7Result) {
    const obj3 = { style: tmp.header, children: items };
    items = [hasFlagResult && metroRequire(ForumPostPinIconDefault, {}), ];
    let tmp14 = 0 !== first.length;
    const tmp11 = hasFlagResult && metroRequire(ForumPostPinIconDefault, {});
    if (tmp14) {
      const obj4 = { appliedTags: first, additionalTagsCount: tmp5, hasUnreads };
      tmp14 = metroRequire(ForumPostAppliedTags.ForumPostAppliedTagPills, obj4);
    }
    items[1] = tmp14;
    tmp7Result = tmp7(tmp9, obj3);
  }
  const obj5 = { children: items2 };
  items1 = [tmp7Result, metroRequire(ForumPostListBodyDefault, { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  items2 = [metroImportDefault(View, obj2), metroRequire(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  return metroImportDefault(tmp8, obj5);
};

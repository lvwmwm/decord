// Module ID: 13749
// Function ID: 13750
// Name: ForumPostGridHeader
// Dependencies: [19, 17, 7454, 4870, 21, 5014, 13750, 13752, 13762, 13763, 13764, 2]
// Exports: default

// Module 13749 (ForumPostGridHeader)
import react_native from "react-native" /* 17 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import ForumConstants from "ForumConstants" /* 7454 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 13750 */;
import ForumPostUsername from "ForumPostUsername" /* 13752 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 13762 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 13764 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  let hasUnreads;
  let isNew;
  let items;
  let items1;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = closure_8();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.details, children: items };
  if (hasFlagResult) {
    const obj3 = { containerStyle: tmp.pinIcon };
    hasFlagResult = metroRequire(ForumPostPinIconDefault, obj3);
  }
  items = [hasFlagResult, metroRequire(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), , ];
  const obj4 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText };
  items[2] = metroRequire(ForumPostTimestampDefault, obj4);
  if (isNew) {
    isNew = tmp8(tmp10(13763), {});
  }
  items[3] = isNew;
  items1 = [metroImportDefault(View, obj2), ];
  const obj5 = { title: thread.name, hasUnreads };
  items1[1] = metroRequire(ForumPostTitleDefault, obj5);
  return metroImportDefault(View, obj);
};

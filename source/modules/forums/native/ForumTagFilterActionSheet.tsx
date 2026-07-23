// Module ID: 11799
// Function ID: 91581
// Name: EmojiIcon
// Dependencies: [57, 31, 4991, 11125, 653, 33, 4130, 7009, 4559, 5500, 5186, 1212, 8390, 5189, 5503, 9094, 566, 5151, 1392, 2]
// Exports: default

// Module 11799 (EmojiIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function EmojiIcon(arg0) {
  let emojiName;
  let require;
  ({ emojiId: require, emojiName } = arg0);
  const tmp = callback4();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != closure_0) {
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(closure_0);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji };
  let emojiURL;
  if (null != stateFromStores) {
    obj = {};
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    obj.size = 18;
    emojiURL = importDefault(1392).getEmojiURL(obj);
    const obj3 = importDefault(1392);
  }
  obj.src = emojiURL;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj.name = str;
  return jsx(importDefault(5151), { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji });
}
({ useForumChannelStore: closure_6, useForumChannelStoreApi: closure_7 } = set);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = ME);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
let result = set.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  let closure_1 = callback3();
  const tmp2 = callback(React.useState(new Set(callback2(channel.id).tagFilter)), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = channel(first[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  obj = { scrollable: true };
  obj = {};
  let intl = channel(first[11]).intl;
  obj.title = intl.string(channel(first[11]).t.TdqRTh);
  let str = " ";
  if (first.size > 0) {
    const intl2 = channel(first[11]).intl;
    const obj1 = { count: first.size };
    str = intl2.formatToPlainString(channel(first[11]).t["/FzHJK"], obj1);
  }
  obj.subtitle = str;
  let obj2 = {
    onPress() {
      callback(new Set());
    }
  };
  const intl3 = channel(first[11]).intl;
  obj2.label = intl3.string(channel(first[11]).t.VkKicb);
  obj.leading = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
    onPress() {
      callback(new Set());
    }
  });
  obj.header = jsx(channel(first[10]).BottomSheetTitleHeader, {});
  const obj3 = {};
  const obj4 = { hasIcons: true };
  const availableTags = channel.availableTags;
  obj4.children = availableTags.map((emojiId) => {
    let closure_0 = emojiId;
    let obj = {};
    obj = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
    obj.icon = outer1_11(outer1_13, obj);
    obj.label = emojiId.name;
    const intl = channel(first[11]).intl;
    obj = { tagName: emojiId.name };
    obj.accessibilityLabel = intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj);
    obj.checked = first.has(emojiId.id);
    obj.onPress = function onPress() {
      let obj = closure_0;
      if (null != closure_0) {
        let FORUM_CHANNEL_HEADER = globalThis;
        const _Set = Set;
        const set = new Set(outer1_2);
        if (set.has(obj.id)) {
          set.delete(obj.id);
        } else {
          set.add(obj.id);
        }
        obj = {};
        ({ guild_id: obj3.guildId, id: obj3.channelId } = closure_0);
        obj.tagId = obj.id;
        const _Array = FORUM_CHANNEL_HEADER.Array;
        obj.filterTagIds = _Array.from(set);
        obj.added = !set.has(obj.id);
        obj = { page: outer2_9.GUILD_CHANNEL };
        FORUM_CHANNEL_HEADER = outer2_10.FORUM_CHANNEL_HEADER;
        obj.section = FORUM_CHANNEL_HEADER;
        obj.object = outer2_8.CHANNEL_TAG;
        obj.location = obj;
        const result = channel(first[7]).trackForumTagFilterClicked(obj);
        outer1_3(set);
        const obj2 = channel(first[7]);
      }
    };
    return outer1_11(channel(first[15]).TableCheckboxRow, obj, emojiId.id);
  });
  obj3.children = jsx(channel(first[14]).TableRowGroup, { hasIcons: true });
  obj.children = jsx(channel(first[13]).BottomSheetScrollView, {});
  return jsx(channel(first[9]).ActionSheet, {});
};

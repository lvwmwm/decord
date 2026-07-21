// Module ID: 11788
// Function ID: 91507
// Name: EmojiIcon
// Dependencies: []
// Exports: default

// Module 11788 (EmojiIcon)
function EmojiIcon(arg0) {
  let emojiName;
  ({ emojiId: closure_0, emojiName } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != closure_0) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(closure_0);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji };
  let emojiURL;
  if (null != stateFromStores) {
    obj = {};
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    obj.size = 18;
    emojiURL = importDefault(dependencyMap[18]).getEmojiURL(obj);
    const obj3 = importDefault(dependencyMap[18]);
  }
  obj.src = emojiURL;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj.name = str;
  return jsx(importDefault(dependencyMap[17]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ useForumChannelStore: closure_6, useForumChannelStoreApi: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp3 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[6]).createStyles({ emoji: {}, imageEmoji: { <string:1632221346>: null, <string:2722977214>: null }, textEmoji: { PX_16: "LengthDelimited", ix: "Array" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let closure_1 = callback3();
  const tmp2 = callback(React.useState(new Set(callback2(channel.id).tagFilter)), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  let obj = arg1(dependencyMap[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    const state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  obj = { scrollable: true };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.TdqRTh);
  let str = " ";
  if (first.size > 0) {
    const intl2 = arg1(dependencyMap[11]).intl;
    const obj1 = { count: first.size };
    str = intl2.formatToPlainString(arg1(dependencyMap[11]).t./FzHJK, obj1);
  }
  obj.subtitle = str;
  const obj2 = {
    onPress() {
      callback(new Set());
    }
  };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[11]).t.VkKicb);
  obj.leading = jsx(arg1(dependencyMap[12]).ActionSheetHeaderPressableText, obj2);
  obj.header = jsx(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj);
  const obj3 = {};
  const obj4 = { hasIcons: true };
  const availableTags = channel.availableTags;
  obj4.children = availableTags.map((emojiId) => {
    const channel = emojiId;
    let obj = {};
    obj = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
    obj.icon = callback2(closure_13, obj);
    obj.label = emojiId.name;
    const intl = channel(first[11]).intl;
    obj = { tagName: emojiId.name };
    obj.accessibilityLabel = intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj);
    obj.checked = first.has(emojiId.id);
    obj.onPress = function onPress() {
      let obj = arg0;
      if (null != arg0) {
        let FORUM_CHANNEL_HEADER = globalThis;
        const _Set = Set;
        const set = new Set(closure_2);
        if (set.has(obj.id)) {
          set.delete(obj.id);
        } else {
          set.add(obj.id);
        }
        obj = {};
        ({ guild_id: obj3.guildId, id: obj3.channelId } = arg0);
        obj.tagId = obj.id;
        const _Array = FORUM_CHANNEL_HEADER.Array;
        obj.filterTagIds = _Array.from(set);
        obj.added = !set.has(obj.id);
        obj = { page: constants2.GUILD_CHANNEL };
        FORUM_CHANNEL_HEADER = constants3.FORUM_CHANNEL_HEADER;
        obj.section = FORUM_CHANNEL_HEADER;
        obj.object = constants.CHANNEL_TAG;
        obj.location = obj;
        const result = arg0(closure_2[7]).trackForumTagFilterClicked(obj);
        callback(set);
        const obj2 = arg0(closure_2[7]);
      }
    };
    return callback2(channel(first[15]).TableCheckboxRow, obj, emojiId.id);
  });
  obj3.children = jsx(arg1(dependencyMap[14]).TableRowGroup, obj4);
  obj.children = jsx(arg1(dependencyMap[13]).BottomSheetScrollView, obj3);
  return jsx(arg1(dependencyMap[9]).ActionSheet, obj);
};

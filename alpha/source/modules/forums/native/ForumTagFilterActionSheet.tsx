// Module ID: 14324
// Function ID: 14325
// Name: ForumTagFilterActionSheet
// Dependencies: [32, 19, 6790, 13713, 1072, 21, 5009, 8196, 5588, 7360, 7315, 1114, 9001, 5270, 7054, 6968, 504, 7294, 1410, 2]
// Exports: default

// Module 14324 (ForumTagFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import EmojiDefault from "Emoji" /* 7294 */;
import Tracking from "Tracking" /* 8196 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import ForumChannelStore from "ForumChannelStore" /* 13713 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp5;
const AvatarUtilsDefault = tmp5(1410);
function EmojiIcon(arg0) {
  let emojiName;
  let emojiURL;
  ({ emojiId: require, emojiName } = arg0);
  const tmp = closure_12();
  const items = [EmojiStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != require) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const obj2 = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emojiName };
  emojiURL = undefined;
  const tmp4 = jsx;
  const tmp6 = EmojiDefault;
  if (null != stateFromStores) {
    const obj3 = { id: null, animated: null, size: 18 };
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    const tmp5Result = AvatarUtilsDefault;
    emojiURL = tmp5Result.getEmojiURL(obj3);
  }
  if (emojiName == null) {
    emojiName = "";
  }
  return tmp4(tmp6, obj2);
}
let _slicedToArray = _slicedToArray_mod;
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: metroImportDefault } = ForumChannelStore);
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  let ActionSheetHeaderPressableText;
  let BottomSheetScrollView;
  let TableRowGroup;
  let availableTags;
  let closure_3;
  let first;
  let formatToPlainStringResult;
  let intl;
  let intl4;
  let obj5;
  let obj6;
  let obj7;
  channel = channel.channel;
  first = undefined;
  _slicedToArray = undefined;
  const tagFilter = closure_6(channel.id).tagFilter;
  let state = closure_7();
  const useState = react.useState;
  set = new Set(tagFilter);
  [first, _slicedToArray] = useState(set);
  let obj = channel(first[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  const ActionSheet = channel(first[9]).ActionSheet;
  let obj2 = { title: intl.string(channel(first[11]).t.TdqRTh), subtitle: formatToPlainStringResult, leading: tmp7(ActionSheetHeaderPressableText, obj5) };
  const BottomSheetTitleHeader = channel(first[10]).BottomSheetTitleHeader;
  intl = channel(first[11]).intl;
  if (first.size > 0) {
    const intl3 = tmp4(tmp5[11]).intl;
    let obj3 = { count: first.size };
    formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj3);
  } else {
    const intl2 = tmp4(tmp5[11]).intl;
    formatToPlainStringResult = intl2.string(tmp4(tmp5[11]).t.sAYgZc);
  }
  const obj4 = { scrollable: true, header: jsx(BottomSheetTitleHeader, obj2), children: jsx(BottomSheetScrollView, obj6) };
  obj5 = {
    onPress: function handleClear() {
      set = new Set();
      closure_3(set);
    },
    label: intl4.string(channel(first[11]).t.VkKicb)
  };
  ActionSheetHeaderPressableText = tmp4(tmp5[12]).ActionSheetHeaderPressableText;
  intl4 = tmp4(tmp5[11]).intl;
  obj6 = { children: jsx(TableRowGroup, obj7) };
  BottomSheetScrollView = tmp4(tmp5[13]).BottomSheetScrollView;
  obj7 = {
    hasIcons: true,
    children: availableTags.map((emojiId) => {
      let obj2 = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
      const TableCheckboxRow = channel(first[15]).TableCheckboxRow;
      const intl = channel(first[11]).intl;
      const obj3 = { tagName: emojiId.name };
      return <TableCheckboxRow key={arg0.id} icon={null} label={arg0.name} accessibilityLabel={intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj3)} checked={first.has(arg0.id)} onPress={function onPress() {
        let obj2;
        if (null != emojiId) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(first);
          if (set.has(emojiId.id)) {
            set.delete(emojiId.id);
          } else {
            set.add(emojiId.id);
          }
          const obj = { guildId: null, channelId: null, tagId: emojiId.id, filterTagIds: Array.from(set), added: !set.has(emojiId.id), location: obj2 };
          ({ guild_id: obj.guildId, id: obj.channelId } = channel);
          const _Array = Array;
          const trackForumTagFilterClicked = Tracking.trackForumTagFilterClicked;
          Tracking;
          obj2 = { page: constants.GUILD_CHANNEL, section: constants2.FORUM_CHANNEL_HEADER, object: metroImportAll.CHANNEL_TAG };
          const result = trackForumTagFilterClicked(obj);
          closure_3(set);
        }
      }} />;
    })
  };
  availableTags = channel.availableTags;
  TableRowGroup = tmp4(tmp5[14]).TableRowGroup;
  return jsx(ActionSheet, obj4);
};

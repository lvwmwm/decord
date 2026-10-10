// Module ID: 12531
// Function ID: 12532
// Name: ForumTagFilterActionSheet
// Dependencies: [32, 19, 5987, 11675, 1085, 21, 5092, 558, 576, 7903, 5396, 1126, 8562, 6838, 6176, 6306, 6264, 6898, 504, 1415, 6819, 2]

// Module 12531 (ForumTagFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import EmojiDefault from "Emoji" /* 6819 */;
import Tracking from "Tracking" /* 7903 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import ForumChannelStore from "ForumChannelStore" /* 11675 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_0, importDefault, obj1, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: metroImportDefault } = ForumChannelStore);
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const jsx = Fragment.jsx;
let c12 = 18;
let closure_13 = createStyles.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostTagsActionSheet(channel) {
  let closure_3;
  let closure_4;
  let first;
  let tmp5;
  let obj = channel(first[8]);
  const cResult = obj.c(29);
  channel = channel.channel;
  const tagFilter = closure_6(channel.id).tagFilter;
  const tmp4 = closure_7();
  importDefault = tmp4;
  if (cResult[0] !== tagFilter) {
    let _Set = Set;
    let self = this;
    let self2 = this;
    set = new Set(tagFilter);
    cResult[0] = tagFilter;
    cResult[1] = set;
    tmp5 = set;
  } else {
    tmp5 = cResult[1];
  }
  [first, _slicedToArray] = react.useState(tmp5);
  if (cResult[2] === channel.guild_id) {
    if (cResult[3] === channel.id) {
      let tmp12;
      let tmp14;
      if (cResult[4] === first) {
        tmp12 = cResult[5];
      }
      react = tmp12;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        function handleClear() {
          set = new Set();
          closure_3(set);
        }
        cResult[6] = handleClear;
        tmp14 = handleClear;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === channel.id) {
        if (cResult[8] === first) {
          let tmp15;
          let tmp17;
          let tmp19;
          let tmp21;
          let tmp24;
          let tmp27;
          if (cResult[9] === tmp4) {
            tmp15 = cResult[10];
          }
          const tmpResult = channel(first[10]);
          const unmountEffect = tmpResult.useUnmountEffect(tmp15);
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[11]).intl;
            const stringResult = intl.string(channel(first[11]).t.TdqRTh);
            cResult[11] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] !== first.size) {
            let str2 = " ";
            if (first.size > 0) {
              const intl2 = tmp(tmp2[11]).intl;
              let obj2 = { count: first.size };
              str2 = intl2.formatToPlainString(tmp(tmp2[11]).t["/FzHJK"], obj2);
            }
            cResult[12] = first.size;
            cResult[13] = str2;
            tmp19 = str2;
          } else {
            tmp19 = cResult[13];
          }
          const _Symbol3 = Symbol;
          class H {
            constructor() {
              state = state.getState();
              state.setTagFilter(channel.id, first);
            }
          }
          if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
            const ActionSheetHeaderPressableText = tmp(tmp2[12]).ActionSheetHeaderPressableText;
            const intl3 = tmp(tmp2[11]).intl;
            const tmp23 = <ActionSheetHeaderPressableText onPress={tmp14} label={intl3.string(channel(first[11]).t.VkKicb)} />;
            class H {
              constructor() {
                state = state.getState();
                state.setTagFilter(channel.id, first);
              }
            }
            cResult[14] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] !== tmp19) {
            const tmp26 = jsx(channel(first[13]).BottomSheetTitleHeader, { title: tmp17, subtitle: tmp19, leading: tmp21 });
            cResult[15] = tmp19;
            class H {
              constructor() {
                state = state.getState();
                state.setTagFilter(channel.id, first);
              }
            }
            cResult[16] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[16];
          }
          if (cResult[17] === channel.availableTags) {
            if (cResult[18] === first) {
              let tmp30;
              if (cResult[19] === tmp12) {
                tmp27 = cResult[20];
              }
              if (cResult[24] !== tmp27) {
                const BottomSheetScrollView = tmp(tmp2[15]).BottomSheetScrollView;
                const tmp32 = <BottomSheetScrollView>{null}</BottomSheetScrollView>;
                class H {
                  constructor() {
                    state = state.getState();
                    state.setTagFilter(channel.id, first);
                  }
                }
                cResult[25] = tmp32;
                tmp30 = tmp32;
              } else {
                tmp30 = cResult[25];
              }
              if (cResult[26] === tmp30) {
                let tmp33;
                if (cResult[27] === tmp24) {
                  tmp33 = cResult[28];
                }
                return tmp33;
              }
              const tmp35 = jsx(channel(first[17]).ActionSheet, { scrollable: true, header: tmp24, children: tmp30 });
              class H {
                constructor() {
                  state = state.getState();
                  state.setTagFilter(channel.id, first);
                }
              }
              cResult[26] = tmp30;
              cResult[27] = tmp24;
              class L {
                constructor(arg0) {
                  closure_0 = channel;
                  obj = { icon: null, label: null, accessibilityLabel: null, checked: null, onPress: null };
                  obj1 = { emojiId: channel.emojiId, emojiName: channel.emojiName };
                  TableCheckboxRow = channel(closure_2[14]).TableCheckboxRow;
                  obj.icon = closure_1_11(closure_1_14, obj1);
                  obj.label = channel.name;
                  intl = channel(closure_2[11]).intl;
                  obj4 = { tagName: channel.name };
                  obj.accessibilityLabel = intl.formatToPlainString(channel(closure_2[11]).t.tXXD6v, obj4);
                  obj.checked = closure_2.has(channel.id);
                  obj.onPress = function onPress() {
                    return closure_4(emojiId);
                  };
                  return closure_1_11(TableCheckboxRow, obj, channel.id);
                }
              }
              tmp33 = tmp35;
            }
          }
          if (cResult[21] === first) {
            let tmp28;
            if (cResult[22] === tmp12) {
              tmp28 = cResult[23];
            }
            const availableTags = channel.availableTags;
            const mapped = availableTags.map(tmp28);
            cResult[17] = channel.availableTags;
            cResult[18] = first;
            class H {
              constructor() {
                state = state.getState();
                state.setTagFilter(channel.id, first);
              }
            }
            cResult[20] = mapped;
            tmp27 = mapped;
          }
          class L {
            constructor(arg0) {
              closure_0 = channel;
              obj = { icon: null, label: null, accessibilityLabel: null, checked: null, onPress: null };
              obj1 = { emojiId: channel.emojiId, emojiName: channel.emojiName };
              TableCheckboxRow = channel(closure_2[14]).TableCheckboxRow;
              obj.icon = closure_1_11(closure_1_14, obj1);
              obj.label = channel.name;
              intl = channel(closure_2[11]).intl;
              obj4 = { tagName: channel.name };
              obj.accessibilityLabel = intl.formatToPlainString(channel(closure_2[11]).t.tXXD6v, obj4);
              obj.checked = closure_2.has(channel.id);
              obj.onPress = function onPress() {
                return closure_4(emojiId);
              };
              return closure_1_11(TableCheckboxRow, obj, channel.id);
            }
          }
          cResult[21] = first;
          cResult[22] = tmp12;
          cResult[23] = L;
          tmp28 = L;
        }
      }
      class H {
        constructor() {
          state = state.getState();
          state.setTagFilter(channel.id, first);
        }
      }
      cResult[7] = channel.id;
      cResult[8] = first;
      cResult[9] = tmp4;
      cResult[10] = H;
      tmp15 = H;
    }
  }
  function toggleTag(id) {
    let obj2;
    if (null != id) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(first);
      if (set.has(id.id)) {
        set.delete(id.id);
      } else {
        set.add(id.id);
      }
      const obj = { guildId: null, channelId: null, tagId: id.id, filterTagIds: Array.from(set), added: !set.has(id.id), location: obj2 };
      ({ guild_id: obj.guildId, id: obj.channelId } = channel);
      const _Array = Array;
      const trackForumTagFilterClicked = Tracking.trackForumTagFilterClicked;
      Tracking;
      obj2 = { page: constants.GUILD_CHANNEL, section: constants2.FORUM_CHANNEL_HEADER, object: metroImportAll.CHANNEL_TAG };
      const result = trackForumTagFilterClicked(obj);
      closure_3(set);
    }
  }
  cResult[2] = channel.guild_id;
  cResult[3] = channel.id;
  cResult[4] = first;
  cResult[5] = toggleTag;
  tmp12 = toggleTag;
}) : (function ForumPostTagsActionSheet(channel) {
  let ActionSheetHeaderPressableText;
  let BottomSheetScrollView;
  let TableRowGroup;
  let availableTags;
  let closure_3;
  let first;
  let intl;
  let intl3;
  let obj5;
  let obj6;
  let obj7;
  let str;
  channel = channel.channel;
  first = undefined;
  _slicedToArray = undefined;
  const tagFilter = closure_6(channel.id).tagFilter;
  let state = closure_7();
  const useState = react.useState;
  set = new Set(tagFilter);
  [first, _slicedToArray] = useState(set);
  let obj = channel(first[10]);
  const unmountEffect = obj.useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  const ActionSheet = channel(first[17]).ActionSheet;
  let obj2 = { title: intl.string(channel(first[11]).t.TdqRTh), subtitle: str, leading: tmp7(ActionSheetHeaderPressableText, obj5) };
  const BottomSheetTitleHeader = channel(first[13]).BottomSheetTitleHeader;
  intl = channel(first[11]).intl;
  str = " ";
  if (first.size > 0) {
    const intl2 = tmp4(tmp5[11]).intl;
    let obj3 = { count: first.size };
    str = intl2.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj3);
  }
  const obj4 = { scrollable: true, header: jsx(BottomSheetTitleHeader, obj2), children: jsx(BottomSheetScrollView, obj6) };
  obj5 = {
    onPress: function handleClear() {
      set = new Set();
      closure_3(set);
    },
    label: intl3.string(channel(first[11]).t.VkKicb)
  };
  ActionSheetHeaderPressableText = tmp4(tmp5[12]).ActionSheetHeaderPressableText;
  intl3 = tmp4(tmp5[11]).intl;
  obj6 = { children: jsx(TableRowGroup, obj7) };
  BottomSheetScrollView = tmp4(tmp5[15]).BottomSheetScrollView;
  obj7 = {
    hasIcons: true,
    children: availableTags.map((emojiId) => {
      let obj2 = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
      const TableCheckboxRow = channel(first[14]).TableCheckboxRow;
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
  TableRowGroup = tmp4(tmp5[16]).TableRowGroup;
  return jsx(ActionSheet, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiIcon(emojiId) {
  let first;
  let tmp7;
  let tmp9;
  const tmp = emojiId;
  const obj = emojiId(576);
  const cResult = obj.c(11);
  emojiId = emojiId.emojiId;
  let str = emojiId.emojiName;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    const fn = function n() {
      let usableCustomEmojiById = null;
      if (null != emojiId) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = emojiId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] !== stateFromStores) {
    let emojiURL;
    if (null != stateFromStores) {
      const obj2 = { id: null, animated: null, size };
      ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
      const obj3 = AvatarUtilsDefault;
      emojiURL = obj3.getEmojiURL(obj2);
    }
    cResult[3] = stateFromStores;
    cResult[4] = emojiURL;
    tmp9 = emojiURL;
  } else {
    tmp9 = cResult[4];
  }
  if (str == null) {
    str = "";
  }
  if (cResult[5] === tmp4.emoji) {
    if (cResult[6] === tmp4.imageEmoji) {
      if (cResult[7] === tmp4.textEmoji) {
        if (cResult[8] === tmp9) {
          let tmp14;
          if (cResult[9] === str) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
    }
  }
  const tmp15 = jsx(EmojiDefault, { style: tmp4.emoji, textEmojiStyle: tmp4.textEmoji, fastImageStyle: tmp4.imageEmoji, src: tmp9, name: str });
  cResult[5] = tmp4.emoji;
  cResult[6] = tmp4.imageEmoji;
  cResult[7] = tmp4.textEmoji;
  cResult[8] = tmp9;
  cResult[9] = str;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : (function EmojiIcon(arg0) {
  let emojiName;
  let emojiURL;
  ({ emojiId: require, emojiName } = arg0);
  const tmp = closure_13();
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
    const obj3 = { id: null, animated: null, size };
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    const tmp5Result = AvatarUtilsDefault;
    emojiURL = tmp5Result.getEmojiURL(obj3);
  }
  if (emojiName == null) {
    emojiName = "";
  }
  return tmp4(tmp6, obj2);
});
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default tmp4;

// Module ID: 11299
// Function ID: 11300
// Name: StringSelectComponentActionSheet
// Dependencies: [32, 19, 21, 4836, 576, 7576, 1979, 4800, 11300, 6551, 4832, 1115, 2]
// Exports: default

// Module 11299 (StringSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1979 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import EmojiDefault from "Emoji" /* 6551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let obj2;
let react = react_mod;
const jsx = Fragment.jsx;
let obj = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 }, emojiWrapper: obj2, textEmoji: { fontSize: 16, color: "#000000" }, fastImageEmoji: { width: 24, height: 24 } };
obj2 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default function StringSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let closure_2;
  let closure_4;
  let containerId;
  let items5;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  let first;
  react = undefined;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(7576);
  const useState = react.useState;
  set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  let tmp3 = first(useState(set), 2);
  first = tmp3[0];
  react = tmp3[1];
  let items = [selectionActionComponent];
  const memo = react.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = react.useCallback((values) => {
    const obj = { type: Server.ComponentType.STRING_SELECT, values };
    onSubmit(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = react.useCallback((arg0, value) => {
    let closure_0 = value;
    let tmp = first;
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    let closure_1 = tmp3;
    const tmp4 = memo;
    if (tmp4) {
      if (!hasItem) {
        tmp3 = tmp.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        closure_4((items) => {
          set = new Set(items);
          const tmp = closure_1;
          if (tmp) {
            set.add(closure_0.value);
          } else {
            set.delete(closure_0.value);
          }
          return set;
        });
      }
    } else {
      let items;
      const tmp5 = callback;
      if (hasItem) {
        items = [];
      } else {
        items = [value.value];
      }
      tmp5(items);
    }
  }, items2);
  let selectionOptionItemWithDescription = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  let obj2 = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
        ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
        tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options,
    itemStyle: items5,
    selectedCount: first.size,
    isSelected(value) {
      return first.has(value.value);
    },
    submitSelection() {
      const items = [...first];
      return callback(items);
    },
    itemAccessibilityLabel(emoji) {
      const intl = selectionActionComponent(closure_2[11]).intl;
      const formatToPlainString = intl.formatToPlainString;
      emoji = emoji.emoji;
      let name;
      const ZbrH2f = selectionActionComponent(closure_2[11]).t.ZbrH2f;
      if (emoji != null) {
        name = emoji.name;
      }
      const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
      return formatToPlainString(ZbrH2f, obj);
    },
    channelId,
    allowEmpty
  };
  const tmp10 = onSubmit(11300);
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  items5 = [selectionOptionItemWithDescription];
  return tmp9(tmp10, obj2);
};

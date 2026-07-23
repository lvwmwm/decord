// Module ID: 10966
// Function ID: 85262
// Name: StringSelectComponentActionSheet
// Dependencies: [57, 31, 33, 4130, 689, 7801, 1881, 4098, 10967, 5151, 4126, 1212, 2]
// Exports: default

// Module 10966 (StringSelectComponentActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 } };
_createForOfIteratorHelperLoose = { flexShrink: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.emojiWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 16, color: "#000000" };
_createForOfIteratorHelperLoose.fastImageEmoji = { width: 24, height: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default function StringSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let containerId;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  let onSubmit = selectionActionComponent.onSubmit;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  const dependencyMap = tmp;
  let obj = selectionActionComponent(7801);
  const tmp3 = first(React.useState(new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId))), 2);
  first = tmp3[0];
  React = tmp3[1];
  let items = [selectionActionComponent];
  const memo = React.useMemo(() => selectionActionComponent.maxValues > 1, items);
  let items1 = [onSubmit];
  callback = React.useCallback((values) => {
    tmp = onSubmit({ type: selectionActionComponent(tmp[6]).ComponentType.STRING_SELECT, values });
    const obj = { type: selectionActionComponent(tmp[6]).ComponentType.STRING_SELECT, values };
    onSubmit(tmp[7]).hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = React.useCallback((arg0, value) => {
    const selectionActionComponent = value;
    let tmp = !first.has(value.value);
    const onSubmit = tmp;
    if (memo) {
      if (tmp) {
        tmp = first.size >= selectionActionComponent.maxValues;
      }
      if (!tmp) {
        callback((items) => {
          const set = new Set(items);
          if (closure_1) {
            set.add(value.value);
          } else {
            set.delete(value.value);
          }
          return set;
        });
      }
    } else {
      if (tmp) {
        const items = [value.value];
        let items1 = items;
      } else {
        items1 = [];
      }
      callback(items1);
      const tmp2 = callback;
    }
  }, items2);
  let selectionOptionItemWithDescription = React.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = React.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  obj = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = { src: emoji.emoji.src, name: emoji.emoji.name };
        ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = tmp);
        tmp = memo(onSubmit(tmp[9]), obj);
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          const obj = { style: tmp.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description };
          tmp = memo(selectionActionComponent(tmp[10]).Text, obj);
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options
  };
  let set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  const items5 = [selectionOptionItemWithDescription];
  obj.itemStyle = items5;
  obj.selectedCount = first.size;
  obj.isSelected = function isSelected(value) {
    return first.has(value.value);
  };
  obj.submitSelection = function submitSelection() {
    const items = [...first];
    return callback(items);
  };
  obj.itemAccessibilityLabel = function itemAccessibilityLabel(emoji) {
    let name;
    const intl = selectionActionComponent(tmp[11]).intl;
    const obj = {};
    emoji = emoji.emoji;
    if (null != emoji) {
      name = emoji.name;
    }
    obj.emojiName = name;
    ({ label: obj.optionName, description: obj.optionDescription } = emoji);
    return intl.formatToPlainString(selectionActionComponent(tmp[11]).t.ZbrH2f, obj);
  };
  obj.channelId = channelId;
  obj.allowEmpty = allowEmpty;
  return tmp9(onSubmit(10967), obj);
};

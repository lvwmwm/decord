// Module ID: 10955
// Function ID: 85189
// Name: StringSelectComponentActionSheet
// Dependencies: []
// Exports: default

// Module 10955 (StringSelectComponentActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.emojiWrapper = obj;
obj.textEmoji = {};
obj.fastImageEmoji = { bhk: "<string:1027735553>", bic: "<string:4143972873>" };
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default function StringSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let containerId;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const arg1 = selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  const importDefault = onSubmit;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[5]);
  const tmp3 = callback(React.useState(new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId))), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const items = [selectionActionComponent];
  const memo = React.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const jsx = memo;
  const items1 = [onSubmit];
  callback = React.useCallback((values) => {
    const tmp = onSubmit({ type: selectionActionComponent(tmp[6]).ComponentType.STRING_SELECT, values });
    const obj = { type: selectionActionComponent(tmp[6]).ComponentType.STRING_SELECT, values };
    onSubmit(tmp[7]).hideActionSheet();
  }, items1);
  const callback2 = callback;
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
          if (tmp) {
            set.add(arg1.value);
          } else {
            set.delete(arg1.value);
            const tmp = arg1;
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
          const obj = { style: tmp.selectionOptionItemDescription, children: description.description };
          tmp = memo(selectionActionComponent(tmp[10]).Text, obj);
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options
  };
  const set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp9 = jsx;
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
    const items = [...closure_3];
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
  return tmp9(importDefault(dependencyMap[8]), obj);
};

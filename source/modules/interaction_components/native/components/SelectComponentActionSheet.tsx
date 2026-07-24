// Module ID: 10994
// Function ID: 85466
// Name: SelectionHeader
// Dependencies: [31, 27, 1348, 1906, 5188, 33, 4130, 689, 5186, 1212, 4543, 8469, 3848, 5165, 7638, 8569, 5160, 3843, 1557, 1450, 5084, 566, 4098, 5187, 5189, 2]
// Exports: default

// Module 10994 (SelectionHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_7 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function SelectionHeader(renderIcon) {
  let result;
  let dependencyMap;
  let labelComponent;
  let onQueryChange;
  let selectButtonDisabled;
  let selectedOptions;
  let selectionActionComponent;
  renderIcon = renderIcon.renderIcon;
  ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
  ({ onPressOptionItem: dependencyMap, onRemoveOptionItem: result, onQueryChange } = renderIcon);
  let tmp = _createForOfIteratorHelperLoose();
  let _isNativeReflectConstruct = tmp;
  let closure_6 = React.useRef(null);
  const items = [selectedOptions, tmp, renderIcon];
  const memo = React.useMemo(() => {
    let mapped;
    if (null != selectedOptions) {
      mapped = selectedOptions.map((id) => {
        let obj = { id: id.value, text: id.label };
        obj = { style: outer1_5.tagListIconWrapper };
        obj = { style: outer1_5.tagListIcon, children: outer1_0(id) };
        obj.children = outer2_8(onQueryChange, obj);
        obj.icon = outer2_8(onQueryChange, obj);
        return obj;
      });
    }
    if (null == mapped) {
      mapped = [];
    }
    return mapped;
  }, items);
  let obj = {};
  obj = {};
  let label;
  if (null != labelComponent) {
    label = labelComponent.label;
  }
  if (null == label) {
    label = selectionActionComponent.placeholder;
  }
  if (null == label) {
    const intl = renderIcon(1212).intl;
    label = intl.string(renderIcon(1212).t.Otr6W2);
  }
  obj.title = label;
  let formatToPlainStringResult;
  if (selectionActionComponent.maxValues > 1) {
    if (selectionActionComponent.minValues > 0) {
      const intl2 = renderIcon(1212).intl;
      obj = { count: selectionActionComponent.minValues };
      formatToPlainStringResult = intl2.formatToPlainString(renderIcon(1212).t.Jmwzdx, obj);
    }
  }
  obj.subtitle = formatToPlainStringResult;
  let tmp13Result;
  if (selectionActionComponent.maxValues > 1) {
    const obj1 = { size: "sm" };
    let str2 = "primary";
    if (selectButtonDisabled) {
      str2 = "secondary";
    }
    obj1.variant = str2;
    obj1.disabled = selectButtonDisabled;
    obj1.onPress = renderIcon.submitSelection;
    const intl3 = renderIcon(1212).intl;
    obj1.text = intl3.string(renderIcon(1212).t.XqMe3N);
    tmp13Result = callback(renderIcon(4543).Button, obj1);
    const tmp13 = callback;
  }
  obj.trailing = tmp13Result;
  const items1 = [callback(renderIcon(5186).BottomSheetTitleHeader, obj), ];
  let tmp19Result = null;
  if (null != onQueryChange) {
    tmp19Result = null;
    if (null != memo) {
      const obj2 = { inActionSheet: true, style: tmp.textInputWrapper };
      let tmp23;
      if (tmp2) {
        if (0 !== memo.length) {
          tmp23 = callback(onQueryChange, {});
        }
      }
      obj2.icon = tmp23;
      obj2.tags = memo;
      obj2.onRemove = function onRemove(arg0) {
        let tmp;
        if (null != selectedOptions) {
          tmp = selectedOptions[arg0];
        }
        if (null != tmp) {
          null != result ? result : closure_2(arg0, tmp);
        }
      };
      obj2.onChangeText = function onChangeText(arg0) {
        const current = ref.current;
        if (null != current) {
          current.scrollTo({ y: 0, animated: false });
        }
        onQueryChange(arg0);
      };
      tmp19Result = callback(selectedOptions(8469), obj2);
      const tmp19 = callback;
      const tmp22 = selectedOptions(8469);
    }
  }
  items1[1] = tmp19Result;
  obj.children = items1;
  return closure_10(closure_9, obj);
}
function SelectionOptionItem(item) {
  let clearable;
  let dependencyMap;
  let disabled;
  let end;
  let iconContainerStyle;
  let importDefault;
  let itemAccessibilityLabel;
  let multi;
  let renderDescription;
  let renderIcon;
  let renderOptionSuffix;
  let selected;
  let skipIcon;
  let start;
  item = item.item;
  ({ onPressOptionItem: importDefault, selected, disabled, index: dependencyMap, itemAccessibilityLabel, renderDescription, renderOptionSuffix } = item);
  ({ clearable, start, end, iconContainerStyle, skipIcon, multi, renderIcon } = item);
  let obj = item(3848);
  obj = {};
  let tmp2 = null != selected;
  if (tmp2) {
    tmp2 = selected;
  }
  obj.checked = tmp2;
  obj.disabled = disabled;
  const checkboxA11yNative = obj.useCheckboxA11yNative(obj);
  let obj2 = item(3848);
  obj = {};
  let tmp4 = null != selected;
  if (tmp4) {
    tmp4 = selected;
  }
  obj.selected = tmp4;
  obj.disabled = disabled;
  let radioA11yNative = obj2.useRadioA11yNative(obj);
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const obj1 = { accessibilityRole: radioA11yNative.accessibilityRole };
  let result;
  if (null != itemAccessibilityLabel) {
    result = itemAccessibilityLabel(item);
  }
  obj1.accessibilityLabel = result;
  obj1.accessibilityState = radioA11yNative.accessibilityState;
  obj1.start = start;
  obj1.end = end;
  obj1.disabled = disabled;
  let tmp8 = null;
  if (!skipIcon) {
    obj2 = {};
    const items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
    obj2.style = items;
    obj2.children = renderIcon(item);
    tmp8 = callback(View, obj2);
  }
  obj1.icon = tmp8;
  obj1.label = item.label;
  obj1.labelLineClamp = 1;
  let renderDescriptionResult;
  if (null != renderDescription) {
    renderDescriptionResult = renderDescription(item);
  }
  obj1.subLabel = renderDescriptionResult;
  obj1.subLabelLineClamp = 1;
  obj1.onPress = function onPress() {
    return callback(closure_2, item);
  };
  const obj3 = { style: { flexDirection: "row" } };
  let renderOptionSuffixResult;
  if (null != renderOptionSuffix) {
    renderOptionSuffixResult = renderOptionSuffix(item);
  }
  const items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    const obj4 = {};
    if (!selected) {
      selected = false;
    }
    obj4.checked = selected;
    let tmp19Result = callback(item(7638).FormCheckbox, obj4);
    const tmp19 = callback;
  } else {
    tmp19Result = null;
    if (true === selected) {
      const obj5 = { color: "text-brand" };
      tmp19Result = callback(item(8569).CheckmarkSmallBoldIcon, obj5);
    }
  }
  items1[1] = tmp19Result;
  obj3.children = items1;
  obj1.trailing = closure_10(View, obj3);
  return callback(item(5165).TableRow, obj1);
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").space.PX_32, alignItems: "center" };
_createForOfIteratorHelperLoose.selectionOptionItemIconWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tagListIconWrapper = { width: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { width: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_16 };
let items = [{ scale: 0.75 }];
_createForOfIteratorHelperLoose.tagListIcon = { transform: items, top: -require("_createForOfIteratorHelperLoose").space.PX_4, left: -require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { transform: items, top: -require("_createForOfIteratorHelperLoose").space.PX_4, left: -require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.textInputWrapper = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interaction_components/native/components/SelectComponentActionSheet.tsx");

export default function SelectComponentActionSheet(selectionActionComponent) {
  let expanded;
  let iconContainerStyle;
  let labelComponent;
  let onQueryChange;
  let onRemoveOptionItem;
  let renderHeaderIcon;
  let selectedOptions;
  let submitSelection;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onPressOptionItem = selectionActionComponent.onPressOptionItem;
  const selectedCount = selectionActionComponent.selectedCount;
  let renderIcon = selectionActionComponent.renderIcon;
  ({ renderHeaderIcon, iconContainerStyle } = selectionActionComponent);
  const skipIcon = selectionActionComponent.skipIcon;
  const renderDescription = selectionActionComponent.renderDescription;
  const renderOptionSuffix = selectionActionComponent.renderOptionSuffix;
  const options = selectionActionComponent.options;
  const itemStyle = selectionActionComponent.itemStyle;
  const isSelected = selectionActionComponent.isSelected;
  const itemAccessibilityLabel = selectionActionComponent.itemAccessibilityLabel;
  const channelId = selectionActionComponent.channelId;
  const allowEmpty = selectionActionComponent.allowEmpty;
  ({ labelComponent, selectedOptions, onQueryChange, submitSelection, expanded, onRemoveOptionItem } = selectionActionComponent);
  const effect = renderIcon.useEffect(() => {
    const AccessibilityAnnouncer = selectionActionComponent(selectedCount[17]).AccessibilityAnnouncer;
    const intl = selectionActionComponent(selectedCount[9]).intl;
    AccessibilityAnnouncer.announce(intl.string(selectionActionComponent(selectedCount[9]).t["7gxe9o"]));
  }, []);
  const memo = renderIcon.useMemo(() => {
    const safeAreaInsets = selectionActionComponent(selectedCount[18]).getSafeAreaInsets();
    const obj = selectionActionComponent(selectedCount[18]);
    return renderOptionSuffix * (selectionActionComponent(selectedCount[19]).getWindowDimensions().height - selectionActionComponent(selectedCount[20]).NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  }, []);
  let obj = selectionActionComponent(selectedCount[21]);
  const items = [renderDescription];
  const stateFromStores = obj.useStateFromStores(items, () => renderDescription.getChannelId());
  const channel = skipIcon.getChannel(channelId);
  const items1 = [stateFromStores, channelId, channel];
  const effect1 = renderIcon.useEffect(() => {
    let isGuildVoiceResult = null != channel;
    if (isGuildVoiceResult) {
      isGuildVoiceResult = channel.isGuildVoice();
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = null == channelId;
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = stateFromStores === channelId;
    }
    if (!isGuildVoiceResult) {
      onPressOptionItem(selectedCount[22]).hideActionSheet();
      const obj = onPressOptionItem(selectedCount[22]);
    }
  }, items1);
  const items2 = [selectionActionComponent];
  const memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
  const items3 = [isSelected, memo1, allowEmpty, selectionActionComponent.maxValues, itemStyle, selectedCount, options.length, onPressOptionItem, renderIcon, iconContainerStyle, skipIcon, renderDescription, renderOptionSuffix, itemAccessibilityLabel];
  const callback = renderIcon.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const tmp = isSelected(item, index);
    const obj = { itemStyle, item, index, start: 0 === index, end: index === options.length - 1 };
    let tmp4 = memo1;
    if (!memo1) {
      tmp4 = allowEmpty;
    }
    obj.clearable = tmp4;
    obj.selected = tmp;
    let tmp5 = memo1;
    if (memo1) {
      tmp5 = selectedCount >= selectionActionComponent.maxValues;
    }
    if (tmp5) {
      tmp5 = !tmp;
    }
    if (!tmp5) {
      let tmp9 = !memo1 && tmp;
      if (tmp9) {
        tmp9 = !allowEmpty;
      }
      tmp5 = tmp9;
    }
    obj.disabled = tmp5;
    obj.onPressOptionItem = onPressOptionItem;
    obj.iconContainerStyle = iconContainerStyle;
    obj.skipIcon = skipIcon;
    obj.renderDescription = renderDescription;
    obj.renderIcon = renderIcon;
    obj.renderOptionSuffix = renderOptionSuffix;
    obj.itemAccessibilityLabel = itemAccessibilityLabel;
    obj.multi = memo1;
    return options(allowEmpty, obj);
  }, items3);
  obj = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded };
  obj = { selectionActionComponent, labelComponent };
  if (selectedCount > selectionActionComponent.maxValues) {
    obj.selectButtonDisabled = tmp13;
    obj.selectedOptions = selectedOptions;
    obj.submitSelection = submitSelection;
    obj.onQueryChange = onQueryChange;
    obj.onPressOptionItem = onPressOptionItem;
    obj.onRemoveOptionItem = onRemoveOptionItem;
    if (null != renderHeaderIcon) {
      renderIcon = renderHeaderIcon;
    }
    obj.renderIcon = renderIcon;
    obj.header = tmp11(tmp12, obj);
    const obj1 = {
      keyExtractor(arg0, arg1) {
          return "" + arg1;
        },
      data: options,
      renderItem: callback
    };
    const obj2 = { paddingHorizontal: onPressOptionItem(selectedCount[7]).space.PX_16, paddingBottom: onPressOptionItem(selectedCount[7]).space.PX_16 + onPressOptionItem(selectedCount[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom };
    obj1.contentContainerStyle = obj2;
    obj1.keyboardShouldPersistTaps = "always";
    let str2 = "radiogroup";
    if (memo1) {
      str2 = "none";
    }
    obj1.accessibilityRole = str2;
    obj.children = options(selectionActionComponent(selectedCount[24]).BottomSheetFlatList, obj1);
    return options(tmp10, obj);
  } else if (0 === selectedCount) {
    let tmp14 = !allowEmpty;
  } else {
    tmp14 = selectedCount < selectionActionComponent.minValues;
  }
};

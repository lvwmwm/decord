// Module ID: 11300
// Function ID: 11301
// Name: SelectComponentActionSheet
// Dependencies: [19, 17, 2045, 2099, 6572, 21, 4836, 576, 6570, 1115, 5281, 9036, 4548, 5917, 5929, 8742, 6402, 4541, 1613, 1479, 5994, 504, 4800, 6571, 6045, 2]
// Exports: default

// Module 11300 (SelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react_native2 from "react-native" /* 4548 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let items;
let metroImportAll;
let obj2;
let obj3;
let rect;
let size;
function SelectionHeader(renderIcon) {
  let formatToPlainStringResult;
  let intl3;
  let labelComponent;
  let onQueryChange;
  let selectButtonDisabled;
  let selectedOptions;
  let selectionActionComponent;
  let tmp5Result;
  let tmp5Result3;
  renderIcon = renderIcon.renderIcon;
  ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
  ({ onPressOptionItem: dependencyMap, onRemoveOptionItem: react, onQueryChange } = renderIcon);
  const submitSelection = renderIcon.submitSelection;
  let tmp = closure_11();
  let closure_5 = tmp;
  let tmp2 = selectionActionComponent.maxValues > 1;
  const ref = react.useRef(null);
  const items = [selectedOptions, tmp, renderIcon];
  const memo = react.useMemo(() => {
    let mapped;
    const arr = selectedOptions;
    if (selectedOptions != null) {
      mapped = arr.map((id) => {
        let obj2;
        let obj3;
        const obj = { id: id.value, text: id.label, icon: closure_2_8(onQueryChange, obj2) };
        obj2 = { style: closure_1_5.tagListIconWrapper, children: closure_2_8(onQueryChange, obj3) };
        obj3 = { style: closure_1_5.tagListIcon, children: renderIcon(id) };
        return obj;
      });
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items);
  let label;
  const BottomSheetTitleHeader = renderIcon(6570).BottomSheetTitleHeader;
  const tmp3 = closure_10;
  const tmp4 = closure_9;
  if (labelComponent != null) {
    label = labelComponent.label;
  }
  if (label == null) {
    label = selectionActionComponent.placeholder;
  }
  if (label == null) {
    const intl = tmp6(1115).intl;
    label = intl.string(tmp6(1115).t.Otr6W2);
  }
  let obj = { title: label, subtitle: formatToPlainStringResult, trailing: tmp5Result };
  formatToPlainStringResult = undefined;
  if (tmp2) {
    if (selectionActionComponent.minValues > 0) {
      const intl2 = tmp6(1115).intl;
      let obj2 = { count: selectionActionComponent.minValues };
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(1115).t.Jmwzdx, obj2);
    }
  }
  tmp5Result = undefined;
  if (tmp2) {
    let str = "primary";
    const Button = tmp6(5281).Button;
    if (selectButtonDisabled) {
      str = "secondary";
    }
    let obj3 = { size: "sm", variant: str, disabled: selectButtonDisabled, onPress: submitSelection, text: intl3.string(renderIcon(1115).t.XqMe3N) };
    intl3 = tmp6(1115).intl;
    tmp5Result = tmp5(Button, obj3);
  }
  const children = [closure_8(BottomSheetTitleHeader, obj), ];
  let tmp5Result4 = null;
  if (null != onQueryChange) {
    tmp5Result4 = null;
    if (null != memo) {
      const obj4 = {
        inActionSheet: true,
        style: tmp.textInputWrapper,
        icon: tmp5Result3,
        tags: memo,
        onRemove(arg0) {
              let tmp;
              if (selectedOptions != null) {
                tmp = selectedOptions[arg0];
              }
              if (null != tmp) {
                let tmp2 = react;
                if (null == react) {
                  tmp2 = dependencyMap;
                }
                tmp2(arg0, tmp);
              }
            },
        onChangeText(arg0) {
              const current = ref.current;
              if (current != null) {
                current.scrollTo({ y: 0, animated: false });
              }
              onQueryChange(arg0);
            }
      };
      tmp5Result3 = undefined;
      const tmp13 = selectedOptions(9036);
      if (tmp2) {
        if (0 !== memo.length) {
          tmp5Result3 = tmp5(onQueryChange, {});
        }
      }
      tmp5Result4 = tmp5(tmp13, obj4);
    }
  }
  children[1] = tmp5Result4;
  return tmp3(tmp4, { children });
}
function SelectionOptionItem(item) {
  let clearable;
  let closure_129_1;
  let closure_129_2;
  let disabled;
  let end;
  let iconContainerStyle;
  let itemAccessibilityLabel;
  let items;
  let items1;
  let multi;
  let obj3;
  let renderDescription;
  let renderDescriptionResult;
  let renderIcon;
  let renderOptionSuffix;
  let result;
  let selected;
  let skipIcon;
  let start;
  let tmp13;
  let tmp14;
  let tmp8Result;
  let tmp8Result2;
  item = item.item;
  ({ onPressOptionItem: closure_129_1, selected, disabled, index: closure_129_2, itemAccessibilityLabel, renderDescription, renderOptionSuffix } = item);
  ({ clearable, start, end, iconContainerStyle, skipIcon, multi, renderIcon } = item);
  let flag = selected;
  const tmp = closure_11();
  const useCheckboxA11yNative = react_native2.useCheckboxA11yNative;
  react_native2;
  if (selected == null) {
    flag = false;
  }
  const checkboxA11yNative = useCheckboxA11yNative({ checked: flag, disabled });
  let flag2 = selected;
  const useRadioA11yNative = react_native2.useRadioA11yNative;
  react_native2;
  if (selected == null) {
    flag2 = false;
  }
  let radioA11yNative = useRadioA11yNative({ selected: flag2, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const obj = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityLabel: result,
    accessibilityState: radioA11yNative.accessibilityState,
    start,
    end,
    disabled,
    icon: tmp8Result,
    label: item.label,
    labelLineClamp: 1,
    subLabel: renderDescriptionResult,
    subLabelLineClamp: 1,
    onPress() {
      return closure_1_1(closure_1_2, item);
    },
    trailing: tmp13(tmp14, obj3)
  };
  result = undefined;
  const TableRow = tmp2(5917).TableRow;
  if (itemAccessibilityLabel != null) {
    result = itemAccessibilityLabel(item);
  }
  tmp8Result = null;
  if (!skipIcon) {
    const obj2 = { style: items, children: renderIcon(item) };
    items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
    tmp8Result = tmp8(View, obj2);
  }
  renderDescriptionResult = undefined;
  if (renderDescription != null) {
    renderDescriptionResult = renderDescription(item);
  }
  let renderOptionSuffixResult;
  obj3 = { style: { flexDirection: "row" }, children: items1 };
  tmp13 = authStore;
  tmp14 = View;
  if (renderOptionSuffix != null) {
    renderOptionSuffixResult = renderOptionSuffix(item);
  }
  items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    const FormCheckbox = tmp2(5929).FormCheckbox;
    if (!selected) {
      selected = false;
    }
    const obj4 = { checked: selected };
    tmp8Result2 = tmp8(FormCheckbox, obj4);
  } else {
    tmp8Result2 = null;
    if (true === selected) {
      tmp8Result2 = tmp8(tmp2(8742).CheckmarkSmallBoldIcon, { color: "text-brand" });
    }
  }
  items1[1] = tmp8Result2;
  return metroImportAll(TableRow, obj);
}
const View = react_native.View;
let closure_7 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { selectionOptionItemIconWrapper: obj2, tagListIconWrapper: size, tagListIcon: rect, textInputWrapper: obj3 };
obj2 = { width: nativeDefault.space.PX_32, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
rect = { transform: items, top: -nativeDefault.space.PX_4, left: -nativeDefault.space.PX_4 };
items = [{ scale: 0.75 }];
obj3 = { paddingHorizontal: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/interaction_components/native/components/SelectComponentActionSheet.tsx");

export default function SelectComponentActionSheet(selectionActionComponent) {
  let BottomSheetFlatList;
  let expanded;
  let iconContainerStyle;
  let labelComponent;
  let obj3;
  let obj4;
  let obj5;
  let onQueryChange;
  let onRemoveOptionItem;
  let renderHeaderIcon;
  let selectedOptions;
  let str;
  let submitSelection;
  let tmp13;
  let tmp14;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onPressOptionItem = selectionActionComponent.onPressOptionItem;
  const selectedCount = selectionActionComponent.selectedCount;
  const renderIcon = selectionActionComponent.renderIcon;
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
  let tmp = onPressOptionItem;
  let tmp2 = selectedCount;
  ({ labelComponent, selectedOptions, onQueryChange, submitSelection, expanded, onRemoveOptionItem } = selectionActionComponent);
  const insets = onPressOptionItem(selectedCount[16])({ isKeyboardAwareOnAndroid: false }).insets;
  const effect = renderIcon.useEffect(() => {
    const AccessibilityAnnouncer = selectionActionComponent(selectedCount[17]).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = selectionActionComponent(selectedCount[9]).intl;
    announce(intl.string(selectionActionComponent(selectedCount[9]).t["7gxe9o"]));
  }, []);
  const memo = renderIcon.useMemo(() => {
    const obj = selectionActionComponent(selectedCount[18]);
    const safeAreaInsets = obj.getSafeAreaInsets();
    const obj2 = selectionActionComponent(selectedCount[19]);
    return renderOptionSuffix * (obj2.getWindowDimensions().height - selectionActionComponent(selectedCount[20]).NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  }, []);
  let tmp5 = selectionActionComponent;
  let obj = selectionActionComponent(selectedCount[21]);
  const items = [renderDescription];
  const stateFromStores = obj.useStateFromStores(items, () => renderDescription.getChannelId());
  const channel = skipIcon.getChannel(channelId);
  const items1 = [stateFromStores, channelId, channel];
  const effect1 = renderIcon.useEffect(() => {
    let isGuildVoiceResult;
    const obj = channel;
    if (channel != null) {
      isGuildVoiceResult = obj.isGuildVoice();
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = null == channelId;
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = stateFromStores === channelId;
    }
    if (!isGuildVoiceResult) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items1);
  const items2 = [selectionActionComponent];
  const memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
  const items3 = [isSelected, memo1, allowEmpty, selectionActionComponent.maxValues, itemStyle, selectedCount, options.length, onPressOptionItem, renderIcon, iconContainerStyle, skipIcon, renderDescription, renderOptionSuffix, itemAccessibilityLabel];
  const callback = renderIcon.useCallback((arg0) => {
    let index;
    let item;
    let tmp5;
    let tmp6;
    ({ item, index } = arg0);
    const tmp = isSelected(item, index);
    const obj = { itemStyle, item, index, start: 0 === index, end: index === options.length - 1, clearable: tmp5, selected: tmp, disabled: tmp6, onPressOptionItem, iconContainerStyle, skipIcon, renderDescription, renderIcon, renderOptionSuffix, itemAccessibilityLabel, multi: memo1 };
    tmp5 = memo1;
    const tmp2 = metroImportAll;
    const tmp3 = SelectionOptionItem;
    if (!memo1) {
      tmp5 = allowEmpty;
    }
    tmp6 = tmp4 && selectedCount >= selectionActionComponent.maxValues && !tmp;
    if (!tmp6) {
      tmp6 = !tmp4 && tmp && !allowEmpty;
      const tmp9 = !tmp4 && tmp && !allowEmpty;
    }
    return tmp2(tmp3, obj);
  }, items3);
  let obj2 = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded, header: options(tmp13, obj3), children: options(BottomSheetFlatList, obj4) };
  obj3 = { selectionActionComponent, labelComponent, selectButtonDisabled: tmp14, selectedOptions, submitSelection, onQueryChange, onPressOptionItem, onRemoveOptionItem, renderIcon: renderHeaderIcon };
  tmp14 = selectedCount > selectionActionComponent.maxValues;
  renderIcon.useRef(null);
  BottomSheet = selectionActionComponent(selectedCount[23]).BottomSheet;
  tmp13 = channelId;
  if (!tmp14) {
    let tmp15;
    if (0 === selectedCount) {
      tmp15 = !allowEmpty;
    } else {
      tmp15 = selectedCount < selectionActionComponent.minValues;
    }
    tmp14 = tmp15;
  }
  if (renderHeaderIcon == null) {
    renderHeaderIcon = renderIcon;
  }
  obj4 = {
    keyExtractor(arg0, arg1) {
      return "" + arg1;
    },
    data: options,
    renderItem: callback,
    contentContainerStyle: obj5,
    keyboardShouldPersistTaps: "always",
    accessibilityRole: str
  };
  obj5 = { paddingHorizontal: tmp(tmp2[7]).space.PX_16, paddingBottom: tmp(tmp2[7]).space.PX_16 + insets.bottom };
  BottomSheetFlatList = tmp5(tmp2[24]).BottomSheetFlatList;
  str = "radiogroup";
  if (memo1) {
    str = "none";
  }
  return options(BottomSheet, obj2);
};

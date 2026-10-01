// Module ID: 14535
// Function ID: 14536
// Name: QuestHomeSortingFilteringBottomSheet
// Dependencies: [32, 19, 17, 5756, 21, 4836, 576, 6544, 5745, 5281, 1115, 5266, 4685, 4800, 10681, 6571, 6570, 6045, 5279, 5997, 6000, 5999, 5916, 10699, 2]
// Exports: default

// Module 14535 (QuestHomeSortingFilteringBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup2 from "ButtonGroup" /* 5745 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function FilterFooter(inline) {
  let ButtonGroup;
  let SafeAreaPaddingView;
  let footerInline;
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj3;
  let onConfirm;
  let onLayout;
  let onReset;
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const tmp3 = View;
  if (flag) {
    footerInline = tmp.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  const obj = { style: footerInline, onLayout, children: metroImportDefault(SafeAreaPaddingView, obj2) };
  obj2 = { bottom: true, children: metroImportAll(ButtonGroup, obj3) };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = { direction: "vertical", style: tmp.footerButtonGroup, children: items };
  ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj4 = { size: "lg", grow: true, text: intl.string(intl3.t.i4jeWR), onPress: onConfirm };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items = [metroImportDefault(Button, obj4), ];
  const obj5 = { size: "lg", grow: true, text: intl2.string(intl3.t.yBZMsQ), onPress: onReset, variant: "secondary" };
  const Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items[1] = metroImportDefault(Button2, obj5);
  return metroImportDefault(tmp3, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const QuestHomeSortMethods = QuestConstants.QuestHomeSortMethods;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, bodyContainer: { flex: 1, minHeight: 0 }, footerInline: obj3, footer: obj4, footerButtonGroup: { paddingBottom: 0 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_9 = createStyles(obj);
let closure_10 = [];
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let closure_3;
  let closure_5;
  let closure_6;
  let defaultValue;
  let first1;
  let first2;
  let initialFilters;
  let initialSortMethod;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let tmp16Result;
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  let tmp = closure_9();
  let tmp2 = onSortMethodChange;
  let obj = onSortMethodChange(defaultValue[11]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(first1.useState(initialSortMethod), 2);
  defaultValue = tmp5[0];
  _slicedToArray = tmp7;
  [first1, closure_5] = first1.useState(initialFilters);
  [first2, closure_6] = first1.useState(0);
  const ref = first1.useRef(null);
  const callback = first1.useCallback((nativeEvent) => {
    closure_6(nativeEvent.nativeEvent.layout.height);
  }, []);
  let closure_8 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_5((arr) => {
      let found;
      const tmp2 = closure_1;
      if (tmp2) {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arr, 0)] = group;
        found = items;
      } else {
        found = arr.filter((group) => !(group.group === group.group && group.filter === arr.filter));
      }
      return found;
    });
  }, []);
  const callback1 = first1.useCallback(() => {
    closure_3(QuestHomeSortMethods.SUGGESTED);
    closure_5(closure_10);
    const current = ref.current;
    const tmp = QuestHomeSortMethods;
    if (current != null) {
      current.setValue(tmp.SUGGESTED);
    }
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl3.intl;
    announce(intl.string(intl3.t.bK5N8u));
  }, []);
  let items = [onSortMethodChange, onFiltersChange, defaultValue, first1];
  const callback2 = first1.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  let obj2 = onSortMethodChange(defaultValue[14]);
  const questHomeSortOptions = obj2.useQuestHomeSortOptions();
  const obj3 = onSortMethodChange(defaultValue[14]);
  const questHomeFilterOptions = obj3.useQuestHomeFilterOptions();
  const obj4 = { header: ref(BottomSheetTitleHeader, obj5), footer: tmp16Result, scrollable: true, startExpanded: true, children: closure_8(BottomSheetScrollView, obj8) };
  BottomSheet = onSortMethodChange(defaultValue[15]).BottomSheet;
  obj5 = { title: intl.string(onSortMethodChange(defaultValue[10]).t.UdhTtk) };
  BottomSheetTitleHeader = onSortMethodChange(defaultValue[16]).BottomSheetTitleHeader;
  intl = onSortMethodChange(defaultValue[10]).intl;
  tmp16Result = null;
  if (!isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp16Result = tmp16(FilterFooter, obj6);
  }
  let tmp20;
  BottomSheetScrollView = tmp2(tmp3[17]).BottomSheetScrollView;
  if (!isScreenReaderEnabled) {
    tmp20 = { paddingBottom: first2 };
    const obj7 = { paddingBottom: first2 };
  }
  obj8 = { contentContainerStyle: tmp20, style: items1, children: items3 };
  items1 = [, ];
  ({ content: arr4[0], bodyContainer: arr4[1] } = tmp);
  const obj9 = { spacing: onFiltersChange(defaultValue[6]).space.PX_32, children: items2 };
  const Stack = tmp2(tmp3[18]).Stack;
  const obj10 = {
    groupRef: ref,
    hasIcons: false,
    defaultValue,
    onChange: tmp5[1],
    title: intl2.string(tmp2(defaultValue[10]).t.tZXJIS),
    children: questHomeSortOptions.map((label, index) => {
      const obj = { label: label.label, value: label.value };
      return ref(onSortMethodChange(first[20]).TableRadioRow, obj, index);
    })
  };
  const TableRadioGroup = tmp2(tmp3[19]).TableRadioGroup;
  intl2 = tmp2(tmp3[10]).intl;
  items2 = [
    ref(TableRadioGroup, obj10),
    questHomeFilterOptions.map((heading, index) => {
      let options;
      let obj = {
        title: heading.heading,
        hasIcons: false,
        children: options.map((item, index) => {
          let obj2;
          const obj = {
            label: obj2.getFilterTypeText(item.filter),
            onPress(arg0) {
              return closure_2_8(item, arg0);
            },
            checked: closure_4.some((group) => group.group === item.group && group.filter === arr.filter)
          };
          const TableCheckboxRow = onSortMethodChange(defaultValue[22]).TableCheckboxRow;
          obj2 = onSortMethodChange(defaultValue[23]);
          return ref(TableCheckboxRow, obj, index);
        })
      };
      options = heading.options;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      return metroImportDefault(TableRowGroup, obj, index);
    })
  ];
  items3 = [closure_8(Stack, obj9), ];
  if (isScreenReaderEnabled) {
    const obj11 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = tmp16(FilterFooter, obj11);
  }
  items3[1] = isScreenReaderEnabled;
  return ref(BottomSheet, obj4);
};

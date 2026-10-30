// Module ID: 11149
// Function ID: 11150
// Name: MessageRemindersCustomDurationModal
// Dependencies: [32, 19, 17, 21, 5009, 575, 1626, 5018, 1889, 5253, 9000, 1995, 1114, 6999, 9791, 1376, 6992, 7552, 7054, 6969, 5619, 2]

// Module 11149 (MessageRemindersCustomDurationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1889 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7552 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, container: { paddingHorizontal: 16, paddingTop: 24, gap: 24 }, error: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const memoResult = react.memo(function MessageRemindersCustomDurationScreen(onClose) {
  let TableRow;
  let TableRow2;
  let closure_7;
  let first;
  let getError;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let num;
  let obj10;
  let obj8;
  let tmp11Result;
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  const title = onClose.title;
  ({ minimumDate: dependencyMap, maximumDate: _slicedToArray, getError } = onClose);
  first = undefined;
  closure_7 = undefined;
  let onPress;
  function handleSubmitDueDate(arg0) {
    closure_7(arg0);
    let tmp2;
    if (getError != null) {
      tmp2 = getError(arg0);
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    if (null != tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp2);
    }
  }
  function handleOpenDatePicker(date) {
    let startOfResult;
    let toDateResult;
    const obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const tmp4 = asyncRequire(9000, dependencyMap.paths);
    const intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    const obj2 = { title: string("date" === date ? t.pSZKvM : t.GOmEb8), startDate: first.toDate(), minimumDate: startOfResult.toDate(), maximumDate: toDateResult, mode: date, onSubmit: handleSubmitDueDate };
    if ("date" === date) {
      const cloneResult = dependencyMap.clone();
      startOfResult = cloneResult.startOf("day");
    } else {
      startOfResult = obj3;
    }
    toDateResult = undefined;
    if (null != _slicedToArray) {
      let endOfResult = obj6;
      if ("date" === date) {
        const cloneResult1 = _slicedToArray.clone();
        endOfResult = cloneResult1.endOf("day");
      }
      toDateResult = endOfResult.toDate();
    }
    openLazy(tmp4, "DatePicker", obj2);
  }
  const defaultValue = onClose.defaultValue;
  const tmp = handleSubmitDueDate();
  let tmp2 = createReminder;
  let obj = getError;
  const top = createReminder(1626)().top;
  [first, closure_7] = getError.useState(defaultValue);
  let error;
  if (getError != null) {
    error = getError(first);
  }
  if (error == null) {
    error = null;
  }
  const items = [createReminder, first, onClose];
  onPress = obj.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj2 = { style: tmp.modal, children: items1 };
  const obj3 = {
    title,
    headerTitle() {
      const obj = { title };
      return metroImportDefault(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(575).space.PX_8,
    headerLeft: tmp11Result.getHeaderCloseButton(onClose),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight() {
      let intl;
      const obj = { text: intl.string(intl5.t["R3BPH+"]), onPress, disabled: null != error };
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      intl = intl5.intl;
      return metroImportDefault(HeaderActionButton, obj);
    }
  };
  const Header = onClose(6999).Header;
  num = 0;
  const obj5 = onClose(1376);
  if (!obj5.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp11Result = onClose(6992);
  items1 = [closure_7(Header, obj3), ];
  const obj6 = { style: tmp.container, children: items2 };
  const obj7 = { title: intl.string(onClose(1114).t.pSZKvM), hasIcons: false, children: closure_7(TableRow, obj8) };
  const TableRowGroup = tmp11(7054).TableRowGroup;
  intl = tmp11(1114).intl;
  obj8 = {
    label: formatResult,
    accessibilityLabel: intl2.string(onClose(1114).t.pSZKvM),
    accessibilityValue: { text: formatResult },
    onPress() {
      handleOpenDatePicker("date");
    }
  };
  TableRow = tmp11(6969).TableRow;
  intl2 = tmp11(1114).intl;
  items2 = [closure_7(TableRowGroup, obj7), ];
  const obj9 = { title: intl3.string(onClose(1114).t.GOmEb8), hasIcons: false, children: closure_7(TableRow2, obj10) };
  const TableRowGroup2 = tmp11(7054).TableRowGroup;
  intl3 = tmp11(1114).intl;
  obj10 = {
    label: formatResult1,
    accessibilityLabel: intl4.string(onClose(1114).t.GOmEb8),
    accessibilityValue: { text: formatResult1 },
    onPress() {
      handleOpenDatePicker("time");
    }
  };
  TableRow2 = tmp11(6969).TableRow;
  intl4 = tmp11(1114).intl;
  const items3 = [closure_7(TableRowGroup2, obj9), ];
  let tmp10Result = null != error;
  if (tmp10Result) {
    const obj11 = { style: tmp.error, variant: "text-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp10Result = tmp10(tmp11(5619).Text, obj11);
  }
  items3[1] = tmp10Result;
  items2[1] = error(first, { children: items3 });
  items1[1] = error(first, obj6);
  return error(first, obj2);
});
let result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;

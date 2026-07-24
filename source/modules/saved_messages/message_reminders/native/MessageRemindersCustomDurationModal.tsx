// Module ID: 9957
// Function ID: 76975
// Dependencies: [57, 31, 27, 33, 4130, 689, 3712, 1820, 1212, 4098, 8433, 1934, 5094, 9158, 477, 5087, 4660, 4126, 2]

// Module 9957
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.modal = obj;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.headerContainer = _createForOfIteratorHelperLoose;
obj.container = { paddingHorizontal: 16, paddingTop: 24, gap: 24 };
obj.formHeader = { marginBottom: 8 };
let obj2 = { paddingHorizontal: 16, paddingVertical: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT };
obj.inputContainer = obj2;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((onClose) => {
  onClose = onClose.onClose;
  const createReminder = onClose.createReminder;
  let first;
  let dependencyMap;
  function handleOpenDatePicker(mode) {
    let obj = first(paths[7]);
    const result = obj.dismissGlobalKeyboard();
    if ("date" === mode) {
      const intl2 = onClose(paths[8]).intl;
      let stringResult = intl2.string(onClose(paths[8]).t.pSZKvM);
    } else {
      const intl = onClose(paths[8]).intl;
      stringResult = intl.string(onClose(paths[8]).t.GOmEb8);
    }
    obj = { title: stringResult };
    const obj2 = createReminder(paths[9]);
    obj.startDate = first.toDate();
    const tmp7 = onClose(paths[11])(paths[10], paths.paths);
    obj.minimumDate = createReminder(paths[6])().toDate();
    obj.mode = mode;
    obj.onSubmit = paths;
    obj2.openLazy(tmp7, "DatePicker", obj);
  }
  const tmp = callback4();
  const tmp2 = callback(handleOpenDatePicker.useState(() => createReminder(paths[6])()), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  const items = [createReminder, first, onClose];
  callback = handleOpenDatePicker.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj = { style: tmp.modal };
  obj = { style: tmp.headerContainer };
  const obj1 = {};
  let intl = onClose(1212).intl;
  obj1.title = intl.string(onClose(1212).t.VKsXpY);
  obj1.headerTitle = function headerTitle() {
    const obj = {};
    const intl = onClose(paths[8]).intl;
    obj.title = intl.string(onClose(paths[8]).t.VKsXpY);
    return outer1_7(onClose(paths[13]).GenericHeaderTitle, obj);
  };
  obj1.headerTitleAlign = "center";
  let obj4 = onClose(477);
  let num;
  if (obj4.isIOS()) {
    num = 0;
  }
  obj1.headerStatusBarHeight = num;
  let obj5 = onClose(5087);
  obj1.headerLeft = obj5.getHeaderCloseButton(onClose);
  obj1.headerRight = function headerRight() {
    let obj = { accessibilityRole: "button", onPress: _slicedToArray };
    obj = { variant: "text-md/semibold", color: "control-brand-foreground" };
    const intl = onClose(paths[8]).intl;
    obj.children = intl.string(onClose(paths[8]).t["R3BPH+"]);
    obj.children = outer1_7(onClose(paths[17]).Text, obj);
    return outer1_7(onClose(paths[16]).PressableOpacity, obj);
  };
  obj.children = callback2(onClose(5094).Header, obj1);
  const items1 = [callback2(View, obj), ];
  let obj2 = { style: tmp.container };
  const obj3 = {};
  obj4 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle" };
  let intl2 = onClose(1212).intl;
  obj4.children = intl2.string(onClose(1212).t.pSZKvM);
  const items2 = [callback2(onClose(4126).Text, obj4), ];
  obj5 = { accessibilityRole: "button" };
  const intl3 = onClose(1212).intl;
  obj5.accessibilityLabel = intl3.string(onClose(1212).t.pSZKvM);
  obj5.accessibilityValue = { text: formatResult };
  obj5.onPress = function onPress() {
    handleOpenDatePicker("date");
  };
  obj5.style = tmp.inputContainer;
  obj5.children = callback2(onClose(4126).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = callback2(onClose(4660).PressableOpacity, obj5);
  obj3.children = items2;
  const items3 = [callback3(View, obj3), ];
  const obj6 = {};
  const obj7 = { style: tmp.formHeader, variant: "text-sm/semibold", color: "text-subtle" };
  const intl4 = onClose(1212).intl;
  obj7.children = intl4.string(onClose(1212).t.GOmEb8);
  const items4 = [callback2(onClose(4126).Text, obj7), ];
  const obj8 = { accessibilityRole: "button" };
  const intl5 = onClose(1212).intl;
  obj8.accessibilityLabel = intl5.string(onClose(1212).t.pSZKvM);
  obj8.accessibilityValue = { text: formatResult1 };
  obj8.onPress = function onPress() {
    handleOpenDatePicker("time");
  };
  obj8.style = tmp.inputContainer;
  obj8.children = callback2(onClose(4126).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = callback2(onClose(4660).PressableOpacity, obj8);
  obj6.children = items4;
  items3[1] = callback3(View, obj6);
  obj2.children = items3;
  items1[1] = callback3(View, obj2);
  obj.children = items1;
  return callback3(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;

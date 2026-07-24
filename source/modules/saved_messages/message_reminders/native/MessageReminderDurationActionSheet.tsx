// Module ID: 9955
// Function ID: 76952
// Name: MessageReminderDurationActionSheet
// Dependencies: [57, 31, 9568, 33, 4130, 689, 566, 664, 9952, 5186, 1212, 4660, 5091, 9956, 5165, 4098, 4337, 9957, 1934, 5187, 5501, 4082, 2]
// Exports: default

// Module 9955 (MessageReminderDurationActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  let _slicedToArray;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let onBack;
  let tmp5;
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  let dueInText;
  let obj = createReminder(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getSavedMessage(closure_2, _slicedToArray));
  const tmp = _createForOfIteratorHelperLoose();
  const date = new Date();
  [tmp5, _isNativeReflectConstruct] = callback(onBack.useState(new Date()), 2);
  const effect = onBack.useEffect(() => {
    const interval = setInterval(() => outer1_5(new Date()), removeReminder(outer1_2[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  let obj1 = createReminder(9952);
  obj = {};
  let dueAt;
  if (null != stateFromStores) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  obj.dueAt = dueAt;
  obj.now = tmp5;
  obj.type = createReminder(9952).DueInStringTypes.SHORT;
  dueInText = obj1.useDueInString(obj).dueInText;
  const items1 = [onBack, dueInText];
  const items2 = [createReminder];
  const memo = onBack.useMemo(() => {
    let obj = {};
    const intl = createReminder(outer1_2[10]).intl;
    obj.title = intl.string(createReminder(outer1_2[10]).t.roMu1H);
    obj.subtitle = dueInText;
    let tmp2 = null != onBack;
    if (tmp2) {
      obj = { accessibilityRole: "button" };
      const intl2 = createReminder(outer1_2[10]).intl;
      obj.accessibilityLabel = intl2.string(createReminder(outer1_2[10]).t["13/7kX"]);
      obj.onPress = onBack;
      obj = { size: "md" };
      obj.children = dueInText(createReminder(outer1_2[12]).ArrowLargeLeftIcon, obj);
      tmp2 = dueInText(createReminder(outer1_2[11]).PressableOpacity, obj);
    }
    obj.leading = tmp2;
    return dueInText(createReminder(outer1_2[9]).BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = onBack.useMemo(() => {
    const prop = createReminder(outer1_2[13]).MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((arg0) => {
      let closure_0;
      let getLabel;
      ({ getDueAt: closure_0, getLabel } = arg0);
      const obj = {
        label: getLabel(),
        onPress() {
          outer2_0(callback());
          removeReminder(outer3_2[15]).hideActionSheet();
        }
      };
      return dueInText(createReminder(outer2_2[14]).TableRow, obj, "create-reminder-" + getLabel());
    });
    let obj = {};
    const intl = createReminder(outer1_2[10]).intl;
    obj.label = intl.string(createReminder(outer1_2[10]).t.OLA8Zi);
    obj.onPress = function onPress() {
      let obj = removeReminder(outer2_2[15]);
      obj.hideActionSheet();
      const obj2 = removeReminder(outer2_2[16]);
      obj = {};
      const tmp2 = createReminder(outer2_2[18])(outer2_2[17], outer2_2.paths);
      obj.onClose = removeReminder(outer2_2[16]).pop();
      obj.createReminder = outer1_0;
      obj = { presentation: "modal" };
      obj2.pushLazy(tmp2, obj, "create-reminder-custom", obj);
    };
    obj.arrow = true;
    mapped.push(dueInText(createReminder(outer1_2[14]).TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  obj = { header: memo, bodyStyles: tmp.body, startExpanded: true };
  const items3 = [dueInText(createReminder(5501).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp11 = null != removeReminder;
  if (tmp11) {
    obj1 = { icon: dueInText(createReminder(4082).CheckmarkLargeIcon, {}) };
    let intl = createReminder(1212).intl;
    obj1.label = intl.string(createReminder(1212).t.yjGtdJ);
    obj1.onPress = function onPress() {
      removeReminder(outer1_2[15]).hideActionSheet();
      removeReminder();
    };
    obj1.start = true;
    obj1.end = true;
    tmp11 = dueInText(createReminder(5165).TableRow, obj1, "remove-reminder");
  }
  items3[1] = tmp11;
  obj.children = items3;
  return closure_7(createReminder(5187).BottomSheet, obj);
};

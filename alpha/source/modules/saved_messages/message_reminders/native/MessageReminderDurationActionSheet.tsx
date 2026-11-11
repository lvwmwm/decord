// Module ID: 11862
// Function ID: 11863
// Name: MessageReminderDurationActionSheet
// Dependencies: [32, 19, 11849, 21, 5243, 575, 504, 1089, 11859, 7847, 1113, 7364, 7431, 11863, 7379, 5489, 6785, 11864, 2118, 2166, 5503, 7680, 7672, 2]
// Exports: default

// Module 11862 (MessageReminderDurationActionSheet)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import TableRow2 from "TableRow" /* 7379 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7431 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7847 */;
import MessageRemindersTypes from "MessageRemindersTypes" /* 11863 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11849 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { body: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  let c5;
  let intl;
  let items3;
  let onBack;
  let paths;
  let tmp7;
  createReminder = createReminder.createReminder;
  const removeReminder = createReminder.removeReminder;
  ({ channelId: dependencyMap, messageId: _slicedToArray, onBack } = createReminder);
  c5 = undefined;
  let dueInText;
  let isOverdue;
  const tmp2 = createReminder;
  let tmp3 = dependencyMap;
  let tmp = closure_8();
  let obj = createReminder(504);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.getSavedMessage(dependencyMap, _slicedToArray));
  let obj2 = onBack;
  const useState = onBack.useState;
  let date = new Date();
  [tmp7, c5] = useState(date);
  _slicedToArray(useState(date), 2);
  const effect = onBack.useEffect(() => {
    let closure_0;
    const interval = setInterval(() => {
      const date = new Date();
      return closure_1_5(date);
    }, removeReminder(dependencyMap[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  let dueAt;
  const useDueInString = createReminder(11859).useDueInString;
  createReminder(11859);
  if (stateFromStores != null) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  const obj3 = { dueAt, now: tmp7, type: tmp2(11859).DueInStringTypes.SHORT };
  const dueInString = useDueInString(obj3);
  dueInText = dueInString.dueInText;
  isOverdue = dueInString.isOverdue;
  const items1 = [onBack, dueInText, isOverdue];
  const items2 = [createReminder];
  const memo = obj2.useMemo(() => {
    let intl2;
    let tmpResult;
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    const intl = intl3.intl;
    const string = intl.string;
    const t = intl3.t;
    const obj = { title: string(isOverdue ? t.GtBCnz : t.roMu1H), subtitle: dueInText, leading: tmpResult };
    tmpResult = null != onBack;
    if (tmpResult) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl3.t["13/7kX"]), onPress: tmp4, children: metroRequire(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }) };
      const PressableOpacity = tmp2(7364).PressableOpacity;
      intl2 = tmp2(1113).intl;
      tmpResult = tmp(PressableOpacity, obj2);
    }
    return metroRequire(BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = obj2.useMemo(() => {
    let intl;
    const prop = MessageRemindersTypes.MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((item) => {
      let accessibilityLabel;
      let closure_0;
      let getAccessibilityLabel;
      let getLabel;
      ({ getDueAt: closure_0, getLabel, getAccessibilityLabel } = item);
      let obj = {
        label: getLabel(),
        accessibilityLabel,
        onPress() {
          createReminder(closure_0());
          const obj = removeReminder(dependencyMap[15]);
          obj.hideActionSheet();
        }
      };
      const TableRow = createReminder(paths[14]).TableRow;
      accessibilityLabel = undefined;
      const tmp = dueInText;
      if (getAccessibilityLabel != null) {
        accessibilityLabel = getAccessibilityLabel();
      }
      if (accessibilityLabel == null) {
        accessibilityLabel = getLabel();
      }
      return tmp(TableRow, obj, "create-reminder-" + getLabel());
    });
    const push = mapped.push;
    let obj = {
      label: intl.string(intl3.t.OLA8Zi),
      onPress() {
        let arr;
        let intl;
        const obj = removeReminder(dependencyMap[15]);
        obj.hideActionSheet();
        const pushLazy = removeReminder(dependencyMap[16]).pushLazy;
        removeReminder(dependencyMap[16]);
        const obj2 = { onClose: arr.pop(), createReminder, title: intl.string(createReminder(dependencyMap[10]).t.VKsXpY), defaultValue: removeReminder(dependencyMap[19])(), minimumDate: removeReminder(dependencyMap[19])() };
        const tmp3 = createReminder(dependencyMap[18])(dependencyMap[17], dependencyMap.paths);
        arr = removeReminder(dependencyMap[16]);
        intl = createReminder(dependencyMap[10]).intl;
        pushLazy(tmp3, obj2, "create-reminder-custom", { presentation: "modal" });
      },
      arrow: true
    };
    let TableRow = TableRow2.TableRow;
    intl = intl3.intl;
    let arr = push(metroRequire(TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  const obj4 = { header: memo, bodyStyles: tmp.body, startExpanded: true, children: items3 };
  const BottomSheet = tmp2(5503).BottomSheet;
  items3 = [dueInText(tmp2(7680).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp15Result = null != removeReminder;
  const tmp14 = isOverdue;
  if (tmp15Result) {
    const obj5 = {
      icon: dueInText(tmp2(7672).CheckmarkLargeIcon, {}),
      label: intl.string(tmp2(1113).t.yjGtdJ),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          removeReminder();
        },
      start: true,
      end: true
    };
    let TableRow = tmp2(7379).TableRow;
    intl = tmp2(1113).intl;
    tmp15Result = tmp15(TableRow, obj5, "remove-reminder");
  }
  items3[1] = tmp15Result;
  return tmp14(BottomSheet, obj4);
};

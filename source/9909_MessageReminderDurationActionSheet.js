// Module ID: 9909
// Function ID: 76678
// Name: MessageReminderDurationActionSheet
// Dependencies: []
// Exports: default

// Module 9909 (MessageReminderDurationActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_24 };
obj.body = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx");

export default function MessageReminderDurationActionSheet(createReminder) {
  let onBack;
  let tmp5;
  createReminder = createReminder.createReminder;
  const arg1 = createReminder;
  const removeReminder = createReminder.removeReminder;
  const importDefault = removeReminder;
  ({ channelId: closure_2, messageId: closure_3, onBack } = createReminder);
  const React = onBack;
  let dueInText;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => savedMessage.getSavedMessage(closure_2, closure_3));
  const tmp = callback2();
  const date = new Date();
  [tmp5, closure_5] = callback(React.useState(new Date()), 2);
  const effect = React.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), removeReminder(closure_2[7]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  let obj1 = arg1(dependencyMap[8]);
  obj = {};
  let dueAt;
  if (null != stateFromStores) {
    dueAt = stateFromStores.saveData.dueAt;
  }
  obj.dueAt = dueAt;
  obj.now = tmp5;
  obj.type = arg1(dependencyMap[8]).DueInStringTypes.SHORT;
  dueInText = obj1.useDueInString(obj).dueInText;
  const items1 = [onBack, dueInText];
  const items2 = [createReminder];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = createReminder(closure_2[10]).intl;
    obj.title = intl.string(createReminder(closure_2[10]).t.roMu1H);
    obj.subtitle = dueInText;
    let tmp2 = null != onBack;
    if (tmp2) {
      obj = { accessibilityRole: "button" };
      const intl2 = createReminder(closure_2[10]).intl;
      obj.accessibilityLabel = intl2.string(createReminder(closure_2[10]).t.13/7kX);
      obj.onPress = onBack;
      obj = { size: "md" };
      obj.children = dueInText(createReminder(closure_2[12]).ArrowLargeLeftIcon, obj);
      tmp2 = dueInText(createReminder(closure_2[11]).PressableOpacity, obj);
    }
    obj.leading = tmp2;
    return dueInText(createReminder(closure_2[9]).BottomSheetTitleHeader, obj);
  }, items1);
  const memo1 = React.useMemo(() => {
    const prop = createReminder(closure_2[13]).MESSAGE_REMINDER_DURATION_ITEMS;
    const mapped = prop.map((arg0) => {
      let getLabel;
      ({ getDueAt: closure_0, getLabel } = arg0);
      const obj = {
        label: getLabel(),
        onPress() {
          callback(callback());
          callback2(closure_2[15]).hideActionSheet();
        }
      };
      return callback3(callback(closure_2[14]).TableRow, obj, "create-reminder-" + getLabel());
    });
    const obj = {};
    const intl = createReminder(closure_2[10]).intl;
    obj.label = intl.string(createReminder(closure_2[10]).t.OLA8Zi);
    obj.onPress = function onPress() {
      let obj = callback2(paths[15]);
      obj.hideActionSheet();
      const obj2 = callback2(paths[16]);
      obj = {};
      const tmp2 = callback(paths[18])(paths[17], paths.paths);
      obj.onClose = callback2(paths[16]).pop();
      obj.createReminder = callback;
      obj = { presentation: "modal" };
      obj2.pushLazy(tmp2, obj, "create-reminder-custom", obj);
    };
    obj.arrow = true;
    mapped.push(dueInText(createReminder(closure_2[14]).TableRow, obj, "create-reminder-custom"));
    return mapped;
  }, items2);
  obj = { header: memo, bodyStyles: tmp.body, startExpanded: true };
  const items3 = [dueInText(arg1(dependencyMap[20]).TableRowGroup, { hasIcons: false, children: memo1 }), ];
  let tmp11 = null != removeReminder;
  if (tmp11) {
    obj1 = { icon: dueInText(arg1(dependencyMap[21]).CheckmarkLargeIcon, {}) };
    const intl = arg1(dependencyMap[10]).intl;
    obj1.label = intl.string(arg1(dependencyMap[10]).t.yjGtdJ);
    obj1.onPress = function onPress() {
      removeReminder(closure_2[15]).hideActionSheet();
      removeReminder();
    };
    obj1.start = true;
    obj1.end = true;
    tmp11 = dueInText(arg1(dependencyMap[14]).TableRow, obj1, "remove-reminder");
  }
  items3[1] = tmp11;
  obj.children = items3;
  return closure_7(arg1(dependencyMap[19]).BottomSheet, obj);
};

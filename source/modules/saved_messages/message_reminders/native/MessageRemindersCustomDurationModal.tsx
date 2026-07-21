// Module ID: 9916
// Function ID: 76717
// Dependencies: []

// Module 9916
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.modal = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingTop: importDefault(dependencyMap[5]).space.PX_8 };
obj.headerContainer = obj1;
obj.container = { 1371898722: true, 1348574506: true, 1639514705: null };
obj.formHeader = { marginBottom: 8 };
const obj2 = { width: true, marginHorizontal: null, borderRadius: importDefault(dependencyMap[5]).radii.lg, backgroundColor: importDefault(dependencyMap[5]).colors.INPUT_BACKGROUND_DEFAULT };
obj.inputContainer = obj2;
let closure_9 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((onClose) => {
  onClose = onClose.onClose;
  const arg1 = onClose;
  const createReminder = onClose.createReminder;
  const importDefault = createReminder;
  let importAll;
  let closure_3;
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
  const tmp2 = callback(handleOpenDatePicker.useState(() => createReminder(closure_3[6])()), 2);
  const first = tmp2[0];
  importAll = first;
  closure_3 = tmp2[1];
  const items = [createReminder, first, onClose];
  const callback = handleOpenDatePicker.useCallback(() => {
    createReminder(first.toDate());
    onClose();
  }, items);
  const formatResult = first.format("MMM Do YYYY");
  const formatResult1 = first.format("LT");
  let obj = { style: tmp.modal };
  obj = { style: tmp.headerContainer };
  const obj1 = {};
  const intl = arg1(closure_3[8]).intl;
  obj1.title = intl.string(arg1(closure_3[8]).t.VKsXpY);
  obj1.headerTitle = function headerTitle() {
    const obj = {};
    const intl = onClose(closure_3[8]).intl;
    obj.title = intl.string(onClose(closure_3[8]).t.VKsXpY);
    return callback(onClose(closure_3[13]).GenericHeaderTitle, obj);
  };
  obj1.headerTitleAlign = "center";
  let obj4 = arg1(closure_3[14]);
  let num;
  if (obj4.isIOS()) {
    num = 0;
  }
  obj1.headerStatusBarHeight = num;
  let obj5 = arg1(closure_3[15]);
  obj1.headerLeft = obj5.getHeaderCloseButton(onClose);
  obj1.headerRight = function headerRight() {
    let obj = { accessibilityRole: "button", onPress: closure_4 };
    obj = {};
    const intl = onClose(closure_3[8]).intl;
    obj.children = intl.string(onClose(closure_3[8]).t.R3BPH+);
    obj.children = callback(onClose(closure_3[17]).Text, obj);
    return callback(onClose(closure_3[16]).PressableOpacity, obj);
  };
  obj.children = callback2(arg1(closure_3[12]).Header, obj1);
  const items1 = [callback2(View, obj), ];
  const obj2 = { style: tmp.container };
  const obj3 = {};
  obj4 = { style: tmp.formHeader };
  const intl2 = arg1(closure_3[8]).intl;
  obj4.children = intl2.string(arg1(closure_3[8]).t.pSZKvM);
  const items2 = [callback2(arg1(closure_3[17]).Text, obj4), ];
  obj5 = { accessibilityRole: "button" };
  const intl3 = arg1(closure_3[8]).intl;
  obj5.accessibilityLabel = intl3.string(arg1(closure_3[8]).t.pSZKvM);
  obj5.accessibilityValue = { text: formatResult };
  obj5.onPress = function onPress() {
    handleOpenDatePicker("date");
  };
  obj5.style = tmp.inputContainer;
  obj5.children = callback2(arg1(closure_3[17]).Text, { variant: "text-md/medium", children: formatResult });
  items2[1] = callback2(arg1(closure_3[16]).PressableOpacity, obj5);
  obj3.children = items2;
  const items3 = [callback3(View, obj3), ];
  const obj6 = {};
  const obj7 = { style: tmp.formHeader };
  const intl4 = arg1(closure_3[8]).intl;
  obj7.children = intl4.string(arg1(closure_3[8]).t.GOmEb8);
  const items4 = [callback2(arg1(closure_3[17]).Text, obj7), ];
  const obj8 = { accessibilityRole: "button" };
  const intl5 = arg1(closure_3[8]).intl;
  obj8.accessibilityLabel = intl5.string(arg1(closure_3[8]).t.pSZKvM);
  obj8.accessibilityValue = { text: formatResult1 };
  obj8.onPress = function onPress() {
    handleOpenDatePicker("time");
  };
  obj8.style = tmp.inputContainer;
  obj8.children = callback2(arg1(closure_3[17]).Text, { variant: "text-md/medium", children: formatResult1 });
  items4[1] = callback2(arg1(closure_3[16]).PressableOpacity, obj8);
  obj6.children = items4;
  items3[1] = callback3(View, obj6);
  obj2.children = items3;
  items1[1] = callback3(View, obj2);
  obj.children = items1;
  return callback3(View, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersCustomDurationModal.tsx");

export default memoResult;

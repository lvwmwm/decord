// Module ID: 11961
// Function ID: 92461
// Name: UserProfileEditNote
// Dependencies: []
// Exports: default

// Module 11961 (UserProfileEditNote)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
const NOTE_MAX_LENGTH = arg1(dependencyMap[3]).NOTE_MAX_LENGTH;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ contentContainer: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const onSave = userId.onSave;
  const importDefault = onSave;
  const onClose = userId.onClose;
  const dependencyMap = onClose;
  let ScrollView;
  let NOTE_MAX_LENGTH;
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const callback = navigation;
  const tmp3 = importDefault(dependencyMap[7])(userId);
  const note = tmp3.note;
  const React = note;
  let str = "";
  if (null != note) {
    str = note;
  }
  const tmp5 = callback(React.useState(str), 2);
  const first = tmp5[0];
  ScrollView = first;
  NOTE_MAX_LENGTH = tmp7;
  const items = [navigation, userId, note, first, onSave, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: userId(onClose[8]).getHeaderConditionalBackButton(() => new Promise((arg0) => {
        const obj = {};
        let str = "";
        if (null != closure_4) {
          str = closure_4;
        }
        obj.hasEdits = str !== closure_5;
        obj.onHasEdits = arg0(closure_2[10]).dismissKeyboard;
        obj.resetPending = function resetPending() {
          let str = "";
          if (null != closure_4) {
            str = closure_4;
          }
          return closure_6(str);
        };
        obj.onConfirm = function onConfirm() {
          arg0(true);
          if (null != callback) {
            callback();
          }
        };
        callback(closure_2[9])(obj);
      })),
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = callback(closure_2[12]).intl;
        obj["label"] = intl.string(callback(closure_2[12]).t.R3BPH+);
        let str = "";
        if (null != closure_4) {
          str = closure_4;
        }
        obj["disabled"] = str === closure_5;
        obj["onPress"] = function onPress() {
          callback(callback2[13]).updateNote(closure_0, closure_5);
          if (null != callback) {
            callback();
          }
          if (null != callback2) {
            callback2();
          }
        };
        return closure_7(callback(closure_2[11]).HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  obj = { contentContainerStyle: callback3().contentContainer, keyboardShouldPersistTaps: "always" };
  obj = { variant: "text-sm/semibold" };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.mQKv+v);
  const items1 = [callback2(arg1(dependencyMap[14]).Text, obj), ];
  const obj1 = { paddingStart: 1693700826496670800000000000000000000000000000000000000000000000000000000000000, collapsable: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004383619097214926, style: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009699020784954714, importantForAccessibility: 950056622197674600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, accessible: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001697596633167, role: -200951734297527860000000000000000000000000000000000000000000000000000000000000000000000000, value: first, onChange: tmp5[1], maxLength: NOTE_MAX_LENGTH };
  const intl2 = arg1(dependencyMap[12]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[12]).t;
  if (tmp3.loading) {
    let stringResult = string(t.WLKx/9);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj1.placeholder = stringResult;
  const intl3 = arg1(dependencyMap[12]).intl;
  obj1.accessibilityLabel = intl3.string(arg1(dependencyMap[12]).t.mQKv+v);
  items1[1] = callback2(arg1(dependencyMap[15]).TextArea, obj1);
  obj.children = items1;
  return closure_8(ScrollView, obj);
};

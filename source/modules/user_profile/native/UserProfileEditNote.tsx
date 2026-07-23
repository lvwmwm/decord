// Module ID: 11981
// Function ID: 92563
// Name: UserProfileEditNote
// Dependencies: [57, 31, 27, 653, 33, 4130, 1456, 11975, 5087, 9111, 3989, 9122, 1212, 11982, 4126, 7504, 2]
// Exports: default

// Module 11981 (UserProfileEditNote)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { NOTE_MAX_LENGTH } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let first;
  let c6;
  let obj = userId(onClose[6]);
  const navigation = obj.useNavigation();
  const tmp3 = onSave(onClose[7])(userId);
  const note = tmp3.note;
  let str = "";
  if (null != note) {
    str = note;
  }
  const tmp5 = navigation(note.useState(str), 2);
  first = tmp5[0];
  c6 = tmp7;
  const items = [navigation, userId, note, first, onSave, onClose];
  const layoutEffect = note.useLayoutEffect(() => {
    let obj = {
      headerLeft: userId(onClose[8]).getHeaderConditionalBackButton(() => new Promise((arg0) => {
        let closure_0 = arg0;
        const obj = {};
        let str = "";
        if (null != outer2_4) {
          str = outer2_4;
        }
        obj.hasEdits = str !== outer2_5;
        obj.onHasEdits = userId(onClose[10]).dismissKeyboard;
        obj.resetPending = function resetPending() {
          let str = "";
          if (null != outer3_4) {
            str = outer3_4;
          }
          return outer3_6(str);
        };
        obj.onConfirm = function onConfirm() {
          callback(true);
          if (null != outer3_2) {
            outer3_2();
          }
        };
        onSave(onClose[9])(obj);
      })),
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = userId(onClose[12]).intl;
        obj["label"] = intl.string(userId(onClose[12]).t["R3BPH+"]);
        let str = "";
        if (null != outer1_4) {
          str = outer1_4;
        }
        obj["disabled"] = str === outer1_5;
        obj["onPress"] = function onPress() {
          onSave(onClose[13]).updateNote(outer2_0, outer2_5);
          if (null != outer2_1) {
            outer2_1();
          }
          if (null != outer2_2) {
            outer2_2();
          }
        };
        return outer2_7(userId(onClose[11]).HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  obj = { contentContainerStyle: callback2().contentContainer, keyboardShouldPersistTaps: "always" };
  obj = { variant: "text-sm/semibold" };
  let intl = userId(onClose[12]).intl;
  obj.children = intl.string(userId(onClose[12]).t["mQKv+v"]);
  const items1 = [callback(userId(onClose[14]).Text, obj), ];
  const obj1 = { value: first, onChange: tmp5[1], maxLength: c6, autoFocus: true, autoCorrect: false, autoCapitalize: "none" };
  const intl2 = userId(onClose[12]).intl;
  const string = intl2.string;
  const t = userId(onClose[12]).t;
  if (tmp3.loading) {
    let stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj1.placeholder = stringResult;
  const intl3 = userId(onClose[12]).intl;
  obj1.accessibilityLabel = intl3.string(userId(onClose[12]).t["mQKv+v"]);
  items1[1] = callback(userId(onClose[15]).TextArea, obj1);
  obj.children = items1;
  return closure_8(first, obj);
};

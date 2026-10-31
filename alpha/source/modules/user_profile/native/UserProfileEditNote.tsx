// Module ID: 14908
// Function ID: 14909
// Name: UserProfileEditNote
// Dependencies: [32, 19, 17, 1072, 21, 5014, 1497, 14904, 14909, 6998, 11406, 7558, 1113, 5624, 7253, 2]
// Exports: default

// Module 14908 (UserProfileEditNote)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import NoteActionCreatorsDefault from "NoteActionCreators" /* 14909 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
const ScrollView = react_native.ScrollView;
const NOTE_MAX_LENGTH = Constants.NOTE_MAX_LENGTH;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  let first;
  let intl;
  let intl3;
  let items3;
  let stringResult;
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let flag = userId.shouldFocusInput;
  if (flag === undefined) {
    flag = false;
  }
  let maxLength;
  let closure_7;
  let callback;
  let ref;
  let tmp = ref();
  let obj = userId(onClose[6]);
  navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[7])(userId);
  const note = tmp5.note;
  let obj2 = navigation;
  let str = note;
  const loading = tmp5.loading;
  const useState = navigation.useState;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(useState(str), 2);
  maxLength = tmp6[0];
  closure_7 = tmp8;
  const items = [userId, maxLength, onSave];
  callback = obj2.useCallback(() => {
    const obj = NoteActionCreatorsDefault;
    obj.updateNote(userId, first);
    if (onSave != null) {
      onSave();
    }
  }, items);
  ref = obj2.useRef(null);
  const items1 = [flag];
  const effect = obj2.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items1);
  const items2 = [navigation, note, maxLength, onClose, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderConditionalBackButton(() => {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          let str = closure_5;
          let tmp = closure_1_1(closure_1_2[10]);
          if (closure_5 == null) {
            str = "";
          }
          const obj = {
            location: "UserProfileEditNote",
            hasUnsavedChanges: str !== closure_6,
            onReset() {
              let str = closure_1_5;
              const tmp = closure_1_7;
              if (closure_1_5 == null) {
                str = "";
              }
              return tmp(str);
            },
            onContinue() {
              closure_0(true);
              if (closure_2_2 != null) {
                closure_2_2();
              }
            },
            onSave
          };
          tmp(obj);
        });
        return promise;
      }),
      headerRight() {
        let intl;
        let str;
        const obj = {
          text: intl.string(userId(onClose[12]).t["R3BPH+"]),
          disabled: str === first,
          onPress() {
            closure_1_8();
            if (closure_1_2 != null) {
              closure_1_2();
            }
          }
        };
        const HeaderActionButton = userId(onClose[11]).HeaderActionButton;
        intl = userId(onClose[12]).intl;
        str = note;
        const tmp = closure_7;
        if (note == null) {
          str = "";
        }
        return tmp(HeaderActionButton, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items2);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: items3 };
  const obj4 = { variant: "text-sm/semibold", children: intl.string(userId(onClose[12]).t["mQKv+v"]) };
  const Text = tmp2(tmp3[13]).Text;
  intl = tmp2(tmp3[12]).intl;
  items3 = [closure_7(Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: stringResult, accessibilityLabel: intl3.string(userId(onClose[12]).t["mQKv+v"]) };
  const TextArea = tmp2(tmp3[14]).TextArea;
  const intl2 = tmp2(tmp3[12]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[12]).t;
  const tmp13 = callback;
  const tmp14 = note;
  const tmp15 = closure_7;
  if (loading) {
    stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  intl3 = tmp2(tmp3[12]).intl;
  items3[1] = tmp15(TextArea, obj5);
  return tmp13(tmp14, obj3);
};

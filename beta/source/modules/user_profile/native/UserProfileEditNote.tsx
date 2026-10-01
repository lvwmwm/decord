// Module ID: 12630
// Function ID: 12631
// Name: UserProfileEditNote
// Dependencies: [32, 19, 17, 1074, 21, 4836, 1485, 12626, 5936, 10384, 4701, 7288, 1115, 12631, 4832, 6506, 2]
// Exports: default

// Module 12630 (UserProfileEditNote)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let items2;
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
  let ref;
  let tmp2 = userId;
  let tmp = closure_9();
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
  ref = obj2.useRef(null);
  const items = [flag];
  const effect = obj2.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  const items1 = [navigation, userId, note, maxLength, onSave, onClose];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderConditionalBackButton(() => {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          let tmp = closure_1_2;
          let str = closure_5;
          const tmp2 = closure_1_1(closure_1_2[9]);
          if (closure_5 == null) {
            str = "";
          }
          const obj = {
            hasEdits: str !== closure_6,
            onHasEdits: closure_1_0(tmp[10]).dismissKeyboard,
            resetPending() {
              let str = closure_1_5;
              const tmp = closure_1_7;
              if (closure_1_5 == null) {
                str = "";
              }
              return tmp(str);
            },
            onConfirm() {
              closure_0(true);
              if (closure_2_2 != null) {
                closure_2_2();
              }
            }
          };
          tmp2(obj);
        });
        return promise;
      }),
      headerRight(arg0) {
        let intl;
        let str;
        let obj = {
          label: intl.string(userId(onClose[12]).t["R3BPH+"]),
          disabled: str === first,
          onPress() {
            const obj = onSave(onClose[13]);
            obj.updateNote(closure_1_0, closure_1_6);
            if (closure_1_1 != null) {
              closure_1_1();
            }
            if (closure_1_2 != null) {
              closure_1_2();
            }
          }
        };
        const HeaderTextButton = userId(onClose[11]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = userId(onClose[12]).intl;
        str = note;
        const tmp = closure_7;
        if (note == null) {
          str = "";
        }
        return tmp(HeaderTextButton, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items1);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: items2 };
  const obj4 = { variant: "text-sm/semibold", children: intl.string(tmp2(onClose[12]).t["mQKv+v"]) };
  const Text = tmp2(tmp3[14]).Text;
  intl = tmp2(tmp3[12]).intl;
  items2 = [closure_7(Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: stringResult, accessibilityLabel: intl3.string(tmp2(onClose[12]).t["mQKv+v"]) };
  const TextArea = tmp2(tmp3[15]).TextArea;
  const intl2 = tmp2(tmp3[12]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[12]).t;
  const tmp12 = ref;
  const tmp13 = note;
  const tmp14 = closure_7;
  if (loading) {
    stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  intl3 = tmp2(tmp3[12]).intl;
  items2[1] = tmp14(TextArea, obj5);
  return tmp12(tmp13, obj3);
};

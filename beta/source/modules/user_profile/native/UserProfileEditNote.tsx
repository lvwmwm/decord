// Module ID: 14374
// Function ID: 14375
// Name: UserProfileEditNote
// Dependencies: [32, 19, 17, 1087, 21, 5003, 558, 576, 1505, 14370, 14375, 6956, 11103, 7517, 1128, 5266, 7212, 2]

// Module 14374 (UserProfileEditNote)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1087 */;
import NavigatorHeader from "NavigatorHeader" /* 6956 */;
import NoteActionCreatorsDefault from "NoteActionCreators" /* 14375 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, setOptionsResult;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const NOTE_MAX_LENGTH = Constants.NOTE_MAX_LENGTH;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ref = createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditNote(userId) {
  let closure_3;
  let closure_7;
  let first;
  let loading;
  let note;
  let onClose;
  let tmp = userId;
  let obj = userId(onClose[7]);
  const cResult = obj.c(24);
  userId = userId.userId;
  const onSave = userId.onSave;
  onClose = userId.onClose;
  const shouldFocusInput = userId.shouldFocusInput;
  _slicedToArray = tmp4;
  ref();
  const tmpResult = tmp(onClose[8]);
  navigation = tmpResult.useNavigation();
  ({ loading, note } = onSave(onClose[9])(userId));
  let str = note;
  const useState = navigation.useState;
  onSave(onClose[9])(userId);
  if (note == null) {
    str = "";
  }
  [first, closure_7] = useState(str);
  if (cResult[0] === onSave) {
    if (cResult[1] === userId) {
      let tmp10;
      let tmp13;
      let tmp12;
      if (cResult[2] === first) {
        tmp10 = cResult[3];
      }
      let closure_8 = tmp10;
      ref = obj3.useRef(null);
      if (cResult[4] !== (undefined !== shouldFocusInput && shouldFocusInput)) {
        class H {
          constructor() {
            const tmp = closure_3;
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          }
        }
        const items = [undefined !== shouldFocusInput && shouldFocusInput];
        cResult[4] = undefined !== shouldFocusInput && shouldFocusInput;
        cResult[5] = H;
        class K {
          constructor() {
            obj = { headerLeft: null, headerRight: null };
            setOptions = closure_4.setOptions;
            obj2 = closure_0(closure_2[11]);
            obj.headerLeft = obj2.getHeaderConditionalBackButton(() => {
              const promise = new Promise(() => { /* body not rendered: F160906 */ });
              return promise;
            });
            obj.headerRight = function headerRight() {
              let intl;
              let str;
              const obj = { text: intl.string(userId(onClose[14]).t["R3BPH+"]), disabled: str === first, onPress() { /* body not rendered: F160907 */ } };
              const HeaderActionButton = userId(onClose[13]).HeaderActionButton;
              intl = userId(onClose[14]).intl;
              str = note;
              const tmp = closure_7;
              if (note == null) {
                str = "";
              }
              return tmp(HeaderActionButton, obj);
            };
            setOptionsResult = setOptions(obj);
            return;
          }
        }
        cResult[6] = items;
        tmp13 = items;
        tmp12 = H;
      } else {
        class H {
          constructor() {
            const tmp = closure_3;
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          }
        }
        tmp13 = cResult[6];
      }
      const effect = obj3.useEffect(tmp12, tmp13);
      if (cResult[7] === navigation) {
        class H {
          constructor() {
            const tmp = closure_3;
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          }
        }
      }
      class K {
        constructor() {
          obj = { headerLeft: null, headerRight: null };
          setOptions = closure_4.setOptions;
          obj2 = closure_0(closure_2[11]);
          obj.headerLeft = obj2.getHeaderConditionalBackButton(() => {
            const promise = new Promise(() => { /* body not rendered: F160906 */ });
            return promise;
          });
          obj.headerRight = function headerRight() {
            let intl;
            let str;
            const obj = { text: intl.string(userId(onClose[14]).t["R3BPH+"]), disabled: str === first, onPress() { /* body not rendered: F160907 */ } };
            const HeaderActionButton = userId(onClose[13]).HeaderActionButton;
            intl = userId(onClose[14]).intl;
            str = note;
            const tmp = closure_7;
            if (note == null) {
              str = "";
            }
            return tmp(HeaderActionButton, obj);
          };
          setOptionsResult = setOptions(obj);
          return;
        }
      }
      const items1 = [navigation, note, first, onClose, tmp10];
      cResult[7] = navigation;
      cResult[8] = note;
      cResult[9] = onClose;
      cResult[10] = tmp10;
      cResult[11] = first;
      cResult[12] = K;
      cResult[13] = items1;
    }
  }
  const fn = function v() {
    const obj = NoteActionCreatorsDefault;
    obj.updateNote(userId, first);
    if (onSave != null) {
      onSave();
    }
  };
  cResult[0] = onSave;
  cResult[1] = userId;
  cResult[2] = first;
  cResult[3] = fn;
  tmp10 = fn;
}) : (function UserProfileEditNote(userId) {
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
  ref = undefined;
  let tmp = ref();
  let obj = userId(onClose[8]);
  navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[9])(userId);
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
          let tmp = closure_1_1(closure_1_2[12]);
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
          text: intl.string(userId(onClose[14]).t["R3BPH+"]),
          disabled: str === first,
          onPress() {
            closure_1_8();
            if (closure_1_2 != null) {
              closure_1_2();
            }
          }
        };
        const HeaderActionButton = userId(onClose[13]).HeaderActionButton;
        intl = userId(onClose[14]).intl;
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
  const obj4 = { variant: "text-sm/semibold", children: intl.string(userId(onClose[14]).t["mQKv+v"]) };
  const Text = tmp2(tmp3[15]).Text;
  intl = tmp2(tmp3[14]).intl;
  items3 = [closure_7(Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: stringResult, accessibilityLabel: intl3.string(userId(onClose[14]).t["mQKv+v"]) };
  const TextArea = tmp2(tmp3[16]).TextArea;
  const intl2 = tmp2(tmp3[14]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[14]).t;
  const tmp13 = callback;
  const tmp14 = note;
  const tmp15 = closure_7;
  if (loading) {
    stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  intl3 = tmp2(tmp3[14]).intl;
  items3[1] = tmp15(TextArea, obj5);
  return tmp13(tmp14, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default tmp3;

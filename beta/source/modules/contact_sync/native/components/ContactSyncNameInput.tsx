// Module ID: 12194
// Function ID: 12195
// Name: ContactSyncNameInput
// Dependencies: [32, 19, 17, 21, 4836, 576, 6402, 1115, 4832, 1177, 5281, 12191, 2]
// Exports: default

// Module 12194 (ContactSyncNameInput)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp5;
const ContactSyncErrorDefault = tmp5(12191);
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, content: { flex: 1, padding: 16, paddingBottom: 0 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center", marginBottom: 16 }, input: obj2, formSubtitle: { lineHeight: 16 }, button: obj3, error: { marginTop: 8 } };
obj2 = { width: "100%", marginTop: 8, marginBottom: 12, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 0, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default function ContactSyncNameInput(prefilledFromContactBook) {
  let Button2;
  let closure_129_0;
  let error;
  let first;
  let initialName;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let loading;
  let obj10;
  let onRemoveName;
  let string2Result;
  let string3Result;
  let stringResult;
  let tmp10;
  let tmp4;
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: closure_129_0, onRemoveName } = prefilledFromContactBook);
  first = undefined;
  let tmp = closure_8();
  [first, tmp4] = react.useState(initialName);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (null != onRemoveName) {
    stringResult = string(t.i4jeWR);
    tmp10 = tmp8;
  } else {
    stringResult = string(t.PDTjLN);
    tmp10 = tmp8;
  }
  const obj = { style: items, children: items2 };
  items = [tmp.content, { paddingBottom: insets.bottom }];
  const obj2 = { style: tmp.flex, children: items1 };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: string2Result };
  const Text = tmp10(4832).Text;
  const intl2 = tmp10(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp10(1115).t;
  if (null != onRemoveName) {
    string2Result = string2(t2["/OywGQ"]);
  } else {
    string2Result = string2(t2["sO+NI5"]);
  }
  items1 = [metroRequire(Text, obj3), , , , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: string3Result };
  const Text2 = tmp10(4832).Text;
  const intl3 = tmp10(1115).intl;
  const string3 = intl3.string;
  const t3 = tmp10(1115).t;
  if (null != onRemoveName) {
    string3Result = string3(t3["xCHh/t"]);
  } else {
    string3Result = string3(t3.xI496M);
  }
  items1[1] = metroRequire(Text2, obj4);
  const obj5 = { variant: "eyebrow", color: "interactive-text-default", children: intl4.string(tmp10(1115).t["42/D2U"]) };
  const Text3 = tmp10(4832).Text;
  intl4 = tmp10(1115).intl;
  items1[2] = metroRequire(Text3, obj5);
  const obj6 = { value: first, onChangeText: tmp4, style: tmp.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: tmp10(1177).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" };
  const InputView = tmp10(1177).InputView;
  items1[3] = metroRequire(InputView, obj6);
  let tmp13Result = null;
  if (flag) {
    const obj7 = { style: tmp.formSubtitle, variant: "text-xs/medium", color: "text-default", children: intl5.string(tmp10(1115).t.bCQt9K) };
    const Text4 = tmp10(4832).Text;
    intl5 = tmp10(1115).intl;
    tmp13Result = tmp13(Text4, obj7);
  }
  items1[4] = tmp13Result;
  items2 = [metroImportDefault(View, obj2), , , ];
  let str = "lg";
  const Button = tmp10(5281).Button;
  if (null != onRemoveName) {
    str = "md";
  }
  const obj8 = {
    variant: "primary",
    size: str,
    text: stringResult,
    onPress() {
      return closure_1_0(first);
    },
    loading,
    disabled: "" === first
  };
  items2[1] = metroRequire(Button, obj8);
  let tmp13Result2 = null;
  if (null != onRemoveName) {
    const obj9 = { style: tmp.button, children: metroRequire(Button2, obj10) };
    obj10 = {
      variant: "secondary",
      size: "md",
      text: intl6.string(tmp10(1115).t["91RssO"]),
      onPress() {
          let tmp;
          if (onRemoveName != null) {
            tmp = onRemoveName();
          }
          return tmp;
        }
    };
    Button2 = tmp10(5281).Button;
    intl6 = tmp10(1115).intl;
    tmp13Result2 = tmp13(tmp12, obj9);
  }
  items2[2] = tmp13Result2;
  const obj11 = { style: tmp.error, error };
  items2[3] = metroRequire(ContactSyncErrorDefault, obj11);
  return metroImportDefault(View, obj);
};

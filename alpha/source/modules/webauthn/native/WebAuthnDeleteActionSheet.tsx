// Module ID: 16671
// Function ID: 16672
// Name: WebAuthnDeleteActionSheet
// Dependencies: [19, 17, 21, 5014, 575, 5258, 5272, 7321, 1113, 7367, 5624, 5634, 16670, 2]
// Exports: default

// Module 16671 (WebAuthnDeleteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import deleteWebAuthnCredentialWithToast from "deleteWebAuthnCredentialWithToast" /* 16670 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { alignItems: "center" }, subtitle: obj2, sheetContent: obj3, sheetBody: obj4 };
obj2 = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  let Button;
  let Button2;
  let Text;
  let deleting;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }
  const tmp = closure_6();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: items };
  BottomSheet = credential(5272).BottomSheet;
  let obj2 = { title: intl.formatToPlainString(credential(1113).t.mI3CoL, obj3), trailing: closure_4(credential(7367).ActionSheetCloseButton, { onPress: handleClose }) };
  const BottomSheetTitleHeader = credential(7321).BottomSheetTitleHeader;
  intl = credential(1113).intl;
  obj3 = { keyName: credential.name };
  items = [closure_4(BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: closure_4(Text, obj5) };
  obj5 = { variant: "heading-md/normal", style: tmp.subtitle, children: intl2.string(credential(1113).t.IfTbc1) };
  Text = credential(5624).Text;
  intl2 = credential(1113).intl;
  items[1] = closure_4(View, obj4);
  const obj6 = { children: closure_4(Button, obj7) };
  obj7 = { text: intl3.string(credential(1113).t["lqK//z"]), onPress: handleClose, variant: "primary", grow: true };
  Button = credential(5634).Button;
  intl3 = credential(1113).intl;
  items[2] = closure_4(View, obj6);
  const obj8 = { children: closure_4(Button2, obj9) };
  obj9 = {
    text: intl4.string(credential(1113).t.zYOk0f),
    onPress: function handleDelete() {
      importDefault(true);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = deleteWebAuthnCredentialWithToast;
      const result = obj2.deleteWebAuthnCredentialWithToast(credential);
      result.finally(() => {
        closure_1_1(false);
      });
    },
    variant: "destructive",
    disabled: deleting,
    loading: deleting,
    grow: true
  };
  Button2 = credential(5634).Button;
  intl4 = credential(1113).intl;
  items[3] = closure_4(View, obj8);
  return closure_5(BottomSheet, obj);
};

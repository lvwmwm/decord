// Module ID: 14229
// Function ID: 14230
// Name: WebAuthnDeleteActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 4800, 6571, 6570, 1115, 6619, 4832, 5281, 6014, 4528, 10115, 4792, 8905, 8048, 2]
// Exports: default

// Module 14229 (WebAuthnDeleteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6014 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let tmp = closure_6();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: items };
  BottomSheet = credential(6571).BottomSheet;
  let obj2 = { title: intl.formatToPlainString(credential(1115).t.mI3CoL, obj3), trailing: closure_4(credential(6619).ActionSheetCloseButton, { onPress: handleClose }) };
  const BottomSheetTitleHeader = credential(6570).BottomSheetTitleHeader;
  intl = credential(1115).intl;
  obj3 = { keyName: credential.name };
  items = [closure_4(BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: closure_4(Text, obj5) };
  obj5 = { variant: "heading-md/normal", style: tmp.subtitle, children: intl2.string(credential(1115).t.IfTbc1) };
  Text = credential(4832).Text;
  intl2 = credential(1115).intl;
  items[1] = closure_4(View, obj4);
  const obj6 = { children: closure_4(Button, obj7) };
  obj7 = { text: intl3.string(credential(1115).t["lqK//z"]), onPress: handleClose, variant: "primary", grow: true };
  Button = credential(5281).Button;
  intl3 = credential(1115).intl;
  items[2] = closure_4(View, obj6);
  const obj8 = { children: closure_4(Button2, obj9) };
  obj9 = {
    text: intl4.string(credential(1115).t.zYOk0f),
    onPress() {
      const tmp = importDefault(true);
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      let obj2 = WebAuthnActionCreators;
      const result = obj2.deleteWebAuthnCredential(credential);
      const nextPromise = result.then(() => {
        let intl;
        const obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: intl.string(credential(closure_1_2[8]).t.ZnkeXs), icon: closure_1_1(closure_1_2[14]), IconComponent: credential(closure_1_2[15]).CircleCheckIcon, iconColor: "status-positive" };
        const open = closure_1_1(closure_1_2[13]).open;
        closure_1_1(closure_1_2[13]);
        intl = credential(closure_1_2[8]).intl;
        open(obj);
      });
      const catchPromise = nextPromise.catch((error) => {
        const obj = closure_1_1(closure_1_2[13]);
        const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: error.message, icon: closure_1_1(closure_1_2[16]), IconComponent: credential(closure_1_2[17]).WarningIcon, iconColor: "icon-feedback-critical" };
        obj.open(obj2);
      });
      catchPromise.finally(() => {
        closure_1_1(false);
      });
    },
    variant: "destructive",
    disabled: deleting,
    loading: deleting,
    grow: true
  };
  Button2 = credential(5281).Button;
  intl4 = credential(1115).intl;
  items[3] = closure_4(View, obj8);
  return closure_5(BottomSheet, obj);
};

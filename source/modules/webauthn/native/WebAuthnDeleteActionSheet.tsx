// Module ID: 13636
// Function ID: 104737
// Name: WebAuthnDeleteActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 4098, 5187, 5186, 1212, 5501, 13637, 4126, 4543, 5594, 3831, 9670, 4091, 8479, 7576, 2]
// Exports: default

// Module 13636 (WebAuthnDeleteActionSheet)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.subtitle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sheetContent = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.sheetBody = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  let deleting;
  let importDefault;
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    outer1_1(handleClose[5]).hideActionSheet();
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody };
  obj = {};
  let intl = credential(handleClose[8]).intl;
  obj = { keyName: credential.name };
  obj.title = intl.formatToPlainString(credential(handleClose[8]).t.mI3CoL, obj);
  obj.trailing = callback(credential(handleClose[9]).ActionSheetCloseButton, { onPress: handleClose });
  const items = [callback(credential(handleClose[7]).BottomSheetTitleHeader, obj), , , ];
  const obj1 = { style: tmp.content };
  const items1 = [callback(closure_3, { source: importDefault(handleClose[10]) }), ];
  const obj3 = { variant: "heading-md/normal", style: tmp.subtitle };
  const intl2 = credential(handleClose[8]).intl;
  obj3.children = intl2.string(credential(handleClose[8]).t.IfTbc1);
  items1[1] = callback(credential(handleClose[11]).Text, obj3);
  obj1.children = items1;
  items[1] = callback2(closure_4, obj1);
  const obj4 = {};
  const obj5 = {};
  const intl3 = credential(handleClose[8]).intl;
  obj5.text = intl3.string(credential(handleClose[8]).t["lqK//z"]);
  obj5.onPress = handleClose;
  obj5.variant = "primary";
  obj5.grow = true;
  obj4.children = callback(credential(handleClose[12]).Button, obj5);
  items[2] = callback(closure_4, obj4);
  const obj6 = {};
  const obj7 = {};
  const intl4 = credential(handleClose[8]).intl;
  obj7.text = intl4.string(credential(handleClose[8]).t.zYOk0f);
  obj7.onPress = function onPress() {
    callback(true);
    handleClose();
    const result = credential(handleClose[13]).deleteWebAuthnCredential(credential);
    let obj = credential(handleClose[13]);
    const nextPromise = result.then(() => {
      let obj = outer2_1(handleClose[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY" };
      const intl = credential(handleClose[8]).intl;
      obj.content = intl.string(credential(handleClose[8]).t.ZnkeXs);
      obj.icon = outer2_1(handleClose[15]);
      obj.IconComponent = credential(handleClose[16]).CircleCheckIcon;
      obj.iconColor = "status-positive";
      obj.open(obj);
    });
    result.then(() => {
      let obj = outer2_1(handleClose[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY" };
      const intl = credential(handleClose[8]).intl;
      obj.content = intl.string(credential(handleClose[8]).t.ZnkeXs);
      obj.icon = outer2_1(handleClose[15]);
      obj.IconComponent = credential(handleClose[16]).CircleCheckIcon;
      obj.iconColor = "status-positive";
      obj.open(obj);
    }).catch((content) => {
      let obj = outer2_1(handleClose[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: content.message, icon: outer2_1(handleClose[17]), IconComponent: credential(handleClose[18]).WarningIcon, iconColor: "icon-feedback-critical" };
      obj.open(obj);
    }).finally(() => {
      outer1_1(false);
    });
  };
  obj7.variant = "destructive";
  obj7.disabled = deleting;
  obj7.loading = deleting;
  obj7.grow = true;
  obj6.children = callback(credential(handleClose[12]).Button, obj7);
  items[3] = callback(closure_4, obj6);
  obj.children = items;
  return callback2(credential(handleClose[6]).BottomSheet, obj);
};

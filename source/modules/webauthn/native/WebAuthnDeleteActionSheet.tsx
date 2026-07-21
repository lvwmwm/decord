// Module ID: 13513
// Function ID: 102526
// Name: WebAuthnDeleteActionSheet
// Dependencies: []
// Exports: default

// Module 13513 (WebAuthnDeleteActionSheet)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { content: { alignItems: "center" } };
obj = { textAlign: "center", marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.subtitle = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.sheetContent = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.sheetBody = { gap: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
let closure_7 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  let deleting;
  credential = credential.credential;
  const arg1 = credential;
  ({ deleting, setDeleting: closure_1 } = credential);
  function handleClose() {
    callback(handleClose[5]).hideActionSheet();
  }
  const dependencyMap = handleClose;
  const tmp = callback3();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody };
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj = { keyName: credential.name };
  obj.title = intl.formatToPlainString(arg1(dependencyMap[8]).t.mI3CoL, obj);
  obj.trailing = callback(arg1(dependencyMap[9]).ActionSheetCloseButton, { onPress: handleClose });
  const items = [callback(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj), , , ];
  const obj1 = { style: tmp.content };
  const items1 = [callback(closure_3, { source: importDefault(dependencyMap[10]) }), ];
  const obj3 = { variant: "heading-md/normal", style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[8]).t.IfTbc1);
  items1[1] = callback(arg1(dependencyMap[11]).Text, obj3);
  obj1.children = items1;
  items[1] = callback2(closure_4, obj1);
  const obj4 = {};
  const obj5 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[8]).t.lqK//z);
  obj5.onPress = handleClose;
  obj5.variant = "primary";
  obj5.grow = true;
  obj4.children = callback(arg1(dependencyMap[12]).Button, obj5);
  items[2] = callback(closure_4, obj4);
  const obj6 = {};
  const obj7 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj7.text = intl4.string(arg1(dependencyMap[8]).t.zYOk0f);
  obj7.onPress = function onPress() {
    callback(true);
    handleClose();
    const result = credential(handleClose[13]).deleteWebAuthnCredential(credential);
    const obj = credential(handleClose[13]);
    const nextPromise = result.then(() => {
      let obj = callback2(closure_2[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY" };
      const intl = callback(closure_2[8]).intl;
      obj.content = intl.string(callback(closure_2[8]).t.ZnkeXs);
      obj.icon = callback2(closure_2[15]);
      obj.IconComponent = callback(closure_2[16]).CircleCheckIcon;
      obj.iconColor = "status-positive";
      obj.open(obj);
    });
    result.then(() => {
      let obj = callback2(closure_2[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY" };
      const intl = callback(closure_2[8]).intl;
      obj.content = intl.string(callback(closure_2[8]).t.ZnkeXs);
      obj.icon = callback2(closure_2[15]);
      obj.IconComponent = callback(closure_2[16]).CircleCheckIcon;
      obj.iconColor = "status-positive";
      obj.open(obj);
    }).catch((content) => {
      let obj = callback2(closure_2[14]);
      obj = { key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: content.message, icon: callback2(closure_2[17]), IconComponent: callback(closure_2[18]).WarningIcon, iconColor: "icon-feedback-critical" };
      obj.open(obj);
    }).finally(() => {
      callback2(false);
    });
  };
  obj7.variant = "destructive";
  obj7.disabled = deleting;
  obj7.loading = deleting;
  obj7.grow = true;
  obj6.children = callback(arg1(dependencyMap[12]).Button, obj7);
  items[3] = callback(closure_4, obj6);
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).BottomSheet, obj);
};

// Module ID: 9261
// Function ID: 72358
// Name: SMSBackupWarningAlert
// Dependencies: [31, 33, 4130, 4561, 1212, 4471, 4126, 2]
// Exports: default

// Module 9261 (SMSBackupWarningAlert)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ title: { textAlign: "center" }, body: { marginTop: 8, textAlign: "center", lineHeight: 18 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = callback3();
  let obj = {};
  const intl = onConfirm(1212).intl;
  obj.cancelText = intl.string(onConfirm(1212).t["ETE/oC"]);
  const intl2 = onConfirm(1212).intl;
  obj.confirmText = intl2.string(onConfirm(1212).t.N86XcP);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    outer1_1(outer1_2[5]).close();
  };
  obj.onCancel = function onCancel() {
    return outer1_1(outer1_2[5]).close();
  };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl3 = onConfirm(1212).intl;
  obj.children = intl3.string(onConfirm(1212).t.Ed4XQB);
  const items = [callback(onConfirm(4126).Text, obj), ];
  obj = { style: tmp.body, variant: "text-sm/medium", color: "text-default" };
  const intl4 = onConfirm(1212).intl;
  obj.children = intl4.string(onConfirm(1212).t.EDU2Eg);
  items[1] = callback(onConfirm(4126).Text, obj);
  obj.children = items;
  return callback2(importDefault(4561), obj);
};

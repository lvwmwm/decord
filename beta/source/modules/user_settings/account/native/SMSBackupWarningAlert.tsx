// Module ID: 7245
// Function ID: 7246
// Name: SMSBackupWarningAlert
// Dependencies: [19, 21, 5014, 6030, 1113, 5959, 5624, 2]
// Exports: default

// Module 7245 (SMSBackupWarningAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import AlertDefault from "Alert" /* 6030 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ title: { textAlign: "center" }, body: { marginTop: 8, textAlign: "center", lineHeight: 18 } });
const result = size.fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_5();
  let obj = {
    cancelText: intl.string(onConfirm(1113).t["ETE/oC"]),
    confirmText: intl2.string(onConfirm(1113).t.N86XcP),
    onConfirm: function handleConfirm() {
      onConfirm();
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    },
    onCancel() {
      const obj = actions_AlertActionCreatorsDefault;
      return obj.close();
    },
    children: items
  };
  const tmp2 = AlertDefault;
  intl = onConfirm(1113).intl;
  intl2 = onConfirm(1113).intl;
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(onConfirm(1113).t.Ed4XQB) };
  const Text = onConfirm(5624).Text;
  intl3 = onConfirm(1113).intl;
  items = [closure_3(Text, obj2), ];
  const obj3 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: intl4.string(onConfirm(1113).t.EDU2Eg) };
  const Text2 = onConfirm(5624).Text;
  intl4 = onConfirm(1113).intl;
  items[1] = closure_3(Text2, obj3);
  return closure_4(tmp2, obj);
};

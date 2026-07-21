// Module ID: 9253
// Function ID: 72304
// Name: SMSBackupWarningAlert
// Dependencies: []
// Exports: default

// Module 9253 (SMSBackupWarningAlert)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).createStyles({ title: { textAlign: "center" }, body: {} });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  const arg1 = onConfirm.onConfirm;
  const tmp = callback3();
  let obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.cancelText = intl.string(arg1(dependencyMap[4]).t.ETE/oC);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.confirmText = intl2.string(arg1(dependencyMap[4]).t.N86XcP);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    callback(closure_2[5]).close();
  };
  obj.onCancel = function onCancel() {
    return callback(closure_2[5]).close();
  };
  obj = { Opened: 1627389952, marginVertical: 29249850, marginStart: -1876471551, marginEnd: 15473, style: tmp.title };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj.children = intl3.string(arg1(dependencyMap[4]).t.Ed4XQB);
  const items = [callback(arg1(dependencyMap[6]).Text, obj), ];
  obj = { style: tmp.body };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj.children = intl4.string(arg1(dependencyMap[4]).t.EDU2Eg);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj.children = items;
  return callback2(importDefault(dependencyMap[3]), obj);
};

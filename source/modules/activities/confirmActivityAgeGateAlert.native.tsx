// Module ID: 10811
// Function ID: 83979
// Name: ConfirmActivityGateContent
// Dependencies: []
// Exports: confirmActivityAgeGateAlert

// Module 10811 (ConfirmActivityGateContent)
function ConfirmActivityGateContent(children) {
  const tmp = callback3();
  let obj = { style: tmp.alertContainer };
  const items = [callback(importDefault(dependencyMap[5]), {}), ];
  obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { alertContainer: {} };
obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.alertBodyText = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  let application;
  let onAgree;
  let onDisagree;
  ({ application, onAgree, onDisagree } = arg0);
  const intl = arg1(dependencyMap[7]).intl;
  let obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[7]).t.OgmIqy, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.title = intl2.string(arg1(dependencyMap[7]).t.SSDPOF);
  obj.children = callback(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.cancelText = intl3.string(arg1(dependencyMap[7]).t.hg1uxn);
  const intl4 = arg1(dependencyMap[7]).intl;
  obj.confirmText = intl4.string(arg1(dependencyMap[7]).t.wVq7uo);
  obj.onConfirm = onAgree;
  obj.onCancel = onDisagree;
  obj.confirmColor = arg1(dependencyMap[9]).ButtonColors.RED;
  return Promise.resolve(importDefault(dependencyMap[8]).show(obj));
};

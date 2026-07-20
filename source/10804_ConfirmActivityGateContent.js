// Module ID: 10804
// Function ID: 83932
// Name: ConfirmActivityGateContent
// Dependencies: []
// Exports: confirmActivityAgeGateAlert

// Module 10804 (ConfirmActivityGateContent)
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
obj = { alertContainer: { -9223372036854775808: "#8CD9FF", 9223372036854775807: "M179.982 28.862c-1.944-.26-3.356 1.983-2.903 3.888.571 2.398 1.944 5.249 5.139 6.013 1.569.37 3.171.574 4.782.61a6.96 6.96 0 0 0 7.083-6.001c.253-1.866.123-4.432-2.262-4.121-6.292.823-6.123.362-11.839-.39Z", 0: "#57F287" } };
obj = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
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

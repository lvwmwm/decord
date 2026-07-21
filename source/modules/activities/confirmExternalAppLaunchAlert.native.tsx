// Module ID: 10812
// Function ID: 83960
// Name: ConfirmActivityGateContent
// Dependencies: []
// Exports: confirmExternalAppLaunchAlert

// Module 10812 (ConfirmActivityGateContent)
function ConfirmActivityGateContent(activityName) {
  const tmp = callback3();
  let obj = { style: tmp.alertContainer };
  obj = { source: importDefault(dependencyMap[5]), style: tmp.announcementBirb };
  const items = [callback(closure_3, obj), , , ];
  obj = { style: tmp.alertEyebrowText, variant: "eyebrow" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.06YebE);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  const obj1 = { style: tmp.alertTitleText, variant: "heading-lg/bold" };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[7]).t.Z/eMDT, { activityName: activityName.application.name });
  items[2] = callback(arg1(dependencyMap[6]).Text, obj1);
  const obj3 = { style: tmp.alertSubtitleText, variant: "text-sm/normal" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[7]).t.z81WwD);
  items[3] = callback(arg1(dependencyMap[6]).Text, obj3);
  obj.children = items;
  return callback2(closure_4, obj);
}
function LinkButton() {
  let obj = { style: callback3().linkWrapper };
  obj = {
    onPress() {
      callback(closure_2[9]).openURL(closure_5);
    }
  };
  const intl = arg1(dependencyMap[7]).intl;
  obj.text = intl.string(arg1(dependencyMap[7]).t.E0gf5l);
  obj.children = callback(arg1(dependencyMap[8]).Button, obj);
  return callback(closure_4, obj);
}
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const PRIVATE_APPS_HELP_ARTICLE = arg1(dependencyMap[2]).PRIVATE_APPS_HELP_ARTICLE;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ alertContainer: { isArray: 2063597892, context: 1107296879, paths: 148200 }, alertEyebrowText: {}, alertTitleText: { "Null": "center", "Null": "center" }, alertSubtitleText: { "Null": "center", "Null": "center" }, announcementBirb: { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, 0: true }, linkWrapper: { marginTop: 8 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  let application;
  let onCancel;
  let onConfirm;
  ({ application, onConfirm, onCancel } = arg0);
  let obj = importDefault(dependencyMap[10]);
  obj = { title: "", children: callback(ConfirmActivityGateContent, { application }), onConfirm };
  const intl = arg1(dependencyMap[7]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[7]).t.3PatSz);
  obj.onCancel = onCancel;
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.cancelText = intl2.string(arg1(dependencyMap[7]).t.ETE/oC);
  obj.footer = callback(LinkButton, {});
  return Promise.resolve(obj.show(obj));
};

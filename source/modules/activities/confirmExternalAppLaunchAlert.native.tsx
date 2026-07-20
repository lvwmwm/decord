// Module ID: 10806
// Function ID: 83937
// Name: ConfirmActivityGateContent
// Dependencies: []
// Exports: confirmExternalAppLaunchAlert

// Module 10806 (ConfirmActivityGateContent)
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
    <string:1522289750>: false,
    <string:570601313>: null,
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
let closure_8 = arg1(dependencyMap[4]).createStyles({ alertContainer: { -9223372036854775808: "#8CD9FF", 9223372036854775807: "M179.982 28.862c-1.944-.26-3.356 1.983-2.903 3.888.571 2.398 1.944 5.249 5.139 6.013 1.569.37 3.171.574 4.782.61a6.96 6.96 0 0 0 7.083-6.001c.253-1.866.123-4.432-2.262-4.121-6.292.823-6.123.362-11.839-.39Z", 0: "#57F287" }, alertEyebrowText: {}, alertTitleText: { accessible: "center", id: "center" }, alertSubtitleText: { accessible: "center", id: "center" }, announcementBirb: { "Bool(false)": "2026-06-bounty-use-video-modal-mobile-placement-experiment", "Bool(false)": "user", "Bool(false)": true, "Bool(false)": "/assets/modules/main_tabs_v2/native/shared_components/user_list/images" }, linkWrapper: { marginTop: 8 } });
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

// Module ID: 11883
// Function ID: 91979
// Name: ReportAppProfile
// Dependencies: []
// Exports: default

// Module 11883 (ReportAppProfile)
function ReportAppProfile(arg0) {
  ({ user: closure_0, contextualGuildId: closure_1, onSubmit: closure_2, appContext: closure_3 } = arg0);
  let obj = {};
  obj = { variant: "heading-md/semibold" };
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.eyEkG1);
  obj.label = callback(arg1(dependencyMap[4]).Text, obj);
  obj = { variant: "text-xs/medium" };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.children = intl2.string(arg1(dependencyMap[5]).t.ptItsj);
  obj.subLabel = callback(arg1(dependencyMap[4]).Text, obj);
  obj.onPress = function onPress() {
    callback2(closure_2[7]).hideActionSheet(closure_6);
    const obj = callback2(closure_2[7]);
    const result = callback(closure_2[8]).showReportModalForUser(callback, callback2, closure_2, closure_3);
  };
  obj.arrow = true;
  return callback(arg1(dependencyMap[6]).ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  ({ user: closure_0, entrypoint: closure_1, contextualGuildId: closure_2, contextualChannelId: closure_3, onSubmit: closure_4, appContext: closure_5 } = arg0);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => appIdForBotUserId.getAppIdForBotUserId(lib.id));
  let obj1 = arg1(dependencyMap[10]);
  const data = obj1.useApplication(stateFromStores).data;
  let closure_6 = data;
  obj = {};
  obj = { variant: "heading-md/semibold" };
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.atP0yX);
  obj.label = callback(arg1(dependencyMap[4]).Text, obj);
  obj1 = { variant: "text-xs/medium" };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[5]).t.UGg603);
  obj.subLabel = callback(arg1(dependencyMap[4]).Text, obj1);
  obj.onPress = function onPress() {
    if (null != data) {
      let obj = callback(closure_2[7]);
      obj.hideActionSheet(data);
      obj = { application: data, entrypoint: callback, contextualGuildId: closure_2, contextualChannelId: closure_3, onSubmit: closure_4, appContext: closure_5 };
      const result = lib(closure_2[8]).showReportModalForApp(obj);
      const obj2 = lib(closure_2[8]);
    }
  };
  obj.arrow = true;
  obj.disabled = null == data;
  return callback(arg1(dependencyMap[6]).ActionSheetRow, obj);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = "BotReportChooser";
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let obj = {};
  obj = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold" };
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.Bd10bR);
  obj.header = callback(arg1(dependencyMap[4]).Text, obj);
  obj = { hasIcons: false };
  const merged = Object.assign(arg0);
  const items = [callback(ReportAppProfile, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(ReportAppBehavior, {});
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[6]).ActionSheetRow.Group, obj);
  return callback(arg1(dependencyMap[3]).ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";

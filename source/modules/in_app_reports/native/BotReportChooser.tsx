// Module ID: 11896
// Function ID: 92058
// Name: ReportAppProfile
// Dependencies: [31, 4167, 33, 5500, 4126, 1212, 5502, 4098, 7600, 566, 5465, 2]
// Exports: default

// Module 11896 (ReportAppProfile)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function ReportAppProfile(arg0) {
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let require;
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: _isNativeReflectConstruct } = arg0);
  let obj = {};
  obj = { variant: "heading-md/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.eyEkG1);
  obj.label = callback(require(4126) /* Text */.Text, obj);
  obj = { variant: "text-xs/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.ptItsj);
  obj.subLabel = callback(require(4126) /* Text */.Text, obj);
  obj.onPress = function onPress() {
    outer1_1(outer1_2[7]).hideActionSheet(outer1_6);
    const obj = outer1_1(outer1_2[7]);
    const result = outer1_0(outer1_2[8]).showReportModalForUser(closure_0, closure_1, closure_2, _isNativeReflectConstruct);
  };
  obj.arrow = true;
  return callback(require(5502) /* ActionSheetRowIcon */.ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  let _isNativeReflectConstruct;
  let closure_4;
  let closure_5;
  let dependencyMap;
  let importDefault;
  let require;
  ({ user: require, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: _isNativeReflectConstruct, onSubmit: closure_4, appContext: closure_5 } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getAppIdForBotUserId(id.id));
  let obj1 = require(5465) /* fetchApplication */;
  const data = obj1.useApplication(stateFromStores).data;
  obj = {};
  obj = { variant: "heading-md/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.atP0yX);
  obj.label = callback(require(4126) /* Text */.Text, obj);
  obj1 = { variant: "text-xs/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.UGg603);
  obj.subLabel = callback(require(4126) /* Text */.Text, obj1);
  obj.onPress = function onPress() {
    if (null != data) {
      let obj = outer1_1(outer1_2[7]);
      obj.hideActionSheet(data);
      obj = { application: data, entrypoint: closure_1, contextualGuildId: closure_2, contextualChannelId: _isNativeReflectConstruct, onSubmit: closure_4, appContext: closure_5 };
      const result = outer1_0(outer1_2[8]).showReportModalForApp(obj);
      const obj2 = outer1_0(outer1_2[8]);
    }
  };
  obj.arrow = true;
  obj.disabled = null == data;
  return callback(require(5502) /* ActionSheetRowIcon */.ActionSheetRow, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const BotReportChooser = "BotReportChooser";
let result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let obj = {};
  obj = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.Bd10bR);
  obj.header = callback(require(4126) /* Text */.Text, obj);
  obj = { hasIcons: false };
  const merged = Object.assign(arg0);
  const items = [callback(ReportAppProfile, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(ReportAppBehavior, {});
  obj.children = items;
  obj.children = callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";

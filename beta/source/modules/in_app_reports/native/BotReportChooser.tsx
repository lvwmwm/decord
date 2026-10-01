// Module ID: 12562
// Function ID: 12563
// Name: BotReportChooser
// Dependencies: [19, 5063, 21, 6618, 4832, 1115, 6620, 4800, 8089, 504, 6584, 2]
// Exports: default

// Module 12562 (BotReportChooser)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6584 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import ReportModals from "ReportModals" /* 8089 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function ReportAppProfile(arg0) {
  let Text;
  let Text2;
  let intl;
  let intl2;
  let obj2;
  let obj3;
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: ApplicationStore } = arg0);
  let obj = {
    label: closure_4(Text, obj2),
    subLabel: closure_4(Text2, obj3),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(BotReportChooser_str);
      const obj2 = ReportModals;
      const result = obj2.showReportModalForUser(require, importDefault, dependencyMap, ApplicationStore);
    },
    arrow: true
  };
  const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
  obj2 = { variant: "heading-md/semibold", children: intl.string(intl3.t.eyEkG1) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  obj3 = { variant: "text-xs/medium", children: intl2.string(intl3.t.ptItsj) };
  Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  return closure_4(ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  let Text;
  let Text2;
  let appContext;
  let closure_4;
  let closure_5;
  let contextualChannelId;
  let contextualGuildId;
  let entrypoint;
  let id;
  let intl;
  let intl2;
  let obj4;
  let obj5;
  ({ user: require, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: ApplicationStore, onSubmit: closure_4, appContext: closure_5 } = arg0);
  let obj = get_initialized;
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getAppIdForBotUserId(require.id));
  let obj2 = ApplicationActionCreators;
  const data = obj2.useApplication(stateFromStores).data;
  let obj3 = {
    label: onSubmit(Text, obj4),
    subLabel: onSubmit(Text2, obj5),
    onPress() {
      if (null != data) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(BotReportChooser_str);
        const obj3 = { application: tmp, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: ApplicationStore, onSubmit, appContext };
        const obj2 = ReportModals;
        const result = obj2.showReportModalForApp(obj3);
      }
    },
    arrow: true,
    disabled: null == data
  };
  const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
  obj4 = { variant: "heading-md/semibold", children: intl.string(intl3.t.atP0yX) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  obj5 = { variant: "text-xs/medium", children: intl2.string(intl3.t.UGg603) };
  Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  return onSubmit(ActionSheetRow, obj3);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const BotReportChooser_str = "BotReportChooser";
let result = size.fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let Group;
  let Text;
  let intl;
  let items;
  let obj2;
  let obj3;
  const obj = { header: React3(Text, obj2), children: hasOwnProperty(Group, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: intl.string(intl3.t.Bd10bR) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  obj3 = { hasIcons: false, children: items };
  const obj4 = {};
  Group = ActionSheetRow2.ActionSheetRow.Group;
  const merged = Object.assign(arg0);
  items = [React3(ReportAppProfile, obj4), ];
  const obj5 = {};
  const merged1 = Object.assign(arg0);
  items[1] = React3(ReportAppBehavior, obj5);
  return React3(ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";

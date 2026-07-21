// Module ID: 12222
// Function ID: 93817
// Name: SettingsUpsellsTableRow
// Dependencies: []
// Exports: default

// Module 12222 (SettingsUpsellsTableRow)
function SettingsUpsellsTableRow(arg0) {
  let description;
  let disabledTitle;
  let title;
  ({ onButtonClick: closure_0, trackSettingsUpsellsAction: closure_1 } = arg0);
  ({ title, disabledTitle, description } = arg0);
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  importDefault(closure_2[8])(() => {
    callback2(callback(closure_2[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: tmp[0],
    onPress() {
      callback();
      callback3(true);
      callback2(callback(callback3[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: callback2(arg1(closure_2[11]).SettingsIcon, {})
  };
  return callback2(importDefault(closure_2[10]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.settingsContainer = { width: "100%", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
const obj1 = { width: "100%", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.goToSettingsText = { marginTop: importDefault(dependencyMap[7]).space.PX_4 };
let closure_11 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_4 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  let reportId;
  settingsUpsells = settingsUpsells.settingsUpsells;
  const arg1 = settingsUpsells;
  ({ channelId: closure_1, reportId } = settingsUpsells);
  const dependencyMap = reportId;
  const reportType = settingsUpsells.reportType;
  let closure_3 = reportType;
  const reportSubType = settingsUpsells.reportSubType;
  let closure_4 = reportSubType;
  let closure_5;
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_1));
  let obj1 = arg1(dependencyMap[13]);
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = obj1.useSettingsUpsellsConfigs(settingsUpsells, type);
  let obj2 = arg1(dependencyMap[9]);
  closure_5 = obj2.useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp4 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.settingsContainer };
    obj1 = {};
    const intl = arg1(dependencyMap[15]).intl;
    obj1.title = intl.string(arg1(dependencyMap[15]).t.1yxTIJ);
    obj1.hasIcons = true;
    obj1.children = settingsUpsellsConfigs.map((getTitle) => {
      let getDescription;
      let getDisabledTitle;
      let onApply;
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return callback3(closure_12, { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: callback2(settingsUpsells[arg1]) }, arg1);
    });
    obj.children = callback2(arg1(dependencyMap[14]).TableRowGroup, obj1);
    const items1 = [callback2(closure_5, obj), ];
    obj2 = { variant: "text-sm/medium", style: tmp.goToSettingsText };
    const intl2 = arg1(dependencyMap[15]).intl;
    const obj3 = {
      goToSettingsHook() {
          let obj = settingsUpsells(reportId[17]);
          obj = { screen: constants2.CONTENT_AND_SOCIAL };
          obj.openUserSettings(obj);
          obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: settingsUpsells(reportId[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
          callback(reportId[18]).trackWithMetadata(constants.IAR_SETTINGS_UPSELLS_ACTION, obj);
        }
    };
    obj2.children = intl2.format(arg1(dependencyMap[15]).t.u7mo+k, obj3);
    items1[1] = callback2(arg1(dependencyMap[16]).TextWithIOSLinkWorkaround, obj2);
    obj.children = items1;
    tmp4 = callback3(closure_5, obj);
  }
  return tmp4;
};

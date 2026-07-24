// Module ID: 12368
// Function ID: 96236
// Name: SettingsUpsellsTableRow
// Dependencies: [57, 31, 27, 1348, 653, 33, 4130, 689, 4559, 7693, 12362, 5791, 566, 7701, 5501, 1212, 4126, 5796, 4324, 2]
// Exports: default

// Module 12368 (SettingsUpsellsTableRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function SettingsUpsellsTableRow(arg0) {
  let description;
  let disabledTitle;
  let importDefault;
  let require;
  let title;
  ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
  ({ title, disabledTitle, description } = arg0);
  const tmp = callback(React.useState(false), 2);
  const dependencyMap = tmp[1];
  importDefault(4559)(() => {
    callback2(outer1_0(7693).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: tmp[0],
    onPress() {
      callback();
      dependencyMap(true);
      callback2(outer1_0(7693).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: callback2(require(5791) /* SettingsIcon */.SettingsIcon, {})
  };
  return callback2(importDefault(12362), obj);
}
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.settingsContainer = { width: "100%", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { width: "100%", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.goToSettingsText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  let importDefault;
  let reportId;
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  let closure_5;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = settingsUpsells(reportId[12]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(closure_1));
  let obj1 = settingsUpsells(reportId[13]);
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = obj1.useSettingsUpsellsConfigs(settingsUpsells, type);
  let obj2 = settingsUpsells(reportId[9]);
  closure_5 = obj2.useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp4 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.settingsContainer };
    obj1 = {};
    const intl = settingsUpsells(reportId[15]).intl;
    obj1.title = intl.string(settingsUpsells(reportId[15]).t["1yxTIJ"]);
    obj1.hasIcons = true;
    obj1.children = settingsUpsellsConfigs.map((getTitle) => {
      let getDescription;
      let getDisabledTitle;
      let onApply;
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return outer1_9(outer1_12, { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: callback(settingsUpsells[arg1]) }, arg1);
    });
    obj.children = callback2(settingsUpsells(reportId[14]).TableRowGroup, obj1);
    const items1 = [callback2(closure_5, obj), ];
    obj2 = { variant: "text-sm/medium", style: tmp.goToSettingsText };
    const intl2 = settingsUpsells(reportId[15]).intl;
    const obj3 = {
      goToSettingsHook() {
          let obj = settingsUpsells(reportId[17]);
          obj = { screen: outer1_8.CONTENT_AND_SOCIAL };
          obj.openUserSettings(obj);
          obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: settingsUpsells(reportId[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
          outer1_1(reportId[18]).trackWithMetadata(outer1_7.IAR_SETTINGS_UPSELLS_ACTION, obj);
        }
    };
    obj2.children = intl2.format(settingsUpsells(reportId[15]).t["u7mo+k"], obj3);
    items1[1] = callback2(settingsUpsells(reportId[16]).Text, obj2);
    obj.children = items1;
    tmp4 = callback3(closure_5, obj);
  }
  return tmp4;
};

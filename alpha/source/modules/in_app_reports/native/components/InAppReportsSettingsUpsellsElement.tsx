// Module ID: 15169
// Function ID: 15170
// Name: InAppReportsSettingsUpsellsElement
// Dependencies: [32, 19, 17, 4863, 1072, 21, 5014, 575, 5593, 8356, 15163, 7561, 504, 8364, 7060, 1113, 5624, 7563, 5760, 2]
// Exports: default

// Module 15169 (InAppReportsSettingsUpsellsElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useMountEffectDefault from "useMountEffect" /* 5593 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import SettingsIcon from "SettingsIcon" /* 7561 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import in_app_reports_ReportUtils from "in_app_reports/ReportUtils" /* 8356 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 15163 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function SettingsUpsellsTableRow(arg0) {
  let closure_2;
  let description;
  let disabledTitle;
  let first;
  let title;
  ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
  dependencyMap = undefined;
  ({ title, disabledTitle, description } = arg0);
  [first, dependencyMap] = react.useState(false);
  useMountEffectDefault(() => {
    importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: first,
    onPress() {
      require();
      closure_2(true);
      importDefault(in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: closure_9(SettingsIcon.SettingsIcon, {})
  };
  const tmp4 = InAppReportsUpsellsTableRowDefault;
  return closure_9(tmp4, obj);
}
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, settingsContainer: obj3, goToSettingsText: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  let TableRowGroup;
  let intl;
  let intl2;
  let items1;
  let obj4;
  let obj6;
  let reportId;
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  let closure_5;
  const tmp = closure_11();
  let obj = settingsUpsells(reportId[12]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  let type;
  const useSettingsUpsellsConfigs = settingsUpsells(reportId[13]).useSettingsUpsellsConfigs;
  settingsUpsells(reportId[13]);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = useSettingsUpsellsConfigs(settingsUpsells, type);
  const tmp2Result = settingsUpsells(reportId[9]);
  closure_5 = tmp2Result.useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp7 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    let obj2 = { style: tmp.container, children: items1 };
    let obj3 = { style: tmp.settingsContainer, children: closure_9(TableRowGroup, obj4) };
    obj4 = {
      title: intl.string(settingsUpsells(reportId[15]).t["1yxTIJ"]),
      hasIcons: true,
      children: settingsUpsellsConfigs.map((getTitle, index) => {
          let getDescription;
          let getDisabledTitle;
          let onApply;
          const obj = { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: closure_5(settingsUpsells[index]) };
          ({ getDisabledTitle, getDescription, onApply } = getTitle);
          return React4(SettingsUpsellsTableRow, obj, index);
        })
    };
    TableRowGroup = tmp2(tmp3[14]).TableRowGroup;
    intl = tmp2(tmp3[15]).intl;
    items1 = [closure_9(closure_5, obj3), ];
    const obj5 = { variant: "text-sm/medium", style: tmp.goToSettingsText, children: intl2.format(settingsUpsells(reportId[15]).t["u7mo+k"], obj6) };
    const Text = tmp2(tmp3[16]).Text;
    intl2 = tmp2(tmp3[15]).intl;
    obj6 = {
      goToSettingsHook() {
          const obj = openUserSettings;
          const obj2 = { screen: metroImportAll.CONTENT_AND_SOCIAL };
          obj.openUserSettings(obj2);
          const obj3 = AppAnalyticsUtilsDefault;
          const obj4 = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: in_app_reports_ReportUtils.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
          obj3.trackWithMetadata(metroImportDefault.IAR_SETTINGS_UPSELLS_ACTION, obj4);
        }
    };
    items1[1] = closure_9(Text, obj5);
    tmp7 = closure_10(closure_5, obj2);
  }
  return tmp7;
};

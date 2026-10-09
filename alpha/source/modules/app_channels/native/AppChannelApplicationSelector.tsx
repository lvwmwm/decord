// Module ID: 8591
// Function ID: 8592
// Name: AppChannelApplicationSelector
// Dependencies: [19, 21, 8592, 1126, 6269, 6186, 8595, 5055, 8596, 2000, 8596, 2]
// Exports: default

// Module 8591 (AppChannelApplicationSelector)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AppChannelApplicationActionSheet from "AppChannelApplicationActionSheet" /* 8596 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationSelector.tsx");

export default function AppChannelApplicationSelector(guildId) {
  let disabled;
  let handlePress;
  let hasNoApplications;
  let intl3;
  let name;
  let onChange;
  let selectedApplication;
  let tmp5Result;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const selectedApplicationId = guildId.selectedApplicationId;
  ({ onChange: jsx, disabled } = guildId);
  const tmp = guildId;
  let tmp2 = selectedApplicationId;
  const description = guildId.description;
  let obj = guildId(selectedApplicationId[2]);
  const appChannelApplicationOptions = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId, disabled);
  ({ selectedApplication, hasNoApplications } = appChannelApplicationOptions);
  if (null != selectedApplication) {
    name = selectedApplication.name;
  } else {
    const intl = tmp(tmp2[3]).intl;
    const string = intl.string;
    const t = tmp(tmp2[3]).t;
    if (hasNoApplications) {
      name = string(t.MlQm3T);
    } else {
      name = string(t.F2FMFR);
    }
  }
  const TableRowGroup = tmp(tmp2[4]).TableRowGroup;
  const intl2 = tmp(tmp2[3]).intl;
  ({ label: name, accessibilityLabel: "" + intl3.string(tmp(tmp2[3]).t.oYTLIL) + " " + name, icon: tmp5Result, onPress: handlePress, arrow: true !== disabled && !hasNoApplications, disabled: !(true !== disabled && !hasNoApplications) });
  const TableRow = tmp(tmp2[5]).TableRow;
  intl3 = tmp(tmp2[3]).intl;
  tmp5Result = null;
  if (null != selectedApplication) {
    const obj4 = { application: selectedApplication };
    tmp5Result = tmp5(channelId(tmp2[6]), obj4);
  }
  handlePress = undefined;
  if (true !== disabled && !hasNoApplications) {
    handlePress = function handlePress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { guildId, channelId, selectedApplicationId, onChange: jsx };
      const tmp2 = asyncRequire(8596, dependencyMap.paths);
      openLazy(tmp2, AppChannelApplicationActionSheet.APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY, obj);
    };
  }
  return <TableRowGroup title={intl2.string(tmp(tmp2[3]).t.oYTLIL)} description={description} hasIcons>{null}</TableRowGroup>;
};

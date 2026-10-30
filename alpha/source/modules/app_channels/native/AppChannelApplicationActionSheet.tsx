// Module ID: 9031
// Function ID: 9032
// Name: AppChannelApplicationActionSheet
// Dependencies: [19, 21, 9028, 5253, 7360, 7315, 1114, 7052, 7055, 9032, 9030, 2]
// Exports: default

// Module 9031 (AppChannelApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 9032 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default function AppChannelApplicationActionSheet(arg0) {
  let channelId;
  let guildId;
  let intl;
  let intl2;
  let onChange;
  let selectedApplicationId;
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  let obj = onChange(9028);
  const options = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    onChange(arg0);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const ActionSheet = onChange(7360).ActionSheet;
  ({ title: intl.string(onChange(1114).t.F2FMFR) });
  const BottomSheetTitleHeader = onChange(7315).BottomSheetTitleHeader;
  intl = onChange(1114).intl;
  ({
    accessibilityLabel: intl2.string(onChange(1114).t.F2FMFR),
    value: selectedApplicationId,
    onChange: callback,
    hasIcons: true,
    children: options.map((item) => {
      let application;
      let status;
      ({ application, status } = item);
      const TableRadioRow = onChange(dependencyMap[8]).TableRadioRow;
      return <TableRadioRow key={application.id} value={application.id} label={application.name} subLabel={getAppChannelApplicationUnsupportedTextDefault(status)} disabled={!status.supported} icon={null} />;
    })
  });
  const TableRadioGroup = onChange(7052).TableRadioGroup;
  intl2 = onChange(1114).intl;
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";

// Module ID: 7635
// Function ID: 7636
// Name: AppChannelApplicationActionSheet
// Dependencies: [19, 21, 7632, 5008, 7433, 7395, 1112, 7227, 7229, 7636, 7634, 2]
// Exports: default

// Module 7635 (AppChannelApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 7636 */;
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
  let obj = onChange(7632);
  const options = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    onChange(arg0);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const ActionSheet = onChange(7433).ActionSheet;
  ({ title: intl.string(onChange(1112).t.F2FMFR) });
  const BottomSheetTitleHeader = onChange(7395).BottomSheetTitleHeader;
  intl = onChange(1112).intl;
  ({
    accessibilityLabel: intl2.string(onChange(1112).t.F2FMFR),
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
  const TableRadioGroup = onChange(7227).TableRadioGroup;
  intl2 = onChange(1112).intl;
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";

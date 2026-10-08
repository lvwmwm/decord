// Module ID: 8588
// Function ID: 8589
// Name: AppChannelApplicationActionSheet
// Dependencies: [19, 21, 558, 576, 8584, 5054, 6828, 1126, 6264, 8589, 8587, 6885, 6265, 2]

// Module 8588 (AppChannelApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 8589 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelApplicationActionSheet(arg0) {
  let channelId;
  let guildId;
  let onChange;
  let selectedApplicationId;
  let tmp4;
  let tmp5;
  let obj = onChange(576);
  const cResult = obj.c(11);
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  const obj2 = onChange(8584);
  const options = obj2.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  if (cResult[0] !== onChange) {
    const fn = function l(arg0) {
      onChange(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(6828).BottomSheetTitleHeader;
    const intl = tmp(1126).intl;
    const tmp7 = <BottomSheetTitleHeader title={intl.string(onChange(1126).t.F2FMFR)} />;
    cResult[2] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(onChange(1126).t.F2FMFR);
    cResult[3] = stringResult;
  }
  let str = selectedApplicationId;
  if (selectedApplicationId == null) {
    str = "";
  }
  if (cResult[4] !== options) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          let application;
          let status;
          ({ application, status } = arg0);
          const TableRadioRow = onChange(dependencyMap[8]).TableRadioRow;
          return <TableRadioRow key={application.id} value={application.id} label={application.name} subLabel={getAppChannelApplicationUnsupportedTextDefault(status)} disabled={!status.supported} icon={null} />;
        }
      }
      cResult[6] = S;
      tmp11 = S;
    } else {
      class S {
        constructor(arg0) {
          let application;
          let status;
          ({ application, status } = arg0);
          const TableRadioRow = onChange(dependencyMap[8]).TableRadioRow;
          return <TableRadioRow key={application.id} value={application.id} label={application.name} subLabel={getAppChannelApplicationUnsupportedTextDefault(status)} disabled={!status.supported} icon={null} />;
        }
      }
    }
    const mapped = options.map(tmp11);
    cResult[4] = options;
    cResult[5] = mapped;
  } else {
    class S {
      constructor(arg0) {
        let application;
        let status;
        ({ application, status } = arg0);
        const TableRadioRow = onChange(dependencyMap[8]).TableRadioRow;
        return <TableRadioRow key={application.id} value={application.id} label={application.name} subLabel={getAppChannelApplicationUnsupportedTextDefault(status)} disabled={!status.supported} icon={null} />;
      }
    }
  }
  if (cResult[7] === tmp4) {
    class S {
      constructor(arg0) {
        let application;
        let status;
        ({ application, status } = arg0);
        const TableRadioRow = onChange(dependencyMap[8]).TableRadioRow;
        return <TableRadioRow key={application.id} value={application.id} label={application.name} subLabel={getAppChannelApplicationUnsupportedTextDefault(status)} disabled={!status.supported} icon={null} />;
      }
    }
  }
  const ActionSheet = tmp(6885).ActionSheet;
  cResult[7] = tmp4;
  cResult[8] = str;
  cResult[9] = tmp10;
  cResult[10] = <ActionSheet header={tmp5}>{null}</ActionSheet>;
}) : (function AppChannelApplicationActionSheet(arg0) {
  let channelId;
  let guildId;
  let intl;
  let intl2;
  let onChange;
  let selectedApplicationId;
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  let obj = onChange(8584);
  const options = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    onChange(arg0);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const ActionSheet = onChange(6885).ActionSheet;
  ({ title: intl.string(onChange(1126).t.F2FMFR) });
  const BottomSheetTitleHeader = onChange(6828).BottomSheetTitleHeader;
  intl = onChange(1126).intl;
  ({
    accessibilityLabel: intl2.string(onChange(1126).t.F2FMFR),
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
  const TableRadioGroup = onChange(6265).TableRadioGroup;
  intl2 = onChange(1126).intl;
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  return <ActionSheet header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default tmp2;
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";

// Module ID: 19639
// Function ID: 19640
// Name: TimeoutDurationActionSheet
// Dependencies: [19, 13242, 4923, 21, 19618, 7360, 7315, 5619, 1114, 7052, 5253, 7055, 2]
// Exports: default

// Module 19639 (TimeoutDurationActionSheet)
import intl3 from "intl" /* 1114 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 4923 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRadioRow2 from "TableRadioRow" /* 7055 */;
import Constants from "Constants" /* 13242 */;
import getActionInfo from "getActionInfo" /* 19618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
const AutomodActionType = Constants.AutomodActionType;
let closure_4 = GuildDisableCommunicationConstants.getDisableCommunicationDurationOptions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TimeoutDurationActionSheet.tsx");

export default function TimeoutDurationActionSheet(triggerType) {
  let action;
  let intl;
  let intl2;
  let items;
  let items1;
  let str2;
  ({ action, onSelectDuration: require, onRemove: importDefault } = triggerType);
  triggerType = triggerType.triggerType;
  let obj = getActionInfo;
  const actionInfo = obj.getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType);
  let durationSeconds;
  const arr = closure_4();
  if (action != null) {
    durationSeconds = action.metadata.durationSeconds;
  }
  const ActionSheet = tmp(7360).ActionSheet;
  let str;
  const BottomSheetTitleHeader = tmp(7315).BottomSheetTitleHeader;
  if (actionInfo != null) {
    str = actionInfo.headerText;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { startExpanded: true, header: closure_5(BottomSheetTitleHeader, { title: str }), children: items };
  const obj3 = { variant: "text-md/normal", children: intl.string(intl3.t.DWGBAh) };
  const Text = tmp(5619).Text;
  intl = tmp(1114).intl;
  items = [tmp6(Text, obj3), ];
  let headerText;
  const TableRadioGroup = tmp(7052).TableRadioGroup;
  if (actionInfo != null) {
    headerText = actionInfo.headerText;
  }
  const obj4 = {
    hasIcons: false,
    accessibilityLabel: headerText,
    defaultValue: str2,
    onChange: function handleChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if ("" !== arg0) {
        const _Number = Number;
        require(Number(arg0));
      } else {
        importDefault();
      }
    },
    children: items1
  };
  str2 = "";
  if (null != durationSeconds) {
    const _String = String;
    str2 = String(durationSeconds);
  }
  const obj5 = { value: "", label: intl2.string(intl3.t.PoWNfe) };
  let TableRadioRow = tmp(7055).TableRadioRow;
  intl2 = tmp(1114).intl;
  items1 = [
    tmp6(TableRadioRow, obj5),
    arr.map((item) => {
      let id;
      let label;
      let value;
      ({ id, value, label } = item);
      const obj = { value: String(value), label };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_5(TableRadioRow, obj, id);
    })
  ];
  items[1] = closure_6(TableRadioGroup, obj4);
  return closure_6(ActionSheet, obj2);
};

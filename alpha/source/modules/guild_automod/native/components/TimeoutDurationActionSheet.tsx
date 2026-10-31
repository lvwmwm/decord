// Module ID: 19696
// Function ID: 19697
// Name: TimeoutDurationActionSheet
// Dependencies: [19, 13277, 4928, 21, 19675, 7366, 7321, 5624, 1113, 7058, 5258, 7061, 2]
// Exports: default

// Module 19696 (TimeoutDurationActionSheet)
import intl3 from "intl" /* 1113 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 4928 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRadioRow2 from "TableRadioRow" /* 7061 */;
import Constants from "Constants" /* 13277 */;
import getActionInfo from "getActionInfo" /* 19675 */;
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
  const ActionSheet = tmp(7366).ActionSheet;
  let str;
  const BottomSheetTitleHeader = tmp(7321).BottomSheetTitleHeader;
  if (actionInfo != null) {
    str = actionInfo.headerText;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { startExpanded: true, header: closure_5(BottomSheetTitleHeader, { title: str }), children: items };
  const obj3 = { variant: "text-md/normal", children: intl.string(intl3.t.DWGBAh) };
  const Text = tmp(5624).Text;
  intl = tmp(1113).intl;
  items = [tmp6(Text, obj3), ];
  let headerText;
  const TableRadioGroup = tmp(7058).TableRadioGroup;
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
  let TableRadioRow = tmp(7061).TableRadioRow;
  intl2 = tmp(1113).intl;
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

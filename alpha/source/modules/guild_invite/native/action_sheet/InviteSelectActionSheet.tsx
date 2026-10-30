// Module ID: 19951
// Function ID: 19952
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 5009, 575, 5267, 7315, 7052, 5253, 7055, 2]
// Exports: default

// Module 19951 (InviteSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7052 */;
import TableRadioRow from "TableRadioRow" /* 7055 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  let options;
  let title;
  let value;
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const tmp = closure_4();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  ({
    value,
    onChange: function handleChange(arg0) {
      require(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <BottomSheet contentStyles={tmp.content} header={null}>{null}</BottomSheet>;
};

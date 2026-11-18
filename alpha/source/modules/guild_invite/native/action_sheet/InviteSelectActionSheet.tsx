// Module ID: 18446
// Function ID: 18447
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 4823, 575, 5051, 7426, 7258, 5037, 7260, 2]
// Exports: default

// Module 18446 (InviteSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5051 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7258 */;
import TableRadioRow from "TableRadioRow" /* 7260 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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

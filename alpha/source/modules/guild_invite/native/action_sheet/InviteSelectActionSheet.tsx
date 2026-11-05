// Module ID: 20332
// Function ID: 20333
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 5143, 575, 5398, 7460, 7202, 5384, 7205, 2]
// Exports: default

// Module 20332 (InviteSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5398 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7202 */;
import TableRadioRow from "TableRadioRow" /* 7205 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
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

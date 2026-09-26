// Module ID: 8886
// Function ID: 8887
// Name: SafetyTipsRow
// Dependencies: [19, 17, 21, 4788, 576, 5854, 4784, 2]
// Exports: default

// Module 8886 (SafetyTipsRow)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4784 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
const obj2 = { indexContainer: null };
let size = { width: 32, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: nativeDefault.space.PX_4 };
obj2.indexContainer = size;
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  ({ index, tip, description, end } = arg0);
  _require = closure_4();
  return jsx(require("TableRow").TableRow, { icon: jsx((children) => <View style={indexContainer.indexContainer}>{jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index })}</View>, { index }), label: tip, subLabel: description, end });
};

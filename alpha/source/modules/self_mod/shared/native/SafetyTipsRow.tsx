// Module ID: 8152
// Function ID: 8153
// Name: SafetyTipsRow
// Dependencies: [19, 17, 21, 5009, 575, 6969, 5619, 2]
// Exports: default

// Module 8152 (SafetyTipsRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { indexContainer: size };
size = { width: 32, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: nativeDefault.space.PX_4 };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let indexContainer;
  let tip;
  ({ index, tip, description, end } = arg0);
  _require = closure_4();
  const TableRow = require("TableRow").TableRow;
  return <TableRow icon={null} label={tip} subLabel={description} end={end} />;
};

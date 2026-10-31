// Module ID: 12283
// Function ID: 12284
// Name: ViewAllRow
// Dependencies: [19, 17, 21, 5014, 6975, 1113, 5624, 2]
// Exports: default

// Module 12283 (ViewAllRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import TableRow2 from "TableRow" /* 6975 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  let intl2;
  title = title.title;
  const onPress = title.onPress;
  let formatToPlainStringResult;
  const tmp = closure_4();
  const TableRow = TableRow2.TableRow;
  if (null != title) {
    const intl = tmp3(1113).intl;
    const obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1113).t["bj/2kV"], obj);
  }
  ({ color: "text-brand", variant: "text-md/semibold", children: intl2.format(intl3.t.gVw57p, {}) });
  const Text = tmp3(5624).Text;
  intl2 = tmp3(1113).intl;
  return <TableRow accessibilityLabel={formatToPlainStringResult} label={null} onPress={onPress} end />;
};

// Module ID: 11576
// Function ID: 11577
// Name: ViewAllRow
// Dependencies: [19, 17, 21, 4836, 5917, 1115, 4832, 2]
// Exports: default

// Module 11576 (ViewAllRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import TableRow2 from "TableRow" /* 5917 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
    const intl = tmp3(1115).intl;
    const obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1115).t["bj/2kV"], obj);
  }
  ({ color: "text-brand", variant: "text-md/semibold", children: intl2.format(intl3.t.gVw57p, {}) });
  const Text = tmp3(4832).Text;
  intl2 = tmp3(1115).intl;
  return <TableRow accessibilityLabel={formatToPlainStringResult} label={null} onPress={onPress} end />;
};

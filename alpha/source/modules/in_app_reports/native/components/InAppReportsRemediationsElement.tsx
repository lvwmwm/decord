// Module ID: 15161
// Function ID: 15162
// Name: InAppReportsRemediationsElement
// Dependencies: [19, 17, 21, 5014, 575, 7060, 1113, 2]
// Exports: default

// Module 15161 (InAppReportsRemediationsElement)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default function RemediationsElement(children) {
  let intl;
  children = children.children;
  ({ title: intl.string(intl2.t["k+QA9N"]), hasIcons: true, children });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl2.intl;
  return <View style={closure_4().container}>{null}</View>;
};

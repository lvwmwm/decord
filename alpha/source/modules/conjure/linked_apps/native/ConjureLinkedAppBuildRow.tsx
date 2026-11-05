// Module ID: 12990
// Function ID: 12991
// Name: ConjureLinkedAppBuildRow
// Dependencies: [19, 21, 1113, 3995, 7204, 7119, 12367, 5384, 12372, 2]
// Exports: default

// Module 12990 (ConjureLinkedAppBuildRow)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5384 */;
import TableRow2 from "TableRow" /* 7119 */;
import TableRowGroup2 from "TableRowGroup" /* 7204 */;
import conjureLinkedApps from "conjureLinkedApps" /* 12367 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const ConjureLinkedAppBuildSheet = "ConjureLinkedAppBuildSheet";
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx");

export default function ConjureLinkedAppBuildRow(value) {
  let obj4;
  let title;
  value = value.value;
  require = value;
  const onChange = value.onChange;
  const disabled = value.disabled;
  const intl = intl2.intl;
  const stringResult = intl.string(onChange(3995).Odrcmq);
  dependencyMap = stringResult;
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj2 = {
    label: stringResult,
    trailing: null,
    arrow: true,
    disabled,
    onPress: function openSheet() {
      const obj = { content: null, key: ConjureLinkedAppBuildSheet, stackingBehavior: "stack" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  };
  const TableRow = TableRow2.TableRow;
  ({ text: obj4.linkedAppBuildLabel(value) });
  const TrailingText = TableRow2.TableRow.TrailingText;
  obj4 = conjureLinkedApps;
  return <TableRowGroup hasIcons={false}>{null}</TableRowGroup>;
};

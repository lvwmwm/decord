// Module ID: 12517
// Function ID: 12518
// Name: ConjureLinkedAppBuildRow
// Dependencies: [19, 21, 558, 576, 1128, 3862, 5242, 11882, 11877, 6935, 7019, 2]

// Module 12517 (ConjureLinkedAppBuildRow)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5242 */;
import TableRow2 from "TableRow" /* 6935 */;
import TableRowGroup2 from "TableRowGroup" /* 7019 */;
import conjureLinkedApps from "conjureLinkedApps" /* 11877 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const ConjureLinkedAppBuildSheet = "ConjureLinkedAppBuildSheet";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureLinkedAppBuildRow(value) {
  let disabled;
  let first;
  let label;
  let onChange;
  const tmp = require;
  let obj = require("react");
  const cResult = obj.c(12);
  value = value.value;
  require = value;
  ({ disabled, onChange } = value);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[4]).intl;
    const stringResult = intl.string(onChange(label[5]).Odrcmq);
    cResult[0] = stringResult;
    label = stringResult;
  } else {
    label = cResult[0];
  }
  if (cResult[1] === onChange) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === value) {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== value) {
      const tmpResult = tmp(label[8]);
      const linkedAppBuildLabelResult = tmpResult.linkedAppBuildLabel(value);
      cResult[4] = value;
      cResult[5] = linkedAppBuildLabelResult;
      tmp8 = linkedAppBuildLabelResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      const tmp12 = jsx(tmp(label[9]).TableRow.TrailingText, { text: tmp8 });
      cResult[6] = tmp8;
      cResult[7] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === disabled) {
      if (cResult[9] === tmp7) {
        let tmp13;
        if (cResult[10] === tmp10) {
          tmp13 = cResult[11];
        }
        return tmp13;
      }
    }
    const TableRowGroup = tmp(tmp2[10]).TableRowGroup;
    const tmp15 = <TableRowGroup hasIcons={false}>{null}</TableRowGroup>;
    cResult[8] = disabled;
    cResult[9] = tmp7;
    cResult[10] = tmp10;
    cResult[11] = tmp15;
    tmp13 = tmp15;
  }
  function openSheet() {
    const obj = { content: null, key: ConjureLinkedAppBuildSheet, stackingBehavior: "stack" };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    ActionSheetActionCreators;
    showActionSheet(obj);
  }
  cResult[1] = onChange;
  cResult[2] = value;
  cResult[3] = openSheet;
  tmp7 = openSheet;
}) : (function ConjureLinkedAppBuildRow(value) {
  let obj4;
  let title;
  value = value.value;
  require = value;
  const onChange = value.onChange;
  const disabled = value.disabled;
  const intl = intl2.intl;
  const stringResult = intl.string(onChange(3862).Odrcmq);
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
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx");

export default tmp3;

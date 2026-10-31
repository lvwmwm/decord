// Module ID: 12531
// Function ID: 12532
// Name: ConjureVersionRestoreConfirm
// Dependencies: [32, 19, 21, 5964, 1113, 3868, 7060, 6974, 5960, 2]
// Exports: confirmRestoreVersion

// Module 12531 (ConjureVersionRestoreConfirm)
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import AlertModal2 from "AlertModal" /* 5964 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function ConjureVersionRestoreAlert(matchingBackup) {
  let TableCheckboxRow;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj3;
  let obj4;
  let tmp3;
  let tmp4Result;
  matchingBackup = matchingBackup.matchingBackup;
  const onConfirm = matchingBackup.onConfirm;
  first = undefined;
  [first, tmp3] = react.useState(false);
  const obj = { title: intl.string(_modDef3868.NDY6Zv), content: intl2.string(_modDef3868.z2x5zj), extraContent: tmp4Result, actions: metroImportDefault(metroRequire, obj4) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl7.intl;
  intl2 = intl7.intl;
  tmp4Result = undefined;
  if (null != matchingBackup) {
    const obj2 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow, obj3) };
    const TableRowGroup = tmp5(7060).TableRowGroup;
    obj3 = { label: intl3.string(_modDef3868["+/pFME"]), subLabel: intl4.string(_modDef3868["+I112y"]), checked: first, onPress: tmp3 };
    TableCheckboxRow = tmp5(6974).TableCheckboxRow;
    intl3 = tmp5(1113).intl;
    intl4 = tmp5(1113).intl;
    tmp4Result = tmp4(TableRowGroup, obj2);
  }
  obj4 = { children: items };
  const obj5 = {
    variant: "primary",
    text: intl5.string(_modDef3868.K3Q49G),
    onPress() {
      let tmp2 = null;
      const tmp = onConfirm;
      if (first) {
        tmp2 = null;
        if (null != matchingBackup) {
          tmp2 = matchingBackup;
        }
      }
      return tmp(tmp2);
    }
  };
  const AlertActionButton = tmp5(5964).AlertActionButton;
  intl5 = tmp5(1113).intl;
  items = [hasOwnProperty(AlertActionButton, obj5), ];
  const obj6 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
  const AlertActionButton2 = tmp5(5964).AlertActionButton;
  intl6 = tmp5(1113).intl;
  items[1] = hasOwnProperty(AlertActionButton2, obj6);
  return hasOwnProperty(AlertModal, obj);
}
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureVersionRestoreConfirm.tsx");

export function confirmRestoreVersion(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureVersionRestore", hasOwnProperty(ConjureVersionRestoreAlert, obj));
}

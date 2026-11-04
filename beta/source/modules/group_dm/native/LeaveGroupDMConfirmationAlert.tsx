// Module ID: 9773
// Function ID: 9774
// Name: LeaveGroupDMConfirmationAlert
// Dependencies: [32, 19, 21, 5964, 7060, 6974, 1113, 5258, 5960, 2]
// Exports: openLeaveGroupDMConfirmationAlert

// Module 9773 (LeaveGroupDMConfirmationAlert)
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import AlertModal2 from "AlertModal" /* 5964 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6974 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function LeaveGroupDMConfirmationAlert(onConfirm) {
  let TableCheckboxRow;
  let TableRowGroup;
  let body;
  let cancelText;
  let confirmText;
  let first;
  let intl;
  let items1;
  let obj2;
  let obj3;
  let obj4;
  let title;
  let tmp3;
  onConfirm = onConfirm.onConfirm;
  first = undefined;
  ({ title, body, confirmText, cancelText } = onConfirm);
  [first, tmp3] = react.useState(false);
  const items = [onConfirm, first];
  const callback = react.useCallback(() => onConfirm(first), items);
  const obj = { title, content: body, extraContent: hasOwnProperty(TableRowGroup, obj2), actions: metroImportDefault(metroRequire, obj4) };
  const AlertModal = AlertModal2.AlertModal;
  obj2 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow, obj3) };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  obj3 = { label: intl.string(intl2.t.bq3JXs), checked: first, onPress: tmp3 };
  TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl = intl2.intl;
  obj4 = { children: items1 };
  items1 = [hasOwnProperty(AlertModal2.AlertActionButton, { variant: "primary", text: confirmText, onPress: callback }), hasOwnProperty(AlertModal2.AlertActionButton, { variant: "secondary", text: cancelText })];
  return hasOwnProperty(AlertModal, obj);
}
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/group_dm/native/LeaveGroupDMConfirmationAlert.tsx");

export function openLeaveGroupDMConfirmationAlert(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const openAlert = useAlertStore.openAlert;
  const obj2 = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("leave-group-dm-confirmation", hasOwnProperty(LeaveGroupDMConfirmationAlert, obj2));
}

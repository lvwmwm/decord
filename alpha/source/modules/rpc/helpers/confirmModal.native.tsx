// Module ID: 15890
// Function ID: 15891
// Name: confirmModal
// Dependencies: [19, 21, 6048, 6052, 1112, 2]
// Exports: openFrameConfirmModal

// Module 15890 (confirmModal)
import useAlertStore from "useAlertStore" /* 6048 */;
import AlertModal2 from "AlertModal" /* 6052 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ jsx: c2, Fragment: c3, jsxs: closure_4 } = Fragment);
let closure_5 = 0;
const result = size.fileFinishedImporting("modules/rpc/helpers/confirmModal.native.tsx");

export function openFrameConfirmModal(arg0) {
  let body;
  let cancelText;
  let closure_129_0;
  let confirmText;
  let items;
  let title;
  let tmp6;
  let tmp7;
  let type;
  ({ cancelText, onSettle: closure_129_0 } = arg0);
  ({ type, title, body, confirmText } = arg0);
  closure_5 = tmp4 + 1;
  const openAlert = useAlertStore.openAlert;
  const obj = { title, content: body, actions: tmp6(tmp7, { children: items }) };
  useAlertStore;
  const AlertModal = AlertModal2.AlertModal;
  items = [, ];
  const obj2 = {
    variant: "primary",
    text: confirmText,
    onPress() {
      return closure_1_0(true);
    }
  };
  items[0] = React2(AlertModal2.AlertActionButton, obj2);
  let tmp5Result = null;
  tmp6 = React3;
  tmp7 = _false;
  if ("confirm" === type) {
    const AlertActionButton = tmp(6052).AlertActionButton;
    if (cancelText == null) {
      const intl = tmp(1112).intl;
      cancelText = intl.string(tmp(1112).t["ETE/oC"]);
    }
    const obj3 = {
      variant: "secondary",
      text: cancelText,
      onPress() {
          return closure_1_0(false);
        }
    };
    tmp5Result = tmp5(AlertActionButton, obj3);
  }
  items[1] = tmp5Result;
  openAlert(`rpc-confirm-modal-${+closure_5}`, React2(AlertModal, obj), () => closure_1_0(false));
  return true;
}

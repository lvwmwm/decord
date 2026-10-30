// Module ID: 10724
// Function ID: 10725
// Name: AcceptRequestConfirmationModal
// Dependencies: [19, 17, 21, 5009, 575, 6025, 1114, 5953, 5619, 2]
// Exports: default

// Module 10724 (AcceptRequestConfirmationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import AlertDefault from "Alert" /* 6025 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { bodyText: obj2, text: { textAlign: "center" } };
obj2 = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  onConfirm = onConfirm.onConfirm;
  const onCancel = onConfirm.onCancel;
  const tmp = closure_6();
  let obj = {
    confirmText: intl.string(onConfirm(1114).t.MMlhsr),
    cancelText: intl2.string(onConfirm(1114).t["ETE/oC"]),
    onConfirm() {
      onConfirm();
      const obj = AlertActionCreatorsDefault;
      obj.close();
    },
    onCancel,
    children: closure_5(View, obj2)
  };
  const tmp2 = AlertDefault;
  intl = onConfirm(1114).intl;
  intl2 = onConfirm(1114).intl;
  obj2 = { style: tmp.bodyText, children: items };
  const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: intl3.string(onConfirm(1114).t.eJzSDT) };
  const Text = onConfirm(5619).Text;
  intl3 = onConfirm(1114).intl;
  items = [closure_4(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: intl4.string(onConfirm(1114).t.GB4jUw) };
  const Text2 = onConfirm(5619).Text;
  intl4 = onConfirm(1114).intl;
  items[1] = closure_4(Text2, obj4);
  return closure_4(tmp2, obj);
};

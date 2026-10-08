// Module ID: 10219
// Function ID: 10220
// Name: AcceptRequestConfirmationModal
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 1126, 5297, 5086, 5394, 2]

// Module 10219 (AcceptRequestConfirmationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import AlertDefault from "Alert" /* 5394 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { bodyText: obj2, text: { textAlign: "center" } };
obj2 = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptRequestConfirmationModal(arg0) {
  let bodyText;
  let items;
  let onCancel;
  let onConfirm;
  let text;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = onConfirm(576);
  const cResult = obj.c(18);
  ({ onCancel, onConfirm } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onConfirm(1126).t.MMlhsr);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(onConfirm(1126).t["ETE/oC"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== onConfirm) {
    const fn = function f() {
      onConfirm();
      const obj = AlertActionCreatorsDefault;
      obj.close();
    };
    cResult[2] = onConfirm;
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  ({ bodyText, text } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(onConfirm(1126).t.eJzSDT);
    cResult[4] = stringResult2;
    tmp10 = stringResult2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.text) {
    const obj2 = { variant: "heading-lg/bold", color: "text-strong", style: text, children: tmp10 };
    const tmp14 = closure_4(onConfirm(5086).Text, obj2);
    cResult[5] = tmp4.text;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  const text2 = tmp4.text;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(onConfirm(1126).t.GB4jUw);
    cResult[7] = stringResult3;
    tmp15 = stringResult3;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: text2, children: tmp15 };
    const tmp19 = closure_4(onConfirm(5086).Text, obj3);
    cResult[8] = tmp4.text;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp4.bodyText) {
    if (cResult[11] === tmp17) {
      let tmp20;
      if (cResult[12] === tmp12) {
        tmp20 = cResult[13];
      }
      if (cResult[14] === onCancel) {
        if (cResult[15] === tmp20) {
          let tmp22;
          if (cResult[16] === tmp9) {
            tmp22 = cResult[17];
          }
          return tmp22;
        }
      }
      const obj4 = { confirmText: tmp5, cancelText: tmp6, onConfirm: tmp9, onCancel, children: tmp20 };
      const tmp25 = closure_4(AlertDefault, obj4);
      cResult[14] = onCancel;
      cResult[15] = tmp20;
      cResult[16] = tmp9;
      cResult[17] = tmp25;
      tmp22 = tmp25;
    }
  }
  const obj5 = { style: bodyText, children: items };
  items = [tmp12, tmp17];
  const tmp21 = closure_5(View, obj5);
  cResult[10] = tmp4.bodyText;
  cResult[11] = tmp17;
  cResult[12] = tmp12;
  cResult[13] = tmp21;
  tmp20 = tmp21;
}) : (function AcceptRequestConfirmationModal(onConfirm) {
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
    confirmText: intl.string(onConfirm(1126).t.MMlhsr),
    cancelText: intl2.string(onConfirm(1126).t["ETE/oC"]),
    onConfirm() {
      onConfirm();
      const obj = AlertActionCreatorsDefault;
      obj.close();
    },
    onCancel,
    children: closure_5(View, obj2)
  };
  const tmp2 = AlertDefault;
  intl = onConfirm(1126).intl;
  intl2 = onConfirm(1126).intl;
  obj2 = { style: tmp.bodyText, children: items };
  const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: intl3.string(onConfirm(1126).t.eJzSDT) };
  const Text = onConfirm(5086).Text;
  intl3 = onConfirm(1126).intl;
  items = [closure_4(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: intl4.string(onConfirm(1126).t.GB4jUw) };
  const Text2 = onConfirm(5086).Text;
  intl4 = onConfirm(1126).intl;
  items[1] = closure_4(Text2, obj4);
  return closure_4(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default tmp4;

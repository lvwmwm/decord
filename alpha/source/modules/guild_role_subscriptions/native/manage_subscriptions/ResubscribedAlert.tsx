// Module ID: 15488
// Function ID: 15489
// Name: ResubscribedAlert
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 1126, 6156, 15489, 1200, 5088, 5398, 2]

// Module 15488 (ResubscribedAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import AlertDefault from "Alert" /* 5398 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 15489 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ResubscribedAlert(onClose) {
  let body;
  let container;
  let first;
  let items;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(20);
  onClose = onClose.onClose;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t["NX+WJN"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  ({ container, body } = tmp4);
  if (cResult[1] !== tmp4.headerImage) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.headerImage };
    const tmp10 = FastImageDefault;
    const tmp11 = React3(tmp10, obj2);
    cResult[1] = tmp4.headerImage;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = React3(native.Spacer, { size: 27 });
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  const centerText = tmp4.centerText;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t.oPV2cy);
    cResult[4] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.centerText) {
    const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: centerText, children: tmp15 };
    const tmp19 = React3(Text_Text.Text, obj3);
    cResult[5] = tmp4.centerText;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = React3(native.Spacer, { size: 12 });
    cResult[7] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[7];
  }
  const centerText2 = tmp4.centerText;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(intl4.t.DdRizV);
    cResult[8] = stringResult2;
    tmp23 = stringResult2;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== tmp4.centerText) {
    const obj4 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: centerText2, children: tmp23 };
    const tmp27 = React3(Text_Text.Text, obj4);
    cResult[9] = tmp4.centerText;
    cResult[10] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] === tmp4.body) {
    if (cResult[12] === tmp25) {
      if (cResult[13] === tmp7) {
        let tmp28;
        if (cResult[14] === tmp17) {
          tmp28 = cResult[15];
        }
        if (cResult[16] === onClose) {
          if (cResult[17] === tmp4.container) {
            let tmp30;
            if (cResult[18] === tmp28) {
              tmp30 = cResult[19];
            }
            return tmp30;
          }
        }
        const obj5 = { confirmText: first, onConfirm: onClose, style: container, children: tmp28 };
        const tmp33 = React3(AlertDefault, obj5);
        cResult[16] = onClose;
        cResult[17] = tmp4.container;
        cResult[18] = tmp28;
        cResult[19] = tmp33;
        tmp30 = tmp33;
      }
    }
  }
  const obj6 = { style: body, children: items };
  items = [tmp7, tmp12, tmp17, tmp20, tmp25];
  const tmp29 = hasOwnProperty(View, obj6);
  cResult[11] = tmp4.body;
  cResult[12] = tmp25;
  cResult[13] = tmp7;
  cResult[14] = tmp17;
  cResult[15] = tmp29;
  tmp28 = tmp29;
}) : (function ResubscribedAlert(onClose) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_6();
  const obj = { confirmText: intl.string(intl4.t["NX+WJN"]), onConfirm: onClose, style: tmp.container, children: hasOwnProperty(View, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.body, children: items };
  const obj3 = { source: AssetRegistryDefault, style: tmp.headerImage };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj3), React3(native.Spacer, { size: 27 }), , , ];
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl2.string(intl4.t.oPV2cy) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text, obj4);
  items[3] = React3(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl3.string(intl4.t.DdRizV) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[4] = React3(Text2, obj5);
  return React3(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default tmp4;

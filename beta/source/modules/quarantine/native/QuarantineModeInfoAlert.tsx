// Module ID: 5774
// Function ID: 5775
// Name: QuarantineModeInfoAlert
// Dependencies: [19, 1078, 21, 4790, 5775, 580, 558, 568, 1119, 1181, 4786, 5239, 2]

// Module 5774 (QuarantineModeInfoAlert)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import Text_Text from "Text/Text" /* 4786 */;
import common_AlertDefault from "common/Alert" /* 5239 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5775 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(TextStyles(fn(1078).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginVertical = 12;
obj2.header = obj3;
obj2.text = { textAlign: "center", marginVertical: 8 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = c.c(10);
  onClose = onClose.onClose;
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.EouHwv);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.header) {
    const obj2 = { style: tmp4.header, children: first };
    const tmp9 = React3(tmp(1181).LegacyText, obj2);
    cResult[1] = tmp4.header;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.zNPBMA);
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.text) {
    const obj3 = { style: tmp4.text, variant: "text-md/medium", children: tmp10 };
    const tmp14 = React3(tmp(4786).Text, obj3);
    cResult[4] = tmp4.text;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === onClose) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp12) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const obj4 = { onClose, children: null };
  const items = [tmp7, tmp12];
  obj4.children = items;
  const tmp16 = React4(common_AlertDefault, obj4);
  cResult[6] = onClose;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((onClose) => {
  const tmp = closure_5();
  const obj = { onClose: onClose.onClose, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.EouHwv);
  const items = [React3(native.LegacyText, obj2), ];
  const obj3 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.zNPBMA);
  items[1] = React3(Text_Text.Text, obj3);
  obj.children = items;
  return React4(common_AlertDefault, obj);
});

// Module ID: 12270
// Function ID: 12271
// Name: ViewAllRow
// Dependencies: [19, 17, 21, 4790, 558, 568, 1119, 4786, 5854, 2]

// Module 12270 (ViewAllRow)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import TableRow from "TableRow" /* 5854 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_4 = createStyles.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ onPress, title } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== title) {
    let formatToPlainStringResult;
    if (null != title) {
      const intl = tmp(1119).intl;
      const obj2 = { title };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t["bj/2kV"], obj2);
    }
    cResult[0] = title;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: "text-brand", variant: "text-md/semibold", children: null };
    const intl2 = tmp(1119).intl;
    obj3.children = intl2.format(tmp(1119).t.gVw57p, {});
    const tmp10 = jsx(tmp(4786).Text, { color: "text-brand", variant: "text-md/semibold", children: null });
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4.expandCTALabelContainer) {
    const obj4 = { style: tmp4.expandCTALabelContainer, children: tmp8 };
    const tmp14 = <View style={tmp4.expandCTALabelContainer}>{tmp8}</View>;
    cResult[3] = tmp4.expandCTALabelContainer;
    cResult[4] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === onPress) {
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp11) {
        let tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  const tmp16 = jsx(TableRow.TableRow, { accessibilityLabel: tmp5, label: tmp11, onPress, end: true });
  cResult[5] = onPress;
  cResult[6] = tmp5;
  cResult[7] = tmp11;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : ((title) => {
  title = title.title;
  let formatToPlainStringResult;
  if (null != title) {
    const intl = tmp3(1119).intl;
    const obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1119).t["bj/2kV"], obj);
  }
  const obj2 = { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true };
  const obj3 = { style: closure_4().expandCTALabelContainer, children: null };
  const obj4 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = tmp3(1119).intl;
  obj4.children = intl2.format(util.t.gVw57p, {});
  obj3.children = jsx(Text_Text.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj2.label = <View style={closure_4().expandCTALabelContainer}>{null}</View>;
  obj2.onPress = title.onPress;
  return jsx(TableRow.TableRow, { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true });
});

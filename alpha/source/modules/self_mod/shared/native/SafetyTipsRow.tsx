// Module ID: 7703
// Function ID: 7704
// Name: SafetyTipsRow
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 5088, 6179, 2]

// Module 7703 (SafetyTipsRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { indexContainer: size };
size = { width: 32, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: nativeDefault.space.PX_4 };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let indexContainer;
  let tip;
  const obj = require("react");
  const cResult = obj.c(10);
  ({ index, tip, description, end } = arg0);
  const tmp4 = closure_4();
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
    cResult[0] = tmp4;
    cResult[1] = TipNumber;
  } else {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
  }
  if (cResult[2] === tmp5) {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
    if (cResult[5] === description) {
      class TipNumber {
        constructor(arg0) {
          obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
          return jsx(View, obj);
        }
      }
    }
    cResult[5] = description;
    cResult[6] = end;
    cResult[7] = tmp6;
    cResult[8] = tip;
    cResult[9] = jsx(tmp(6179).TableRow, { icon: tmp6, label: tip, subLabel: description, end });
    const tmp10 = jsx(tmp(6179).TableRow, { icon: tmp6, label: tip, subLabel: description, end });
  }
  const tmp7 = <tmp5 index={index} />;
  cResult[2] = tmp5;
  cResult[3] = index;
  cResult[4] = tmp7;
}) : (function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let indexContainer;
  let tip;
  ({ index, tip, description, end } = arg0);
  _require = closure_4();
  const TableRow = require("TableRow").TableRow;
  return <TableRow icon={null} label={tip} subLabel={description} end={end} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default tmp3;

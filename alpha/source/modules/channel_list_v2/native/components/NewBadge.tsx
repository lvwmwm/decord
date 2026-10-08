// Module ID: 12011
// Function ID: 12012
// Name: NewBadge
// Dependencies: [19, 17, 21, 5090, 1381, 587, 4929, 558, 576, 9242, 4991, 1126, 5086, 2]

// Module 12011 (NewBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useThemeDefault from "useTheme" /* 4991 */;
import Text_Text from "Text/Text" /* 5086 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9242 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const shared = tmp(4929);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  const tmpResult = shared;
  if (tmpResult.isThemeLight(arg1)) {
    let MOBILE_TOAST_BACKGROUND_DEFAULT;
    const tmp4 = arg0;
    if (!tmp4) {
      MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(587).colors.BACKGROUND_BRAND;
    }
    obj3.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj2.base = obj3;
    return obj2;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(587).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewBadge() {
  let base;
  let first;
  let str;
  let text;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = useIsUsingClientThemeDefault();
  const tmp5 = useThemeDefault();
  const tmp6 = closure_5(tmp4, tmp5);
  ({ base, text } = tmp6);
  const obj2 = shared;
  if (obj2.isThemeLight(tmp5)) {
    str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.y2b7CA);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp6.text) {
    let tmp9;
    if (cResult[2] === str) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp6.base) {
      let tmp11;
      if (cResult[5] === tmp9) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
    const tmp14 = <View style={base}>{tmp9}</View>;
    cResult[4] = tmp6.base;
    cResult[5] = tmp9;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = jsx(Text_Text.Text, { variant: "text-xxs/bold", style: text, color: str, children: first });
  cResult[1] = tmp6.text;
  cResult[2] = str;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function NewBadge() {
  let intl;
  let str;
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(tmp2, tmp3);
  ({ variant: "text-xxs/bold", style: tmp4.text, color: str, children: intl.string(intl2.t.y2b7CA) });
  const Text = Text_Text.Text;
  const obj3 = shared;
  if (obj3.isThemeLight(tmp3)) {
    str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  intl = tmp7(1126).intl;
  return <tmp6 style={tmp4.base}>{null}</tmp6>;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default tmp3;

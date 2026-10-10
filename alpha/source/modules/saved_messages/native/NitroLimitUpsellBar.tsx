// Module ID: 12877
// Function ID: 12878
// Name: NitroLimitUpsellBar
// Dependencies: [17, 21, 5092, 587, 558, 576, 7571, 6156, 9537, 5088, 1126, 9781, 5379, 2]

// Module 12877 (NitroLimitUpsellBar)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import WarningIcon from "WarningIcon" /* 7571 */;
import AssetRegistryDefault from "AssetRegistry" /* 9537 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9781 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { height: 20, width: 20 }, text: { flex: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroLimitUpsellBar(arg0) {
  let intl2;
  let isAtLimit;
  let items;
  let items1;
  let loading;
  let onPress;
  let str2;
  let text;
  let tmp6Result;
  const obj = react;
  const cResult = obj.c(16);
  ({ text, isAtLimit, onPress, loading } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === isAtLimit) {
    let tmp5;
    let tmp11;
    if (cResult[1] === tmp4.icon) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xs/bold", color: "text-brand", children: str2.toUpperCase() };
      const Text = tmp(5088).Text;
      const intl = tmp(1126).intl;
      str2 = intl.string(intl3.t.oW0eUd);
      const tmp13 = React3(Text, obj2);
      cResult[3] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] === tmp4.text) {
      let tmp14;
      let Button;
      if (cResult[5] === text) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === isAtLimit) {
        if (cResult[8] === loading) {
          let tmp17;
          if (cResult[9] === onPress) {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp4.container) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === tmp14) {
                let tmp21;
                if (cResult[14] === tmp17) {
                  tmp21 = cResult[15];
                }
                return tmp21;
              }
            }
          }
          const obj3 = { style: tmp4.container, children: items };
          items = [tmp5, tmp14, tmp17];
          const tmp24 = hasOwnProperty(View, obj3);
          cResult[11] = tmp4.container;
          cResult[12] = tmp5;
          cResult[13] = tmp14;
          cResult[14] = tmp17;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        }
      }
      const tmp18 = React3;
      if (isAtLimit) {
        Button = NitroUpsellButtonDefault;
      } else {
        Button = tmp(5379).Button;
      }
      const obj4 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
      intl2 = tmp(1126).intl;
      const tmp18Result = tmp18(Button, obj4);
      cResult[7] = isAtLimit;
      cResult[8] = loading;
      cResult[9] = onPress;
      cResult[10] = tmp18Result;
      tmp17 = tmp18Result;
    }
    const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp4.text, children: items1 };
    items1 = [tmp11, " \u00B7 ", text];
    const tmp16 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[4] = tmp4.text;
    cResult[5] = text;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  }
  if (isAtLimit) {
    const obj6 = { color: "text-feedback-warning", style: tmp4.icon };
    tmp6Result = tmp6(tmp(7571).WarningIcon, obj6);
  } else {
    const obj7 = { source: AssetRegistryDefault, style: tmp4.icon };
    const tmp8 = FastImageDefault;
    tmp6Result = tmp6(tmp8, obj7);
  }
  cResult[0] = isAtLimit;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6Result;
  tmp5 = tmp6Result;
}) : (function NitroLimitUpsellBar(isAtLimit) {
  let Button;
  let intl2;
  let items;
  let items1;
  let loading;
  let onPress;
  let str;
  let text;
  let tmp4Result;
  let tmp9;
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const tmp3 = View;
  if (isAtLimit) {
    const obj2 = { color: "text-feedback-warning", style: tmp.icon };
    tmp4Result = tmp4(WarningIcon.WarningIcon, obj2);
    tmp9 = tmp4;
  } else {
    const obj3 = { source: AssetRegistryDefault, style: tmp.icon };
    const tmp7 = FastImageDefault;
    tmp4Result = tmp4(tmp7, obj3);
    tmp9 = tmp4;
  }
  items = [tmp4Result, , ];
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: items1 };
  const Text = Text_Text.Text;
  const obj5 = { variant: "text-xs/bold", color: "text-brand", children: str.toUpperCase() };
  const Text2 = Text_Text.Text;
  const intl = intl3.intl;
  str = intl.string(intl3.t.oW0eUd);
  items1 = [tmp9(Text2, obj5), " \u00B7 ", text];
  items[1] = hasOwnProperty(Text, obj4);
  if (isAtLimit) {
    Button = NitroUpsellButtonDefault;
  } else {
    Button = tmp12(5379).Button;
  }
  const obj6 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
  intl2 = tmp12(1126).intl;
  items[2] = tmp9(Button, obj6);
  return hasOwnProperty(tmp3, obj);
});
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default tmp3;

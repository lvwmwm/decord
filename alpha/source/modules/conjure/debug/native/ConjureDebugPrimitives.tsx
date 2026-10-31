// Module ID: 13015
// Function ID: 13016
// Name: ConjureDebugPrimitives
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 3868, 13013, 5634, 2]
// Exports: DebugMeter, DebugNote, DebugSection, DebugSnapshotToolbar, DebugStatRow

// Module 13015 (ConjureDebugPrimitives)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 13013 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
({ ActivityIndicator: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { toolbar: obj2, toolbarStatus: { flex: 1 }, section: obj3, statRow: obj4, statRowHead: obj5, statLabel: { flexShrink: 1 }, statValue: { flexShrink: 1, textAlign: "right" }, statGroup: obj6, statValueGroup: { flexShrink: 1, justifyContent: "flex-end" }, meterTrack: obj7, meterFill: { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND }, meterFillCritical: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
({ height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugPrimitives.tsx");

export function DebugSnapshotToolbar(onRefresh) {
  let INVO50;
  let fetchState;
  let formatToPlainString;
  let generatedAt;
  let intl2;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let tmp4Result;
  ({ generatedAt, fetchState } = onRefresh);
  onRefresh = onRefresh.onRefresh;
  const tmp = closure_7();
  const obj = { style: tmp.toolbar, children: items };
  const obj2 = { style: tmp.toolbarStatus, children: tmp4Result };
  const tmp2 = metroRequire;
  if ("loading" === fetchState) {
    tmp4Result = tmp4(_false, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3868.ZVByPX) };
    const Text2 = Text_Text.Text;
    intl2 = intl4.intl;
    tmp4Result = tmp4(Text2, obj3);
  } else {
    tmp4Result = null;
    if (null != generatedAt) {
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(INVO50, obj6) };
      const Text = Text_Text.Text;
      const intl = intl4.intl;
      formatToPlainString = intl.formatToPlainString;
      obj6 = { time: obj5.formatObservedAt(generatedAt) };
      INVO50 = _modDef3868.INVO50;
      obj5 = ConjureDebugFormat;
      tmp4Result = tmp4(Text, obj4);
    }
  }
  items = [hasOwnProperty(React3, obj2), ];
  const obj7 = { variant: "secondary", size: "sm", text: intl3.string(_modDef3868.oKEgiu), onPress: onRefresh };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[1] = hasOwnProperty(Button, obj7);
  return tmp2(React3, obj);
}
export function DebugSection(arg0) {
  let children;
  let items;
  let title;
  ({ title, children } = arg0);
  const obj = { style: closure_7().section, children: items };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }), children];
  return metroRequire(React3, obj);
}
export function DebugNote(children) {
  return hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
}
export function DebugStatRow(arg0) {
  let critical;
  let hint;
  let icon;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let label;
  let state;
  let value;
  ({ hint, critical } = arg0);
  ({ label, value } = arg0);
  if (critical === undefined) {
    critical = false;
  }
  ({ icon, state } = arg0);
  const tmp = closure_7();
  const obj3 = { style: items, children: items1 };
  items = [, ];
  const obj = { style: tmp.statRow, children: items5 };
  const obj2 = { style: tmp.statRowHead, children: items2 };
  ({ statLabel: arr[0], statGroup: arr[1] } = tmp);
  items1 = [icon, hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label })];
  items2 = [metroRequire(React3, obj3), ];
  const obj4 = { style: items3, children: items4 };
  items3 = [, ];
  ({ statValueGroup: arr4[0], statGroup: arr4[1] } = tmp);
  items4 = [state, ];
  let str = "text-default";
  const Text = Text_Text.Text;
  if (critical) {
    str = "text-feedback-critical";
  }
  const obj5 = { variant: "text-sm/medium", color: str, style: tmp.statValue, children: value };
  items4[1] = hasOwnProperty(Text, obj5);
  items2[1] = metroRequire(React3, obj4);
  items5 = [metroRequire(React3, obj2), ];
  let tmp4Result = null;
  if (null != hint) {
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: hint };
    tmp4Result = tmp4(Text_Text.Text, obj6);
  }
  items5[1] = tmp4Result;
  return metroRequire(React3, obj);
}
export function DebugMeter(arg0) {
  let formatValue;
  let items;
  let items1;
  let items2;
  let label;
  let max;
  let used;
  ({ label, used, max, formatValue } = arg0);
  const tmp = closure_7();
  let num = 0;
  if (max > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(1, Math.max(0, used / max));
  }
  let meterFillCritical = num >= 0.9;
  const formatValueResult = formatValue(used);
  const combined = "" + formatValueResult + " / " + formatValue(max);
  const obj2 = { style: tmp.statRowHead, children: items };
  items = [, ];
  const obj = { style: tmp.statRow, accessibilityRole: "progressbar", accessibilityLabel: label, accessibilityValue: { text: combined }, children: items1 };
  const obj3 = { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) };
  items[0] = hasOwnProperty(React3, obj3);
  let str = "text-default";
  const Text = Text_Text.Text;
  if (meterFillCritical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text, { variant: "text-sm/medium", color: str, children: combined });
  items1 = [metroRequire(React3, obj2), ];
  const obj4 = { style: tmp.meterTrack, children: hasOwnProperty(React3, { style: items2 }) };
  items2 = [tmp.meterFill, , ];
  if (meterFillCritical) {
    meterFillCritical = tmp.meterFillCritical;
  }
  items2[1] = meterFillCritical;
  const obj5 = { width: `${100 * num}%` };
  items2[2] = obj5;
  items1[1] = hasOwnProperty(React3, obj4);
  return metroRequire(React3, obj);
}

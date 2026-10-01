// Module ID: 16414
// Function ID: 16415
// Name: VibegrationsDebugPrimitives
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 3715, 16411, 5281, 2]
// Exports: DebugMeter, DebugNote, DebugSection, DebugSnapshotToolbar, DebugStatRow

// Module 16414 (VibegrationsDebugPrimitives)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16411 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let obj = { toolbar: obj2, toolbarStatus: { flex: 1 }, section: obj3, statRow: obj4, statRowHead: obj5, statLabel: { flexShrink: 1 }, statValue: { flexShrink: 1, textAlign: "right" }, meterTrack: obj6, meterFill: obj7, meterFillCritical: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj6 = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj7 = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugPrimitives.tsx");

export const DebugSnapshotToolbar = function DebugSnapshotToolbar(onRefresh) {
  let fetchState;
  let formatToPlainString;
  let generatedAt;
  let intl2;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let tmp4Result;
  let v4NpaEk;
  ({ generatedAt, fetchState } = onRefresh);
  onRefresh = onRefresh.onRefresh;
  const tmp = closure_7();
  const obj = { style: tmp.toolbar, children: items };
  const obj2 = { style: tmp.toolbarStatus, children: tmp4Result };
  const tmp2 = metroRequire;
  if ("loading" === fetchState) {
    tmp4Result = tmp4(_false, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3715["K+FvtM"]) };
    const Text2 = Text_Text.Text;
    intl2 = intl4.intl;
    tmp4Result = tmp4(Text2, obj3);
  } else {
    tmp4Result = null;
    if (null != generatedAt) {
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(v4NpaEk, obj6) };
      const Text = Text_Text.Text;
      const intl = intl4.intl;
      formatToPlainString = intl.formatToPlainString;
      obj6 = { time: obj5.formatObservedAt(generatedAt) };
      v4NpaEk = _modDef3715["4NpaEk"];
      obj5 = VibegrationsDebugFormat;
      tmp4Result = tmp4(Text, obj4);
    }
  }
  items = [hasOwnProperty(React3, obj2), ];
  const obj7 = { variant: "secondary", size: "sm", text: intl3.string(_modDef3715.aw0IJm), onPress: onRefresh };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[1] = hasOwnProperty(Button, obj7);
  return tmp2(React3, obj);
};
export const DebugSection = function DebugSection(arg0) {
  let children;
  let items;
  let title;
  ({ title, children } = arg0);
  const obj = { style: closure_7().section, children: items };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }), children];
  return metroRequire(React3, obj);
};
export const DebugNote = function DebugNote(children) {
  return hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
};
export const DebugStatRow = function DebugStatRow(arg0) {
  let critical;
  let hint;
  let items;
  let items1;
  let label;
  let value;
  ({ hint, critical } = arg0);
  ({ label, value } = arg0);
  if (critical === undefined) {
    critical = false;
  }
  const tmp = closure_7();
  const obj2 = { style: tmp.statRowHead, children: items };
  items = [, ];
  const obj = { style: tmp.statRow, children: items1 };
  const obj3 = { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) };
  items[0] = hasOwnProperty(React3, obj3);
  let str = "text-default";
  const Text = Text_Text.Text;
  if (critical) {
    str = "text-feedback-critical";
  }
  const obj4 = { variant: "text-sm/medium", color: str, style: tmp.statValue, children: value };
  items[1] = hasOwnProperty(Text, obj4);
  items1 = [metroRequire(React3, obj2), ];
  let tmp4Result = null;
  if (null != hint) {
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: hint };
    tmp4Result = tmp4(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  return metroRequire(React3, obj);
};
export const DebugMeter = function DebugMeter(arg0) {
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
};

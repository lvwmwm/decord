// Module ID: 10656
// Function ID: 83076
// Name: styles
// Dependencies: [31, 27, 482, 33, 10657, 4130, 1557, 10658, 7571, 4126, 2]
// Exports: default

// Module 10656 (styles)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ ScrollView: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = require("CALL_ACTION_BAR_HEIGHT").CALL_ACTION_BAR_HEIGHT + 8;
const styles = _createForOfIteratorHelperLoose.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const result = require("sum").fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  let body;
  let bottom;
  let children;
  let title;
  let top;
  ({ title, body, children } = arg0);
  const tmp = styles();
  let obj = { style: tmp.scrollView };
  const items = [tmp.container, ];
  obj = { paddingTop: top + require(10658) /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = importDefault(1557)());
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj.alwaysBounceVertical = false;
  obj = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  const items1 = [callback(importDefault(7571), obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
  items1[2] = callback(require(4126) /* Text */.Text, obj2);
  items1[3] = callback(closure_4, { style: tmp.prompts, children });
  obj.children = items1;
  return callback2(closure_3, obj);
};
export const useStyles = styles;

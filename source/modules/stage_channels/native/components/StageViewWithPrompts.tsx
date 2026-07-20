// Module ID: 10610
// Function ID: 82787
// Name: styles
// Dependencies: [31, 27, 3821, 4139, 9534, 1348, 4194, 33, 8922, 566, 10196]
// Exports: default

// Module 10610 (styles)
import "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import { ThemeTypes } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import context from "context";

({ ScrollView: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = _isNativeReflectConstruct);
let closure_8 = require("_isNativeReflectConstruct").CALL_ACTION_BAR_HEIGHT + 8;
const styles = _isNativeReflectConstruct.createStyles({ scrollView: { flex: 1 }, container: { "Null": "center", "Null": "center" }, sparkle: { visible: 366, transparent: null }, title: {}, body: {}, prompts: { top: 1828717292, left: 16777787, right: 41641793, bottom: 911278336 } });
const result = context.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

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
  obj = { paddingTop: top + arg1(dependencyMap[7]).FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = importDefault(dependencyMap[6])());
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj.alwaysBounceVertical = false;
  obj = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  const items1 = [callback(importDefault(dependencyMap[8]), obj), callback(arg1(dependencyMap[9]).Text, { style: tmp.title, children: title }), callback(arg1(dependencyMap[9]).Text, { style: tmp.body, children: body }), callback(closure_4, { style: tmp.prompts, children })];
  obj.children = items1;
  return callback2(closure_3, obj);
};
export const useStyles = styles;

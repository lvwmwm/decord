// Module ID: 8956
// Function ID: 8957
// Name: StageViewWithPrompts
// Dependencies: [19, 17, 1085, 21, 8957, 4836, 1613, 8958, 7855, 4832, 2]
// Exports: default

// Module 8956 (StageViewWithPrompts)
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import StageSparkleDefault from "StageSparkle" /* 7855 */;
import StageChannelHeightHooks from "StageChannelHeightHooks" /* 8957 */;
import FocusedControls from "FocusedControls" /* 8958 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ ScrollView: c3, View: closure_4 } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = StageChannelHeightHooks.CALL_ACTION_BAR_HEIGHT + 8;
const styles = createStyles.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  let body;
  let bottom;
  let children;
  let items;
  let items1;
  let title;
  let top;
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: items, alwaysBounceVertical: false, children: items1 };
  items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  const obj2 = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = tmp2);
  items[1] = obj2;
  items1 = [, , , ];
  const obj3 = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  items1[0] = metroRequire(StageSparkleDefault, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
  items1[1] = metroRequire(Text_Text.Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
  items1[2] = metroRequire(Text_Text.Text, obj5);
  const obj6 = { style: tmp.prompts, children };
  items1[3] = metroRequire(React3, obj6);
  return metroImportDefault(_false, obj);
};
export const useStyles = styles;

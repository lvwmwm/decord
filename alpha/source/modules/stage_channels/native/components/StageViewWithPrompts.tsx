// Module ID: 11815
// Function ID: 11816
// Name: StageViewWithPrompts
// Dependencies: [19, 17, 21, 11816, 5009, 575, 1626, 11817, 11830, 5619, 2]
// Exports: default

// Module 11815 (StageViewWithPrompts)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import Text_Text from "Text/Text" /* 5619 */;
import StageChannelHeightHooks from "StageChannelHeightHooks" /* 11816 */;
import FocusedControls from "FocusedControls" /* 11817 */;
import MicrophoneSpotIllustration from "MicrophoneSpotIllustration" /* 11830 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = StageChannelHeightHooks.CALL_ACTION_BAR_HEIGHT + 8;
let obj = { scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, illustration: obj2, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } };
obj2 = { marginTop: nativeDefault.space.PX_48, marginBottom: nativeDefault.space.PX_16 };
const styles = createStyles.createStyles(obj);
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
  const obj2 = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_7 };
  ({ top, bottom } = tmp2);
  items[1] = obj2;
  items1 = [, , , ];
  const obj3 = { style: tmp.illustration, children: hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false }) };
  items1[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
  items1[2] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { style: tmp.prompts, children };
  items1[3] = hasOwnProperty(React3, obj6);
  return metroRequire(_false, obj);
};
export const useStyles = styles;

// Module ID: 18225
// Function ID: 18226
// Name: ServerPreviewPill
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 2]
// Exports: default

// Module 18225 (ServerPreviewPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { pill: obj2, text: { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 } };
obj2 = { paddingHorizontal: 10, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  let intl;
  const tmp = closure_4();
  ({ variant: "text-xs/bold", style: tmp.text, children: intl.string(intl2.t.KNhFgD) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.pill} accessibilityRole="text">{null}</View>;
};

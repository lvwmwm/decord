// Module ID: 12041
// Function ID: 12042
// Name: GuildPowerupsDisabledWarning
// Dependencies: [17, 21, 4836, 576, 8048, 4832, 2]
// Exports: default

// Module 12041 (GuildPowerupsDisabledWarning)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import WarningIcon2 from "WarningIcon" /* 8048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, text: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(text) {
  let items;
  text = text.text;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const WarningIcon = WarningIcon2.WarningIcon;
  items = [React3(WarningIcon, obj2), ];
  const obj3 = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: text };
  items[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
};

// Module ID: 16342
// Function ID: 16343
// Name: VibegrationsSelectedMention
// Dependencies: [19, 21, 4836, 576, 4832, 2]
// Exports: default

// Module 16342 (VibegrationsSelectedMention)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { chip: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 } };
({ color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectedMention.tsx");

export default function VibegrationsSelectedMention(arg0) {
  let label;
  let variant;
  ({ label, variant } = arg0);
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, children: label });
};

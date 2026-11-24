// Module ID: 18477
// Function ID: 18478
// Name: ConjureSelectedMention
// Dependencies: [19, 21, 4913, 575, 5504, 2]
// Exports: default

// Module 18477 (ConjureSelectedMention)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5504 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { chip: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 } };
({ color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureSelectedMention.tsx");

export default function ConjureSelectedMention(onPress) {
  let label;
  let variant;
  onPress = onPress.onPress;
  ({ label, variant } = onPress);
  const obj = { variant, style: closure_3().chip, onPress, accessibilityRole: "button", children: label };
  const Text = Text_Text.Text;
  return jsx(Text, obj);
};

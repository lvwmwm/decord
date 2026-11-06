// Module ID: 12834
// Function ID: 12835
// Name: ConjureSelectedMention
// Dependencies: [19, 21, 5170, 575, 5781, 2]
// Exports: default

// Module 12834 (ConjureSelectedMention)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5781 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
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

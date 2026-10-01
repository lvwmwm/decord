// Module ID: 10344
// Function ID: 10345
// Name: ActivityStatusText
// Dependencies: [19, 21, 4836, 4832, 2]
// Exports: default

// Module 10344 (ActivityStatusText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ text: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let children;
  let style;
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const merged = Object.assign(variant, Object.assign({ children: 0, style: 0, variant: 0 }));
  const items = [closure_3().text, style];
  closure_3();
  const Text = Text_Text.Text;
  const merged1 = Object.assign(merged);
  return <Text variant={str} color="text-muted" style={items} lineClamp={1}>{children}</Text>;
};

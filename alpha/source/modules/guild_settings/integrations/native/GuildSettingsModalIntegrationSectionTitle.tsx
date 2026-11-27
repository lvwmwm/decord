// Module ID: 20073
// Function ID: 20074
// Name: GuildSettingsModalIntegrationSectionTitle
// Dependencies: [19, 21, 5043, 575, 6115, 5634, 2]
// Exports: default

// Module 20073 (GuildSettingsModalIntegrationSectionTitle)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { title: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSectionTitle.tsx");

export default function GuildSettingsModalIntegrationSectionTitle(arg0) {
  let icon;
  let items;
  let title;
  let tmp;
  ({ icon, title } = arg0);
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, style: tmp.title, children: items };
  tmp = closure_5();
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { size: "md", color: nativeDefault.colors.TEXT_DEFAULT };
  items[0] = _false(icon, obj2);
  items[1] = _false(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", accessibilityRole: "header", children: title });
  return React3(Stack, obj);
};

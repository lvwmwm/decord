// Module ID: 9046
// Function ID: 9047
// Name: EditGuildEventStepHeader
// Dependencies: [19, 17, 21, 4836, 4832, 2]
// Exports: default

// Module 9046 (EditGuildEventStepHeader)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(subtitle) {
  let items;
  subtitle = subtitle.subtitle;
  const title = subtitle.title;
  const tmp = closure_5();
  const obj = { style: tmp.header, children: items };
  items = [, ];
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
  items[0] = _false(Text_Text.Text, obj2);
  let tmp4Result = null;
  const tmp2 = React3;
  const tmp3 = View;
  const tmp4 = _false;
  if (null != subtitle) {
    tmp4Result = null;
    if ("" !== subtitle) {
      const obj3 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
      tmp4Result = tmp4(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp4Result;
  return tmp2(tmp3, obj);
};

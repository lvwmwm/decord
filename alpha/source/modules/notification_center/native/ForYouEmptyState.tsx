// Module ID: 18464
// Function ID: 18465
// Name: ForYouEmptyState
// Dependencies: [19, 17, 21, 5009, 18465, 5619, 1114, 2]
// Exports: ForYouEmptyState

// Module 18464 (ForYouEmptyState)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import MailboxSpotIllustration from "MailboxSpotIllustration" /* 18465 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export function ForYouEmptyState(height) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  height = height.height;
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [tmp.container, { height }];
  items1 = [, , ];
  const obj2 = { style: tmp.image, children: _false(MailboxSpotIllustration.MailboxSpotIllustration, { scale: 0.75 }) };
  items1[0] = _false(View, obj2);
  const obj3 = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: intl.string(intl3.t.MwjTvn) };
  items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1[1] = _false(Text, obj3);
  const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl2.string(intl3.t.AKBgPy) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[2] = _false(Text2, obj4);
  return React3(View, obj);
}

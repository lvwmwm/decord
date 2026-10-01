// Module ID: 15403
// Function ID: 15404
// Name: UserSettingsDesignSystemTagGroup
// Dependencies: [19, 17, 21, 4836, 576, 4531, 5279, 4832, 5919, 13978, 2]
// Exports: default

// Module 15403 (UserSettingsDesignSystemTagGroup)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card_Card from "Card/Card" /* 5919 */;
import TagGroup from "TagGroup" /* 13978 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, narrow: { width: "60%" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let items = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items1 = [{ id: "forum", label: "Forum" }, { id: "news", label: "News" }, { id: "guides", label: "Guides" }];
let items2 = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items3 = [{ id: "community", label: "International community" }, { id: "events", label: "Events" }];
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTagGroup.tsx");

export default function UserSettingsDesignSystemTagGroup() {
  let Stack;
  let Stack2;
  let Stack3;
  let Stack4;
  let Stack5;
  let items4;
  let items5;
  let obj13;
  let obj16;
  let obj20;
  let obj3;
  let obj5;
  let obj9;
  const tmp = closure_7();
  const obj2 = { contentContainerStyle: tmp.container, children: metroRequire(Stack, obj3) };
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.ICON_BRAND);
  obj3 = { spacing: nativeDefault.space.PX_24, children: items };
  Stack = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Tag groups display read-only values. They do not select or remove tags." }), , , , ];
  const obj4 = { children: metroRequire(Stack2, obj5) };
  const Card = Card_Card.Card;
  obj5 = { spacing: nativeDefault.space.PX_12, children: items1 };
  Stack2 = Stack_Stack.Stack;
  items1 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Default layout" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Medium tags wrap onto new lines as space runs out." }), ];
  const obj6 = { label: "Default wrapping tags", items: items2 };
  items2 = [{ id: "community", label: "Community" }, , , , ];
  const obj7 = { id: "moderators", label: "Moderators", icon: { type: "role", color: token } };
  items2[1] = obj7;
  items2[2] = { id: "design", label: "Design" };
  items2[3] = { id: "events", label: "Events" };
  items2[4] = { id: "support", label: "Support" };
  items1[2] = hasOwnProperty(TagGroup.TagGroup, obj6);
  items[1] = hasOwnProperty(Card, obj4);
  const obj8 = { children: metroRequire(Stack3, obj9) };
  const Card2 = Card_Card.Card;
  obj9 = { spacing: nativeDefault.space.PX_12, children: items3 };
  Stack3 = Stack_Stack.Stack;
  items3 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Sizes" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Compare the extra-small and small densities with the default medium group above." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Extra small" }), , , ];
  const obj10 = { label: "Extra-small tags", size: "xs", items };
  items3[3] = hasOwnProperty(TagGroup.TagGroup, obj10);
  items3[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Small" });
  const obj11 = { label: "Small tags", size: "sm", items };
  items3[5] = hasOwnProperty(TagGroup.TagGroup, obj11);
  items[2] = hasOwnProperty(Card2, obj8);
  const obj12 = { children: metroRequire(Stack4, obj13) };
  const Card3 = Card_Card.Card;
  obj13 = { spacing: nativeDefault.space.PX_12, children: items4 };
  Stack4 = Stack_Stack.Stack;
  items4 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Filter treatment" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Filter tags have fully rounded corners but remain read-only." }), ];
  const obj14 = { label: "Filter-style tags", variant: "filter", items: items1 };
  items4[2] = hasOwnProperty(TagGroup.TagGroup, obj14);
  items[3] = hasOwnProperty(Card3, obj12);
  const obj15 = { children: metroRequire(Stack5, obj16) };
  const Card4 = Card_Card.Card;
  obj16 = { spacing: nativeDefault.space.PX_12, children: items5 };
  Stack5 = Stack_Stack.Stack;
  items5 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Inline layout" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Inline uses small tags by default and stays on one line. In narrow columns, labels truncate and the row can clip. Use default layout for longer collections." }), , , , , ];
  const obj17 = { label: "Inline tags", layout: "inline", items: items2 };
  items5[2] = hasOwnProperty(TagGroup.TagGroup, obj17);
  items5[3] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Medium inline tags (explicit size)" });
  const obj18 = { label: "Medium inline tags", layout: "inline", size: "md", items: items2 };
  items5[4] = hasOwnProperty(TagGroup.TagGroup, obj18);
  items5[5] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Narrow column with a long label" });
  const obj19 = { style: tmp.narrow, children: hasOwnProperty(TagGroup.TagGroup, obj20) };
  obj20 = { label: "Narrow inline tags", layout: "inline", items: items3 };
  items5[6] = hasOwnProperty(React3, obj19);
  items[4] = hasOwnProperty(Card4, obj15);
  return hasOwnProperty(_false, obj2);
};

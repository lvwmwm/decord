// Module ID: 13160
// Function ID: 13161
// Name: GameOrganizationLinkedServerCard
// Dependencies: [19, 17, 21, 6951, 5009, 575, 1410, 6971, 6022, 5619, 1114, 2]
// Exports: default

// Module 13160 (GameOrganizationLinkedServerCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import Card_Card from "Card/Card" /* 6971 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const XLARGE = GuildIcon.GuildIconSizes.XLARGE;
let createStyles = createStyles_mod;
let obj = { card: obj2, icon: obj3, info: { flex: 1 }, autoWidth: { width: "auto" }, dot: size, onlineDot: obj4, membersDot: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
size = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj5 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx");

export default function GameOrganizationLinkedServerCard(linkedGuild) {
  let Stack;
  let icon;
  let id;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let memberCount;
  let name;
  let obj11;
  let obj15;
  let obj4;
  let presenceCount;
  linkedGuild = linkedGuild.linkedGuild;
  ({ name, presenceCount, memberCount } = linkedGuild);
  ({ id, icon } = linkedGuild);
  const tmp = closure_7();
  const obj = AvatarUtilsDefault;
  const obj2 = { id, icon, size: GuildIcon.ImageSizes[XLARGE] };
  const guildIconURL = obj.getGuildIconURL(obj2);
  const obj3 = { border: "subtle", style: tmp.card, children: hasOwnProperty(Stack, obj4) };
  const Card = Card_Card.Card;
  obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [, ];
  const obj5 = { icon: guildIconURL, value: name, size: XLARGE, selected: false, style: tmp.icon };
  items[0] = React3(GuildIconDefault, obj5);
  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [React3(Text_Text.Text, { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp.autoWidth, children: items4 };
  const Stack3 = Stack_Stack.Stack;
  let tmp7Result = null;
  if (null != presenceCount) {
    const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: items3 };
    const Stack4 = tmp4(6022).Stack;
    const obj9 = { style: items2 };
    items2 = [, ];
    ({ dot: arr3[0], onlineDot: arr3[1] } = tmp);
    items3 = [React3(View, obj9), ];
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj11) };
    const Text = tmp4(5619).Text;
    intl = tmp4(1114).intl;
    obj11 = { membersOnline: presenceCount };
    items3[1] = React3(Text, obj10);
    tmp7Result = tmp7(Stack4, obj8);
  }
  items4 = [tmp7Result, ];
  let tmp7Result2 = null;
  if (null != memberCount) {
    const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: items6 };
    const Stack5 = tmp4(6022).Stack;
    const obj13 = { style: items5 };
    items5 = [, ];
    ({ dot: arr6[0], membersDot: arr6[1] } = tmp);
    items6 = [React3(View, obj13), ];
    const obj14 = { variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj15) };
    const Text2 = tmp4(5619).Text;
    intl2 = tmp4(1114).intl;
    obj15 = { count: memberCount };
    items6[1] = React3(Text2, obj14);
    tmp7Result2 = tmp7(Stack5, obj12);
  }
  items4[1] = tmp7Result2;
  items1[1] = hasOwnProperty(Stack3, obj7);
  items[1] = hasOwnProperty(Stack2, obj6);
  return React3(Card, obj3);
};

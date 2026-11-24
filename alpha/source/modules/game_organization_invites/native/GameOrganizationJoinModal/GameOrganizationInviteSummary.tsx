// Module ID: 12186
// Function ID: 12187
// Name: GameOrganizationInviteSummary
// Dependencies: [19, 21, 4917, 5989, 575, 11977, 5508, 1112, 2639, 7029, 2]
// Exports: default

// Module 12186 (GameOrganizationInviteSummary)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import _modDef2639 from "module_2639" /* 2639 */;
import Text_Text from "Text/Text" /* 5508 */;
import Stack_Stack from "Stack/Stack" /* 5989 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 11977 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationInviteSummary.tsx");

export default function GameOrganizationInviteSummary(invite) {
  let displayNoun;
  let format;
  let gptW7Y;
  let intl3;
  let items;
  let items1;
  let items2;
  let maxMembers;
  let memberCount;
  let obj10;
  let obj6;
  let organization;
  invite = invite.invite;
  ({ displayNoun, organization } = invite);
  ({ memberCount, maxMembers } = organization);
  const application = invite.application;
  let obj = { spacing: nativeDefault.space.PX_16, align: "center", children: items };
  const tmp = closure_5();
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { iconUrl: organization.iconUrl, size: 64, fallback: "guild" };
  items[0] = _false(GameOrganizationIconDefault, obj2);
  const obj3 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack2 = Stack_Stack.Stack;
  const Text = Text_Text.Text;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  let str = displayNoun;
  const prop = _modDef2639["jKi+kc"];
  if (displayNoun == null) {
    str = "other";
  }
  items1 = [, , ];
  const obj4 = { variant: "body-md/medium", color: "text-subtle", children: formatToPlainString(prop, { displayNoun: str }) };
  items1[0] = _false(Text, obj4);
  const obj5 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: format(gptW7Y, obj6) };
  const Heading = tmp3(5508).Heading;
  const intl2 = tmp3(1112).intl;
  format = intl2.format;
  gptW7Y = tmp5(2639).gptW7Y;
  if (displayNoun == null) {
    displayNoun = "other";
  }
  obj6 = {
    displayNoun,
    orgName: organization.name,
    gameName: application.name,
    orgNameHook(children, arg1) {
      const obj = { variant: "heading-xl/semibold", color: "text-strong", children };
      return closure_1_3(Text_Text.Text, obj, arg1);
    }
  };
  items1[1] = _false(Heading, obj5);
  let tmp2Result = null != memberCount && null != maxMembers;
  if (tmp2Result) {
    const obj7 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", justify: "center", children: items2 };
    const Stack3 = tmp3(5989).Stack;
    const obj8 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const GroupIcon = tmp3(7029).GroupIcon;
    items2 = [_false(GroupIcon, obj8), ];
    const obj9 = { variant: "heading-sm/medium", color: "text-subtle", children: intl3.formatToPlainString(_modDef2639.VuENGl, obj10) };
    const Text2 = tmp3(5508).Text;
    intl3 = tmp3(1112).intl;
    obj10 = { count: memberCount, max: maxMembers };
    items2[1] = _false(Text2, obj9);
    tmp2Result = tmp2(Stack3, obj7);
  }
  items1[2] = tmp2Result;
  items[1] = React3(Stack2, obj3);
  return React3(Stack, obj);
};

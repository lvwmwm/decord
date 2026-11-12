// Module ID: 13980
// Function ID: 13981
// Name: OutcomeStep
// Dependencies: [19, 12274, 13970, 21, 5243, 13967, 13981, 8142, 8144, 6274, 575, 13982, 5866, 13975, 5873, 2]
// Exports: OutcomeStep

// Module 13980 (OutcomeStep)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import ModalScreen2 from "ModalScreen" /* 8142 */;
import ModalContent2 from "ModalContent" /* 8144 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12274 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 13967 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13970 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 13981 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteAcceptStatus;
let closure_4 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export function OutcomeStep(code) {
  let cta;
  let isWaitingForGuild;
  let items;
  let items1;
  let items2;
  let obj9;
  let subtitle;
  let title;
  code = code.code;
  const merged = Object.assign(code, Object.assign({ code: 0 }));
  const tmp2 = closure_7();
  const tmp5 = useResolvedGameOrganizationInviteDefault(code);
  const tmp6 = useGameOrganizationJoinOutcomeDefault(code, merged, closure_4);
  ({ subtitle, cta } = tmp6);
  let tmp11Result = null != tmp5;
  ({ title, isWaitingForGuild } = tmp6);
  if (tmp11Result) {
    tmp11Result = merged.joinStatus === constants.JOINED;
  }
  const ModalScreen = ModalScreen2.ModalScreen;
  const ModalContent = ModalContent2.ModalContent;
  const obj = { spacing: nativeDefault.space.PX_48, children: items };
  const Stack = Stack_Stack.Stack;
  if (tmp11Result) {
    const obj2 = { character: merged.character, organizationIconUrl: tmp5.organization.iconUrl };
    tmp11Result = tmp11(tmp3(13982), obj2);
  }
  items = [tmp11Result, ];
  const obj3 = { spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack2 = tmp10(6274).Stack;
  items1 = [, ];
  const obj4 = { variant: "heading-xl/semibold", style: tmp2.text, accessibilityRole: "header", children: title };
  items1[0] = hasOwnProperty(Text_Text.Text, obj4);
  let tmp11Result2 = null != subtitle;
  if (tmp11Result2) {
    const obj5 = { variant: "body-md/normal", color: "text-muted", style: tmp2.text, children: subtitle };
    tmp11Result2 = tmp11(tmp10(5866).Text, obj5);
  }
  const obj6 = { children: items2 };
  items1[1] = tmp11Result2;
  const obj7 = { children: metroRequire(Stack, obj) };
  items[1] = metroRequire(Stack2, obj3);
  items2 = [hasOwnProperty(ModalContent, obj7), ];
  const obj8 = { children: hasOwnProperty(components_Button_Button.Button, obj9) };
  const ModalFooter = tmp10(13975).ModalFooter;
  obj9 = { text: cta.text, size: "lg", onPress: cta.action, disabled: isWaitingForGuild };
  items2[1] = hasOwnProperty(ModalFooter, obj8);
  return metroRequire(ModalScreen, obj6);
}

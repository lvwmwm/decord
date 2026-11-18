// Module ID: 12201
// Function ID: 12202
// Name: GameOrganizationJoinOutcomeModal
// Dependencies: [19, 11856, 21, 4823, 6337, 12192, 12202, 7722, 7724, 5837, 575, 12203, 5414, 12204, 12198, 5421, 7003, 7006, 12003, 2]
// Exports: default

// Module 12201 (GameOrganizationJoinOutcomeModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5414 */;
import components_Button_Button from "components/Button/Button" /* 5421 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import NavigatorHeader from "NavigatorHeader" /* 7006 */;
import ModalScreen2 from "ModalScreen" /* 7722 */;
import ModalContent2 from "ModalContent" /* 7724 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12192 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12202 */;
import GameOrganizationJoinSuccessGraphicDefault from "GameOrganizationJoinSuccessGraphic" /* 12203 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
function closeGameOrganizationJoinOutcomeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_3);
}
function GameOrganizationJoinOutcomeScreen(arg0) {
  let code;
  let cta;
  let isWaitingForGuild;
  let items;
  let items1;
  let items2;
  let obj17;
  let result;
  let rows;
  ({ code, result } = arg0);
  const tmp = closure_7();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  ({ rows, cta, isWaitingForGuild } = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal));
  let tmp8Result = null;
  useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal);
  if (null != tmp4) {
    const ModalScreen = ModalScreen2.ModalScreen;
    const ModalContent = ModalContent2.ModalContent;
    const obj = { spacing: nativeDefault.space.PX_48, children: items };
    const Stack = Stack_Stack.Stack;
    const obj2 = { character: result.character, organizationIconUrl: tmp4.organization.iconUrl };
    items = [React3(GameOrganizationJoinSuccessGraphicDefault, obj2), ];
    const obj3 = { spacing: nativeDefault.space.PX_24, children: items1 };
    const Stack2 = Stack_Stack.Stack;
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp6 };
    items1 = [React3(Text_Text.Text, obj4), ];
    let tmp10Result = null;
    if (null != rows) {
      const obj5 = { rows };
      tmp10Result = tmp10(tmp2(12204), obj5);
    }
    const obj6 = { children: items2 };
    items1[1] = tmp10Result;
    const obj7 = { children: hasOwnProperty(Stack, obj) };
    items[1] = hasOwnProperty(Stack2, obj3);
    items2 = [React3(ModalContent, obj7), ];
    const obj8 = { children: React3(components_Button_Button.Button, obj17) };
    const ModalFooter = tmp9(12198).ModalFooter;
    obj17 = { text: null, size: "lg", onPress: null, disabled: isWaitingForGuild, loading: isWaitingForGuild };
    ({ text: obj9.text, action: obj9.onPress } = cta);
    items2[1] = React3(ModalFooter, obj8);
    tmp8Result = tmp8(ModalScreen, obj6);
  }
  return tmp8Result;
}
let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const constants = { OUTCOME: "OUTCOME" };
let closure_7 = createStyles.createStyles({ text: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx");

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  let obj = code(7003);
  const items = [code, result];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj3;
    let obj = {};
    const OUTCOME = constants.OUTCOME;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinOutcomeModal),
      headerTitle() {
        return null;
      },
      render() {
        const obj = { code, result };
        return closure_2_4(GameOrganizationJoinOutcomeScreen, obj);
      }
    };
    obj[OUTCOME] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj2 = { screens: navigatorScreens, initialRouteName: constants.OUTCOME, gradientColor: "purple" };
  return closure_4(code(12003).Modal, obj2);
};

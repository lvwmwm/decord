// Module ID: 12906
// Function ID: 12907
// Name: GameOrganizationJoinOutcomeModal
// Dependencies: [19, 12573, 21, 5310, 6833, 12896, 12907, 8219, 8221, 6335, 575, 12908, 5923, 12903, 5930, 7500, 7503, 12718, 2]
// Exports: default

// Module 12906 (GameOrganizationJoinOutcomeModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5923 */;
import components_Button_Button from "components/Button/Button" /* 5930 */;
import Stack_Stack from "Stack/Stack" /* 6335 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import NavigatorHeader from "NavigatorHeader" /* 7503 */;
import ModalScreen2 from "ModalScreen" /* 8219 */;
import ModalContent2 from "ModalContent" /* 8221 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12896 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12907 */;
import GameOrganizationJoinSuccessGraphicDefault from "GameOrganizationJoinSuccessGraphic" /* 12908 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
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
  let items;
  let items1;
  let items2;
  let obj17;
  let result;
  let subtitle;
  ({ code, result } = arg0);
  const tmp = closure_7();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  ({ subtitle, cta } = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal));
  let tmp9Result = null;
  useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal);
  if (null != tmp4) {
    const ModalScreen = ModalScreen2.ModalScreen;
    const ModalContent = ModalContent2.ModalContent;
    const obj = { spacing: nativeDefault.space.PX_48, children: items };
    const Stack = Stack_Stack.Stack;
    const obj2 = { character: result.character, organizationIconUrl: tmp4.organization.iconUrl };
    items = [React3(GameOrganizationJoinSuccessGraphicDefault, obj2), ];
    const obj3 = { spacing: nativeDefault.space.PX_8, children: items1 };
    const Stack2 = Stack_Stack.Stack;
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp6 };
    items1 = [React3(Text_Text.Text, obj4), ];
    let tmp11Result = null != subtitle;
    if (tmp11Result) {
      const obj5 = { variant: "body-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
      tmp11Result = tmp11(tmp10(5923).Text, obj5);
    }
    const obj6 = { children: items2 };
    items1[1] = tmp11Result;
    const obj7 = { children: hasOwnProperty(Stack, obj) };
    items[1] = hasOwnProperty(Stack2, obj3);
    items2 = [React3(ModalContent, obj7), ];
    const obj8 = { children: React3(components_Button_Button.Button, obj17) };
    const ModalFooter = tmp10(12903).ModalFooter;
    obj17 = { text: null, size: "lg", onPress: null, disabled: tmp7 };
    ({ text: obj9.text, action: obj9.onPress } = cta);
    items2[1] = React3(ModalFooter, obj8);
    tmp9Result = tmp9(ModalScreen, obj6);
  }
  return tmp9Result;
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
  let obj = code(7500);
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
  return closure_4(code(12718).Modal, obj2);
};

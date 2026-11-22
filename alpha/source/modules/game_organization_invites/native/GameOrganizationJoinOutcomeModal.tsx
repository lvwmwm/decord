// Module ID: 12252
// Function ID: 12253
// Name: GameOrganizationJoinOutcomeModal
// Dependencies: [19, 17, 11896, 21, 4913, 6429, 12253, 7811, 7813, 5929, 575, 12254, 5504, 12258, 12249, 5511, 7092, 7095, 12043, 2]
// Exports: default

// Module 12252 (GameOrganizationJoinOutcomeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5504 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import Stack_Stack from "Stack/Stack" /* 5929 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import NavigatorHeader from "NavigatorHeader" /* 7095 */;
import ModalScreen2 from "ModalScreen" /* 7811 */;
import ModalContent2 from "ModalContent" /* 7813 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12253 */;
import HighFiveSpotIllustration from "HighFiveSpotIllustration" /* 12254 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
let tmp2;
const GameOrganizationJoinOutcomeChecklistDefault = tmp2(12258);
function closeGameOrganizationJoinOutcomeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_4);
}
function GameOrganizationJoinOutcomeScreen(arg0) {
  let code;
  let cta;
  let isWaitingForGuild;
  let items;
  let items1;
  let items2;
  let obj9;
  let result;
  let rows;
  ({ code, result } = arg0);
  const tmp = closure_8();
  const tmp4 = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal);
  ({ rows, cta, isWaitingForGuild } = tmp4);
  const title = tmp4.title;
  const ModalScreen = ModalScreen2.ModalScreen;
  const ModalContent = ModalContent2.ModalContent;
  const obj = { spacing: nativeDefault.space.PX_48, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { style: tmp.graphic, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(HighFiveSpotIllustration.HighFiveSpotIllustration, { height: 140 }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { spacing: nativeDefault.space.PX_24, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, ];
  const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: title };
  items1[0] = hasOwnProperty(Text_Text.Text, obj4);
  let tmp7Result = null;
  if (null != rows) {
    const obj5 = { rows };
    tmp7Result = tmp7(GameOrganizationJoinOutcomeChecklistDefault, obj5);
  }
  const obj6 = { children: items2 };
  items1[1] = tmp7Result;
  const obj7 = { children: metroRequire(Stack, obj) };
  items[1] = metroRequire(Stack2, obj3);
  items2 = [hasOwnProperty(ModalContent, obj7), ];
  const obj8 = { children: hasOwnProperty(components_Button_Button.Button, obj9) };
  const ModalFooter = tmp6(12249).ModalFooter;
  obj9 = { text: cta.text, size: "lg", onPress: cta.action, disabled: isWaitingForGuild, loading: isWaitingForGuild };
  items2[1] = hasOwnProperty(ModalFooter, obj8);
  return metroRequire(ModalScreen, obj6);
}
const View = react_native.View;
let closure_4 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const constants = { OUTCOME: "OUTCOME" };
let closure_8 = createStyles.createStyles({ graphic: { alignItems: "center" }, text: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx");

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  let obj = code(7092);
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
        return closure_2_5(GameOrganizationJoinOutcomeScreen, obj);
      }
    };
    obj[OUTCOME] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj2 = { screens: navigatorScreens, initialRouteName: constants.OUTCOME, gradientColor: "purple" };
  return closure_5(code(12043).Modal, obj2);
};

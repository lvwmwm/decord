// Module ID: 13477
// Function ID: 13478
// Name: GameOrganizationJoinModal
// Dependencies: [19, 13478, 21, 1627, 7264, 5746, 7097, 13479, 13485, 13489, 13490, 1113, 2]
// Exports: default

// Module 13477 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import NavigatorConstants from "NavigatorConstants" /* 5746 */;
import NavigatorHeader from "NavigatorHeader" /* 7097 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13478 */;
import size from "module_2" /* 2 */;

const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
const closeGameOrganizationJoinModal = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = Fragment.jsx;
let items = [, , ];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  let top;
  top = top(1627)().top;
  let obj = code(7264);
  items = [code, top];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj10;
    let obj5;
    let obj7;
    let obj8;
    let obj = { fullscreen: true, headerStyle: { height: NavigatorConstants.NAV_BAR_HEIGHT + top } };
    const obj3 = {};
    const VIEW = GameOrganizationJoinScenes.VIEW;
    const obj4 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj5.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render() {
        return jsx(code(dependencyMap[7]).ViewStep, { code });
      }
    };
    ({ height: NavigatorConstants.NAV_BAR_HEIGHT + top });
    let merged = Object.assign(obj);
    obj3[VIEW] = obj4;
    obj5 = NavigatorHeader;
    const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
    const obj6 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj7.getHeaderBackButton(),
      headerRight: obj8.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render(character) {
        const obj = { code, character };
        character = undefined;
        const AcceptStep = code(dependencyMap[8]).AcceptStep;
        const tmp = jsx;
        if (character != null) {
          character = character.character;
        }
        return tmp(AcceptStep, obj);
      }
    };
    const merged1 = Object.assign(obj);
    obj7 = NavigatorHeader;
    obj3[ACCEPT] = obj6;
    obj8 = NavigatorHeader;
    const OUTCOME = GameOrganizationJoinScenes.OUTCOME;
    const obj9 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj10.getHeaderCloseButton(closeGameOrganizationJoinModal),
      gestureEnabled: false,
      render(arg0) {
        const OutcomeStep = code(dependencyMap[9]).OutcomeStep;
        const merged = Object.assign(arg0);
        return <OutcomeStep code={code} />;
      }
    };
    const merged2 = Object.assign(obj);
    obj3[OUTCOME] = obj9;
    obj10 = NavigatorHeader;
    return obj3;
  }, items);
  const StepModal = code(13490).StepModal;
  const intl = code(1113).intl;
  return <StepModal screens={navigatorScreens} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(code(1113).t["13/7kX"])} />;
};

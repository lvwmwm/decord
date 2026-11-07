// Module ID: 13444
// Function ID: 13445
// Name: GameOrganizationJoinModal
// Dependencies: [19, 13445, 21, 1627, 7231, 5714, 7064, 13446, 13452, 13456, 13457, 1113, 2]
// Exports: default

// Module 13444 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import NavigatorConstants from "NavigatorConstants" /* 5714 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13445 */;
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
  let obj = code(7231);
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
  const StepModal = code(13457).StepModal;
  const intl = code(1113).intl;
  return <StepModal screens={navigatorScreens} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(code(1113).t["13/7kX"])} />;
};

// Module ID: 13200
// Function ID: 13201
// Name: GameOrganizationJoinModal
// Dependencies: [19, 13201, 21, 7169, 6998, 13202, 13209, 13212, 13213, 1113, 2]
// Exports: default

// Module 13200 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13201 */;
import size from "module_2" /* 2 */;

const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
const closeGameOrganizationJoinModal = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = Fragment.jsx;
let items = [, , ];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  let obj = code(7169);
  items = [code];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    let obj = {};
    const VIEW = GameOrganizationJoinScenes.VIEW;
    const obj2 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render() {
        return jsx(code(dependencyMap[5]).ViewStep, { code });
      }
    };
    obj[VIEW] = obj2;
    obj3 = NavigatorHeader;
    const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
    const obj4 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj5.getHeaderBackButton(),
      headerRight: obj6.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render(character) {
        const obj = { code, character };
        character = undefined;
        const AcceptStep = code(dependencyMap[6]).AcceptStep;
        const tmp = jsx;
        if (character != null) {
          character = character.character;
        }
        return tmp(AcceptStep, obj);
      }
    };
    obj5 = NavigatorHeader;
    obj[ACCEPT] = obj4;
    obj6 = NavigatorHeader;
    const OUTCOME = GameOrganizationJoinScenes.OUTCOME;
    const obj7 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj8.getHeaderCloseButton(closeGameOrganizationJoinModal),
      gestureEnabled: false,
      render(arg0) {
        const OutcomeStep = code(dependencyMap[7]).OutcomeStep;
        const merged = Object.assign(arg0);
        return <OutcomeStep code={code} />;
      }
    };
    obj[OUTCOME] = obj7;
    obj8 = NavigatorHeader;
    return obj;
  }, items);
  const StepModal = code(13213).StepModal;
  const intl = code(1113).intl;
  return <StepModal screens={navigatorScreens} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(code(1113).t["13/7kX"])} />;
};

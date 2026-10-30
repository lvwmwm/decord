// Module ID: 13150
// Function ID: 13151
// Name: GameOrganizationJoinModal
// Dependencies: [19, 13151, 21, 7163, 6992, 13152, 13159, 13162, 13163, 1114, 2]
// Exports: default

// Module 13150 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13151 */;
import size from "module_2" /* 2 */;

const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
const closeGameOrganizationJoinModal = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = Fragment.jsx;
let items = [, , ];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  let obj = code(7163);
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
  const StepModal = code(13163).StepModal;
  const intl = code(1114).intl;
  return <StepModal screens={navigatorScreens} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(code(1114).t["13/7kX"])} />;
};

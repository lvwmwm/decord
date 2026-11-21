// Module ID: 12236
// Function ID: 12237
// Name: GameOrganizationJoinModal
// Dependencies: [19, 11896, 12237, 21, 7092, 7095, 12238, 12243, 12043, 12269, 1112, 12235, 2]
// Exports: default

// Module 12236 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 7095 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12235 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12237 */;
import size from "module_2" /* 2 */;

function SingleCharacterJoinModal(code) {
  code = code.code;
  let obj = code(7092);
  items = [code];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj3;
    const obj = {};
    const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinModal),
      headerTitle() {
        return null;
      },
      render() {
        return jsx(code(dependencyMap[7]).AcceptStep, { code });
      }
    };
    obj[ACCEPT] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  return jsx(code(12043).Modal, { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.ACCEPT, gradientColor: "purple" });
}
function MultiCharacterJoinModal(code) {
  code = code.code;
  let obj = code(7092);
  items = [code];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj3;
    let obj5;
    let obj = {};
    const VIEW = GameOrganizationJoinScenes.VIEW;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render() {
        return jsx(code(dependencyMap[6]).ViewStep, { code });
      }
    };
    obj[VIEW] = obj2;
    obj3 = NavigatorHeader;
    const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      render(character) {
        const obj = { code, character };
        character = undefined;
        const AcceptStep = code(dependencyMap[7]).AcceptStep;
        const tmp = jsx;
        if (character != null) {
          character = character.character;
        }
        return tmp(AcceptStep, obj);
      }
    };
    obj[ACCEPT] = obj4;
    obj5 = NavigatorHeader;
    return obj;
  }, items);
  const StepModal = code(12269).StepModal;
  const intl = code(1112).intl;
  return <StepModal screens={navigatorScreens} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(code(1112).t["13/7kX"])} gradientColor="purple" />;
}
const constants = GameOrganizationInviteConstants.GameOrganizationCharacterMode;
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
const closeGameOrganizationJoinModal = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = Fragment.jsx;
let items = [, ];
({ VIEW: arr[0], ACCEPT: arr[1] } = GameOrganizationJoinScenes);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  const tmp = useResolvedGameOrganizationInviteDefault(code);
  let tmp2 = null;
  if (null != tmp) {
    let tmp6;
    if (tmp.characterMode === constants.MULTI) {
      tmp6 = <MultiCharacterJoinModal code={code} />;
    } else {
      tmp6 = <SingleCharacterJoinModal code={code} />;
    }
    tmp2 = tmp6;
  }
  return tmp2;
};

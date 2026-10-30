// Module ID: 13147
// Function ID: 13148
// Name: openGameOrganizationJoinModal
// Dependencies: [11326, 11327, 13148, 6738, 13150, 1995, 2]
// Exports: default

// Module 13147 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13148 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11326 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11327 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ GameOrganizationCharacterMode: closure_4, GameOrganizationInviteStates: hasOwnProperty } = GameOrganizationInviteConstants);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const invite = GameOrganizationInviteStore.getInvite(code);
  let state;
  if (invite != null) {
    state = invite.state;
  }
  const tmp3 = state === hasOwnProperty.RESOLVED && invite.characterMode === constants.MULTI;
  if (tmp3) {
    const useGameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch2.useGameOrganizationCharacterEligibilityFetch;
    const items = [code];
    const many = useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
  }
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(13150, dependencyMap.paths), obj2);
};

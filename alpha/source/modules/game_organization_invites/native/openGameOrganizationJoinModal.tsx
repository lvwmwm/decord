// Module ID: 13333
// Function ID: 13334
// Name: openGameOrganizationJoinModal
// Dependencies: [11500, 11501, 13334, 6864, 13336, 2123, 2]
// Exports: default

// Module 13333 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13334 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11500 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11501 */;
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
  obj.pushLazy(asyncRequire(13336, dependencyMap.paths), obj2);
};

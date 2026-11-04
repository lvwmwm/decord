// Module ID: 13197
// Function ID: 13198
// Name: openGameOrganizationJoinModal
// Dependencies: [11363, 11364, 13198, 6744, 13200, 1994, 2]
// Exports: default

// Module 13197 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13198 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11363 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11364 */;
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
  obj.pushLazy(asyncRequire(13200, dependencyMap.paths), obj2);
};

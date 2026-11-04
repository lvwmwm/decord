// Module ID: 13417
// Function ID: 13418
// Name: openGameOrganizationJoinModal
// Dependencies: [11551, 11552, 13418, 6879, 13420, 2123, 2]
// Exports: default

// Module 13417 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13418 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11551 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11552 */;
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
  obj.pushLazy(asyncRequire(13420, dependencyMap.paths), obj2);
};

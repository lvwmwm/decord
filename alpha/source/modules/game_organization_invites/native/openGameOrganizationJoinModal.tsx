// Module ID: 13416
// Function ID: 13417
// Name: openGameOrganizationJoinModal
// Dependencies: [11550, 11551, 13417, 6879, 13419, 2123, 2]
// Exports: default

// Module 13416 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13417 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11550 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11551 */;
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
  obj.pushLazy(asyncRequire(13419, dependencyMap.paths), obj2);
};

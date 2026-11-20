// Module ID: 12113
// Function ID: 12114
// Name: useResolvedGameOrganizationInvite
// Dependencies: [11775, 11776, 504, 2]
// Exports: default

// Module 12113 (useResolvedGameOrganizationInvite)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11776 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11775 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const result = size.fileFinishedImporting("modules/game_organization_invites/useResolvedGameOrganizationInvite.tsx");

export default function useResolvedGameOrganizationInvite(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GameOrganizationInviteStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(closure_0);
    let state;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  });
};

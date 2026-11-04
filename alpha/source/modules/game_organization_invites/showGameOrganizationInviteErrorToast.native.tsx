// Module ID: 11856
// Function ID: 11857
// Name: showGameOrganizationInviteErrorToast
// Dependencies: [5846, 1113, 2]
// Exports: default

// Module 11856 (showGameOrganizationInviteErrorToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/showGameOrganizationInviteErrorToast.native.tsx");

export default function showGameOrganizationInviteErrorToast() {
  let intl;
  const obj = { text: intl.string(intl2.t.fEptJP) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GAME_ORGANIZATION_INVITE_SEND_ERROR", obj);
};

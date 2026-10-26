// Module ID: 11326
// Function ID: 11327
// Name: showGameOrganizationInviteErrorToast
// Dependencies: [5663, 1128, 2]
// Exports: default

// Module 11326 (showGameOrganizationInviteErrorToast)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/showGameOrganizationInviteErrorToast.tsx");

export default function showGameOrganizationInviteErrorToast() {
  let intl;
  const obj = { text: intl.string(intl2.t.fEptJP) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GAME_ORGANIZATION_INVITE_SEND_ERROR", obj);
};

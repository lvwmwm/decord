// Module ID: 11330
// Function ID: 11331
// Name: showGameOrganizationInviteErrorToast
// Dependencies: [5664, 1125, 2]
// Exports: default

// Module 11330 (showGameOrganizationInviteErrorToast)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
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

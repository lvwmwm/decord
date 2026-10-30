// Module ID: 11624
// Function ID: 11625
// Name: showGameOrganizationInviteErrorToast
// Dependencies: [5707, 1114, 2]
// Exports: default

// Module 11624 (showGameOrganizationInviteErrorToast)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
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

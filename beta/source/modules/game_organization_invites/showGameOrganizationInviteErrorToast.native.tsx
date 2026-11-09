// Module ID: 11821
// Function ID: 11822
// Name: showGameOrganizationInviteErrorToast
// Dependencies: [5837, 1113, 2]
// Exports: default

// Module 11821 (showGameOrganizationInviteErrorToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
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

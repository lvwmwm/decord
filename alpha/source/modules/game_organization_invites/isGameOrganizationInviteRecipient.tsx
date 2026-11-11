// Module ID: 12440
// Function ID: 12441
// Name: isGameOrganizationInviteRecipient
// Dependencies: [2]
// Exports: default

// Module 12440 (isGameOrganizationInviteRecipient)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/isGameOrganizationInviteRecipient.tsx");

export default function isGameOrganizationInviteRecipient(id, arg1, isBlockedOrIgnored) {
  const tmp = null != id && id.id !== arg1 && !id.bot && !id.isSystemUser() && !isBlockedOrIgnored.isBlockedOrIgnored(id.id);
  return tmp;
};

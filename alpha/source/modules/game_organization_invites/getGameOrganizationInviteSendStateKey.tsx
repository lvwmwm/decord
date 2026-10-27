// Module ID: 11317
// Function ID: 11318
// Name: getGameOrganizationInviteSendStateKey
// Dependencies: [2]
// Exports: default, toLinkedGameOrganization

// Module 11317 (getGameOrganizationInviteSendStateKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx");

export default function getGameOrganizationInviteSendStateKey(applicationId) {
  return "game-organization-invite:" + applicationId.applicationId + ":" + applicationId.gameOrganizationId;
};
export const toLinkedGameOrganization = function toLinkedGameOrganization(organization) {
  return { applicationId: organization.applicationId, gameOrganizationId: organization.id };
};

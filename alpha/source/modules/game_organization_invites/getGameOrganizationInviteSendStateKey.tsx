// Module ID: 11320
// Function ID: 11321
// Name: getGameOrganizationInviteSendStateKey
// Dependencies: [2]
// Exports: default, toLinkedGameOrganization

// Module 11320 (getGameOrganizationInviteSendStateKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx");

export default function getGameOrganizationInviteSendStateKey(applicationId) {
  return "game-organization-invite:" + applicationId.applicationId + ":" + applicationId.gameOrganizationId;
};
export const toLinkedGameOrganization = function toLinkedGameOrganization(organization) {
  return { applicationId: organization.applicationId, gameOrganizationId: organization.id };
};

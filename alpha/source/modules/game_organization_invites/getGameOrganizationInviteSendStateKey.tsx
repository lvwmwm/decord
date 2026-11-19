// Module ID: 12023
// Function ID: 12024
// Name: getGameOrganizationInviteSendStateKey
// Dependencies: [2]
// Exports: default, toLinkedGameOrganization

// Module 12023 (getGameOrganizationInviteSendStateKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx");

export default function getGameOrganizationInviteSendStateKey(applicationId) {
  return "game-organization-invite:" + applicationId.applicationId + ":" + applicationId.gameOrganizationId;
};
export function toLinkedGameOrganization(organization) {
  return { applicationId: organization.applicationId, gameOrganizationId: organization.id };
}

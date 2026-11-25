// Module ID: 12056
// Function ID: 12057
// Name: LinkedGameOrgInvitesExperiment
// Dependencies: [1450, 2]
// Exports: getLinkedGameOrgInvitesEnabled, useLinkedGameOrgInvitesEnabled

// Module 12056 (LinkedGameOrgInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-09-linked-game-org-invites-dev", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/LinkedGameOrgInvitesExperiment.tsx");

export const LinkedGameOrgInvitesExperiment = apexExperiment;
export function useLinkedGameOrgInvitesEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
}
export function getLinkedGameOrgInvitesEnabled(MessageCodedLinkManager) {
  const obj = { location: MessageCodedLinkManager };
  return apexExperiment.getConfig(obj).enabled;
}

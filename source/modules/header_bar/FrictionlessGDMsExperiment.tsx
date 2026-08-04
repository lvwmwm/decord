// Module ID: 12923
// Function ID: 12924
// Name: getFrictionlessGDMsEnabled
// Dependencies: [1349, 2]
// Exports: getFrictionlessGDMsEnabled

// Module 12923 (getFrictionlessGDMsEnabled)
const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-05-frictionless-gdms", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/header_bar/FrictionlessGDMsExperiment.tsx");

export default tmp2;
export function getFrictionlessGDMsEnabled(PrivateChannelRecipientsInviteStore) {
  return false;
}

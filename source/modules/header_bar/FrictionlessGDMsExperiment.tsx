// Module ID: 12731
// Function ID: 99142
// Name: getFrictionlessGDMsEnabled
// Dependencies: [1325, 2]
// Exports: getFrictionlessGDMsEnabled

// Module 12731 (getFrictionlessGDMsEnabled)
const obj = { kind: "user", name: "2026-05-frictionless-gdms", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/header_bar/FrictionlessGDMsExperiment.tsx");

export default tmp2;
export function getFrictionlessGDMsEnabled(PrivateChannelRecipientsInviteStore) {
  return false;
}

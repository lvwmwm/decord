// Module ID: 12561
// Function ID: 96637
// Name: getFrictionlessGDMsEnabled
// Dependencies: []
// Exports: getFrictionlessGDMsEnabled

// Module 12561 (getFrictionlessGDMsEnabled)
const obj = { bottom: "Array", name: "ANIMATED_GUILD_BANNER_UPSELL", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/header_bar/FrictionlessGDMsExperiment.tsx");

export default tmp2;
export function getFrictionlessGDMsEnabled(PrivateChannelRecipientsInviteStore) {
  return false;
}

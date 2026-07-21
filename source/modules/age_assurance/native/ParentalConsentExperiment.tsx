// Module ID: 16012
// Function ID: 122895
// Name: isParentalConsentCheckEnabled
// Dependencies: []
// Exports: isParentalConsentCheckEnabled

// Module 16012 (isParentalConsentCheckEnabled)
const _module = require(dependencyMap[0]);
const obj = { margin: "RTC_CONNECTION_LOSS_RATE", paddingHorizontal: "handleJoinThreadVoice", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/native/ParentalConsentExperiment.tsx");

export const isParentalConsentCheckEnabled = function isParentalConsentCheckEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};

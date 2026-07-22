// Module ID: 16384
// Function ID: 126498
// Name: shouldClearChannelNotificationsOnAppForeground
// Dependencies: []
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 16384 (shouldClearChannelNotificationsOnAppForeground)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: "04c46d63a9ed0af066e3c9c84ab9d498", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};

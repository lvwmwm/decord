// Module ID: 16376
// Function ID: 126456
// Name: shouldClearChannelNotificationsOnAppForeground
// Dependencies: []
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 16376 (shouldClearChannelNotificationsOnAppForeground)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};

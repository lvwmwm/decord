// Module ID: 10239
// Function ID: 79128
// Name: useCanExpandInAppNotification
// Dependencies: []
// Exports: useCanExpandInAppNotification

// Module 10239 (useCanExpandInAppNotification)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: -5, 0: -16, defaultConfig: { url: null, body: null }, variations: { [1]: { url: null, body: null }, [2]: { url: true, body: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandExperiment.tsx");

export const useCanExpandInAppNotification = function useCanExpandInAppNotification(InAppNotificationContainer) {
  return closure_0.useConfig({ location: InAppNotificationContainer });
};

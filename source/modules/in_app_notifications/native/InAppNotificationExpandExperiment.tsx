// Module ID: 10239
// Function ID: 79139
// Name: useCanExpandInAppNotification
// Dependencies: []
// Exports: useCanExpandInAppNotification

// Module 10239 (useCanExpandInAppNotification)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { "Null": null, oldFormErrors: null }, variations: { [1]: { "Null": null, oldFormErrors: null }, [2]: { "Null": null, oldFormErrors: null } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandExperiment.tsx");

export const useCanExpandInAppNotification = function useCanExpandInAppNotification(InAppNotificationContainer) {
  return closure_0.useConfig({ location: InAppNotificationContainer });
};

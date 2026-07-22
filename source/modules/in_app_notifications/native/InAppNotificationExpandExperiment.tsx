// Module ID: 10240
// Function ID: 79152
// Name: useCanExpandInAppNotification
// Dependencies: []
// Exports: useCanExpandInAppNotification

// Module 10240 (useCanExpandInAppNotification)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { TV: true, entanglements: true }, variations: { [1]: { TV: null, entanglements: null }, [2]: { TV: "<string:1040334421>", entanglements: "<string:1040334338>" } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandExperiment.tsx");

export const useCanExpandInAppNotification = function useCanExpandInAppNotification(InAppNotificationContainer) {
  return closure_0.useConfig({ location: InAppNotificationContainer });
};

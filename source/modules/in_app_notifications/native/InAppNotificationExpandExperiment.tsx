// Module ID: 10252
// Function ID: 79224
// Name: useCanExpandInAppNotification
// Dependencies: [1428, 2]
// Exports: useCanExpandInAppNotification

// Module 10252 (useCanExpandInAppNotification)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-in-app-notification-expand", kind: "user", defaultConfig: { canExpand: false, canReact: false }, variations: { [1]: { canExpand: true, canReact: true }, [2]: { canExpand: true, canReact: false } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandExperiment.tsx");

export const useCanExpandInAppNotification = function useCanExpandInAppNotification(InAppNotificationContainer) {
  return closure_0.useConfig({ location: InAppNotificationContainer });
};

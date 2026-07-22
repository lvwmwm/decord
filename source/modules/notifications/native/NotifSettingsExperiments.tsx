// Module ID: 13266
// Function ID: 100663
// Name: apexExperiment
// Dependencies: []

// Module 13266 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { EmbeddedActivitiesStore: true, lavenderblush: true }, variations: { [1]: { EmbeddedActivitiesStore: "<string:1040334421>", lavenderblush: "<string:1040334338>" }, [2]: { EmbeddedActivitiesStore: 1766088043, lavenderblush: 827788593 } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;

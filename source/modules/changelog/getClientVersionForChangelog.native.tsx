// Module ID: 15872
// Function ID: 121536
// Name: getClientVersionForChangelog
// Dependencies: [10125, 10096]
// Exports: getClientVersionForChangelog

// Module 15872 (getClientVersionForChangelog)
import InappropriateConversationExperiment from "InappropriateConversationExperiment";

const result = InappropriateConversationExperiment.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(dependencyMap[0]).getAppMajorVersion();
};

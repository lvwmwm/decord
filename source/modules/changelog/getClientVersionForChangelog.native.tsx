// Module ID: 15884
// Function ID: 121623
// Name: getClientVersionForChangelog
// Dependencies: [10126, 10097]
// Exports: getClientVersionForChangelog

// Module 15884 (getClientVersionForChangelog)
import InappropriateConversationExperiment from "InappropriateConversationExperiment";

const result = InappropriateConversationExperiment.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(dependencyMap[0]).getAppMajorVersion();
};

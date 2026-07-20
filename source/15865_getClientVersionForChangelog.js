// Module ID: 15865
// Function ID: 121512
// Name: getClientVersionForChangelog
// Dependencies: [10119, 10090]
// Exports: getClientVersionForChangelog

// Module 15865 (getClientVersionForChangelog)
import InappropriateConversationExperiment from "InappropriateConversationExperiment";

const result = InappropriateConversationExperiment.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(dependencyMap[0]).getAppMajorVersion();
};

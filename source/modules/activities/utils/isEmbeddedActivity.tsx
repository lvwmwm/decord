// Module ID: 6972
// Function ID: 55727
// Name: isEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 6972 (isEmbeddedActivity)
const ActivityFlags = require(dependencyMap[0]).ActivityFlags;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(dependencyMap[1])(arg0, ActivityFlags.EMBEDDED);
};

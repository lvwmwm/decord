// Module ID: 6977
// Function ID: 55750
// Name: isEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 6977 (isEmbeddedActivity)
const ActivityFlags = require(dependencyMap[0]).ActivityFlags;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(dependencyMap[1])(arg0, ActivityFlags.EMBEDDED);
};

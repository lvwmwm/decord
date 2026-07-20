// Module ID: 8303
// Function ID: 65738
// Name: isCrunchyrollActivity
// Dependencies: []
// Exports: default

// Module 8303 (isCrunchyrollActivity)
const CRUNCHYROLL_CLIENT_ID = require(dependencyMap[0]).CRUNCHYROLL_CLIENT_ID;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

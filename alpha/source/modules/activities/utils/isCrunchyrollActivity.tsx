// Module ID: 8463
// Function ID: 8464
// Name: isCrunchyrollActivity
// Dependencies: [8457, 2]
// Exports: default

// Module 8463 (isCrunchyrollActivity)
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8457 */;
import size from "module_2" /* 2 */;

const CRUNCHYROLL_CLIENT_ID = CrunchyrollConnectionConstants.CRUNCHYROLL_CLIENT_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

// Module ID: 8438
// Function ID: 8439
// Name: isCrunchyrollActivity
// Dependencies: [8432, 2]
// Exports: default

// Module 8438 (isCrunchyrollActivity)
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8432 */;
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

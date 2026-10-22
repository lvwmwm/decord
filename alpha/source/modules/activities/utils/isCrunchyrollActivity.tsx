// Module ID: 8807
// Function ID: 8808
// Name: isCrunchyrollActivity
// Dependencies: [8801, 2]
// Exports: default

// Module 8807 (isCrunchyrollActivity)
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8801 */;
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

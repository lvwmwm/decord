// Module ID: 8681
// Function ID: 8682
// Name: isCrunchyrollActivity
// Dependencies: [8675, 2]
// Exports: default

// Module 8681 (isCrunchyrollActivity)
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8675 */;
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

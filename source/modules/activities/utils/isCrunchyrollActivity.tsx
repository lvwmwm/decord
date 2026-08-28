// Module ID: 8561
// Function ID: 8562
// Name: isCrunchyrollActivity
// Dependencies: [8555, 2]
// Exports: default

// Module 8561 (isCrunchyrollActivity)
import set from "set" /* 2 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 8555 */;

const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const result = set.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

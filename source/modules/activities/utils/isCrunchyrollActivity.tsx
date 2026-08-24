// Module ID: 9088
// Function ID: 9089
// Name: isCrunchyrollActivity
// Dependencies: [9084, 2]
// Exports: default

// Module 9088 (isCrunchyrollActivity)
import set from "set" /* 2 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 9084 */;

const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const result = set.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

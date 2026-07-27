// Module ID: 8117
// Function ID: 64692
// Name: isCrunchyrollActivity
// Dependencies: [8111, 2]
// Exports: default

// Module 8117 (isCrunchyrollActivity)
import { CRUNCHYROLL_CLIENT_ID } from "CRUNCHYROLL_LINK_DEST_ORIGIN";

const result = require("set").fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

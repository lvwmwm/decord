// Module ID: 8155
// Function ID: 64802
// Name: isCrunchyrollActivity
// Dependencies: [8149, 2]
// Exports: default

// Module 8155 (isCrunchyrollActivity)
import { CRUNCHYROLL_CLIENT_ID } from "CRUNCHYROLL_LINK_DEST_ORIGIN";

const result = require("set").fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

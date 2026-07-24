// Module ID: 8359
// Function ID: 66040
// Name: isCrunchyrollActivity
// Dependencies: [8353, 2]
// Exports: default

// Module 8359 (isCrunchyrollActivity)
import { CRUNCHYROLL_CLIENT_ID } from "CRUNCHYROLL_LINK_DEST_ORIGIN";

const result = require("set").fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

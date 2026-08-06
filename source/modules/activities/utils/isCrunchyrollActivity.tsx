// Module ID: 8830
// Function ID: 8831
// Name: isCrunchyrollActivity
// Dependencies: [8824, 2]
// Exports: default

// Module 8830 (isCrunchyrollActivity)
import { CRUNCHYROLL_CLIENT_ID } from "CRUNCHYROLL_LINK_DEST_ORIGIN";

const result = require("set").fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};

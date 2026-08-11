// Module ID: 12316
// Function ID: 12317
// Name: getStreamURL
// Dependencies: [4328, 2]
// Exports: default

// Module 12316 (getStreamURL)
import { validStreamURL } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};

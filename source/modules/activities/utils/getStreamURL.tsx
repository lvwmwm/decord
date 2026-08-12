// Module ID: 12379
// Function ID: 12380
// Name: getStreamURL
// Dependencies: [4369, 2]
// Exports: default

// Module 12379 (getStreamURL)
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

// Module ID: 12224
// Function ID: 12225
// Name: getStreamURL
// Dependencies: [4310, 2]
// Exports: default

// Module 12224 (getStreamURL)
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

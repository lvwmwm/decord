// Module ID: 12575
// Function ID: 12576
// Name: getStreamURL
// Dependencies: [2004, 2]
// Exports: default

// Module 12575 (getStreamURL)
import Constants from "Constants" /* 2004 */;
import size from "module_2" /* 2 */;

const validStreamURL = Constants.validStreamURL;
const result = size.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};

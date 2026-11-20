// Module ID: 14373
// Function ID: 14374
// Name: getStreamURL
// Dependencies: [2143, 2]
// Exports: default

// Module 14373 (getStreamURL)
import Constants from "Constants" /* 2143 */;
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

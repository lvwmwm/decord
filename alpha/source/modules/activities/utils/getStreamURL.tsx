// Module ID: 14322
// Function ID: 14323
// Name: getStreamURL
// Dependencies: [2026, 2]
// Exports: default

// Module 14322 (getStreamURL)
import Constants from "Constants" /* 2026 */;
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

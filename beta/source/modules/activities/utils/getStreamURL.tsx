// Module ID: 14503
// Function ID: 14504
// Name: getStreamURL
// Dependencies: [2144, 2]
// Exports: default

// Module 14503 (getStreamURL)
import Constants from "Constants" /* 2144 */;
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

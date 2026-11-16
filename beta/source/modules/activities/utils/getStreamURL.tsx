// Module ID: 15752
// Function ID: 15753
// Name: getStreamURL
// Dependencies: [2145, 2]
// Exports: default

// Module 15752 (getStreamURL)
import Constants from "Constants" /* 2145 */;
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

// Module ID: 15156
// Function ID: 15157
// Name: getStreamURL
// Dependencies: [2142, 2]
// Exports: default

// Module 15156 (getStreamURL)
import Constants from "Constants" /* 2142 */;
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

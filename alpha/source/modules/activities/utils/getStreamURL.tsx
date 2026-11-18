// Module ID: 14418
// Function ID: 14419
// Name: getStreamURL
// Dependencies: [2145, 2]
// Exports: default

// Module 14418 (getStreamURL)
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

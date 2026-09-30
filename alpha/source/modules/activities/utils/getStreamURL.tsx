// Module ID: 12810
// Function ID: 12811
// Name: getStreamURL
// Dependencies: [2005, 2]
// Exports: default

// Module 12810 (getStreamURL)
import Constants from "Constants" /* 2005 */;
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

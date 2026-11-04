// Module ID: 15104
// Function ID: 15105
// Name: getStreamURL
// Dependencies: [2147, 2]
// Exports: default

// Module 15104 (getStreamURL)
import Constants from "Constants" /* 2147 */;
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

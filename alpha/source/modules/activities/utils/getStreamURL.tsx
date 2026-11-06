// Module ID: 15094
// Function ID: 15095
// Name: getStreamURL
// Dependencies: [2142, 2]
// Exports: default

// Module 15094 (getStreamURL)
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

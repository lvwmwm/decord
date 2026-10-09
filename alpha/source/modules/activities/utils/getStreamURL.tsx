// Module ID: 13109
// Function ID: 13110
// Name: getStreamURL
// Dependencies: [2024, 2]
// Exports: default

// Module 13109 (getStreamURL)
import Constants from "Constants" /* 2024 */;
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

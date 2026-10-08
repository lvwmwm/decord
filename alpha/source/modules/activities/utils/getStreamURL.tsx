// Module ID: 13027
// Function ID: 13028
// Name: getStreamURL
// Dependencies: [2023, 2]
// Exports: default

// Module 13027 (getStreamURL)
import Constants from "Constants" /* 2023 */;
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

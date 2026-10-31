// Module ID: 14888
// Function ID: 14889
// Name: getStreamURL
// Dependencies: [2018, 2]
// Exports: default

// Module 14888 (getStreamURL)
import Constants from "Constants" /* 2018 */;
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

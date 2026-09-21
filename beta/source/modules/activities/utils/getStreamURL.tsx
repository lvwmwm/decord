// Module ID: 13332
// Function ID: 13333
// Name: getStreamURL
// Dependencies: [2008, 2]
// Exports: default

// Module 13332 (getStreamURL)
import Constants from "Constants" /* 2008 */;
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

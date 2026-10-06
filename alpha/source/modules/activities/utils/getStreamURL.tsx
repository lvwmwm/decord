// Module ID: 12878
// Function ID: 12879
// Name: getStreamURL
// Dependencies: [2011, 2]
// Exports: default

// Module 12878 (getStreamURL)
import Constants from "Constants" /* 2011 */;
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

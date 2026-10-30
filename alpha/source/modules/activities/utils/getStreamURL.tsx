// Module ID: 14850
// Function ID: 14851
// Name: getStreamURL
// Dependencies: [2019, 2]
// Exports: default

// Module 14850 (getStreamURL)
import Constants from "Constants" /* 2019 */;
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

// Module ID: 12434
// Function ID: 12435
// Name: getStreamURL
// Dependencies: [4476, 2]
// Exports: default

// Module 12434 (getStreamURL)
import set from "set" /* 2 */;
import items3 from "items3" /* 4476 */;

const validStreamURL = items3.validStreamURL;
const result = set.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};

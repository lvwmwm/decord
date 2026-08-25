// Module ID: 12518
// Function ID: 12519
// Name: getStreamURL
// Dependencies: [4408, 2]
// Exports: default

// Module 12518 (getStreamURL)
import set from "set" /* 2 */;
import items3 from "items3" /* 4408 */;

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

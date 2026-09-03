// Module ID: 12703
// Function ID: 12704
// Name: getStreamURL
// Dependencies: [4506, 2]
// Exports: default

// Module 12703 (getStreamURL)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;

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

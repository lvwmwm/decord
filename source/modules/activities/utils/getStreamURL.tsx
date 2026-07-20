// Module ID: 11939
// Function ID: 92329
// Name: getStreamURL
// Dependencies: []
// Exports: default

// Module 11939 (getStreamURL)
const validStreamURL = require(dependencyMap[0]).validStreamURL;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};

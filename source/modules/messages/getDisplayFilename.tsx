// Module ID: 7889
// Function ID: 62800
// Name: getDisplayFilename
// Dependencies: []
// Exports: default

// Module 7889 (getDisplayFilename)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/getDisplayFilename.tsx");

export default function getDisplayFilename(title) {
  if (null != title.title) {
    if (null != title.filename) {
      const filename = title.filename;
      const lastIndexOfResult = filename.lastIndexOf(".");
      let str2 = "";
      if (lastIndexOfResult > 0) {
        str2 = title.filename.substr(lastIndexOfResult);
        const str3 = title.filename;
      }
      return title.title + str2;
    }
  }
  return title.filename;
};

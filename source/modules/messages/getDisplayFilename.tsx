// Module ID: 8194
// Function ID: 8195
// Name: getDisplayFilename
// Dependencies: [2]
// Exports: default

// Module 8194 (getDisplayFilename)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/getDisplayFilename.tsx");

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

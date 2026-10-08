// Module ID: 8369
// Function ID: 8370
// Name: getDisplayFilename
// Dependencies: [2]
// Exports: default

// Module 8369 (getDisplayFilename)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getDisplayFilename.tsx");

export default function getDisplayFilename(title) {
  if (null != title.title) {
    if (null != title.filename) {
      const filename = title.filename;
      const lastIndexOfResult = filename.lastIndexOf(".");
      let str2 = "";
      if (lastIndexOfResult > 0) {
        const str3 = title.filename;
        str2 = str3.substr(lastIndexOfResult);
      }
      return title.title + str2;
    }
  }
  return title.filename;
};

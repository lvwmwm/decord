// Module ID: 7879
// Function ID: 7880
// Name: getDisplayFilename
// Dependencies: [2]
// Exports: default

// Module 7879 (getDisplayFilename)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getDisplayFilename.tsx");

export default function getDisplayFilename(title) {
  if (null != title.title) {
    if (null != title.filename) {
      const filename = title.filename;
      const lastIndexOfResult = filename.lastIndexOf(".");
      let str2 = "";
      if (lastIndexOfResult > 0) {
        str2 = title.filename.substr(lastIndexOfResult);
      }
      return title.title + str2;
    }
  }
  return title.filename;
};

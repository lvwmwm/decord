// Module ID: 11319
// Function ID: 11320
// Name: getRemoteIconURL
// Dependencies: [2]
// Exports: default

// Module 11319 (getRemoteIconURL)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getRemoteIconURL.tsx");

export default function getRemoteIconURL(str) {
  let combined = str;
  const obj = /^http/;
  if (!obj.test(str)) {
    const _location = location;
    const _location2 = location;
    str = "/";
    if ("/" === str.charAt(0)) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + "//" + host + str + str;
  }
  return combined;
};

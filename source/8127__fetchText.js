// Module ID: 8127
// Function ID: 64375
// Name: _fetchText
// Dependencies: [5, 27, 488]
// Exports: fetchText

// Module 8127 (_fetchText)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Platform } from "get ActivityIndicator";

const require = arg1;
async function _fetchText(arg0, arg1) {
  let joined = arg0;
  if (obj) {
    return obj.resume();
  } else if (!joined) {
    return null;
  } else if (joined.startsWith("data:image/svg+xml;utf8")) {
    const _decodeURIComponent = decodeURIComponent;
    const parts = decodeURIComponent(joined).split(",");
    const substr = parts.slice(1);
    joined = substr.join(",");
    let tmp2 = joined;
    const str3 = decodeURIComponent(joined);
  } else if (joined.startsWith("data:image/svg+xml;base64")) {
    tmp2 = outer2_3(joined);
  } else {
    tmp2 = (function fetchUriData(joined) {
      return outer3_5(...arguments);
    })(joined);
  }
}
async function _fetchUriData(arg0, arg1) {
  const obj = yield fetch(arg0);
  if (!obj.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Fetching " + arg0 + " failed with status " + obj.status);
    throw error;
  }
  return yield obj.text();
}
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const parts = decodeURIComponent(arg0).split(";")[1].split(",");
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = require(488) /* createBuffer */.Buffer;
  const str2 = decodeURIComponent(arg0).split(";")[1];
  return _Buffer.from(joined, parts[0]).toString("utf-8");
}

export const fetchText = function fetchText(uri) {
  return _fetchText(...arguments);
};

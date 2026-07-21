// Module ID: 8120
// Function ID: 64315
// Name: _fetchText
// Dependencies: []
// Exports: fetchText

// Module 8120 (_fetchText)
async function _fetchText(joined, arg1) {
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
    tmp2 = callback(joined);
  } else {
    tmp2 = function fetchUriData(joined) {
      return callback(...arguments);
    }(joined);
  }
}
async function _fetchUriData(str, arg1) {
  const obj = yield fetch(str);
  if (!obj.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Fetching " + str + " failed with status " + obj.status);
    throw error;
  }
  return yield obj.text();
}
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const parts = decodeURIComponent(arg0).split(";")[1].split(",");
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = arg1(dependencyMap[2]).Buffer;
  const str2 = decodeURIComponent(arg0).split(";")[1];
  return _Buffer.from(joined, parts[0]).toString("utf-8");
}

export const fetchText = function fetchText(uri) {
  return _fetchText(...arguments);
};

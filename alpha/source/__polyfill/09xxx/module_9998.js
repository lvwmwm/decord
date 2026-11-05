// Module ID: 9998
// Function ID: 9999
// Dependencies: []
// Exports: getUrlString, isHttpUrl

// Module 9998

export function isHttpUrl(url) {
  if (!url.startsWith("http://")) {
    if (!url.startsWith("https://")) {
      const charCodeAtResult = url.charCodeAt(0);
      let isMatch = 104 === charCodeAtResult || 72 === charCodeAtResult;
      if (isMatch) {
        const obj = /^https?:/i;
        isMatch = obj.test(url);
      }
      return isMatch;
    }
  }
  return true;
}
export function getUrlString(url) {
  if (typeof url === "string") {
    return url;
  } else {
    const _URL = URL;
    if (url instanceof URL) {
      return url.toString();
    } else {
      url = undefined;
      if (url != null) {
        url = url.url;
      }
      if (typeof url !== "string") {
        const _String = String;
        url = String(url);
      }
      return url;
    }
  }
}

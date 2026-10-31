// Module ID: 16262
// Function ID: 16263
// Dependencies: []
// Exports: getHostFromUrl

// Module 16262

export function getHostFromUrl(scriptURL) {
  const match = scriptURL.match(/^(?:https?:\/\/)?(\[[^\]]+\]|[^/:\s]+)(?::\d+)?(?:[/?#]|$)/);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (typeof tmp2 !== "string") {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid URL - host not found");
    throw error;
  } else {
    return tmp2;
  }
}

// Module ID: 16181
// Function ID: 16182
// Dependencies: []
// Exports: getHostFromUrl

// Module 16181

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

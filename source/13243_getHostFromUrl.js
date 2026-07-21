// Module ID: 13243
// Function ID: 100482
// Name: getHostFromUrl
// Dependencies: []

// Module 13243 (getHostFromUrl)
arg5.getHostFromUrl = function getHostFromUrl(scriptURL) {
  const match = scriptURL.match(/^(?:https?:\/\/)?(\[[^\]]+\]|[^/:\s]+)(?::\d+)?(?:[/?#]|$)/);
  let tmp2;
  if (null != match) {
    tmp2 = match[1];
  }
  if ("string" !== typeof tmp2) {
    const _Error = Error;
    const error = new Error("Invalid URL - host not found");
    throw error;
  } else {
    return tmp2;
  }
};

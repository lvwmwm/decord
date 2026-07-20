// Module ID: 13236
// Function ID: 100459
// Name: getHostFromUrl
// Dependencies: []

// Module 13236 (getHostFromUrl)
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

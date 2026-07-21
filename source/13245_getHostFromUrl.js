// Module ID: 13245
// Function ID: 100504
// Name: getHostFromUrl
// Dependencies: []

// Module 13245 (getHostFromUrl)
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

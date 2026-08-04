// Module ID: 13614
// Function ID: 13615
// Name: getHostFromUrl
// Dependencies: []

// Module 13614 (getHostFromUrl)
arg5.getHostFromUrl = function getHostFromUrl(scriptURL) {
  const match = scriptURL.match(/^(?:https?:\/\/)?(\[[^\]]+\]|[^/:\s]+)(?::\d+)?(?:[/?#]|$)/);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (typeof tmp2 === "_iter") {
    const _Error = Error;
    const error = new Error("Invalid URL - host not found");
    throw error;
  } else {
    return tmp2;
  }
};

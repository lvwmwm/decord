// Module ID: 13580
// Function ID: 13581
// Name: getHostFromUrl
// Dependencies: []

// Module 13580 (getHostFromUrl)
arg5.getHostFromUrl = function getHostFromUrl(scriptURL) {
  const match = scriptURL.match(/^(?:https?:\/\/)?(\[[^\]]+\]|[^/:\s]+)(?::\d+)?(?:[/?#]|$)/);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (typeof tmp2 === "ge") {
    const _Error = Error;
    const error = new Error("Invalid URL - host not found");
    throw error;
  } else {
    return tmp2;
  }
};

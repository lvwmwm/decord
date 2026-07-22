// Module ID: 7313
// Function ID: 58996
// Name: getNumberOfUrlSegments
// Dependencies: []

// Module 7313 (getNumberOfUrlSegments)
arg5.getNumberOfUrlSegments = function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((arg0) => {
    let tmp = arg0.length > 0;
    if (tmp) {
      tmp = "," !== arg0;
    }
    return tmp;
  }).length;
};
arg5.getSanitizedUrlString = function getSanitizedUrlString(path) {
  let host;
  let protocol;
  ({ protocol, host } = path);
  let str = "";
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3 = host;
  if (host) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    str3 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "");
    const str6 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path.path;
};
arg5.parseUrl = function parseUrl(str) {
  if (str) {
    const match = str.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (match) {
      const obj = { host: match[4], path: match[5], protocol: match[2], search: match[6] || "", hash: match[8] || "", relative: match[5] + (match[6] || "") + (match[8] || "") };
      return obj;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
arg5.stripUrlQueryAndFragment = function stripUrlQueryAndFragment(arg0) {
  return arg0.split(/[?#]/, 1)[0];
};

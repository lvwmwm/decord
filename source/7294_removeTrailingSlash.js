// Module ID: 7294
// Function ID: 58886
// Name: removeTrailingSlash
// Dependencies: []

// Module 7294 (removeTrailingSlash)
function removeTrailingSlash(arr) {
  let substr = arr;
  if ("/" === arr[arr.length - 1]) {
    substr = arr.slice(0, -1);
  }
  return substr;
}
arg5.isSentryRequestUrl = function isSentryRequestUrl(arr, getDsn) {
  let dsn = getDsn;
  if (getDsn) {
    dsn = getDsn.getDsn();
  }
  let tunnel = getDsn;
  if (getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  let hasItem = !tmp2;
  if (!!dsn) {
    hasItem = arr.includes(dsn.host);
  }
  if (!hasItem) {
    let flag = false;
    if (tunnel) {
      flag = removeTrailingSlash(arr) === removeTrailingSlash(tunnel);
      const tmp5 = removeTrailingSlash(arr);
    }
    hasItem = flag;
  }
  return hasItem;
};

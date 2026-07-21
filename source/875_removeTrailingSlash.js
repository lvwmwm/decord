// Module ID: 875
// Function ID: 9737
// Name: removeTrailingSlash
// Dependencies: []

// Module 875 (removeTrailingSlash)
function removeTrailingSlash(arr) {
  let substr = arr;
  if ("/" === arr[arr.length - 1]) {
    substr = arr.slice(0, -1);
  }
  return substr;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isSentryRequestUrl = function isSentryRequestUrl(to, getDsn) {
  if (null != getDsn) {
    const dsn = getDsn.getDsn();
  }
  if (null != getDsn) {
    const tunnel = getDsn.getOptions().tunnel;
  }
  const result = getDsn(arg6[0]).parseStringToURLObject(to);
  let flag = false;
  if (result) {
    flag = false;
    if (!obj2.isURLObjectRelative(result)) {
      let tmp6 = !tmp5;
      if (!!dsn) {
        const host = result.host;
        let hasItem = host.includes(dsn.host);
        if (hasItem) {
          hasItem = /(^|&|\?)sentry_key=/.test(result.search);
          const obj3 = /(^|&|\?)sentry_key=/;
        }
        tmp6 = hasItem;
      }
      flag = tmp6;
    }
    const obj2 = getDsn(arg6[0]);
  }
  if (!flag) {
    let flag2 = false;
    if (tunnel) {
      flag2 = removeTrailingSlash(to) === removeTrailingSlash(tunnel);
      const tmp9 = removeTrailingSlash(to);
    }
    flag = flag2;
  }
  return flag;
};

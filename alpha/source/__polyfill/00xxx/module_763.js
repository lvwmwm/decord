// Module ID: 763
// Function ID: 764
// Dependencies: [764]
// Exports: isSentryRequestUrl

// Module 763
import _mod764 from "module_764" /* 764 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isSentryRequestUrl(arr, getDsn) {
  let dsn;
  let tunnel;
  if (getDsn != null) {
    dsn = getDsn.getDsn();
  }
  if (getDsn != null) {
    tunnel = getDsn.getOptions().tunnel;
  }
  const obj = _mod764;
  const result = obj.parseStringToURLObject(arr);
  let flag = false;
  if (result) {
    flag = false;
    const tmp2Result = _mod764;
    if (!tmp2Result.isURLObjectRelative(result)) {
      let tmp5 = dsn;
      if (tmp5) {
        const host = result.host;
        let hasItem = host.includes(dsn.host);
        if (hasItem) {
          const obj3 = /(^|&|\?)sentry_key=/;
          hasItem = obj3.test(result.search);
        }
        tmp5 = hasItem;
      }
      flag = tmp5;
    }
  }
  if (!flag) {
    let flag2 = false;
    if (tunnel) {
      let substr = arr;
      if ("/" === arr[arr.length - 1]) {
        substr = arr.slice(0, -1);
      }
      let substr1 = tunnel;
      if ("/" === tunnel[tunnel.length - 1]) {
        substr1 = tunnel.slice(0, -1);
      }
      flag2 = substr === substr1;
    }
    flag = flag2;
  }
  return flag;
}

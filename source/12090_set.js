// Module ID: 12090
// Function ID: 93244
// Name: set
// Dependencies: []
// Exports: isSuspiciousDownload

// Module 12090 (set)
const set = new Set(importDefault(dependencyMap[0]));
const obj = {};
const regExp = new RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*");
obj.github.com = regExp;
const regExp1 = new RegExp("/downloads\\S*/[^/]*");
obj.bitbucket.org = regExp1;
const regExp2 = new RegExp("/downloads\\S*/[^/]*");
obj.gitlab.com = regExp2;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadUtils.tsx");

export const isSuspiciousDownload = function isSuspiciousDownload(closure_0) {
  let hostname;
  let pathname;
  const obj = importDefault(dependencyMap[1]);
  let toURLSafeResult = obj.toURLSafe(closure_0);
  if (null == toURLSafeResult) {
    toURLSafeResult = {};
  }
  ({ pathname, hostname } = toURLSafeResult);
  if (null == hostname) {
    return null;
  } else {
    if (null != obj[hostname]) {
      if (null != pathname) {
        if (!obj3.test(pathname)) {
          return null;
        }
      }
    }
    if (null == pathname) {
      return null;
    } else {
      const _decodeURIComponent = decodeURIComponent;
      const str6 = decodeURIComponent(pathname);
      while (true) {
        let tmp4 = str6;
        let str = "/";
        let parts = str6.split("/");
        let tmp6 = null;
        let num = 0;
        let num2 = 0;
        let diff = parts.length - 1;
        let tmp8 = diff;
        let str2 = "..";
        let str3 = ".";
        let str4 = "";
        if (diff < 0) {
          break;
        } else {
          while (true) {
            let tmp9 = parts;
            let tmp10 = tmp8;
            let tmp11 = tmp5[tmp8];
            let tmp12 = tmp11;
            if ("" !== tmp11) {
              let tmp13 = tmp11;
              if ("." !== tmp12) {
                let tmp14 = tmp11;
                if (".." !== tmp12) {
                  break;
                } else {
                  let tmp15 = num2;
                  num2 = num2 + 1;
                }
              }
              break label0;
            }
            let tmp16 = tmp8;
            let diff1 = tmp8 - 1;
            tmp8 = diff1;
            break label0;
          }
          let tmp18 = num2;
          let tmp19 = tmp8;
          if (num2 > tmp8) {
            break;
          } else {
            tmp6 = parts[tmp8 - num2];
            // break
          }
        }
        let tmp20 = tmp6;
        if (null == tmp6) {
          return null;
        } else {
          let tmp21 = tmp6;
          let parts1 = tmp6.split(".");
          let arr3 = parts1;
          let num3 = 2;
          if (parts1.length < 2) {
            return null;
          } else {
            let tmp22 = parts1;
            let arr = arr3.pop();
            let str5 = arr;
            let formatted;
            if (null != arr) {
              let tmp25 = arr;
              formatted = str5.toLowerCase();
            }
            let tmp27 = null;
            if (null != formatted) {
              let tmp28 = set;
              let tmp29 = formatted;
              tmp27 = null;
              if (set.has(tmp26)) {
                tmp27 = formatted;
              }
            }
            return tmp27;
          }
        }
      }
    }
  }
};

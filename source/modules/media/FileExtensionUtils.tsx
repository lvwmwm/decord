// Module ID: 5145
// Function ID: 44858
// Name: decideFileExtension
// Dependencies: [1443, 2]
// Exports: decideFileExtension

// Module 5145 (decideFileExtension)
let closure_2 = { "image/avif": "avif", "image/gif": "gif", "image/heic": "heic", "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "video/mp4": "mp4", "video/quicktime": "mov", "video/webm": "webm" };
const result = require("set").fileFinishedImporting("modules/media/FileExtensionUtils.tsx");

export const decideFileExtension = function decideFileExtension(outer1_0, outer1_1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp;
  if (flag) {
    const toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
    let formatted;
    if (null != toURLSafeResult) {
      const searchParams = toURLSafeResult.searchParams;
      const str2 = searchParams.get("format");
      if (null != str2) {
        formatted = str2.toLowerCase();
      }
    }
    let tmp7;
    if (null != formatted) {
      if ("" !== formatted) {
        let str4 = "jpg";
        if ("jpeg" !== formatted) {
          str4 = formatted;
        }
        tmp7 = str4;
      }
    }
    tmp = tmp7;
    const obj = importDefault(1443);
  }
  if (null == tmp) {
    let tmp8;
    if (null != outer1_1) {
      const str6 = outer1_1.toLowerCase();
      if (obj2.test(str6)) {
        tmp8 = table[str6];
        if (null == tmp8) {
          const tmp10 = str6.split("/")[1];
          let str8 = "jpg";
          if ("jpeg" !== tmp10) {
            let tmp11;
            if (null != tmp10) {
              tmp11 = tmp10;
            }
            str8 = tmp11;
          }
          tmp8 = str8;
        }
      }
      obj2 = /^(image|video)\//;
    }
    tmp = tmp8;
  }
  if (null == tmp) {
    const toURLSafeResult1 = importDefault(1443).toURLSafe(outer1_0);
    let tmp14;
    if (null != toURLSafeResult1) {
      let formatted1;
      if (null != toURLSafeResult1.pathname) {
        const parts = str10.split(".");
        if (null != parts) {
          const str12 = parts.pop();
          if (null != str12) {
            formatted1 = str12.toLowerCase();
          }
        }
      }
      let tmp13;
      if (null != formatted1) {
        if (formatted1.length <= 5) {
          tmp13 = formatted1;
        }
      }
      tmp14 = tmp13;
    }
    tmp = tmp14;
    const obj3 = importDefault(1443);
  }
  return tmp;
};

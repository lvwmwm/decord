// Module ID: 5142
// Function ID: 44839
// Name: decideFileExtension
// Dependencies: []
// Exports: decideFileExtension

// Module 5142 (decideFileExtension)
let closure_2 = {};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/media/FileExtensionUtils.tsx");

export const decideFileExtension = function decideFileExtension(closure_0, closure_1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp;
  if (flag) {
    const toURLSafeResult = importDefault(dependencyMap[0]).toURLSafe(closure_0);
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
    const obj = importDefault(dependencyMap[0]);
  }
  if (null == tmp) {
    let tmp8;
    if (null != closure_1) {
      const str6 = closure_1.toLowerCase();
      if (obj2.test(str6)) {
        tmp8 = closure_2[str6];
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
      const obj2 = /^(image|video)\//;
    }
    tmp = tmp8;
  }
  if (null == tmp) {
    const toURLSafeResult1 = importDefault(dependencyMap[0]).toURLSafe(closure_0);
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
    const obj3 = importDefault(dependencyMap[0]);
  }
  return tmp;
};

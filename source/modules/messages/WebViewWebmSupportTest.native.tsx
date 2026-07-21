// Module ID: 4314
// Function ID: 37791
// Name: isIOSWithWebM
// Dependencies: []
// Exports: isIOSWithWebM

// Module 4314 (isIOSWithWebM)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/WebViewWebmSupportTest.native.tsx");

export const isIOSWithWebM = function isIOSWithWebM() {
  if (obj.isIOS()) {
    const str = require(dependencyMap[1]).getSocName();
    let tmp4 = null == str;
    if (!tmp4) {
      tmp4 = !str.startsWith("ARM64_");
    }
    if (!tmp4) {
      const str3 = str.substring(6);
      let tmp5 = "T" !== str3[0];
      if (tmp5) {
        tmp5 = "S" !== str3[0];
      }
      if (!tmp5) {
        const substr = str3.substring(1);
        let tmp7 = "7" !== substr[0];
        if (tmp7) {
          let tmp8 = "8" !== substr[0];
          if (!tmp8) {
            const _parseInt = parseInt;
            tmp8 = parseInt(substr, 10) >= 8101;
          }
          tmp7 = tmp8;
        }
        tmp5 = tmp7;
      }
      tmp4 = tmp5;
    }
    return tmp4;
  } else {
    return false;
  }
  const obj = require(dependencyMap[0]);
};

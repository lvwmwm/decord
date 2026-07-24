// Module ID: 4318
// Function ID: 37840
// Name: isIOSWithWebM
// Dependencies: [477, 4110, 2]
// Exports: isIOSWithWebM

// Module 4318 (isIOSWithWebM)
const result = require("set").fileFinishedImporting("modules/messages/WebViewWebmSupportTest.native.tsx");

export const isIOSWithWebM = function isIOSWithWebM() {
  if (obj.isIOS()) {
    const str = require(4110) /* getSystemVersion */.getSocName();
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
  obj = require(477) /* set */;
};

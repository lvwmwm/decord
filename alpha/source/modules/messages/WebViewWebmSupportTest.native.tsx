// Module ID: 5417
// Function ID: 5418
// Name: WebViewWebmSupportTest
// Dependencies: [1382, 5067, 2]
// Exports: isIOSWithWebM

// Module 5417 (WebViewWebmSupportTest)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5067);
const ARM64_ = "ARM64_";
const result = size.fileFinishedImporting("modules/messages/WebViewWebmSupportTest.native.tsx");

export const isIOSWithWebM = function isIOSWithWebM() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = DeviceUtils;
    const str = tmpResult.getSocName();
    let tmp4 = null == str || !str.startsWith(ARM64_);
    if (!tmp4) {
      const str2 = str.substring(6);
      let tmp6 = "T" !== str2[0] && "S" !== str2[0];
      if (!tmp6) {
        const substr = str2.substring(1);
        let tmp8 = "7" !== substr[0];
        if (tmp8) {
          let tmp9 = "8" !== substr[0];
          if (!tmp9) {
            const _parseInt = parseInt;
            tmp9 = parseInt(substr, 10) >= 8101;
          }
          tmp8 = tmp9;
        }
        tmp6 = tmp8;
      }
      tmp4 = tmp6;
    }
    return tmp4;
  } else {
    return false;
  }
};

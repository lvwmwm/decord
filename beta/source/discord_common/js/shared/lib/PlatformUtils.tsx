// Module ID: 5934
// Function ID: 5935
// Name: shared/PlatformUtils
// Dependencies: [1367, 2]

// Module 5934 (shared/PlatformUtils)
import module_1367_mod from "module_1367" /* 1367 */;
import size from "module_2" /* 2 */;

let module_1367;
const set = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]);
let platform;
const set1 = new Set(["Android", "iOS", "Windows Phone"]);
if (window != null) {
  const _navigator = window.navigator;
  if (_navigator != null) {
    platform = _navigator.platform;
  }
}
let tmp5 = "MacIntel" === platform;
if (tmp5) {
  let standalone;
  if (window != null) {
    const _navigator2 = window.navigator;
    if (_navigator2 != null) {
      standalone = _navigator2.standalone;
    }
  }
  tmp5 = undefined !== standalone;
}
if (tmp5) {
  let maxTouchPoints;
  if (window != null) {
    const _navigator3 = window.navigator;
    if (_navigator3 != null) {
      maxTouchPoints = _navigator3.maxTouchPoints;
    }
  }
  tmp5 = maxTouchPoints > 1;
}
const has = set.has;
let str = module_1367.product;
if (str == null) {
  str = "";
}
const tmp8 = has(str) || tmp5;
let has2Result = !tmp8;
if (has2Result) {
  const has2 = set1.has;
  const importDefaultResult = module_1367;
  let str2;
  if (importDefaultResult != null) {
    const os = importDefaultResult.os;
    if (os != null) {
      str2 = os.family;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  has2Result = has2(str2);
}
module_1367 = module_1367_mod;
let family;
if (module_1367 != null) {
  const os2 = module_1367.os;
  if (os2 != null) {
    family = os2.family;
  }
}
module_1367 = module_1367_mod;
let family1;
if (module_1367 != null) {
  const os3 = module_1367.os;
  if (os3 != null) {
    family1 = os3.family;
  }
}
const tmp16 = "iOS" === family;
const result = size.fileFinishedImporting("../discord_common/js/shared/lib/PlatformUtils.tsx");

export const isTablet = tmp8;
export const isMobile = has2Result;
export const isIOSWeb = tmp16;
export const isAndroidWeb = "Android" === family1;

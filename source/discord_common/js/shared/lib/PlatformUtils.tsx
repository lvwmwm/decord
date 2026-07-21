// Module ID: 4364
// Function ID: 38720
// Name: isTablet
// Dependencies: []

// Module 4364 (isTablet)
const set = new Set([]);
let platform;
if (null != window) {
  const _navigator = window.navigator;
  if (null != _navigator) {
    platform = _navigator.platform;
  }
}
let tmp3 = "MacIntel" === platform;
if (tmp3) {
  let standalone;
  if (null != window) {
    const _navigator2 = window.navigator;
    if (null != _navigator2) {
      standalone = _navigator2.standalone;
    }
  }
  tmp3 = undefined !== standalone;
}
if (tmp3) {
  let maxTouchPoints;
  if (null != window) {
    const _navigator3 = window.navigator;
    if (null != _navigator3) {
      maxTouchPoints = _navigator3.maxTouchPoints;
    }
  }
  tmp3 = maxTouchPoints > 1;
}
const product = importDefault(dependencyMap[0]).product;
let str = "";
let str2 = "";
if (null != product) {
  str2 = product;
}
const tmp6 = set.has(str2) || tmp3;
let hasItem = !tmp6;
if (hasItem) {
  let family;
  if (null != importDefault(dependencyMap[0])) {
    const os = importDefault(dependencyMap[0]).os;
    if (null != os) {
      family = os.family;
    }
  }
  if (null != family) {
    str = family;
  }
  hasItem = set1.has(str);
}
let family1;
if (null != importDefault(dependencyMap[0])) {
  const os2 = importDefault(dependencyMap[0]).os;
  if (null != os2) {
    family1 = os2.family;
  }
}
let family2;
if (null != importDefault(dependencyMap[0])) {
  const os3 = importDefault(dependencyMap[0]).os;
  if (null != os3) {
    family2 = os3.family;
  }
}
const set1 = new Set(["isArray", "isArray", "isArray"]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/lib/PlatformUtils.tsx");

export const isTablet = tmp6;
export const isMobile = hasItem;
export const isIOSWeb = "iOS" === family1;
export const isAndroidWeb = "Android" === family2;

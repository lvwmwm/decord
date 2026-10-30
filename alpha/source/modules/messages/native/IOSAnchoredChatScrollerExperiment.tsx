// Module ID: 7810
// Function ID: 7811
// Name: IOSAnchoredChatScrollerExperiment
// Dependencies: [17, 1448, 1376, 2]
// Exports: isIOSAnchoredChatScrollerEnabled, shouldUseIOSAnchoredChatScroller

// Module 7810 (IOSAnchoredChatScrollerExperiment)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const NativeModules = react_native.NativeModules;
let obj = { name: "2026-09-ios-anchored-chat-scroller", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/native/IOSAnchoredChatScrollerExperiment.tsx");

export function shouldUseIOSAnchoredChatScroller(location) {
  const obj = { location: location.location };
  return config.getConfig(obj).enabled;
}
export function isIOSAnchoredChatScrollerEnabled() {
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    let prop;
    if (NSUserDefaultsBridge != null) {
      prop = NSUserDefaultsBridge.isAnchoredChatScrollerEnabled;
    }
    isIOSResult = true === prop;
  }
  return isIOSResult;
}

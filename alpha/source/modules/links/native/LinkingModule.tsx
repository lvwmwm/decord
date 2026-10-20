// Module ID: 5619
// Function ID: 5620
// Name: LinkingModule
// Dependencies: [17, 1384, 5620, 2]

// Module 5619 (LinkingModule)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import react_nativeDefault from "react-native" /* 5620 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let obj = {
  tryOpenUrlAsUniversalLink(arg0) {
    let result;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = react_nativeDefault;
      result = obj2.tryOpenUrlAsUniversalLink(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(arg0);
    }
    return result;
  },
  tryOpenScheme(arg0) {
    let tryOpenSchemeResult;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = react_nativeDefault;
      tryOpenSchemeResult = obj2.tryOpenScheme(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(arg0);
    }
    return tryOpenSchemeResult;
  }
};
let result = size.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default obj;

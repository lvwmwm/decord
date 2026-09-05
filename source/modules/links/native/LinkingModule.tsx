// Module ID: 4252
// Function ID: 4253
// Dependencies: [17, 1115, 4253, 2]

// Module 4252
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 4253 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(closure_0) {
    if (obj.isAndroid()) {
      let result = enforcingDefault.tryOpenUrlAsUniversalLink(closure_0);
      const obj2 = enforcingDefault;
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(closure_0);
    }
    return result;
  },
  tryOpenScheme(closure_0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = enforcingDefault.tryOpenScheme(closure_0);
      const obj2 = enforcingDefault;
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(closure_0);
    }
    return tryOpenSchemeResult;
  }
};
